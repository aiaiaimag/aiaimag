/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-25
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Perplexity CEO 아라빈드 스리니바스 (Aravind Srinivas): 인공지능 해고는 '대부분의 사람들이 자신의 일을 즐기지 않는다' 는 것만큼 나쁘지 않다.",
        "enTitle": "Perplexity CEO Aravind Srinivas: AI layoffs aren't so bad as 'most people don't enjoy their jobs'",
        "date": "2026-03-25",
        "originalDate": "2026-03-24",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONGxpZ1p0V2tOUjE0Mko3MVB4NW56OFFZN3VtcnRjMEhybGJVdU1jSGpXZ1p6UnZxcDRhbHU3cTZtdHdCdmMtVVd3cWhJZ2UxeUJOTGgzZWFDRjVxaEI3emRDWkpSMFBVVGFXY0p6MWx0b3M2Tmh5ZGwwNTczWE1HVXpUaWNoajFLWHFwYTE0QWktaUJBVFlLSDd4UDJ1Y3U0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! Perplexity CEO 아라빈드 스리니바스 (Aravind Srinivas): 인공지능 해고는 '대부분의 사람들이 자신의 일을 즐기지 않는다' 는 것만큼 나쁘지 않다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "미래의 일자리: 인공지능이 유령 직장을 만들 것인가, 아니면 수백만 개의 새로운 일자리를 만들 것인가?",
        "enTitle": "Future of jobs: Will AI create ghost workplaces or millions of new jobs?",
        "date": "2026-03-25",
        "originalDate": "2026-03-24",
        "sourceName": "Mint",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxPLUVHYi12a0N4QW1VRlQweFZTQWk1cHhRWDdKQThCdkpyeThCdUx6MlF5bWs4SDVoUzhKSG1RMzA0V2lCUGVQZjM2QVhCS09GQTB5cWNwY0dmVlNVOFpOSVd3a0MyY1hLclFoTm9aUEtYUnE0VnNTM19TTV9jQmtlVDlELUlTV1Z6MlFEdVZrZHg2UjF0Sl9SYkRQTDgzYWNJaXVFNWhLdy15YzlTdGRqOG96SzVPOG5PY0xFUWFpOWUtR29aQ0F1RWRvUU1VNnI0ZTVjWGRLZDNSalFFUy03aXkzVUlnQnR0VWNnWkRkTHpSSjR4MVhIb3RSWdIBgAJBVV95cUxOVDI4Yy1fZnlIbE1LeXI2MVZ1OWxPLWJtd09YV1g2Vm55QTYyWXhveW5NSTVyaEt1THNodXE0aVpwQlM3S01IZTRCQlJMZ2x2VFVuX2doRHBTMU9PZGF1b0daY3lsSS1IODl5ajFfS011M1Y5WjRITFZxYWlOUHFoZlUwVUozMEpLNTBKWUlrTGFoOHBBcXdNNXE4YXB4VzFfNXN6bkx1OE96ZGZqaUpoY0lIdi1WMkFFNG8zbnNoZFpQdzFlZXdycGFRWTdSMXM2UWkxbzV6am85VFNfdnBxb2tMaUktS3RNQXF0X05IY2tWdVVVbUlNV2VheUloTVp0?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 미래의 일자리: 인공지능이 유령 직장을 만들 것인가, 아니면 수백만 개의 새로운 일자리를 만들 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "젊은 근로자들이 AI 방지를 위해 하고 있는 일",
        "enTitle": "What Young Workers Are Doing to AI-Proof Themselves",
        "date": "2026-03-25",
        "originalDate": "2026-03-22",
        "sourceName": "WSJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi_wJBVV95cUxNS3ZEUEVFOXFPOVNsUGQyNm9BblFCN2hOc0kzY3N5VnFiS3gwMmpjcVZfY1lpN2VPbHJTRnZfdG1OMGlUMkViUTVmTlBnVVFRMWJGNVJiam9oRmxSaDR3cFVwZF9iTHJGWkRoZnNvX0hjUGdhSWF1azNLX05NakFqeGczU3dzUGpMMWx2RUdpV0ctOW5Vbm1JNklsMWI4MGoxVjRoVWJsNjAzLWt0RkJucndtYVNHUkhFa0pudFRrNGNKZWdtSTQ1cGNjQTU0Smk3VnItbC1rb2d6S0E3TDhKa1REMzlobEFtTlZIVDV2ajF4UkZQUjFtZ21aY3lWTW1PSmhWX1NkVDVBY25uYURWdF9udnczSkFEVzhJY3hyeUdGLXJqM3AySm9xQ0dfckluRmtEUExUQXdWZVgyNUxnRnJEYXkwWlBFVVpSbzVWenptR2RyNmJUTUh4eElZemhudWpldTBmeDBDSTNaLVZJN29WUWVmU0RvcUpVWlRxRQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 젊은 근로자들이 AI 방지를 위해 하고 있는 일 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, ‘클로드’에 화면 제어 기능 도입…\"AI가 컴퓨터 직접 조작\"",
        "enTitle": "앤트로픽, ‘클로드’에 화면 제어 기능 도입…\"AI가 컴퓨터 직접 조작\"",
        "date": "2026-03-25",
        "originalDate": "2026-03-24",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1fTDhIMUU5VDUtOWE4Zk1YWkx4My0xWFV0ZUVlZ20xaV9nQTV1MTlWZGtaRE1BZXZtbGFXcUtVcVUyRU50MHFFRDd2QkxvOG96NmVBeHpkX2ppYUN3LUpwZlY4SzdHbm9ZQUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, ‘클로드’에 화면 제어 기능 도입…\"AI가 컴퓨터 직접 조작\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "무신사, 카카오톡서 'AI 패션 추천 서비스' 출시",
        "enTitle": "무신사, 카카오톡서 'AI 패션 추천 서비스' 출시",
        "date": "2026-03-25",
        "originalDate": "2026-03-24",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9QcEpmblRIaTIyelZrc0J2Z2o1bG1ZaXl1LXBNY2xEMTYyRjEyUUs1WjdEbktlWWdFakhobkRxUW9tN0hPcGRGdFlBUjgydw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 무신사, 카카오톡서 'AI 패션 추천 서비스' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "하나은행, ‘NEW 하나원큐’로 AI연금투자 통합 서비스 출시",
        "enTitle": "하나은행, ‘NEW 하나원큐’로 AI연금투자 통합 서비스 출시",
        "date": "2026-03-25",
        "originalDate": "2026-03-24",
        "sourceName": "베이비타임즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBtSUNuZ1NQUF9oM20tUHpYRmgxY2tuUkpMcEo1OFhPbFlHeVBMMTNpME9sMllYeFYwd2lVOTMxZkI3TVJwUElyODc2SExQS01KMmhkN0t5Q01feU9DV0ZlMi1SazNQNEpvTWcyNw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 하나은행, ‘NEW 하나원큐’로 AI연금투자 통합 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
