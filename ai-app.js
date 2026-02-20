/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-20
 */

// [뉴스 데이터베이스 - 2026년 2월 20일 업데이트]
const aiNewsData = [
    {
        "rank": 1,
        "isTopPick": true,

        "koTitle": "앤스로픽, '클로드 4.6 오퍼스' 정격 출시… 100만 토큰 시대 개막",
        "enTitle": "Anthropic Officially Releases Claude 4.6 Opus with 1M Token Support.",
        "date": "2026-02-20",
        "viralRate": "99%",
        "hookTitles": [
            {
                "top": "앤스로픽의 역습",
                "bottom": "클로드 4.6 오퍼스 정식 공개"
            },
            {
                "top": "100만 토큰의 위엄",
                "bottom": "방대한 데이터 분석의 혁명"
            }
        ],
        "analysis": "앤스로픽이 100만 토큰 컨텍스트 지원을 통해 AI 시장의 새로운 기준을 제시하며, 기업용 솔루션 시장을 장악하고 있습니다."
    },
    {
        "rank": 2,

        "koTitle": "가트너 전망 \"2026년은 에이전틱 AI 폭발의 해\"",
        "enTitle": "Gartner Forecasts 2026 as the Breakthrough Year for Agentic AI.",
        "date": "2026-02-20",
        "viralRate": "97%",
        "hookTitles": [
            {
                "top": "이제는 '에이전틱 AI' 시대",
                "bottom": "스스로 일하는 AI의 등장"
            },
            {
                "top": "AI는 도구가 아니라 팀원",
                "bottom": "기업용 앱 40% 에이전트 탑재"
            }
        ],
        "analysis": "단순 명령 수행을 넘어 자율적으로 문제를 해결하는 에이전틱 AI가 내년 비즈니스 환경의 핵심 인프라로 자리 잡을 예정입니다."
    },
    {
        "rank": 3,

        "koTitle": "오픈AI, 차세대 에이전트 허브 '프론티어' 글로벌 런칭",
        "enTitle": "OpenAI Launches 'Frontier' Agent Hub Globally.",
        "date": "2026-02-20",
        "viralRate": "94%",
        "hookTitles": [
            {
                "top": "오픈AI의 강력한 승부수",
                "bottom": "플랫폼 '프론티어' 공개"
            },
            {
                "top": "AI 에이전트 관리 끝판왕",
                "bottom": "쉽고 빠른 기업용 에이전트 구축"
            }
        ],
        "analysis": "오픈AI가 복잡한 워크플로우를 자동화하는 '프론티어'를 통해 누구나 고성능 AI 에이전트를 운영할 수 있는 환경을 구축했습니다."
    }
];

const generalTrendingData = [
    {
        "category": "Physical AI",
        "rank": 1,

        "koTitle": "화면 밖으로 나온 AI… '피지컬 AI'와 로봇의 결합 가속화",
        "enTitle": "Physical AI: Integrating Intelligence into the Real World.",
        "date": "2026-02-20",
        "viralRate": "96%",
        "hookTitles": [
            {
                "top": "내 곁에 온 AI 로봇",
                "bottom": "피지컬 AI가 일상이 된다"
            },
            {
                "top": "화면 밖의 혁신",
                "bottom": "인간과 협업하는 똑똑한 기계들"
            }
        ],
        "analysis": "AI가 디지털 세상을 넘어 로봇과 결합해 물류, 가전 등 현실 세계에서 인간과 직접 상호작용하기 시작했습니다."
    },
    {
        "category": "Marketing",
        "rank": 2,

        "koTitle": "마케터 91% \"AI 이미 사용 중\"… 성과 증명이 과제로 부상",
        "enTitle": "91% of Marketers Use AI, but ROI Visualization is Key Challenge.",
        "date": "2026-02-20",
        "viralRate": "92%",
        "hookTitles": [
            {
                "top": "마케팅 필수템 AI",
                "bottom": "성공 공식이 바뀌고 있다"
            },
            {
                "top": "쓰긴 쓰는데 효과는?",
                "bottom": "AI 마케팅의 ROI 증명 시대"
            }
        ],
        "analysis": "AI가 마케팅의 기본 인프라가 되었지만, 이제는 단순 활용을 넘어 구체적인 수익 기여도를 보여주는 단계로 접어들었습니다."
    },
    {
        "category": "Workplace",
        "rank": 3,

        "koTitle": "AI 시대의 일자리 불안감… '리워크(Reworked)' 리포트 화제",
        "enTitle": "Guardian's 'Reworked' Series Explores AI's Impact on Jobs.",
        "date": "2026-02-20",
        "viralRate": "89%",
        "hookTitles": [
            {
                "top": "내 일자리는 안전할까?",
                "bottom": "AI 시대, 노동의 미래를 묻다"
            },
            {
                "top": "기술인가 위협인가",
                "bottom": "변화하는 일터에서 생존하는 법"
            }
        ],
        "analysis": "기술 낙관론을 넘어 AI가 실제 노동 시장과 인간의 가치에 미치는 영향에 대한 심도 있는 논의가 확산되고 있습니다."
    }
];



