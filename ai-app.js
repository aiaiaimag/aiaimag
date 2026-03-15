/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-16
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "이력서의 75% 는 인간에게 도달하지 못합니다: AI 시대의 새로운 구직 규칙",
        "enTitle": "75% of resumes never reach a human: the new rules of job searching in the AI era",
        "date": "2026-03-16",
        "originalDate": "2026-03-15",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPbDRYWVhXTTR1WENSMWRPbEZSYVFWV2tTZEJPMWs3RXQ2QTJwaEY2bG8wUHFyX2t2akN6Wmh1T2xxcXppcFFYczA3UXlEeUJQeEdHd0s4bTZ3QVltR2Z1ckF2SVY0blFha1pEYzJ6cTRFQndMaHpJNkJ2TVNQQlJZeWJoQ3g?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! 이력서의 75% 는 인간에게 도달하지 못합니다: AI 시대의 새로운 구직 규칙 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 빠르게 움직이고 있습니다. 사랑하는 일을 버려야 할까요?",
        "enTitle": "AI is moving fast. Should you ditch the job you love?",
        "date": "2026-03-16",
        "originalDate": "2026-03-15",
        "sourceName": "Vox",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9RZktrOHVJR1dSc3VfNHZsendiWlNnQVBUNTNaUnlVS25sYXVRS2hreVBFZm83RE5pQ0xlLTUwV1Y0UVZYRTZHX3BvNEVvZ0t0WmF3bkNrdkwtRUNsLUtBZkg2SkYyTUowS01PbjRKcWNxVi1lWUJGYWE4SkN0Zw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 빠르게 움직이고 있습니다. 사랑하는 일을 버려야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "메타 정리 해고가 기술 산업 일자리 삭감 물결을 일으킬까요? 인공지능 에이전트와 업무의 미래",
        "enTitle": "Will Meta Layoffs Start a Tech Industry Job Cut Wave? AI Agents and the Future of Work",
        "date": "2026-03-16",
        "originalDate": "2026-03-15",
        "sourceName": "Intellectia AI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPd2hiV1dPSmN1Y0FDVm9peE9SMkpYRWs4U0QxMl9Fc1lTYzhBUTNQUl9hRWRTRHk0NmdwLVlDZXpZbUh6V2U4bTlCSkVGNmY2UklzbmdsQlY1UXlDdjlicGV2eVVUUFZPQThLdnBGdkltR19RMWFwWHd1WGpOYjVudGtvODJTcDBpM3dURVJpNTlFazg1X1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 메타 정리 해고가 기술 산업 일자리 삭감 물결을 일으킬까요? 인공지능 에이전트와 업무의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[알리바바가 중국 내 에이전트형 AI(Agentic AI) 확산을 위해 오픈소스 플랫폼 OpenClaw의 모바일 배포 앱 ‘JVS Claw’를 출시] 이는 중국 기술 대기업 간 ‘AI 에이전트 경쟁’에서 알리바바의 선제 대응으로 평가된다.",
        "enTitle": "[알리바바가 중국 내 에이전트형 AI(Agentic AI) 확산을 위해 오픈소스 플랫폼 OpenClaw의 모바일 배포 앱 ‘JVS Claw’를 출시] 이는 중국 기술 대기업 간 ‘AI 에이전트 경쟁’에서 알리바바의 선제 대응으로 평가된다.",
        "date": "2026-03-16",
        "originalDate": "2026-03-15",
        "sourceName": "AI넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTE5LTnZGNnNvaExKYnNMVWtidmR1a1o0VVo1Z2JSRzR4X1QyNUNPRG1Ya2FoNFM2VWF2T1hvaS1IMzE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [알리바바가 중국 내 에이전트형 AI(Agentic AI) 확산을 위해 오픈소스 플랫폼 OpenClaw의 모바일 배포 앱 ‘JVS Claw’를 출시] 이는 중국 기술 대기업 간 ‘AI 에이전트 경쟁’에서 알리바바의 선제 대응으로 평가된다. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "FT “북한 공작원, AI로 유럽 대기업 위장취업”",
        "enTitle": "FT “북한 공작원, AI로 유럽 대기업 위장취업”",
        "date": "2026-03-16",
        "originalDate": "2026-03-15",
        "sourceName": "KBS 뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE51NTN5eWJXcWg0YXRRTkhLckpraDZIam4tNl81Vmg4bUkzVFNNZ08xNzFJcDBveGsxM0NrdHZmdC1yYk9QcmNtS2YxaDZSQzhSb2dCYkc0dG11SU0?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! FT “북한 공작원, AI로 유럽 대기업 위장취업” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "ChatGPT의 에이전트 중심 전환이 인터넷 주식에 미치는 의미는?",
        "enTitle": "ChatGPT의 에이전트 중심 전환이 인터넷 주식에 미치는 의미는?",
        "date": "2026-03-16",
        "originalDate": "2026-03-15",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1aNHpTTW5SbTN3Y0NMeTIxYy00Skd4ckowRGxERW9uNTNJS1FubG9SUXNTT0NRMkhsamtRcmpBV2tiTmFXOEw0Y3lwSUR0RUx1WDlHSUd0SDcxR0VFYkx4N3N2RVdQNXRUUEhBaE9B?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT의 에이전트 중심 전환이 인터넷 주식에 미치는 의미는? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
