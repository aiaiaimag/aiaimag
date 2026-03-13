import json
import os
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from urllib.request import urlopen, Request
from urllib.error import URLError
from urllib.parse import quote
import html
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ============================================================
# 코다리 부장 - AI 뉴스 완전 자동화 스크립트 (Option B v2)
# 엔진: Google News RSS (완전 무료, API 키 불필요)
# 번역: MyMemory Translation API (무료, API 키 불필요)
# 기능:
#   - 실시간 AI 뉴스 자동 수집 (영문/한국 뉴스)
#   - 영문 제목 → 한글 자동 번역 (koTitle)
#   - 영문 원본 제목 보존 (enTitle)
#   - 최초발행일 자동 파싱 및 더블체크
#   - 재발행 의심 기사 자동 감지
#   - ai-app.js 자동 업데이트
# ============================================================

# 번역 결과 로컬 캐시 (동일 요청 반복 방지)
_translation_cache = {}

# 발행 이력 파일 경로 (중복 방지용)
HISTORY_FILE = "published_history.json"
# 이력 보관 기간 (일) — 이 기간 내 발행된 제목은 중복으로 판정
HISTORY_RETENTION_DAYS = 14

# ─── RSS 피드 URL 설정 ────────────────────────────────────────

# 2030 취향 저격 AI 뉴스 (생산성, 수익화, 커리어 중심)
AI_NEWS_RSS_EN = [
    "https://news.google.com/rss/search?q=AI+productivity+tools+productivity+hacks&hl=en-US&gl=US&ceid=US:en",
    "https://news.google.com/rss/search?q=AI+side+hustle+monetize+AI&hl=en-US&gl=US&ceid=US:en",
    "https://news.google.com/rss/search?q=AI+career+future+of+work&hl=en-US&gl=US&ceid=US:en",
    "https://news.google.com/rss/search?q=viral+AI+apps+trending+AI&hl=en-US&gl=US&ceid=US:en",
]

# 한국 2030 AI 트렌드 뉴스 (개인 실생활 중심, BORING 필터로 B2B 제외)
AI_NEWS_RSS_KR = [
    # 생산성: AI 활용 꿀팁 (넓은 범위 → BORING 필터가 거름)
    "https://news.google.com/rss/search?q=AI+%ED%99%9C%EC%9A%A9+%EA%BF%80%ED%8C%81&hl=ko&gl=KR&ceid=KR%3Ako",
    # 수익: 부업/수익화
    "https://news.google.com/rss/search?q=AI+%EB%B6%80%EC%97%85+%EC%88%98%EC%9D%B5&hl=ko&gl=KR&ceid=KR%3Ako",
    # 커리어: 취업/이직
    "https://news.google.com/rss/search?q=AI+%EC%B7%A8%EC%97%85+%EC%BB%A4%EB%A6%AC%EC%96%B4&hl=ko&gl=KR&ceid=KR%3Ako",
    # 바이럴: 요즘 유행하는 AI
    "https://news.google.com/rss/search?q=%EC%9A%94%EC%A6%98+%EC%9C%A0%ED%96%89+AI+%EC%95%B1&hl=ko&gl=KR&ceid=KR%3Ako",
    # ChatGPT/클로드 등 대중적 AI 서비스
    "https://news.google.com/rss/search?q=ChatGPT+%ED%99%9C%EC%9A%A9+%EB%B0%A9%EB%B2%95&hl=ko&gl=KR&ceid=KR%3Ako",
]

# 신뢰도 높은 AI 전문 미디어 (출처 가중치 부여)
TRUSTED_SOURCES = {
    "techcrunch": 95,
    "theverge": 93,
    "wired": 92,
    "venturebeat": 91,
    "mit technology review": 90,
    "bloomberg": 94,
    "reuters": 93,
    "the guardian": 88,
    "bbc": 87,
    "aitimes": 85,
    "zdnet": 84,
    "anthropic": 99,
    "openai": 99,
    "google": 96,
    "microsoft": 94,
}

# 높은 바이럴 가능성 키워드 (2030 취미, 업무, 수익 중심)
VIRAL_KEYWORDS = [
    "productivity", "hacks", "earn", "income", "career", "job", "side hustle",
    "free", "limited", "breakthrough", "scary", "insane", "how to", "best",
    "출시", "발표", "부업", "수익", "취업", "연봉", "생산성", "꿀팁", "자동화",
    "무료", "공짜", "충격", "조심", "역대급", "방법", "추천", "난리",
]

