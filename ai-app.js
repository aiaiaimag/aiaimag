/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT는 누가 지불하나요? 모든 사람이 직업을 갖지 않는 5가지 미래 시나리오",
        "enTitle": "Who Will Pay for ChatGPT? 5 Future Scenarios Where Not Everyone Will Have a Job",
        "date": "2026-06-04",
        "originalDate": "2026-06-03",
        "sourceName": "life.liga.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPbFBTVDZ2aEFPVnJtRnBBQlpKUUZUTUdlVG1lMTI2RkJ6TXprZ3V6d2NIQTc0LUM2QWgxVFUtaGRqZDFydWtwUnVKaktLSU83eUc2bmFWNDA0ZU5hMGtvSjNtSXBYRTFXSWxCa1A3WDVIUkI0TFg1UTc2eGZEV2xQWEJNT0tBZ1k3emFnOHNXQklCRzFBOHpab1drb3dhWXJYYjVPM1c1amhyUndlcUtUMjM4Si1ZODZDWVHSAb8BQVVfeXFMTnU3eWl5R05WQ3NNVkRkSmFXVE5xaUVIdGhRdTBPX0VVbW5sVnRTQk13MUpYVzFGVVlsRV9vTzlZN3c3NDc1T3B6ZjJVXzVQbFk1QzJ0VllfOXJTeWVfdDk1Y1JINHQ4M0V1YkFEUUxxdTFoSEJUb3Q5ZUJDM3pxVndXdGg4ZmhWemF6dHM1SHFsaWJZRmJlcnByR1VZR0NvT3lPR0Nyb2xISDIxV0pITVhaRjRKdlEzeEIwdW5xWTg?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT는 누가 지불하나요? 모든 사람이 직업을 갖지 않는 5가지 미래 시나리오 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "The 20 New Agentic AI Jobs Box, McKinsey, And LinkedIn All See Coming",
        "enTitle": "The 20 New Agentic AI Jobs Box, McKinsey, And LinkedIn All See Coming",
        "date": "2026-06-04",
        "originalDate": "2026-06-02",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSFlQYWdqU3dQYWoxc3BXOHdhUDk1UTBmM3RMTWxKSTQ2ZV9EN2FFQUNrZFpTN2pqUVRUaXZYcm1BVkk2NGo0bG9XczhrcllTa1lrOVZJOU8tZWkyd1ZXcXhidTFObmstd1BrZzRoTjF0QmdidHhhWW9qd1AwaHhVUXZEZXRYWWRoWnpSYWt4OVhwcTBNSUpsdmd1dmhUODFoQ1QxbTV0R2xaLWhKSVFlQUMwQWsyVnA5dElJdA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! The 20 New Agentic AI Jobs Box, McKinsey, And LinkedIn All See Coming 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직무 삭감 또는 직무 변경을 보시겠습니까? AI 논쟁 가열",
        "enTitle": "Watch Job Cuts or Job Change? AI Debate Heats Up",
        "date": "2026-06-04",
        "originalDate": "2026-06-02",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZ0VTUkJTTGg5M0dtXzJoU2pCMmNRVmgyOVRFZnFfTlpNNW8xTjB2MlVWaFZvbFpYZHRfSVNCaDNRZTFKRnZLSzZqT3BQNXVtaHFNZDJYYUNJUGpXb0xXRGMwTU9NRTg4NmlpQldmMjIwd3hSRjdzaWU4dUhXS3ZwbUVoaVYtMGxIZjhEUTZyM3daSlNMdzdjSDV3OTY?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 직무 삭감 또는 직무 변경을 보시겠습니까? AI 논쟁 가열 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, 클로드 파트너 네트워크 ’서비스 트랙’ 출시",
        "enTitle": "앤트로픽, 클로드 파트너 네트워크 ’서비스 트랙’ 출시",
        "date": "2026-06-04",
        "originalDate": "2026-06-03",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1rN1F0dlIxUTg2b0ljTFctT1lhMnVGRVd4R3dyX2lmT1M0N2N1V3NkRENnTVdMZm1xV1JreEJSN2dOeC1CbXQ2NFF6RXRXaUxXWUlEYWdTbHE5dXhQdjdvSHBJV3dvcDdaUVRLU1VWdGVkWnNndWhV?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 클로드 파트너 네트워크 ’서비스 트랙’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "2023년 11월 출시 이후 201%+ 수익: 6월 AI 추천 종목 공개",
        "enTitle": "2023년 11월 출시 이후 201%+ 수익: 6월 AI 추천 종목 공개",
        "date": "2026-06-04",
        "originalDate": "2026-06-03",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFA4M1paSnFSX0JOVHJQS1U2azBrdlNEYnhNeFROOTNFVnJGb1ZhLWJTSmhfNzJIOVI5eDZ4SGhudVBTOTY1VXdzQ1oteHRqcVdZUGkzS2dzaG9PUWdKVEZxdFpFOVZXaHoweWdTRGx1WQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 2023년 11월 출시 이후 201%+ 수익: 6월 AI 추천 종목 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "무신사, 검색 안해도 추천하는 AI 트렌드 큐레이션 선봬",
        "enTitle": "무신사, 검색 안해도 추천하는 AI 트렌드 큐레이션 선봬",
        "date": "2026-06-04",
        "originalDate": "2026-06-03",
        "sourceName": "대한경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFB3V0xoUkVOZ01KZkcxc3IyVlVxN1dRa2ptcmpNYjF0a19jdWcxem5mY2RiaklKRzlUMjdDcGxBR2xLR3pJVnNKTGJEYVVaRWNoczhhVENFaTQxMGR6d3hWZEdaOWtodWxPMHktaElKX0ltN0o1?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 무신사, 검색 안해도 추천하는 AI 트렌드 큐레이션 선봬 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
