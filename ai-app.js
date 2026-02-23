/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Apple의 차세대 거물은 시각 인공 지능에 대한 추진력입니다.",
        "enTitle": "Apple’s Next Big Thing Is a Push Into Visual Artificial Intelligence",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPaTV1cFJlOHE3XzVLMUZlUzJaM2NhWW5LcUNlT0N4MExWUjdnejBvdzlndE83REhBbkN6anRobmlJQmhndGkwTWhiZ3k4S3NtNnd2VlBJYmNxeVpwRmMtenN0dW1qcHBSMlpndkVvWXNWVGdwVVZ6MFpNTU5ONXhLb2dRQTVseXJFSjlaMjFWcVl0MmcwM1I3UXRlZk9lTjFZV1hvWkJzaWU2Qi1mNXlYcy1aVFYwMzdmY216WDA5dTBTZk1ocEJvaHhR?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "hookTitles": [
            {
                "top": "Apple의 차세대 거물은...",
                "bottom": "(Bloomberg.com)"
            },
            {
                "top": "오늘의 핫 이슈",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "Google·Apple의 AI 동향 관련 소식. 빠르게 변화하는 AI 생태계에서 주목해야 할 최신 움직임. AI 관심 독자층 사이에서 주목받을 이슈.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "하이퍼스케일러가 2026년을 위해 싸우고 있는 인공지능 (AI) 인프라 스톡",
        "enTitle": "The Artificial Intelligence (AI) Infrastructure Stock That Hyperscalers Are Fighting Over for 2026",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "Yahoo Finance",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPS2xTZk1DUmhvMVBGQ3FDZUdxeVFjR09FZHBkdHpSUnFla2tSZWZVS0ducnJTaW1JamdqZHNTNHRMSXB3OEJES1pJMVlleHVWUzhyRXVXcG5IXzlxMjVGdHJpcVNiVTI1UFFnOEk0djBKNFoxakJHSzhobEJoR25qWW92MlQzRFh0YlNlcVRKVUQ1ZVYzNXBhWg?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "hookTitles": [
            {
                "top": "하이퍼스케일러가 2026년을...",
                "bottom": "(Yahoo Finance)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "Google의 AI 동향 관련 소식. 빠르게 변화하는 AI 생태계에서 주목해야 할 최신 움직임. AI 관심 독자층 사이에서 주목받을 이슈."
    },
    {
        "rank": 3,
        "koTitle": "예측: 이 인공 지능 (AI) 주식은 2026년에 알파벳을 능가할 것입니다",
        "enTitle": "Prediction: This Artificial Intelligence (AI) Stock Will Outperform Alphabet in 2026",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "The Motley Fool",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPa05uMWVRNy0tQThIQVh4Ujd2RUlpV2hReDdkbzYtNE4xTnA2ZHFweVpuMll2ZXZURHNBZnlidE5fSDN6NEViQUw2ZHJtWTg4Y2JJb3ljZ3BwZHF6MnMybTl1OE9EUTFpcWlJWW1uUWFsSHZOZURqMks4S1pYX3FUYk45MV9CaXJRc21kamkyc2N3S1UyQTBvcA?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "예측: 이 인공 지능 (AI...",
                "bottom": "(The Motley Fool)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "Google의 성능·벤치마크 관련 소식. 모델 성능 경쟁의 결과가 실사용 환경에서의 차이로 직결됨. AI 트렌드를 파악하는 데 참고할 만한 이슈."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“AI 잘 다루면 월급 더 받는다” .... 채용·연봉 시장서 AI·데이터 활용 역량 영향력 ‘뚜렷’",
        "enTitle": "“AI 잘 다루면 월급 더 받는다” .... 채용·연봉 시장서 AI·데이터 활용 역량 영향력 ‘뚜렷’",
        "date": "2026-02-23",
        "originalDate": "2026-02-20",
        "sourceName": "워크투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9BaFBPTzR2emRuZEdEczREdTRseU1MdDJ6a2R0QnE4X1BHTWxJMUJsTnd2SHhCcC12V1FDRE1id0pweUZLQW1RZnhvbERoM2dSOGVFeXd2cFpRSTgyYWFCNXVIdlRwbE91dGNwSA?oc=5",
        "isRepublished": true,
        "viralRate": "70%",
        "hookTitles": [
            {
                "top": "“AI 잘 다루면 월급 더...",
                "bottom": "(워크투데이)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-20"
            }
        ],
        "analysis": "Google의 AI 동향 관련 소식. 빠르게 변화하는 AI 생태계에서 주목해야 할 최신 움직임. AI 트렌드를 파악하는 데 참고할 만한 이슈.",
        "category": "Physical AI"
    },
    {
        "rank": 2,
        "koTitle": "[미국 AI동향] 美 국방부, 마두로 체포 작전에 투입된 AI ‘클로드’ 둘러싸고 앤트로픽과 갈등",
        "enTitle": "[미국 AI동향] 美 국방부, 마두로 체포 작전에 투입된 AI ‘클로드’ 둘러싸고 앤트로픽과 갈등",
        "date": "2026-02-23",
        "originalDate": "2026-02-17",
        "sourceName": "솔루션뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1vYy1jTW1nZGxlVnZzNW1oRmlzY3c5UTFpN19FeHg5cHdDMEJsT0xfLWNGRlRTdVlHbXBxSTV2MEZkM1hoaGVKU1ZsXzh6TjhzVjR4VlMwZ2QxN0hCQTFvbV9feVFUUFFvZ1VF?oc=5",
        "isRepublished": true,
        "viralRate": "70%",
        "hookTitles": [
            {
                "top": "[미국 AI동향] 美 국방부...",
                "bottom": "(솔루션뉴스)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-17"
            }
        ],
        "analysis": "Google의 AI 동향 관련 소식. 빠르게 변화하는 AI 생태계에서 주목해야 할 최신 움직임. AI 트렌드를 파악하는 데 참고할 만한 이슈.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT·제미나이 이렇게 써라…직장서 살아남을 'AI 사용법'",
        "enTitle": "챗GPT·제미나이 이렇게 써라…직장서 살아남을 'AI 사용법'",
        "date": "2026-02-23",
        "originalDate": "2026-02-15",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1CaW5KVUJVUS0xY1UtbHJURmdhLVlVMDA3YWl0UkJOR1loYnVaMEZIYmVfVHc4WWk3Uzl1NE83QXVpS3R5Unh4VTg0RkNuOTdSTmFUNlN3?oc=5",
        "isRepublished": true,
        "viralRate": "68%",
        "hookTitles": [
            {
                "top": "챗GPT·제미나이 이렇게 써...",
                "bottom": "(중앙일보)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-15"
            }
        ],
        "analysis": "OpenAI·Google의 AI 동향 관련 소식. 빠르게 변화하는 AI 생태계에서 주목해야 할 최신 움직임. AI 트렌드를 파악하는 데 참고할 만한 이슈.",
        "category": "Korea AI"
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
