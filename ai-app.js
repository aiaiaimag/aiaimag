/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능이 더 나은 직업으로 커리어 경로를 바꿀 수 있는 방법",
        "enTitle": "How AI may reshape career pathways to better jobs",
        "date": "2026-04-03",
        "originalDate": "2026-04-02",
        "sourceName": "Brookings",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNSFZBd3R1NHBhaHNDR0ZNTjdLVWp5aU1wSXQzME5vTEgyQ0V1Mmpzc2M1MmdvSjZGcGlQd1pFWmNGZGg0NlREME9BNngyN0pBejRHX2dYOTUxdURmUW9pYm5vOS1ZWG1pWWJzWi0wM2ttNWFDVG1oaVI1dFFYdnVncmwyTU8xZk1XSFAxMGNB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 더 나은 직업으로 커리어 경로를 바꿀 수 있는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능과 일의 미래: 누가 위험에 처해 있으며 누가 번창할 것인가?",
        "enTitle": "AI and the future of work: who’s at risk and who will thrive?",
        "date": "2026-04-03",
        "originalDate": "2026-04-02",
        "sourceName": "IOL",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOZ0VhTVNrU2JUQ2c2c0JuVk9zU216Q1cxOXBnZUlBVGdLX3JTUms3Y1gwOGhGQnZibTRwN19DM2ZCeXdOQzBOUXg4Y3doVVFvUE5CS2xzY3A2V3RHd0VUdEl1VVR0alBpQUtORklJZ1ZKem5nakctdjNWcGdENy1DVXZWdmh2ZnhsMUtiRGpDbjdfZUZkSlNnMExSTDdxdjA?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능과 일의 미래: 누가 위험에 처해 있으며 누가 번창할 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "LinkedIn CEO, 직무 불확실성 속에서 AI 커리어 가이드 출시",
        "enTitle": "LinkedIn CEO Launches AI Career Guide Amid Job Uncertainty",
        "date": "2026-04-03",
        "originalDate": "2026-03-31",
        "sourceName": "The Tech Buzz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQOGpMM05NLVhmR3ExYWVFM01fMWh3SXVIY0lXQUlLd2pOd3FvSWk0R3JqVk01dkxJRkVpNW1xREU5TlFXaE8yeE9NLWlPZXRkeFEtSExiOExFN2JVWEZMeGQ0YTZfdFNaenNrSElDeVNyTnJNY2JTUXh4NW12OFpTR1lydGVVWjBocDVVYmJwRUo2M1N4T0E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! LinkedIn CEO, 직무 불확실성 속에서 AI 커리어 가이드 출시 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "마이크로소프트, 코파일럿 유료화 전환…AI 수익화 본격화",
        "enTitle": "마이크로소프트, 코파일럿 유료화 전환…AI 수익화 본격화",
        "date": "2026-04-03",
        "originalDate": "2026-04-02",
        "sourceName": "ebn.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5mWldSeWxLeGVvSUZXVm1lVnZWYW5YaGJlLXBuRWVKZVZzMW1JNmJVTWF0b1ZvMEhPa3Q5QnRWZFdYMS1Bekx6TVYzUTB6eVhreW9GOWY3UGd3cVAzS0ZtSFBSN2pMWG9Z?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 마이크로소프트, 코파일럿 유료화 전환…AI 수익화 본격화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "아이디어만으로 서비스 출시...상용화·운영·수익화까지 연결하는 AI 앱 개발 플랫폼",
        "enTitle": "아이디어만으로 서비스 출시...상용화·운영·수익화까지 연결하는 AI 앱 개발 플랫폼",
        "date": "2026-04-03",
        "originalDate": "2026-04-02",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE15ZnlhTzJhNXpvY2F4WVRhV2ZvelZlYTdYRllOYlVMQ0dFM3JYS3JDeGU1dFdrOE9zY19aOTFFR1J0MEdOSUdJNV9XUXJDMjMtdFE5Szh4MnNISFpjWU5TS05YcXFaaHpvcGc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 아이디어만으로 서비스 출시...상용화·운영·수익화까지 연결하는 AI 앱 개발 플랫폼 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시",
        "enTitle": "세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시",
        "date": "2026-04-03",
        "originalDate": "2026-04-02",
        "sourceName": "약업신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNa0pWYjFkZ0MwNTdCV09VbThQWVF1ZEppdGtYRml0TV9mM0pZUDFfU1k2ZEFtbFJRZFBwY2JNLXJwcVdtcVJnSlU0RVp5WHhMMzlsTndzNFVNTzNhdkZ0cXpqSEJfTzVOWjRienBidnFFY2tNVkhJak1TOGpQMWxmT240VU1GSThQcjhmOGxQQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
