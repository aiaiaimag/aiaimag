/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-22
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Mistral AI의 CEO는 인공 지능의 극단적 인 위험에 대한 경고는 종종 '산만 전술' 이라고 말합니다.",
        "enTitle": "CEO of Mistral AI says warnings about extreme risks of artificial intelligence are often 'distraction tactics'",
        "date": "2026-02-22",
        "originalDate": "2026-02-21",
        "sourceName": "Le Monde.fr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxORmh3QXdkVjV1UGVNaGJmTnRFWTBmVWI4dWdCcDdoUUxLTlZoVXBrNU8xSzRSZ283QXRMSGIxS1VjajR2bkZ1SlBNcGtsaWNROEg4dEtrVDByb2NfaGFkTThXdzU0bWt2Wk53TC0zdXpqTGZuNE1EVlo1RFptNE5oTnVIRFVubEpYZVJjS2RPYjFMRDZvSXFNQzcxOXI2aDAxSmJjT1pzcTRSZEhtVTVRM2hDaVNNbjZtZXRVM1JSWXFzTHlDVnpBUHM1Tl9XbmU0Uk01TExmaEZlRHZjaUhZbEF6R3RsR2JtV3BLeThGZE9nVUhGRWRjLWk0aHBMYk40RXFZVkxoMng?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "hookTitles": [
            {
                "top": "Mistral AI의 CEO...",
                "bottom": "(Le Monde.fr)"
            },
            {
                "top": "오늘의 핫 이슈",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "Mistral AI의 CEO는 인공 지능의 극단적 인 위험에 대한 경고는 종종 '산만 전술' 이라고 말합니다. | 오늘 발표된 최신 뉴스입니다. 출처: Le Monde.fr.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI (인공지능)",
        "enTitle": "AI (artificial intelligence)",
        "date": "2026-02-22",
        "originalDate": "2026-02-21",
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
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "AI (인공지능) | 오늘 발표된 최신 뉴스입니다. 출처: The Guardian."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 챗봇이 미성년자와 상호 작용하는 방식을 규제하기 위해 신속하게 움직이는 법안",
        "enTitle": "Bill moving quickly to regulate how AI chatbots interact with minors",
        "date": "2026-02-22",
        "originalDate": "2026-02-21",
        "sourceName": "KOMO",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgJBVV95cUxQX1ZZTE1GSGdaeU9zc1F3b09lTjJPc21FSW9kTWRHTTY3NG50ZkhscjgteHprektaMlJkcDFROHU4TGVkTDlhNmFwVkhGRW8wRjFLeDZiYmpteE1nSEI4bHRBT09hTW1ydVo5UEtuZ1JXTjcwODNoSlFtVHZGRURiRzVzQktiQUh5OEtoc0kzX1JkZ1AtVjJFQm1adFlIUFFPMTdZU2RDOGs0V1djU1VLZFZPZ1FVb0NfNzdLMFhMNFQ4R0VtdmR2azN0UnVxUUxTUU42aXpPeHppOV9ReFdJZ0FydkdqdVJmTGtTQlotd1pVZWZ5RzVMODVYYjNuTmI1YktoZC1mMUt6bFloOGF3eWJTSDZHUQ?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
        "hookTitles": [
            {
                "top": "인공지능 챗봇이 미성년자와...",
                "bottom": "(KOMO)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "인공지능 챗봇이 미성년자와 상호 작용하는 방식을 규제하기 위해 신속하게 움직이는 법안 | 오늘 발표된 최신 뉴스입니다. 출처: KOMO."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "은행들이 2026년 설날 연휴 기간 동안 발생할 수 있는 AI 사기에 대해 긴급 경고를 발표했습니다.",
        "enTitle": "은행들이 2026년 설날 연휴 기간 동안 발생할 수 있는 AI 사기에 대해 긴급 경고를 발표했습니다.",
        "date": "2026-02-22",
        "originalDate": "2026-02-21",
        "sourceName": "Vietnam.vn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOUDk3cm1SM1RMTmRfUGh0bURfOWVZeDFNRXZlSENkcDNXN0dDekVWeGRKdnU4d0U1V2lpNlBjcEQ5U01uWFJ1d2JtZ2hNaUx6NTBmQ2dVME92U0pRc2ROMzVHbnd0NXFhSEluS2tTeDJGV3VveVpUbDBzV2lQZDJtOEx3?oc=5",
        "isRepublished": false,
        "viralRate": "84%",
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
        "koTitle": "[심리학을 재편하는 인공지능: 2026년, 더 빠른 선별 검사와 맞춤형 케어의 시대] 2026년의 AI는 정신 건강 관리의 행정 절차를 가속화하고 조기 선별 및 개인화된 치료를 지원하는 강력한 도구다.",
        "enTitle": "[심리학을 재편하는 인공지능: 2026년, 더 빠른 선별 검사와 맞춤형 케어의 시대] 2026년의 AI는 정신 건강 관리의 행정 절차를 가속화하고 조기 선별 및 개인화된 치료를 지원하는 강력한 도구다.",
        "date": "2026-02-22",
        "originalDate": "2026-02-21",
        "sourceName": "AI넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTFBjeVloWnNvdnU5b0MtLW5VVWhJSTEzUnRsVkNzdk43eUJLRVVsMGNFSEoxdnYyd3IwMDRBVmR3YzY?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "[심리학을 재편하는 인공지능...",
                "bottom": "(AI넷)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "[심리학을 재편하는 인공지능: 2026년, 더 빠른 선별 검사와 맞춤형 케어의 시대] 2026년의 AI는 정신 건강 관리의 행정 절차를 가속화하고 조기 선별 및 개인화된 치료를 지원하는 강력한 도구다. | 오늘 발표된 최신 뉴스입니다. 출처: AI넷.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "‘한미 기술번영 양해각서 이행 워킹그룹’ 출범…구체 협력 논의",
        "enTitle": "‘한미 기술번영 양해각서 이행 워킹그룹’ 출범…구체 협력 논의",
        "date": "2026-02-22",
        "originalDate": "2026-02-21",
        "sourceName": "부산일보사",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1MNnlXbF9DQWdzN0dPRFE3ODJwbEdpYUx6Q1JfUVFqNkZCTTJxcXNPS05INDdmU0lGdDlPSDZhejNSRXNKemRpQndXVmtEWm54cTNRSjJuM1JKMHZpVzRhc0hYNGttcE1uVVpCMUF1XzdGM2VG?oc=5",
        "isRepublished": false,
        "viralRate": "79%",
        "hookTitles": [
            {
                "top": "‘한미 기술번영 양해각서 이...",
                "bottom": "(부산일보사)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-21"
            }
        ],
        "analysis": "‘한미 기술번영 양해각서 이행 워킹그룹’ 출범…구체 협력 논의 | 오늘 발표된 최신 뉴스입니다. 출처: 부산일보사.",
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
