/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "'AI는 중간 관리를 지울 것입니다': 골드만 삭스의 직업의 미래에 대한 큰 경고",
        "enTitle": "'AI Will Erase Middle Management': Goldman Sachs' Big Warning On Future Of Jobs",
        "date": "2026-10-09",
        "originalDate": "2026-10-08",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQYktEdFFvbTlRMUs4MEFNVkV2dWpMMWxQRC1fQlpHUWJtaWN6cDZYNTlzZXlxUlMxcEFhakFnUEQ3ZWJMY1Z6eUJwY1Y3S0FRazViS3NkSmZWaVNoV0lDYXg3OXd4Wm9vdnptZDJHblNuRUEzNzUyRDBTaVlLUjRteVZvQkVsNlo2WHpSd3kxOVhEbWFSUElZRnJKcHpNRUtJcnR6QWVsNHJjLVFGNTJSbVNCNDZzUXV1Y0tzTVFjRdIBxwFBVV95cUxONUR3eWp5akdQaHZkTWxPT08tbnI3WHFfZ0pjUnpjc1FERGFqeWdQN3NraFAyUUJ6LTNLb3BiNThGeXFCQ3BYYnVnYmVRWnVCbWM2Y2JIdlBiMURsd0NCUDFoR3d6T0NuVEVVYjZhaVpjSU44a3hKcTBqOF9iWXRUMGJwTjBGNExoWVQ0SVZYWWNYYnJ4SDlwaFRWc0F3N09MdmNqYW9URWNIREpYcHNqRkxidXBxa0NxbVJNMTRfSUxsS21SX2xz?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 'AI는 중간 관리를 지울 것입니다': 골드만 삭스의 직업의 미래에 대한 큰 경고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "실리콘 밸리는 인공지능이 일자리를 죽일 것이라고 생각합니다. 경제학자들은 확신하지 못합니다.",
        "enTitle": "Silicon Valley thinks AI will kill jobs. Economists are not convinced",
        "date": "2026-10-09",
        "originalDate": "2026-10-06",
        "sourceName": "Financial Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNUHRrV2xZcjAyZmFfc3lnOHBudFBkb01ZRm8zbWw3NV9xY0N5ZlJaTUhDbV8zOGtaWDRHeU9YaDg1dnlsVlF1Rk1DRTJTZWJzU1JlbDhmOGdSRnprQ2Vtc2VaRTlnMl95VmJXcllSZkRtUlA3ZDZVY09PNjMtN2x4Tmg5RGQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 실리콘 밸리는 인공지능이 일자리를 죽일 것이라고 생각합니다. 경제학자들은 확신하지 못합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Future of Work 기조 연설 | # 1 미래학자 스콧 스타인버그",
        "enTitle": "Future of Work Keynote Speaker | #1 Futurist Scott Steinberg",
        "date": "2026-10-09",
        "originalDate": "2026-10-06",
        "sourceName": "https://www.futuristsspeakers.com/",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNRUVxcWRwdm1RSmhhbllGR3JPQW5xY25zOE0yUjI3WlJtdHFwdXZZbWlFZE80b3NJZmRGQ2Jja1N5VE9MS1A0NzBQb180YUtmLWw1aGM0ZzlTTWs4dHozUnQ5dGJ3NngxQVZkdTZTU0xadGhJVlRzSHc4UjdSbmw0RlJ3VHRPOHd0bklNUA?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! Future of Work 기조 연설 | # 1 미래학자 스콧 스타인버그 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[10월7일] “비싸다던 클로드, 실제로는 챗GPT보다 5배 더 쓸 수 있었다”",
        "enTitle": "[10월7일] “비싸다던 클로드, 실제로는 챗GPT보다 5배 더 쓸 수 있었다”",
        "date": "2026-10-09",
        "originalDate": "2026-10-08",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE95UzlQUnhsNXBWZ3ZldktxV0V6YTg5Q1lyT05RWG9mRTJsVEZWTWRjNm9GSkNwaGdwRS12dHluWEE4b003Yms1bjBSaVdUNXF5and2N2RodFNWTm1kajRBZE90YWVIXzMzb3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [10월7일] “비싸다던 클로드, 실제로는 챗GPT보다 5배 더 쓸 수 있었다” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT와 Codex로 며칠 걸리던 일을 몇 분으로 단축한 Oracle",
        "enTitle": "ChatGPT와 Codex로 며칠 걸리던 일을 몇 분으로 단축한 Oracle",
        "date": "2026-10-09",
        "originalDate": "2026-10-08",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1LaHFQSkZoQWUtb3VLN0U1NV9Id0g3dTR5UFFtRmh2bkhMLTd3Z1BDMWJlOGFJOUVTNGx6a3cySU5Ldl8xSEFVZFdOaFYxUFU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT와 Codex로 며칠 걸리던 일을 몇 분으로 단축한 Oracle 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[AI세계속으로]\"AI로 쓴 글입니다\"…챗GPT·클로드·제미나이로 쓴 글에 워터마크 새긴다",
        "enTitle": "[AI세계속으로]\"AI로 쓴 글입니다\"…챗GPT·클로드·제미나이로 쓴 글에 워터마크 새긴다",
        "date": "2026-10-09",
        "originalDate": "2026-10-08",
        "sourceName": "아시아경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1uRzItQ3lUX1JfLXFhbWZpRXlTNVd5UDNWY1lETVg5NWxmaHNRaFJUcFpQWDRBd0YwdFE2VE9IekhwSUZGaU9zRFFXSnpqdG1ZU0paZ3h5djkzRWRESDAtdg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI세계속으로]\"AI로 쓴 글입니다\"…챗GPT·클로드·제미나이로 쓴 글에 워터마크 새긴다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
