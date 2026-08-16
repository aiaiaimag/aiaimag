/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "‘인공지능의 대부’ 는 대량 실업이 도래하고 있다고 예측한다.",
        "enTitle": "‘Godfather of AI’ predicts mass unemployment is on its way",
        "date": "2026-08-17",
        "originalDate": "2026-08-16",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPQmxheVQtQ3RYOGwwbkpaWmpyZlIzVmdmemJkS2F4bVBsUEs0NW5zRW80RFNYZ2hUbjlxMnBxZHc2VzMwVDVWZGp3bEtVQ2JFdWFMUTIzbHVvdEJiekc3MTNOeEhCRVo4eFBBWkVldW5pbUZzQkEyS3RoV3EyRkhUVmlDd1hnS0ltbm9QOHg3eC1SUVFEeVNEdERXYnRTM3NDbzQ5Um1GaEhfOGFUMmtLbk5TeWxzVjg?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! ‘인공지능의 대부’ 는 대량 실업이 도래하고 있다고 예측한다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "연구에 따르면 '직업 종말’ 에 대한 미래의 대학 졸업생들의 대답이 밝혀졌습니다.",
        "enTitle": "Study reveals future college grads’ answer to the ‘job apocalypse’",
        "date": "2026-08-17",
        "originalDate": "2026-08-14",
        "sourceName": "Digital Information World",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVVJaQXNDWW95U2NSVVhYY1R5OF9GdWh4YXBvMlFWTUI5YVNDaDlGS0FOUURVX1FhWGhnMDl2YjFMTlY1LTdBVGV5cG5JdVJWem90eGRLRWpGTDhFa0s2X3I2dmRUaWYwZElXdmh6Nm9YTzZIT1lSS19lVlVBV1NudjZmc3RPNEJ4NlVJLWt4YjA?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 연구에 따르면 '직업 종말’ 에 대한 미래의 대학 졸업생들의 대답이 밝혀졌습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 위기에서 살아남을 10가지 직업",
        "enTitle": "10 jobs that will survive the AI crunch",
        "date": "2026-08-17",
        "originalDate": "2026-08-13",
        "sourceName": "The Telegraph",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPclcteFh1SDdGSGlfZ2RXNHJVaVpJbllWVER1VGtRdGx3UWY0Q1p1dno1WS1lNzNSY0RVTm9HbGN1SjFDNGhpMnk1VXhjeTVmbmNQWDlIQXdlRjhmdDRXZTZnX0hsYjBMUnc0UW1ERktOaDBVMmh4MldMOVlBTFl5NkhQbWJpcV8wRTlES216Yzh1dFFlUlF5N3EzN2tRdlRZQ2pRYVV5a1p6VjNCYW9uVQ?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! AI 위기에서 살아남을 10가지 직업 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“이 글, 인공지능이 썼을까?”…이제 알 수 있다, 앤트로픽 'AI 텍스트'에 워터마크 심는다",
        "enTitle": "“이 글, 인공지능이 썼을까?”…이제 알 수 있다, 앤트로픽 'AI 텍스트'에 워터마크 심는다",
        "date": "2026-08-17",
        "originalDate": "2026-08-16",
        "sourceName": "aitimes.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE4zMDZwRksyTzZSOGFFR3V1a0doLXZlSlBHdTZVWVJ0bWctVzB5a2FRT0JnMG9IUnNqTXc4OFVxY0J5dndEWEJBVTdFb2RoNXlCRmNTWFFWZ25YUWROWmtUR0llZUNpR0U?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! “이 글, 인공지능이 썼을까?”…이제 알 수 있다, 앤트로픽 'AI 텍스트'에 워터마크 심는다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤트로픽 깜짝 흑자에 반도체 업계 반색 ... ‘AI 수익화’ 결정적 증거인가",
        "enTitle": "앤트로픽 깜짝 흑자에 반도체 업계 반색 ... ‘AI 수익화’ 결정적 증거인가",
        "date": "2026-08-17",
        "originalDate": "2026-08-16",
        "sourceName": "매일경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9oZzRiWWUyY0h2YThjTXprQTdjTEZ2ZmxST0N6LVRRUEp3OFkxMUlMSVNMX1NaQzlHWXk3U2dkVlBuNFZfd1dHRXM1LUZxV3VHUml1QWpB?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽 깜짝 흑자에 반도체 업계 반색 ... ‘AI 수익화’ 결정적 증거인가 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "청년 취업 감소 절반, AI 많이 쓰는 업종에서",
        "enTitle": "청년 취업 감소 절반, AI 많이 쓰는 업종에서",
        "date": "2026-08-17",
        "originalDate": "2026-08-16",
        "sourceName": "스트레이트뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9MTXRNR0FVX28zTW4xRW1kc3owWDRwZkg0ZEI4RktHNGhRdmRDSkFOTVNlNm9RN2hpaW8zRnJ5VFg5Q1hNa0w4cVd6c0tNUVhfYjc1M09PYXZ3d1ZWSUpzLU8xVnpZVXpQS2VpUDVKbWI0c1lXbEhJ0gF3QVVfeXFMT0xNdE1HQVVfbzNNbjFFbWRzejBYNHBmSDRkQjhGS0c0aFF2ZENKQU5NU2U2b1E3aGlpbzNGcnlUWDlDWE1rTDhxV3pzS01RWF9iNzUzT09hdnd3VlZJSnMtTzFWellVelBLZWlQNUptYjRzWVdsSEk?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 청년 취업 감소 절반, AI 많이 쓰는 업종에서 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
