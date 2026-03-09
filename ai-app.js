/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Anthropic은 인공지능에 가장 많이 노출되는 직업을 추적하고 있습니다. 이 10가지 직업이 최상위 직업입니다.",
        "enTitle": "Anthropic is tracking which jobs are most exposed to AI. These 10 professions top the list.",
        "date": "2026-03-10",
        "originalDate": "2026-03-09",
        "sourceName": "CBS News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9lQXZZRVhqVHNNSDg1RWdwOUxXUU5LTEJpa0NjVC00WmQyU0RtelNZeEJFaFpqR2pnbFdtSHZRRmJsWTRqRDR2Wm9KRzF4VGQ4bkk4bWJPOHFPVXN6ZkhJUUV6NkF4X2IzcnBYSEdLNmpqRG_SAXhBVV95cUxNenB2SC1YQV9sU1E4RGN0MERPMnZaenAxTnQ1OTZBcjh4YmprZGpERHVMb3hrTlRERUgwVFM3SzBCTGxuWksxRHEyN0xSeGNLYlEwWk85MWNrS256dmRONHpYRllyRll6YnY4cWJpNHJhVmZLYnRlZnk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! Anthropic은 인공지능에 가장 많이 노출되는 직업을 추적하고 있습니다. 이 10가지 직업이 최상위 직업입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능 (AI) 을 사용하는 유럽 기업들은 더 많은 근로자를 고용하고 있지만, 미국인들은 불확실성을 피하기 위해 이미 그곳으로 이주하고 있습니다.",
        "enTitle": "European companies using AI are hiring more workers, not cutting them—and Americans are already relocating there to escape uncertainty",
        "date": "2026-03-10",
        "originalDate": "2026-03-09",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOUUpGR0h6UjBIMFB2MUJJYlVSaUFicEtwUVRTLVdKOEZraFBRMzdxRGY2NDZhVHZ6VS1TVzJsak01ZW8xWldvbTNvZl9icGdhd2lmbm42WWR2R2hGY2Q0LU9BTlZSa190bkVOTVhRb1hoUTY3eDVBVllFQ3A5NHlJc3U4SjFib0dmQ3pwX0RLM2pWZ2tzbUQ0X3Izem40MFZRZTd1X01LaUo1U3JKTXRobDJFWjFsNHF0aldVTkZXVQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 (AI) 을 사용하는 유럽 기업들은 더 많은 근로자를 고용하고 있지만, 미국인들은 불확실성을 피하기 위해 이미 그곳으로 이주하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "귀하의 직업이 빨간색 영역에 있습니까? Anthropic AI 차트는 어떤 커리어가 변화하고 있는지 보여줍니다.",
        "enTitle": "Is your job in the red zone? The Anthropic AI chart shows which careers are changing",
        "date": "2026-03-10",
        "originalDate": "2026-03-09",
        "sourceName": "India Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxQZjFjYmZ6UlBSbkpsOWtpdXBGTkJRNjVTaUVOSlpxMFJxaFg5Wldvc29zbldEV1k0QzBSMk1jX0NXOVE1cGhReWNkNnJvOHRLXzl6U1EtVHFsbk44akkxLUlnSVhTN3BzQzRrSDEzaGJxUjE5OEgtNk1HUTFHVnlaTkRLUEMzb3FEdVNnUjZJb3BZN2V6NDlZaUdkWVJ5LVRPcUNOLXJHY3lkY1hSUG1pRXM0dGJhNzN1QjYtdlZhLXk4aVp6RUJOaTFhNjNOd0JSN2NxU3J0YnpmTDVEcDRRZ0I3ZjZ3Z9IB6wFBVV95cUxQeXlRNkt2WTUyTHpmWVRERTM2ZC1xOXJHVFJQbFh0X1c0RTg4aFBQNThMQnB5SDVnTGFmSlFGbUdtVTFTSGJYb2pBWlJMeTBRQnFJOE11UTBRLUdZUVE4OGpjTC1Jbmd4Q2tTX21rV2tRZUxzdUUxWk9GcGRYa1FQUGhYT1ZCeTIya0o0T0h5Wm16M0pjSk5rb0Fzd2drQzAwVnJWQ2Rpd2I0cHBUNFZTNFFYd01ZbHBGbEpfcmJNaFdBV0k4WDBVZkRjSFNkaFJydFpFQ25BM2FyM0VmQUlnS2xmUE9kVUx6Z2NJ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 귀하의 직업이 빨간색 영역에 있습니까? Anthropic AI 차트는 어떤 커리어가 변화하고 있는지 보여줍니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "사람인, ‘AI 에이전트’로 HR 시장 패러다임 바꾼다",
        "enTitle": "사람인, ‘AI 에이전트’로 HR 시장 패러다임 바꾼다",
        "date": "2026-03-10",
        "originalDate": "2026-03-08",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1tMzdEV2w1ckxQX3RaNHlYeGJrXzdHd3Y1UXZ5RFhWcWhCU3dTQkdaN2NlS1VGLXdDQlJfN1otaVYwQ2pPQW53YVhoeFExc01YYjg5LUJB?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 사람인, ‘AI 에이전트’로 HR 시장 패러다임 바꾼다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "사람인, ‘AI 에이전트’로 시장 패러다임 바꾼다",
        "enTitle": "사람인, ‘AI 에이전트’로 시장 패러다임 바꾼다",
        "date": "2026-03-10",
        "originalDate": "2026-03-09",
        "sourceName": "워크투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9HVDJMdVNFMm9zMzdTeDBOZTVxY25KVUFIWVB4OXB2Wmd5U0JteVZxT2pHSGhoeU1EcEt3NzhNRVprZjJ2WHNMc1JHejU4M0c2ZndJWkhRZ0pfMlhEUk9pZ3kxZHI5bllhZEtGcw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "2030을 위한 AI 실무 팁! 사람인, ‘AI 에이전트’로 시장 패러다임 바꾼다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "사람인, AI 기술력 바탕으로 HR 시장 혁신 앞장",
        "enTitle": "사람인, AI 기술력 바탕으로 HR 시장 혁신 앞장",
        "date": "2026-03-10",
        "originalDate": "2026-03-09",
        "sourceName": "데이터넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBXMVdvR1N4bkx3ZUdtbVFnT0Z6NmVrMWEzeVJ1Qy15dnZCajdrYlVHRU5oaS1admEzS0xWal8xd1dWT0I5N0QyNUNXMXozaFFheUI0WDdKMU50elZxQkRBeW1nLUFSMGcxQzFwRA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "2030을 위한 AI 실무 팁! 사람인, AI 기술력 바탕으로 HR 시장 혁신 앞장 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
