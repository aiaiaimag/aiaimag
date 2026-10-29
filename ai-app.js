/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-29
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "비즈니스 브리핑: AI 일자리 위협에 대비하기",
        "enTitle": "Business Brief: Getting ahead of the AI job threat",
        "date": "2026-10-29",
        "originalDate": "2026-10-28",
        "sourceName": "The Globe and Mail",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQeE1OWlJFc3c4cGNPcnAxVDBkX1F4ckRPSlc5SHMydTN3Mnk2cFFpdDhhZ0UxUi0xamRhbXAzcTdDWi0xSTg2S01ocEVUUFJORlJwY0RpVlc4dDdCU3hYaHBhNElrcURFUlhwYTRwTGNQWmFtUTRfZjRDeHFPaU40bVlwTnVSN1ppa1pfbFlPYU9sa0FQZ0x3UzNKVTBlQnBE?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 비즈니스 브리핑: AI 일자리 위협에 대비하기 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "SAP India는 2030년까지 AI 기술을 두 배로 늘려 2백만 명의 사람들이 미래의 직업을 가질 수 있도록 준비시킵니다.",
        "enTitle": "SAP India Doubles Down on AI Skilling to Prepare Two Million People for the Future of Work by 2030",
        "date": "2026-10-29",
        "originalDate": "2026-10-28",
        "sourceName": "CXOToday.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxONnl0Z3BfYXJNVTZ2cjNaZXh4eGhxSGIzQjFCT2stZ1U1ZEFEd0U0Y2VMdFdzSDNkZV9tOGxCcXlXZUQ1SnVHSHJ5VDBZcW1wWHZsUGxuZXkzbnIxdHdlazZtd2xhd1JFeWlta09FSWhrUGlkX0JLTnVSVWxja21TeEtHdWdHOUJmWU9UbjNFZURMdlVDN1V0MEczcGp5RVVpd0dNSEtlWHpCelpERDlfX3Q1UW9DakFkakNfdzdwX095ZXh5WTl3d1llQndiNkww?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! SAP India는 2030년까지 AI 기술을 두 배로 늘려 2백만 명의 사람들이 미래의 직업을 가질 수 있도록 준비시킵니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Lentz: AI가 업무와 일자리를 재편하고 있지만 숙련된 사용자가 미래를 주도할 것입니다.",
        "enTitle": "Lentz: AI Is Reshaping Work and Jobs, but Skilled Users Will Lead the Future",
        "date": "2026-10-29",
        "originalDate": "2026-10-27",
        "sourceName": "Rio Grande Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNUzhLaUJXUzViaDZ3YmNsR0dtVEs5OXhySnlfeUUtdzYwMG9jVmQxdVdmYTZ5c0hYSjMtczN6OTVIejduQ3ZzZFpBLVpfdVNSZ204R0FIVkh6elVIRUlUckQ0X2cwT1hwN01oVEhzTDExNWJpWWh2LWpHbWNqYjdNOG1aWnhqQVdjT2p0RjVsSkZCbzZHODY2dkxIRkNmOHRWczYyc3VhRVQ3R2x0OVZSODBNSjRlU0c0U3c?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! Lentz: AI가 업무와 일자리를 재편하고 있지만 숙련된 사용자가 미래를 주도할 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "GPT-6.1 Terra 소개",
        "enTitle": "GPT-6.1 Terra 소개",
        "date": "2026-10-29",
        "originalDate": "2026-10-29",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1wQmRIZ3hrNVVkSG0tOFA4aVJYM2JUMGFVclVXZGhlbDFPWXFIUmh0MVpmSndXQjNiQzJzLWFGcW0zMmxuaER4dVByNGFRdFphcnBkXzl1TXd6RU5Pd1RVRUtkRVZScU9U?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! GPT-6.1 Terra 소개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "Tyler Technologies, 실적 발표 앞두고 AI 수익화 전망에 관심",
        "enTitle": "Tyler Technologies, 실적 발표 앞두고 AI 수익화 전망에 관심",
        "date": "2026-10-29",
        "originalDate": "2026-10-28",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE01dkR3ZHpLbGgwQUxoMEYwTGNlQXdIS1BVQmh6R3NPakpmZEJCLWdzX1kzbDZlTWZKOXNEeGlXVENua1lscVRJWXNpZ3hnaHdrSTlTV2lJUjc3WEhRaFVKelR1MW9FY0hJRWxB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! Tyler Technologies, 실적 발표 앞두고 AI 수익화 전망에 관심 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "대웅그룹 다나아데이터, '검진 기반 통합 AI 건강관리 서비스' 출시",
        "enTitle": "대웅그룹 다나아데이터, '검진 기반 통합 AI 건강관리 서비스' 출시",
        "date": "2026-10-29",
        "originalDate": "2026-10-29",
        "sourceName": "팜뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9SVjZWTWR4cmdGdFBoS2g4RGw5RW5ZM1lhcHkxeW85Wklla1NCRjRuc1dVZ3oyLVY4bHFzdElyWWt5SHlLRlZEcXlYNlRYejBlNk1QTTJLZEtuakVWT2dLd0w4c2U1cXcxSUV3Qw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 대웅그룹 다나아데이터, '검진 기반 통합 AI 건강관리 서비스' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
