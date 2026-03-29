/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-30
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI CEO는 일자리 시장에서 단 두 가지 유형의 사람들만 살아남을 것이라고 말합니다.",
        "enTitle": "AI CEO Says Only 2 Types of People Will Survive in Job Market",
        "date": "2026-03-30",
        "originalDate": "2026-03-28",
        "sourceName": "Newsweek",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOVE8zeXFvdWp3d2xGMmRFTFQyTFFET0ZXVWNiOHhudWhjNVdDTTlRdGg5Q2JoeUFScWZRSlhURFpULWs4YjJjWDZlbHNtb0pWVGlldUtNNVVCT0lBSGNTX0FUdmtIbHRFLXBYTlp4VUpxS1R4NzE3LS04NGxlQkhFZGNzMHhsQWpaZkg0aUptOC0xaWZ3?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI CEO는 일자리 시장에서 단 두 가지 유형의 사람들만 살아남을 것이라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Z세대는 졸업생 실업률이 올라감에 따라 취업 면접에서 AI를 사용하고 있습니다.",
        "enTitle": "Gen Z is using AI in job interviews as graduate unemployment climbs",
        "date": "2026-03-30",
        "originalDate": "2026-03-28",
        "sourceName": "The Next Web",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9zTy0tMF82QjBtNlRwN01id3poN2VuOTVRTzBrZHdqM01Qc3FOZ0tPRDRIeGVjbjQ1SzdzSFY3bTR1eExOblU1ekRLZUtQa0l3SkxjdHlqbHRmTkZnUnFBOXFlaW1rdWUtTXQ2NkxxamJxNE01TEFMRA?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대는 졸업생 실업률이 올라감에 따라 취업 면접에서 AI를 사용하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "이 미국인들은 AI가 일자리를 빼앗기 전에 그만두고 자신의 사업을 시작하고 있습니다: '나는 단지 통제하고 싶었다'",
        "enTitle": "These Americans are quitting before AI can take their jobs—and starting their own businesses: 'I just wanted to be in control'",
        "date": "2026-03-30",
        "originalDate": "2026-03-27",
        "sourceName": "CNBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSE9VeFFTcm9tQzV4bHpVLXpoNFR1RVItUDQwZFFmVXM5aTVqZE9WVHBDTHFheUo1ZlplSW83aHNQcU4yLWNzX1R1NFJfMWRuNW1RaVB0b2RYOFlRcUU2TWVDcHFISUdmbzFEemVBZ09vNlF4RWRkaTctdHNmS0tmSVZiSXhBd3QxLUxSN01LUTBOdmxRWHdRYkJkelDSAaIBQVVfeXFMT0JrX01GU0F1OEtxYzRkU2dRN1BlUjVfQVBlT1IxQldFbWVBR1JacVlmMTBlVHY3NnpXaDEteXpISHhmaEpBSEN4eVlpRjY1Qzh6WFdOVElYbWVTc3doUzdqQkFJdzV6TXNDaWNuQWw0Q0l1TElzbDdOMU52RUJwR3M3aTc3c3RzZ3dBZ1ZGT2pBUFAzaTRuYW90VTE5UF9ER2ZR?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 이 미국인들은 AI가 일자리를 빼앗기 전에 그만두고 자신의 사업을 시작하고 있습니다: '나는 단지 통제하고 싶었다' 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "지푸, 초저가 코딩 모델 'GLM-5.1' 출시…'클로드 오퍼스 4.6'에 근접",
        "enTitle": "지푸, 초저가 코딩 모델 'GLM-5.1' 출시…'클로드 오퍼스 4.6'에 근접",
        "date": "2026-03-30",
        "originalDate": "2026-03-29",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBSOW5OUkEyLURiWE5fa1JLWkpkZmJPV3c2dWxVX3hBZ0dnVDZSRUVOLWE4N1pZYXVNSERaZjhJQjBoTC16OV9PR1p2bU5YblFyRi0zNkZLQUtGVVhXT1RheEo5QUlqcFFPbFE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 지푸, 초저가 코딩 모델 'GLM-5.1' 출시…'클로드 오퍼스 4.6'에 근접 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "시흥시, AI 고용서비스 전담 창구 신설… 맞춤형 취업지원 강화",
        "enTitle": "시흥시, AI 고용서비스 전담 창구 신설… 맞춤형 취업지원 강화",
        "date": "2026-03-30",
        "originalDate": "2026-03-29",
        "sourceName": "천지일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFB4TTcyZzZobUFaU2x5LW5KekpSMmd4a3RYYlpWTU1fVmpaOVU0UUJNTHhUVnh5QUF6bUp5dUZuX2h4U2hNWmdYQ1cxZDFCck5QdHkwYmk2eUNQQjVKWW5NLTZnU0tDM3VlNHc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 시흥시, AI 고용서비스 전담 창구 신설… 맞춤형 취업지원 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "화장품신문 (Beautynury.com) :: 세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시",
        "enTitle": "화장품신문 (Beautynury.com) :: 세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시",
        "date": "2026-03-30",
        "originalDate": "2026-03-29",
        "sourceName": "뷰티누리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1WYjBER2diUFI3YnhXQ1BEZEEyMnE3ZG9TUTBYekx6RlhvZVBoTkhFY3JHOEowTVg4WjZGUTl0Rm5mSFhqdEhudGJHZWZGNkRDa29feXc2OThfSW1hMmNv?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 화장품신문 (Beautynury.com) :: 세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
