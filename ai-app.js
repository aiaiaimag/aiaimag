/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-29
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 노동 시장 추적기: 채용, 채용 및 채택",
        "enTitle": "AI Labor Market Tracker: Jobs, Hiring and Adoption",
        "date": "2026-07-29",
        "originalDate": "2026-07-28",
        "sourceName": "Revelio Labs",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNOFhEMTBBOTBtUTJwV1hCUEZlMENwMWhvanpXSUZRV25kbHo0ejZGaGUtUTJnUGZzQkRMRGYyTGZ3X09aYVFmZVNYc0dOYnhTdUo3ZE15R08tNmJ3VnM5djRrZ1NHVEQ0dVV1WUYyU2FlN0FxZmtjWHhOSko2enFjem12TkZPdm82TTRubHFmRTE5VnlGM2RzeA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI 노동 시장 추적기: 채용, 채용 및 채택 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "엔비디아 CEO 젠슨 황 (Jensen Huang) 은 AI가 일자리를 죽이는 것이지 일자리를 잃는 것에 대한 두려움은 ‘정확히 거꾸로‘ 가 아니라고 말합니다.",
        "enTitle": "Nvidia CEO Jensen Huang says AI kills tasks, not jobs and job-loss fears are ‘exactly backwards’",
        "date": "2026-07-29",
        "originalDate": "2026-07-28",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNNDVRbVpnQ1RfN3pFdVhvOVJsOEFjcm1NMjBrOEZPRG9hY2Z4UkpwUEFSM3hHaFQyeFJidnFscTBIclFBQlVqZ0U4Y3dEdDBpU3Mxbmh0Vy1td0FEOE5JZWRkaG93VEFJbnA3Q0VYSEJkZEpVVmdxRzBHcHJwZTBBUDFFQQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 엔비디아 CEO 젠슨 황 (Jensen Huang) 은 AI가 일자리를 죽이는 것이지 일자리를 잃는 것에 대한 두려움은 ‘정확히 거꾸로‘ 가 아니라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "The HackerNoon Newsletter: AI 생산성이 결함이 있는 지표인 이유 (7/28/2026)",
        "enTitle": "The HackerNoon Newsletter: Why AI Productivity Is a Faulty Metric (7/28/2026)",
        "date": "2026-07-29",
        "originalDate": "2026-07-28",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5xNE9CN2llSEhNZGFQbGMxRkxCZDFmY3F6dkJ1RlNwZndIQTQyRWNWY01CUUpjWE9SUDFmSkd4RlM3Tmp6SWxjNzIxdXNoMTU4dWNWY2NR?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! The HackerNoon Newsletter: AI 생산성이 결함이 있는 지표인 이유 (7/28/2026) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "【AI 시대 소비 트렌드】 (5) 소상공인도 AI에게 추천될 수 있는 브랜드가 되어야 한다",
        "enTitle": "【AI 시대 소비 트렌드】 (5) 소상공인도 AI에게 추천될 수 있는 브랜드가 되어야 한다",
        "date": "2026-07-29",
        "originalDate": "2026-07-28",
        "sourceName": "브랜드뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9PZl8ycEZJRGJMc2ZabWt5NTF3U3VtaDBXZjZyTUhTRGI1T2x6WTRQVHdUemp5TU9SWTNnYmRPR2R4QkxwaDBmd0tfUjduT0RGQjNaUkZrMlF6ZU9SWW5OWEZlTVQ1WkRSS0VYcA?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 【AI 시대 소비 트렌드】 (5) 소상공인도 AI에게 추천될 수 있는 브랜드가 되어야 한다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "벼룩시장, AI 자기소개서 작성 서비스 출시",
        "enTitle": "벼룩시장, AI 자기소개서 작성 서비스 출시",
        "date": "2026-07-29",
        "originalDate": "2026-07-28",
        "sourceName": "워크투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9ubENiYVllRnVGQjd3RlJKT3ZnQmZfR0NOUC1GaUZ1a3MtbTRYMURXTmUwUm4xSlRiTjI5QVpKdDdnQTBtcE5EMlpwRVh2WUZ6bGsxUTRrWVI0NVNkNkhKU1hocW1qd1hZQ3lqLQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 벼룩시장, AI 자기소개서 작성 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "‘해킹 비서’ 돼버린 AI... 클로드 데스크톱 악용 공격 실험 또 성공",
        "enTitle": "‘해킹 비서’ 돼버린 AI... 클로드 데스크톱 악용 공격 실험 또 성공",
        "date": "2026-07-29",
        "originalDate": "2026-07-28",
        "sourceName": "보안뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9WVzZmb01nV2ZDc2RPNzZnSmxfQU81S2pNMnpBTmFKdng4TjRCZHBGZ3ExRGF3TlBhUzNMc0dQYVZHZXUtU0Z2eUpHTko0MUZiaFJ4N0YycE9qMGNnWU1R?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ‘해킹 비서’ 돼버린 AI... 클로드 데스크톱 악용 공격 실험 또 성공 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
