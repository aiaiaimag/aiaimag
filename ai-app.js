/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스",
        "enTitle": "OpenClaw: all the news about the trending AI agent",
        "date": "2026-07-01",
        "originalDate": "2026-06-30",
        "sourceName": "The Verge",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNU21qZE10LUlJT1lXNS1MbENLcGVzMWlhTjJMbkRwTVRlWWZyQzkxTWlhZUMwelM2NU5PX1h2MG12Zkxxc281LWFrcDZzRFFQbkh6dENseGZHYXdGUjloVmxSY1ZiYWg3djhnZVRCWEVkWS1kNHZ5VUhHT0pFejBuLURn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI로부터 일자리를 구하기 위한 중국의 계획",
        "enTitle": "China’s Plan to Save Jobs From A.I.",
        "date": "2026-07-01",
        "originalDate": "2026-06-30",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQOERiSFVoaHY5ZkNwWURzMWUyRDV3ZHl1MkpuZDlDcVhQaXN1dEhYQXZhd3oxNFdjYUZFOFFQTW1LdUItQ092ODRSVV9ickRoT1pwYWNJVlQwQ1NNVS0teExQbkM3WkUwSmd2LUlmcy1waFdKSkptcHJpbEM2MV9iZlZtUQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI로부터 일자리를 구하기 위한 중국의 계획 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "새로운 캘리포니아 연구에 따르면 고학력 근로자가 AI로 인해 가장 큰 피해를 입는 것으로 나타났습니다.",
        "enTitle": "New California study finds highly educated workers most harmed by AI",
        "date": "2026-07-01",
        "originalDate": "2026-06-30",
        "sourceName": "SFGATE",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE9kRkxnT19BVHVNbjYzVEtQYUlKU29MaTctRzJBOFRkQzh5b2xBb2I4SzZfQWo5cUxDR2VRVEVsVHBYb1ZxZFo4RkNfVEFoSHNfRjVxb3dnZVpmbDJnZ2VVdTJ3MldRYXgtU2xCTnhLbnQ5RV9LdV9RdzBLb24?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 새로운 캘리포니아 연구에 따르면 고학력 근로자가 AI로 인해 가장 큰 피해를 입는 것으로 나타났습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, 향상된 AI 성능의 클로드 소네트 5 출시",
        "enTitle": "앤트로픽, 향상된 AI 성능의 클로드 소네트 5 출시",
        "date": "2026-07-01",
        "originalDate": "2026-06-30",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1jaVhiQWdXeXI3TWhrUXpLQ0NQay1YaEZ4VVNiVXFVNlZER1d5d05ZOTZyanRWbzYxTUJ1VG9WRXdIRDZUWGw2cGM5R2NoWXNoSXZVVWotSGdGSWFCa0hXZGZBUXFXbTA1SkZSd1lIS2tDOHRWUmVB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 향상된 AI 성능의 클로드 소네트 5 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "커서, iOS 모바일 앱 출시...스마트폰으로 AI 코딩 에이전트 실시간 제어",
        "enTitle": "커서, iOS 모바일 앱 출시...스마트폰으로 AI 코딩 에이전트 실시간 제어",
        "date": "2026-07-01",
        "originalDate": "2026-06-30",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5WUjRMeFNGaWtRb3lqcF9aeVRHTkExeWMwbC00dzFlVnYwamVERXNtcmp3amlNVkpFSFJxQ04zamIzY25OZEZkdFdlT2JWRVU5ZV9PNTdKREsydXMzUDZwclh6SkRyM2VWcmc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 커서, iOS 모바일 앱 출시...스마트폰으로 AI 코딩 에이전트 실시간 제어 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽, 저가형 AI '클로드 소네트5' 출시…\"AI 비용 절감 겨냥\"",
        "enTitle": "앤트로픽, 저가형 AI '클로드 소네트5' 출시…\"AI 비용 절감 겨냥\"",
        "date": "2026-07-01",
        "originalDate": "2026-06-30",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB3a3pJbVlUNTJmcUhXVmluRk45S0piN0VwTW15bkJYWk00cmhBWUZWckpRZC16WGIwZ3V6OTlCYkpZT2hpZmkzRk5IYmJkeGZJaG5PUUgwRENNVG1mUkJTblNUUlM5UXM?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 저가형 AI '클로드 소네트5' 출시…\"AI 비용 절감 겨냥\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
