/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "수백만 개의 일자리가 위태로운 상황: 방글라데시는 미래의 일자리에 대비하고 있을까요?",
        "enTitle": "Millions of jobs at risk: Is Bangladesh ready for the future of work?",
        "date": "2026-11-17",
        "originalDate": "2026-11-16",
        "sourceName": "Daily Observer",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiSkFVX3lxTFB6RWhZcC1sMVZralRlSWNmTnRZUm5KckFmWW1FOUJ5VlRveHpmSFA1WjRMZFlmYUpKVHB6VHdySzM3Z1BCSXhMSmhB?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 수백만 개의 일자리가 위태로운 상황: 방글라데시는 미래의 일자리에 대비하고 있을까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 일자리의 미래는 IT 업계 외부일 수 있습니다.",
        "enTitle": "The Future of AI Jobs May Be Outside the Tech Industry",
        "date": "2026-11-17",
        "originalDate": "2026-11-16",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNRGotVGhLbV9uZFB6Vlcyc0lQRG1QdXVoY3EyQjZKUm5Pc3JTRkNaQWthR19OdGNRQXNtVlZNeEg4SzNNeEF5YlNQM2dqcU1zZnhaRm11OUNjY2ktSkVFLW5xUzgzUFJ1c01ZbEwyM2ZHMG1Sc0RVY2ttZFlGVnlwRThpYw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리의 미래는 IT 업계 외부일 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 더 많은 작업을 맡아감에 따라, 업무의 미래를 재편하는 5가지 트렌드",
        "enTitle": "As AI takes over more tasks, five trends reshaping the future of work",
        "date": "2026-11-17",
        "originalDate": "2026-11-15",
        "sourceName": "The Globe and Mail",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQem11dmNiU0NpV1dubUUzUXhqZnJoSlRBYTdGUk42RDdyQkh2WXNIN0VlUjFFRERiVWxIVTdXV0JSNWxiSjVEa2xtdklwRHczR0NCc1l2WkQwakxkR3dvaVBXOURkdzFpdG1mWF9GOGhTdkt5SlZxeG5WZFVKZlV5U00zZ2NzZ1RyZ1EtbUlCQ09DeXpGaDdaMU1CZ3JzM3VNa3FXQ2JNd0tqS2F2MXNzTnhWTWVOSWloM3JSbUNkRjR4RzU5?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 더 많은 작업을 맡아감에 따라, 업무의 미래를 재편하는 5가지 트렌드 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI 트렌드] 금천구, 누리집 ‘인공지능(AI) 다국어 자동 번역 서비스’ 개시 外",
        "enTitle": "[AI 트렌드] 금천구, 누리집 ‘인공지능(AI) 다국어 자동 번역 서비스’ 개시 外",
        "date": "2026-11-17",
        "originalDate": "2026-11-17",
        "sourceName": "베이비뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE8xMUdQdnV4ZVFxOC1pcDZZcnQ1cW9xeUZibzUxUTFOX0JMVkUzajROMjBLaHljYkJFRHBDT2NwMVFIWGJzenc2b2QtNkNpRkxZdmRWQ0NKR2FWdkdrN1pNMnZfNHVubnFaVXZ4Zg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 트렌드] 금천구, 누리집 ‘인공지능(AI) 다국어 자동 번역 서비스’ 개시 外 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "“먼저 출시했다가 매 맞을라…韓 AI 에이전트 서비스, 규제 위기감 고조”",
        "enTitle": "“먼저 출시했다가 매 맞을라…韓 AI 에이전트 서비스, 규제 위기감 고조”",
        "date": "2026-11-17",
        "originalDate": "2026-11-16",
        "sourceName": "디지털데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBUVlY5WGtPNzJ1MXE3bFdUNjhjQm1qdlBuY09oNWRlQ1dJTUk1Mi01SDJWWjQ5eEdUSFR0bzItTU5wc0JaMGlPazVkN2VNU3l0c241YWtYYmZuMHp5U1h3TlppdEc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “먼저 출시했다가 매 맞을라…韓 AI 에이전트 서비스, 규제 위기감 고조” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI가 차량·금융상품 추천…우리금융캐피탈 서비스 12월 출시",
        "enTitle": "AI가 차량·금융상품 추천…우리금융캐피탈 서비스 12월 출시",
        "date": "2026-11-17",
        "originalDate": "2026-11-17",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOaVlEbk1MRFNiVGFxaE0ya1JFTnR1bV9vWUhuRDMtNjBDVHVhZ09DLVZ2WVFaQmFUdlVCVWl6T3FObFA4X2RFLTJHVFV6OXNuUl96N29VRzRlSUtRUER6anZtMm4tM0hIOTNDZXE4eHBBclVPMTB0WXQxYXlvTHBELVU0NWppZkZJMnc0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 차량·금융상품 추천…우리금융캐피탈 서비스 12월 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
