/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-27
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 중심의 세상을 위한 교육에 대한 재고",
        "enTitle": "Rethinking education for an AI-driven world",
        "date": "2026-10-27",
        "originalDate": "2026-10-26",
        "sourceName": "The Official Microsoft Blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxONmh2TWVQRHR2MlNYb2xIa0o1SGlkSDhmdjVmR19XeG95M1JPZ0R4UUNsNE42R1ZGREw1bDA1dFZqUnFOTEhibVk4QmRoSE1QZDNvX3hNYkg4aXZCZzZhQXBWSWhCTFl0ODBacTFxYzBLdzhjQmY5RkhjNUwtY0huVGNjUmtBV3lRTUxaeklGQ2JGQ1NyenR2Zmh1TFFMWW5EWG8xb0xMeDFQNVFXQUZOOF92dHFHTTBxV1psd0lybkI1Qld5WDlldllvaDJzMVhGb240LTRaZmM5QQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI 중심의 세상을 위한 교육에 대한 재고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 직업 두려움은 젊은 사람들을 실무 경력으로 밀어 넣습니다. 설문 조사 결과",
        "enTitle": "AI job fears push young people towards hands-on careers, survey finds",
        "date": "2026-10-27",
        "originalDate": "2026-10-26",
        "sourceName": "FarmingUK",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOVHV1UnNvQV9FdnVpaWtCbDl0U2xhbXhXNzFRZUJjWHRZcTUxMV9fbmtaT0dDeDF1djhlel81UTFNWEttWElqYW9LaE1hdjNWdEFkcWNiV3VVdDJrUkd1d0tNZ2tnWDB3cnNVV3FUWFlwWnJGSG1pRWs2VHZwUG9wMURrT1F2eGRxcG5lejBhaFZ2UkI4ZHFMdjFDV2J3bjJUZnl0QXhEQTg2WEdzb01n?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 직업 두려움은 젊은 사람들을 실무 경력으로 밀어 넣습니다. 설문 조사 결과 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "갈림길에 선 남아프리카공화국의 인력: 500명 이상의 리더가 AI, 기술 및 미래의 일자리에 맞서고 있습니다.",
        "enTitle": "South Africa’s workforce at a crossroads: 500+ leaders confront AI, skills and the future of jobs",
        "date": "2026-10-27",
        "originalDate": "2026-10-26",
        "sourceName": "Bizcommunity",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPa05CVmd0dnhXeFY3Z00xREUxdHVQZFY1ZVRNQ2tRb1QzSnFxYkNJQTlFa09JZDBHTmJQTy1XeC12bU1zem9lYko5MThrVDlZYWVVMmY3MmNuaW53V2NlbjNTMENFSGFRMy1Mdlg4bmdua2hob3FGU05jMVhlN3hlOTYwZWp6ckZOdTNETWViRnNXT0o1M2NpejlrQkJzc3drUWptOE5QNEllTEJXVlp6bk05VGpfWHRWMnhfc2VxX0MtSnMwaDRBS3FKRTBFZVhaZElpTQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 갈림길에 선 남아프리카공화국의 인력: 500명 이상의 리더가 AI, 기술 및 미래의 일자리에 맞서고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "SK스피드메이트, 차량 관리 앱 출시... 61개 항목 AI 점검 도입",
        "enTitle": "SK스피드메이트, 차량 관리 앱 출시... 61개 항목 AI 점검 도입",
        "date": "2026-10-27",
        "originalDate": "2026-10-27",
        "sourceName": "녹색경제신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5QbllpUTlqel9IQmJXanIwbkF2d09YV043NzV5ajBvb2VKNVJCQWFjXzZHdWJNV19HMm9VUWNvRVp5d2l4V0gyS2JQV25JX0tHZVpUMkFPUFJqZlRQYnREWGZ1UktFcEJV?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! SK스피드메이트, 차량 관리 앱 출시... 61개 항목 AI 점검 도입 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT, 기술 지원 문제를 해결할 곳으로 404 Media를 계속 추천함",
        "enTitle": "ChatGPT, 기술 지원 문제를 해결할 곳으로 404 Media를 계속 추천함",
        "date": "2026-10-27",
        "originalDate": "2026-10-26",
        "sourceName": "GeekNews",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9CbTRISjhUY0xNVmk1cURRY2QxQUVQNUd1ZGpTeXZZdl9GYWpYTkJVQjNidHZ3YTRLQU1vRGwwcmROQUhLYUlqamRHTQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT, 기술 지원 문제를 해결할 곳으로 404 Media를 계속 추천함 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "카페24, AI 리포트 출시로 데이터 분석 서비스 강화",
        "enTitle": "카페24, AI 리포트 출시로 데이터 분석 서비스 강화",
        "date": "2026-10-27",
        "originalDate": "2026-10-27",
        "sourceName": "스마트비즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5MbFY1MEZZQ2ppR2xBMXlQY0dnOERvUENpWEFBUmdRNHk0UlpKdXVna2diYnpQNkducEMxNFpsVXl1Ym1hR05uc0c1Q2pkLTk1NFJwZnQyN19xMGVuV1NJSkt0SXVEQXFFS0Q0dg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 카페24, AI 리포트 출시로 데이터 분석 서비스 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
