/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
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
        "koTitle": "사람들은 닷컴 붐을 좋아했습니다. A.I. Boom, 그다지 많지 않습니다.",
        "enTitle": "People Loved the Dot-Com Boom. The A.I. Boom, Not So Much.",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE8tczZkWElNZE9OcDgxTm9ZRW1HTUNuT21FZWdNazhMcXJwNE5NYnV6UDM4N3BUcmV2YUlObjBJbUVDY2dBVF9hNjlZMlpIc0lYOGFYcmkwSlVibGljMWtrZEhLYkhMTktod1BTMk82a19NTHRDekE?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
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
    },
    {
        "rank": 3,
        "koTitle": "AI 히트: 델리 정상 회담에서 미국 기술 대기업의 기술을 활용하는 데 굶주린 인도",
        "enTitle": "AI hit: India hungry to harness US tech giants’ technology at Delhi summit",
        "date": "2026-02-21",
        "originalDate": "2026-02-20",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxQeWdSR05RV3BodlI3UWV5Sk1sWERRd1h1VDRpR2NWRF93M1I2bnFBc01BNkRzV0w4bFFONklUR1JwMzVSSVVRbktOZ09vSHdSbkdldE9FZVVIdk02bm9GNTdESThKdVg5RVFPNzgxQUdlYmo5Q0JBeUFTSllkV3FONl9CTlBMZ0d0R2VycjN2SEtaTVNTNkdxZEpvWlE2dw?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "AI 히트: 델리 정상 회담...",
                "bottom": "(The Guardian)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-20"
            }
        ],
        "analysis": "AI 히트: 델리 정상 회담에서 미국 기술 대기업의 기술을 활용하는 데 굶주린 인도 | 오늘 발표된 최신 뉴스입니다. 출처: The Guardian."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
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
        "koTitle": "인텔, AI PC 시대 선언…2026년 출하량 절반 돌파 예상",
        "enTitle": "인텔, AI PC 시대 선언…2026년 출하량 절반 돌파 예상",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "네이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1YRlgzbFNfTHJRV3JtSlVWMkRNTWZGSjZGdF9HbC11TVQ0cV9Fcnc2YUxxYVZnclhhX29KTmVybWN1UEZza25pMG4wcWZtcF9QMjYw?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
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
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "\"AI로 프라이버시 지킨다\"…베일 벗는 갤럭시 S26, 뭐가 달라질까[언팩 미리보기上]",
        "enTitle": "\"AI로 프라이버시 지킨다\"…베일 벗는 갤럭시 S26, 뭐가 달라질까[언팩 미리보기上]",
        "date": "2026-02-21",
        "originalDate": "2026-02-20",
        "sourceName": "뉴시스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9yZy1pOVkwUUtFR3JzbVNGbDI3SWxxNWlVemlpX3JvRGJQNDJlRVhaT3YzQUdndGtvcTJjcUJCRU9nWERTZzFycHprbklxRXhpTExBeXgwT29NaTM2cy1OUNIBeEFVX3lxTE9BbGRmSFJNdlg2WHhfdlFMLXNCSWVEMVpPdU5rOXBhOFR5MlZhZjZyZVpUWjNHQWtOdU9rSGpSTnJJUDZQdG5OODJ6SkFFdWswei0zOE5hWXhSVGNXR1M3OTI0U0p2NmE2WkNoZHV0bDZsR1lvenFVWg?oc=5",
        "isRepublished": false,
        "viralRate": "79%",
        "hookTitles": [
            {
                "top": "\"AI로 프라이버시 지킨다\"...",
                "bottom": "(뉴시스)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-20"
            }
        ],
        "analysis": "\"AI로 프라이버시 지킨다\"…베일 벗는 갤럭시 S26, 뭐가 달라질까[언팩 미리보기上] | 오늘 발표된 최신 뉴스입니다. 출처: 뉴시스.",
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
