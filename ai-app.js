/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일자리가 바뀔 것입니다. ”라고 머스크는 말합니다. AI가 업무를 대체하기 전에 업무를 전환할 수 있음",
        "enTitle": "Jobs Will Change,” Musk Says. AI Could Transform the Work Before It Replaces the Job",
        "date": "2026-11-06",
        "originalDate": "2026-11-05",
        "sourceName": "PW",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNNkNvNkRmaGoxaGktLV9GcGJZb2J4YWVyWDNpa0NOUHM1VE9Kb1dNa0F5M3lDem4tcFpOQjVncGdDdm5aa2E3TkV1dlJpRzU4N0NIM1FkQ1FfSW5QZTdaN0FOSVRBemRhVE1yMjZ6SkJjUmJtLUVVbmJweWpzVUw5dXZTbW5DQm9oallNZlNFVzBfQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 일자리가 바뀔 것입니다. ”라고 머스크는 말합니다. AI가 업무를 대체하기 전에 업무를 전환할 수 있음 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "디즈니 정리 해고가 직업의 미래에 대해 알려주는 것",
        "enTitle": "What Disney Layoffs Tell Us About the Future of Jobs",
        "date": "2026-11-06",
        "originalDate": "2026-11-04",
        "sourceName": "Newsweek",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9yc3d3N1VKU3FicmtTa2ZPTVBTS05qa2UxbmpmWnhoWXFQNkNyLU9HS0NWcTNUeWNFX25yVld4SmN2RjJtWV9XZkFUdFp1U0JSX1k2eW9BUmdublNRVmRTYzVoS3NBSDAyWk5pQzh2czQ2U2hMMGx5c0FZR2ZVQQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 디즈니 정리 해고가 직업의 미래에 대해 알려주는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI와 일의 미래: AI가 일자리를 없애기보다 바꿀 가능성이 높은 이유",
        "enTitle": "AI and the Future of Work: Why AI is More Likely to Change Jobs Than Eliminate Them",
        "date": "2026-11-06",
        "originalDate": "2026-11-04",
        "sourceName": "TD Stories",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOajRSTnY3TWhFMEVwSE1TVG5Oa1E3ZjJUT0dXUThSb3VpNVJDcnNsT3Y0bFdkQ3FZcVZPbjYxN3hvZ3F6Q19YUWhJWGJGUzlOYXZoTmJzOG9EV3llLXRPSHBhSXhqYjZEazZwLUJNc0JkM2FEQmlMNDNwSXREY18ydDI3RUhZSmJCcHBvTl9FZF8xNW1mdkIzRzRKMGszczJmTXBEOWtVTGc0ekhQMEVCdVBQTUdNVkxoSVU0?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 일의 미래: AI가 일자리를 없애기보다 바꿀 가능성이 높은 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "내게 맞는 채용공고 정리·기업별로 자기소개서 작성… “내 취업, AI가 해줍니다”[창간 35주년 특집]",
        "enTitle": "내게 맞는 채용공고 정리·기업별로 자기소개서 작성… “내 취업, AI가 해줍니다”[창간 35주년 특집]",
        "date": "2026-11-06",
        "originalDate": "2026-11-06",
        "sourceName": "문화일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE0tY0pfU1o1RlRGdXROVm8wZXVtZUY4MnVoek5hYjh5XzJacmY4Rk8tbWtDNklEVnAyUnlXWHo1OVpNallGNnlsZDBTQlBEcVQ1?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 내게 맞는 채용공고 정리·기업별로 자기소개서 작성… “내 취업, AI가 해줍니다”[창간 35주년 특집] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "카카오, 연내 AI 서비스 3종 출시",
        "enTitle": "카카오, 연내 AI 서비스 3종 출시",
        "date": "2026-11-06",
        "originalDate": "2026-11-05",
        "sourceName": "세계일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9FN240TWFydW9LOHg5Q1VSS0tleXMwMXpDa3VhNW1ld2E5RmdrcXdvZllZb05LcTBIOUpSdWRnNnJvcTl4T0pCWVZzY0pGbm1mQmJ3S2RaMUxkeFd1N0hmZTRLLTNzbzBvMklJ0gFUQVVfeXFMTUVTWFJ2US01VFRpbnpsd3E2RUlENE9HWXdCN3NIelNHXzJmbDB3M0FRaGlrYXp6WXA4dU9GLTI2dHFXRHEzY2Vsd1BmVWNqXzNiTlBC?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 카카오, 연내 AI 서비스 3종 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "영풍문고, AI 도서추천 서비스 출시…매장 판매량 반영",
        "enTitle": "영풍문고, AI 도서추천 서비스 출시…매장 판매량 반영",
        "date": "2026-11-06",
        "originalDate": "2026-11-06",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4zLXlMc0FBTDh6RFphdXdMUGZseGRFeVowY2ozSU8xN2RmeTVSbjdIUm1XcG5OQmxsUTI2QVRERi1lOXVBYldTdmNjNWVVaFZIRXlrXzBvM1UyUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 영풍문고, AI 도서추천 서비스 출시…매장 판매량 반영 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
