/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-19
 */

// [뉴스 데이터베이스 - 2026년 2월 19일 업데이트]
const aiNewsData = [
    {
        "rank": 1,
        "isTopPick": true,
        "thumbUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        "koTitle": "앤스로픽, '클로드 4.6 오퍼스' 출시… 100만 토큰 컨텍스트 지원",
        "enTitle": "Anthropic Debuts Claude Opus 4.6 with One-Million Token Context Window.",
        "date": "2026-02-19",
        "viralRate": "99%",
        "hookTitles": [
            {
                "top": "앤스로픽의 역습",
                "bottom": "클로드 4.6 오퍼스 전격 공개"
            },
            {
                "top": "100만 토큰의 위엄",
                "bottom": "책 수백 권을 한 번에 읽는 AI"
            }
        ],
        "analysis": "앤스로픽이 코드 작성을 넘어 문서 분석, 검색 성능을 극대화한 클로드 4.6을 공개했습니다. 100만 토큰 창을 통해 방대한 데이터를 한 번에 처리하며 기업용 AI 시장의 판도를 흔들고 있습니다."
    },
    {
        "rank": 2,
        "thumbUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        "koTitle": "가트너 전망 \"2026년 기업 앱 40%가 'AI 에이전트' 품는다\"",
        "enTitle": "Gartner - 40% of Enterprise Applications to Feature AI Agents by 2026.",
        "date": "2026-02-19",
        "viralRate": "96%",
        "hookTitles": [
            {
                "top": "이제는 '에이전틱 AI' 시대",
                "bottom": "스스로 일하는 AI가 몰려온다"
            },
            {
                "top": "직장 동료가 AI?",
                "bottom": "기업 앱 40%에 에이전트 탑재"
            }
        ],
        "analysis": "단순 챗봇을 넘어 스스로 판단하고 실행하는 '에이전틱 AI'가 대세입니다. 가트너는 내년까지 기업용 소프트웨어의 상당수가 자율 에이전트 기능을 탑재할 것으로 내다봤습니다."
    }
];

const generalTrendingData = [
    {
        "category": "Physical AI",
        "rank": 1,
        "thumbUrl": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        "koTitle": "화면 밖으로 나온 AI… '피지컬 AI'와 로봇의 결합 가속화",
        "enTitle": "Physical AI: Moving from Screens to Autonomous Robotics.",
        "date": "2026-02-19",
        "viralRate": "94%",
        "hookTitles": [
            {
                "top": "눈앞에서 움직이는 AI",
                "bottom": "피지컬 AI가 세상을 바꾼다"
            },
            {
                "top": "화면 밖은 위험하지 않아",
                "bottom": "로봇과 AI의 완벽한 조화"
            }
        ],
        "analysis": "2026년 AI 트렌드는 '피지컬'입니다. 소프트웨어에 갇혀있던 AI가 로봇과 결합해 제조, 물류, 가전 등 현실 세계에서 인간과 협업하는 단계로 진화하고 있습니다."
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
    const container = document.getElementById('top-pick-list');
    if (!container) return;
    container.innerHTML = `
        <div class="hero-card">
            <div class="hero-thumb-wrapper">
                <img src="${item.thumbUrl}" alt="Top Issue" class="hero-thumb">
                <div class="hero-overlay">
                    <div class="hero-thumb-text">
                        <span class="line-top">${item.hookTitles[0].top}</span>
                        <span class="line-bottom">${item.hookTitles[0].bottom}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
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
