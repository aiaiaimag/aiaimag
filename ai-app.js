/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-19
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인간-AI 협업 모델: 업무의 미래가 대체가 아닌 곱셈인 이유",
        "enTitle": "The Human-AI Collaboration Model: Why the Future of Work Is Multiplication, Not Replacement",
        "date": "2026-04-19",
        "originalDate": "2026-04-18",
        "sourceName": "The AI Journal",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPUHlVU1ZkOVdMM1NkUWl6dWZHVkVuaGhQc2lYc1REWmJZYXZUMEcxMEhubjNmcHZUb2hHT3FfSWJVZVNHSUZkX0Ftb240THhpVWdaWk9mOTFUMDZLRlAxN3JuMGpCa09EYjlRZEw1eDNXUnA0UE9PWHZHbXpiRmt6QTM1ZkRiVVFvYUhyVFY1Z2d4SHdaR19RNWh1RmdMLW9MblFuSkphUXI2VXpRdkI4?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인간-AI 협업 모델: 업무의 미래가 대체가 아닌 곱셈인 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Alex Imas: AI는 사회적 기술로 직무를 재편하고 있으며, AGI의 출현은 중추적 인 변화를 가져 왔으며, Claude 코드는 AI의 실용적인 응용 프로그램을 향상시킵니다. | 홀수 랏",
        "enTitle": "Alex Imas: AI is reshaping job roles towards social skills, the emergence of AGI marks a pivotal shift, and Claude code enhances AI's practical applications | Odd Lots",
        "date": "2026-04-19",
        "originalDate": "2026-04-18",
        "sourceName": "Crypto Briefing",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAJBVV95cUxNZE14SElJcE5ITEpXbmhrSzkzam0zWlNfOVBVVk5OSGtHdDQ5cW8xb2dmWDVCbmRPS0VTNjlQZkw5TmlMRXRLSzJ2c3VVb2hhV3RPeDJMeXhJTkY3VXQ1enNyR0dJUjZuUE5heHhIbkczcUNhOThtanVReWtfYzZjVXN3ZXNKa1FUN25qS00wNWhtVmgzc1RCWmViWXJGa1RwUWEteHl2YXBfZnF2bE9ZdDhpZjBfREZ0Mk1sMEJUQ01SSGt1Q0tqOUY1QUh0TzdyWkF3Y2tiNUJVUDlVNlZlM2tCdUs1VGVkWVl6a25mWFBydndMb2I1QnhoOE8zU2ZfaG90UUFUdHFremRFVnZJQ3ZHMTVkV3Zm?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Alex Imas: AI는 사회적 기술로 직무를 재편하고 있으며, AGI의 출현은 중추적 인 변화를 가져 왔으며, Claude 코드는 AI의 실용적인 응용 프로그램을 향상시킵니다. | 홀수 랏 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "미래의 직장 기술을 재구성하는 AI",
        "enTitle": "AI Reshaping Future Workplace Skills",
        "date": "2026-04-19",
        "originalDate": "2026-04-17",
        "sourceName": "WDEF",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE94WVdnWUk3emVucHZhbTI0ZnVWa2tuMXlsSVlHX2xCUDJYT0hSRUl2WWZDM25mTEJ0djZMVXZCSTlyVklhOTJuOGV6dmV2QV9wMC1IUmRZa2NQUkE5eVlOTjdiQVpiaDc2Qnc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 미래의 직장 기술을 재구성하는 AI 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, 올인원 디자인 도구 ‘클로드 디자인’ 공개...어도비·캔바 위협",
        "enTitle": "앤트로픽, 올인원 디자인 도구 ‘클로드 디자인’ 공개...어도비·캔바 위협",
        "date": "2026-04-19",
        "originalDate": "2026-04-18",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBYNG1qWmZuaVVVOW5GTFg4d1RLVmpGWVFaakpDN2JpMnVTOUcwcmVUZEpCakg1QzNHdm9BdG5IWW1xNzJVV0F0TjJlU1ZoeEpCeTdYYlg5ZWlJdlF5WFVDXzMzQVVWUTVPb3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 올인원 디자인 도구 ‘클로드 디자인’ 공개...어도비·캔바 위협 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앱 출시 급증 속 앱스토어 활기...AI 효과",
        "enTitle": "앱 출시 급증 속 앱스토어 활기...AI 효과",
        "date": "2026-04-19",
        "originalDate": "2026-04-18",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9jby1mekE1eTFLbktyYXQ0ZWFaWWs4V2tXWGdzU0dUdzhOZVJzSmpnSGJBc0o1M0ZPX3Jpb0E3UUpxbTJYVU5OdjJKdWMwR1lfTDgxTWxqTnB5YXRrbjRFNDBYSGlSTEwxdTA5aXdtbVV1Uzg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앱 출시 급증 속 앱스토어 활기...AI 효과 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽 ‘클로드 디자인’ 공개…AI 디자인 경쟁 속 성능·비용 논란도",
        "enTitle": "앤트로픽 ‘클로드 디자인’ 공개…AI 디자인 경쟁 속 성능·비용 논란도",
        "date": "2026-04-19",
        "originalDate": "2026-04-18",
        "sourceName": "이코노미트리뷴",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE0xaWhTMDNQMWNjekI5dHRSbFJsZVA1c0oyR1JjWWRHekxGYmxZV0ZmblpNLUF2YjlXV2FjU0pQelJER0plaTJCNFdWd05SdXcxakxnT3pIWXNHeS1QcWx1enlNOGwxTEMzdklzeXZlM25PazJRSzRF?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽 ‘클로드 디자인’ 공개…AI 디자인 경쟁 속 성능·비용 논란도 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
