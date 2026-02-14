/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-12
 */

// [뉴스 데이터베이스 - 2026년 2월 14일 업데이트]
const aiNewsData = [
    {
        rank: 1,
        isTopPick: true,
        thumbUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        koTitle: "정부, 2026년 AI 공공 도입에 2.4조 원 파격 투자",
        enTitle: "TechInAsia - Korea to Invest $1.67 Billion in Public Sector AI Integration for 2026.",
        date: "2026-02-14",
        viralRate: "98%",
        hookTitles: [
            { top: "정부가 2.4조 쏩니다", bottom: "대한민국 AI 대전환 시작" },
            { top: "공공기관도 이제 AI 시대", bottom: "역대급 예산 투입의 내막" }
        ],
        analysis: "한국 정부가 작년 대비 5배나 많은 2.4조 원을 AI 공공 서비스에 투자하기로 했습니다. GPU 확보부터 데이터 구축까지, 국가적 차원의 AI 생태계가 본격 가동됩니다."
    },
    {
        rank: 2,
        thumbUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        koTitle: "삼성, AI 칩 시장 승부수… HBM4 양산 출하 개시",
        enTitle: "Reuters - Samsung Begins Shipping HBM4 Chips to Secure Lead in AI Market.",
        date: "2026-02-14",
        viralRate: "95%",
        hookTitles: [
            { top: "삼성의 대반격", bottom: "차세대 HBM4 칩 출하 시작" },
            { top: "엔비디아 잡아라", bottom: "메모리 반도체 1위의 위엄" }
        ],
        analysis: "삼성전자가 HBM4 양산을 시작하며 AI 반도체 주도권 탈환에 나섰습니다. SK하이닉스와의 치열한 경쟁 속에서 글로벌 빅테크들의 수주 여부가 관전 포인트입니다."
    },
    {
        rank: 3,
        thumbUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        koTitle: "글로벌 트렌드: 'Physical AI' 열풍, 소프트웨어를 넘어 로봇으로",
        enTitle: "Gartner - Physical AI: Moving from Digital Screens to Autonomous Reality.",
        date: "2026-02-14",
        viralRate: "92%",
        hookTitles: [
            { top: "화면 밖으로 나온 AI", bottom: "이제는 '피지컬 AI' 시대" },
            { top: "로봇이 동료가 된다고?", bottom: "현실 세계를 배우는 AI의 등장" }
        ],
        analysis: "데이터 속에만 있던 AI가 로봇과 IoT를 통해 현실 세계(Physical World)로 나오고 있습니다. 인간과 함께 작업하는 자율 협동 로봇이 산업 현장의 핵심이 될 전망입니다."
    }
];

const generalTrendingData = [
    {
        category: "Education",
        rank: 1,
        thumbUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        koTitle: "수능 영어 지문도 AI가? 교육부, 난이도 조절에 AI 검토",
        enTitle: "Korea JoongAng Daily - Ministry Considering AI for Drafting National Exam Passages.",
        date: "2026-02-14",
        viralRate: "96%",
        hookTitles: [
            { top: "수능 문제도 AI가 낸다?", bottom: "교육부의 파격적인 난이도 조절" },
            { top: "킬러 문항 제로 작전", bottom: "AI가 분석한 최적의 수능 지문" }
        ],
        analysis: "수능 영어의 난이도 균형을 맞추기 위해 AI를 활용하는 방안이 논의 중입니다. 교육계의 반발과 기대가 교차하는 가운데, 공정한 평가 모델이 될 수 있을지 주목됩니다."
    },
    {
        category: "Security",
        rank: 2,
        thumbUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        koTitle: "카카오·네이버, 보안 우려로 오픈소스 AI 에이전트 '제한'",
        enTitle: "Times of India - Big Tech Restricting Open-Source AI Agents Over Privacy Risks.",
        date: "2026-02-14",
        viralRate: "89%",
        hookTitles: [
            { top: "내 정보가 샌다고?", bottom: "오픈소스 AI 에이전트의 명과 암" },
            { top: "네이버·카카오의 경고", bottom: "보안이 보장되지 않는 AI는 금지" }
        ],
        analysis: "편리한 오픈소스 AI 에이전트가 데이터 유출 통로가 될 수 있다는 경고입니다. 국내 대표 플랫폼사들이 내부 보안을 강화하며 AI 도입의 신중론을 펼치고 있습니다."
    },
    {
        category: "Workplace",
        rank: 3,
        thumbUrl: "https://images.unsplash.com/photo-1522071823991-b9671f9cfd0b?auto=format&fit=crop&q=80&w=800",
        koTitle: "2026 직장인 필살기: 'AI 코사이언티스트' 협업 역량",
        enTitle: "Forbes - The Rise of Co-Scientist Frameworks in Corporate R&D.",
        date: "2026-02-14",
        viralRate: "91%",
        hookTitles: [
            { top: "AI가 연구 동료라고?", bottom: "코사이언티스트와 일하는 법" },
            { top: "지루한 분석은 AI에게", bottom: "창의적인 결정에만 집중하세요" }
        ],
        analysis: "AI가 단순 보조를 넘어 과학적 발견과 복잡한 분석을 주도하는 '코사이언티스트' 모델이 확산됩니다. 이를 잘 다루는 인재가 기업 R&D의 핵심으로 부상하고 있습니다."
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
