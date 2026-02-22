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
        "analysis": "Apple의 차세대 거물은 시각 인공 지능에 대한 추진력입니다. | 오늘 발표된 최신 뉴스입니다. 출처: Bloomberg.com.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 위협은 작업 손실보다 훨씬 큽니다.",
        "enTitle": "The AI threat is far greater than job losses",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "The Observer",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNRnJpTEdIUWpoWnJubjlfY0JrVWJiNzlKX2JBRHptaXFqU1hBQ3hGUUFLQ29QVXAzTUt4dHQ1T3N5ME1yU1FkcEQyOTdmNWFQX2FQYnBIeDZRRl9MYkRBUnhpU1BZb3h6YUtEYmtEa1N2QVlMYmUzT2VvdW82MEVBREl3dWlZZ3lmMHZuc3JkSXpRd3BnQUtqVVJfNWFWd2pkeG9hT3ZGLU9lZUhtbDl4NFVwMkRIWFdPdkNRUTBTdlM1QUpCbWI2WllhVXNESm8?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "AI 위협은 작업 손실보다...",
                "bottom": "(The Observer)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "AI 위협은 작업 손실보다 훨씬 큽니다. | 오늘 발표된 최신 뉴스입니다. 출처: The Observer."
    },
    {
        "rank": 3,
        "koTitle": "AI (인공지능)",
        "enTitle": "AI (artificial intelligence)",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1ITEpPcjJTZG1IZVJXYTVWanhKNHZ6QmZ0QngyS1d5T1VzdFVmQ2lrUzJ2U3RQeWZHY3ExbU1DX3dJRFhFRGJoV2tyZmVuYkYzekRrTnZNOFg3Q2hPS3ZzbVlNQVgzcWJONnBIb3h2SW4?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "AI (인공지능)",
                "bottom": "(The Guardian)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "AI (인공지능) | 오늘 발표된 최신 뉴스입니다. 출처: The Guardian."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "횡성군 2026년 인공지능(AI) 행정 전환 본격화",
        "enTitle": "횡성군 2026년 인공지능(AI) 행정 전환 본격화",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBLRWZ0aURlT1gzdy0ySWtZdkdTbjdPalI0V3pFX29McV9POUtMZXRxY2I0WkxwMU8xRUExQ1NpRE52ck01eGhCT25YTE0xbjg?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "hookTitles": [
            {
                "top": "횡성군 2026년 인공지능(...",
                "bottom": "(v.daum.net)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "횡성군 2026년 인공지능(AI) 행정 전환 본격화 | 오늘 발표된 최신 뉴스입니다. 출처: v.daum.net.",
        "category": "Physical AI"
    },
    {
        "rank": 2,
        "koTitle": "‘풀스택’부터 ‘에이전틱’까지… MWC 2026서 선보이는 통신 3사 AI 전략",
        "enTitle": "‘풀스택’부터 ‘에이전틱’까지… MWC 2026서 선보이는 통신 3사 AI 전략",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOcWNTWGJMX2hKMmdMMzFRSF9XTWlpdFpQRGhwYXVNQnJyUVR3b2ZwNV9WaERza2hZa1dHSjdERlNTOHBncGdPR0Z1aFozMGJJRl9aR1loV1FrNlE3SDRKWlRRbW9jS1FiazE5cFNWRTlybm04QkstbV80cWRpVW9lNFJnY9IBlwFBVV95cUxPTnZGd3FTbEVEa1RSMmlPWGlXQ3JCV1k4M0Y2dE5zZHJUYkhpaUNSSl9iM2VMYWc4T0x4NE1QMFVnckRZTzNjaEJ4ZVFiMzluUHQ0VXVOVWxiaXlhTkdYck5MMUhHWmlwWXFiNEJmM1ZYUURYVVQxTlhFcVdVSXJxQ2RoLTZ5TXQtSDRVaVphc3RjZzlzeXpr?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "‘풀스택’부터 ‘에이전틱’까...",
                "bottom": "(조선일보)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "‘풀스택’부터 ‘에이전틱’까지… MWC 2026서 선보이는 통신 3사 AI 전략 | 오늘 발표된 최신 뉴스입니다. 출처: 조선일보.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "통신 3사 ‘MWC 2026’ 총출동···올해 테마도 ‘AI’",
        "enTitle": "통신 3사 ‘MWC 2026’ 총출동···올해 테마도 ‘AI’",
        "date": "2026-02-23",
        "originalDate": "2026-02-22",
        "sourceName": "경향신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBIRmpUQWdqRTdiOW1MQUdiWXRNTFlfT2haSFNGR3pBOG1LMWl5RUZUdkRTWXZMbWoxcHFoeFV2YmJvWEZ0cXVvZThWSVFiaFZrQTlOQlRNQ1JPZ9IBX0FVX3lxTE9VZmplaExBeC1mdGI5aHZHNEZjSU9KTnUwVmVUU2VGa29XYTFYUGMtYVVHWWxBLUJGM3QtTVp1MjlzdWplOUpIUzlJVkpVZTNOWXIwbktRRlJZVU9PNl9z?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
        "hookTitles": [
            {
                "top": "통신 3사 ‘MWC 2026...",
                "bottom": "(경향신문)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-22"
            }
        ],
        "analysis": "통신 3사 ‘MWC 2026’ 총출동···올해 테마도 ‘AI’ | 오늘 발표된 최신 뉴스입니다. 출처: 경향신문.",
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