# 2030이 지루해하는 기업용/공공 뉴스 키워드 (즉시 제외)
BORING_KEYWORDS = [
    # 세무/재정
    "법인세", "세무", "결산", "세금",
    # B2B/기업용
    "솔루션", "엔터프라이즈", "기업용", "브랜드 전용", "고객사", "B2B", "사업자",
    # 협약/계약
    "협약", "양해각서", "MOU", "체결", "계약", "업무협약",
    # 정부/공공/공공기관
    "위원회", "정부", "국회", "지자체", "공공기관", "산업부", "과기부",
    "지원센터", "재단", "진흥원", "연구원", "청년센터", "고용센터", "일자리재단",
    # 행사/이벤트
    "세미나", "컨퍼런스", "포럼", "학술", "개최", "사전등록",
    # 특정인 대상/홍보성
    "대표님을 위한", "대표를 위한", "심층분석",
    # 영문
    "corporate", "tax", "agreement", "memorandum", "partnership", "government",
    "enterprise", "B2B", "webinar",
]

# ─── RSS 파싱 함수 ────────────────────────────────────────────

def fetch_rss(url, timeout=15):
    """RSS 피드를 가져와서 파싱합니다."""
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (compatible; AIMAGNewsBot/1.0)"
        }
        req = Request(url, headers=headers)
        with urlopen(req, timeout=timeout) as resp:
            raw = resp.read()

        # XML 파싱
        root = ET.fromstring(raw)
        channel = root.find("channel")
        if channel is None:
            return []

        items = []
        for item in channel.findall("item"):
            title_el   = item.find("title")
            link_el    = item.find("link")
            pubdate_el = item.find("pubDate")
            source_el  = item.find("source")
            desc_el    = item.find("description")

            title   = html.unescape(title_el.text.strip())   if title_el   is not None and title_el.text   else ""
            link    = link_el.text.strip()                    if link_el    is not None and link_el.text    else ""
            pubdate = pubdate_el.text.strip()                 if pubdate_el is not None and pubdate_el.text else ""
            source  = html.unescape(source_el.text.strip())  if source_el  is not None and source_el.text  else ""
            desc    = html.unescape(desc_el.text.strip())     if desc_el    is not None and desc_el.text    else ""

            if title and link:
                items.append({
                    "title": title,
                    "link": link,
                    "pubDate": pubdate,
                    "source": source,
                    "description": desc,
                })
        return items

    except URLError as e:
        print(f"FAILED RSS Fetch ({url[:50]}...): {e}")
        return []
    except ET.ParseError as e:
        print(f"FAILED XML Parse ({url[:50]}...): {e}")
        return []


def parse_pub_date(pubdate_str):
    """
    RSS의 pubDate 문자열을 datetime 객체로 변환합니다.
    예: 'Sat, 21 Feb 2026 10:30:00 GMT'
    """
    formats = [
        "%a, %d %b %Y %H:%M:%S %Z",
        "%a, %d %b %Y %H:%M:%S %z",
        "%d %b %Y %H:%M:%S %Z",
    ]
    for fmt in formats:
        try:
            return datetime.strptime(pubdate_str.strip(), fmt).replace(tzinfo=timezone.utc)
        except ValueError:
            continue
    return None


def days_since_published(pubdate_str):
    """최초 발행일로부터 오늘까지의 일수를 반환합니다."""
    pub_dt = parse_pub_date(pubdate_str)
    if pub_dt is None:
        return 0
    now = datetime.now(timezone.utc)
    return max(0, (now - pub_dt).days)


