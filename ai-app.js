/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "이 노동자들은 그들의 직업이 AI로 대체되었다고 말합니다. 당신에게 그런 일이 일어날 수 있습니까?",
        "enTitle": "These workers say their jobs were replaced by AI. Could it happen to you?",
        "date": "2026-09-02",
        "originalDate": "2026-09-01",
        "sourceName": "SBS",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNZ19mWjBIR2x4VnVCSFo4TWxjRGRMUUlRNWpPQmxKY3pjRllsZWtlbkk4VFpCNlp4OElfaGdyVU50bEFWaHVwS1JLWnNsOFA5SVdaRER1LTVKV1ZaWFprUE9tUmsxMXltV1FNdXd2VzE5ektoOUFZV2dfSGNRYTRxNVdDMGpqYmdVNUE?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 이 노동자들은 그들의 직업이 AI로 대체되었다고 말합니다. 당신에게 그런 일이 일어날 수 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능으로 수익을 창출하는 방법: 2026년을 위한 15가지 이상의 효과적인 방법",
        "enTitle": "How to make money with AI: 15+ effective ways for 2026",
        "date": "2026-09-02",
        "originalDate": "2026-08-25",
        "sourceName": "Hostinger",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE84emdrNFphd0FHbTlXM1ZLcVpaUEhnaUROOExrUDBsWmotdVhlQ3hPeFpfTmZJcGtLWmMxS0F0SWN2MHpHYU56RWx3a0FtOXZfblpTRzg2WFFLWmNrcGRmdFY2UVAzYndnOC1WTS1nQVFkcFk?oc=5",
        "isRepublished": true,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능으로 수익을 창출하는 방법: 2026년을 위한 15가지 이상의 효과적인 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 의류 교환기 앱 8개를 테스트했습니다. 결과는 다음과 같습니다.",
        "enTitle": "I Tested 8 AI Clothes Changer Apps — And Here Are the Results",
        "date": "2026-09-02",
        "originalDate": "2026-08-21",
        "sourceName": "perfectcorp.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOWVlQY0U5SExfUUVCZDFIbHJOVnVxcDM2cnpFQm1ROFBOY0tqQjlHTlhXeEJESHQ1SVV0dndxUGNzOC1KWVhlQ0VNdkRFd3FTeHZNTlBQazFMUGZ6T1NaS2pzd0UzV09YQW5ZMDNLSXdMT24xY0h4TGhEb3NGRzBzdFRB?oc=5",
        "isRepublished": true,
        "viralRate": "87%",
        "analysis": "글로벌 AI 트렌드 체크! AI 의류 교환기 앱 8개를 테스트했습니다. 결과는 다음과 같습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤스로픽, 클로드 페이블 5.1 공개…\"가격 25% 인하\"",
        "enTitle": "앤스로픽, 클로드 페이블 5.1 공개…\"가격 25% 인하\"",
        "date": "2026-09-02",
        "originalDate": "2026-09-01",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9VRld5bUpFVnJNWTNBWEJ2MVpEYVNxcmlBLXhpY0hhNXcxbC03UVAxU2RWUUdPa3BPSVhlR3RWbzF5aDhlb3AxelhlckQ3Y1BXLUVKRkpHaXBCX05M?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤스로픽, 클로드 페이블 5.1 공개…\"가격 25% 인하\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "위바이글로벌, AI 기반 스마트 여행카드 출시…여행 전 과정 통합 서비스로 시장 주목",
        "enTitle": "위바이글로벌, AI 기반 스마트 여행카드 출시…여행 전 과정 통합 서비스로 시장 주목",
        "date": "2026-09-02",
        "originalDate": "2026-09-01",
        "sourceName": "매일경제 마켓",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9wZkpmZTl2WS1zc0ZSa0Z4a1RkdVZpM2VaLWZBNWtHMXNneUpsVkI0Y0I1MVkxd0RFRkZYLThSQVdmc3IxOURhUmFSSEdSeS1mZVE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 위바이글로벌, AI 기반 스마트 여행카드 출시…여행 전 과정 통합 서비스로 시장 주목 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "알바천국, ‘AI 매칭 공고 서비스’ 출시",
        "enTitle": "알바천국, ‘AI 매칭 공고 서비스’ 출시",
        "date": "2026-09-02",
        "originalDate": "2026-09-01",
        "sourceName": "한스경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE81S04zZFFDaV9sTS1takdSNWlKb3VtTTZla2ZQUHoyWk41UmE0dzlNXzlucnBDQ1phcVZZRjRlNVpoWlF6bGQtaXd3YVZPci1haXRMeUx1TE91NUc4TFlIc1RtTThKOVZEclBvaNIBb0FVX3lxTE5KaWx2SXp0VGtNd3BfQ2hmS1c1UlRCc3NFR2dSdEExWlFaQXpKVHZEbUVnMGh6V2RVejNrWWZhNjNYMmxRMmlfbHJ0LTBDMHBqcE44SXN2NFRHdXhLUDByeUNSRkhfdVFoNmlzZ2M4SQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 알바천국, ‘AI 매칭 공고 서비스’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
