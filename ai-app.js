/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-31
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일의 미래를 위한 준비: 올해의 게리 플라워즈 업 유나이티드, 주목해야 할 5가지 트렌드",
        "enTitle": "Preparing For The Future Of Work: Gary Flowers of Year Up United On The Top Five Trends To Watch In…",
        "date": "2026-07-31",
        "originalDate": "2026-07-30",
        "sourceName": "Medium",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQcVB2bVhWSWpzUFdsY05JWkFvclo1YktQNGh3alJWT2Nha0FkWnBNdjFWRWNFamI4M245OHlLdE56eWJMb2pNWnlkUjR1UTlhLVdOUmxSbWs4dmNQQjIyNVl5bFJRckwxa3hSQ2ZQRFdaNFBKdFU2RTNnUkdJTXVKVFQtcm9JMFNGWEVaQ1I2eHVZVGREOGVVV3B0Ym53QVZXMHp6OW5BVUVldi0tLTBQMzk5Z1lnYjZiU3AzWHBSNmY2dTh4eGIwT1hkdnJaMi12VGRVYTd3?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래를 위한 준비: 올해의 게리 플라워즈 업 유나이티드, 주목해야 할 5가지 트렌드 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "라이브 또는 가상 이벤트의 기조 연설을 위한 미래 업무 컨퍼런스 연사",
        "enTitle": "FUTURE OF WORK CONFERENCE SPEAKER TO KEYNOTE AT LIVE OR VIRTUAL EVENTS",
        "date": "2026-07-31",
        "originalDate": "2026-07-30",
        "sourceName": "futuristsspeakers.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOUjh4Y18xR25YRlBJa3luVnRmNmE3Vnp5ajRLa2VsVjJfdWtrMkxJdTZucWhrc0I4aG42SGlKSEtHb1lsRXNoY3JjU0ljSTI5dHFnU0NIUzQ1TDBXXzMxdlVxT3o2VmhOaVAzNE1NSXVKUlBrOEo5Y3pMQnpZQkpJMEZBSUVGVGxL?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 라이브 또는 가상 이벤트의 기조 연설을 위한 미래 업무 컨퍼런스 연사 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "엔비디아 CEO 젠슨 황 (Jensen Huang) 은 AI가 일자리가 아닌 작업을 죽이고, 일자리 손실에 대한 두려움은 ‘정확히 거꾸로‘ 라고 말합니다.",
        "enTitle": "Nvidia CEO Jensen Huang says AI kills tasks not jobs, and job-loss fears are ‘exactly backwards’",
        "date": "2026-07-31",
        "originalDate": "2026-07-28",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNNDVRbVpnQ1RfN3pFdVhvOVJsOEFjcm1NMjBrOEZPRG9hY2Z4UkpwUEFSM3hHaFQyeFJidnFscTBIclFBQlVqZ0U4Y3dEdDBpU3Mxbmh0Vy1td0FEOE5JZWRkaG93VEFJbnA3Q0VYSEJkZEpVVmdxRzBHcHJwZTBBUDFFQQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 엔비디아 CEO 젠슨 황 (Jensen Huang) 은 AI가 일자리가 아닌 작업을 죽이고, 일자리 손실에 대한 두려움은 ‘정확히 거꾸로‘ 라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 로보틱스 2: 로봇에 전신 지능을 구현하다",
        "enTitle": "제미나이 로보틱스 2: 로봇에 전신 지능을 구현하다",
        "date": "2026-07-31",
        "originalDate": "2026-07-30",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE5VaF96eVNpckZmSGc1Tzc1R1ZIOUJ5cHZ3dkw5QWpjZHVZeFNNVmIxdWdqZldzdXJwZzlka1pIZ281NE1EWHp2QnZFdTk2OU9BZVI5UXoxWTNqS0pMdjFqWmNFTVJTX2JrSldQdTZjSVYyNzNuV1I5YjlUa2N2QQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 로보틱스 2: 로봇에 전신 지능을 구현하다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "AI가 업무 대신 처리한다…구글 '제미나이 스파크' 출시",
        "enTitle": "AI가 업무 대신 처리한다…구글 '제미나이 스파크' 출시",
        "date": "2026-07-31",
        "originalDate": "2026-07-30",
        "sourceName": "mstoday.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9ZOW52UElBeEZtcUhOU0dCTGdIN292cFZZbHQ4WUtRTHlJaGtLa0VDbnBDUWF0SzJLVElCaFhaTzBLNVk5azNHTnlHb0pBOEEwbkk1MTU4eDJMbWtuOEFtcTFWMlh2NXNsUmRtWA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 업무 대신 처리한다…구글 '제미나이 스파크' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "순천향대, AI 취업서류 작성부터 실전 모의면접까지…'Career Fit-Up 캠프' 운영",
        "enTitle": "순천향대, AI 취업서류 작성부터 실전 모의면접까지…'Career Fit-Up 캠프' 운영",
        "date": "2026-07-31",
        "originalDate": "2026-07-30",
        "sourceName": "충청뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFB1U3FIV2d5NGtDNzdWaU1oODM5Nl9UUWR0NmJQa2REM3Q2YTdDa1dXWmRubEJNZDhtTFpKU1poY2cyRzJCWmlTTVlFcFhCQjdDd0U3dVZ4TVVtR2ZYcEd2UFhLYmtVcVlXdFIySA?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 순천향대, AI 취업서류 작성부터 실전 모의면접까지…'Career Fit-Up 캠프' 운영 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
