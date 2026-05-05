/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "2024년을 위한 최고의 인공지능 측면의 허슬 아이디어: 지금 시작할 수 있는 수익성 있는 온라인 비즈니스",
        "enTitle": "Top AI side hustle ideas for 2024: Profitable online businesses you can start now",
        "date": "2026-05-06",
        "originalDate": "2026-05-05",
        "sourceName": "MSN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxOMHNSbkk0SzZ0MW42M1dYTzI1NnYxc09Zc1NGRW5nQXJMX2g0SHR4SEpxX2FJOU5Wb3VjclJWbXdkZUJfMmtLVUpWT0RqTHM4a2dhRVpXQ0NZeFpRS2Fja3RjVmNoQmFPQmtuLXFzeTNKTEE0STFCZGNrWnMxWDZPczF1cnUzanJsM1ZnamthTHJQQWpCY29PelhiaHI2UGNaTG9iNUk2WFhWdlFodEtibzUzSHZJYmc5d19WTjVXb01JUU1BbGxaNGhnakpYZXNGaG9PcXFkeVR4TF9JN0pDTGxpMFdsSzkzM0lTYS11MlZsZDdHRkZr?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 2024년을 위한 최고의 인공지능 측면의 허슬 아이디어: 지금 시작할 수 있는 수익성 있는 온라인 비즈니스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "MAH Financial Services | 5/5/26",
        "enTitle": "MAH Financial Services | 5/5/26",
        "date": "2026-05-06",
        "originalDate": "2026-05-05",
        "sourceName": "ktnv.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9Xd29vTkhTengyanpCU2ZPYzUtWnF4QWxtM1FwSnpiTDlKSk5kZHo5SEhTd1RBcFhJTHRRQ2tnSjVNaVNoTTBfM044RGV6M25CdEdkWm9QUWwxYllNM3lONGZiNjdPSjMycUkzVFNoSHk?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! MAH Financial Services | 5/5/26 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "커리어가 시작되기 전에 AI로 인한 진정한 일자리 파괴가 일어나고 있습니다.",
        "enTitle": "The Real Job Destruction from AI Is Hitting Before Careers Can Start",
        "date": "2026-05-06",
        "originalDate": "2026-05-04",
        "sourceName": "Yale Insights",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOTnU2cm1ZUUc5ZjlNMFJ5OWl4Xzh4NzhfZ2l6cjNFUEJraDh5VTE3LWxnTmRzTGtKNjV3ejduaGQ3YWJRTUQzanRid0pDNThSamVidkUtdTJ2Z0NwTmFOTGRyTlJ0WlBOUGNJVFJ4RjFqejRTNEpuZEJscndvYnVYVkJ2elZLQ2p4YldhMjdOMHVPYVVyNUZXQi1QeEVzcTFpX1MzaFJjbVhiMms?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 커리어가 시작되기 전에 AI로 인한 진정한 일자리 파괴가 일어나고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[OpenAI, 기업·교육용 ‘ChatGPT iOS 앱’ 출시… 업무 현장 공식 도입 가속화] OpenAI가 기업과 교육 기관을 위한 전용 모바일 애플리케이션인 ‘마이크로소프트 인튠용 챗GPT를 출시했다.",
        "enTitle": "[OpenAI, 기업·교육용 ‘ChatGPT iOS 앱’ 출시… 업무 현장 공식 도입 가속화] OpenAI가 기업과 교육 기관을 위한 전용 모바일 애플리케이션인 ‘마이크로소프트 인튠용 챗GPT를 출시했다.",
        "date": "2026-05-06",
        "originalDate": "2026-05-05",
        "sourceName": "AI넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTE5Ha1RpQWtJUHlGZHNpdVB5aEhuVVdNa2R6OWN4MTFNRG1ZRmw4SE9wRzVBazhXbmdkSG05a3FFNzI?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [OpenAI, 기업·교육용 ‘ChatGPT iOS 앱’ 출시… 업무 현장 공식 도입 가속화] OpenAI가 기업과 교육 기관을 위한 전용 모바일 애플리케이션인 ‘마이크로소프트 인튠용 챗GPT를 출시했다. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "크리테오 주가, ChatGPT 광고 파트너십 확장으로 상승",
        "enTitle": "크리테오 주가, ChatGPT 광고 파트너십 확장으로 상승",
        "date": "2026-05-06",
        "originalDate": "2026-05-05",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5sa1hJQlJKcktvVjdoMFRkVi1JRnZHSzhfRVpEU3QwUjA0MlI1S0JXMUZqVGFaLU02ZmJUbG0xcDVPRXRObUhvWnNfVnhlcm1mbGY0V3F6VE12d2Y4M21qa3R2M09wRURISzdrdjZHTWJDSlNkaGRz?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 크리테오 주가, ChatGPT 광고 파트너십 확장으로 상승 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 수익화 실패, 데이터·워크플로 통합 부터 시작",
        "enTitle": "AI 수익화 실패, 데이터·워크플로 통합 부터 시작",
        "date": "2026-05-06",
        "originalDate": "2026-05-05",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFA2LU1NRjl6ZTBtR0NiR0VOSEpPejJvNm9jVndCM0M2RlpYSXhHSWZlZll2dUt4eWI4U2lHdkwtR1pSMEpUTVlyZWFKaTg1UkZWVm9IZThfZDhEdXZ1Wk1vWVRjY1FhamJJeXc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! AI 수익화 실패, 데이터·워크플로 통합 부터 시작 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
