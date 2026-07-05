/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI가 일자리에 미치는 영향 방글라데시 | 방글라데시는 미래의 일자리에 대비하고 있습니까?",
        "enTitle": "AI Impact on Jobs Bangladesh | Is Bangladesh ready for the future of work?",
        "date": "2026-07-06",
        "originalDate": "2026-07-05",
        "sourceName": "The Daily Star",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxNbkRyWFl5dkIzcVIyQ2MwSWxCMVJORm9MTFlwSXFOYVIxdXYwR0hGTkV1R3A2aTMyeW0zdkNVTjlpazJtOG9FcG1vRjZhNlQtQ1ZaM19fYnBxMnhWTWRPQlg5azRKOU1udnhEV1ZGZUVqN1VNMEh6NDNCM2ZPS3pTVHQxSUdvSklTeHVFaXM2aEtlVWNNX293M2E2ZUthdw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 일자리에 미치는 영향 방글라데시 | 방글라데시는 미래의 일자리에 대비하고 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "소프트웨어 산업에서 일자리의 미래: 인공지능의 부상 탐색",
        "enTitle": "The future of jobs in the software industry: Navigating the rise of AI",
        "date": "2026-07-06",
        "originalDate": "2026-07-03",
        "sourceName": "University of Waterloo",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQbWZHNDBJSTJQVE1WZW14Umt6NnRXdE5tUF84eUdtcFdaYjM0T3FMTUEyTDRqaVZhb09RSE1wekJici1ObEQzQVpoOWNGajRaQld4RTUtVkV1V1hhLXp0aVZ5UlZBa3RfaTBKTXBkS3dqcnowUW92VGNoMUNSNzFGT0pxNlBMRlhIZ2VYY2ZVLTdmYlNDbm5zN2tOcHN4OHFYcnU5enlsNWxYVDQt?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 소프트웨어 산업에서 일자리의 미래: 인공지능의 부상 탐색 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "채용 공고가 다시 상승합니다. 인공지능은 일자리를 창출하는 것이지 파괴하는 것이 아닌가?",
        "enTitle": "Job Openings Rise Again. Is AI Creating Jobs, Not Destroying Them?",
        "date": "2026-07-06",
        "originalDate": "2026-07-02",
        "sourceName": "24/7 Wall St.",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNMEl3RnBEZDYzaEJmOVdjRzYwTFcyZlk5N0VOZHZVNEdlUXJHZVJLcm1GQXVueEQyeV9pYVFnZnNJOURxR2J0RnBoRFRHZUJ3cmN5ZzR5RlMzZFFGSnNkeGxtRVZLSGJQMGdSd0FFcDRfaEF0cXBJdW5VSDgzN3F3eXdnZHFieUVwT2VEVXhleFVzOFFwVHMtSE9OakphZVRfbHp3SDVyTlVJb1U?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 채용 공고가 다시 상승합니다. 인공지능은 일자리를 창출하는 것이지 파괴하는 것이 아닌가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[이슈&논란] 구글 지도+제미나이 AI, 이젠 주문·배달까지?…배민·쿠팡이츠·요기요 배달앱 체제에 일격 가할까",
        "enTitle": "[이슈&논란] 구글 지도+제미나이 AI, 이젠 주문·배달까지?…배민·쿠팡이츠·요기요 배달앱 체제에 일격 가할까",
        "date": "2026-07-06",
        "originalDate": "2026-07-05",
        "sourceName": "뉴스스페이스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1QMGNxWjZONWJnSmVRM0RsNHhPOThOTTdYeEdXcnRPXzY0eGIySHYzSmc3OUpXNFFMTDM4LUdQcVVJZVJLNlQwaGFTQVJkQ2t4VkhObXB6VGctRFZBME1XZQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [이슈&논란] 구글 지도+제미나이 AI, 이젠 주문·배달까지?…배민·쿠팡이츠·요기요 배달앱 체제에 일격 가할까 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "돌아온 '클로드 페이블5' 기대 이하…강화된 안전장치 불만",
        "enTitle": "돌아온 '클로드 페이블5' 기대 이하…강화된 안전장치 불만",
        "date": "2026-07-06",
        "originalDate": "2026-07-05",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5mSVpZeEJ3TENiMEg0aU5lLW8wUEU1eTlMZUV1SHFZRzF2N05TR3lkZUozQ2Vvd1pqQ0J6c0p0VXlTNks3QjVwWEd5alhfV1dpblVaeFRR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 돌아온 '클로드 페이블5' 기대 이하…강화된 안전장치 불만 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "반도체 쏠림에 갇힌 美 증시… 돈은 AI 서비스 아닌 인프라가 번다",
        "enTitle": "반도체 쏠림에 갇힌 美 증시… 돈은 AI 서비스 아닌 인프라가 번다",
        "date": "2026-07-06",
        "originalDate": "2026-07-05",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNU3Z4NW5uQ1Mzdy1iN1V0V3pGNUtWdkdJcnZDQlE1UXVJQWtCN3NxZjVHbzBGemdkVmVneWZTenNmUXkxb3BaT2kybzMzS1p0LVg5S0FRR1FIZ2Z1dFkxYzJxaFJ5ZVNBSkx5YWlYdDlKQlZKLTI4dGNMR0tiWHRuX3FkUXc3WEh3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 반도체 쏠림에 갇힌 美 증시… 돈은 AI 서비스 아닌 인프라가 번다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
