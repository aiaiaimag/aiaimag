/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "프롬프트 엔지니어: 프롬프트 엔지니어링, AI 프롬프트 엔지니어, ChatGPT 및 인공 지능이 디지털 혁신의 미래를 재구성하는 방법",
        "enTitle": "Prompt Engineer: How Prompt Engineering, AI Prompt Engineers, ChatGPT, and Artificial Intelligence Are Reshaping the Future of Digital Innovation",
        "date": "2026-06-21",
        "originalDate": "2026-06-20",
        "sourceName": "vocal.media",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQdS1NbVpTd0UyeDZ5RF9xbjVvVWxwU3oyR3NtdDZ4cEJucDNXYjhhbkZ3cE1PRVhhMU5QOVAtU2ZaRi1FUHVtSmVQaUU5M3cyY0l6N3Y2REFtbkhXWGRJanI5ekRqTkZPemJsRDBRRmNxS3hNRm96MmZLa3VZSnVWVld2NWRaUE5ORVVTNWpfdzJyTXg4V3BKdlZuWDVIUVlEa0pYMnNCbUtPQjdkNDFoZkxMRHY4ZXZkYmVmLURmZXBTdmc2Q2R3TGZSZ3V2cGFWdm9mMW96MVBvUTdvNmZmMjl0QW52SmxqZnBwX05UVTd1cDc2bUJkVg?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 프롬프트 엔지니어: 프롬프트 엔지니어링, AI 프롬프트 엔지니어, ChatGPT 및 인공 지능이 디지털 혁신의 미래를 재구성하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직업의 미래가 교육 시스템 리더십에 의존하는 이유",
        "enTitle": "Why the Future of Jobs Depends on Education System Leadership",
        "date": "2026-06-21",
        "originalDate": "2026-06-18",
        "sourceName": "World Bank Blogs",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPaUZVV3dYbWVydHhYNVQ1ZEY2RnZMa0pJajZmVWVZWTJDRjVMTTJ3a1htNW91cWNqS2lCQy1xR25lRHUxcGp4OE1JdUxHbjBfXzh0bEJjQU9LbmxQdU03eEIxZEFoVnFsRlBUT3lOTi1WMTdUaE1UZlExWmZWYU90cHdyV2F5MlkxZlNpNy1WMzNKNlFzX2ZucTllTzlqeWxtNjhKZQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 직업의 미래가 교육 시스템 리더십에 의존하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "PwC는 엔트리 레벨 작업이 사라지지 않았으며 '선임화' 를 통해 이를 찾습니다. '그냥 젊은 노동자들이 얻을 수 없는 무언가로 변형되었을 뿐이야.",
        "enTitle": "Entry-level work didn't disappear, PwC finds with 'seniorization.' It just morphed into something young workers can't get",
        "date": "2026-06-21",
        "originalDate": "2026-06-18",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxORzNyMmtFcVVJLTlFY04wd28wXzJ6SXlYRGJPcV9pYTFTTjNtMkJxWlFQZVhxOXpCMmdjZVBwZHBGTVMwN3c1LWFUcVg1NFBqN19xVHJ1d2M3bVd3TUpDLUJXcEh2YWMya0lQSmlaNC1kbll0d0lEZ2tuMkFrdk9kYXRn?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! PwC는 엔트리 레벨 작업이 사라지지 않았으며 '선임화' 를 통해 이를 찾습니다. '그냥 젊은 노동자들이 얻을 수 없는 무언가로 변형되었을 뿐이야. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "MS, 중국 기업에 오픈AI API 판매로 수익 올려…’증류’ 위험 경고",
        "enTitle": "MS, 중국 기업에 오픈AI API 판매로 수익 올려…’증류’ 위험 경고",
        "date": "2026-06-21",
        "originalDate": "2026-06-20",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5vTU5LNGF4YWtoMG5WaDlXelBaN09rREswR2RLSlQ3UU4tUU5QbFZabXR5dXl3cFB0SjV3YU11ZEs3VGpwZ2xPWXI2c1VwcnJSdU9WOHpqR2x0aGZhdWFWWlFiWjVxMXRZbUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! MS, 중국 기업에 오픈AI API 판매로 수익 올려…’증류’ 위험 경고 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[인공지능 줌인] \"AI의 도덕적 기준은 기업이 정해선 안 된다\"...교황과 AI 개발자들의 경고",
        "enTitle": "[인공지능 줌인] \"AI의 도덕적 기준은 기업이 정해선 안 된다\"...교황과 AI 개발자들의 경고",
        "date": "2026-06-21",
        "originalDate": "2026-06-20",
        "sourceName": "위키리크스한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9GWXdRTkdienZWaWZ4eGhvX0JiZ1o3Um1ST3gwSHlVeFl5TUxxUy1hUS1nWGw1NWRjcnpMWXl4c3RMMGVVTENncjJUaGl4R3RRRGIxUWFXSERQZndmbHowN2YtUFJ4cm1IM3AxWC0xMA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [인공지능 줌인] \"AI의 도덕적 기준은 기업이 정해선 안 된다\"...교황과 AI 개발자들의 경고 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "오픈AI 사장·딥마인드 CEO·클로드 코드 창시자가 말하는 5가지 미래",
        "enTitle": "오픈AI 사장·딥마인드 CEO·클로드 코드 창시자가 말하는 5가지 미래",
        "date": "2026-06-21",
        "originalDate": "2026-06-20",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5MQmhmcHRiQzdfbG1RV3hId0xRUktyX0FIYkpDQ3BaazhidUVlMENSY3U1RHBRSnNRWXU2alg3SW5SX19MRmxnQWRxWWIxR0NXcmttWGRxRi0yZw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI 사장·딥마인드 CEO·클로드 코드 창시자가 말하는 5가지 미래 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
