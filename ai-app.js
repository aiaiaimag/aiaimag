/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "그레이터 보스턴의 약 35만 개의 일자리는 AI에 취약합니다. 이 차트는 가장 많이 노출되는 차트를 보여줍니다.",
        "enTitle": "Roughly 350,000 jobs in Greater Boston are vulnerable to AI. These charts show which ones are most exposed.",
        "date": "2026-06-24",
        "originalDate": "2026-06-23",
        "sourceName": "The Boston Globe",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBCTHMyUzVEemV4eWpTNDdDQ2dSZl93cldjbGJFX25lcWZld2UxOWt2eWpXZENQUHdfNHpCUkxMcUtwQV9LMENTNEtETUtQYkZ5MzJ6bW9kejVJa1J3ODQ3WlVVclVOV0lKTlZ3WXhXeGRiNWJ2VTBfSnJ3M2Y?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 그레이터 보스턴의 약 35만 개의 일자리는 AI에 취약합니다. 이 차트는 가장 많이 노출되는 차트를 보여줍니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능의 제국: 지식의 한계와 직업의 미래 예측",
        "enTitle": "AI’s Empire: The Limits Of Knowledge, And Predicting The Job Future",
        "date": "2026-06-24",
        "originalDate": "2026-06-23",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOYnNiOEFTQTRJMGVJYngya0U5U2lidllScDhDWmJIOHU5QU5uT2t4MHFtNlh5TnhubzhvSWNDb1pTZWlXODVxLWp3OUxDZzlMVGJQVF9lbkEzTU4yMVdmU1BfVTlCZWFJVlVRMjR1WVJwRllMbl9yNWE4b1RRdHVZVWx5a3NlbzI2NU9fb3ZIRy1hNXZPbWRwQzUzWDFBOTJ5NEVZYUNfV2xoblI0UDh0QXV0R1NNa01DdmlZVw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능의 제국: 지식의 한계와 직업의 미래 예측 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "오라클은 AI에 초점을 맞추면서 21,000개의 일자리를 창출합니다.",
        "enTitle": "Oracle Sheds 21,000 Jobs as It Sharpens Focus on AI",
        "date": "2026-06-24",
        "originalDate": "2026-06-23",
        "sourceName": "WSJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPc0JFTG9SOEstT0NWbUQwd3BkTmJXQ2FWNjQ3ZGdzQmFXZVU4QnNmX2NuUC1HRkM3VlU2R3k5Sm9mc1BBeDZiNkJwVFdicDdfUjFLQlJuRjhVMzdrd2dodVQ1Nm9rRTExNjVWU0tYLVVOQ0xzRlRyWjlKTzlqVThXZ2ppaXJ3WUxjUWI4TGZoYUxHcWFKbkxIZXFmb0dHSU8wRW9j?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 오라클은 AI에 초점을 맞추면서 21,000개의 일자리를 창출합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI 보험추천 불법인데… 챗GPT·제미나이는 술술? - 머니투데이",
        "enTitle": "AI 보험추천 불법인데… 챗GPT·제미나이는 술술? - 머니투데이",
        "date": "2026-06-24",
        "originalDate": "2026-06-23",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1SVGhfTFRnQTVHdXROMUJIaDNNWVU3ckNIdVlQWUdMVEMwc1l1MGRWM2tkNDltSnBZVjFWQm1kN0owZk16LXFuMllMQzY2Qi1JVmpORkUzbzV6NzdOcXZadHIxalhEVWxENldLZ1NQb3fSAXBBVV95cUxNUlRoX0xUZ0E1R3V0TjFCSGgzTVlVN3JDSHVZUFlHTFRDMHNZdTBkVjNrZDQ5bUpwWVYxVkJtZDdKMGZNei1xbjJZTEM2NkItSVZqTkZFM281ejc3TnF2WnRyMWpYRFVsRDZXS2dTUG93?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 보험추천 불법인데… 챗GPT·제미나이는 술술? - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[요즘구글] 계획 없어도 낭만은 챙깁니다! 극P 구서방의 제미나이 200% 활용법",
        "enTitle": "[요즘구글] 계획 없어도 낭만은 챙깁니다! 극P 구서방의 제미나이 200% 활용법",
        "date": "2026-06-24",
        "originalDate": "2026-06-23",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQTHh5STVpWkJ5YmszOUcyYXNvV3g2d2xNRFpINEp0WFRPSVQ0ck0ycHBNbmJjWVhHQnhYekp0aVRVdG5Ta1lFMk54U3QwcnpfeE5iU3hSWi1kYjBhQWJ5X09YMDA5TlNSNldEc2xlNUpETWhiQ2JlcmtKLUJXNkF0ZzZRenQxS1N1dnNhd1h5UFcwUmVGczVublhrV1FySWRW?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [요즘구글] 계획 없어도 낭만은 챙깁니다! 극P 구서방의 제미나이 200% 활용법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "ChatGPT와 함께 남극 횡단 사이클링 훈련하기",
        "enTitle": "ChatGPT와 함께 남극 횡단 사이클링 훈련하기",
        "date": "2026-06-24",
        "originalDate": "2026-06-23",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBEc092dE5oM0ZLQmItc1hrcXItN1V0X21POWFoNmo1MktlbXZkMGYwQng4eEV3YzhxOHJUeUtPSkloNHNzM2t3Z21ZT3hoM0g2aUV4Mk5HSFFISURzMDZ1Sl90MHlJX3hW?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT와 함께 남극 횡단 사이클링 훈련하기 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
