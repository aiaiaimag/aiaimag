/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "엔비디아 CEO 젠슨 황 (Jensen Huang) 은 인공지능 일자리에 대한 두려움이 '완전히 터무니없는 소리' 라고 말합니다. 소프트웨어 개발자 수요는 증가하고 있다고 말합니다.",
        "enTitle": "Nvidia CEO Jensen Huang calls AI job fears 'complete nonsense,' says software developer demand is only growing",
        "date": "2026-06-08",
        "originalDate": "2026-06-07",
        "sourceName": "moneywise.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNVTh4QV9zOFEyOW1IRHo2cW55NERkQmtMWjZnTjhmTlBWSGMwZy10eWdZVFNTSFdqVzNXUDVHbndDT01VZGRIYVJEUVlmaEpfajJfQi03UWE0S1NJdDJFb3d6X0x6RmtaYWgyMTEtYXB1UTh1bUwzWVRWM3BERVBmcw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 엔비디아 CEO 젠슨 황 (Jensen Huang) 은 인공지능 일자리에 대한 두려움이 '완전히 터무니없는 소리' 라고 말합니다. 소프트웨어 개발자 수요는 증가하고 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 및 Tech Brief: 업무의 미래",
        "enTitle": "AI & Tech Brief: The future of work",
        "date": "2026-06-08",
        "originalDate": "2026-06-06",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQLThTanVYRVc3ZnNNaHVpelcxX3I2UWtVWkRTekRlRDVBRkdqbjY5RnhfLTNvelJHZ0tNX3FySHRyWDlybHdab2h2OTQwX3RoY1BYLWxXbFpmaGpOeWhROFlVODJEVWR0LU81T1V2R0o1SERkRXVRdG80NEswVUl2Y0MyUk81N3EtVm5Za2w5alk0eGhRSHJVS3B3YlNNSUU?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI 및 Tech Brief: 업무의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Google 공동 창업자 세르게이 브린 (Sergey Brin) 은 Go 게임을 사용하여 업무의 미래를 설명한다고 말합니다.",
        "enTitle": "Google cofounder Sergey Brin says he uses the game of Go to explain the future of work",
        "date": "2026-06-08",
        "originalDate": "2026-06-06",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQZXZwMjJudnlxSHVNQVo4OVFGaDY4Ym9ldk85b2I4ZTBmYW82RzY4R0RPcllxWGxjYkFQZUtJMmJQTUM1eXlWUjFrMERzWTdwRU5Rd2hlUXktbTFjOElPQk1PVnlBS1lpOVJOakp6NWIyRFBNYnZLQTNLa0RXN3lrWkt3cTVLOFlERzlYTlAxNFdFRWhsRmFKLVZB?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! Google 공동 창업자 세르게이 브린 (Sergey Brin) 은 Go 게임을 사용하여 업무의 미래를 설명한다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "chatgpt-magnet-of-mediocrity",
        "enTitle": "chatgpt-magnet-of-mediocrity",
        "date": "2026-06-08",
        "originalDate": "2026-06-07",
        "sourceName": "SAP News Center",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPX3F4a280R2xLMmpuZnQ3aGdjcWIwYnNCZUhESTd3bDBMaWFwUTB4RWZHaFhnS2pqWUUtbGVKZHQwREh2Q1hCbnk5cUh5Qk9QbkU4eVNsYjBwdUtVSkxRbGtrSnlTZXBNbXI2dC1BLXpwb0NIamJjdDlka1JRbkw1RGtfTzR0TmNwbV96ZEFSaU45cnJnTFpTOUppZDVleGZRRFR4M2ZXUGg2UGZ0RHpQd29IeTBJdkFlVmphYS1mRGRZS01LR21BQUlibVJTSlVVdHZpUXo5UlNuWG9q?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! chatgpt-magnet-of-mediocrity 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "오픈AI, 챗GPT 출시 후 최대 개편…'AI 슈퍼앱' 진화 천명",
        "enTitle": "오픈AI, 챗GPT 출시 후 최대 개편…'AI 슈퍼앱' 진화 천명",
        "date": "2026-06-08",
        "originalDate": "2026-06-07",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1nRThmVDIzbG9TYWFVOGhTYUZ0V3lfZUk1cGlWTGhjbEl2emJxaGhBeVdoVXZ5R0E1TUphV1lQWU1jcF9iU3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 챗GPT 출시 후 최대 개편…'AI 슈퍼앱' 진화 천명 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT는 여전히 1위, 가장 빠르게 성장한 AI는 클로드… AI가 검색·발견·구매를 바꾸고 있다",
        "enTitle": "챗GPT는 여전히 1위, 가장 빠르게 성장한 AI는 클로드… AI가 검색·발견·구매를 바꾸고 있다",
        "date": "2026-06-08",
        "originalDate": "2026-06-07",
        "sourceName": "매드타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5rZnpscXNzaGZiNW5EbHhZWWF0cHJlc181bXQzRVRrRUNXRG9oU0wxR3pPb21IX3ZHQUtPMS1ra1FBRE1mWmFtNXNaLXN0cEsyN1lTdnJCZUVTNV8wcXpTSVdLRHFkb0M2M3B6cg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT는 여전히 1위, 가장 빠르게 성장한 AI는 클로드… AI가 검색·발견·구매를 바꾸고 있다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
