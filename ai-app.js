/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-07
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 및 Tech Brief: 업무의 미래",
        "enTitle": "AI & Tech Brief: The future of work",
        "date": "2026-06-07",
        "originalDate": "2026-06-06",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQLThTanVYRVc3ZnNNaHVpelcxX3I2UWtVWkRTekRlRDVBRkdqbjY5RnhfLTNvelJHZ0tNX3FySHRyWDlybHdab2h2OTQwX3RoY1BYLWxXbFpmaGpOeWhROFlVODJEVWR0LU81T1V2R0o1SERkRXVRdG80NEswVUl2Y0MyUk81N3EtVm5Za2w5alk0eGhRSHJVS3B3YlNNSUU?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI 및 Tech Brief: 업무의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Google 공동 창업자 세르게이 브린 (Sergey Brin) 은 Go 게임을 사용하여 업무의 미래를 설명한다고 말합니다.",
        "enTitle": "Google cofounder Sergey Brin says he uses the game of Go to explain the future of work",
        "date": "2026-06-07",
        "originalDate": "2026-06-06",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQZXZwMjJudnlxSHVNQVo4OVFGaDY4Ym9ldk85b2I4ZTBmYW82RzY4R0RPcllxWGxjYkFQZUtJMmJQTUM1eXlWUjFrMERzWTdwRU5Rd2hlUXktbTFjOElPQk1PVnlBS1lpOVJOakp6NWIyRFBNYnZLQTNLa0RXN3lrWkt3cTVLOFlERzlYTlAxNFdFRWhsRmFKLVZB?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Google 공동 창업자 세르게이 브린 (Sergey Brin) 은 Go 게임을 사용하여 업무의 미래를 설명한다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 일자리를 재편할 것이지만, 인도의 더 큰 도전은 근로자, 회의실 및 교실을 준비하는 것입니다.",
        "enTitle": "AI will reshape jobs, but India’s bigger challenge is preparing workers, boardrooms and classrooms",
        "date": "2026-06-07",
        "originalDate": "2026-06-06",
        "sourceName": "BusinessLine",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxOck4xRGw4bUN5OHprWFIxTXRLNVFBdnZZaHJyU1lkYmgyclIwajd3VlZQMF9PT0ExOTh0UHg5bF85ZjMxeG9STzhYMHhVTWtOdGVFOS1oU3JiUW9jb3dhNUV3X05teEcwdzRDaG1iWEJWR09ocl9XWHdVTGdIdUNVb1Z4bFEtYUg3Uzg5M3NlT1NVdTVNbFZXRDhYQm5JcjRDb0lrdGdsRWlRYldYd2FkbWlqaFM2dzctWXNaVzRKdzZPaDdOdGE1UDZ0a1lpQkNhbkNTeWJIQ2YxVGJzNm42Y2xwckswQzRIcmdTUTNXNmJyaWI00gH7AUFVX3lxTE5ubUt4YXRmMGhKYlB4UUpHRXF5YzhOLXNsU0VaU3lUc2RkLTBpY21rdFp6MXpKdzh5cGFzWWZ0dnZ2bFhRWDNmb0RVcDBmX1BEVWUtWkFtbVNVZHlLaHN4RWQyWk1pRU9SZE0zTE9fMlpfQnVXS0NEckY0YXhYeHNQaUpFd1djcDMxR0lEVTlycWhnczVfWlJSM1BoQzRmdHlidU1CUEotT00xeWhDRXlfUWR3Nkp4aVJ5SHR1QkN1N2VOaTVUYUZqMTRuSGd4dGE2eFVVak5qUFFsOUFkekpJOUNydkhiNVVMMmpHWXMyX01LN3FCcHpoZ3Nz?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 일자리를 재편할 것이지만, 인도의 더 큰 도전은 근로자, 회의실 및 교실을 준비하는 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "\"AI로 인재 선점하는 시대\"…취업 플랫폼, '기술 고도화' 경쟁",
        "enTitle": "\"AI로 인재 선점하는 시대\"…취업 플랫폼, '기술 고도화' 경쟁",
        "date": "2026-06-07",
        "originalDate": "2026-06-06",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5HQmU5LXhWaVhWZFZPUU1Na3hNVG5IUmZYOFl0QzhCcUxDZmptbW1nQ0xOMHAwdW8yT2hyZ2d4d2VsVmRjZ3FqSVZsWE9GeGtwel9BbnBGdGRwQ0tWWUhUUzlTdjc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"AI로 인재 선점하는 시대\"…취업 플랫폼, '기술 고도화' 경쟁 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[OpenAI, ChatGPT 메모리 기능 무료 사용자까지 전격 확대… ‘드리밍 시스템’으로 똑똑한 대화 이끈다 ] 사용자가 과거에 나누었던 대화들을 분석하여, 향후 답변에 도움이 될 만한 유용한 통찰과 정보들을 자동으로 포착",
        "enTitle": "[OpenAI, ChatGPT 메모리 기능 무료 사용자까지 전격 확대… ‘드리밍 시스템’으로 똑똑한 대화 이끈다 ] 사용자가 과거에 나누었던 대화들을 분석하여, 향후 답변에 도움이 될 만한 유용한 통찰과 정보들을 자동으로 포착",
        "date": "2026-06-07",
        "originalDate": "2026-06-06",
        "sourceName": "AI넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTFBMa0t6b25xUFhhQ21zenhVZlI5Nmxpb3l2RXFIbFZYZW8wNFkxdjB4dXlhdHJjajBvSkcyczRvMU8?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! [OpenAI, ChatGPT 메모리 기능 무료 사용자까지 전격 확대… ‘드리밍 시스템’으로 똑똑한 대화 이끈다 ] 사용자가 과거에 나누었던 대화들을 분석하여, 향후 답변에 도움이 될 만한 유용한 통찰과 정보들을 자동으로 포착 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "전북과학대학교 혁신지원사업단, 외국인 재학생대상‘AI 활용 원데이 취업캠프’ 성료",
        "enTitle": "전북과학대학교 혁신지원사업단, 외국인 재학생대상‘AI 활용 원데이 취업캠프’ 성료",
        "date": "2026-06-07",
        "originalDate": "2026-06-06",
        "sourceName": "정읍신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1CZ3BhNHBVOExMS1V5a0dPcHI4NENUUFdMRDR4dGVTR0lCYVhQNk1fdzlOMFlSVnNZZVVDNFVleHlzSjJPMmwwQjJKUXJHMjJyNG8wMUtzNFJHdHZHbDdacUNtSU4tOWvSAWpBVV95cUxQT0J5VEtMMmZ4TFF5Q3VjUWJ2VkhfUXdMQW1ucXdoN1ZLbHcyeXV1dE45dG95N3ljOE1jWk5TOGdXOEl5U2FFOUxjTFR0QkFSUUltaHpkOF9lclJtaFlLT2drblczSGhMMEZn?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 전북과학대학교 혁신지원사업단, 외국인 재학생대상‘AI 활용 원데이 취업캠프’ 성료 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