def calculate_viral_rate(item, position, days_old):
    """
    기사의 바이럴 가능성 점수(%)를 계산합니다.
    최소 87%, 최대 99% 범위로 차등 부여.
    """
    score = 87  # 기본 점수 (최소 87% 보장)

    # 출처 신뢰도 가중치
    source_lower = item.get("source", "").lower()
    for key, weight in TRUSTED_SOURCES.items():
        if key in source_lower:
            score += 3  # 신뢰 출처 보너스
            break

    # RSS 순위 (앞에 있을수록 높은 점수)
    position_bonus = max(0, 5 - position)
    score += position_bonus

    # 키워드 바이럴 보너스 (복수 매칭 허용)
    title_lower = item.get("title", "").lower()
    keyword_hits = 0
    for kw in VIRAL_KEYWORDS:
        if kw.lower() in title_lower:
            keyword_hits += 1
    score += min(keyword_hits * 2, 6)  # 최대 +6

    # 지루한 뉴스 즉시 제외 (2030 타겟에 부적합)
    for bkw in BORING_KEYWORDS:
        if bkw.lower() in title_lower:
            return "0%"

    # 발행 신선도
    if days_old == 0:
        score += 4   # 오늘 발행
    elif days_old <= 1:
        score += 2
    elif days_old >= 7:
        score -= 3   # 1주일+ 구기사

    # 87~99% 범위 고정
    score = min(99, max(87, score))
    return f"{score}%"


def title_to_ko_en(title, source):
    """
    구글 뉴스 RSS 제목은 보통 '기사 제목 - 언론사' 형식입니다.
    실제 제목만 추출합니다.
    """
    # '- 언론사명' 제거
    if " - " in title:
        parts = title.rsplit(" - ", 1)
        clean_title = parts[0].strip()
        if not source:
            source = parts[1].strip() if len(parts) > 1 else source
    else:
        clean_title = title.strip()

    return clean_title, source


def translate_to_korean(text, retries=2):
    """
    MyMemory 무료 번역 API를 사용해 영문 → 한국어로 번역합니다.
    - API 키 불필요, 완전 무료
    - 실패 시 원문(영문) 그대로 반환
    - 캐시 적용으로 중복 번역 방지
    """
    global _translation_cache

    if not text or not text.strip():
        return text

    # 이미 한글이 포함된 경우 번역 불필요
    if any('\uac00' <= ch <= '\ud7a3' for ch in text):
        return text

    # 캐시 확인
    cache_key = text[:100]
    if cache_key in _translation_cache:
        return _translation_cache[cache_key]

    # MyMemory API 호출
    encoded_text = quote(text[:500])  # 500자 제한
    url = f"https://api.mymemory.translated.net/get?q={encoded_text}&langpair=en|ko&de=aimag@ai.ai.mag"

    for attempt in range(retries + 1):
        try:
            req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode("utf-8"))

            # 번역 결과 추출
            translated = data.get("responseData", {}).get("translatedText", "")
            status_code = data.get("responseStatus", 0)

            if translated and str(status_code) == "200":
                # 번역 품질 체크 — 원문과 동일하면 번역 실패로 간주
                if translated.strip().lower() != text.strip().lower():
                    _translation_cache[cache_key] = translated
                    return translated

        except Exception as e:
            if attempt < retries:
                time.sleep(1)  # 재시도 전 대기
                continue
            print(f"   FAILED Translation ({text[:30]}...): {e}")

    # 모든 시도 실패 → 원문 반환
    _translation_cache[cache_key] = text
    return text


# ─── 메인 뉴스 수집 함수 ──────────────────────────────────────

def collect_news():
    """구글 뉴스 RSS에서 AI 뉴스를 수집합니다."""
    print("Collecting AI News from Google RSS...")

    all_items = []

    # 영문 뉴스 수집
    for url in AI_NEWS_RSS_EN:
        items = fetch_rss(url)
        for i, item in enumerate(items):
            item["_position"] = i
            item["_lang"] = "en"
        all_items.extend(items)
        time.sleep(0.5)  # 요청 간격 조절

    print(f"   - English News {len(all_items)} count collected")
    return all_items


def collect_kr_trends():
    """구글 뉴스 RSS에서 한국 AI 트렌드 뉴스를 수집합니다."""
    print("Collecting Korean AI Trends...")

    kr_items = []
    for url in AI_NEWS_RSS_KR:
        items = fetch_rss(url)
        for i, item in enumerate(items):
            item["_position"] = i
            item["_lang"] = "kr"
        kr_items.extend(items)
        time.sleep(0.5)

    print(f"   - Korean News {len(kr_items)} count collected")
    return kr_items


