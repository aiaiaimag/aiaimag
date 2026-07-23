/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI를 위해 초보 수준의 일자리를 줄이는 회사는 미래의 관리자를 잃을 위험이 있습니다.",
        "enTitle": "Companies cutting entry-level jobs for AI risk losing future managers",
        "date": "2026-07-24",
        "originalDate": "2026-07-23",
        "sourceName": "qz.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFB3S1dYWktpcmktLWxRNkxkWXRNcURtdktMdWkzVzV6UUxkMmRaTVNrQ0dHOXBqNlV0el9KODZQcEI0a1N3ODVYWTFtdm12SGtCZkhHV2tLdDRHZV9XUjlN?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI를 위해 초보 수준의 일자리를 줄이는 회사는 미래의 관리자를 잃을 위험이 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "런던, 근로자와 기업이 AI에 대비할 수 있도록 돕는 £ 30M 계획 발표",
        "enTitle": "London Unveils £30m Plan to Help Workers and Businesses Prepare for AI",
        "date": "2026-07-24",
        "originalDate": "2026-07-23",
        "sourceName": "Fair Play Talks",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQcUhpcEQ5OExQZ1V0d2UtbnJjVW5Yamp4Um5UNVR1UDRJMG02dl93VzJjX3ZzdHRCVU1PV0MyS2QtOWRGZGotM1RrMjhoemJZYzdzanB3UEs0dFJDdHBzWDJ6Y0FmQWIwUmVpbFVYVzhia2thU1RTUTliMC0wa0YyOG05cTR6ZU84eVM5RVBlRU9DMUYwaF8wSmpMOW1uMDdmTE5aal9iN2ctWVRDUkNLbQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 런던, 근로자와 기업이 AI에 대비할 수 있도록 돕는 £ 30M 계획 발표 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "EU 집행위원회는 생활비, AI, 일자리 및 돌봄에 대한 사회 정책 의제를 검토합니다.",
        "enTitle": "EU Commission reviews social policy agenda on living costs, AI, jobs and care",
        "date": "2026-07-24",
        "originalDate": "2026-07-22",
        "sourceName": "INSIGHT EU MONITORING",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOWDkzeFFtOEdXVkJJeUMwSUR6SDVTQ2RLUEF5dFFsUEU4LUNFTXZFUWkydE1EUXZUV3BSa1hHMEpGSFE0aTJrYjQySEx0aDg0WXYwX2gzZFZDbF9mdktVY1hNZGJzRVpZd1JZTFhscHZCOUVzUUsxQTdKNW82RXhHWmgtbk5rOEVQeU96dG0yMkFLNmRvcklGSjEzeHA0ZG1iNWhfZXZ5Uk9HYW51bXBEMTJJdFBSalBzOFRLcDVWRUZHU09SaHVMNjFjcmxpSUVZZUlLNkpwVkw?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! EU 집행위원회는 생활비, AI, 일자리 및 돌봄에 대한 사회 정책 의제를 검토합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI투자, '규모'에서 '생산성'으로…하나증권 \"Capex보다 수익화 관건\" |",
        "enTitle": "AI투자, '규모'에서 '생산성'으로…하나증권 \"Capex보다 수익화 관건\" |",
        "date": "2026-07-24",
        "originalDate": "2026-07-23",
        "sourceName": "연합인포맥스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1ZR3VWZERGUU1hSWZ2UUVkQWhuZVFfLWpaS2tJcmRJR3dIbVFSNUxCbTVyRmZaNENGUUVNS1JDR2pxMTFocnZENnhmMmZQRFNPUzlqbXRCNHVob0hMb2t6b1Q4bFZ2bnA3cTBHWGVNUVVBWUtI?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI투자, '규모'에서 '생산성'으로…하나증권 \"Capex보다 수익화 관건\" | 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "인크루트, AI 취업지원 서비스 '신입나비' 출시",
        "enTitle": "인크루트, AI 취업지원 서비스 '신입나비' 출시",
        "date": "2026-07-24",
        "originalDate": "2026-07-23",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1iblJMRHkwTnVrOUw2U2NOR1lWQ0hSSlpFdU5vS3dnc1l5c0pCSTJTR1h5X1hBaTJGeGh1VGRONGo5UzJRUTNrTEFfbjVTT2JPY1JVS0RB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 인크루트, AI 취업지원 서비스 '신입나비' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드 디자인, 웹디자인에 가져온 변화",
        "enTitle": "클로드 디자인, 웹디자인에 가져온 변화",
        "date": "2026-07-24",
        "originalDate": "2026-07-23",
        "sourceName": "브런치",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9XZTF2WmN2dDdNaHhHSWtNNXcyeXRtY0N2LXpCRWpyWF9jZE9fXzZLVEFKYVZIY3RudmZsZ0o1Mlg0U2l1bmVnR2pkZDhXSkZkX0E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 디자인, 웹디자인에 가져온 변화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
