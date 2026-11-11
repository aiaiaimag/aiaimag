/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "isTopPick": true,
        "koTitle": "오늘의 AI 뉴스를 수집하는 중입니다",
        "enTitle": "Collecting Today's AI News...",
        "date": "2026-11-11",
        "originalDate": "2026-11-11",
        "sourceName": "AIMAG",
        "sourceUrl": "#",
        "isRepublished": false,
        "viralRate": "99%",
        "hookTitles": [
            {
                "top": "AI 뉴스 로딩 중",
                "bottom": "잠시 후 업데이트됩니다"
            },
            {
                "top": "코다리 부장 리서치 중",
                "bottom": "최신 AI 소식을 큐레이션합니다"
            }
        ],
        "analysis": "자동 수집 중입니다. 잠시 후 최신 뉴스가 표시됩니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "롯데이노베이트, 11월 AI 보안관제 서비스 출시…탈레스와 보안 협력",
        "enTitle": "롯데이노베이트, 11월 AI 보안관제 서비스 출시…탈레스와 보안 협력",
        "date": "2026-11-11",
        "originalDate": "2026-11-11",
        "sourceName": "디일렉",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE42cUF2ZVphRzMtREJ3cklRWFFkV2RmakdKekJqNTRjaXFUWVFYZjdSWl9kLXJqcFMwZTRGVEkwc2Q5NmdELWpJMTdZTEFRcG5DZjVNUTFpVUFNNTdKYTEtZkpSM1FnZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 롯데이노베이트, 11월 AI 보안관제 서비스 출시…탈레스와 보안 협력 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "카페24, AI 앱 신규 출시 4.5배 ↑…쇼핑몰 생태계 확대 - 머니투데이",
        "enTitle": "카페24, AI 앱 신규 출시 4.5배 ↑…쇼핑몰 생태계 확대 - 머니투데이",
        "date": "2026-11-11",
        "originalDate": "2026-11-10",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5rTkNaUTM5WUk2MU9IQjhiNzFVblhES0ZzbVVFbHBkVGZpa3RoMzAtRF9Tc2RYVi00S0RaMWc2NjRmandIa2hfb2gzclJvS1NiX2kwMVdncVJKV3lOQWJDOERkSW1nbFktWUtoZXZB0gFuQVVfeXFMTmtOQ1pRMzlZSTYxT0hCOGI3MVVuWERLRnNtVUVscGRUZmlrdGgzMC1EX1NzZFhWLTRLRFoxZzY2NGZqd0hraF9vaDNyUm9LU2JfaTAxV2dxUkpXeU5BYkM4RGRJbWdsWS1ZS2hldkE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 카페24, AI 앱 신규 출시 4.5배 ↑…쇼핑몰 생태계 확대 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[AI트렌드] 에이아이웍스·대한출판문화협회, AI 출판데이터 플랫폼 구축 협력",
        "enTitle": "[AI트렌드] 에이아이웍스·대한출판문화협회, AI 출판데이터 플랫폼 구축 협력",
        "date": "2026-11-11",
        "originalDate": "2026-11-10",
        "sourceName": "베이비뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBNLWRwWDlCWTdjblk4N2JEQjdEQTYyUmNGRERmdWdwMnVDYVVfMU90ZW1lbTI1NzhaV2hUaW1UZEtzcURqaDdlYzJJRWxOZXA4eG1MdTNLdk1rOTlqeXRMY2wtTjBuWUp1NTI1MA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI트렌드] 에이아이웍스·대한출판문화협회, AI 출판데이터 플랫폼 구축 협력 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
