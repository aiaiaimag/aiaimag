/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "NTUC: 어떤 싱가포르 근로자도 인공지능 일자리 전환에 뒤처져서는 안 됩니다. -제네바에서 국제노동기구 (International Labour Organization) 의 미래 업무 토론",
        "enTitle": "NTUC: No Singaporean worker must be left behind in AI job transition—International Labour Organization future of work debate in Geneva",
        "date": "2026-06-18",
        "originalDate": "2026-06-17",
        "sourceName": "The Independent Singapore News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQUll6Rmsza3A2RzVULVBNUW1RSGV4VFlqUkFWN2VjMTJBNDhGcGNKWW1JWV9MOFBFNlJ3c3hTbXJmbEQ4Y1FkNWEzeGJwU0FpLWtfTHc2SjNXWklKQTlJTzdsVlRIQ3ZLQzNqa050dFljczB6bk1tVTU1aTdxVjJRbWt5aGNQT2U2Mk16RjVablViZHRJWHVwQWdjMWdiamZ4TlZKUHo5ZmhBWEtCYkg2S0NVa0Z3aWtacm5MdVhvUmlLdkxGekFjYTBHLUY4SUtvVk9ZNUJUZC0xc2Y2SVAyLUMybEdzYUZJdGRqbEhpbE1aQQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! NTUC: 어떤 싱가포르 근로자도 인공지능 일자리 전환에 뒤처져서는 안 됩니다. -제네바에서 국제노동기구 (International Labour Organization) 의 미래 업무 토론 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI, 미래의 직업에 중요한 디지털 기술, 전문가들이 나이지리아 학생들에게 말하다",
        "enTitle": "AI, Digital Skills Crucial for Future Jobs, Experts Tell Nigerian Students",
        "date": "2026-06-18",
        "originalDate": "2026-06-17",
        "sourceName": "THISDAYLIVE",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPS1JKRWt2aG5xd1hQTFBoRGUwYjF4c3MydHhuNmVXeUhWSkdxY0JsSFg4LVFfSW82V21RMkE5UVlHRDJMdXl2TTBkSVdjR2dGMGQ1TVVlM2hCbzQzZjkxRnFGWjlIcFMwWGlFT0xaVGtEYy1jajJzQnpBNnEycEk3dlJLVnc4dExVaHpDak5JUGpwLU5wNFNwLVl3QkhCYk5aSVl5MjRBdG9XTWJNVDlybGh3?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 미래의 직업에 중요한 디지털 기술, 전문가들이 나이지리아 학생들에게 말하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2026년 가장 높은 급여를 받는 AI 일자리로 이어질 수 있는 최고의 대학 학위",
        "enTitle": "Top College Degrees That Can Lead to the Highest-Paying AI Jobs in 2026",
        "date": "2026-06-18",
        "originalDate": "2026-06-16",
        "sourceName": "Investopedia",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPQm9BZVB6VzZYUURGRXZNYWFSdk84TGRvRUc2RGROandPR3ZiRTZHXzdUTGJJejlOdno3V2Q2SVhldnR4alJqUEtrdWRLVmktS0JtZG1TRWNqSHJSakt4ZWZYWDBmbkZpV1F6QlhOYWpsWS1qazhPVTN1SzhLdDNabm1vT0ZobkhxcGlpQi1rT0xNdnk3MTFvcm41VXYwZHotMTl2ZU53Y3FDY29SSlE?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 가장 높은 급여를 받는 AI 일자리로 이어질 수 있는 최고의 대학 학위 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "KB부동산, ‘AI 단지분석/비교’ 서비스 출시",
        "enTitle": "KB부동산, ‘AI 단지분석/비교’ 서비스 출시",
        "date": "2026-06-18",
        "originalDate": "2026-06-17",
        "sourceName": "intn.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5MWXBMelJyMVFiT2FUdzgwSjlKdTNZa2xnbUVkdmxfS3FyQjN2aXhqREFaZV91TWs1TFR6b1FzbW1EdUw3YVlYUXFkLU5lbG9lRm1TaU9yZTJ1YUl6Q0Q1MjFFVEY?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! KB부동산, ‘AI 단지분석/비교’ 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "코인베이스, AI 무료 투자 자문 서비스 출시·사업 다각화 기대…주가 강세",
        "enTitle": "코인베이스, AI 무료 투자 자문 서비스 출시·사업 다각화 기대…주가 강세",
        "date": "2026-06-18",
        "originalDate": "2026-06-17",
        "sourceName": "마켓인",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9RWEF2N2NSQnNKOE9OZDhIckZ0aHIwSGlxWUN6aTdZTVdfVXpBRFpBX3c3YmlYb3FrTURuVkRCT1pTTXZKTERWNmZyTHhsZ1M2RWo3NG1yTi1CYllQN0huMTJtdVhzajVDb3h2RE9Ib0ktQ2s?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 코인베이스, AI 무료 투자 자문 서비스 출시·사업 다각화 기대…주가 강세 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "TIME 글로벌AI인공지능액티브 ETF, 연초대비 수익률 100% 돌파…\"주식형 액티브 ETF 1위\"",
        "enTitle": "TIME 글로벌AI인공지능액티브 ETF, 연초대비 수익률 100% 돌파…\"주식형 액티브 ETF 1위\"",
        "date": "2026-06-18",
        "originalDate": "2026-06-17",
        "sourceName": "이투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9feVc2ajNKeWswMTFqMVhqOG9WbHNpSXJ5ZDEwVUpMUUUzTEtIb2cxa3NsYzFORERoWkxSeXJ5MUFPSWthRWVHeUNYR3hwRnNka3RjSA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! TIME 글로벌AI인공지능액티브 ETF, 연초대비 수익률 100% 돌파…\"주식형 액티브 ETF 1위\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Tech & Service"
    }
];



