/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "기술 투자자 Bill Gurley는 ‘대학 컨베이어 벨트‘ 를 통과하고 안전한 일자리를 추구한 근로자가 AI 자동화의 위험이 높다고 말합니다.",
        "enTitle": "Tech investor Bill Gurley says workers who went through the ‘college conveyor belt’ and chased safe jobs are at high risk of AI automation",
        "date": "2026-03-04",
        "originalDate": "2026-03-03",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOVEJOQzZ5M1ZTbmxMdzVISEtKQ1JuRDZIc0UxV0tnRG5wYzBvOUpwdVFZeU11aVpTVENWUWI1YU1ySUYwUFRaWnBUZ3pkY3MwclhLbVlQZjF2Qk9IdHZhdFFQOC1EQWVBYjh5UlZwWUlEYzJvRGpfZ3E1TVlsaUNrSzY1dFpIdUZqbnJRWVlXUEw0eWVVQUNlN1lueDhnZ25YOWlrWHEtX3h6N0dFalkzbHE3NVBMdUdheHJwM3lzWkFGYjZsb3Vv?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! 기술 투자자 Bill Gurley는 ‘대학 컨베이어 벨트‘ 를 통과하고 안전한 일자리를 추구한 근로자가 AI 자동화의 위험이 높다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "미래의 AI 일자리는 저널리즘의 역할을 바꿉니다",
        "enTitle": "AI jobs of the future change roles in journalism",
        "date": "2026-03-04",
        "originalDate": "2026-03-02",
        "sourceName": "KGUN 9",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQRFBmejd0NE1LbzBfY3RQME00YWtCNnE3Y1BZQWVOckFrNmRaazR0eW9pS1k1X21Oc2ljR0swMHlaX2ctbFFteEN2R0ZDalNrVTRmVzNkY1BQUzNFckxZNllES1BfMWc3Z1RjdElaWjZFTzExd2NCLWxJUTExejBNTVpwdzhDdlRITHVaeXByQQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 미래의 AI 일자리는 저널리즘의 역할을 바꿉니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "BBC Bitesize는 청소년의 AI 경력에 대한 두려움에 대한 해결책을 제공합니다.",
        "enTitle": "BBC Bitesize offers solution to teens' AI career fears",
        "date": "2026-03-04",
        "originalDate": "2026-03-02",
        "sourceName": "BBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPeGFINjhZaFJndkZrWlJsT2tZUHBKR1FzVVB3ODNfRHRCcnZ6OFR1ZVhjSm5TaG10NWZPeTNaYmNrWFFjaTBHOExnZF9hZy1SZFpTZVMxalB3WktTNF9GRng2d2NDZTZ3OW13Y1lWMHhGd2xaZDViakxqQ3ExRGZNc3dRU2tCVElxSVZSQVMxeEN5MWFDa19Z?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! BBC Bitesize는 청소년의 AI 경력에 대한 두려움에 대한 해결책을 제공합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI의 커리어 사다리 걷어차기, 신입이 사라진다",
        "enTitle": "AI의 커리어 사다리 걷어차기, 신입이 사라진다",
        "date": "2026-03-04",
        "originalDate": "2026-03-03",
        "sourceName": "바이라인네트워크",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE11cV9SNG1BRUplTTZibVp0MTMzY2JoTXFjWi1VQ044QnlGNWI4QldqS1dLdGVOSEZONWxHbFc0WVNrcTZRWU5xUEJkOVBwelk?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! AI의 커리어 사다리 걷어차기, 신입이 사라진다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "빨대를 제발 '창틀'에 갖다 대보세요…대부분의 사람은 '이걸' 상상도 못합니다",
        "enTitle": "빨대를 제발 '창틀'에 갖다 대보세요…대부분의 사람은 '이걸' 상상도 못합니다",
        "date": "2026-03-04",
        "originalDate": "2026-03-03",
        "sourceName": "위키트리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9TLWVvMDFZTUZfSndMUW1pTFdyWGVxOVZneGpqM3VuNThLOENfek5OcVo2TXA1dDkwTm5rSEhFc01FbXlsV2xIYV91RjllMTVCVjhMcS1B?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 빨대를 제발 '창틀'에 갖다 대보세요…대부분의 사람은 '이걸' 상상도 못합니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영",
        "enTitle": "노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영",
        "date": "2026-03-04",
        "originalDate": "2026-02-27",
        "sourceName": "데브타임즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9aWnpkMGdoWjUyU0wtbVJaNThpUGRSeDJvUGFkQUN2dkhBVmtEOGdCUlJEMWtvbzNfcWhIR1BPR1dnM3dCeXlieTBoZko2emc?oc=5",
        "isRepublished": true,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
