/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-27
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Mark Zuckerberg는 Meta 직원을 AI로 대체할 대담한 계획을 가지고 있었습니다. 이것이 어떻게 분해되었는지 설명합니다.",
        "enTitle": "Mark Zuckerberg had a bold plan to replace Meta staff with AI. Here’s how it imploded.",
        "date": "2026-08-27",
        "originalDate": "2026-08-26",
        "sourceName": "Reuters",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOMVhpalVEX2c1eUE5LVNJX0QyX0oyRmlxOThJTm9TZXpKbnpUbWU1Z1ZuQjlvVWpMQzBaamtsZlRpS2daendQY1pDQ2ZRWG45VlJ0eVlXNFVzUC1DcUQ0eTlMZEhRUnBjSmo3MHB6X1JCT2RZY0YyOGFPdjF2c216MnBZR3RSaFplYTg0bmVuNk42amZERzB3NGM1NGJaMUQtSjZXdlJtZmlUTktDcVBKaXVWekdtOGdoRlQ2d09CRFM1LVN1MktkTg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Mark Zuckerberg는 Meta 직원을 AI로 대체할 대담한 계획을 가지고 있었습니다. 이것이 어떻게 분해되었는지 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능 직업의 미래에서 5가지 새로운 커리어 기회",
        "enTitle": "5 New Career Opportunities In The AI Future Of Work",
        "date": "2026-08-27",
        "originalDate": "2026-08-25",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNMm9LRWFVamFfQUY5WFpvRzVLSG1iaFlKQ3MxdElKTGRvOFd3MUtyOUNwV1AxUWFOcVc5MGwyZjdhejRzd3JGN1RHZVZ2clZvTU9JbDlBdjl5WWVBTElmVmRUOUV4blZQZ2tQU2Z1b2ppbGtpcjVtRm1oWHFYVnZIQk8xeTVndE44SmI3MmtqV3pKSUw0M011NUY3MEgwY1VHMjVzb0xHNA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 직업의 미래에서 5가지 새로운 커리어 기회 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "영국, 반즐리 거주민이 미래 일자리에 대비할 수 있도록 AI 교육 계획 시작",
        "enTitle": "UK launches AI training schemes to prepare Barnsley residents for future jobs",
        "date": "2026-08-27",
        "originalDate": "2026-08-25",
        "sourceName": "Digital Watch Observatory",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBWbVp1eUoyNXdNTXNjSEdNdkJNdHNyNktRVVlDUl9veEZHWVVRRU5laVRwSWFUajF1RmNid1BZYkpZbGJ5aXFGWFp1bVFrdlBPUmN2Um9lbU91MDNGWjRqLXM2UW0wc3h4WHJxTzRoSDMtNTQxZWs3WQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 영국, 반즐리 거주민이 미래 일자리에 대비할 수 있도록 AI 교육 계획 시작 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "‘챗GPT VS 제미나이’...돈 되는 한국 시장 놓고 마케팅 전쟁",
        "enTitle": "‘챗GPT VS 제미나이’...돈 되는 한국 시장 놓고 마케팅 전쟁",
        "date": "2026-08-27",
        "originalDate": "2026-08-27",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOUXpER2Rvb3dwVlJDemItUUNPTGRFQ2ZIcjV6dkd0LVMwS0xpZk85dlFpU3ZfQm1vQVhVTWZVMFExdGw0YW9ZLTdHcEFKS2VmYl95RHZWWjhvLWJPZ0FfSmVKRlE4ZWlqUUk5cDJBaVU1VmRRSTROUlJRSDdnMU5HODFkaw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ‘챗GPT VS 제미나이’...돈 되는 한국 시장 놓고 마케팅 전쟁 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "키움증권, 자체 캐릭터 ‘키우마·키우묘’ 출시…AI 서비스 활용",
        "enTitle": "키움증권, 자체 캐릭터 ‘키우마·키우묘’ 출시…AI 서비스 활용",
        "date": "2026-08-27",
        "originalDate": "2026-08-27",
        "sourceName": "스마트투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5peDc5U0tUVkFWZXVIbkRkTGcyazhmZlVuR0RLeGViMVVwQXQxdVpmRVRzSFlONERLZVRDR2wyZ3N0UHBPTDJlTlRqVWhtOERPNXI3VnBaUjBwMU5pNm9j?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 키움증권, 자체 캐릭터 ‘키우마·키우묘’ 출시…AI 서비스 활용 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "OpenAI, 교사용 ChatGPT 10만 명 이상 교육자에게 확대",
        "enTitle": "OpenAI, 교사용 ChatGPT 10만 명 이상 교육자에게 확대",
        "date": "2026-08-27",
        "originalDate": "2026-08-26",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE91NHBqaGhqUVhTczhIc3dqSEJpYVBXRDh1S254c2RHbHJyaHN5VDQtZkFrSzZGanJ0U09LbHhTOUY0SERMN0JYRmNNcDRPS21YT2ZpU0ZNSzA5X3JjTkxkZUxGRnNsNldCdzdSaGw5a2t0dmxWNlNN?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! OpenAI, 교사용 ChatGPT 10만 명 이상 교육자에게 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
