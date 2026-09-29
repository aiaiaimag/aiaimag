/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-29
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "HP의 Future of Work Accelerator는 AI의 엔트리 레벨 Catch-22를 활용합니다.",
        "enTitle": "HP's Future of Work Accelerator Takes on AI's Entry-Level Catch-22",
        "date": "2026-09-29",
        "originalDate": "2026-09-28",
        "sourceName": "TechNewsWorld",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPZmxKQmpXNEpoaklMc1p1aDlDUlFlQXZ1Q285cEdIYS1GUVBaUGxrSVJKb0hvNkRmVUhvTzBwNGpUY29wWExWMmJqMF9hZG9pYkVWTXJBSlFQT3VPZ3F0cHRRVm1fWXhYSXZiUF9kV1dPVjZ3UGs3QzB3V0xxNFFwTWtoSm1jcVBTQ3c2cDZwZ0xtZVRDM0RCUXdHZXJJRUlDRWxDZEhsRFRTXzMyNEpnTm9n?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! HP의 Future of Work Accelerator는 AI의 엔트리 레벨 Catch-22를 활용합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Meta's Muse AI에 생산성 해킹을 요청했습니다. 이 7가지 독창적인 아이디어가 저를 가장 놀라게 했습니다.",
        "enTitle": "I asked Meta’s Muse AI for productivity hacks — these 7 unconventional ideas surprised me the most",
        "date": "2026-09-29",
        "originalDate": "2026-09-28",
        "sourceName": "Tom's Guide",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOcW5DeE1KTk5kYkRkRFdyYmlRbjRtUklFb19mRUVpSWJpNm03dVlqWXlYUWxXOGdNNzVpbjZ6LW9SSGVXMjJ2RlV2eGFSZjAzWkI4ZEoxVURlVGJSS2hzX1Q2NHBQZWFwNFhlaUVtTE1KRnBvZjVGeG56QXMybmZCM2ZaTjY5UGZQOWd5RFd1aXFOQm4xUV9mMjhIak43Z3ZZVVVZQ1p5TENBUThKR2Y3WXJtS0llSmR1Uldra2h0QXlnUQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Meta's Muse AI에 생산성 해킹을 요청했습니다. 이 7가지 독창적인 아이디어가 저를 가장 놀라게 했습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 일자리를 없애거나 새로운 일자리를 창출할까요? 아마도 둘 다일 것입니다.",
        "enTitle": "Will AI Eliminate Jobs or Create New Ones? Probably Both.",
        "date": "2026-09-29",
        "originalDate": "2026-09-25",
        "sourceName": "Yale Insights",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxObDBjR2xjMW0tM1dHMTRycUZXWHlLT2N4M3VxcTh3elFuXzNIeVVSQlluSm1HLXhsU3VOOTFsQTRGSE5BZ21rTTlUak5uQXkzYnNIS0QzaVhfRGtVQzJrWER6T2Q2X0VRVlJFWnBXQ2U2Z3V0d0RlaDVaampwN2RXT1d5alZha2RSd1BlNE1jMlo4Q2Q4YXR3a3RR?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 일자리를 없애거나 새로운 일자리를 창출할까요? 아마도 둘 다일 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT·클로드에 지갑 여는 한국…AI 시대 커지는 ‘SW 적자’",
        "enTitle": "챗GPT·클로드에 지갑 여는 한국…AI 시대 커지는 ‘SW 적자’",
        "date": "2026-09-29",
        "originalDate": "2026-09-28",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9qVllEMjdMM0RxeUkwdU1MMUJUbi1tTmZBSXdlbTJHbWR4UWNncjR3RkZIbGpUUDdPSng1cHRrTS10RDBfVmNsOFd6SVFLRXZPbFlUak9vXzMyV2JkaEdJZk5od0hZWDF6Y3JxaHNqXzdNa3RF0gF0QVVfeXFMT2pWWUQyN0wzRHF5STB1TUwxQlRuLW1OZkFJd2VtMkdtZHhRY2dyNHdGRkhsalRQN09KeDVwdGtNLXREMF9WY2w4V3pJUUtFdk9sWVRqT29fMzJXYmRoR0lmTmh3SFlYMXpjcnFoc2pfN01rdEU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드에 지갑 여는 한국…AI 시대 커지는 ‘SW 적자’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "중장년 재취업 돕는다…서류·면접부터 AI 취업 준비까지 ‘무료’",
        "enTitle": "중장년 재취업 돕는다…서류·면접부터 AI 취업 준비까지 ‘무료’",
        "date": "2026-09-29",
        "originalDate": "2026-09-28",
        "sourceName": "농민신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE50Z0VKdnNFdWhRQlJrcUlJa3ZJU2xhVzNLYlFqUzJLWWxWMk5jN01UaGZUZzJRMXZfZFVfeFh4bk16Q3Q1Rm1WeGhIbVI4enlJcGJ4ZzNxTGtKdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 중장년 재취업 돕는다…서류·면접부터 AI 취업 준비까지 ‘무료’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "“장소 추천부터 결제까지”… 네카오·통신사, ‘AI 에이전트’ 서비스 경쟁",
        "enTitle": "“장소 추천부터 결제까지”… 네카오·통신사, ‘AI 에이전트’ 서비스 경쟁",
        "date": "2026-09-29",
        "originalDate": "2026-09-28",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQeV9mQ1RLVk16bjFMNFBoWXozcEYyUUlnVEdnNUs5bGNaNmFoZGRJUmt6X2V4ZExUSFZ0MGhIMzN5Z19oSERBR3lzOTdrdEVDUksyRlY4UnFEUFpGR2c0R2phNlZGU2FmUGFRTG1NMFh2YTVvVGYtT0twMEVKRzliY2lHaw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “장소 추천부터 결제까지”… 네카오·통신사, ‘AI 에이전트’ 서비스 경쟁 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
