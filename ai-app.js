/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "무료 AI Art Generator 앱 10개를 테스트했습니다. 결과는 다음과 같습니다.",
        "enTitle": "I Tested 10 Free AI Art Generator Apps — Here Are the Results",
        "date": "2026-09-06",
        "originalDate": "2026-09-05",
        "sourceName": "perfectcorp.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQTTNLcVRYWmZkVDl6S0JfZHdVOW5HbGVwMldVOXdwX1pxNmFrRkw0ak5rRTBHdE5PUFBvelZBbjRaM1pLZmYzZlBCWi1jcmNMaEFEeExGRWhWZUZHLWl2VVRPbmE4Vk5kU2V2Z2ZJOEtWcEFiNHU1R0JOd1ZiazZrS0p1R0RzQWVoenFUUzFKcw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 무료 AI Art Generator 앱 10개를 테스트했습니다. 결과는 다음과 같습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "빌 게이츠의 AI 직무 경고 및 개입 제안",
        "enTitle": "Bill Gates’s AI Jobs Warning and Intervention Proposals",
        "date": "2026-09-06",
        "originalDate": "2026-09-05",
        "sourceName": "quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQb29NVFB6M1ZNMTBVbDgteWhTc1dVZi1HQVQ5a29wWFZTMFNNYUZSSEd5dV9oUC1pU1lYcWRFMUdqVFBEZ3ZQWlhXeGFaNkxPdURCZkVBZ1lrd3JMdlk0N2NSSjN2VG4xOVRQXzF3RnJYWFJQQkFsbTBSb2dGaFVOSmhsRkcyOVEtcUdNV1RSTDd0VFBORkd2NERNY2hLLUZIWmc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 빌 게이츠의 AI 직무 경고 및 개입 제안 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "A.I. 의 부상과 함께 Harrisites는 일의 미래를 고려합니다. AI가 그들의 일자리를 빼앗을까요?",
        "enTitle": "With the rise of A.I., Harrisites consider the future of work. Will A.I. take their jobs?",
        "date": "2026-09-06",
        "originalDate": "2026-09-04",
        "sourceName": "thhsclassic.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOYlJkdGxVLXhrX2VtZ0t0M3VBOWZYcldxaUI1T0g5TDY1aEhuWFduSW9lUm9vSVRpQUt6OF8xQ09TVjJRWEZ4a1M2aFAzc1hUdDlZenlkWVpBWHJDcnE0TTdaQXdtNWhPTlVyUm1zbHRpQllDdnprTU1xeXRaX0R4OEZ1YVhwUDZZMjRxbE1yVDVVaW9Wb1QxVkhQOVZhSjVEZnkyc0xGUWdLNGN6NWhSU3JOOThzVlNWODYxdU12YmZkVzJZdW1mTzBLVUxuaG1oWGY2Ug?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! A.I. 의 부상과 함께 Harrisites는 일의 미래를 고려합니다. AI가 그들의 일자리를 빼앗을까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "G마켓, ChatGPT와 쇼핑 연동…초개인화 상품 추천 강화",
        "enTitle": "G마켓, ChatGPT와 쇼핑 연동…초개인화 상품 추천 강화",
        "date": "2026-09-06",
        "originalDate": "2026-09-05",
        "sourceName": "서울경제TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBMZ2VqMGVHMGI5cmJ3NF9tQWlLVXlURW1TYTE3cGIwVy1VVnUxLThEZ3ZmV3ZtelpsMERBQ0tfUXBkWHp3b2ZhZG1DZDBzYkpWS05HblpRRzU2UVhTWnV4MlMxSnU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! G마켓, ChatGPT와 쇼핑 연동…초개인화 상품 추천 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "구글, AI 이미지 앱 '픽스' 정식 출시⋯캔바·어도비에 도전장 ?",
        "enTitle": "구글, AI 이미지 앱 '픽스' 정식 출시⋯캔바·어도비에 도전장 ?",
        "date": "2026-09-06",
        "originalDate": "2026-09-05",
        "sourceName": "아이뉴스24",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBQT1R0NlRxTW9keDBMZjVjVXBwVDNCMDhUNWU3Vzk4RU5QUi1wQ0R6REpkMXVfdUtuQmtSRkFLZzJwQjRoMWV1d2FEQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, AI 이미지 앱 '픽스' 정식 출시⋯캔바·어도비에 도전장 ? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "G마켓, ChatGPT서 상품 추천·구매 연결…\"AI가 맞춤 쇼핑\"",
        "enTitle": "G마켓, ChatGPT서 상품 추천·구매 연결…\"AI가 맞춤 쇼핑\"",
        "date": "2026-09-06",
        "originalDate": "2026-09-05",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE95alI4ZjRZVm02R19hZmNHRVE0Wmh6d0RjWHNFODV5V04ydGdtZFhxNGtHT25pRktjdHROOERBM1dLNzZxLVVhV1ZQRUhnTTg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! G마켓, ChatGPT서 상품 추천·구매 연결…\"AI가 맞춤 쇼핑\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
