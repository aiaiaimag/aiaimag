/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 경제가 노동을 생계로 재고할 것을 요구하는 이유",
        "enTitle": "Why the AI economy demands we rethink work as livelihood",
        "date": "2026-07-18",
        "originalDate": "2026-07-17",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQSmJwVzdGR0xJWlJaQ0R3N2VxZUFwUkotR2pyMTVSbTAzQ3lRVERJRGE2YTVmV2NnYzhGVDJrTmR6ZnJOeVJyQ3g1bnNwLU1aS1JMM3o4SUJ6aTlidzRrTTBKdVZuYlE0enlFTTJvS29EZFdFM3dmemNtUkRnOHZTeDVVUXV5QQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 경제가 노동을 생계로 재고할 것을 요구하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "구직 활동의 미래는? 추천: 인공지능 플랫폼은 사람들이 일자리를 찾는 방식을 바꾸는 것을 목표로 합니다.",
        "enTitle": "The future of job hunting? Refer, an AI platform aims to change the way people find jobs",
        "date": "2026-07-18",
        "originalDate": "2026-07-16",
        "sourceName": "kmph.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOaHU4VUdBa2Rsc2FyenAxZVNPbGNTVFR6N2ppM0hTR2JQVGFrYW02LUpsMk56YXJBOHNfQUNJYW1FbWJaTW4zb1BSRFV1TkNJMzJvS01DMmlHVWlPWVFiTEN5Ym9vdDZ5RlFXTVVVbXoxSDVMeDh2bjNmU2pCbHlEeHlxYjI2blhZRjZ6b3F5Wl9SOHRweDJPMkFsLTRBOFZnY00tV1NrRjhHaFJmb0dFX0ZNVjI?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 구직 활동의 미래는? 추천: 인공지능 플랫폼은 사람들이 일자리를 찾는 방식을 바꾸는 것을 목표로 합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "불확실한 미래를 위한 기술: 청년들이 변화하는 취업 시장을 탐색하는 방법",
        "enTitle": "Skills for an uncertain future: How youth can navigate a changing job market",
        "date": "2026-07-18",
        "originalDate": "2026-07-15",
        "sourceName": "UN News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFA3VGJBMFJXZ3FOcUhUVVJ1Q3g1OGNRYk5EVXpzV2xRYjFVYk80dkloZl9wTmxMNXJkWlVLOFlJa2w1MERXX1dKUkx4VnZnNTdvZGZuNFVKQQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 불확실한 미래를 위한 기술: 청년들이 변화하는 취업 시장을 탐색하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드 코드, 폰에서도 간편하게 개발할 수 있나요?",
        "enTitle": "클로드 코드, 폰에서도 간편하게 개발할 수 있나요?",
        "date": "2026-07-18",
        "originalDate": "2026-07-17",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBNRDdmOEt4Z04tem4tVEptcXltVU9VUVJJcVdjNUZ3SEpFeDI0VWVrd1diQWlReVVURGhkbjF3a3dTR2lkOGYwT0JFZUx2MWhvcUxXd1VQQ1EzQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 코드, 폰에서도 간편하게 개발할 수 있나요? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"구글, '제미나이 3.5 프로' 출시 수개월 지연\"…주가 4.4%↓",
        "enTitle": "\"구글, '제미나이 3.5 프로' 출시 수개월 지연\"…주가 4.4%↓",
        "date": "2026-07-18",
        "originalDate": "2026-07-17",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBqcjZucGE5bjVqUy0xZmpxeS03aUEwektSdk1SenZ4QTJWc3llTGJ6TzVJeEJPbk13dW9CZ2pJSEFpVllFcXA1OW9EM2c3ekJzUWVnSnZHYWZRaHd1RlpDQdIBYEFVX3lxTFBqcjZucGE5bjVqUy0xZmpxeS03aUEwektSdk1SenZ4QTJWc3llTGJ6TzVJeEJPbk13dW9CZ2pJSEFpVllFcXA1OW9EM2c3ekJzUWVnSnZHYWZRaHd1RlpDQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"구글, '제미나이 3.5 프로' 출시 수개월 지연\"…주가 4.4%↓ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "애플, 엔비디아 제치고 시총 1위 탈환… ‘AI 수익화’ 기대감",
        "enTitle": "애플, 엔비디아 제치고 시총 1위 탈환… ‘AI 수익화’ 기대감",
        "date": "2026-07-18",
        "originalDate": "2026-07-17",
        "sourceName": "블록미디어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1UVlR4cHVnSXMyV1MyZFVTS0xqeHJweGdyXzNmUjMya09odjAyVTJETDQtOXlpQnRWc3JOUktmYkM0RGlzOUxTX1lFTjBheHFlSHNQUFFNbHY?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 애플, 엔비디아 제치고 시총 1위 탈환… ‘AI 수익화’ 기대감 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
