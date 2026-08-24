/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-25
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "중국의 근로자들은 AI가 일자리에 미치는 영향이 커짐에 따라 대체되는 것에 대해 걱정하고 있습니다.",
        "enTitle": "Workers in China worry over being replaced as they adapt to the growing impact of AI on jobs",
        "date": "2026-08-25",
        "originalDate": "2026-08-24",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPM3Q0bm1za3JlalpEaWJIeEZqOTFUMWJzNWpMR19TSk5hSTltVklWZ001MElsNFIxS01zWDZMY3NVaVlXNzNoOUdyY1dIZENxc3h1TTlvQlMtTXJQNHVFNUpDMXNIVVBqamt1TU5ncUx2eXRxcEZkb3YwRDM4TDI0bC1IUkZTeld4S0Z2UllsX2wxRnFTMGtGOHAyTmNOTzVRcFRKN2NGM2JlYVhTWGk5eW1IQ0JLckZrQnZVYWc3M2g5Z3kyZW1RQTMtVQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 중국의 근로자들은 AI가 일자리에 미치는 영향이 커짐에 따라 대체되는 것에 대해 걱정하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 시대에 커리어를 미래로 이끌 수 있는 6가지 핵심 기술",
        "enTitle": "6 Critical Skills To Future-Proof Your Career In The Age Of AI",
        "date": "2026-08-25",
        "originalDate": "2026-08-24",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPdXBQQlh5dXJ1OWtoMC1UczhxUXhha1E1N1JoUGZGVFF3Zmg1VDBxUWRVZ1VHTDFtUEJ1ZlZudk5CS2ctU3VyMU54ei1pNWplNG4tMERRX3NDQ3Bhb09IUmVEaVlkT1F5X0wycDdzNUx1Y2JXT2hqMHBRT1E0QXNHVkhDQTFrN012bEhDUWtad0ZPeEl0YmNiVElpZ1BaUDhqT1JNcldHZGxVQUdHXzFvZ1BkQ1FKZw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 커리어를 미래로 이끌 수 있는 6가지 핵심 기술 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "이벤트를 위한 최고의 AI 기조 연설자: # 1 채용 Scott Steinberg",
        "enTitle": "Best AI Keynote Speakers for Events: Hire #1 Scott Steinberg",
        "date": "2026-08-25",
        "originalDate": "2026-08-24",
        "sourceName": "futuristsspeakers.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPVXo2SE9JZXA3aWZMM2hYcU5pMFpuQ0JpanF6bGhVbTEwYTRJWU1EaWotVFR0TDhrbE02X3g4YlZ3eVJvWDdBeUNNTjhLVlgwZ0F2czBYU3VhMzBGSkdTNlcweVBNcW04VFQwekYyXzRUTTlPTW55U0otWVc3V3lCQW1NdldfQlhBSzBR?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 이벤트를 위한 최고의 AI 기조 연설자: # 1 채용 Scott Steinberg 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, 클로드 챗봇·코딩 서비스 장애…정상화 시점 '미정'",
        "enTitle": "앤트로픽, 클로드 챗봇·코딩 서비스 장애…정상화 시점 '미정'",
        "date": "2026-08-25",
        "originalDate": "2026-08-24",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE84TXdSYk5kUm5WRXdQLXJsaWdGbVNkdUxUZXFlTkJSeEwxelVVUnJMRWltZ2FrWVJjYW5lT1VHNWlhaVRCeTR4a3BOeC1lUm5iLXItQXVB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 클로드 챗봇·코딩 서비스 장애…정상화 시점 '미정' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "韓 대학생에 또 '제미나이' 1년 무료 푼 구글…챗GPT 추격 승부수",
        "enTitle": "韓 대학생에 또 '제미나이' 1년 무료 푼 구글…챗GPT 추격 승부수",
        "date": "2026-08-25",
        "originalDate": "2026-08-24",
        "sourceName": "뉴시스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9Na1lqQ2ZKR3NMWmhLRTdpcWhBUTVseEJvOWZYU3RVQ0tTRlgydDNtdTRGaGhka3kwSjVaRElxalZIS29Sc2pmMUtYZkEydS1oSS1UTTROZmh0cnd5YW5hY9IBeEFVX3lxTE9MQUE0M3l2UTRXZkd1dXk5SGt1aWNmZkttY1hzc2lBZ1ZBTHp3WUJzRzZ2QktpcDJEWVdPNnhDS1lXMkU5SVVaMk1GM3luSmkwTUVaVUJmdnVSZFRhT2JmUmhKdmZRZkZkcUlfcnp0WmlMMzM1Y09oMw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 韓 대학생에 또 '제미나이' 1년 무료 푼 구글…챗GPT 추격 승부수 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"AI 메가트렌드에 주목\"… 반도체ETF 수익률 1위 운용사의 투자전략 - 머니투데이",
        "enTitle": "\"AI 메가트렌드에 주목\"… 반도체ETF 수익률 1위 운용사의 투자전략 - 머니투데이",
        "date": "2026-08-25",
        "originalDate": "2026-08-24",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5pQXpOQllGU18ySFlfb3pPaUdtYUJEbVZGU1owWll0SGhDN0VTcFJZS1JJdDFSYU91NGdUNGxvSHR1UTJCTXRxU0VxZVpZcmJ0YVRFdmFYbklEYU9vOGFyU0ItMktuT2I40gFuQVVfeXFMTjJDMjZBMk50ZlMxX3kwRDZMTl9VSUJhM3pBRlNLMVpiQ0FBS3YwcUxhM2ZXekxGVHFtNWZ3Z2ZrRWdULWRoWGhoMmJEM1ZWY3hYdy1TNEtYeC1sMTFHWHA3NVpsdVRZVFFDWXpMblE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! \"AI 메가트렌드에 주목\"… 반도체ETF 수익률 1위 운용사의 투자전략 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
