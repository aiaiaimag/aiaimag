/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "McKinsey에 따르면, AI가 업무 방식을 변화시키면서 흑인 및 라틴계 근로자가 새로운 직업을 필요로 할 가능성이 20% 더 높다고 합니다.",
        "enTitle": "As AI reshapes work, Black and Latino workers are 20% likelier to need a new career, McKinsey says",
        "date": "2026-11-28",
        "originalDate": "2026-11-27",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNbUExN0JOakJfbWQzNFAtckNBaW85VVI3ZFJsMU1ZWE5RVHgxZW1abEVsQjduMzFFcXY3TGxQdkh3NElvTi1VLXBVN19vekNfbUJ0YkhJSloyV2UtaE1fYmxKMDhuR1l2dGM3S3QwaTMyNGJvMXoxWkpQX09KQnFmNnFzc1RhX0FEcElUT19pbFgtLWFvTzdSdTBEVi1MRjNMalE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! McKinsey에 따르면, AI가 업무 방식을 변화시키면서 흑인 및 라틴계 근로자가 새로운 직업을 필요로 할 가능성이 20% 더 높다고 합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "미국 사무직 일자리는 이전 추세보다 150만 개 뒤처져",
        "enTitle": "U.S. white-collar jobs trail old path by 1.5 million",
        "date": "2026-11-28",
        "originalDate": "2026-11-27",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOWnBkTWVkaGVjTnpIQ0JWb3h2VmdGMmtLaExpLWhBcHJSTmYxUUlZb2FpMzhVem9hSDk3OEpnZER4NGViTFRocExKOHgxbG5wQlBycGdSTWc2dXoxYndQV0tqM0NoV0hpbVczU0FWUTE1ckdoU0RYX0ZwZncyYnkzbXFSa29ORFNTeUkxeW9La2ZzWEVZQXc?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 미국 사무직 일자리는 이전 추세보다 150만 개 뒤처져 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 기술에 대한 수요가 계속 증가하면서 호주의 구인 광고가 3.9% 감소했습니다.",
        "enTitle": "Australia’s job ads fell 3.9% as demand for AI skills kept rising",
        "date": "2026-11-28",
        "originalDate": "2026-11-27",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOaFRWRnNSYnlVeER3T3dtZ0JzY19OYmZlV2VNS1ZuMVBqZzQ5ZFo5MlN4cUctX2FKZmtpNW5fbjRkRUplSUdIMG4xSG81cC1JY3dDX3BKUFJtZ1FISkxfOXQwNGRaNE12OXp5LWR0a1pHb2QwZGU5czZUa2xGQlQ4aUpzZEhPejE1NEJfaDJKQ1UxSTQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI 기술에 대한 수요가 계속 증가하면서 호주의 구인 광고가 3.9% 감소했습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "래블업, 로컬 AI 앱 'AI:GO 2.0' 출시…PC서 에이전트 실행",
        "enTitle": "래블업, 로컬 AI 앱 'AI:GO 2.0' 출시…PC서 에이전트 실행",
        "date": "2026-11-28",
        "originalDate": "2026-11-27",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBBeHVOeWZOelpPZkJ4Nl8zeVl2R3cwMTU2aFByVkEtNkpHR2hPRDJGbEd4ZUpXVW1sNVFzRnZsdFdsMHctOXRsMUt5NEZzQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 래블업, 로컬 AI 앱 'AI:GO 2.0' 출시…PC서 에이전트 실행 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "래블업, 로컬AI PC 앱 '에이아이고 2.0' 출시",
        "enTitle": "래블업, 로컬AI PC 앱 '에이아이고 2.0' 출시",
        "date": "2026-11-28",
        "originalDate": "2026-11-27",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1Xb1hCaTYyeU1DOENud1lIMzIyNlE2YzJNVDl6RXJDdW1wRzBaVU5mZl9pM1lyaE9WS1RnM0pqa1ltbHBkZ1hWYmcwZmRMZkNvUHBtU2psZG51UXZTRFdoUUJzdnVONlMyT3c?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 래블업, 로컬AI PC 앱 '에이아이고 2.0' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"코딩은 클로드, 일상 업무는 딥시크\"…美 기업들의 반전 [차이나 워치]",
        "enTitle": "\"코딩은 클로드, 일상 업무는 딥시크\"…美 기업들의 반전 [차이나 워치]",
        "date": "2026-11-28",
        "originalDate": "2026-11-28",
        "sourceName": "한국경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9WWGFWOU80ckNVeW8xMzNzN1dkOTFqRE9GVlA4TzBxVGRCQVU4d3RHOWZiRkNhYkpOOUEwLXRZay1iRmdJWS1yb29DN2N3QlBqYVNnQVVUaVFZZw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"코딩은 클로드, 일상 업무는 딥시크\"…美 기업들의 반전 [차이나 워치] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