def load_published_history():
    """이전 발행 이력을 로드합니다. 없으면 빈 리스트 반환."""
    if not os.path.exists(HISTORY_FILE):
        return []
    try:
        with open(HISTORY_FILE, "r", encoding="utf-8") as f:
            history = json.load(f)
        # 보관 기간 지난 항목 자동 정리
        cutoff = (datetime.now() - timedelta(days=HISTORY_RETENTION_DAYS)).strftime("%Y-%m-%d")
        history = [h for h in history if h.get("date", "") >= cutoff]
        return history
    except Exception as e:
        print(f"   WARNING: Failed to load history: {e}")
        return []


def save_published_history(news_data, trend_data):
    """발행된 뉴스 제목을 이력 파일에 저장합니다."""
    history = load_published_history()
    today_str = datetime.now().strftime("%Y-%m-%d")
    for item in news_data + trend_data:
        history.append({
            "title": item.get("koTitle", ""),
            "enTitle": item.get("enTitle", ""),
            "date": today_str,
        })
    # 보관 기간 지난 항목 정리
    cutoff = (datetime.now() - timedelta(days=HISTORY_RETENTION_DAYS)).strftime("%Y-%m-%d")
    history = [h for h in history if h.get("date", "") >= cutoff]
    try:
        with open(HISTORY_FILE, "w", encoding="utf-8") as f:
            json.dump(history, f, ensure_ascii=False, indent=2)
        print(f"   Published history saved ({len(history)} entries)")
    except Exception as e:
        print(f"   WARNING: Failed to save history: {e}")


def normalize_title(title):
    """제목 비교를 위해 정규화합니다 (공백, 특수문자 제거, 소문자)."""
    t = re.sub(r"[^a-zA-Z0-9가-힣]", "", title).lower().strip()
    return t


def is_duplicate_of_history(title, history, threshold=0.6):
    """
    새 기사 제목이 이전 발행 이력과 중복인지 판정합니다.
    - 정규화 후 완전 일치 체크
    - 부분 문자열 포함 체크 (60% 이상 겹치면 중복)
    """
    norm_new = normalize_title(title)
    if not norm_new or len(norm_new) < 5:
        return False

    for h in history:
        for key in ("title", "enTitle"):
            norm_old = normalize_title(h.get(key, ""))
            if not norm_old or len(norm_old) < 5:
                continue
            # 완전 일치
            if norm_new == norm_old:
                return True
            # 짧은 쪽 기준 포함 비율 체크
            shorter, longer = (norm_new, norm_old) if len(norm_new) <= len(norm_old) else (norm_old, norm_new)
            if shorter in longer:
                return True
            # 공통 부분 비율 (간단한 문자 집합 유사도)
            common = sum(1 for c in shorter if c in longer)
            ratio = common / max(len(shorter), 1)
            if ratio >= threshold and len(shorter) > 10:
                # 추가로 앞 15자 일치 확인 (같은 주제인지)
                if norm_new[:15] == norm_old[:15]:
                    return True

    return False


def deduplicate(items, max_count=10):
    """
    유사/중복 기사를 제거합니다.
    제목의 첫 30자를 기준으로 중복 탐지합니다.
    """
    seen = set()
    unique = []
    for item in items:
        title_key = item.get("title", "")[:30].lower().strip()
        if title_key and title_key not in seen:
            seen.add(title_key)
            unique.append(item)
        if len(unique) >= max_count:
            break
    return unique


def select_top_news(items, count=3, history=None):
    """
    수집된 기사 중 상위 N개를 선별합니다.
    - 이전 발행 이력 대비 중복 제거 (history 파라미터)
    - 최신 기사 우선
    - 신뢰 출처 우선
    - 배치 내 중복 제거
    """
    if history is None:
        history = []

    # 날짜 파싱 후 정렬
    scored = []
    for i, item in enumerate(items):
        days_old = days_since_published(item.get("pubDate", ""))
        viral = calculate_viral_rate(item, item.get("_position", i), days_old)
        scored.append({**item, "_days_old": days_old, "_viral": viral})

    # BORING 키워드 매칭 기사 완전 제외 (0% 필터)
    scored = [x for x in scored if x["_viral"] != "0%"]

    # ★ 이전 발행 이력 대비 중복 제거
    if history:
        before_count = len(scored)
        scored = [x for x in scored if not is_duplicate_of_history(x.get("title", ""), history)]
        filtered = before_count - len(scored)
        if filtered > 0:
            print(f"   [DEDUP] {filtered}건 이전 발행 중복 제거 (이력 {len(history)}건 대비)")

    # 최신순 + 바이럴 점수 복합 정렬
    scored.sort(key=lambda x: (x["_days_old"], -int(x["_viral"].replace("%", ""))))

    # 배치 내 중복 제거
    deduped = deduplicate(scored, max_count=20)
    return deduped[:count]


