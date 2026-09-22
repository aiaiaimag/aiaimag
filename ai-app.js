/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-22
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Navigating the Future of Work: A Conversation with JFF’s Maria Flynn",
        "enTitle": "Navigating the Future of Work: A Conversation with JFF’s Maria Flynn",
        "date": "2026-09-22",
        "originalDate": "2026-09-21",
        "sourceName": "EdSurge",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPMlFLeDg0MGFNdlY5SVNZZkl5a3lLV3ZLWTRwM3ZCdTFBTXRuSkhIbTdIN2lsbkZBSGNGYmJYSzk4eWZqYU1QZHAtQS1KMW1yaDQwcGhSeWxkUnBZS2EwWjN2Y3A5TmJUOElfMkdyT1JfcXJrZjc5RWxNUEVUaktmNm9XbV9aQWc5Tk1HZk1zU1FzdHdWUHZvb1RRSQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Navigating the Future of Work: A Conversation with JFF’s Maria Flynn 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Watch What Career Should You Choose in the AI Age?",
        "enTitle": "Watch What Career Should You Choose in the AI Age?",
        "date": "2026-09-22",
        "originalDate": "2026-09-21",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQS0U1Rm1qTjFjM1UzMFNKZGpqYl85NHhreWxrOWlXT0Y0RGZXa2xPdk81VFFrd09KVExkNXlPeG9HLW5KNjU0RG8yelYxLXUwZklCRW52cVN5dFpudGFXTTUzLUpQbTM1VFVpWUREaHlrZG5tNHJ6bGZvMUtGTHA1bENaZkR5REdXWEliVXBQQ1lwOGRzQkNWTGZfQUlsZnM?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Watch What Career Should You Choose in the AI Age? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "With AI about to wipe out millions of jobs, what should we do?",
        "enTitle": "With AI about to wipe out millions of jobs, what should we do?",
        "date": "2026-09-22",
        "originalDate": "2026-09-20",
        "sourceName": "The Independent",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPc3YtcEI2WHRPUjZoV2twWmw5X0FWNmlYazFadURwTzRHN2RaakhEREFQaDFtRk9HZlJxdkhWRlBjQWxsLUpQWWNsYWJSd3d2THEwQm9LX05XTEgzMkRiTnljVGc1aEhBUngtZHBVUGxBd3JFVW9FSThzUGZScTNnZEd4UnlVY0tfSUZwbjIxVlU?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! With AI about to wipe out millions of jobs, what should we do? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글, 제미나이 품은 '구글북' 출시",
        "enTitle": "구글, 제미나이 품은 '구글북' 출시",
        "date": "2026-09-22",
        "originalDate": "2026-09-21",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE8yYThBdEJCNnlTbFdPR01FNUZYMUlEdURpSGdNNXo2ZEZXNWNZWF9XeXFBQnFaRkF2cExmOGZpRXNwNTc2VFBScWVXTXdvbjg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 제미나이 품은 '구글북' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타 '뮤즈' 출시 2주 만에 앱스토어 1위…주가 11% 급등",
        "enTitle": "메타 '뮤즈' 출시 2주 만에 앱스토어 1위…주가 11% 급등",
        "date": "2026-09-22",
        "originalDate": "2026-09-21",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBrLWljYjlWRmZrRTJkdmR5TzlJVm9JU1FDeTNKSmZCdnBVSUpaOTUtUklBYVpzVWkxVW4ySk1GWFhWempaSDJYdHdhaUwwWmd6Z0d1TU9YMXFJeVBpTVZjZjRyV2dybmVC?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타 '뮤즈' 출시 2주 만에 앱스토어 1위…주가 11% 급등 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[미국 특징주] \"GPT·클로드 비싸\"...스타트업들, 저비용 개방형 AI로",
        "enTitle": "[미국 특징주] \"GPT·클로드 비싸\"...스타트업들, 저비용 개방형 AI로",
        "date": "2026-09-22",
        "originalDate": "2026-09-21",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1qRUlrcjJmbUJQS2RUbV9xRURTTnY1bFhUV0Y1cnJGUHFzajZjTlpiLUQyN0FOUko3WmNWMDRuUkxRVGlMVGVjelBMSWpkcEZXMkhCV2dydTFsbW9M?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [미국 특징주] \"GPT·클로드 비싸\"...스타트업들, 저비용 개방형 AI로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
