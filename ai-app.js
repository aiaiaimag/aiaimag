/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-12
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Tokenmaxxing이란? CEO와 CFO가 두려워하는 새로운 생산성 해킹",
        "enTitle": "What Is Tokenmaxxing? Inside the New Productivity Hack That CEOs Adore and CFOs Fear",
        "date": "2026-04-12",
        "originalDate": "2026-04-11",
        "sourceName": "inc.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOX3VDdTZjOXEyOXhYQTRXNFQ1N18tY1E5MWp5NThwbHZ6Mjk2d2JUTmQ4WGNCRGM5cTh3Tm51WDJiQ3BycUVBV0ktZ0t0UTVvbzQyQzJOQjRZd0FYN21ZbFpXNEZmaXUtaXFPNXFqa3hxRlVKVXpKN0kzaFVaWlptVW1wb3BuWlE2?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! Tokenmaxxing이란? CEO와 CFO가 두려워하는 새로운 생산성 해킹 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Palantir CEO는 AI가 인문학 일자리를 '파괴' 하겠지만 직업 훈련을 받은 사람들에게는 '충분한 일자리' 가 있을 것이라고 말합니다.",
        "enTitle": "Palantir CEO says AI 'will destroy' humanities jobs, but there will be 'more than enough jobs' for people with vocational training",
        "date": "2026-04-12",
        "originalDate": "2026-04-11",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPYUpnTUFwQWpmQURZdzYxblotNzJjMFZROU1TQ2hZdXp5bkFNdGdnYUh6TWk3M2FETUJmQVRWRG91MU9hRHpUNnJVYllybGt3NkZQWFExdjJZR0FlUC1fX0FjdVVXR1FQTXR2azNfY2NUcjR6WHVtNjM2eU5JUTVqWG44M2FQbkFOdUh0eEo3T0pIZ25h?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Palantir CEO는 AI가 인문학 일자리를 '파괴' 하겠지만 직업 훈련을 받은 사람들에게는 '충분한 일자리' 가 있을 것이라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "DOGE에서 AI로: 미래 고용을 위한 도구로 여겨지는 DC 지역의 새로 만들어진 일자리 위원회",
        "enTitle": "From DOGE to AI: DC region’s newly created jobs board seen as tool for future employment",
        "date": "2026-04-12",
        "originalDate": "2026-04-10",
        "sourceName": "WTOP",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOZzdrYjN0UldVZUUzU25pSmJqQUNRQjNkdFRkcjRoT1BnSldIVFY2VmE1b1k0dzBkeDZhTGVHU3U5YkMtYVJIZ24zMTd1c2FhbEQ0NmE4VXdLWmw2RDc5VUtqQzNXYlBDTXpuTUxTM0YyaGxJRTA4WVp0UjVRcjdlMU9jRDRUYWNLUHBobWVxZVRXaWFtZXRVYmU3bGowTWE4VVI5SnZKOUJ5NzlMMnJCMHpqeEYzQTktY3c?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! DOGE에서 AI로: 미래 고용을 위한 도구로 여겨지는 DC 지역의 새로 만들어진 일자리 위원회 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "'제미나이'에 인터랙티브 3D 모델·시뮬레이션 생성 기능 추가",
        "enTitle": "'제미나이'에 인터랙티브 3D 모델·시뮬레이션 생성 기능 추가",
        "date": "2026-04-12",
        "originalDate": "2026-04-11",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBlWWkyRFdxT0t0SjRvRnpKVWkxY0NaZlV3RGZKcVFkdHZ4YWRQN0w2VnhiR2c2MWhjQUdaeW4ycUdkQVNRWWhxYlhaeG42d2dQS3ZraDBBdTRtcm5iS3IzZnhKeldTRXhPZFE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! '제미나이'에 인터랙티브 3D 모델·시뮬레이션 생성 기능 추가 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "당신이 바이브코딩으로 만든 앱, 출시 즉시 '폭파' 될 가능성이 높습니다",
        "enTitle": "당신이 바이브코딩으로 만든 앱, 출시 즉시 '폭파' 될 가능성이 높습니다",
        "date": "2026-04-12",
        "originalDate": "2026-04-11",
        "sourceName": "오마이뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE4yVnNSY2VFRi0zcl9KaFlyYzc4d1dicU1pZ0t4c0hrbjZSZ0NIWXdsZHFyLUNHX0ZISDdPNGYtYTRjcUV1RUNhZm5KcjlYMktrazdDT2ZJMWVkX3RPbDhNWk0xR0RmY0l5YnUxUXVVMXZsN3dhbERn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 당신이 바이브코딩으로 만든 앱, 출시 즉시 '폭파' 될 가능성이 높습니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "2026년 상반기 AI 트렌드, 당신만 모르고 있었다",
        "enTitle": "2026년 상반기 AI 트렌드, 당신만 모르고 있었다",
        "date": "2026-04-12",
        "originalDate": "2026-04-11",
        "sourceName": "브런치",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1qYTBUa1U2a21kczBFVFBDVWpyUExjcnozUVJEOGVwWGg5LXVydnBTdlEzLXNVYWE0LUZUZUhxYy1Ka2JuMWgyT0t1TkU1cl9NZlNn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 2026년 상반기 AI 트렌드, 당신만 모르고 있었다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
