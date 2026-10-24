/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "전문가들은 AI가 회사의 업무를 어떻게 변화시켰는지 상세히 설명한 Anthropic 보고서에 의구심을 제기합니다.",
        "enTitle": "Experts cast doubt on Anthropic report detailing how AI has altered work at the company",
        "date": "2026-10-24",
        "originalDate": "2026-10-23",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVGtBREc5bkZGWEZuOWh1VFljWllKZ1FaUDM1eElQNFFfTFpkM2JqNzRxSzRlUnFQRUdITWNQM1NGMGxPN3lpdDd3cFZCbzB6OUVlUEJYWEN0bGhUYW5LckdlU1FVVlk5VHlsU01MNDg4SXFETFdXR1FBdDJ5bEROdHkzUzRGMmYzbVlTcjduR3M?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 전문가들은 AI가 회사의 업무를 어떻게 변화시켰는지 상세히 설명한 Anthropic 보고서에 의구심을 제기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "새로운 연구에 따르면 AI 및 자동화 증가로 인해 가장 위험에 처한 작업과 작업이 밝혀졌습니다.",
        "enTitle": "New Research Reveals Which Jobs and Tasks Are Most at Risk from AI and Increasing Automation",
        "date": "2026-10-24",
        "originalDate": "2026-10-23",
        "sourceName": "Fair Play Talks",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPYXZYYTA1c0hCY0xEUnFkWVY5TGVLMlUwNU5hNm5aSTFrYkMyZUM5RXdNQnQ2dno0cFBMY3IxQjNrVEU0VVZBVGVtQmhocmJFZlZrcWlzQmgwbVZCOVJvZ0FuQUxyMllCOTRmWGRTQ0wzVzd0ck1CQ3MwNDl1V1JIS3ZZeEJsV0lCb241dkEzWEhFOU1tLVRMLXBJN0NWSjltVmZtMW1QSHE4U0lmZ3N0RWxvbFB2aFZpTG5JTjJPZksxZ3NHc1RlazNkVTF5c1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 새로운 연구에 따르면 AI 및 자동화 증가로 인해 가장 위험에 처한 작업과 작업이 밝혀졌습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "영국 최고재무책임자 (CFO) 는 AI 일자리 삭감을 기대하지만, 채택자의 6% 만이 보고합니다.",
        "enTitle": "UK CFOs Expect AI Job Cuts—but Only 6% of Adopters Report Them",
        "date": "2026-10-24",
        "originalDate": "2026-10-23",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQNjJzYTBrYjNMSi1pZ2Rha1RSQkJNV3N6S2hJX2gwVlAxNXp1cHlodk5KNHdYb3dNT3huRU1vWTdET1p5dU9jWngwM3Vielk1Y0pUT2RLcnNUVExvbGhOMHZ2WG9kczZ2N01Oa2pKTDFzdHc1QXJKOXctNzhCZndEb3NsYXcydnhiczU4c1ZCbw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 영국 최고재무책임자 (CFO) 는 AI 일자리 삭감을 기대하지만, 채택자의 6% 만이 보고합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[분석] 이재명 대통령은 왜 챗GPT 대신 ‘제미나이’를 썼을까",
        "enTitle": "[분석] 이재명 대통령은 왜 챗GPT 대신 ‘제미나이’를 썼을까",
        "date": "2026-10-24",
        "originalDate": "2026-10-23",
        "sourceName": "에너지경제신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFB1MWNCYThyd0VzYkdaV250ajdBSDFIYUhhZnhTa0VnNk5xZC13U3BzT0VPeHBKU1lmR0lxZHlWOGFkeWtpYXVkWlVMbVNaMk11TzE4Z3lwZy15dlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [분석] 이재명 대통령은 왜 챗GPT 대신 ‘제미나이’를 썼을까 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "에임인텔리전스, 오픈AI 연계 앱 보안 평가 서비스 출시",
        "enTitle": "에임인텔리전스, 오픈AI 연계 앱 보안 평가 서비스 출시",
        "date": "2026-10-24",
        "originalDate": "2026-10-23",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBRdm5mamxwR3dlcWwtMEZhQWpYa0pucjFUc0xtUC1fdWg2TV9lVXlHcGFxUERYSGJacnhaOVBnRm9nOGs4UkJSczBSRG9STzZZbmNFWHFWakUzT2NNc05jUFF0azdmMWhuaVE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 에임인텔리전스, 오픈AI 연계 앱 보안 평가 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "우버, OpenAI와 함께 전 직원에게 ChatGPT Work 도입",
        "enTitle": "우버, OpenAI와 함께 전 직원에게 ChatGPT Work 도입",
        "date": "2026-10-24",
        "originalDate": "2026-10-23",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFAtcW9rSjNHb2NSS2x2Mi04VEJoMTlhUlFyakhyZ0FkUnA3OFl3dXNCSzRzd0pkUGFRYjNjOXRmQnVXZVBDcllOUnJsdy1OS2xiNDlib2w2WHNkUmE0MzB1bE9DMEhaS0JO?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 우버, OpenAI와 함께 전 직원에게 ChatGPT Work 도입 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
