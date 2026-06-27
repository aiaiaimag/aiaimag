/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일의 미래는 AI에 관한 것이 아닙니다. 우리에 관한 것입니다.",
        "enTitle": "The Future Of Work Isn’t About AI. It’s About Us.",
        "date": "2026-06-28",
        "originalDate": "2026-06-26",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQTDNxMDZPUzRiRTJtQndBZVZiNm1pS1Fad1dNMTBfQ2FmU1FuM3B6RV9UNDljU1Y5dDZ4VlpPRWxsekJibWJ2YkpfbHRuOXdqZXlWS0pKT2hpdG16QVJqTjFLV3JXT0U2U1huZlVkM2dnczh6S184UDFGR21RRjFEU0J0NGtNRVJUVUk2bGktMUpkeWloWm83TnRCT21xQlk0VWNwVQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래는 AI에 관한 것이 아닙니다. 우리에 관한 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능의 제국: 지식의 한계와 직업의 미래 예측",
        "enTitle": "AI’s Empire: The Limits Of Knowledge, And Predicting The Job Future",
        "date": "2026-06-28",
        "originalDate": "2026-06-26",
        "sourceName": "CityWatch LA",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOQWlldGoyOW9EZTAzN00wNHZrdmw2Qy1fUnU2WXkxMmhmbmFWRDZ2XzB1Ym5Dc3hLcmhKa0M2QTY2TzRqNDczT2cwWTRnWkNGRW1aT3l2b3IwY2VOcXZhblVxS1hldlg1Z3BvaWdERUJGbmZTZzJlRDNsUW8wV0xBZkdHN3BBVXg1SGRYNFpYMmExZ3JWSUNyWDRjbGdPUUZRdGJ5SnIwZjJZSkRZVnNnUG1CSkY?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능의 제국: 지식의 한계와 직업의 미래 예측 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인도의 QS 도약은 더 큰 의문을 불러일으킵니다. 우리의 일자리는 미래 준비가 되어 있습니까?",
        "enTitle": "India's QS leap raises a bigger question: Are our jobs future-ready?",
        "date": "2026-06-28",
        "originalDate": "2026-06-26",
        "sourceName": "India Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPVVlXME5FZVRfUVpZSHNUNEJTYlBqS2RMbGhGTG1yMW1ra2ZXU3hFbjlxVHpfei1ZUFpYSjBVcGpnRmtqcnBOX1VjOHBJMFJxUHdqRUJYbjlXR1JEUm81V0hEUDM1NExlWDlfSzdPVzZDQkdvVGVzME44VjF3T2VMSmFBQXFDSTRUNVRUcnkxWl84THdTdTNSYXpwMzdGdEp0NllmVEFSQWRUY0dqV2NhSHJ6YkMxamlfX3VpQVVIcV9pX2pWNlRLQk8wQVMxUFZIN1VmWXR6UXVYSnBwbHlHbkQyTmVMX3fSAewBQVVfeXFMT1FOU3FlRTg2YjR6RHk4T2N3LWV0RVBQcW9pejFyRXNvNU5JTk0wTTI3LTl2bUpndmRMQUxpd3ZyOVd3T0pPOHJocnY2cGtYOHlTN0xSVzlyZFg0SHhFVW04UGd0VndQdC1CQTR2N0d4VmtDU0VRSHlCbGVqTnpydlN1VHFLVzRDV1J2ckxxektnVFZ2Ui1kUGRCVHJfd1l5RE91ZDlDaWdqUzdVckZIUWswR2kwS3hkbkNQVzVhN2FpRmJRbHJ6ZGdaYmhKbFF3ZUhYS1ZfWU9INEFIX2V3dHQwbjdTTFIzTjNVV1M?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인도의 QS 도약은 더 큰 의문을 불러일으킵니다. 우리의 일자리는 미래 준비가 되어 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "美 MBA 초봉 하락…AI에 취업문도 좁아졌다",
        "enTitle": "美 MBA 초봉 하락…AI에 취업문도 좁아졌다",
        "date": "2026-06-28",
        "originalDate": "2026-06-27",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNNFFrd1NSLW1PLTJyaGI2RE1hVmdLVmVYeUpYWTVyUllqQ2dDaEZyVUZxZHBlTkZsd2wxd0tzRzZ6MGh5Z3UtWGxjRjdWbmlMSG9XN21rdnhxdlotZHE5QkM5R0RFb01vbi1uV2JweDk4ZWx3bzQwb3dLN19sb1l5UzRwejBINkxx?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 美 MBA 초봉 하락…AI에 취업문도 좁아졌다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "제미나이 3.5 플래시에 '컴퓨터 유즈' 내장…화면 조작·검색·지도 한 번에",
        "enTitle": "제미나이 3.5 플래시에 '컴퓨터 유즈' 내장…화면 조작·검색·지도 한 번에",
        "date": "2026-06-28",
        "originalDate": "2026-06-27",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBVM294Q2ZnZHJzWGJCVklKbUQ3ZU9EekZFeTdwUGI3WkkxVkI0QUdueGVCR3JqV3NWVFlHWXJtWkxGNlVRQ0FPSGVOdVQ0aDQ4OG9TWnln?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 3.5 플래시에 '컴퓨터 유즈' 내장…화면 조작·검색·지도 한 번에 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI에 “돈 어떻게 벌어?”…회사 다니기 싫은 美 MZ가 빠진 ‘자동수익’ 정체[나우,어스]",
        "enTitle": "AI에 “돈 어떻게 벌어?”…회사 다니기 싫은 美 MZ가 빠진 ‘자동수익’ 정체[나우,어스]",
        "date": "2026-06-28",
        "originalDate": "2026-06-27",
        "sourceName": "헤럴드경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1DdGlDMVFvN2k1dEdCVWE0SUpRbTVnd3FNc3VKbVhOZUdpVUw4aUVMTGd0c1Y3Uk1GeWptcmU5MTJ1THdLU044MFF0SGFxeWxjc3BRcUxR?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! AI에 “돈 어떻게 벌어?”…회사 다니기 싫은 美 MZ가 빠진 ‘자동수익’ 정체[나우,어스] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
