/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-31
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Google의 검색 수익 페라리가 AI 기반 스피드 범프를 달성했습니다.",
        "enTitle": "Google's search revenue Ferrari hits an AI-powered speed bump",
        "date": "2026-10-31",
        "originalDate": "2026-10-30",
        "sourceName": "The Register",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd2k5LWxkdDNGZXMzZnZqZVdmTWNNWG1oSWdENXpDYzVOM2lmNHdRUEFUazNlVTJHTjZyLTVCR3EwbUlDcVdvN2ZBWGN5M0RoNjFPMFFOdkYwYk5Ca1h2bXJnUFNtbkZOaDg5S2RaZDdKZ1Rqa05sTTdubWtaenZ4bXVtdXFxS0c5T1ZSc0FBM2E5NVNXSTZpTnpXamNvYnZaSnlRZlc3V255WEJrVjY5dnZaMTlWU2Mx?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Google의 검색 수익 페라리가 AI 기반 스피드 범프를 달성했습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "최고의 미래 2027년 기조 연설자 # 1 스콧 스타인버그",
        "enTitle": "Best Future of Work Keynote Speakers 2027 #1 Scott Steinberg",
        "date": "2026-10-31",
        "originalDate": "2026-10-30",
        "sourceName": "https://www.futuristsspeakers.com/",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOM1A5M1lLT0k4ZjlKQ1pBY0V6VW1Ub1BiZjRURy1GS0NoUFNaclBnRUhpUmVSQVZZM1ZBUktJb0ZkLS1HNUlxOC1OY2thMjhtRmlzakd4M1ptTDRhTG8yYWpXaHMwX0ZQX2NLMlI3Ukd0N1hXUHE0VGtSTFBZZ2U0UUJB?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 최고의 미래 2027년 기조 연설자 # 1 스콧 스타인버그 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "영국 기술 직무 계획: 200,000 목표, 800,000 추정 생략 AI 효과",
        "enTitle": "UK Tech Jobs Plan: 200,000 Goal, 800,000 Estimate Omits AI Effects",
        "date": "2026-10-31",
        "originalDate": "2026-10-30",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxObFdRTFphTVRvT2VvOXl1Wl9pNFBvcFRySS1sdldxWTJLN01fOW44ZE5XVkh1NmpmTDM4aTlWNnRGVmJVUDFXV3RJZmtUVmNlMU03c2M3TU9wR2VBOThRU1RDNVU2UHhEaElacWhjNWUza1ktM3JnVEUzTnEyLXRZLTFXWjJrZzlaR0d6TEVGWnF6Qm1QdkdXOEQ4Q210Szg?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 영국 기술 직무 계획: 200,000 목표, 800,000 추정 생략 AI 효과 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[재정 골든타임] ④ 청년 취업 47개월째 감소…AI 충격 겹쳐 미래 재정 경고등",
        "enTitle": "[재정 골든타임] ④ 청년 취업 47개월째 감소…AI 충격 겹쳐 미래 재정 경고등",
        "date": "2026-10-31",
        "originalDate": "2026-10-30",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9JTWpPOG9UNUdTMnRSMDhrX2J5bUkzd1lHc0cwdHpGVmFwNUEwdFJfNm93QWVBVk1LbnBPejlURXVWTi1LWnh0ODZXa1NNTVBfNGZ3R3lybUVEd01z?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [재정 골든타임] ④ 청년 취업 47개월째 감소…AI 충격 겹쳐 미래 재정 경고등 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "Spotify, 2027년 초 AI 기반 리믹스 서비스 출시 추진 - FT",
        "enTitle": "Spotify, 2027년 초 AI 기반 리믹스 서비스 출시 추진 - FT",
        "date": "2026-10-31",
        "originalDate": "2026-10-30",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5lRGpEQTk3dUczVlhPckRRWElCRWtWRkJHTTI5dDN0Q2VfSkcyTThHZW1mSEstaU9JdG5TRThQaXplM3F0QjNuVkR4VmFocmVWSE5ocWpNYWtHc0Vna05LT1pTLXdNTHJHazFLMnplQzFBd2NYWFE4?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! Spotify, 2027년 초 AI 기반 리믹스 서비스 출시 추진 - FT 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "표앤컴퍼니, 생성형 AI 재무분석 서비스 ‘GAIFAS’ 출시",
        "enTitle": "표앤컴퍼니, 생성형 AI 재무분석 서비스 ‘GAIFAS’ 출시",
        "date": "2026-10-31",
        "originalDate": "2026-10-30",
        "sourceName": "공감신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5SdkJXcWR4bzlyQUFGM3lCRjlFak42Y1V6c2YyZHpMT3lXb3ZQUm5jTmYxUU9lcFI3bm1Ba0lfSzRwYjZ6RWVFbjdzSUZuWXN0TVhJM19KTEdDMG1sYkQ4enVkaWRRV2tR?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 표앤컴퍼니, 생성형 AI 재무분석 서비스 ‘GAIFAS’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
