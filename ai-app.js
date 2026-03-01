/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI는 일자리를 끝내는 것이 아니라 바꿀 것입니다: Amazon CEO Andy Jassy",
        "enTitle": "AI will change jobs, not end them: Amazon CEO Andy Jassy",
        "date": "2026-03-01",
        "originalDate": "2026-03-01",
        "sourceName": "ETHRWorld.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNUmNxaTdhbjdsUUppSEdhajBpQ0FKbnRFVlFYV2l5NmszeXpSakhDMVQtd3FGWTc0c0xqbVNPak1Mand0M1lpdEUwVlNOZmFZMnlXb1ZRWHR3NUFRNU9Lc0dEY1FEZXFXY1pRNi1rdi1BajlXb0Y3RDduNEJQSERkTFpJYlJEMGRTVUFOZTZYT0dySkZhNmI0TFc2S3l4UzJveExUU1hMOWZmNnJodHF3b2lqdGZSS05nd3J5RGlhMHpBNVZZOVJaa1pnUdIB0AFBVV95cUxNcW50UnZPWklTZ1lKWUJjYXNMdWMyOHRrY3pfa1AzQkdtNkMtZTZPbkxaaVczV0QzYkM1X2JuOHQ1UzlZNzhrUi1nWDc4cGJsMWFNSmQwQU5lazJSTXhmdVRPTTlhd0twamk4alV4NlgyNTkwQlFuYUxOajNrX0NmeFozNzFueGZfcFVSVThxNkVrdVRuaW9iVzRvdFZNV3Bwckp5RXQ5cnNtQ1RvbGZ3Y1F3ZFAyOHVBVjVtRlRJZ25mSXdLcTMwOXhNd19kd0dh?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 일자리를 끝내는 것이 아니라 바꿀 것입니다: Amazon CEO Andy Jassy 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "게임 분야의 AI 직무: 미래 게임을 형성하는 커리어 | Outlook Respawn",
        "enTitle": "AI Jobs in Gaming: The Careers Shaping Future Games | Outlook Respawn",
        "date": "2026-03-01",
        "originalDate": "2026-03-01",
        "sourceName": "Outlook Respawn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQczZDai1kTDltZjJtVzFBUXZOblNyYWhJa2pvMUg1SEVCWnJZblF4aDF3bzZXYjJ4MTlaemdsTlA5cGM0WDVpUGp0OE9IVE5DNTJkMUdkVzA4YXRuOWkwRklLZmVvQVp2MzFZYXNfd29GMFNibF9mcEdmX0hLOEZVT0NnYkFTd2VhczNlcV9tTHg0c0VES1BYc0RxMU5qWDg1cV9nQ293SUdPRjjSAbgBQVVfeXFMUGNuaWRQVEM2S3pYZXBFRWJfaFdNTnF2ck1vbm5WVHFKeFk4aHNZMXpfNXNMbHRsbFctQjlKT0ZjZWtOTy1aZUVuS296Mk9XdlBqT3h1R2FuRnY3WmRIbDFERUlqZzJibmsxSHp2cDVJd0txRTE0dkNVbmljbUxOZTlROWRscTI2bkw5cHVzNkdPdEdPTlluVkNOUWVBLTlRa1E2cGtwSC10Z2NBemZReDRTa2lRVmxzQw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 게임 분야의 AI 직무: 미래 게임을 형성하는 커리어 | Outlook Respawn 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일자리 훔치기 AI 소프트웨어로 비트코인의 가격 상승을 촉진할 수 있는 방법은 다음과 같습니다.",
        "enTitle": "Here's how bitcoin's price rise could be fueled by job-stealing AI software",
        "date": "2026-03-01",
        "originalDate": "2026-02-28",
        "sourceName": "CoinDesk",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOY1ZBQjlVekVBZld3V19PNjNvZEVRUENwZXJGZGhuZ0U5ZWFvdHhYZnV1YS1zV0lpbkhsYlA3bV9aY1dqN0NhYWREQUhpVy0ySzdwS1FueU9IR29OTlNEOWFRVGlhZkI5YldrZTk0TVlqRi1IeG80S251TlhGWUFldDBCU216LXdNeGVSRE1nX3FIamlpM2lLOTJKQkVRZWwxbXNPSkwyZFJTcWZZdHNSUHA2NENpeXg3bnRzTw?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 일자리 훔치기 AI 소프트웨어로 비트코인의 가격 상승을 촉진할 수 있는 방법은 다음과 같습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영",
        "enTitle": "노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영",
        "date": "2026-03-01",
        "originalDate": "2026-02-27",
        "sourceName": "데브타임즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9aWnpkMGdoWjUyU0wtbVJaNThpUGRSeDJvUGFkQUN2dkhBVmtEOGdCUlJEMWtvbzNfcWhIR1BPR1dnM3dCeXlieTBoZko2emc?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "enTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "date": "2026-03-01",
        "originalDate": "2026-02-26",
        "sourceName": "컨슈머타임스(Consumertimes)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9NeV9MWXhLNGNDQ1hiQzFLU1RDWEx4ejlfb1psbW5jZW1YU1VKNkJrSXd6UnBRSlZTZmJoWkFmVUh1bVBLTGhBYU8xUnJWamktRmF0RDJIb3RJLUxZcURkalpOWEQ0ejhlTFE?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "2030을 위한 AI 실무 팁! AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "AI 시대, '바른채용'이란 무엇인가...HR 전문가들 해법 나눠",
        "enTitle": "AI 시대, '바른채용'이란 무엇인가...HR 전문가들 해법 나눠",
        "date": "2026-03-01",
        "originalDate": "2026-02-26",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9OS2lsckNyX2dMWDlEQmFCTlgtOUhkRlg1X3hDSl9TNGhCXy1leklpcjNTQlJOVXV5Z2l6N2p4Y0RBZjhPLUs0T1dIZm83REw4bkpEbUJn?oc=5",
        "isRepublished": true,
        "viralRate": "87%",
        "analysis": "2030을 위한 AI 실무 팁! AI 시대, '바른채용'이란 무엇인가...HR 전문가들 해법 나눠 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
