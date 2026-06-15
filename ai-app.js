/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-16
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "4-H 설문 조사: 젊은이들은 AI 기술이 미래의 커리어에 필수적이라고 인식하고 있으며, 많은 사람들이 준비가되지 않았다고 느낍니다.",
        "enTitle": "4-H Survey: Young People Recognize AI Skills are Essential for Future Careers, Many Feel Unprepared",
        "date": "2026-06-16",
        "originalDate": "2026-06-15",
        "sourceName": "GlobeNewswire",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxOTWRxbjBsVF94WldJV3Q3ZXc5RFM2QW1kd2w1VUpocnNWVjB5TjhMMG5xUm5KX1dnb0ZTeXVkRTBsT2xoMVpvNVdjZ1VRZFRLa2xiSnJvUkhPMEx1azNqQl9WRWNrNFV1azM3bzlLQjVJQVFVdVB3M3VBQVNmZndwZ3E4SzhNa05sYWVPX3ctaE13WHN0dmhPUUJib2xEVGEwUE8wd3FoaFRKOVJsYVluNnlKWFIycWw1NkZJX0NNbXIwSUxIZjFEMkZ0cXpOc0xPem1iTkYwYUpmYTdiUnJHQ1B3cVo5ZC1NN2E1RG05S2NKeXBpWnZBajl1VF9MQQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! 4-H 설문 조사: 젊은이들은 AI 기술이 미래의 커리어에 필수적이라고 인식하고 있으며, 많은 사람들이 준비가되지 않았다고 느낍니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "미국인의 절반은 이제 AI가 가정에서 일자리를 잡을 수 있다고 두려워합니다.",
        "enTitle": "Half of Americans Now Fear AI Could Take a Job in Their Household",
        "date": "2026-06-16",
        "originalDate": "2026-06-15",
        "sourceName": "Memeburn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPQ21ERjNwUXdrcW5CZFgzUHREazZCZ19HT3hoaDJRdTY2OEhPVFJaVWdIQmpwQUQ4UzBpNjh4clNscnFGNFQ2QjB4Y0JxUlk2YldVTmFZNm9VTFFJNlBMM3pXZlhYTTlweUxpY2JkU2NRRzFzbnYxX01jY1BZX3VLUFc4TXVGby1tR1BDcGJuaHo?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 미국인의 절반은 이제 AI가 가정에서 일자리를 잡을 수 있다고 두려워합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능으로 돈을 버는 방법: 검증된 13가지 방법 (2026년 가이드)",
        "enTitle": "How to Make Money with AI: 13 Proven Ways (2026 Guide)",
        "date": "2026-06-16",
        "originalDate": "2026-06-14",
        "sourceName": "Memeburn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1nYmhDZ01JVXBhRHJVdVg2dzkxOURWaUtiUWJSRzFXNnFsSDk3NjhOU29PaU1QQ0dvRTFFLU13OFJlQllkejRMMXYtOUZIZTRpSmJKcHd1Vi1ybWs?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능으로 돈을 버는 방법: 검증된 13가지 방법 (2026년 가이드) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "\"클로드 코드·코덱스를 하나로\"…데이터브릭스, 에이전트 통합 플랫폼 공개",
        "enTitle": "\"클로드 코드·코덱스를 하나로\"…데이터브릭스, 에이전트 통합 플랫폼 공개",
        "date": "2026-06-16",
        "originalDate": "2026-06-15",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE55dXF4T05qd2o0YXdLSXBUbkI0d2pUTGVSSG01Qnd3bmVvYUs3X3FwbVVHdnV1XzA2ZDQ4a3BSdmtPTHJMZlhqOXZXQzBjWDFBNnJTeFBmV2dWWFJhNEo2c0hZMVNfbFZ1a2c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"클로드 코드·코덱스를 하나로\"…데이터브릭스, 에이전트 통합 플랫폼 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "SLB, 에너지 AI 앱 디지털 마켓플레이스 출시",
        "enTitle": "SLB, 에너지 AI 앱 디지털 마켓플레이스 출시",
        "date": "2026-06-16",
        "originalDate": "2026-06-15",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBfUmIxU3c2SGhoazZoUm1yaHQtUXVOZWFGQmE0YW1USEJKR21FMzE3Mk4zdEZ0cWxoTUUxM2NDUUxzOGM4dE43QjU4amY2ekgwSVZlN1VIeWtNU3Y0ejZSOGlVUTNsYmFfOXgxQ0Q1VW0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! SLB, 에너지 AI 앱 디지털 마켓플레이스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT·제미나이 싸움 구경하는 애플 … 진짜 노림수는 ‘AI 통행세’",
        "enTitle": "챗GPT·제미나이 싸움 구경하는 애플 … 진짜 노림수는 ‘AI 통행세’",
        "date": "2026-06-16",
        "originalDate": "2026-06-15",
        "sourceName": "매일경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5TcXdDWWlGZWl4Tzc1aURoTUFNU0RDTmJZZUZ4VGNSaXBrSGpsdmY1dF96OHVwaERJRHY1Q2tlS00zMV9aa2F5a3F3eXljQQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·제미나이 싸움 구경하는 애플 … 진짜 노림수는 ‘AI 통행세’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
