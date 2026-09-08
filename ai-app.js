/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Top AI Tools for Productivity Hacks to Work Smarter",
        "enTitle": "Top AI Tools for Productivity Hacks to Work Smarter",
        "date": "2026-09-08",
        "originalDate": "2026-09-07",
        "sourceName": "KTPL Blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNV0x3TUkydERlaTdKeENPLUd3T0RtQ29ITVd1NFZsUEMtRElSVmFaUF9RdTlQREdUYXFZcnRJTjZZcmNEY3dMSEJPdHZnc1hhcUg0RldCWlJLTkRXb2hRd3Q3Ync5YVRHQ3RqVU5yRXdVdWhUZHc2T2haU1YzeVR2VXVLZ0hXNXNs?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Top AI Tools for Productivity Hacks to Work Smarter 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Exclusive: Coursera, Microsoft and Steve Hanke on the Future of Jobs — AI Could Be a ‘Net Job Creator’",
        "enTitle": "Exclusive: Coursera, Microsoft and Steve Hanke on the Future of Jobs — AI Could Be a ‘Net Job Creator’",
        "date": "2026-09-08",
        "originalDate": "2026-09-07",
        "sourceName": "Benzinga",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxOcVVEYlc5aG1vSHd6bkNhTGh1Q0xYRVBFT1BWanJKdy14cDkyVmozM29TdS1feW8wYmRMQjFock9GN3gxVndFR3FIX3Z2cjFQZU1VU3Q0cE5lNHBwNUx6bHMzSktxenppdE5DUHJpd0tVSTNmMm5jLXdJVEJmVzA2UkhMTzg5cTltUGMzclRyUlM0VXh5NGQ4SnRYSjh4WTlCeDZWakh1WlRqMUU1QXVhMjZWbEp5WFN5Z0pwbWJveGlOSDk4MkM5R24xVVRRUVF1b2FSX0trY0t4b0paUDU5SGZZaw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Exclusive: Coursera, Microsoft and Steve Hanke on the Future of Jobs — AI Could Be a ‘Net Job Creator’ 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI Job-Loss Fear Doubled as Saving Expectations Weakened",
        "enTitle": "AI Job-Loss Fear Doubled as Saving Expectations Weakened",
        "date": "2026-09-08",
        "originalDate": "2026-09-07",
        "sourceName": "quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNdmhhMHBXUXo4bUVLMGc4ZkZWTXV3OG4tNTF2by15SW5uaTQ5eDhEc2Nhck9ZSXJPT3FJa1ZfNzRKTXVFTzVlN1JVOG1wcmRHRnhOUXRwT25WYzE2YTlRTFZGRm1Sc1pvbEJvaDBpdV9ZQmQwVzhxYnBzeWdqeHBkcXVQNmdTN09GWnlCWlNtZDJJYnpBTVFr?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI Job-Loss Fear Doubled as Saving Expectations Weakened 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“S&P500 이겨줘” 말만 했다…31% 수익 낸 클로드 투자법",
        "enTitle": "“S&P500 이겨줘” 말만 했다…31% 수익 낸 클로드 투자법",
        "date": "2026-09-08",
        "originalDate": "2026-09-07",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE0zZnoyNnItZEF4Skwxdkd1bmJZMEIwQUV0cHFfeVlYQXRONjFXN0wzeXVtaWVhT08weXNKQjhfSVBDcVluNTMtelhnS244REZGWm5xR3V3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “S&P500 이겨줘” 말만 했다…31% 수익 낸 클로드 투자법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "中, 보이스피싱 잡는 AI 앱 출시…사기 수법·대응법까지 안내",
        "enTitle": "中, 보이스피싱 잡는 AI 앱 출시…사기 수법·대응법까지 안내",
        "date": "2026-09-08",
        "originalDate": "2026-09-07",
        "sourceName": "문화일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9vUlRjOUxsb0VseEJaOXktQVQzRk5CSjZLTGpfMGJLejAxN0s3eFhhLWFIUC1iUk9rdWlwV2V3eVlPUDhMVEZjTV81MUJ4TU53?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 中, 보이스피싱 잡는 AI 앱 출시…사기 수법·대응법까지 안내 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "카카오, 모델 경쟁 넘어 '생활 속 AI'로…연결 경험 살린 서비스 청사진 10월 공개",
        "enTitle": "카카오, 모델 경쟁 넘어 '생활 속 AI'로…연결 경험 살린 서비스 청사진 10월 공개",
        "date": "2026-09-08",
        "originalDate": "2026-09-07",
        "sourceName": "서울이코노미뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5yQ3R5VzlqekRDYXpRTzlDSjUtRURxYjZhR2JIZW9xNDV0ZnphUGFzV3hZb1VkME1qT0VEU05GOW1qQTQwUFhqODdBMnZIOGQ3bmRya2U5UG8zYlE3X1Y3YkdpUHBUam11R2x4ZzdR?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 카카오, 모델 경쟁 넘어 '생활 속 AI'로…연결 경험 살린 서비스 청사진 10월 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
