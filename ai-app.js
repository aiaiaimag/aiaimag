/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-31
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Z세대는 졸업생 실업률이 올라감에 따라 취업 면접에서 AI를 사용하고 있습니다.",
        "enTitle": "Gen Z is using AI in job interviews as graduate unemployment climbs",
        "date": "2026-03-31",
        "originalDate": "2026-03-28",
        "sourceName": "The Next Web",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9zTy0tMF82QjBtNlRwN01id3poN2VuOTVRTzBrZHdqM01Qc3FOZ0tPRDRIeGVjbjQ1SzdzSFY3bTR1eExOblU1ekRLZUtQa0l3SkxjdHlqbHRmTkZnUnFBOXFlaW1rdWUtTXQ2NkxxamJxNE01TEFMRA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대는 졸업생 실업률이 올라감에 따라 취업 면접에서 AI를 사용하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 선구자 요슈아 벤지오 (Yoshua Bengio) 는 AI가 모든 일자리를 없애는 것은 '시간 문제' 라고 말합니다.",
        "enTitle": "AI pioneer Yoshua Bengio says it's 'only a matter of time' before AI wipes out every job",
        "date": "2026-03-31",
        "originalDate": "2026-03-26",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNLUNYNTRsN2ZRWDA3MmtMT1o1NVVqLWRSZTd5Z0tGMThnZ09XTTBITTR6NW1hZVVOVy0tUi1iR2pBWkNEQTY5Vzk3VjhWeFZkeC1Gd2NINGFGTHJKQlRWV0RYZC01Uk9yVEhiZ1c3U0ktZkdoMUdOaGVHRVAycjd2bnBYb01IRU5TRldNVHpwdzdkdjZYT3c?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 선구자 요슈아 벤지오 (Yoshua Bengio) 는 AI가 모든 일자리를 없애는 것은 '시간 문제' 라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "아이디어에서 더 빠르게 실행할 수 있는 Windows 최고의 생산성 앱",
        "enTitle": "Best productivity apps in Windows to go from idea to done faster",
        "date": "2026-03-31",
        "originalDate": "2026-03-25",
        "sourceName": "Microsoft",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNc1hnaURNdXZhTVBPcUZCLWFjZ2FqWW5zdm1LTWZ6WDExclJjMkh4S0FXQmEyVjFGbTBZNXdlcXpnREc0YjhoWUtpM1hyNTBiTmo3NHo4N1pZV3lwZ21YNnJGazk4QnU5NDlacmRNVll1V3JCQ201TTdPZ2RRc1cxN0V4bVdhbkg5Yk5YRVVKeUZwa2s?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 아이디어에서 더 빠르게 실행할 수 있는 Windows 최고의 생산성 앱 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT와 클로드를 동시에?...MS, 업무용 에이전트서 한꺼번에 쓴다",
        "enTitle": "챗GPT와 클로드를 동시에?...MS, 업무용 에이전트서 한꺼번에 쓴다",
        "date": "2026-03-31",
        "originalDate": "2026-03-30",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE16emppWVg4UVNfdUJHWHRKY3c2M21Hclk2dEpmbW01eDVGZV9sb19YY2dDb2pCMlJqaHJIOFNfREV0RUM3SWN5cW03NFMzbG8?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT와 클로드를 동시에?...MS, 업무용 에이전트서 한꺼번에 쓴다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "고용24 ‘인공지능(AI) 기반 인재추천’ 서비스 개선",
        "enTitle": "고용24 ‘인공지능(AI) 기반 인재추천’ 서비스 개선",
        "date": "2026-03-31",
        "originalDate": "2026-03-30",
        "sourceName": "환경일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9ORjBQZWdON3pMMnhqQ2djdzczUDFTeGNlSlpRSk5URXlsOFZidjh0OXZlMU50aHhvS1ZVWWJLd1ZORUJEZHBtOF8weE9ONEVlSkgzLVZXM08wSTRKT2ItaWtKcnNobFAy?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 고용24 ‘인공지능(AI) 기반 인재추천’ 서비스 개선 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "시흥시, ‘AI 고용서비스 전담 창구’ 신설… 중장년층 취업 문턱 낮춘다",
        "enTitle": "시흥시, ‘AI 고용서비스 전담 창구’ 신설… 중장년층 취업 문턱 낮춘다",
        "date": "2026-03-31",
        "originalDate": "2026-03-30",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1QN3dMRW0yalZ5VDE0TV9vN0hYTEhuV2ZFNm1ucHVxbHZ3Vk04T3hxWHpEWmNuYnREd3pBYUZESHFCSDZlYW5wY2EwdDdLN1E?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 시흥시, ‘AI 고용서비스 전담 창구’ 신설… 중장년층 취업 문턱 낮춘다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