# ─── 데이터 포맷팅 ──────────────────────────────────────────

def format_news_item(item, rank, is_top_pick=False):
    """
    RSS 항목을 ai-app.js에서 사용하는 형식으로 변환합니다.
    구글 뉴스 RSS의 pubDate = 구글이 기사를 인덱싱한 날짜로,
    실제 원본 발행일과 거의 일치합니다.
    """
    today_str = datetime.now().strftime("%Y-%m-%d")
    timestamp = datetime.now().strftime("%H%M")

    # 제목에서 언론사명 분리 (영문 원본 보존)
    raw_title = item.get("title", "제목 없음")
    source    = item.get("source", "")
    en_title_clean, source = title_to_ko_en(raw_title, source)

    # ✨ 한글 번역 (영문 원본은 en_title_clean으로 보존)
    print(f"   Translating: {en_title_clean[:45]}...")
    ko_title = translate_to_korean(en_title_clean)

    # 최초발행일 파싱
    pub_dt = parse_pub_date(item.get("pubDate", ""))
    if pub_dt:
        original_date = pub_dt.strftime("%Y-%m-%d")
    else:
        original_date = today_str

    days_old = item.get("_days_old", 0)
    viral    = item.get("_viral", "85%")
    link     = item.get("link", "#")

    # 재발행 판정: 3일 이상 지난 기사
    is_republished = days_old >= 3

    # 디팀장의 2030 맞춤형 분석 문구 자동 생성
    # 단순 사실 전달이 아닌 '실용적 가치' 강조
    if "_lang" in item and item["_lang"] == "kr":
        analysis = f"2030을 위한 AI 실무 팁! {ko_title} 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다."
    else:
        analysis = f"글로벌 AI 트렌드 체크! {ko_title} 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."

    result = {
        "rank": rank,
        "koTitle": ko_title,
        "enTitle": en_title_clean,
        "date": today_str,
        "originalDate": original_date,
        "sourceName": source if source else "Google News",
        "sourceUrl": link,
        "isRepublished": is_republished,
        "viralRate": viral,
        "analysis": analysis,
    }

    if is_top_pick:
        result["isTopPick"] = True

    return result


def format_trend_item(item, rank, category="AI Trend"):
    """트렌드 아이템 포맷팅"""
    base = format_news_item(item, rank)
    base["category"] = category
    # isTopPick 제거 (트렌드에는 불필요)
    base.pop("isTopPick", None)
    return base


# ─── ai-app.js 업데이트 ────────────────────────────────────────

def update_js_file(news_data, trend_data):
    """ai-app.js 파일의 데이터를 최신 뉴스로 교체합니다."""
    js_path = "ai-app.js"
    if not os.path.exists(js_path):
        print(f"❌ {js_path} 파일을 찾을 수 없습니다.")
        return False

    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()

    # aiNewsData 교체
    news_js = json.dumps(news_data, ensure_ascii=False, indent=4)
    content, n1 = re.subn(
        r"const aiNewsData = \[.*?\];",
        f"const aiNewsData = {news_js};",
        content,
        flags=re.DOTALL,
    )

    # generalTrendingData 교체
    trends_js = json.dumps(trend_data, ensure_ascii=False, indent=4)
    content, n2 = re.subn(
        r"const generalTrendingData = \[.*?\];",
        f"const generalTrendingData = {trends_js};",
        content,
        flags=re.DOTALL,
    )

    # 업데이트 날짜 주석 갱신
    today_str = datetime.now().strftime("%Y-%m-%d")
    content = re.sub(
        r"최신 업데이트: \d{4}-\d{2}-\d{2}",
        f"최신 업데이트: {today_str}",
        content,
    )

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"DONE ai-app.js update (News {n1}, Trends {n2})")

    # index.html 캐시 버스팅
    html_path = "index.html"
    if os.path.exists(html_path):
        timestamp = datetime.now().strftime("%Y%m%d%H%M")
        with open(html_path, "r", encoding="utf-8") as f:
            html_content = f.read()
        html_content = re.sub(
            r"ai-app\.js\?v=[\d\.\w]+",
            f"ai-app.js?v={timestamp}",
            html_content,
        )
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"DONE index.html cache busting (v={timestamp})")

    return True


