/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Lentz: AI가 업무와 일자리를 재편하고 있지만 숙련된 사용자가 미래를 주도할 것입니다.",
        "enTitle": "Lentz: AI Is Reshaping Work and Jobs, but Skilled Users Will Lead the Future",
        "date": "2026-10-28",
        "originalDate": "2026-10-27",
        "sourceName": "Rio Grande Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNUzhLaUJXUzViaDZ3YmNsR0dtVEs5OXhySnlfeUUtdzYwMG9jVmQxdVdmYTZ5c0hYSjMtczN6OTVIejduQ3ZzZFpBLVpfdVNSZ204R0FIVkh6elVIRUlUckQ0X2cwT1hwN01oVEhzTDExNWJpWWh2LWpHbWNqYjdNOG1aWnhqQVdjT2p0RjVsSkZCbzZHODY2dkxIRkNmOHRWczYyc3VhRVQ3R2x0OVZSODBNSjRlU0c0U3c?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Lentz: AI가 업무와 일자리를 재편하고 있지만 숙련된 사용자가 미래를 주도할 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "‘그 분야는 죽었다’: AI 혼란에 대비하여 화이트 칼라 노동자들은 선제적으로 경력을 바꾸고 있습니다.",
        "enTitle": "‘That field is dead’: Bracing for AI disruption, white-collar workers are pre-emptively changing careers",
        "date": "2026-10-28",
        "originalDate": "2026-10-27",
        "sourceName": "The Globe and Mail",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPM0ZBdUlOUi1NZjFUNkJ5RzVBbTFvRlpXUlA5SFJVaUV6ZndiUDNGd3JDUEpwSjN3OEMxbnJkNTRsQ0RaNi1jODFOR0pvVEVUSG1VR1k1SXpfa3hMYldxUjJ3LUd4bENrSGtTcERqTzh5QzhrSFVFMnE3YXpubWdlWVp6Nk9PaGF1WG9TeXhZWWYySFlRNGhLX2tHTFA5OWpmVWRncS1CaDdZWE9kQWdIa0pFSl9PSDAtbF8zREFtR1BjUW9I?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! ‘그 분야는 죽었다’: AI 혼란에 대비하여 화이트 칼라 노동자들은 선제적으로 경력을 바꾸고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "'인공지능이 일자리의 미래를 영원히 바꿀 수 있다': NDTV 월드 서밋의 미래학자 마이크 월시",
        "enTitle": "'AI Could Change The Future Of Jobs Forever': Futurist Mike Walsh At NDTV World Summit",
        "date": "2026-10-28",
        "originalDate": "2026-10-27",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOejhHMjRoNFM1WGloQzdVQ2RBNXJod0dVMjBaUFpNTTAwTm9TaklseDJFZVZpS1pPOTMxaTBhQ0Jjc1BwT3QxaUlGckVFb1UyUE5lX0J2ZW10RldDYUFpQjh1bDhid3ROTkFJWnVrX1NRNGZJRXhFQXRDeGtBbzdIS3R0Q2N4UTlsTTN6ZXpmSlRTaU9zVTF6TkRqN1F4TFZ0eURvTl9oWHhBVDJPbDFhelhsaG44eHRsOWc?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! '인공지능이 일자리의 미래를 영원히 바꿀 수 있다': NDTV 월드 서밋의 미래학자 마이크 월시 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI 트렌드] 내 얼굴엔 마녀일까 구미호일까…챗GPT 할로윈 프롬프트로 할로윈 코스튬 입는 법",
        "enTitle": "[AI 트렌드] 내 얼굴엔 마녀일까 구미호일까…챗GPT 할로윈 프롬프트로 할로윈 코스튬 입는 법",
        "date": "2026-10-28",
        "originalDate": "2026-10-27",
        "sourceName": "AI 매터스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5hMDRYY0tSOVV2S1lDM3IwdkxRQ0UwZmtfeXMxdFhhdzVrblpxZnJwTWFsdEtfNHNUTlhmS0VMOWhCWHpnVXFqME9hWmJRNk1sblhVOQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 트렌드] 내 얼굴엔 마녀일까 구미호일까…챗GPT 할로윈 프롬프트로 할로윈 코스튬 입는 법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "표앤컴퍼니, 중소기업 재무관리 지원하는 AI 서비스 'GAIFAS' 출시",
        "enTitle": "표앤컴퍼니, 중소기업 재무관리 지원하는 AI 서비스 'GAIFAS' 출시",
        "date": "2026-10-28",
        "originalDate": "2026-10-28",
        "sourceName": "조세일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5TZ040VEg0SjZIbThLTWNyd3dUZTBtY25DY3ZwNUNlUzVrcjVTekhWYlNhMENFR3VDbnoyMUh1OUZJUDF1bUdZTEd2SF9qZjdZRFpxeGxVT1FIZnRJdl9WVUF5NnRUdjNNS24tR3llOVdxN1hk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 표앤컴퍼니, 중소기업 재무관리 지원하는 AI 서비스 'GAIFAS' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "애플, '시리 AI' 한국어 서비스 개시...iOS27.2 업데이트 배포",
        "enTitle": "애플, '시리 AI' 한국어 서비스 개시...iOS27.2 업데이트 배포",
        "date": "2026-10-28",
        "originalDate": "2026-10-27",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFByWGhsYWptN0pmaGJ0VDVSU3lLWkhOWWVJU2tlSTVIZFluS1N0d2I3MUg3TmlGMVBBa25JSnJoSzNJMHh6eXNId3JOU3dWVm5jRTJYR1hxU3NsblBibmxVRHBoSHJ5TGpQOEE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 애플, '시리 AI' 한국어 서비스 개시...iOS27.2 업데이트 배포 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
