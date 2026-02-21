/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-21
 */

// [뉴스 데이터베이스 - 2026년 2월 21일 업데이트]
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "예측: 이 두 인공지능 (AI) 주식은 2월 26일 이후 급등할 것입니다 (힌트: 엔비디아 아님)",
        "enTitle": "Prediction: These 2 Artificial Intelligence (AI) Stocks Will Soar After Feb. 26 (Hint: Not Nvidia)",
        "date": "2026-02-21",
        "originalDate": "2026-02-20",
        "sourceName": "Nasdaq",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOYXcwVk1KLWk3SXlEbWpZbDZSSFBheDB3Z3Q4SXk0RlRxSWFSWkU3a29YMTNCWmZqUXpkVVhpbDVIWG9TNF9DOGcyR20wbVV1MWZFQU9tclZZbWh4eDg4cFlqNlA2dGdVdFBsWGRlVDBYNHdCWUd5OU5fV0xFUFFBUU5OdEVyZmphZEZDalJ2ZXZPT2NDSDhNQkttV01ULVlKb3ZoUXNVZEIxYlpDVWRQa1lfckF6bGM?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "hookTitles": [
            {
                "top": "예측: 이 두 인공지능 (A...",
                "bottom": "(Nasdaq)"
            },
            {
                "top": "오늘의 핫 이슈",
                "bottom": "최초발행: 2026-02-20"
            }
        ],
        "analysis": "예측: 이 두 인공지능 (AI) 주식은 2월 26일 이후 급등할 것입니다 (힌트: 엔비디아 아님) | 오늘 발표된 최신 뉴스입니다. 출처: Nasdaq.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "'인공지능을 활용한 양조장은 예술가를 퇴출시킬 수 있다'",
        "enTitle": "'Breweries using AI could put artists out of work'",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "BBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5xdmZVazQ2bWM2aXMtdE1RdTB5OUNMTVliZU9FRGNSSU1FdVJtQ3dlcUZ6VXJ6OFk1cFJpUUNjb2xZUnlSWjg4Wm1uV0ZUMVU5VVNvZW5yRm9qQQ?oc=5",
        "isRepublished": false,
        "viralRate": "82%",
        "hookTitles": [
            {
                "top": "'인공지능을 활용한 양조장은...",
                "bottom": "(BBC)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "'인공지능을 활용한 양조장은 예술가를 퇴출시킬 수 있다' | 오늘 발표된 최신 뉴스입니다. 출처: BBC."
    },
    {
        "rank": 3,
        "koTitle": "사람들은 닷컴 붐을 좋아했습니다. A.I. Boom, 그다지 많지 않습니다.",
        "enTitle": "People Loved the Dot-Com Boom. The A.I. Boom, Not So Much.",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE8tczZkWElNZE9OcDgxTm9ZRW1HTUNuT21FZWdNazhMcXJwNE5NYnV6UDM4N3BUcmV2YUlObjBJbUVDY2dBVF9hNjlZMlpIc0lYOGFYcmkwSlVibGljMWtrZEhLYkhMTktod1BTMk82a19NTHRDekE?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
        "hookTitles": [
            {
                "top": "사람들은 닷컴 붐을 좋아했습...",
                "bottom": "(The New York Times)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "사람들은 닷컴 붐을 좋아했습니다. A.I. Boom, 그다지 많지 않습니다. | 오늘 발표된 최신 뉴스입니다. 출처: The New York Times."
    }
];

const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "은행들이 2026년 설날 연휴 기간 동안 발생할 수 있는 AI 사기에 대해 긴급 경고를 발표했습니다.",
        "enTitle": "은행들이 2026년 설날 연휴 기간 동안 발생할 수 있는 AI 사기에 대해 긴급 경고를 발표했습니다.",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "Vietnam.vn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOUDk3cm1SM1RMTmRfUGh0bURfOWVZeDFNRXZlSENkcDNXN0dDekVWeGRKdnU4d0U1V2lpNlBjcEQ5U01uWFJ1d2JtZ2hNaUx6NTBmQ2dVME92U0pRc2ROMzVHbnd0NXFhSEluS2tTeDJGV3VveVpUbDBzV2lQZDJtOEx3?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "hookTitles": [
            {
                "top": "은행들이 2026년 설날 연...",
                "bottom": "(Vietnam.vn)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "은행들이 2026년 설날 연휴 기간 동안 발생할 수 있는 AI 사기에 대해 긴급 경고를 발표했습니다. | 오늘 발표된 최신 뉴스입니다. 출처: Vietnam.vn.",
        "category": "Physical AI"
    },
    {
        "rank": 2,
        "koTitle": "전북연구원, 피지컬AI·RE100 등 2026년 '10대 연구 아젠다' 선정",
        "enTitle": "전북연구원, 피지컬AI·RE100 등 2026년 '10대 연구 아젠다' 선정",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5pYmN4TzM3dGYwVFFCZmdoMHR5WHpoNUZJOE5LOGFCZGQ5OGhVLWJLV1p3UC1YR1R2WnFaTGVtcFlsYXdBbHRMbGFhN0RaZw?oc=5",
        "isRepublished": false,
        "viralRate": "79%",
        "hookTitles": [
            {
                "top": "전북연구원, 피지컬AI·RE...",
                "bottom": "(전자신문)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "전북연구원, 피지컬AI·RE100 등 2026년 '10대 연구 아젠다' 선정 | 오늘 발표된 최신 뉴스입니다. 출처: 전자신문.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "인텔, AI PC 시대 선언…2026년 출하량 절반 돌파 예상",
        "enTitle": "인텔, AI PC 시대 선언…2026년 출하량 절반 돌파 예상",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "네이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1YRlgzbFNfTHJRV3JtSlVWMkRNTWZGSjZGdF9HbC11TVQ0cV9Fcnc2YUxxYVZnclhhX29KTmVybWN1UEZza25pMG4wcWZtcF9QMjYw?oc=5",
        "isRepublished": false,
        "viralRate": "75%",
        "hookTitles": [
            {
                "top": "인텔, AI PC 시대 선언...",
                "bottom": "(네이트)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "인텔, AI PC 시대 선언…2026년 출하량 절반 돌파 예상 | 오늘 발표된 최신 뉴스입니다. 출처: 네이트.",
        "category": "Korea AI"
    }
];



// [기능 1] 뉴스 API 연동 시뮬레이션 및 데이터 페칭
async function fetchLatestNewsFromServer() {
    console.log("코다리 부장: 최신 뉴스를 가져오는 중입니다... (API 연동 시뮬레이션)");
    // 실제 운영 시에는 fetch('https://your-news-api.com/latest') 형태로 구현됩니다.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ aiNewsData, generalTrendingData });
        }, 800);
    });
}

function renderHero(item) {
    // 이미지 제거됨 - 히어로 섹션 미사용
}


function renderSection(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';

        const rateValue = parseInt(item.viralRate.replace('%', ''));
        const hotClass = rateValue >= 90 ? 'hot' : '';

        const hookContainers = item.hookTitles.map((h, index) => `
            <div class="hook-box" data-label="${index === 0 ? '카드 1' : '카드 2'}">
                <span class="hook-line top">${h.top}</span>
                <span class="hook-line">${h.bottom}</span>
            </div>
        `).join('');

        // 날짜 표시: 최초발행일이 있으면 함께 표시, 재발행이면 경고 배지 추가
        const originalDateDisplay = item.originalDate
            ? `<span class="original-date" title="최초발행일">📅 최초발행: ${item.originalDate} · ${item.sourceName || '출처미상'}</span>`
            : '';
        const republishedBadge = item.isRepublished
            ? `<span class="republished-badge" title="재발행된 기사입니다. 최초발행일을 확인하세요.">♻️ 재발행</span>`
            : '';

        card.innerHTML = `
            <div class="rank"><i data-lucide="${item.category ? 'zap' : 'trending-up'}" style="width:14px;"></i> ${item.category ? item.category : 'AI'} TOP ${item.rank}</div>
            <h2 class="ko-title">${item.koTitle}</h2>
            <p class="en-title">${item.enTitle}</p>
            <div class="viral-badge ${hotClass}"><i data-lucide="flame" style="width:14px;"></i> 터질 가능성: ${item.viralRate}</div>
            <div class="meta-section">
                <div class="meta-item"><span class="meta-label">카드뉴스 가이드</span><div class="hook-container">${hookContainers}</div></div>
                <div class="meta-item"><span class="meta-label">분석</span><p class="analysis-text">${item.analysis}</p></div>
            </div>
            <div class="card-footer">
                <div class="date-info">
                    ${republishedBadge}
                    <span class="news-date">수집일: ${item.date}</span>
                    ${originalDateDisplay}
                </div>
            </div>
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

// [기능 2] 자동 업데이트 로직 (Initialization)
async function initializeApp() {
    const timeDisplay = document.getElementById('update-time');
    const titleElement = document.getElementById('main-title');
    const now = new Date();

    // 1. 타이틀 날짜 업데이트 (M/D 형식)
    const month = now.getMonth() + 1;
    const date = now.getDate();
    if (titleElement) {
        titleElement.innerText = `${month}/${date} 이슈 리포트`;
    }

    // 2. 서버 데이터 페칭 시도
    try {
        const freshData = await fetchLatestNewsFromServer();

        const sortedAiNews = sortAndRankData([...freshData.aiNewsData]);
        const sortedGeneralTrends = sortAndRankData([...freshData.generalTrendingData]);

        const topItem = sortedAiNews[0];
        if (topItem) renderHero(topItem);

        renderSection('news-list', sortedAiNews);
        renderSection('general-trends-list', sortedGeneralTrends);

        // 업데이트 시간 표시
        const nextUpdate = new Date(now);
        nextUpdate.setHours(7, 0, 0, 0);
        if (now >= nextUpdate) nextUpdate.setDate(nextUpdate.getDate() + 1);

        timeDisplay.innerHTML = `
            <div style="font-size: 0.85rem; color: var(--accent-primary); opacity: 0.9;">
                <i data-lucide="check-circle" style="width:14px; vertical-align: middle;"></i> 오늘 자 업데이트 완료 | 다음 예정: ${nextUpdate.toLocaleDateString()} 07:00 AM
            </div>
        `;

        if (window.lucide) lucide.createIcons();
    } catch (error) {
        console.error("데이터 로딩 실패:", error);
    }
}

window.onload = initializeApp;
