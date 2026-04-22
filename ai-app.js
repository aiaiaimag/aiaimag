/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능과 일의 미래: 인공지능 리터러시가 이제 필수인 이유",
        "enTitle": "AI and the Future of Work: Why AI Literacy Is Now Essential",
        "date": "2026-04-23",
        "originalDate": "2026-04-22",
        "sourceName": "Modern Ghana",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOeXZaWlo3TkVmQkZlWjF3UUpkZnRvZ052QXlxbWM4Z29PcTVFamxRNFFkX1gxT2lNdkxpblQxWlVRMzJabF8wRUtxLXB4OWVkb2I4aHRjNmZ2Zk1mSXBjMHBrSGRzZ05LMmdIYV9TYXkwM0hJdFktWkZUNzhGQ21mcW1TcF9yMXp3NVItLVNSS0E3bWd50gGTAUFVX3lxTE93NUFEd21tU0pSdTVBaGQySVFRYzlZVDJXdmMyYzYwNGZCdmRDa01PemJvLXBMWWNyVGl5dzNzcU1ldmNhZXBzVzVGRTUzWmlWdlNmaXJ0eXdVdFVpVzZzZkgxemoyN2lTMEhWTFN1YzVKeXhIRm05MVBab05zLTdyR3N1Z0MwMUZMdTl5dzFfRGNrNA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능과 일의 미래: 인공지능 리터러시가 이제 필수인 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "노벨상을 수상한 경제학자는 Anthropic CEO의 화이트 칼라 일자리 폐기에 대한 경고로 확신하지 못합니다.",
        "enTitle": "Nobel Prize-winning economist isn't convinced by Anthropic CEO's warning of a white-collar jobs wipeout",
        "date": "2026-04-23",
        "originalDate": "2026-04-22",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPVUliWDd4TEphS2gzLWU4NHBfU19nTXdrbHluNURqSDJwZmpxUTEzSjRlcnBZNUFDNUFjRUpjR2NUTjQ2cm1hZVczM3BrTTBQY2kzX2pNZThfY0NER2hyVEk4bWE0RnkzSGZNMEx6b3ItOTRhdlVBTklGT1lBMW14M1gyVWNnUHAzdWp3aEltS3NPeTRIMnU5eHdoMTZ1czR0?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 노벨상을 수상한 경제학자는 Anthropic CEO의 화이트 칼라 일자리 폐기에 대한 경고로 확신하지 못합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직장 내 AI: 2025년 보고서 | 맥킨지",
        "enTitle": "AI in the workplace: A report for 2025 | McKinsey",
        "date": "2026-04-23",
        "originalDate": "2026-04-22",
        "sourceName": "McKinsey & Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직장 내 AI: 2025년 보고서 | 맥킨지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "너티코드, AI 감정 기록 앱 '마이모리' 출시 1년 만에 글로벌 다운로드 50만 건 돌파",
        "enTitle": "너티코드, AI 감정 기록 앱 '마이모리' 출시 1년 만에 글로벌 다운로드 50만 건 돌파",
        "date": "2026-04-23",
        "originalDate": "2026-04-22",
        "sourceName": "인공지능신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFByODVNbUJVd1AySlNBZjgtYl95SWhiSXBaN2x1SllCekJtWDdHQkhaTTVZVjl3U2cwWlNFRkRCM29QbXpyY3BGVzlKTFJDM1Q3TzNVM2c4NVRXVHJhWENuUGpEbzJSQjA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 너티코드, AI 감정 기록 앱 '마이모리' 출시 1년 만에 글로벌 다운로드 50만 건 돌파 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "안랩 \"유명 AI 서비스 클로드 사칭 피싱사이트 주의하세요\"",
        "enTitle": "안랩 \"유명 AI 서비스 클로드 사칭 피싱사이트 주의하세요\"",
        "date": "2026-04-23",
        "originalDate": "2026-04-22",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1aYmVqZmdlajIzd0tGdXI1N0lhbUFKWTRVVHlXcDRsejVmMktpVTl4Q2E4bmxabGFjci1kbXBUNk9sbXc5dDE4Rm5SVjYycE1nRVNDUlpR?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 안랩 \"유명 AI 서비스 클로드 사칭 피싱사이트 주의하세요\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "제로베이스, ‘AI 에듀스’ 도입… 데이터 기반 취업 지원 서비스 강화",
        "enTitle": "제로베이스, ‘AI 에듀스’ 도입… 데이터 기반 취업 지원 서비스 강화",
        "date": "2026-04-23",
        "originalDate": "2026-04-22",
        "sourceName": "서울경제TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9QSkY3c1U4VWkxNXZwODNWSWxJYVR4TG1PRzZON3RPVk1ORkRtcFNHYkZTZGd6dmlWTVdKeml5eWNTOS1menRtVXRkNUQ0d24yR1B1d2VaUXgyZFBSMFp6YzdQU0Q?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 제로베이스, ‘AI 에듀스’ 도입… 데이터 기반 취업 지원 서비스 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