// ─── 렌더링 함수 ──────────────────────────────────────────────

async function fetchLatestNewsFromServer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ aiNewsData, generalTrendingData });
        }, 800);
    });
}

function renderHero(item) {
    // 히어로 섹션 미사용
}

/**
 * renderSection: containerId에 해당하는 영역에 카드를 렌더링합니다.
 * @param {string} containerId
 * @param {Array}  data
 * @param {Object} options
 *   - showDates   {boolean} 수집일·최초발행일 표시 여부 (default: true)
 *   - showEnTitle {boolean} 영문 제목 표시 여부 (default: true)
 *   - showLink    {boolean} 원문 링크 버튼 표시 여부 (default: true)
 */
function renderSection(containerId, data, options = {}) {
    const {
        showDates = true,
        showEnTitle = true,
        showLink = true,
    } = options;

    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';

        const rateValue = parseInt(item.viralRate.replace('%', ''));
        const hotClass = rateValue >= 90 ? 'hot' : '';

        // 영문 제목 (뉴스만 표시)
        const enTitleHtml = showEnTitle && item.enTitle
            ? `<p class="en-title">${item.enTitle}</p>`
            : '';

        // 날짜 & 재발행 배지 (뉴스만 표시)
        let dateHtml = '';
        if (showDates) {
            const originalDateDisplay = item.originalDate
                ? `<span class="original-date" title="최초발행일">📅 최초발행: ${item.originalDate} · ${item.sourceName || '출처미상'}</span>`
                : '';
            const republishedBadge = item.isRepublished
                ? `<span class="republished-badge" title="재발행된 기사입니다.">♻️ 재발행</span>`
                : '';
            dateHtml = `
                <div class="date-info">
                    ${republishedBadge}
                    <span class="news-date">수집일: ${item.date || ''}</span>
                    ${originalDateDisplay}
                </div>`;
        }

        // 원문 링크 버튼 (뉴스만 표시)
        const sourceLinkBtn = showLink && item.sourceUrl && item.sourceUrl !== '#'
            ? `<a class="source-link-btn" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="external-link" style="width:13px;"></i> 뉴스 원문 보기
               </a>`
            : '';

        // 카드 footer: 날짜 또는 링크가 있을 때만 렌더링
        const hasFooterContent = dateHtml || sourceLinkBtn;
        const footerHtml = hasFooterContent
            ? `<div class="card-footer">${dateHtml}${sourceLinkBtn}</div>`
            : '';

        card.innerHTML = `
            <div class="rank">
                <i data-lucide="${item.category ? 'zap' : 'trending-up'}" style="width:14px;"></i>
                ${item.category ? item.category : 'AI'} TOP ${item.rank}
            </div>
            <h2 class="ko-title">${item.koTitle}</h2>
            ${enTitleHtml}
            <div class="viral-badge ${hotClass}">
                <i data-lucide="flame" style="width:14px;"></i> 터질 가능성: ${item.viralRate}
            </div>
            <div class="meta-section">
                <div class="meta-item">
                    <span class="meta-label">🦞 코다리 분석</span>
                    <p class="analysis-text">${item.analysis}</p>
                </div>
            </div>
            ${footerHtml}
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

// ─── 초기화 ───────────────────────────────────────────────────

async function initializeApp() {
    const timeDisplay = document.getElementById('update-time');
    const titleElement = document.getElementById('main-title');
    const now = new Date();

    const month = now.getMonth() + 1;
    const date = now.getDate();
    if (titleElement) {
        titleElement.innerText = `${month}/${date} 이슈 리포트`;
    }

    try {
        const freshData = await fetchLatestNewsFromServer();

        const sortedAiNews = sortAndRankData([...freshData.aiNewsData]);
        const sortedTrends = sortAndRankData([...freshData.generalTrendingData]);

        // 📰 뉴스 섹션: 영문 제목 + 날짜 + 원문 링크 모두 표시
        renderSection('news-list', sortedAiNews, {
            showDates: true,
            showEnTitle: true,
            showLink: true,
        });

        // 💡 트렌드 섹션: 한글만, 날짜 없음, 링크 없음
        renderSection('general-trends-list', sortedTrends, {
            showDates: false,
            showEnTitle: false,
            showLink: false,
        });

        // 업데이트 시간 표시
        const nextUpdate = new Date(now);
        nextUpdate.setHours(7, 0, 0, 0);
        if (now >= nextUpdate) nextUpdate.setDate(nextUpdate.getDate() + 1);

        if (timeDisplay) {
            timeDisplay.innerHTML = `
                <div style="font-size: 0.85rem; color: var(--accent-primary); opacity: 0.9;">
                    <i data-lucide="check-circle" style="width:14px; vertical-align: middle;"></i>
                    오늘 자 업데이트 완료 | 다음 예정: ${nextUpdate.toLocaleDateString()} 07:00 AM
                </div>
            `;
        }

        if (window.lucide) lucide.createIcons();

    } catch (error) {
        console.error("데이터 로딩 실패:", error);
    }
}

window.onload = initializeApp;
