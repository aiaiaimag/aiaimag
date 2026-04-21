/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-22
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능은 인간을 위해 얼마나 많은 일자리를 창출할까?",
        "enTitle": "How many jobs will AI create for humans?",
        "date": "2026-04-22",
        "originalDate": "2026-04-21",
        "sourceName": "TechTarget",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOMGw2eGY4cEp0V0k1SzYxa3dsU1VqVU0xQkZBUEtFcDNMOUdkZmxmS1BrSjdkdDBndktXbXJqOUpzX0YyWS1lTG1YUjBmeWoteTV4c1lvdkR3T0x6a1FsNlVQcVN0bFVZbHVlUGdQRm0yWlgtYm5sSi1pRUxSU1FFT29tTTJYQVUxMEVj?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능은 인간을 위해 얼마나 많은 일자리를 창출할까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "찬란한 인공지능 미래를 위해 직업을 희생하세요",
        "enTitle": "Sacrifice your job for the glorious AI future",
        "date": "2026-04-22",
        "originalDate": "2026-04-21",
        "sourceName": "disconnect.blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9mWVNyVmNwME91YnBWT25YNl9zUXlOVHIwNVFBNEF0elRGaVRsajh5VjRZdkJJUVRxMGs3cGx3Sm43TmFsSWlrR0xWNmZ6Y3l5Z1JIUHFab3NZdFR0ek92Mm44OTBvX3Y2anloMXk1V0FmM1dKdlhETDB3?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 찬란한 인공지능 미래를 위해 직업을 희생하세요 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직업의 미래는 커리어 경로를 재구축하는 데 달려 있습니다.",
        "enTitle": "The Future Of Work Depends On Rebuilding Career Pathways",
        "date": "2026-04-22",
        "originalDate": "2026-04-21",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNVExpQ1ZqbHJDZXJCY3NEcHVZRXhtX21HR3N3U0xRa1pLMFQxZHpqd2djQzdNLW0wTkhyWXJHYndzQlRUVUw3d3h0T2pUaHJoZHZtb2dnMFpJMlVTZXZ1LXNnZjYzZUcwbTNodzR0RWFhbWJSSFVBSzNBZkoyeUc3TmRfRzQ2d21aU0JkWFVudF91blZheUVnbDBEMHhBS1RRQ2ZremZBMnNubjhwMVFaLUlZMHo?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 직업의 미래는 커리어 경로를 재구축하는 데 달려 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI가 앱 죽인다고 했는데… iOS·안드로이드 신규앱 출시 104% 급증",
        "enTitle": "AI가 앱 죽인다고 했는데… iOS·안드로이드 신규앱 출시 104% 급증",
        "date": "2026-04-22",
        "originalDate": "2026-04-21",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1PVEVqNG8yaHNMSTNWX3U5UHdGTXBUUGdZWExqYVk5bmZVdWJ3YmR0aFJ4NVRHMXZRSWJvOFVVd3J3VHFoNWZzSnN5VFpOVy1hemxjQU1WUU5vaHpYNWVQc3J3Uk9jdkgyUENzLTMxVVVkZlk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 앱 죽인다고 했는데… iOS·안드로이드 신규앱 출시 104% 급증 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "웍스피어 클릭, 'AI 한국어 역량 진단' 서비스 출시",
        "enTitle": "웍스피어 클릭, 'AI 한국어 역량 진단' 서비스 출시",
        "date": "2026-04-22",
        "originalDate": "2026-04-21",
        "sourceName": "아이뉴스24",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBWU1RQV1k0YlFTd3laUnBqbnh6blloSFlDTWtFVEhNT0tyS2IyQVBNRnFuY2k5WEc2UEd4aVNFX3Y3V3JVUWhnVmtGMG0?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 웍스피어 클릭, 'AI 한국어 역량 진단' 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[실제 써보니] 크롬 속 제미나이…검색·여행 '한 번에'",
        "enTitle": "[실제 써보니] 크롬 속 제미나이…검색·여행 '한 번에'",
        "date": "2026-04-22",
        "originalDate": "2026-04-21",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1naUhSem1jRWxFMnZwdG9aTmdRcnFNeFdaSHNmLTVfV0phZkJwM2wyeTJaU2x3aHZZLXRza01XMGxDQ1Vhbm9sTjRLMHJ6b0oxRHhfSEh1dUxQRWPSAWBBVV95cUxOZ0ZVWlNYYU10UnZ3Rkt3LTZRRWktZHJ6SkhoTm1YbVBpa0hseFp3Zzl3ZGJLVzRvaEJCZXJZVjBidDYxVUluSy1EcWZmYW1oLUhjREpMeWJGZTVIN0ZZUDc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [실제 써보니] 크롬 속 제미나이…검색·여행 '한 번에' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
