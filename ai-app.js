/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-22
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI, 지저분한 일자리, 그리고 학교 교육의 미래",
        "enTitle": "AI, Messy Jobs, and the Future of Schooling",
        "date": "2026-10-22",
        "originalDate": "2026-10-21",
        "sourceName": "Education Next",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOWW01cXZjdE9GaU1qdEJMSmF0cFlpdnpTd3h2NkVFSVJ6Z183SVlfQ2g1S0FEc2M0NkQ5NzV2a1RqSm1tYklCN2FKN0RKN3RhQ2RJaW1FRl9rOTRDMFhBYy1GTjJWVlJZcW5SaHBmTEtER2FlWm9xTElZVWJDMUMzTGYxdi1OWmNwRDhCbg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 지저분한 일자리, 그리고 학교 교육의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Future Faces 회원이 버밍엄 테크 위크 (Birmingham Tech Week) 에서 경력 조언과 AI 통찰력을 공유합니다.",
        "enTitle": "Future Faces member shares career advice and AI insights at Birmingham Tech Week",
        "date": "2026-10-22",
        "originalDate": "2026-10-21",
        "sourceName": "Greater Birmingham Chambers of Commerce",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPdk1BTTBWRzBacTIyc0xHbjZWQlV2QmgtU19NaGF1OG9wd0ZHalRlVjJEbWphNm1yY0Y2OF84T2xtSkZQTGlrVTdwTHlYdUp4bm1TTHc5c3MyRWduc0hvcXhWaEdfWERYUkdvd3MyM3pUUm50REduT2hnUXRRSGNkaHdqVTd6cEsxbmw2ejBrc3p2ejE1eHFrbU0xNlRQcF9oMllKQ25qVGZvNFhFcy1yZUZaR2FNVkhNWlpwNV9STHAxa2R3TWNING02c2ZTMHhiNEE?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Future Faces 회원이 버밍엄 테크 위크 (Birmingham Tech Week) 에서 경력 조언과 AI 통찰력을 공유합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "국제 AI 전략가이자 저자 인 Katie King, IAMPHENOM EUROPE 2026 기조 연설",
        "enTitle": "International AI Strategist and Author Katie King to Keynote IAMPHENOM Europe 2026",
        "date": "2026-10-22",
        "originalDate": "2026-10-21",
        "sourceName": "HRTech Series",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQSkVoQWNKQVAyMTZXOUM5SklTUkUtQWUyZHFfYXpjYTU2dy1acVoyYUd2NzJVZE5fUWtYM1hVeVY5QmZ3TGo0VHVoa2R3WG8wX0lTS2NneUU0ZXpEME5iemZCcUh4MWJqVXNwSGV5VW1rSDhSRVZyT2lYSVhJeUdHeU5jSFByMTlzZ3Zrc0hVbHhVT3hsa01wZVIzcE9ZUHlULUd3enF3cFV5YURZQ2oyUS0wTGI?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 국제 AI 전략가이자 저자 인 Katie King, IAMPHENOM EUROPE 2026 기조 연설 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "enTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "date": "2026-10-22",
        "originalDate": "2026-10-21",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE51czdyblRzU3U2a2lYWTQyQXhPYjJCTmxWVjE2RS13NVlySzBZQ0VVRjRVSkFLYVZKZTlJLWZfSmxlT3g3TFRNS09KRE1waEhKd1lCSWI3TWo5OUxXRFBlVU9EdUlEU3d3VjFfR21ySjVCZlNpbFEyTFlR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "OpenAI가 업무에 ChatGPT Atlas를 활용하는 방법",
        "enTitle": "OpenAI가 업무에 ChatGPT Atlas를 활용하는 방법",
        "date": "2026-10-22",
        "originalDate": "2026-10-21",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOazVJUHdlSm0xczdrV3F2SFlQZVBLUnp5aHdRRzJSSUJDckdhWlkwSU1qNHRlc2l0MjNkX0ZqQVNVendiekpoa3BxR1Mxdk5Uc3JkWmVuMkxpeHRVSWE1VWJmVVFsZ1IwenpzQVJlU3FNWHNKcTBnM09mOWRub1FlZkY3YWg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! OpenAI가 업무에 ChatGPT Atlas를 활용하는 방법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "환경산업기술원, 시장 출시 앞둔 환경 AI 서비스 7종 선봬",
        "enTitle": "환경산업기술원, 시장 출시 앞둔 환경 AI 서비스 7종 선봬",
        "date": "2026-10-22",
        "originalDate": "2026-10-21",
        "sourceName": "전기신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5zNi1vY0ZRQng2LUl2T05wVmFKSmFNLS03XzZrZlc2SlJlczVhTXBTSDJXdjN1MkRveTI1a1g3NjduSjV4QWpqRno1OGYxQkhMQy00OGg3cU1Ccy0zQlladG5BbkJnYUVteXNBZ3FZX1TSAXBBVV95cUxOczYtb2NGUUJ4Ni1Jdk9OcFZhSkphTS0tN182a2ZXNkpSZXM1YU1wU0gyV3YzdTJEb3kyNWtYNzY3bko1eEFqakZ6NThmMUJITEMtNDhoN3FNQnMtM0JZWnRuQW5CZ2FFbXlzQWdxWV9U?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 환경산업기술원, 시장 출시 앞둔 환경 AI 서비스 7종 선봬 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
