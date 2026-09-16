/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-16
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "전문가, 바이러스성 80년대 AI 추세로 인한 위험 경고",
        "enTitle": "Expert warns of risks from viral 80s AI trend",
        "date": "2026-09-16",
        "originalDate": "2026-09-15",
        "sourceName": "teaonews.co.nz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxObWtYSWwxZzRBaGMzU1o2SkhzbGNBNUtBalBTRE1idkZGYUwxdU1lUG82Rnlfdk84ZkQ3TXhQdFAtcFlVdV9iYmRyUUFjVUZYOUpGNUxvVUlJVmR5UDd4UEZmdFo1V1NPVlpQUHo3WU05eFNpdENqdkxGd2V2amJ4bUJ5TFFJUWw4Zm5KbQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 전문가, 바이러스성 80년대 AI 추세로 인한 위험 경고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "최고의 수익을 올리는 AI 부업은 24시간 이내에 수익을 창출합니다.",
        "enTitle": "These Top-Paying AI Side Hustles Make Money Within 24 Hours",
        "date": "2026-09-16",
        "originalDate": "2026-09-15",
        "sourceName": "entrepreneur.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPTHdhMnk0TkZ6VTJoNDAzQlBCejlwVFo1RmZpTzBqX0h1dm9kdVQxYmlhTkJXX3RBVUtaR2traG1Id1BqczJucGdvWlY0ODR6UENkaF9rLUpIQWw4TkRPc0JjN3JHeFhGZzMybllrOEtuUzdpZHA4N1AxR2YyUEFoUDhMaVZieDNaQVJKempRQS01WV9TajVqVS1uRUNPS1A1X1pKbw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 최고의 수익을 올리는 AI 부업은 24시간 이내에 수익을 창출합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "탄자니아 대학 AI 테스트를 직업의 미래로, 학습이 중심이 됨",
        "enTitle": "Tanzania universities Face AI test as future of jobs, learning takes centre stage",
        "date": "2026-09-16",
        "originalDate": "2026-09-15",
        "sourceName": "thecitizen.co.tz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNSTJVOVROOGY1RnM5ZUtRTVJjazhyN0otY2hnak0tSlNYdzJpQ1ZtY0VKelQ0bWhSUWRQRnN6a3ZVMjdmeHVUZ3V0T3piUGlpYms3TEtXUExWSHoyMk1yVnBQbFRGOFY3UDJRcWQwM3J5UmFjY3djalUzM2tkZUlrdVp3WmlTd2RaXzZhZ3NWOFB1bjdNSlUxWEUwc3RrX0w2MF9GUGYtdUhiM3QyYThtaXhabm1yTFVwdWVzamI1MXdramU1T2NyYWxEWlFvc2lfSTh4d1N3QQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 탄자니아 대학 AI 테스트를 직업의 미래로, 학습이 중심이 됨 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "인기 부업으로 뜨는 AI 활용 이모티콘, 저작권 침해 소송 땐 다툼 가능성",
        "enTitle": "인기 부업으로 뜨는 AI 활용 이모티콘, 저작권 침해 소송 땐 다툼 가능성",
        "date": "2026-09-16",
        "originalDate": "2026-09-15",
        "sourceName": "주간동아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE41YVI5azA0MldDaVpWOWF3VW1JZzVZYU4taG5FbFU5bEtwNDVPcDBVVWZvLUdzeXFWYlk4dWI0TlV1S0h1c3I5NU9Mdk5qVl8zdE93aGI1b0Z5M0RzZUFoX3UzUVkxRUVh?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 인기 부업으로 뜨는 AI 활용 이모티콘, 저작권 침해 소송 땐 다툼 가능성 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타, 구독형 AI 서비스 출시",
        "enTitle": "메타, 구독형 AI 서비스 출시",
        "date": "2026-09-16",
        "originalDate": "2026-09-15",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBqWFZuYnVTQ0d3Q0NvSl9OOWo1eFBmRGdqSWtIVDJsc0loT1JYSHlZQVpEUVJiRi1iZkJnZ28wSnpVTFc5bFBDZ1Q4aWwyckpscFZlZ1QtOWhXcWswX2ZYNkNXQnhYZHAwb2Z4cWwtMTdkZlk3SUM4?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, 구독형 AI 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "카카오 AI 앱 ‘카나나’, 출시 1년 5개월 만에 서비스 종료 - 조선비즈",
        "enTitle": "카카오 AI 앱 ‘카나나’, 출시 1년 5개월 만에 서비스 종료 - 조선비즈",
        "date": "2026-09-16",
        "originalDate": "2026-09-15",
        "sourceName": "Chosunbiz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNcDliR2VvTW1PNVdfNFBfU3BXRjFQeWQ5dU8zRE13LUQzcHNtdHF4U3o0cGJRODRndi1UY1lMUC1zSXdKSmZwMzNLblFuRW9nUEVWU21uOWpSakpfSmx0cUREdEw0YkFrbTdWUmswcHFsaXRHbHJaYU83SGRLUGxSME1ZeUVCSUpTY3VNRTBicVQ5OW9xY2fSAZYBQVVfeXFMTXA5Ykdlb01tTzVXXzRQX1NwV0YxUHlkOXVPM0RNdy1EM3BzbXRxeFN6NHBiUTg0Z3YtVGNZTFAtc0l3SkpmcDMzS25RbkVvZ1BFVlNtbjlqUmpKX0psdHFERHRMNGJBa203VlJrMHBxbGl0R2xyWmFPN0hkS1BsUjBNWXlFQklKU2N1TUUwYnFUOTlvcWNn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 카카오 AI 앱 ‘카나나’, 출시 1년 5개월 만에 서비스 종료 - 조선비즈 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
