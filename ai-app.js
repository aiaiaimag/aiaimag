/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-12
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "$ 400 AI 베팅은 실제로 업무의 미래에 대한 높은 스테이크 베팅입니다.",
        "enTitle": "A $400 AI Bet That’s Actually a High-Stakes Wager on the Future of Work",
        "date": "2026-05-12",
        "originalDate": "2026-05-11",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNaC1iRGktSXNvU05kRmFHZzZtTkRpRURBMktUQUhfd2lxamhOUzRQMDBJZzh5UjhRVXdwVGd0YUwyQTNFdVF4MmZlZTduVk52TEhsa3FEdkgtZnp4TW5vWjFsMGJSMXFWNFpYekNQaklfNGtsdzhlSDFBS01zWW1DWjhhOHY0MVQtRXJoYzRRRkZEZ3l3XzJpVk5nblE5bGMxcU5XUXNFTk1LXzNpSDdVaHdWSHA2LW9ENDdBN01MTzNFdw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! $ 400 AI 베팅은 실제로 업무의 미래에 대한 높은 스테이크 베팅입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "해설: 인공지능 경제에서도 견습생은 직업의 미래입니다.",
        "enTitle": "Commentary: Apprenticeship is the future of work, even in an AI economy",
        "date": "2026-05-12",
        "originalDate": "2026-05-11",
        "sourceName": "Crain's Chicago Business",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOZS1QaXo5YWtlOV9oTWJDZTc2T3JvaGpJQjBob29xQjRaMHNFQWlhYlZrcmRxZS1tWDk3N1ZTMGpDSHVUSExUaDVkeUhYTkZKcHpQV0ZLNFdQaDI5ZEpYQ1FUTXh1dGhHaXl4a3ZsRDdsemE3enlQQThXdjZCdURTQUJfVjQteWZXT2pQUzNR?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 해설: 인공지능 경제에서도 견습생은 직업의 미래입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "이 창업자들이 없이는 살 수 없는 영리한 클로드 생산성 해킹",
        "enTitle": "The Clever Claude Productivity Hacks That These Founders Can’t Live Without",
        "date": "2026-05-12",
        "originalDate": "2026-05-11",
        "sourceName": "inc.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNGhjbjZid0JFbklLb3FYTlBJLW5wV0V2UU5McUlhOGhjUnN6cnZOOG5vZkM1czZaRzhySmEtbFhkU19NYi1rQ3hTeFVNQ1otR09LNWkyNkNiZHFlVFVfbzNHZ0FQZUpVRkI5dDE1MlVGOWJBd2pBSTRobklsWTRqSHhpdkhTUFFhWm5nRjRyOXZ6eVZ4MGZ5cUkxMnUzQ2llQjRXeFRpb0F0UEt6MFdaYTIzVjI?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 이 창업자들이 없이는 살 수 없는 영리한 클로드 생산성 해킹 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "\"내 일자리 뺏길까?\" AI에 묻자…챗GPT·제미나이·클로드 '제각각'",
        "enTitle": "\"내 일자리 뺏길까?\" AI에 묻자…챗GPT·제미나이·클로드 '제각각'",
        "date": "2026-05-12",
        "originalDate": "2026-05-11",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5FQkxSQTd2TG1pYy1zWkdpTTNUWG90c0F5VjM5VnlUbklrTXlCU1BYaHVVaFRtRjloTlhvTDFOc2k2V0hGMURleWJBNXFRLTdtMkdWcWhqMVQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"내 일자리 뺏길까?\" AI에 묻자…챗GPT·제미나이·클로드 '제각각' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "라우드소싱, AI 콘텐츠 전용 서비스 출시… 공모전 방식 적용",
        "enTitle": "라우드소싱, AI 콘텐츠 전용 서비스 출시… 공모전 방식 적용",
        "date": "2026-05-12",
        "originalDate": "2026-05-11",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB2TjI5aThmeXhRUnNQVFEzRC0wV3BGRjF3Sm9nbWkzMXJFazJFbU5VRUtnU01Ec3J4R0dCRUNta3Y3eVpHWHBUU3NSYURJLWFHNGJaYjU0MWVyWTJIWl9DOW1GTkExcDYtMnBjSDVYR2PSAXRBVV95cUxQMXJQekhUMWRubTgwbUplaFM5TmZQaHc4VXMxYUY3dVcxazJFSmc2SVpiVjBJLUR0U1d6SU9vMjhheVktT2xFMG53YjFsN0xSNTJnVEVNMVQtZ0xlOGxqMmdkN0FKU2Jrb1M5NGNWTVY4ZEhaaQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 라우드소싱, AI 콘텐츠 전용 서비스 출시… 공모전 방식 적용 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "IBK기업은행, 소상공인 통합관리 서비스 출시…AI 기반 경영지원 강화",
        "enTitle": "IBK기업은행, 소상공인 통합관리 서비스 출시…AI 기반 경영지원 강화",
        "date": "2026-05-12",
        "originalDate": "2026-05-11",
        "sourceName": "폴리뉴스 Polinews",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9fV2dxSGxpTGdQdzFLWEVva2dxRkFsMDNIVE9hWXhJSDMxYzRLNlBNV205MFlSdkNoQTZiaDF2MW1EOV80N016S2hYTk56SzdheTBHQ3BORkwtS0FySGxxbW5fd09EelE1azl0eVRR0gFyQVVfeXFMTVdhc203aEdpd04wS2JRRElDdUxkNVhzZGVzdmtwT05xLThqMXpiLTRWS2xxTzM3NmJ3YnRYU1JGcG84MERlT3FvX2tUZXExdDduR2hQeS01N3ZwenFCMksyT2k0WGcyTlhiT0lsVTFNcFJR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! IBK기업은행, 소상공인 통합관리 서비스 출시…AI 기반 경영지원 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