// [기능 1] 뉴스 API 연동 시뮬레이션 및 데이터 페칭
async function fetchLatestNewsFromServer() {
    console.log("코다리 부장: 최신 뉴스를 가져오는 중입니다... (API 연동 시뮬레이션)");
    // 실제 운영 시에는 fetch('https://your-news-api.com/latest') 형태로 구현됩니다.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ aiNewsData, generalTrendingData });
        }, 800);
    });
}

function renderHero(item) {
    // 이미지 제거됨 - 히어로 섹션 미사용
}


function renderSection(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';

        const rateValue = parseInt(item.viralRate.replace('%', ''));
        const hotClass = rateValue >= 90 ? 'hot' : '';

        const hookContainers = item.hookTitles.map((h, index) => `
            <div class="hook-box" data-label="${index === 0 ? '카드 1' : '카드 2'}">
                <span class="hook-line top">${h.top}</span>
                <span class="hook-line">${h.bottom}</span>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="rank"><i data-lucide="${item.category ? 'zap' : 'trending-up'}" style="width:14px;"></i> ${item.category ? item.category : 'AI'} TOP ${item.rank}</div>
            <h2 class="ko-title">${item.koTitle}</h2>
            <p class="en-title">${item.enTitle}</p>
            <div class="viral-badge ${hotClass}"><i data-lucide="flame" style="width:14px;"></i> 터질 가능성: ${item.viralRate}</div>
            <div class="meta-section">
                <div class="meta-item"><span class="meta-label">카드뉴스 가이드</span><div class="hook-container">${hookContainers}</div></div>
                <div class="meta-item"><span class="meta-label">분석</span><p class="analysis-text">${item.analysis}</p></div>
            </div>
            <div class="card-footer">
                <span class="news-date">${item.date}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function sortAndRankData(data) {
    data.sort((a, b) => {
        const rateA = parseInt(a.viralRate.replace('%', ''));
        const rateB = parseInt(b.viralRate.replace('%', ''));
        return rateB - rateA;
    });
    data.forEach((item, index) => {
        item.rank = index + 1;
    });
    return data;
}

// [기능 2] 자동 업데이트 로직 (Initialization)
async function initializeApp() {
    const timeDisplay = document.getElementById('update-time');
    const titleElement = document.getElementById('main-title');
    const now = new Date();

    // 1. 타이틀 날짜 업데이트 (M/D 형식)
    const month = now.getMonth() + 1;
    const date = now.getDate();
    if (titleElement) {
        titleElement.innerText = `${month}/${date} 이슈 리포트`;
    }

    // 2. 서버 데이터 페칭 시도
    try {
        const freshData = await fetchLatestNewsFromServer();

        const sortedAiNews = sortAndRankData([...freshData.aiNewsData]);
        const sortedGeneralTrends = sortAndRankData([...freshData.generalTrendingData]);

        const topItem = sortedAiNews[0];
        if (topItem) renderHero(topItem);

        renderSection('news-list', sortedAiNews);
        renderSection('general-trends-list', sortedGeneralTrends);

        // 업데이트 시간 표시
        const nextUpdate = new Date(now);
        nextUpdate.setHours(7, 0, 0, 0);
        if (now >= nextUpdate) nextUpdate.setDate(nextUpdate.getDate() + 1);

        timeDisplay.innerHTML = `
            <div style="font-size: 0.85rem; color: var(--accent-primary); opacity: 0.9;">
                <i data-lucide="check-circle" style="width:14px; vertical-align: middle;"></i> 오늘 자 업데이트 완료 | 다음 예정: ${nextUpdate.toLocaleDateString()} 07:00 AM
            </div>
        `;

        if (window.lucide) lucide.createIcons();
    } catch (error) {
        console.error("데이터 로딩 실패:", error);
    }
}

window.onload = initializeApp;
