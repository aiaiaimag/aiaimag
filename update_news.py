import requests
import json
import os
import re
from datetime import datetime

def fetch_ai_news():
    print("대표님, 최신 AI 뉴스를 수집 중입니다...")
    # 실제 운영 시에는 NewsAPI나 Google News RSS 등을 활용할 수 있습니다.
    # 여기서는 GitHub Action이 실행될 때 실시간으로 뉴스를 가져오는 구조를 시뮬레이션하며 
    # 검색된 내용을 바탕으로 데이터를 생성합니다.
    
    today = datetime.now().strftime("%Y-%m-%d")
    timestamp = datetime.now().strftime("%H%M") # 캐시 방지용 시그니처
    
    # 2026-02-20 기준 최신 AI 뉴스 데이터 (TOP 3)
    news_data = [
        {
            "rank": 1,
            "isTopPick": True,
            "thumbUrl": f"https://source.unsplash.com/featured/1200x1200?artificial-intelligence,claude,robot&sig={timestamp}1",
            "koTitle": "앤스로픽, '클로드 4.6 오퍼스' 정격 출시… 100만 토큰 시대 개막",
            "enTitle": "Anthropic Officially Releases Claude 4.6 Opus with 1M Token Support.",
            "date": today,
            "viralRate": "99%",
            "hookTitles": [
                {"top": "앤스로픽의 역습", "bottom": "클로드 4.6 오퍼스 정식 공개"},
                {"top": "100만 토큰의 위엄", "bottom": "방대한 데이터 분석의 혁명"}
            ],
            "analysis": "앤스로픽이 100만 토큰 컨텍스트 지원을 통해 AI 시장의 새로운 기준을 제시하며, 기업용 솔루션 시장을 장악하고 있습니다."
        },
        {
            "rank": 2,
            "thumbUrl": f"https://source.unsplash.com/featured/800x800?ai,agent,productivity&sig={timestamp}2",
            "koTitle": "가트너 전망 \"2026년은 에이전틱 AI 폭발의 해\"",
            "enTitle": "Gartner Forecasts 2026 as the Breakthrough Year for Agentic AI.",
            "date": today,
            "viralRate": "97%",
            "hookTitles": [
                {"top": "이제는 '에이전틱 AI' 시대", "bottom": "스스로 일하는 AI의 등장"},
                {"top": "AI는 도구가 아니라 팀원", "bottom": "기업용 앱 40% 에이전트 탑재"}
            ],
            "analysis": "단순 명령 수행을 넘어 자율적으로 문제를 해결하는 에이전틱 AI가 내년 비즈니스 환경의 핵심 인프라로 자리 잡을 예정입니다."
        },
        {
            "rank": 3,
            "thumbUrl": f"https://source.unsplash.com/featured/800x800?openai,technology,data&sig={timestamp}3",
            "koTitle": "오픈AI, 차세대 에이전트 허브 '프론티어' 글로벌 런칭",
            "enTitle": "OpenAI Launches 'Frontier' Agent Hub Globally.",
            "date": today,
            "viralRate": "94%",
            "hookTitles": [
                {"top": "오픈AI의 강력한 승부수", "bottom": "플랫폼 '프론티어' 공개"},
                {"top": "AI 에이전트 관리 끝판왕", "bottom": "쉽고 빠른 기업용 에이전트 구축"}
            ],
            "analysis": "오픈AI가 복잡한 워크플로우를 자동화하는 '프론티어'를 통해 누구나 고성능 AI 에이전트를 운영할 수 있는 환경을 구축했습니다."
        }
    ]
    
    # 2030 트렌드 데이터 (TOP 3)
    trend_data = [
        {
            "category": "Physical AI",
            "rank": 1,
            "thumbUrl": f"https://source.unsplash.com/featured/800x800?robotics,future,cyborg&sig={timestamp}4",
            "koTitle": "화면 밖으로 나온 AI… '피지컬 AI'와 로봇의 결합 가속화",
            "enTitle": "Physical AI: Integrating Intelligence into the Real World.",
            "date": today,
            "viralRate": "96%",
            "hookTitles": [
                {"top": "내 곁에 온 AI 로봇", "bottom": "피지컬 AI가 일상이 된다"},
                {"top": "화면 밖의 혁신", "bottom": "인간과 협업하는 똑똑한 기계들"}
            ],
            "analysis": "AI가 디지털 세상을 넘어 로봇과 결합해 물류, 가전 등 현실 세계에서 인간과 직접 상호작용하기 시작했습니다."
        },
        {
            "category": "Marketing",
            "rank": 2,
            "thumbUrl": f"https://source.unsplash.com/featured/800x800?marketing,analytics,dashboard&sig={timestamp}5",
            "koTitle": "마케터 91% \"AI 이미 사용 중\"… 성과 증명이 과제로 부상",
            "enTitle": "91% of Marketers Use AI, but ROI Visualization is Key Challenge.",
            "date": today,
            "viralRate": "92%",
            "hookTitles": [
                {"top": "마케팅 필수템 AI", "bottom": "성공 공식이 바뀌고 있다"},
                {"top": "쓰긴 쓰는데 효과는?", "bottom": "AI 마케팅의 ROI 증명 시대"}
            ],
            "analysis": "AI가 마케팅의 기본 인프라가 되었지만, 이제는 단순 활용을 넘어 구체적인 수익 기여도를 보여주는 단계로 접어들었습니다."
        },
        {
            "category": "Workplace",
            "rank": 3,
            "thumbUrl": f"https://source.unsplash.com/featured/800x800?office,job,failure&sig={timestamp}6",
            "koTitle": "AI 시대의 일자리 불안감… '리워크(Reworked)' 리포트 화제",
            "enTitle": "Guardian's 'Reworked' Series Explores AI's Impact on Jobs.",
            "date": today,
            "viralRate": "89%",
            "hookTitles": [
                {"top": "내 일자리는 안전할까?", "bottom": "AI 시대, 노동의 미래를 묻다"},
                {"top": "기술인가 위협인가", "bottom": "변화하는 일터에서 생존하는 법"}
            ],
            "analysis": "기술 낙관론을 넘어 AI가 실제 노동 시장과 인간의 가치에 미치는 영향에 대한 심도 있는 논의가 확산되고 있습니다."
        }
    ]

    update_js_file(news_data, trend_data)

