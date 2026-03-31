/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "LinkedIn CEO, 직무 불확실성 속에서 AI 커리어 가이드 출시",
        "enTitle": "LinkedIn CEO Launches AI Career Guide Amid Job Uncertainty",
        "date": "2026-04-01",
        "originalDate": "2026-03-31",
        "sourceName": "The Tech Buzz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQOGpMM05NLVhmR3ExYWVFM01fMWh3SXVIY0lXQUlLd2pOd3FvSWk0R3JqVk01dkxJRkVpNW1xREU5TlFXaE8yeE9NLWlPZXRkeFEtSExiOExFN2JVWEZMeGQ0YTZfdFNaenNrSElDeVNyTnJNY2JTUXh4NW12OFpTR1lydGVVWjBocDVVYmJwRUo2M1N4T0E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! LinkedIn CEO, 직무 불확실성 속에서 AI 커리어 가이드 출시 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능, 직업 및 불확실성: 선도적인 전문가가 우리가 기대할 수 있는 것에 중점을 둡니다.",
        "enTitle": "AI, Jobs, and Uncertainty: A Leading Expert Weighs In on What We Can Expect",
        "date": "2026-04-01",
        "originalDate": "2026-03-31",
        "sourceName": "Babson College",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5RV2ZoZmVoWDhqczFRWDMwcTkxZk5pY0VWdnVYQ3hUMkxPbUg2MnFxcWQ4U29HckJJTFJqWldoVW0yMGZHTS1FcF9WTWxoeTY5SUs4Q0hFemFCeklmZklfUEpPMzVuZ1Yx?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능, 직업 및 불확실성: 선도적인 전문가가 우리가 기대할 수 있는 것에 중점을 둡니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2024년을 위한 최고의 인공지능 측면의 허슬 아이디어: 지금 시작할 수 있는 수익성 있는 온라인 비즈니스",
        "enTitle": "Top AI side hustle ideas for 2024: Profitable online businesses you can start now",
        "date": "2026-04-01",
        "originalDate": "2026-03-31",
        "sourceName": "MSN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxQM3RfTHlwRnUzSUVFdE0tU2Y2TFdNQ3hCU1ZuZFhWS3F2LXhQdFZfYmUtWHhfRWNrLUo0ekQxNEk5cGl5RUJvZm1nUWJRS204MFNVSlhEdi03eFZ1c1EtRjFrRWdVMkVZREN6Y2ZpWi1KbDhHQmhqVXVyNjJaUDZqcklXWjZxbmtveEdKZzVvYUhpeEFYMmtFV2VDZkVRWkhvSzgwYW1jbTdneVdEcmFVTy0zd1c0Yzg0cnB3TkJGUm03MmtscGVNT21NbkZoMEhCNU9RWHEtdkJNYWJQVnVXeXp6Sy1MekdLUFNjQVNUenVvcDdXbUxj?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 2024년을 위한 최고의 인공지능 측면의 허슬 아이디어: 지금 시작할 수 있는 수익성 있는 온라인 비즈니스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽 AI개발도구 '클로드코드' 소스 유출…\"직원실수 추정\"",
        "enTitle": "앤트로픽 AI개발도구 '클로드코드' 소스 유출…\"직원실수 추정\"",
        "date": "2026-04-01",
        "originalDate": "2026-03-31",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5sd3hDb1ppMml4Q21yNWhfazJzX05IMHpuMExqcjdrVmZvdzNwTzlEd25SZ0Foamp2NU93M1hVbWcwWnJ6Z0RKendXLTlzRzd0UktvTUZsRk81RE3SAWBBVV95cUxPWUZzN0xxdmNnbWxJQ0ZnVDBranBveENkWUlKZ3Q3NU5jVy1JTUx0cURqQWpNbDhhVzBpaHV0dXNKTmZVWFgySWpRTUcyUl84djYtX25mV1F3RWVjTHUwVnA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽 AI개발도구 '클로드코드' 소스 유출…\"직원실수 추정\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "“국민 과반수, AI 서비스로 챗GPT·제미나이 선택”",
        "enTitle": "“국민 과반수, AI 서비스로 챗GPT·제미나이 선택”",
        "date": "2026-04-01",
        "originalDate": "2026-03-31",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5MT2lzQ1lJMjBBWFZHNWxyeW9Pb1lOblcxVjRvWU1lWFA0dU9JMG1OU2pUamtNNUhLNWozbk9iWmdlTXRJbGNVbk8tdEdlRktNNXZxcDRFaVpzd2x3b1V3VGF4NXNrOUpLNnc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! “국민 과반수, AI 서비스로 챗GPT·제미나이 선택” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "산업과 시장을 바꾸는 AI 수익 기회 및 비즈니스 모델",
        "enTitle": "산업과 시장을 바꾸는 AI 수익 기회 및 비즈니스 모델",
        "date": "2026-04-01",
        "originalDate": "2026-03-31",
        "sourceName": "KPMG",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE4zTGFQRGRxNDNKcmF0QU8tVHZIcGFFLTU4R3JndW1TUEx0RFYtRkstYTJPSUF5Rk5VRlRLNElQNmVGbEpiZ1Brd0Z5NFB2VWcwVEdqWnRkVktZWXcybTBvd0poYmN6ZjRCWGlObUtkdFB0UQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 산업과 시장을 바꾸는 AI 수익 기회 및 비즈니스 모델 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
