/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "‘사람들이 직업을 좋아하지 않는다고?’ Perplexity CEO의 AI 정리해고 발언은 반발을 불러일으킨다.",
        "enTitle": "‘People don’t like jobs’? Perplexity CEO’s AI layoff comment triggers backlash",
        "date": "2026-04-02",
        "originalDate": "2026-04-01",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxONzlieUNDbnh6UHYyMTluejdaUFdlZjE1bkp4X3QzcWN2UXprb0lEQ0VEQzd4bkVWZ2tzc0ZOQ1ByZlZOU1lNUmhna2d0LVJGUHdyTnRBcl9Fd2lhZGpuLUljS0k2TEtsU3ZUc0FKNEw5TTJFX3pPT0pCNi02ZHUxVExVcS1qaUJxZk9oSlNyZnUxdko5SVpfTkRPeVpaT1I0aTdhbkhEdXdDcjVPOXYza2xRNjk4MFBkVVdHcHVUN2NxZnpZeE50ZXo3YlUyTC00TXB5Ri1Id0hZY3dKVHVqVDhsUdIB6AFBVV95cUxNZjRKZlpFWXRsTWNtLTFXNjBjbjN4V2hrUFlVYXNsLS15RnAzTzRQSmN6TjR2a0pqNzNNTnc5Z0Q3YjdWbmlqNVprOElpa3l1cnRrWmhNWnVCSzF4bnNUYkxwUUNremxxZjJFVk9ZWXhxS1NNZE1QRUtYdUNrcklBVThQdEdUQkpDRVY3RXVocG80Ull6a2c2eU8xQkt2OTFPc1phSVpDUzFkM0R4MG41SXJaR2JPV2tXczJwdTMzYktvSG0wMHQ2X1ZSR1lUa3ZGcE9zSUI2cS1XS1ZpN19qOGFIMEJJY0R6?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! ‘사람들이 직업을 좋아하지 않는다고?’ Perplexity CEO의 AI 정리해고 발언은 반발을 불러일으킨다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI로 대체되지 않는 직무는 무엇인가요?",
        "enTitle": "Which Jobs Won't be Replaced by AI?",
        "date": "2026-04-02",
        "originalDate": "2026-04-01",
        "sourceName": "vocal.media",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5waDNqZVhLel9SVWpEU2N5MDIwMnYxVUFqSndnbjBEN2xxSUh6RzZTLU0wLUNZQUhUQ29jMHllLTFzeWJXSFNWRExmNlROaEdleFppQWFEZFRFVTJGNnM0cVZDek9CQ3FG?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI로 대체되지 않는 직무는 무엇인가요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능, 직업 및 불확실성: 선도적인 전문가가 우리가 기대할 수 있는 것에 중점을 둡니다.",
        "enTitle": "AI, Jobs, and Uncertainty: A Leading Expert Weighs In on What We Can Expect",
        "date": "2026-04-02",
        "originalDate": "2026-03-31",
        "sourceName": "entrepreneurship.babson.edu",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5RV2ZoZmVoWDhqczFRWDMwcTkxZk5pY0VWdnVYQ3hUMkxPbUg2MnFxcWQ4U29HckJJTFJqWldoVW0yMGZHTS1FcF9WTWxoeTY5SUs4Q0hFemFCeklmZklfUEpPMzVuZ1Yx?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능, 직업 및 불확실성: 선도적인 전문가가 우리가 기대할 수 있는 것에 중점을 둡니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI 의료·멘탈케어까지…마이데이터 신규 서비스 4종 출시",
        "enTitle": "AI 의료·멘탈케어까지…마이데이터 신규 서비스 4종 출시",
        "date": "2026-04-02",
        "originalDate": "2026-04-01",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9PNWJsOFZGUUVSNzJvU0lVeXJ1b3AyU090ZG5YTmxnSkpHOFh4bTZBZW95NWV3SHJJRGFYSjlVOERIbUxXaHJnV2QxZm12Zw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 의료·멘탈케어까지…마이데이터 신규 서비스 4종 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "차 안으로 들어온 챗GPT…오픈AI, 애플 카플레이 전용 앱 출시",
        "enTitle": "차 안으로 들어온 챗GPT…오픈AI, 애플 카플레이 전용 앱 출시",
        "date": "2026-04-02",
        "originalDate": "2026-04-01",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1YVF9fTjJJU05TazVZS2VOcy1GbzRPR2xfeTVWVGlva1o2RU5BUll3UGJ4Q3l6T1dqY2JualphTDI5bVgwQWRZZnQ4dlFlWUd1TU9LYXpodXlKZkIzWFA3ODZtSkE4dHdwdU5YV0kzQ1k2NXc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 차 안으로 들어온 챗GPT…오픈AI, 애플 카플레이 전용 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "“AI 시대, 일의 미래는 아직 쓰이지 않았다”...링크드인 로슬란스키 CEO, 커리어 전략서 출간",
        "enTitle": "“AI 시대, 일의 미래는 아직 쓰이지 않았다”...링크드인 로슬란스키 CEO, 커리어 전략서 출간",
        "date": "2026-04-02",
        "originalDate": "2026-04-01",
        "sourceName": "aitimes.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9wWGlRcThFakpGaFFXY1hzU19LTXhtWlJ5QVJXb2lFYVk5c3NxR0lNcDJqdFNScGZfQXIxUW5aNEQ3TWlBdE03OXJsUWc1NGt4bHNBZl9QS2cxRjdhRnRLWUstYjVMYTg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! “AI 시대, 일의 미래는 아직 쓰이지 않았다”...링크드인 로슬란스키 CEO, 커리어 전략서 출간 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