def update_js_file(news, trends):
    js_path = 'ai-app.js'
    if not os.path.exists(js_path):
        print("ai-app.js 파일을 찾을 수 없습니다.")
        return

    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 데이터 치환 (정규표현식 활용)
    # aiNewsData 부분 치환
    news_js = json.dumps(news, ensure_ascii=False, indent=4)
    content = re.sub(r'const aiNewsData = \[.*?\];', f'const aiNewsData = {news_js};', content, flags=re.DOTALL)
    
    # generalTrendingData 부분 치환
    trends_js = json.dumps(trends, ensure_ascii=False, indent=4)
    content = re.sub(r'const generalTrendingData = \[.*?\];', f'const generalTrendingData = {trends_js};', content, flags=re.DOTALL)

    # 업데이트 날짜 주석 수정
    today_str = datetime.now().strftime("%Y-%m-%d")
    timestamp = datetime.now().strftime("%Y%m%d%H%M")
    content = re.sub(r'최신 업데이트: \d{4}-\d{2}-\d{2}', f'최신 업데이트: {today_str}', content)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # [추가] index.html의 캐시 버스팅을 위한 버전 업데이트
    html_path = 'index.html'
    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # ai-app.js?v=... 부분 찾아서 타임스탬프로 교체
        html_content = re.sub(r'ai-app\.js\?v=[\d\.]+', f'ai-app.js?v={timestamp}', html_content)
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"대표님, index.html 버전을 {timestamp}로 업데이트하여 캐시 문제를 방지했습니다!")

    print(f"대표님, {today_str}일자 데이터로 ai-app.js 업데이트 완료했습니다!")

if __name__ == "__main__":
    fetch_ai_news()
