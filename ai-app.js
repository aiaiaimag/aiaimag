/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Z세대는 AI 방지 일자리를 원합니다. 50개 부동산 호텔 체인의 사장은 환대가 눈에 잘 띄지 않는 곳에 숨어 있다고 말합니다.",
        "enTitle": "Gen Z wants AI-proof jobs. The president of a 50-property hotel chain says hospitality is hiding in plain sight",
        "date": "2026-05-17",
        "originalDate": "2026-05-16",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPUmFlYmRDWm5yeE9SVGFqRFFQTC1Xd1FqVGx0aTlrN3gwVjFqb0VPVzByVUFNZTZvUHl3SDVkQkFxOXZLbXhZYm40c3V2OVF6WW00UC1tRlUxM25DNUhOTmxEVFpjRFJNZjYtcXJSWkFhbkd3Y25MNW9xRTRUNEVnakd6V2diQTBUSHFlbWhaWnB0aExZczRmb0xLSXhBaHppd2J4OFFBaXZLNjM0T3UtZU1hQ1FuNFNIZVJCRzJZZVU2dw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대는 AI 방지 일자리를 원합니다. 50개 부동산 호텔 체인의 사장은 환대가 눈에 잘 띄지 않는 곳에 숨어 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "일의 미래는 이미 여기에 있습니다",
        "enTitle": "The future of work is already here",
        "date": "2026-05-17",
        "originalDate": "2026-05-16",
        "sourceName": "Meer | English edition",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE44VUd0V1FsY3JheTExTklqQTEtejhoUTNMNllNeS1GWi1EbnV6SmQ5aUpvWVFFWVBGcUp1RjAtSEpKdllxUGFJcEVQQnQ0bjh3c1FFMmgzLUE1d3BOTVR3NC1pdzVSVFlYMjJocGVUUENuNUk?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래는 이미 여기에 있습니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스",
        "enTitle": "OpenClaw: all the news about the trending AI agent",
        "date": "2026-05-17",
        "originalDate": "2026-05-15",
        "sourceName": "The Verge",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNU21qZE10LUlJT1lXNS1MbENLcGVzMWlhTjJMbkRwTVRlWWZyQzkxTWlhZUMwelM2NU5PX1h2MG12Zkxxc281LWFrcDZzRFFQbkh6dENseGZHYXdGUjloVmxSY1ZiYWg3djhnZVRCWEVkWS1kNHZ5VUhHT0pFejBuLURn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글이 제미나이 앱 내 ‘개인 인텔리전스’ 기능을 국내에 새롭게 선보입니다",
        "enTitle": "구글이 제미나이 앱 내 ‘개인 인텔리전스’ 기능을 국내에 새롭게 선보입니다",
        "date": "2026-05-17",
        "originalDate": "2026-05-16",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1CVnplbEhhNnJSbG54UWVVb1pyVnBUUndvY3JsZTBQLURmZHp3Y29INFVaZ05PU21GQ01lMHU2MWVQdS0zZkwwOVp3VjdtelVwU0ZvQ3VUcUgxT3ZoMWJHU2s4VWFER2NSTkVOQ081eU9sRnhGRWZmeQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글이 제미나이 앱 내 ‘개인 인텔리전스’ 기능을 국내에 새롭게 선보입니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 리뷰] “AI는 이제 모든 사람의 필수 언어”…MIT, 글로벌 인공지능 교육 플랫폼 ‘유니버설 AI’ 공개",
        "enTitle": "[AI 리뷰] “AI는 이제 모든 사람의 필수 언어”…MIT, 글로벌 인공지능 교육 플랫폼 ‘유니버설 AI’ 공개",
        "date": "2026-05-17",
        "originalDate": "2026-05-16",
        "sourceName": "인공지능신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE82OExDUDF0WE1hcHJHYi1jWTYyVTNocS1sN0l3NjJ1VEVKMDFhdXo0eFBycFJIZnVtTzByLXhaS0E3OWVxbW5aa0Vsbl9GMFNBTWc3UUp6akJ5YkU0LTFBS01vN2JzZkU?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 리뷰] “AI는 이제 모든 사람의 필수 언어”…MIT, 글로벌 인공지능 교육 플랫폼 ‘유니버설 AI’ 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "25화 클로드 코드로 필요한 7가지 툴 만들기",
        "enTitle": "25화 클로드 코드로 필요한 7가지 툴 만들기",
        "date": "2026-05-17",
        "originalDate": "2026-05-16",
        "sourceName": "브런치",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RX3lOR2tWMWhkeUpsLW9PTXR6b3A1enlmamZfbkpEdWFjejU0cGpabE41d29HZmllMElyMGVtbDJUaC1xQnYwclBCRTZ6UQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 25화 클로드 코드로 필요한 7가지 툴 만들기 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