# ─── 더블체크 리포트 ───────────────────────────────────────────

def double_check_report(all_items):
    """최종 선별된 기사의 날짜 및 재발행 여부를 출력합니다."""
    print("\n" + "=" * 55)
    print("DOUBLE CHECK REPORT - Publishing Date Validation")
    print("=" * 55)
    today = datetime.now().date()
    warning_count = 0

    for item in all_items:
        original_date_str = item.get("originalDate", "")
        is_republished    = item.get("isRepublished", False)
        title  = item.get("koTitle", "제목 없음")
        source = item.get("sourceName", "출처 미상")

        try:
            original_date = datetime.strptime(original_date_str, "%Y-%m-%d").date()
            diff_days = (today - original_date).days

            if diff_days >= 7:
                status = "[OLD NEWS]"
                warning_count += 1
            elif diff_days >= 3:
                status = "[REPUBLISHED?]"
                warning_count += 1
            else:
                status = "[FRESH]"

            republished_mark = " (RE)" if is_republished else ""
            print(f"{status}{republished_mark} | {original_date_str} ({diff_days}일 전) | {source}")
            print(f"       └─ {title[:45]}...")
        except Exception:
            print(f"FAILED Date Parse: {original_date_str} | {title[:30]}...")
            warning_count += 1

    print("=" * 55)
    if warning_count > 0:
        print(f"! Total {warning_count} warnings!")
    else:
        print("OK All news fresh!")
    print("=" * 55 + "\n")


# ─── 폴백(Fallback) 데이터 ────────────────────────────────────
# RSS 수집 실패 시 사용할 안전한 기본값

def get_fallback_news():
    """RSS 수집에 실패했을 때 사용하는 폴백 데이터입니다."""
    today = datetime.now().strftime("%Y-%m-%d")
    print("RSS collection failed - Using fallback data.")
    return [
        {
            "rank": 1, "isTopPick": True,
            "koTitle": "오늘의 AI 뉴스를 수집하는 중입니다",
            "enTitle": "Collecting Today's AI News...",
            "date": today, "originalDate": today,
            "sourceName": "AIMAG", "sourceUrl": "#",
            "isRepublished": False, "viralRate": "99%",
            "hookTitles": [
                {"top": "AI 뉴스 로딩 중", "bottom": "잠시 후 업데이트됩니다"},
                {"top": "코다리 부장 리서치 중", "bottom": "최신 AI 소식을 큐레이션합니다"},
            ],
            "analysis": "자동 수집 중입니다. 잠시 후 최신 뉴스가 표시됩니다.",
        }
    ], [
        {
            "category": "AI Trend", "rank": 1,
            "koTitle": "2026년 AI 트렌드를 분석 중입니다",
            "enTitle": "Analyzing 2026 AI Trends...",
            "date": today, "originalDate": today,
            "sourceName": "AIMAG", "sourceUrl": "#",
            "isRepublished": False, "viralRate": "95%",
            "hookTitles": [
                {"top": "트렌드 분석 중", "bottom": "AI 흐름을 읽어드립니다"},
                {"top": "2030 맞춤 큐레이션", "bottom": "곧 업데이트됩니다"},
            ],
            "analysis": "자동 수집 중입니다.",
        }
    ]


# ─── 메인 실행 ────────────────────────────────────────────────

