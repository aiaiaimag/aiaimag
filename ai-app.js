/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-16
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 일자리의 미래는 IT 업계 외부일 수 있습니다.",
        "enTitle": "The Future of AI Jobs May Be Outside the Tech Industry",
        "date": "2026-11-16",
        "originalDate": "2026-11-15",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNRGotVGhLbV9uZFB6Vlcyc0lQRG1QdXVoY3EyQjZKUm5Pc3JTRkNaQWthR19OdGNRQXNtVlZNeEg4SzNNeEF5YlNQM2dqcU1zZnhaRm11OUNjY2ktSkVFLW5xUzgzUFJ1c01ZbEwyM2ZHMG1Sc0RVY2ttZFlGVnlwRThpYw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리의 미래는 IT 업계 외부일 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI의 일자리 배당은 업무 변화 방식에 따라 달라집니다.",
        "enTitle": "AI's Jobs Dividend Will Depend On How Work Changes",
        "date": "2026-11-16",
        "originalDate": "2026-11-15",
        "sourceName": "BW People",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxONUFZWkppR0tDVkNMWkw3bXVmNGg2Q3ZjNTlLV1dqOUJKMFJHdUpsZTRCV1R6Z2ZvckdCdFFsR0t4Z1J1NXo5WUhUc09aOENHcHdwR2ROLVNQMG1MVWpCX2Z5cGxQX1pyZzg0Rng4TmozRkpFcGJVd0JwZDJxOWJaT3dXZnRPUHJWRVF2WHN2WS02Z2M?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI의 일자리 배당은 업무 변화 방식에 따라 달라집니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 더 많은 업무를 맡게 되면서 미래의 업무 방식을 변화시키는 5가지 트렌드",
        "enTitle": "As AI takes over more tasks, five trends reshaping the future of work",
        "date": "2026-11-16",
        "originalDate": "2026-11-15",
        "sourceName": "The Globe and Mail",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQem11dmNiU0NpV1dubUUzUXhqZnJoSlRBYTdGUk42RDdyQkh2WXNIN0VlUjFFRERiVWxIVTdXV0JSNWxiSjVEa2xtdklwRHczR0NCc1l2WkQwakxkR3dvaVBXOURkdzFpdG1mWF9GOGhTdkt5SlZxeG5WZFVKZlV5U00zZ2NzZ1RyZ1EtbUlCQ09DeXpGaDdaMU1CZ3JzM3VNa3FXQ2JNd0tqS2F2MXNzTnhWTWVOSWloM3JSbUNkRjR4RzU5?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 더 많은 업무를 맡게 되면서 미래의 업무 방식을 변화시키는 5가지 트렌드 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "뉴엔AI, 챗GPT·클로드에 ‘실데이터’ 붙인다… ‘퀘타아이 MCP’ 출시",
        "enTitle": "뉴엔AI, 챗GPT·클로드에 ‘실데이터’ 붙인다… ‘퀘타아이 MCP’ 출시",
        "date": "2026-11-16",
        "originalDate": "2026-11-16",
        "sourceName": "디지털데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9wbFUza2xCYm53LWJYdXNwbVl5dnJkMUMwY3pkaUdHcm5Bd2ZxV243Z2VuYWtTa0wwSjZ3dDlwV1FqVjBEcE8wYzdWbHQ3QXd0Z0dCVEhxdHdwYnlkM0pFZVJUd1k?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 뉴엔AI, 챗GPT·클로드에 ‘실데이터’ 붙인다… ‘퀘타아이 MCP’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "뉴엔AI, 챗GPT·클로드 연동 'Quettai MCP' 출시…소셜 실데이터 AI 분석 제공",
        "enTitle": "뉴엔AI, 챗GPT·클로드 연동 'Quettai MCP' 출시…소셜 실데이터 AI 분석 제공",
        "date": "2026-11-16",
        "originalDate": "2026-11-16",
        "sourceName": "헬로티",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1ISXVlWE5nSWFPNm9FcEZOMkNsd1hLczNiTGFwVTFrOVk0aVRCdWRwajdvd0ZZLTIxQk1vOURYYVBNaS12YnFVUlFEX0h2YVU3bzNIVEY5QThEVzQ4cHVZ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 뉴엔AI, 챗GPT·클로드 연동 'Quettai MCP' 출시…소셜 실데이터 AI 분석 제공 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "온라인 쇼핑몰도 AI 도입 확대…카페24 AI 앱 출시 1년 새 4.5배",
        "enTitle": "온라인 쇼핑몰도 AI 도입 확대…카페24 AI 앱 출시 1년 새 4.5배",
        "date": "2026-11-16",
        "originalDate": "2026-11-15",
        "sourceName": "신아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE8tNGZvM1A5eGg0RHR0Ym5yYkFSYThpNl8wbzlvaks1NHFLVExUeXBvZ3JPbENIdnpoUWV4Zzgyb3BRSWlkbW5fblpNUXI4TU5mVVdXVlhNbkhZeFU2Sk5YTDV4SjdZdm1hdXJESlFYZng?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 온라인 쇼핑몰도 AI 도입 확대…카페24 AI 앱 출시 1년 새 4.5배 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
