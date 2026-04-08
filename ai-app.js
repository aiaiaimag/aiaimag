/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 시대에 가장 위험한 직업은 무엇일까요?",
        "enTitle": "Which Jobs Are Most at Risk in the Age of AI?",
        "date": "2026-04-09",
        "originalDate": "2026-04-08",
        "sourceName": "Inside Higher Ed",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNNGpDS3VFb3NfeHBtanp3cnNSNmVOYmZjWmhtVF9ub21KYk5vRkJ6RWFIY3BlQlpyVlB1UXhFRW9iSmhjVmRmazBJVzljV3RuUkRLbnZQRzM5Q1JNc0dDUk9UZDZnTjNSVzZjcER3ZEh0VmJiNlVpS1IxaERieUtLMFZ1c2liOVhwN2FFZWZBVmxhRGNsNGQ4T2ctN0RaOGJLUDl3bVE5LTM3eUtfUmdvcFhjZjhtN3NVMnc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 시대에 가장 위험한 직업은 무엇일까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI로 인해 엔트리 레벨 역할이 사라지지 않고 진화하고 있으며, CHRO는 스테이크가 상승하고 있다고 말합니다.",
        "enTitle": "AI Is Causing Entry Level Roles to Evolve, Not Vanish—and CHROs Say the Stakes Are Rising",
        "date": "2026-04-09",
        "originalDate": "2026-04-08",
        "sourceName": "SAP News Center",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQSnFnRWdZcm5HN1NpWEVVaEVldnhOUEFhODA2eFNzS29iSjVRS0xqbHJtLWZSRENBaE1qN2cyakZBeXVuNWJ5TFIyR0JiRVJwbXpDUWdEem5GdGw4SU9DX3hhY2U4bXV0OEN4QkpxZVc5SldTWlJaclZ6a25yajVDZ3Q1SXRNQQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI로 인해 엔트리 레벨 역할이 사라지지 않고 진화하고 있으며, CHRO는 스테이크가 상승하고 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 채용 기조 연설자 및 인공 지능 직무 행사 미래학자",
        "enTitle": "AI CAREERS KEYNOTE SPEAKER & ARTIFICIAL INTELLIGENCE JOBS FUTURIST FOR EVENTS",
        "date": "2026-04-09",
        "originalDate": "2026-04-08",
        "sourceName": "futuristsspeakers.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNTlk5MWtFYTV4U0k1eFRtZ00yS3cwZm91QVNqaUVfbVphMU1XWGpkc2xFYmNaUE5vMEFCRGxMblMtVWpadnFfYkdtRU44cU1sNHJJVDhKYWVSWnVCMGtNRHlidGlwSm94MUNCSHVtQTFNVFNsYmJQOEFmUjdIa2ZMZkJFdw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 채용 기조 연설자 및 인공 지능 직무 행사 미래학자 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽 '클로드' 서버 장애 지속…국내 AI 서비스 영향",
        "enTitle": "앤트로픽 '클로드' 서버 장애 지속…국내 AI 서비스 영향",
        "date": "2026-04-09",
        "originalDate": "2026-04-08",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5LWGdPc1ZmZHEwWTl4MVBHbnN4eFdoYnIxTzd1Sk81aERWbDlHeDZ4QXRwWnFJRUFaV2d2S2sxSFZOcnVSM3VzYkI0YlNWbXRSS0VnTW5R?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽 '클로드' 서버 장애 지속…국내 AI 서비스 영향 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "예약 없이 취업상담! 서울갤러리서 청년 누구나 무료 이용",
        "enTitle": "예약 없이 취업상담! 서울갤러리서 청년 누구나 무료 이용",
        "date": "2026-04-09",
        "originalDate": "2026-04-08",
        "sourceName": "서울특별시",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9CTS1uNkplNXJTS0R3dTZRREYxMHZ5NUJwRmlmNGthNjJJbll3dnpiYXN1UGJ5bkhGWjhWOWxpNGxQU2FuUVF1ZERsQ0V3QnpmXzRVeFpDUkk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 예약 없이 취업상담! 서울갤러리서 청년 누구나 무료 이용 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "원티드랩 “취업 시장 변화…기업 77%는 AI 능력자에 연봉 추가 가능”",
        "enTitle": "원티드랩 “취업 시장 변화…기업 77%는 AI 능력자에 연봉 추가 가능”",
        "date": "2026-04-09",
        "originalDate": "2026-04-08",
        "sourceName": "aitimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9COXVOcUo5SFBCZE9LLUExb2ozclZKRHZ3NnlwakV5VkNJU1ZzZVNQM2thaFd1eG5Wbmp2bnlQeTRJWWRCZjVSbDdZVzNEcVJIZmFWS2p0NkhOTTdMMXJsUUM4U3F1S2NPR2c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 원티드랩 “취업 시장 변화…기업 77%는 AI 능력자에 연봉 추가 가능” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
