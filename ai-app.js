/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-25
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "DealBook 서밋 2026: AI 세계에서 성공하기 위한 도움 필요",
        "enTitle": "DealBook Summit 2026: Help Wanted to Succeed in an A.I. World",
        "date": "2026-11-25",
        "originalDate": "2026-11-24",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQck1SekFuN2dDbm0xMHVzdzA0eUxxeUFHRDd1Nkk4SzJvejFhYUVLSVFjRzNMeW1WazhmNTZGckU2VnZOLWlTQk9ZeWNpU0tjZW1RVkt2MDE1a2x4TThTMHA2NVdqVEVFME95ck9VRXVObW8zYnk2WVdWY2xQTDM2cjhGY28?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! DealBook 서밋 2026: AI 세계에서 성공하기 위한 도움 필요 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI와 원격 근무의 증가 속에서 직무 몰입도가 하락하고 있습니다.",
        "enTitle": "Job engagement falls amid growth in AI and remote work",
        "date": "2026-11-25",
        "originalDate": "2026-11-24",
        "sourceName": "Raconteur",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOQTBOb0xQYzNxaTl1ZnpjWERRNUlhYmc3MUVzUFZFeHpHc1AyOVc3SEF1QmFzRmp2dnFjclQxWnNZVEV4UUVvTmRwWU1CUlVuZ3l2eHFmZEhhV1NwLVpnTUw1N29OXzg0QXVMMzVmWTdBUUtUenpSdkFYdHh2M3lPdWxLY1NTczNCX0FzckJ3NA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 원격 근무의 증가 속에서 직무 몰입도가 하락하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 인도에서 일자리를 어떻게 변화시킬까요? 위험에 처한 직무와 유망한 직무",
        "enTitle": "How Will AI Change Jobs in India? The Roles at Risk & Those on the Rise",
        "date": "2026-11-25",
        "originalDate": "2026-11-24",
        "sourceName": "Analytics India Magazine",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOR2FzRkZrRy1iTTNYMzZkSnhJZ2RCS3p5WlJPcDU4RTdyX1p3bkhYUnQ2NzdFZ2RDQ1BxS3VKV3Z3OUkyN3h4dndnLUdKWUtJSDFKQnJkZm53cUIwTFJ4VkVoR2g3Z3BrN3RINzAyNm01US1pSS1JQVhDMEY1V1pVNVVadEh4bHlxcVhFTmdEZzY0VkN1Xzk4ZUhTOGVySEM2LU5HYy1HYmRRTWdKM0s4UQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 인도에서 일자리를 어떻게 변화시킬까요? 위험에 처한 직무와 유망한 직무 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, ‘클로드 십’ 출시…코드 검토부터 수정·승인까지 자동화",
        "enTitle": "앤트로픽, ‘클로드 십’ 출시…코드 검토부터 수정·승인까지 자동화",
        "date": "2026-11-25",
        "originalDate": "2026-11-24",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE4zMEJ6LUZzbWp1N080MjBWVklpNW1ORG5CYktFaExlWE9McUY2T1lxMnJuY3FfMm5SZnhzUkwxTU1MU0FNa3ZveVI1el9Rb2NvZWJwblBZUG96bHY3a3VORW1rSUZJdkZzSlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, ‘클로드 십’ 출시…코드 검토부터 수정·승인까지 자동화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "Clay, Codex와 ChatGPT를 통해 영업팀의 성공을 돕습니다",
        "enTitle": "Clay helps sales teams win with Codex and ChatGPT",
        "date": "2026-11-25",
        "originalDate": "2026-11-24",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBOcFZfQlBhUGJrSnJ6TzZZSUN0ZG94VU1ha2JWOVV5emlJOWNCRi15UkQxcDhsWDlndF9sM3RpZFRuc0IwblNNNTlhQkJSSy11VWxiNDZOMklHUmEyRWhBeE01N1hCVGxIaFRnR1JEaS1la1o1OFdsMU9ESQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! Clay, Codex와 ChatGPT를 통해 영업팀의 성공을 돕습니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "바이브컴퍼니·아이지에이웍스, MCP 기반 소비 트렌드 분석…클로드 국내 결제액 13배 증가",
        "enTitle": "바이브컴퍼니·아이지에이웍스, MCP 기반 소비 트렌드 분석…클로드 국내 결제액 13배 증가",
        "date": "2026-11-25",
        "originalDate": "2026-11-25",
        "sourceName": "인공지능신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBCUUFBUlpaTVl2WUtjRGd2NE1Tc3Vzb29hQVV1YVdyRFNUSzZnUXEyd0JIblpGWl9pT001ZzBBbklDa3R5dy1tTUZsdFJ4Q0kwZXpiNHNpU3pCNExOSTVWN3p6YzFvamM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 바이브컴퍼니·아이지에이웍스, MCP 기반 소비 트렌드 분석…클로드 국내 결제액 13배 증가 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
