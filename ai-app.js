/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ADP CEO: 일자리와 AI에 대한 진정한 대화는 다음에 올 일에 어떻게 대비해야 할까요?",
        "enTitle": "ADP CEO: the real conversation on jobs and AI is how do we prepare for what comes next?",
        "date": "2026-09-03",
        "originalDate": "2026-08-31",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQcHFMVmhxWGFrbVlRbDlJMkZuNjNNcFJ0WmFMNnAybU9sTTVXUE1GdkpVbzJEMFlDWEdHVU5EZXhsQ1pUX3kyNmVHTXRVZnZoUlVwQUR3bks1TElpSmRfd2pSSEZUY0poeTU1MFhvcU9ZcXY0eG1vYXdRZjRpVk5rOTN3Ti1XNF9qaTlJZkpIUXNLQXdpSWpaRFZOakRpcFJFLVpzdWV6ZFRRSUJINFUwSWFWdkVzTzgx?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! ADP CEO: 일자리와 AI에 대한 진정한 대화는 다음에 올 일에 어떻게 대비해야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능으로 수익을 창출하는 방법: 2026년을 위한 15가지 이상의 효과적인 방법",
        "enTitle": "How to make money with AI: 15+ effective ways for 2026",
        "date": "2026-09-03",
        "originalDate": "2026-08-25",
        "sourceName": "Hostinger",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE84emdrNFphd0FHbTlXM1ZLcVpaUEhnaUROOExrUDBsWmotdVhlQ3hPeFpfTmZJcGtLWmMxS0F0SWN2MHpHYU56RWx3a0FtOXZfblpTRzg2WFFLWmNrcGRmdFY2UVAzYndnOC1WTS1nQVFkcFk?oc=5",
        "isRepublished": true,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능으로 수익을 창출하는 방법: 2026년을 위한 15가지 이상의 효과적인 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "돈을 버는 25가지 취미: 오늘부터 수입을 올리세요 (2026년)",
        "enTitle": "25 Hobbies That Make Money: Start Earning Today (2026)",
        "date": "2026-09-03",
        "originalDate": "2026-08-13",
        "sourceName": "Shopify",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE0tT3dSSEdtNEZRVkhXZ2dtbHQ2SHdwOUkzLWtNY1h4V29LWm5FckVMd3VrVFNDeEd4Mi1PYkxhNk5DLWx2SEdXY1luUUs2VXROV0xXTG5wRWVDejRsYWhUZzhsWFlMR0My?oc=5",
        "isRepublished": true,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! 돈을 버는 25가지 취미: 오늘부터 수입을 올리세요 (2026년) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "스니커즈 먹은 제미나이 vs 꼼수 명령어 거부한 챗GPT",
        "enTitle": "스니커즈 먹은 제미나이 vs 꼼수 명령어 거부한 챗GPT",
        "date": "2026-09-03",
        "originalDate": "2026-09-02",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNc1BXWWRqQU5XYXNKXzZ3RkdGclA2V2M5Nndqd1BMWWhjSVVLWThSRXFrMEQ1bEJVc2NRYUt2SlRzRlA1WU1QSUlwNk5JRk9pY2tyVGFxRFRKYVNJV2FDOVB0YmNjMXNkLWhFNkljT1RLUDdKS244dVdhVTVMeWh2ZkFhQ2tJTWFj?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 스니커즈 먹은 제미나이 vs 꼼수 명령어 거부한 챗GPT 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "‘제미나이 3.8 플래시’와 ‘3.8 플래시 사이버’를 소개합니다",
        "enTitle": "‘제미나이 3.8 플래시’와 ‘3.8 플래시 사이버’를 소개합니다",
        "date": "2026-09-03",
        "originalDate": "2026-09-02",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQMERjbV9yQWliOUN0ajRmZ2hQSHVrTm9KQlFoZTdWVHdVTmF5RjA3ZjJKS3Q5VzFkYW1MWlZrTnMtT2t2MU9CSFVhakduWDBiSU55c2xQLXpRT1hsNVNEcl9kb0FKWk9GU1R5UXFiNDllNU1WeGF4VVFjX1JlRG5uN1VDdUFyeDdvXzVjcnVJRFE3QQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ‘제미나이 3.8 플래시’와 ‘3.8 플래시 사이버’를 소개합니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI가 가상자산 종목까지 분석...'빗썸 AI' 서비스 출시",
        "enTitle": "AI가 가상자산 종목까지 분석...'빗썸 AI' 서비스 출시",
        "date": "2026-09-03",
        "originalDate": "2026-09-02",
        "sourceName": "뉴스;트리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE0zZVRBaS10XzE2cW5FWE9ZdHRhd0I5Vm1pY0xjcC1vcVZGSkY3OGxJdy1hLWQ0VmRQR1R3UzBsWnBjMVJGdURnclhHUVNSbmFyREdpM2tVYk9HRU1N?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 가상자산 종목까지 분석...'빗썸 AI' 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