def main():
    today_str = datetime.now().strftime("%Y-%m-%d")
    print("\n" + "=" * 55)
    print(f"Kodari Manager - AI News Auto Update Starting")
    print(f"   Date: {today_str}")
    print("=" * 55)

    # ── 1. 영문 AI 뉴스 수집
    en_items = collect_news()

    # ── 2. 한국 AI 트렌드 뉴스 수집
    kr_items = collect_kr_trends()

    # ── 2.5. 이전 발행 이력 로드 (중복 방지)
    history = load_published_history()
    if history:
        print(f"   Published history loaded: {len(history)} entries (last {HISTORY_RETENTION_DAYS} days)")
    else:
        print("   No published history found - first run or expired")

    # ── 3. 뉴스 선별 (TOP 3)
    if en_items:
        # 디팀장의 큐레이션 로직: 실무/수익/커리어 키워드 포함 기사 가중치 부여
        top_news_raw = select_top_news(en_items, count=3, history=history)
        news_data = []
        for i, item in enumerate(top_news_raw):
            formatted = format_news_item(item, rank=i+1, is_top_pick=(i==0))
            news_data.append(formatted)
        print(f"NEWS TOP {len(news_data)} Selected (2030 Curation Applied)")
    else:
        news_data, _ = get_fallback_news()

    # ── 4. 트렌드 선별 (TOP 3)
    # 한국 뉴스를 우선, 부족하면 영문 뉴스에서 보충
    trend_pool = kr_items if kr_items else en_items
    if trend_pool:
        # 2030 관심 카테고리로 업데이트
        categories = ["Productivity", "Money & SideHustle", "Career Trend"]
        top_trends_raw = select_top_news(trend_pool, count=3, history=history)
        trend_data = []
        for i, item in enumerate(top_trends_raw):
            cat = categories[i] if i < len(categories) else "AI Trend"
            formatted = format_trend_item(item, rank=i+1, category=cat)
            trend_data.append(formatted)
        print(f"TREND TOP {len(trend_data)} Selected (2030 Curation Applied)")
    else:
        _, trend_data = get_fallback_news()

    # ── 5. 더블체크 리포트
    double_check_report(news_data + trend_data)

    # ── 6. ai-app.js 업데이트
    success = update_js_file(news_data, trend_data)

    if success:
        # ── 6.5. 발행 이력 저장 (다음 수집 시 중복 방지용)
        save_published_history(news_data, trend_data)
        print(f"\nDONE! {today_str} News updated!")
        print("   GitHub Push -> GitHub Pages auto deploy.\n")
    else:
        print("\nFAILED Update - Please check manually.\n")
        exit(1)

    # ── 7. 이메일 브리핑 발송
    send_email_briefing(news_data, trend_data, today_str)


# ─── 📧 이메일 브리핑 발송 ─────────────────────────────────────

