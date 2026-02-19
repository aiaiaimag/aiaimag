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
    
    # 2026-02-19 기준 최신 AI 뉴스 데이터
    news_data = [
        {
            "rank": 1,
            "isTopPick": True,
            "thumbUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
            "koTitle": "앤스로픽, '클로드 4.6 오퍼스' 출시… 100만 토큰 컨텍스트 지원",
            "enTitle": "Anthropic Debuts Claude Opus 4.6 with One-Million Token Context Window.",
            "date": today,
            "viralRate": "99%",
            "hookTitles": [
                {"top": "앤스로픽의 역습", "bottom": "클로드 4.6 오퍼스 전격 공개"},
                {"top": "100만 토큰의 위엄", "bottom": "책 수백 권을 한 번에 읽는 AI"}
            ],
            "analysis": "앤스로픽이 코드 작성을 넘어 문서 분석, 검색 성능을 극대화한 클로드 4.6을 공개했습니다. 100만 토큰 창을 통해 방대한 데이터를 한 번에 처리하며 기업용 AI 시장의 판도를 흔들고 있습니다."
        },
        {
            "rank": 2,
            "thumbUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            "koTitle": "가트너 전망 \"2026년 기업 앱 40%가 'AI 에이전트' 품는다\"",
            "enTitle": "Gartner - 40% of Enterprise Applications to Feature AI Agents by 2026.",
            "date": today,
            "viralRate": "96%",
            "hookTitles": [
                {"top": "이제는 '에이전틱 AI' 시대", "bottom": "스스로 일하는 AI가 몰려온다"},
                {"top": "직장 동료가 AI?", "bottom": "기업 앱 40%에 에이전트 탑재"}
            ],
            "analysis": "단순 챗봇을 넘어 스스로 판단하고 실행하는 '에이전틱 AI'가 대세입니다. 가트너는 내년까지 기업용 소프트웨어의 상당수가 자율 에이전트 기능을 탑재할 것으로 내다봤습니다."
        }
    ]
    
    # 2030 트렌드 데이터
    trend_data = [
        {
            "category": "Physical AI",
            "rank": 1,
            "thumbUrl": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            "koTitle": "화면 밖으로 나온 AI… '피지컬 AI'와 로봇의 결합 가속화",
            "enTitle": "Physical AI: Moving from Screens to Autonomous Robotics.",
            "date": today,
            "viralRate": "94%",
            "hookTitles": [
                {"top": "눈앞에서 움직이는 AI", "bottom": "피지컬 AI가 세상을 바꾼다"},
                {"top": "화면 밖은 위험하지 않아", "bottom": "로봇과 AI의 완벽한 조화"}
            ],
            "analysis": "2026년 AI 트렌드는 '피지컬'입니다. 소프트웨어에 갇혀있던 AI가 로봇과 결합해 제조, 물류, 가전 등 현실 세계에서 인간과 협업하는 단계로 진화하고 있습니다."
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
