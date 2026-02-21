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

# ============================================================
# 코다리 부장 - AI 뉴스 완전 자동화 스크립트 (Option B)
# 엔진: Google News RSS (완전 무료, API 키 불필요)
# 기능:
#   - 실시간 AI 뉴스 자동 수집 (영문/한국 뉴스)
#   - 최초발행일 자동 파싱 및 더블체크
#   - 재발행 의심 기사 자동 감지
#   - ai-app.js 자동 업데이트
# ============================================================

# ─── RSS 피드 URL 설정 ────────────────────────────────────────

# 영문 AI 뉴스 (글로벌)
AI_NEWS_RSS_EN = [
    "https://news.google.com/rss/search?q=artificial+intelligence+AI&hl=en-US&gl=US&ceid=US:en&num=20",
    "https://news.google.com/rss/search?q=Anthropic+OpenAI+Google+AI+2026&hl=en-US&gl=US&ceid=US:en",
]

# 한국 AI 뉴스 (트렌드용) - 한국어 쿼리는 URL 인코딩 필수
AI_NEWS_RSS_KR = [
    "https://news.google.com/rss/search?q=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5+AI+2026&hl=ko&gl=KR&ceid=KR%3Ako",
    "https://news.google.com/rss/search?q=AI+%EA%B8%B0%EC%88%A0+%ED%8A%B8%EB%A0%8C%EB%93%9C&hl=ko&gl=KR&ceid=KR%3Ako",
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

# 높은 바이럴 가능성 키워드
VIRAL_KEYWORDS = [
    "breaks", "launches", "releases", "reveals", "surpasses",
    "first", "record", "billion", "trillion", "banned", "warning",
    "shocking", "major", "revolutionary", "groundbreaking",
    "출시", "발표", "혁신", "충격", "최초", "역대", "금지", "경고",
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
        print(f"⚠️  RSS 수집 실패 ({url[:50]}...): {e}")
        return []
    except ET.ParseError as e:
        print(f"⚠️  XML 파싱 오류 ({url[:50]}...): {e}")
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
    - 출처 신뢰도
    - RSS 피드 내 순위
    - 키워드 포함 여부
    - 발행 신선도
    """
    score = 70  # 기본 점수

    # 출처 신뢰도 가중치
    source_lower = item.get("source", "").lower()
    for key, weight in TRUSTED_SOURCES.items():
        if key in source_lower:
            score = max(score, weight - 10)  # 신뢰 출처면 점수 UP
            break

    # RSS 순위 (앞에 있을수록 높은 점수)
    position_bonus = max(0, 10 - position * 2)
    score += position_bonus

    # 키워드 바이럴 보너스
    title_lower = item.get("title", "").lower()
    for kw in VIRAL_KEYWORDS:
        if kw.lower() in title_lower:
            score += 3
            break

    # 발행 신선도 (오래될수록 감점)
    if days_old == 0:
        score += 5   # 오늘 발행
    elif days_old <= 1:
        score += 2
    elif days_old >= 7:
        score -= 10  # 1주일+ 구기사

    # 최대 99% 제한
    score = min(99, max(50, score))
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


# ─── 메인 뉴스 수집 함수 ──────────────────────────────────────

def collect_news():
    """구글 뉴스 RSS에서 AI 뉴스를 수집합니다."""
    print("🌐 구글 뉴스 RSS에서 AI 최신 뉴스 수집 중...")

    all_items = []

    # 영문 뉴스 수집
    for url in AI_NEWS_RSS_EN:
        items = fetch_rss(url)
        for i, item in enumerate(items):
            item["_position"] = i
            item["_lang"] = "en"
        all_items.extend(items)
        time.sleep(0.5)  # 요청 간격 조절

    print(f"   ✓ 영문 뉴스 {len(all_items)}건 수집 완료")
    return all_items


def collect_kr_trends():
    """구글 뉴스 RSS에서 한국 AI 트렌드 뉴스를 수집합니다."""
    print("🇰🇷 한국 AI 트렌드 뉴스 수집 중...")

    kr_items = []
    for url in AI_NEWS_RSS_KR:
        items = fetch_rss(url)
        for i, item in enumerate(items):
            item["_position"] = i
            item["_lang"] = "kr"
        kr_items.extend(items)
        time.sleep(0.5)

    print(f"   ✓ 한국 뉴스 {len(kr_items)}건 수집 완료")
    return kr_items


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


def select_top_news(items, count=3):
    """
    수집된 기사 중 상위 N개를 선별합니다.
    - 최신 기사 우선
    - 신뢰 출처 우선
    - 중복 제거
    """
    # 날짜 파싱 후 정렬
    scored = []
    for i, item in enumerate(items):
        days_old = days_since_published(item.get("pubDate", ""))
        viral = calculate_viral_rate(item, item.get("_position", i), days_old)
        scored.append({**item, "_days_old": days_old, "_viral": viral})

    # 최신순 + 바이럴 점수 복합 정렬
    scored.sort(key=lambda x: (x["_days_old"], -int(x["_viral"].replace("%", ""))))

    # 중복 제거
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

    # 제목에서 언론사명 분리
    raw_title = item.get("title", "제목 없음")
    source    = item.get("source", "")
    title, source = title_to_ko_en(raw_title, source)

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

    # 후크 타이틀 자동 생성 (간단한 규칙 기반)
    hook1_top    = title[:15].strip() + "..." if len(title) > 15 else title
    hook1_bottom = f"({source})" if source else "AI 최신 이슈"
    hook2_top    = "주목할 이 뉴스!" if not is_top_pick else "오늘의 핫 이슈"
    hook2_bottom = f"최초발행: {original_date}"

    # 분석 텍스트 자동 생성
    freshness_msg = "오늘 발표된 최신 뉴스입니다." if days_old == 0 else f"{days_old}일 전 발행된 기사입니다."
    analysis = f"{title} | {freshness_msg} 출처: {source}."

    result = {
        "rank": rank,
        "koTitle": title,
        "enTitle": title,  # 영문 기사의 경우 동일 제목 사용
        "date": today_str,
        "originalDate": original_date,
        "sourceName": source if source else "Google News",
        "sourceUrl": link,
        "isRepublished": is_republished,
        "viralRate": viral,
        "hookTitles": [
            {"top": hook1_top, "bottom": hook1_bottom},
            {"top": hook2_top, "bottom": hook2_bottom},
        ],
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

    print(f"✅ ai-app.js 업데이트 완료 (뉴스 {n1}건, 트렌드 {n2}건 교체)")

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
        print(f"✅ index.html 캐시 버스팅 완료 (v={timestamp})")

    return True


# ─── 더블체크 리포트 ───────────────────────────────────────────

def double_check_report(all_items):
    """최종 선별된 기사의 날짜 및 재발행 여부를 출력합니다."""
    print("\n" + "=" * 55)
    print("📋 더블체크 리포트 - 최초발행일 검증")
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
                status = "🔴 [구기사 주의]"
                warning_count += 1
            elif diff_days >= 3:
                status = "🟡 [재발행 의심]"
                warning_count += 1
            else:
                status = "🟢 [최신]"

            republished_mark = " ♻️재발행" if is_republished else ""
            print(f"{status}{republished_mark} | {original_date_str} ({diff_days}일 전) | {source}")
            print(f"       └─ {title[:45]}...")
        except Exception:
            print(f"⚠️  날짜 파싱 오류: {original_date_str} | {title[:30]}...")
            warning_count += 1

    print("=" * 55)
    if warning_count > 0:
        print(f"⚠️  총 {warning_count}건 주의 필요!")
    else:
        print("✅ 모든 기사 최신 상태!")
    print("=" * 55 + "\n")


# ─── 폴백(Fallback) 데이터 ────────────────────────────────────
# RSS 수집 실패 시 사용할 안전한 기본값

def get_fallback_news():
    """RSS 수집에 실패했을 때 사용하는 폴백 데이터입니다."""
    today = datetime.now().strftime("%Y-%m-%d")
    print("⚠️  RSS 수집 실패 — 폴백 데이터를 사용합니다.")
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
    print(f"🦞 코다리 부장 - AI 뉴스 자동 업데이트 시작")
    print(f"   실행 날짜: {today_str}")
    print("=" * 55)

    # ── 1. 영문 AI 뉴스 수집
    en_items = collect_news()

    # ── 2. 한국 AI 트렌드 뉴스 수집
    kr_items = collect_kr_trends()

    # ── 3. 뉴스 선별 (TOP 3)
    if en_items:
        top_news_raw = select_top_news(en_items, count=3)
        news_data = []
        for i, item in enumerate(top_news_raw):
            formatted = format_news_item(item, rank=i+1, is_top_pick=(i==0))
            news_data.append(formatted)
        print(f"📰 TOP {len(news_data)}개 뉴스 선별 완료")
    else:
        news_data, _ = get_fallback_news()

    # ── 4. 트렌드 선별 (TOP 3)
    # 한국 뉴스를 우선, 부족하면 영문 뉴스에서 보충
    trend_pool = kr_items if kr_items else en_items
    if trend_pool:
        # 카테고리 순환 배정
        categories = ["Physical AI", "Work & Career", "Korea AI"]
        top_trends_raw = select_top_news(trend_pool, count=3)
        trend_data = []
        for i, item in enumerate(top_trends_raw):
            cat = categories[i] if i < len(categories) else "AI Trend"
            formatted = format_trend_item(item, rank=i+1, category=cat)
            trend_data.append(formatted)
        print(f"📊 TOP {len(trend_data)}개 트렌드 선별 완료")
    else:
        _, trend_data = get_fallback_news()

    # ── 5. 더블체크 리포트
    double_check_report(news_data + trend_data)

    # ── 6. ai-app.js 업데이트
    success = update_js_file(news_data, trend_data)

    if success:
        print(f"\n🎉 대표님! {today_str} 뉴스 자동 업데이트 완료!")
        print("   GitHub Push → Netlify 자동 배포 예정입니다.\n")
    else:
        print("\n❌ 업데이트 실패 — 수동 확인이 필요합니다.\n")
        exit(1)


if __name__ == "__main__":
    main()