def send_email_briefing(news_data, trend_data, date_str):
    """
    매일 업데이트 완료 후 오너님께 HTML 이메일 브리핑을 발송합니다.
    환경변수 GMAIL_USER / GMAIL_APP_PASSWORD 가 없으면 조용히 스킵.
    """
    gmail_user     = os.environ.get("GMAIL_USER", "")
    gmail_password = os.environ.get("GMAIL_APP_PASSWORD", "")
    # 콤마로 구분된 다중 수신자 지원: "a@gmail.com,b@naver.com"
    raw_recipients = os.environ.get("RECIPIENT_EMAIL", gmail_user)
    to_list        = [e.strip() for e in raw_recipients.split(",") if e.strip()]

    if not gmail_user or not gmail_password:
        print("Email env vars not set - skipping briefing")
        return

    print(f"Sending email briefing -> {', '.join(to_list)}")

    # ── HTML 뉴스 카드 생성
    def news_card_html(item, is_trend=False):
        title    = item.get("koTitle", "")
        analysis = item.get("analysis", "")
        viral    = item.get("viralRate", "")
        rank     = item.get("rank", "")
        category = item.get("category", "AI")
        source   = item.get("sourceName", "")
        url      = item.get("sourceUrl", "#")
        orig_dt  = item.get("originalDate", "")
        en_title = item.get("enTitle", "")

        viral_color = "#ef4444" if int(viral.replace("%","")) >= 95 else \
                      "#f97316" if int(viral.replace("%","")) >= 90 else "#00f2ff"

        link_html = ""
        if not is_trend and url and url != "#":
            link_html = f'<a href="{url}" style="display:inline-block;margin-top:10px;padding:6px 16px;background:rgba(0,242,255,0.1);border:1px solid rgba(0,242,255,0.3);border-radius:20px;color:#00f2ff;text-decoration:none;font-size:12px;">🔗 뉴스 원문 보기</a>'

        date_html = ""
        if not is_trend and orig_dt:
            date_html = f'<p style="color:#888;font-size:11px;margin:8px 0 0;">📅 최초발행: {orig_dt} · {source}</p>'

        en_html = ""
        if not is_trend and en_title:
            en_html = f'<p style="color:#aaa;font-size:12px;font-style:italic;margin:4px 0 8px;">{en_title}</p>'

        label = category if is_trend else "AI"

        return f'''
        <div style="background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:20px;margin-bottom:16px;">
            <div style="font-size:11px;font-weight:700;color:#00f2ff;letter-spacing:0.08em;margin-bottom:8px;">{label} TOP {rank}</div>
            <h3 style="margin:0 0 4px;color:#f0f6fc;font-size:15px;line-height:1.4;">{title}</h3>
            {en_html}
            <div style="display:inline-block;padding:3px 10px;background:rgba(0,242,255,0.08);border:1px solid {viral_color};border-radius:20px;font-size:11px;font-weight:700;color:{viral_color};margin-bottom:10px;">🔥 터질 가능성: {viral}</div>
            <div style="background:#161b22;border-left:3px solid #00f2ff;border-radius:0 8px 8px 0;padding:12px 14px;margin-top:4px;">
                <div style="font-size:11px;color:#00f2ff;font-weight:700;margin-bottom:6px;">🦞 코다리 분석</div>
                <p style="color:#c9d1d9;font-size:13px;line-height:1.6;margin:0;">{analysis}</p>
            </div>
            {date_html}
            {link_html}
        </div>'''

    news_html  = "".join(news_card_html(item, is_trend=False) for item in news_data)
    trend_html = "".join(news_card_html(item, is_trend=True)  for item in trend_data)

    site_url = "https://aiaiaimag.github.io/aiaimag"

    html_body = f'''
    <!DOCTYPE html>
    <html lang="ko">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="background:#010409;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0;">
    <div style="max-width:600px;margin:0 auto;padding:24px 16px;">

        <!-- 헤더 -->
        <div style="text-align:center;padding:32px 0 24px;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:#00f2ff;margin-bottom:8px;">ai.ai.mag</div>
            <h1 style="font-size:24px;font-weight:800;color:#f0f6fc;margin:0 0 6px;">🦞 AI 데일리 브리핑</h1>
            <p style="color:#8b949e;font-size:13px;margin:0;">{date_str} · 코다리 부장 자동 발송</p>
        </div>

        <!-- 구분선 -->
        <div style="border-top:1px solid #21262d;padding-top:20px;margin-bottom:6px;">
            <h2 style="font-size:13px;font-weight:700;color:#00f2ff;letter-spacing:0.08em;margin:0 0 14px;">📰 AI 핵심 이슈 TOP 3</h2>
            {news_html}
        </div>

        <div style="border-top:1px solid #21262d;padding-top:20px;margin-bottom:6px;">
            <h2 style="font-size:13px;font-weight:700;color:#c792ea;letter-spacing:0.08em;margin:0 0 14px;">💡 2030 세대 AI 트렌드 TOP 3</h2>
            {trend_html}
        </div>

        <!-- 사이트 링크 -->
        <div style="text-align:center;padding:24px 0 16px;">
            <a href="{site_url}" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#00f2ff22,#7f00ff22);border:1px solid #00f2ff44;border-radius:30px;color:#00f2ff;text-decoration:none;font-size:13px;font-weight:700;">🌐 사이트에서 전체 보기</a>
        </div>

        <!-- 푸터 -->
        <p style="text-align:center;color:#484f58;font-size:11px;margin-top:24px;">© 2026 ai.ai.mag · 매일 오전 7시 자동 발송</p>
    </div>
    </body>
    </html>'''

    # ── 이메일 구성 & 발송
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"🦞 [{date_str}] AI 데일리 브리핑 — 오늘 터질 뉴스 TOP 3"
        msg["From"]    = f"AIMAG News Bot <{gmail_user}>"
        msg["To"]      = ", ".join(to_list)   # 헤더용 문자열
        msg.attach(MIMEText(html_body, "html", "utf-8"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(gmail_user, gmail_password)
            smtp.sendmail(gmail_user, to_list, msg.as_string())  # 리스트로 다중 발송

        print(f"   Email briefing sent -> {', '.join(to_list)}")

    except smtplib.SMTPAuthenticationError:
        print("   FAILED Gmail Auth - Check GMAIL_USER / GMAIL_APP_PASSWORD")
    except Exception as e:
        print(f"   FAILED Email Send: {e}")


if __name__ == "__main__":
    main()
