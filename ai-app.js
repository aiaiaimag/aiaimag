/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI가 첫 직장을 바꾸고 있습니다. 청년 고용이 모든 기업의 의제에 포함되어야 하는 이유",
        "enTitle": "AI Is Changing the First Job: Why Youth Employment Belongs on Every Business Agenda",
        "date": "2026-11-26",
        "originalDate": "2026-11-25",
        "sourceName": "SAP News Center",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOWkZ0YV9EOUdsbVZyMnItbGRTMy02bGNlM2FxSm9zb3BDT0lWSnBUdWpuYzZlb1VTNUhuX2VwQUY2MUlZSjdLeXFEcmNOUFdyREE4c3lncXM4NEpReVEtZ2ZYQVN2SXZMeHNqektlLVBLbXVGYWh2aDd6SmhuMTZqeTZmd2duSFRQSHo5RA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 첫 직장을 바꾸고 있습니다. 청년 고용이 모든 기업의 의제에 포함되어야 하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI는 어디에나 있지만, 생산성 향상은 어디에 있나요?",
        "enTitle": "AI Is Everywhere, but Where Are the Productivity Gains?",
        "date": "2026-11-26",
        "originalDate": "2026-11-25",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNMUJYNEJDc2tPMDRSR2hkdmpxT2tNeW9WOERtR01BN3poaVpfa2dha2xwZk95RkF4bGZsMTNkaGRHNXBhT2MwQTFPb2dqQzNZVnVuV09Fcy0yMUxNYndLV2s5RDQ5cF9jeW44cmFiZllyRFJ2VV96SXJzQ2k1eWQ0ZWFn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 어디에나 있지만, 생산성 향상은 어디에 있나요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "9시부터 5시까지의 근무 형태는 사라지고 있는가? 전문가가 경고하는 바에 따르면, AI가 UAE 근로자의 임금 지급 방식을 바꿀 수 있다고 합니다.",
        "enTitle": "Is the 9-to-5 job dying? AI could change how UAE workers are paid, expert warns",
        "date": "2026-11-26",
        "originalDate": "2026-11-26",
        "sourceName": "Khaleej Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNalBaZ0tEdW1qVmVlMWxfOWl2eXVSb2VUSzNUeXhZdTlHc0sxLVdZaVEzbUtjM1gtZXZDRmdjQ1BIOWhYb0pWYm5DQmx0X1U3VXdkWFg4NFdSMEpvazlmRTM1V0k1UmRHZDdfa2tLNXRHU1FwTXRlb1hmbUhORV9zNEdaSHFwcXlfb0FF0gGTAUFVX3lxTE4wblBEbkozdVQybDlKdjhOVENiMFhMaE9FVUJXaHRzdVQxLVFBVUJWWkNEZVVXd3FnRWNVbzlPNVhocTVwTjVZX21kT0dNNE1OQXdENGpzRERxRHpVV3h6Tl9ST2JEeHk4R1RSbWlYQ3BDMFZGTm1tU3FxaXVCQWp1NUZaTFQ0RmZxc29qM3N3R3lsWQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 9시부터 5시까지의 근무 형태는 사라지고 있는가? 전문가가 경고하는 바에 따르면, AI가 UAE 근로자의 임금 지급 방식을 바꿀 수 있다고 합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "바이브컴퍼니, 썸트렌드·모바일인덱스 MCP 결합 TREND CROSS 2026 발표",
        "enTitle": "바이브컴퍼니, 썸트렌드·모바일인덱스 MCP 결합 TREND CROSS 2026 발표",
        "date": "2026-11-26",
        "originalDate": "2026-11-25",
        "sourceName": "헬로티",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5lRzlTS2szOHM3Q3RJX2wyWHM1TjhqMHRLdk8zVzZaWGtMSzY4RUJBMGFnSmljNjg2b1VZNjRuT21NMTJZUl9yenJrQUVsbGMweEpoVVN2SHdCdlhaS0lr?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 바이브컴퍼니, 썸트렌드·모바일인덱스 MCP 결합 TREND CROSS 2026 발표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "일반 구독형 챗GPT·제미나이에 의료데이터 활용 못한다",
        "enTitle": "일반 구독형 챗GPT·제미나이에 의료데이터 활용 못한다",
        "date": "2026-11-26",
        "originalDate": "2026-11-26",
        "sourceName": "히트뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE10NUpnUEpsSERRdW9lZ1N0N2lxbDg1MUR3VWh1Wk4tcGtLX0hhWkw2Yl9DUnpoalV6VXEyYkZGcGFvdl9sYUpJUVJYUUJKZ0trM2YxYWF5REFCVnBTMVFXczlqME9ReW51dkgw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 일반 구독형 챗GPT·제미나이에 의료데이터 활용 못한다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "부동산플래닛, 대화형 지도 탐색·분석 서비스 출시",
        "enTitle": "부동산플래닛, 대화형 지도 탐색·분석 서비스 출시",
        "date": "2026-11-26",
        "originalDate": "2026-11-26",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE00VG94em40S2ZvbGc3MkxvN2NOT0p4MS1uWUI4ZkRmcm5WeVNNUVZXbC1HTzRoYjZzNGYtQ2M2UEQ5WFpNcVk2WG9lRnJDLW1KTllpZnRTVUo0NUXSAWBBVV95cUxNaklFYlpsaG11OXRTdXBlUkttS0hVR0xuVmVvcTRRVkw1dGhMcmVxY2dSaTJVY2dMdzZVajVSaV9FLTBmdjh3OVZkSWVaNW1TSHRZU0lMRGNYR1U1eURjNUs?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 부동산플래닛, 대화형 지도 탐색·분석 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
