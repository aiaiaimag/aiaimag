/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-05
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "OpenAI의 CEO 샘 알트만 (Sam Altman) 은 ‘AI 세척’ 이 진짜라고 경고하지만, 기술 관련 직업 이탈이 진행 중입니다.",
        "enTitle": "OpenAI CEO Sam Altman warns ‘AI washing’ is real, but tech-related job displacement is on the way",
        "date": "2026-05-05",
        "originalDate": "2026-05-04",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB0a0d6S0FFdG9BNmhRU0xXTGtOMmxTcGFad0FlODRZb1dUNVVMOUZ6RjNLUWpxYTBrTlFDaFlqLXBqb1A1UE1PNVVjeHVqMGo3VUh2YVNxZUpoMzNyS1hmNGtmdlh1NGE4bUVLYjN2eGI?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! OpenAI의 CEO 샘 알트만 (Sam Altman) 은 ‘AI 세척’ 이 진짜라고 경고하지만, 기술 관련 직업 이탈이 진행 중입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "$ 700M 밸류에이션 잭팟 이후, 인도 출신 테크니 창업자의 AI 앱이 바이럴 광고에서 벵갈루루 트래픽을 유인합니다.",
        "enTitle": "After $700M valuation jackpot, Indian-origin techie founder’s AI app woos Bengaluru traffic in viral adverts",
        "date": "2026-05-05",
        "originalDate": "2026-05-04",
        "sourceName": "financialexpress.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxPbGpWbjBVaDY4MjF1Xy1aUUlBOW5YMlVjZVY3LWVjdDdmNHUzbXpPc1lDVmQ5bjczSHhZRjBoS1JrZVdEb2EwRU9yTGZtZDJyQXRLLU54Rkx5aHlwREhRdGEydTFseE5NNlFHVGhFX0ZaR2UwMk1xSVpiWkJMY2tzOTFfcG0zWUNtWkRxakVSWmJxYU9lRkl4b09jRE15c01iVi1Zdzluc1ltWml6MXR4Y3FITjVYdHFlQVdXQUdIdmRITlhCRk1PQzhUbE5zTkktNjhVcmdldmZqRG5hd0FVaDdaUHlPemptUy04VNIB8wFBVV95cUxNM3ZQeEpCOVh3bmo4NUhWTWZ2RjR0T2N5bkRWRWNmY19SdnR3V3N5LVpJUDBnY0E3MHpZYVF6TTU1dUlBYkhySnpQTGQtNHVwMVFCYlVRQ25PTnFBVHZsd1FzdERMT0hBY3lQeFJkZDQtRC11Mks5SnFNbWpNSnpONVlMUF9uSEVMQlNpcU1PcTBaZUhKU1B5TkRxWUpoSEtQSUxSRTRYaGNLZjRkRmtxTElhZEVUbkowcy02WHpxLTFyRDVfMXJvRmhoLWU4dEFzTV82S0RZdm5IcnREZmZJeEM1OXlVd1B1cDV1WU00c04wd2c?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! $ 700M 밸류에이션 잭팟 이후, 인도 출신 테크니 창업자의 AI 앱이 바이럴 광고에서 벵갈루루 트래픽을 유인합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "중국의 인공지능 추진이 아프리카에 노동의 미래에 대해 가르칠 수 있는 것",
        "enTitle": "What China’s AI Push Can Teach Africa About the Future of Labor",
        "date": "2026-05-05",
        "originalDate": "2026-05-04",
        "sourceName": "The Diplomat – Asia-Pacific",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPMTRUV244cU9DQUJsOXc1Z2FBMGx3emNRbXQ0N0ZCQnlEVy1BNWstTFpDZEtPcDJDWjhBVzRfaldYRkNlclVOZ3hOU0lyZWh4b2hCU0g0ZzQtQU0zNG9SaW1fMjRubHNEOWdRLWx5LTlScVRReDNidzhCNnlZNWVfU1E1eE5ZcnV3ZWM0SWdjV3lycDRfNXd2R1VXVQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 중국의 인공지능 추진이 아프리카에 노동의 미래에 대해 가르칠 수 있는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "잇플루언서, ‘잇플 AI’ 출시… “AI가 인플루언서를 추천”",
        "enTitle": "잇플루언서, ‘잇플 AI’ 출시… “AI가 인플루언서를 추천”",
        "date": "2026-05-05",
        "originalDate": "2026-05-04",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1CWmZINm9qT2NLQWVNSlZhd2EzbGI1Sk9QM0p5Mm1sY0FhR0Y5ekt5MklzTUZaeUsxNFZDMnRwVFN1NklMVFJlU2hFMzBlMk95MzUxdmJqTlg0RDVsb1BPeEMyVVNzM2VrT3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 잇플루언서, ‘잇플 AI’ 출시… “AI가 인플루언서를 추천” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "클로드, 국내 월간 설치 첫 ‘50만’ 돌파… 챗GPT 이어 2위",
        "enTitle": "클로드, 국내 월간 설치 첫 ‘50만’ 돌파… 챗GPT 이어 2위",
        "date": "2026-05-05",
        "originalDate": "2026-05-04",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1YX3Q5Q28tTlFGWFZhbjluSWpUZHNfRlI2X1hNT21nLWJWVV85ZF9WcWR1X3FyRkdINENnaUFmM05mVFhvSm40anY0bnN4b0k?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드, 국내 월간 설치 첫 ‘50만’ 돌파… 챗GPT 이어 2위 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "네이버, 1분기 실적 발표에 주춤⋯“AI 수익화ㆍ두나무 합병이 주가 반등의 열쇠”",
        "enTitle": "네이버, 1분기 실적 발표에 주춤⋯“AI 수익화ㆍ두나무 합병이 주가 반등의 열쇠”",
        "date": "2026-05-05",
        "originalDate": "2026-05-04",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBkNVFJRmJMVzBwbmt0UHVFbDRWMEhjNTNPYnUwY0k0LWlLaFd5czhDaDNUZk1UWkY1WjBQLXVPRG56WUloMWx3aURFS2YybUU?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, 1분기 실적 발표에 주춤⋯“AI 수익화ㆍ두나무 합병이 주가 반등의 열쇠” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
