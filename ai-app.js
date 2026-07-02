/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "채용 공고가 다시 상승합니다. 인공지능은 일자리를 창출하는 것이지 파괴하는 것이 아닌가?",
        "enTitle": "Job Openings Rise Again. Is AI Creating Jobs, Not Destroying Them?",
        "date": "2026-07-03",
        "originalDate": "2026-07-02",
        "sourceName": "24/7 Wall St.",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNMEl3RnBEZDYzaEJmOVdjRzYwTFcyZlk5N0VOZHZVNEdlUXJHZVJLcm1GQXVueEQyeV9pYVFnZnNJOURxR2J0RnBoRFRHZUJ3cmN5ZzR5RlMzZFFGSnNkeGxtRVZLSGJQMGdSd0FFcDRfaEF0cXBJdW5VSDgzN3F3eXdnZHFieUVwT2VEVXhleFVzOFFwVHMtSE9OakphZVRfbHp3SDVyTlVJb1U?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 채용 공고가 다시 상승합니다. 인공지능은 일자리를 창출하는 것이지 파괴하는 것이 아닌가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Seedance 2.0 AI 비디오로 돈을 버는 3가지 게으른 방법",
        "enTitle": "3 Lazy Ways to Make Money With Seedance 2.0 AI Video",
        "date": "2026-07-03",
        "originalDate": "2026-07-02",
        "sourceName": "Ilmilog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4yQ2ttOXNtX2l1OFVtZFBHMW9jQUwyM1BfNkM1bE1FTkU5YVE5ZmFoS3oxbmg4QnR2YlIyazQ3QzJrWkVWVzBOV1o0ZERKbm8xd0l5ZXBLVFNtOVRGVVU4MEZTZUE?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Seedance 2.0 AI 비디오로 돈을 버는 3가지 게으른 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 기회 불평등: 다음 성별 임금 격차?",
        "enTitle": "AI opportunity inequality: the next gender pay gap?",
        "date": "2026-07-03",
        "originalDate": "2026-07-02",
        "sourceName": "Lewis Silkin",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNOExCcWJaVVVSR0g3aHRCemlhV2hZQkhmSU92a0hFNHNMNDBsNGpBT2ZtdWtmdHQtZHg5alZxWHJwX1ViSWw3X3UtVG56S05yNW5HR2NtQl9iTWhwM2RxTXYxYU5tSl8tb3c4b3NPWHNVWm8xSnVFMXVGN2t0SjdQTXNDT2JHU3J1ZWVWcHJsQVdKeDNlYWlmNjBPRy1hQ0J2bkRhb2l0R2Fhc1dOa3JPbkZFRDJ6QW5CSlZCSFJPUVpwWndoRWlJYQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI 기회 불평등: 다음 성별 임금 격차? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "서울 청년은 챗GPT·제미나이 공짜…오세훈 ‘AI 사다리’ 놓는다",
        "enTitle": "서울 청년은 챗GPT·제미나이 공짜…오세훈 ‘AI 사다리’ 놓는다",
        "date": "2026-07-03",
        "originalDate": "2026-07-02",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE93QThscTh3ZmR3X29TV0piaEJtTl9fMUVqS2dqWE5DbjNtaWdpMFkwemhMWVRMWmVjZ0FrcUM3ZGNLWEVVU01oblFnZWRmVXNUM0JCaGNR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 서울 청년은 챗GPT·제미나이 공짜…오세훈 ‘AI 사다리’ 놓는다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤트로픽, '클로드 코드' 중국 사용자 비밀 추적 논란…결국 기능 철회",
        "enTitle": "앤트로픽, '클로드 코드' 중국 사용자 비밀 추적 논란…결국 기능 철회",
        "date": "2026-07-03",
        "originalDate": "2026-07-02",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1TU2RaWGdiX1RxaWdMYXJHbVpBczhhOUdlU2hBdDhudU5GVndDcXlXUlFDZldxejV2QVYzR1h5eWJUX0hwZkJ4Z0FoR3JUS2xuVkdkZU9XdnloUEdKN0JqNDNteDlxT2hGY3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, '클로드 코드' 중국 사용자 비밀 추적 논란…결국 기능 철회 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "아누마AI, 모바일 앱 출시… 플랫폼 이용자 15만명 돌파",
        "enTitle": "아누마AI, 모바일 앱 출시… 플랫폼 이용자 15만명 돌파",
        "date": "2026-07-03",
        "originalDate": "2026-07-02",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE92ZEpUYUtWV3pmOFN4RzFYdmtfVUdNSkdicndaTU9pV19iME9JX3B0eUgxMWhjRkVBSk12RUI0Mk9iamE0bVdFUW50UjZGSUd1V2RxeXRzQnJydGdVMGlOeFNleUhMUHBiQXdiMzRvb1VhQWoz0gF0QVVfeXFMT3ZkSlRhS1ZXemY4U3hHMVh2a19VR01KR2Jyd1pNT2lXX2IwT0lfcHR5SDExaGNGRUFKTXZFQjQyT2JqYTRtV0VRbnRSNkZJR3VXZHF5dHNCcnJ0Z1UwaU54U2V5SExQcGJBd2IzNG9vVWFBajM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 아누마AI, 모바일 앱 출시… 플랫폼 이용자 15만명 돌파 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
