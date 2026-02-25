/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Workday CEO, Anthropic과 OpenAI가 회사의 소프트웨어를 사용한다고 말함",
        "enTitle": "Workday CEO Says Anthropic and OpenAI Use His Company’s Software",
        "date": "2026-02-26",
        "originalDate": "2026-02-24",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNOWZMSy1ySEsxOFNRV1pZQ3FzNnNXUFY0QmE3TTlOWjhhRDRndTVSMy1fZldhdnFhYTAxajdGanFlZHJ1QW1mRWlhM1lzNnNYVXl4UDY4M29mSVVYcE1vdTVJYnlzX0RkYjM0OEMzdk14OG56MXRCTEk2UTI3b1pWZDJPRE9hdS1LeFltbHk5azRnYXh4el9Lb285YkwxUk1PcFRTZm1ZRmV4WGM1eVZ6X1FTeG83UQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "hookTitles": [
            {
                "top": "Workday CEO, An...",
                "bottom": "(Bloomberg.com)"
            },
            {
                "top": "오늘의 핫 이슈",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "Workday CEO, Anthropic과 OpenAI가 회사의 소프트웨어를 사용한다고 말함 | 오늘 발표된 최신 뉴스입니다. 출처: Bloomberg.com.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인도 주식은 AI 문제에 대해 $ 686억 IT 경로를 통해 지역 동료를 추적합니다",
        "enTitle": "Indian shares trail regional peers on $68.6 billion IT rout over AI concerns",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "Reuters",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOc1BUMlgyOC1INDZDOTRWekF5NExjZE5PR2s2T3dpQTZoZDFic29BajBDWUc1ODg2Z2dlWF91M1kxbG9GOE9kNFRRajQ0MC1mMUtNWGt3MFk2bnNJZlZKNEZYZVN4dDhhaHF4YTB2SkNfa1ZuY3NoWk41ZU4wSkQ2VnV4MU9pN0ttcFpsbHZTN1hlblN4V1BDZTRjeVZSRVNpNnNIaHVSbExGREg2bEQ0R3AyUU51OGhPd21n?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "hookTitles": [
            {
                "top": "인도 주식은 AI 문제에 대...",
                "bottom": "(Reuters)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-25"
            }
        ],
        "analysis": "인도 주식은 AI 문제에 대해 $ 686억 IT 경로를 통해 지역 동료를 추적합니다 | 오늘 발표된 최신 뉴스입니다. 출처: Reuters."
    },
    {
        "rank": 3,
        "koTitle": "AI: 수사-현실 격차에 유의",
        "enTitle": "AI: Mind the rhetoric–reality gap",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNT0VCQVk3M00tMDltM2M5OTVIZWRub2tCdDBoYXBvQlRDLUhsYWhVWkJXLUREZjM4V0ZIWUE0elZRRlN0LUhxWXJCMjhseTAyczdGUEEtM3ZWTDM5WFluLUsyQThlR1JfSVhScTVJQnVOVjRDVGNPWld3OXRLcFVkQmhzc3dCd0gxd1BidElzUkNDWEk4d0pmMVNzbGdlTXA1bmZFaFJwRXM?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "hookTitles": [
            {
                "top": "AI: 수사-현실 격차에 유...",
                "bottom": "(Bloomberg.com)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-25"
            }
        ],
        "analysis": "AI: 수사-현실 격차에 유의 | 오늘 발표된 최신 뉴스입니다. 출처: Bloomberg.com."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "하노버메쎄 2026(Hannover Messe 2026), ‘피지컬 AI’로 제조 현장 정조준… 이론 넘어 실무 적용 선언",
        "enTitle": "하노버메쎄 2026(Hannover Messe 2026), ‘피지컬 AI’로 제조 현장 정조준… 이론 넘어 실무 적용 선언",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "산업일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5OXzRMSTFsMzlLRHJkOTVCZXlJTG1obVRYUFVBbUFET1ducTNXclJaTjlFTEtvX2ZUMDNyZEt3RVluWTJN?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "hookTitles": [
            {
                "top": "하노버메쎄 2026(Hann...",
                "bottom": "(산업일보)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-25"
            }
        ],
        "analysis": "하노버메쎄 2026(Hannover Messe 2026), ‘피지컬 AI’로 제조 현장 정조준… 이론 넘어 실무 적용 선언 | 오늘 발표된 최신 뉴스입니다. 출처: 산업일보.",
        "category": "Physical AI"
    },
    {
        "rank": 2,
        "koTitle": "세종시교육청, 전 교직원 대상 인공지능(AI)·데이터 역량강화 추진",
        "enTitle": "세종시교육청, 전 교직원 대상 인공지능(AI)·데이터 역량강화 추진",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBmTnZ4MGp4d2hFa01mMnhHUnRpYWtGazFfYnZOWG5mZktkS25RTnFqT3ozakZzdFA2Q2tFYU9fVnZWNmlKaUpsVHVaSHdUdTQ?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "세종시교육청, 전 교직원 대...",
                "bottom": "(v.daum.net)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-25"
            }
        ],
        "analysis": "세종시교육청, 전 교직원 대상 인공지능(AI)·데이터 역량강화 추진 | 오늘 발표된 최신 뉴스입니다. 출처: v.daum.net.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "LG전자, ‘iF 디자인 어워드 2026’서 AI 홈 로봇 ‘클로이드’ 포함 26개 본상 수상",
        "enTitle": "LG전자, ‘iF 디자인 어워드 2026’서 AI 홈 로봇 ‘클로이드’ 포함 26개 본상 수상",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "인공지능신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBGNThicnZnZUo5WkFWYWlrNWQxckgwQmpicFdyV2RXVGpTU25Fdmx5OTdOb1EyZEg1ZGJFOTFwRndXOTVYVU5rQnZHRzVObUpMM29xZVVtNjBBc3ZSa2pJclhHMlFhbVk?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
        "hookTitles": [
            {
                "top": "LG전자, ‘iF 디자인 어...",
                "bottom": "(인공지능신문)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-25"
            }
        ],
        "analysis": "LG전자, ‘iF 디자인 어워드 2026’서 AI 홈 로봇 ‘클로이드’ 포함 26개 본상 수상 | 오늘 발표된 최신 뉴스입니다. 출처: 인공지능신문.",
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
