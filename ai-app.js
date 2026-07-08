/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI-네이티브 조직 변혁: 일의 미래를 재정의하다 – 일자리는 더 이상 사람 기반이 아니다",
        "enTitle": "AI-Native Organizational Transformation: Redefining the Future of Work – Jobs Are No Longer Person-Based",
        "date": "2026-07-09",
        "originalDate": "2026-07-08",
        "sourceName": "36Kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1JZU9CeWhFUks0NmlBSkJabUNiVEtyTERDY1JNSDVVQi1qZm85OEhsM2VOVVgwdUJiOHhjWnRQMjBnV0RDU01zS1pvdFJJM0s0ZkI0?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI-네이티브 조직 변혁: 일의 미래를 재정의하다 – 일자리는 더 이상 사람 기반이 아니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 작업 보고서에 따르면 큰 차질은 없지만 몇 가지 경고 징후가 있습니다.",
        "enTitle": "AI jobs report finds no major disruption, but some warning signs",
        "date": "2026-07-09",
        "originalDate": "2026-07-07",
        "sourceName": "ABC News & Headlines – Australian Broadcasting Corporation",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNRVRzOVAyaHBGZkNnY2cxajV5T1VTUnpuRmVVdG1peGF4QXRWZC1QUnlTMmpNa0NoaHk2STIycGxHbWpNUmNENHNCOTB6ZmdCcUd4TWlzUUhhZlZIaUxkSlNsOHNnTThSZE41V191QXZDbHV5SUxYWU4yZVo5UnBjZWVkQzZqaS1NMk9KWGNyWDBXX3BpWkljMTZmcVFNZkx1N2dVSkRvZzdoMGc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI 작업 보고서에 따르면 큰 차질은 없지만 몇 가지 경고 징후가 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 당신의 직업을 취할 수는 없지만 커리어가 시작되는 방식을 바꿀 수 있습니다.",
        "enTitle": "AI May Not Take Your Job, But It Could Change How Careers Begin",
        "date": "2026-07-09",
        "originalDate": "2026-07-07",
        "sourceName": "iAfrica.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNLXl3N1lxYy1oZ0dDNjBENElpU29DZ2YyOHo0SGxwYTBnQkxFWXlCWEw2aWRDZjhETFNVeHo5Wm90YS01UTJQZzMwLWVYaU9icFdkeFVMT2NQbmR3UFhKWGV3SmxnNWwtUkphblZmbnVIVWRIQmdpSWhZMENrOGVBWFJJcXRwQVdwNE9r?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 당신의 직업을 취할 수는 없지만 커리어가 시작되는 방식을 바꿀 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "한국인 챗GPT·클로드 구독료 연간 수천억… 심화되는 AI 국부 유출",
        "enTitle": "한국인 챗GPT·클로드 구독료 연간 수천억… 심화되는 AI 국부 유출",
        "date": "2026-07-09",
        "originalDate": "2026-07-08",
        "sourceName": "2news.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5HMmtzdFdLVEpEMWRIMmlVdG1iZ2dQV1lGZXlneXNtRWptbXlnZVhzMEEwSkZqek83Rk1hblg5bkx5eHh1aWppNEstNy1PVGJ0QUVHcF9BUlozNDZNMlhTdDg2MzhqYXNV?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 한국인 챗GPT·클로드 구독료 연간 수천억… 심화되는 AI 국부 유출 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "카카오페이證, AI 어닝콜 서비스 출시…실시간 번역·요약에 매매 연동",
        "enTitle": "카카오페이證, AI 어닝콜 서비스 출시…실시간 번역·요약에 매매 연동",
        "date": "2026-07-09",
        "originalDate": "2026-07-08",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5TZWJMZnJBbVFoQXRRaG9EaWdZcXRoZXl4Q0huMFhubWlTUHlMZFZSRFZYUElNbzNKRnRhVUVDTWZ0YUIzMkZVQWRqTQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 카카오페이證, AI 어닝콜 서비스 출시…실시간 번역·요약에 매매 연동 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "스페이스XAI, 그록4.5 출시…머스크 “클로드 오퍼스급”",
        "enTitle": "스페이스XAI, 그록4.5 출시…머스크 “클로드 오퍼스급”",
        "date": "2026-07-09",
        "originalDate": "2026-07-08",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9maWFqY2dNaEw0YVZjTWphbnloSWpOMmpOTHFXa3Uwb05ha1dEaG1NdmhIUms3cmowYnRPYUMxVzZhU3phNzFIQ3FhbmR6Yms?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 스페이스XAI, 그록4.5 출시…머스크 “클로드 오퍼스급” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
