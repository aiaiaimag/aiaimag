/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "다음은 바이럴 AI 도쿄 드리프트 트렌드를 수행하고 나만의 재미있는 밈을 만드는 방법입니다.",
        "enTitle": "Here’s how to do that viral AI Tokyo Drift trend and make your own funny meme",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "The Tab",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxONmU1bDRkWm93MklJTEFheDdtQmhzRnZVTzJ2VzIzMmlyOUQzUS12SUYweVJ6Z1VWLU9BdXg3QTBZblRybmFlZWdENGFtM0c1VlFxNzgxRUVfcUoya3gzek85WVNWaTY3V0RBUFJUNGdfQnlxMXdNekRMS1NYZkNTVjRWcUdvTV9sTEpjZEw4UGRnQ1VyXzhIWTdXSzlBaG9BWG5DbjVyTVRfZw?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! 다음은 바이럴 AI 도쿄 드리프트 트렌드를 수행하고 나만의 재미있는 밈을 만드는 방법입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "WEF: AI의 신속한 상용화는 미래의 일자리를 재편할 태세입니다.",
        "enTitle": "WEF: Rapid commercialization of AI is poised to reshape future jobs",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "safety4sea",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOYjMwd0VSYjAtaTR6V1JTUlZIOVotVVRUMWtGLUVuUm9XeGJYbEJBMk1FRm9wSmZfOXlrbXZuTkk0bkZkR1dDVHdmdVdOSzRIWjBzRl9kUUpoWXQ3VmphekdZc05kenY1dXlMWEhCdGVRZlNhaHNUMGRJSm03WWt5QU84a2pNWGNydGtjOEh6b3NWRDROdnRhVw?oc=5",
        "isRepublished": false,
        "viralRate": "86%",
        "analysis": "글로벌 AI 트렌드 체크! WEF: AI의 신속한 상용화는 미래의 일자리를 재편할 태세입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "청년 성인을 위한 AI 기회 창출을 위한 Future of Work Fund",
        "enTitle": "Future of Work Fund to Boost AI Opportunities for Young Adults",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "fundsforNGOs",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOM1NyZWV6TklEOUJvY2w5eFM2QzJVdWc2WjVTSXAxOF9jV3VEQUdJbmJOR0JUX1k5MFFLWkprTEYza0FUWHlPbF9CMW9fNXdxd3ZvbWQ3alhReHRWc2t3WU5JR3BnamI5MTRBLWZ5X0ZmVnFNa2d6b0lRZlRRVmlNRHF4VDhlV09hSlNMT2JoM1VCZmx6MkE5SVdlYlhVODJteEhVeDNtdV90N0JXM09neGt0T2txc3PSAbwBQVVfeXFMUHhiNTZfWDI3dnJPVnRFRFhFdWtsRno1VVUyRjFicTZjRHNRTGpvQ00tVVdYWFBsNEJBbXdwc0Q1a1VCWXRfZFlBYjlDaHRnUDdhVmlTelVLaHgwUkROel95dTVQR0tHMzJhdE1lR01IdXBfcS0taS1MMGRrSWxlSkFYdk1jSFQ1ekxmcEZ5MFFaRXVpRzBENUp5SlozTUkwMVhnODFuUFE5Z0FNNVJMVGlUel9iQXJGdUZEbko?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "analysis": "글로벌 AI 트렌드 체크! 청년 성인을 위한 AI 기회 창출을 위한 Future of Work Fund 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“상사는 모르게 하세요”... AI로 8시간 걸릴 엑셀 노가다 5분 만에 끝내버리기",
        "enTitle": "The Secret Productivity Hacks: Automating Your Full Day Work with AI",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "AIMAG Insight",
        "sourceUrl": "#",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "오늘의 꿀팁! 단순히 챗GPT를 쓰는 게 아니라, 내 업무 프로세스에 AI를 '심는' 방법입니다. 파이썬 몰라도 가능! 퇴근 시간을 돈으로 바꾸는 진정한 지능형 일잘러의 비밀입니다.",
        "category": "WORK HACK"
    },
    {
        "rank": 2,
        "koTitle": "무자본으로 시작하는 ‘AI 인스타 계정’... 0원에서 수익화까지의 최단 루트",
        "enTitle": "0 to 1 Million: How to Build a Revenue-Generating AI Instagram Account",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "AIMAG Insight",
        "sourceUrl": "#",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "부업 고민 끝! 얼굴 노출 없이, 목소리 노출 없이 오직 AI로만 팔로워를 모으고 광고 수익을 내는 사람들의 실제 사례를 분석했습니다. '실행력'만 있으면 가능한 시대입니다.",
        "category": "MONEY"
    },
    {
        "rank": 3,
        "koTitle": "“친구보다 대화가 잘 통해요”... 2030이 사람 대신 AI와 연애하기 시작한 진짜 이유",
        "enTitle": "Why Gen Z is Choosing AI Companions Over Human Dating",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "AIMAG Insight",
        "sourceUrl": "#",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "충격적인 흐름! 단순한 챗봇을 넘어 감정을 교류하는 AI 캐릭터 서비스가 2030 사이에서 폭발하고 있습니다. 이게 과연 관계의 결핍일까요, 아니면 진화일까요? 우리의 미래 라이프스토리입니다.",
        "category": "LIFE TREND"
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
