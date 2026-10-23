/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "호철, AI 커리어를 위한 뉴요커 4만 명 양성 퀸즈 일자리 허브 공개​",
        "enTitle": "Hochul unveils Queens jobs hub to train 40,000 New Yorkers for AI careers​",
        "date": "2026-10-23",
        "originalDate": "2026-10-22",
        "sourceName": "Crain's New York",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPRndMQnFKbEhmZnFKSkVZOXVqZlNzZm8xTUE1andxT0x4aHhZMmdYWGhna2R1dnE0QlV2aUhScGNOd2tYMno4bXJUNkEwbTJUdTNCeTNLZ2UwN2RVa0hYT1FiOUhFRU41d0V3Z1Z5OXRYamRsQTNMMkVvdVlFUWpzR3NsNnFxMExpcEpZem9INA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 호철, AI 커리어를 위한 뉴요커 4만 명 양성 퀸즈 일자리 허브 공개​ 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "글로벌 경영진이 AI 경제에서 일자리 창출 및 인력 기술에 대해 논의합니다.",
        "enTitle": "Global Executives Discuss Job Creation & Workforce Skills in AI Economy",
        "date": "2026-10-23",
        "originalDate": "2026-10-22",
        "sourceName": "Bangkok Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPdTNaR3puTVp3WnU4T3pPVUFHWGVVTEZ5UXBBYXZlMDZLdDJJUXdvNjlwQi1Rcl9WR05lVDVqMEFTSnhkamZBeEVMYVduQlpLQm5YX3haZVlCclN1TzZhNnBJb21mUHAzcEdXSFhUeF9HY2pDU183dWZkOHNibmxMTW9EZXBNaDZyb2ZvLTdVbmJhbjdSRHE3TFVKY0V0SlNUYmZYNHV2Q2Q2NGtVVjJDUVlJYUpfSkRI?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 글로벌 경영진이 AI 경제에서 일자리 창출 및 인력 기술에 대해 논의합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI, 지저분한 일자리, 그리고 학교 교육의 미래",
        "enTitle": "AI, Messy Jobs, and the Future of Schooling",
        "date": "2026-10-23",
        "originalDate": "2026-10-21",
        "sourceName": "Education Next",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOWW01cXZjdE9GaU1qdEJMSmF0cFlpdnpTd3h2NkVFSVJ6Z183SVlfQ2g1S0FEc2M0NkQ5NzV2a1RqSm1tYklCN2FKN0RKN3RhQ2RJaW1FRl9rOTRDMFhBYy1GTjJWVlJZcW5SaHBmTEtER2FlWm9xTElZVWJDMUMzTGYxdi1OWmNwRDhCbg?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 지저분한 일자리, 그리고 학교 교육의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽도 AI 에이전트 경쟁 뛰어든다…'클로드 듀엣' 공개",
        "enTitle": "앤트로픽도 AI 에이전트 경쟁 뛰어든다…'클로드 듀엣' 공개",
        "date": "2026-10-23",
        "originalDate": "2026-10-22",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBJYUNYWWNOaDBldG1YY2ZOVzlHWTRidXB1Sy05OWRveTNWSkdWeUdyMEs1aGlrWUxiUV9DT1BXYVJneGpwcGExZHk5LTNBdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽도 AI 에이전트 경쟁 뛰어든다…'클로드 듀엣' 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT의 시각 및 음성 기능",
        "enTitle": "ChatGPT의 시각 및 음성 기능",
        "date": "2026-10-23",
        "originalDate": "2026-10-22",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5oa3M3ZDB0RThwWmhJVkpIa3NpT0ZEcWEzczN1UXhSRTBhSTVvbjNJazdLSjNEdWktSF9lYUg3eUFVbFhJa1dzRmNteXV1M1Y1UzZDdUZDVGJZajZ3RDlDVHZPblNtbkI2VTNZdmlna0pSOG9INkIw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT의 시각 및 음성 기능 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "'창간 16주년' 베이비뉴스, AI 반응형 홈페이지 오픈... 앱 출시",
        "enTitle": "'창간 16주년' 베이비뉴스, AI 반응형 홈페이지 오픈... 앱 출시",
        "date": "2026-10-23",
        "originalDate": "2026-10-22",
        "sourceName": "베이비뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9jMnI2WlNqZllYcERiejNoaE5naTltQjljWWstZ01qeUVMb1haemhjZ0p2MFBpeHNsYjFRaWlXM0dqTlJTaVJVZzNmdkd6Nm5pV0ZSYV9kekJXNzhsVTRZMHJiWVMzUFRqSVk5cg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! '창간 16주년' 베이비뉴스, AI 반응형 홈페이지 오픈... 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
