/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능이 인간을 대체할 수 있을까? 전문가들은 업무의 미래에 무게를 두고 있습니다.",
        "enTitle": "Can AI Replace Humans? Experts Weigh In On The Future Of Work",
        "date": "2026-07-28",
        "originalDate": "2026-07-27",
        "sourceName": "News18",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNX0dZWXZZcW9pSFYxaWRDSDBaOFV1VWdHWG1RNGRiMkhvVHVWZWhVN2RvLUgxakEzam5SMWRKYjhubTlRVlg1Y201WlFHNjJWZlh5WDZaMFRlOVBvcmg2UE9aN21XNkpRZnFNcC02MmdZdUdUNXBaeTQ0WG83ODV3ZHY2Y0pNck1sOHJSQ1MzcWt6bHdsanVnLTFZNWhhbHRqYTI0eTRWY3B1dm960gGyAUFVX3lxTE8wdUJlSFBZT3paVUpTYVV2cDBnSEs4ckhUOWdvV2Jla1JIdTJkV1A1ZVViRWw4ZkhDU2JxSDdYMHNhS0RPaE1hNEtZTGdyQk1BUTRpMmxmUnBfWXJTS1N1X3o4c2gwSnNOZkQ3RnZDMTZaX1lFTFQ3NTlhTTRXWm9mYWUtUFBuak0tMVNFblpmbGttMDBVb3g0cnliQzRjS2VvZWEzOGFpNERFeG8yc1RvQVE?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 인간을 대체할 수 있을까? 전문가들은 업무의 미래에 무게를 두고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 작업 종말은 아마도 곧 오지 않을 것입니다.",
        "enTitle": "The AI jobs apocalypse probably isn’t coming anytime soon",
        "date": "2026-07-28",
        "originalDate": "2026-07-25",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOTlRPeHY4ZnZBa010WDFSS1p4YUxWNzdVRWo3X0g0Vk5LUEdFcjBsbnBMWTAzdG9jS0FUMTFKNkNsSnJnMTlNR1BoVkhYQy1EZmN2ZV8yWVJKbTFVTWJwZ2F2TjFLcU1OSlc4WEt6dW14QU1LUkFZVnlVUEpmVE93bGlkNEhqajRR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI 작업 종말은 아마도 곧 오지 않을 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "기술이 우리의 일자리를 빼앗을까요? 이전에 들어본 적이 있습니다.",
        "enTitle": "Technology will take our jobs? We've heard that one before",
        "date": "2026-07-28",
        "originalDate": "2026-07-21",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQMy1pOEZDeWJfd0RLYlpJTWNSWmlVTUs0cjJzY1NhN1FNTTRhNG5XS2lxV0sxUC1OWHdrVlVYX1NaaXpiMnJiVG5oNmtFY0Jmb3ZWRS1wV0t4V2RPVERBeXBmOWFOaUtUVzlHVnBJVEd4UEJBNmsyQlhsSnBneXZmdkhPeHB0YWlURVJQcmF5UQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 기술이 우리의 일자리를 빼앗을까요? 이전에 들어본 적이 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드 5 ‘컨텍스트 엔지니어링’ 공개...“규칙 줄여야 성능 올라간다”",
        "enTitle": "클로드 5 ‘컨텍스트 엔지니어링’ 공개...“규칙 줄여야 성능 올라간다”",
        "date": "2026-07-28",
        "originalDate": "2026-07-27",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9CU04tSTZ3QmxrbUF2RG05MHhfY0lnTGxnM0hVZnRaeVlObjRIeEZTY0ZWUXN3ZFJzQktyeVhrSk1fSUpXUW5Kbm1TY1dPTjdvTjZ5Q2tqM0R4c0FwM0RPTzlWVHFWZVYtNXc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 5 ‘컨텍스트 엔지니어링’ 공개...“규칙 줄여야 성능 올라간다” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "경기도일자리포털 ‘잡아바’, 취업지원 서비스 무료 제공",
        "enTitle": "경기도일자리포털 ‘잡아바’, 취업지원 서비스 무료 제공",
        "date": "2026-07-28",
        "originalDate": "2026-07-27",
        "sourceName": "경기일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1hcWVIT1dJbEVYeVc2R250Mjg0Ul9WMnBjVHRsTDZ4X0dVaVJkMkU2bzFqb3JKWmlsaUx0SDB1elFucHlqQW54NFgxVVdRYkUtYUVsT0hrc2tfdFU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 경기도일자리포털 ‘잡아바’, 취업지원 서비스 무료 제공 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드로 양자컴퓨팅 서비스 이용…노르마, ‘Q 플랫폼 MCP’ 출시",
        "enTitle": "클로드로 양자컴퓨팅 서비스 이용…노르마, ‘Q 플랫폼 MCP’ 출시",
        "date": "2026-07-28",
        "originalDate": "2026-07-27",
        "sourceName": "서울경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE8tSVdFdmdUQ3VocGdCQzZvYlhEdlY3VmJzNS1rUGROVkg3TklYYkRkRVllOTA3LVYxZVdYV0pPXzF4RktLeUZ4eE9JRjR6R1QyQWfSAVNBVV95cUxOSVdic19KUFRWRkZyaDY4dm1sTi0tNkotVHFFcldnZkN3TjVVcWR2bUt6OW05bG84aDd1TGp3dXBqbUphcF9PdDNHd3E4eVJGZHlSdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드로 양자컴퓨팅 서비스 이용…노르마, ‘Q 플랫폼 MCP’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
