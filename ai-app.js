/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI는 남성보다 여성에게 더 큰 직업 위협을 가하며, 새로운 데이터 쇼",
        "enTitle": "AI Poses a Greater Job Threat to Women Than Men, New Data Shows",
        "date": "2026-05-11",
        "originalDate": "2026-05-10",
        "sourceName": "inc.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQNzRYUWliT1VTUWNWaDJ3TE1YT3g4RmxSYmJnUFRyNFNTQ250QVdzR0sxMFdqNGpYOC1wcFpBMEVLcFE1a0tjc24xbWtUUEhIbXFDaGlBLTY5ZTNFREU3YVRMeFRhZHhoWlJzbzB5c0llSzljYWcyUmdWSjVOWHVZckVNR29od0dxcVBZRlFoUzN1RnE2TFpQd1d5UjFVc1dBZzhV?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 남성보다 여성에게 더 큰 직업 위협을 가하며, 새로운 데이터 쇼 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI Jobs: 커리어 사다리의 누락된 가로대",
        "enTitle": "AI Jobs: The Missing Rung in the Career Ladder",
        "date": "2026-05-11",
        "originalDate": "2026-05-09",
        "sourceName": "techi.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1QR1otM2M5NEhRb0tRTFZhNHhXSTBqYl9FZE1teWo2a1NxVmh0cWMyaFBFaGh3RnBwMEh6Q1NRd2pLS29QQlpTX3VwUmh1dEsxcGR0c2pxVkpsb0Y1NEpFMUkwcU5yM3VHa0FYRzI4SQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI Jobs: 커리어 사다리의 누락된 가로대 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "모든 A.I. 노트 테이커? 그들은 변호사를 매우 긴장하게 만들고 있습니다.",
        "enTitle": "All Those A.I. Note Takers? They’re Making Lawyers Very Nervous.",
        "date": "2026-05-11",
        "originalDate": "2026-05-09",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPN0JoM2NVSHVZSjdnODFNbzVieW94bHlKaHBCNUtQZWVzWHpBU0Nua2p0QV9mN2ZUZjhza3lWTGh6aUd6ZUtEeTIySUtfUE5PaDc3VDlLbUpCT0prVHNuZzBBTnVrc3hzN0JFWUhnT043eWxNZkFUNGZmanA2ckFBeUpCdUYtcERYUFE?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 모든 A.I. 노트 테이커? 그들은 변호사를 매우 긴장하게 만들고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "중국 암시장에서 '클로드' 10% 가격으로 유통...\"모델 증류의 온상\"",
        "enTitle": "중국 암시장에서 '클로드' 10% 가격으로 유통...\"모델 증류의 온상\"",
        "date": "2026-05-11",
        "originalDate": "2026-05-10",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBCQVhTVE95VmtHV2ZNejRqQ1NtM0tvQzVEN0xvZTlMckxzR3hyTzAxMkxDSi1iWUFtVDdMYXkzLWk4WWdFVGE0Sm9pX29WZFJOUjNnRDBocmlvY3Y5enJjeTZGRGkwZklZaVE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 중국 암시장에서 '클로드' 10% 가격으로 유통...\"모델 증류의 온상\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "기초 체력 다진 네카오, 'AI 수익화' 본격 가동",
        "enTitle": "기초 체력 다진 네카오, 'AI 수익화' 본격 가동",
        "date": "2026-05-11",
        "originalDate": "2026-05-10",
        "sourceName": "매일일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE01Y3BaM09HaFFKOGptTlpPTnEtS2lubU5FckVycEFOOUxZZWswT3RpY1RNR2w5QlBJTUFaQVRSY3FlOGhMdTdKakJaSk9tZWdzcVdVeFl1cHJIRzlmdDBEMThTelo?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 기초 체력 다진 네카오, 'AI 수익화' 본격 가동 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 에이전트 보안 허점 드러나…클로드 확장 프로그램서 명령 주입 가능",
        "enTitle": "AI 에이전트 보안 허점 드러나…클로드 확장 프로그램서 명령 주입 가능",
        "date": "2026-05-11",
        "originalDate": "2026-05-10",
        "sourceName": "데일리시큐",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE0xSElXbnNtbE5zWXp0eTRIUWpYQU8xWVJWenZnaUdNV20wcjVOX3Q4SVpHUk02bTJzQm9tXzh3b05EelNQc2lKN1BvN2t6empyWmxxZFZxTmlJWWVxQWYycTg1OFhsdDg5N05HYQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! AI 에이전트 보안 허점 드러나…클로드 확장 프로그램서 명령 주입 가능 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
