/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Autodesk는 물리적 세계를 설계하고 만드는 AI 작업을 위해 차세대를 준비시키기 위해 3억 5천만 달러 ($) 를 투입합니다.",
        "enTitle": "Autodesk commits $350 million to prepare the next generation for the AI jobs that design and make the physical world",
        "date": "2026-06-23",
        "originalDate": "2026-06-22",
        "sourceName": "Autodesk News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOYWxiblZIUGl4M0ZYWEhsdTJib0dJdzJKd0RRT3NWZ2dCN3NublV3UHhvVHY1OE5heFRIT3o5M1lzQmVKWjc3U0FFcmlndGZvRmptX0tjTk9yS2FXNW1QQ1N2MUpZbkYtbElWZm1wX3RTeTBMNjhtNWpVdjBPOF9qcG1Wc1R2VWozVC1iaTd1RUNHUQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! Autodesk는 물리적 세계를 설계하고 만드는 AI 작업을 위해 차세대를 준비시키기 위해 3억 5천만 달러 ($) 를 투입합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "업무의 미래는 어떻게 될까요? 인간과 AI의 역할 정의",
        "enTitle": "What is the future of work? Defining roles for humans and AI",
        "date": "2026-06-23",
        "originalDate": "2026-06-22",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNT1Bzc2hVWGVKXzNRamNfTWdZZ1lBM3plSk5VcnBzcGFZZUp2SEFRZlEtX3Aybi1FNnh4R3VxSDRZaW9RZEcta284STBrVEJTS09mM3BwZV9QZFlRV2lRN3ZpejV0M3kzRFVsX19abm9mZ0s3UGc1VXE3Wi1sclFuODVXdEw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 미래는 어떻게 될까요? 인간과 AI의 역할 정의 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "애널리스트에게 질문하십시오: AI 현실에 대비한 초기 경력 파이프라인을 구축할 때 HR 리더는 무엇을 우선시해야 합니까?",
        "enTitle": "Ask the Analyst: What must HR leaders prioritize when building an early career pipeline ready for the AI reality?",
        "date": "2026-06-23",
        "originalDate": "2026-06-22",
        "sourceName": "unleash.ai",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxOWDlpLUVsamxiNHEtdnBURDRPdkZ1d1ExZWZidVltby1YY2gtZHRxb2UzUXFTenZHR3lYTExsUVc1TlR5QW9UREV6UUZQZ19JdXFjVnlPSVh1TjBxYkoxVEs1ektSWFIweWZoc1puOU1YODY3MWI2T1FqMmJKcTh6NlZYNkxNWFUwQkFkX0tJWWFvcGxCbW03enQ2eXdXM09fUkdwS2xVZlJTcGtNQllYbXdiODBUM3VvbVNpT29LalRnVDE2Sklqams5WGZDZkFwekxpdzdaY0pvWWlGRE42UFU4ZjUxZl9iUEdINU92aEd0NjQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 애널리스트에게 질문하십시오: AI 현실에 대비한 초기 경력 파이프라인을 구축할 때 HR 리더는 무엇을 우선시해야 합니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "IBM, 시간외 3% 강세…오픈AI와 새 보안 서비스 출시",
        "enTitle": "IBM, 시간외 3% 강세…오픈AI와 새 보안 서비스 출시",
        "date": "2026-06-23",
        "originalDate": "2026-06-22",
        "sourceName": "마켓인",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1UTFpyTGo0TDczVnFuNXVrazB5WjlZdG9XRG8yMFg4Y01oRzhGOXlnWnFzN0lKUjZjZ1ZVU21qblpaYXFSN2xVbmxHcUFfUExnXzlTeV9Fam96cG16RFREYmxxdlFyLWFrZDQ5VUhVaVpCQTQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! IBM, 시간외 3% 강세…오픈AI와 새 보안 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "스마트관광 앱 ‘인천e지’, AI 여행비서 서비스 정식 출시",
        "enTitle": "스마트관광 앱 ‘인천e지’, AI 여행비서 서비스 정식 출시",
        "date": "2026-06-23",
        "originalDate": "2026-06-22",
        "sourceName": "우리일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBmd1Z3bVNod29Vb09RandhbVVnb0hlV2paMDA2eDQ4SUJ2X293elB3cWhsRHlaNFV6YWlwYmFZbnVRUWdUY0NnTE9FaHhQaEU0Qm1RQXk5OWtNUjA3Z1dkdnRKMA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 스마트관광 앱 ‘인천e지’, AI 여행비서 서비스 정식 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽, 클로드AI·클로드코드 서비스 ‘부분 중단’…모델 오류율 급증",
        "enTitle": "앤트로픽, 클로드AI·클로드코드 서비스 ‘부분 중단’…모델 오류율 급증",
        "date": "2026-06-23",
        "originalDate": "2026-06-22",
        "sourceName": "디지털데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBJTDF6MktaR290LUd3aDhnSG5zMzVMM0poNzA3RVBFTHB6UEwwMmk0U3FOTXZNaEFaVUw2LUhHMVdsMmNuRXV5a2VSN1ItMnBMN2FKUjlLNDhFR1hPVG1kNU90TVk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 클로드AI·클로드코드 서비스 ‘부분 중단’…모델 오류율 급증 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
