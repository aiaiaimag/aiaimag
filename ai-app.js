/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-07
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "MAH Financial Services | 5/5/26",
        "enTitle": "MAH Financial Services | 5/5/26",
        "date": "2026-05-07",
        "originalDate": "2026-05-05",
        "sourceName": "ktnv.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9Xd29vTkhTengyanpCU2ZPYzUtWnF4QWxtM1FwSnpiTDlKSk5kZHo5SEhTd1RBcFhJTHRRQ2tnSjVNaVNoTTBfM044RGV6M25CdEdkWm9QUWwxYllNM3lONGZiNjdPSjMycUkzVFNoSHk?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! MAH Financial Services | 5/5/26 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "싱가포르는 AI 전환기에 미래의 일과 생계를 기회에 맡기지 않을 것입니다: Tan See Leng",
        "enTitle": "Singapore will not leave future of work, livelihoods to chance amid AI transition: Tan See Leng",
        "date": "2026-05-07",
        "originalDate": "2026-05-06",
        "sourceName": "CNA",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPZkVpeXZuWFRNckRnNDRKRWpuWG5VN1Nub2ttQ0d4a1h5bGQzNmM4amlzRFJkVWZxLXFwNlViY25CeFQxT05zcjBWZF9MT0xaMmdjNTVuVnF5RGFTeDdjZTAzNHdjQ2lQSTRyc3Z4ZkptY0luX2V3N1I3cEFCdVE2TTYxUlBhRFBsNy1ZUWI2RGR1ZGhXMGo0N1NZa1VsUTVIcE5CdWJQbjZfTmZVWHJkdg?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 싱가포르는 AI 전환기에 미래의 일과 생계를 기회에 맡기지 않을 것입니다: Tan See Leng 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "바이러스 성 AI 이미지 트렌드가 ChatGPT, Google Gemini 성장을 촉진하고 있습니다.",
        "enTitle": "Viral AI image trends are fueling ChatGPT, Google Gemini growth like never before",
        "date": "2026-05-07",
        "originalDate": "2026-05-05",
        "sourceName": "Techlusive",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNY3llR0I5YmQwQzVKV1lRZ3N4UXB5YThRdHNDUGU2RUM2WHYzcnlLVW5BcEtfZEZQWExnMG5pbXkwc2s1bThVU3prd0Y5enNWY3V2c01QeXluSTJzelBhUzRYZEw1S1d4WTRjM3NKSjNuQzRVTFA3V014OUI4ZnJENkUwbkJuRmZfbGlsYUk3MUNwakFURFpGR1QtM19OaDd0RmdDcGgxNVJrT0MxZHpQaXp4NUlzeFR6ZEZUMDNEeGdFeE55Mkx0Slo4TzNZY2YyYUlBWXFR0gHbAUFVX3lxTE5NLU5henVhRUhtWnRlTDhwSFprcEdSdUZaTUtnN0Y3RTN5OGpuUXVGeG4yeXdaQ0Y3N0dDVFdTdTRzNVp5OXdCYkw4ZmU5elhOOWZ3bUhSQW43VEtpek9QTjJOTXZZY0NSdEJhM0xwMVplS0tIS2hlYUJ2SVl6LUJKeVoySDJpN1B6blI3M2tGbk16eUNMR1ZiUjlxc1I1d1g1cDgwSE0wekNzWktOVjNPM09XNnktV1ZrWlplMmRtYXdoZTdDdzlOSkxvaUl6RDlGRUhPNHkzZkFtSQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 바이러스 성 AI 이미지 트렌드가 ChatGPT, Google Gemini 성장을 촉진하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“질문 한번에 매물·일자리 추천”···사랑방, AI 검색 서비스 전면 도입",
        "enTitle": "“질문 한번에 매물·일자리 추천”···사랑방, AI 검색 서비스 전면 도입",
        "date": "2026-05-07",
        "originalDate": "2026-05-06",
        "sourceName": "무등일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5fZFg2YVFGeEJuWnRQcWdIN2ZoZjhJaEpuRGwxandpMWlwSk1MQUdpVWlYTUJoVVJhX29oV2NPbWkyUEFfNk1iWFBFY3M?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “질문 한번에 매물·일자리 추천”···사랑방, AI 검색 서비스 전면 도입 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "7만명 쓰던 클로드, 1년새 100만명…챗GPT서 갈아탄 20대",
        "enTitle": "7만명 쓰던 클로드, 1년새 100만명…챗GPT서 갈아탄 20대",
        "date": "2026-05-07",
        "originalDate": "2026-05-06",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9KV2tiMHFxYmNmQU1ITFY2RkxLdl93bDdXSU9OSm5PSU1GNTJyTWVwSVFjWWJUN2pHUFoxdU1Sdk9Zb1FJUFR5MGdkNVpDdmM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 7만명 쓰던 클로드, 1년새 100만명…챗GPT서 갈아탄 20대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "트립비토즈, ‘ChatGPT 앱’ 정식 출시",
        "enTitle": "트립비토즈, ‘ChatGPT 앱’ 정식 출시",
        "date": "2026-05-07",
        "originalDate": "2026-05-06",
        "sourceName": "트래블데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9xUm5mLVZFLTdsVGlHQVZUVUd3VjhUNHJhdlFHdXhXcVNOeWpIN1lZQmtuTzFCMXNwVi04Rm5NX01wVE93aVF4YlBHZXhMNGRaelVYNVU2dGlDcXRmQW41RDBGRzBtWnZqWlZuaEJNdzE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 트립비토즈, ‘ChatGPT 앱’ 정식 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
