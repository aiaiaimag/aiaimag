/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "다음은 바이럴 AI 도쿄 드리프트 트렌드를 수행하고 나만의 재미있는 밈을 만드는 방법입니다.",
        "enTitle": "Here’s how to do that viral AI Tokyo Drift trend and make your own funny meme",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "The Tab",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxONmU1bDRkWm93MklJTEFheDdtQmhzRnZVTzJ2VzIzMmlyOUQzUS12SUYweVJ6Z1VWLU9BdXg3QTBZblRybmFlZWdENGFtM0c1VlFxNzgxRUVfcUoya3gzek85WVNWaTY3V0RBUFJUNGdfQnlxMXdNekRMS1NYZkNTVjRWcUdvTV9sTEpjZEw4UGRnQ1VyXzhIWTdXSzlBaG9BWG5DbjVyTVRfZw?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! 다음은 바이럴 AI 도쿄 드리프트 트렌드를 수행하고 나만의 재미있는 밈을 만드는 방법입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "WEF: AI의 신속한 상용화는 미래의 일자리를 재편할 태세입니다.",
        "enTitle": "WEF: Rapid commercialization of AI is poised to reshape future jobs",
        "date": "2026-02-26",
        "originalDate": "2026-02-25",
        "sourceName": "safety4sea",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOYjMwd0VSYjAtaTR6V1JTUlZIOVotVVRUMWtGLUVuUm9XeGJYbEJBMk1FRm9wSmZfOXlrbXZuTkk0bkZkR1dDVHdmdVdOSzRIWjBzRl9kUUpoWXQ3VmphekdZc05kenY1dXlMWEhCdGVRZlNhaHNUMGRJSm03WWt5QU84a2pNWGNydGtjOEh6b3NWRDROdnRhVw?oc=5",
        "isRepublished": false,
        "viralRate": "86%",
        "analysis": "글로벌 AI 트렌드 체크! WEF: AI의 신속한 상용화는 미래의 일자리를 재편할 태세입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "청년 성인을 위한 AI 기회 창출을 위한 Future of Work Fund",
        "enTitle": "Future of Work Fund to Boost AI Opportunities for Young Adults",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "fundsforNGOs",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOM1NyZWV6TklEOUJvY2w5eFM2QzJVdWc2WjVTSXAxOF9jV3VEQUdJbmJOR0JUX1k5MFFLWkprTEYza0FUWHlPbF9CMW9fNXdxd3ZvbWQ3alhReHRWc2t3WU5JR3BnamI5MTRBLWZ5X0ZmVnFNa2d6b0lRZlRRVmlNRHF4VDhlV09hSlNMT2JoM1VCZmx6MkE5SVdlYlhVODJteEhVeDNtdV90N0JXM09neGt0T2txc3PSAbwBQVVfeXFMUHhiNTZfWDI3dnJPVnRFRFhFdWtsRno1VVUyRjFicTZjRHNRTGpvQ00tVVdYWFBsNEJBbXdwc0Q1a1VCWXRfZFlBYjlDaHRnUDdhVmlTelVLaHgwUkROel95dTVQR0tHMzJhdE1lR01IdXBfcS0taS1MMGRrSWxlSkFYdk1jSFQ1ekxmcEZ5MFFaRXVpRzBENUp5SlozTUkwMVhnODFuUFE5Z0FNNVJMVGlUel9iQXJGdUZEbko?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "analysis": "글로벌 AI 트렌드 체크! 청년 성인을 위한 AI 기회 창출을 위한 Future of Work Fund 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신",
        "enTitle": "2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "세무사신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9rbVJQYnl0YXk1dHg0UUJUbV90UHdfM3Vac2FVYk4xU05UX3oxb1pwX0ZfTXlPTk1laGluZmFQYVBaQi1tMUgwWU0ycnZqQ0VKSzN3VnhlYU1oTzZzd2NLMzA0Rkp2LUc3TzRQZ3FR?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "analysis": "2030을 위한 AI 실무 팁! 2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬",
        "enTitle": "3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "한국세정신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB6c2Y4ZjE3SVVUTnZtSnVwWDFvcXpTb3l4NXJSYmtLM3Q4S25PTjZETFBBRXRVWF9UUTk4M05lNXNvS3JuY2xTMlRKcXVBUkZJNkJxc2tOVjBWOTE4eEtLX25rUVg?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "analysis": "2030을 위한 AI 실무 팁! 3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "상용 도구 버리고 ‘오픈소스·AI’ 택했다... 소규모 보안팀의 엔드포인트 생존법",
        "enTitle": "상용 도구 버리고 ‘오픈소스·AI’ 택했다... 소규모 보안팀의 엔드포인트 생존법",
        "date": "2026-02-26",
        "originalDate": "2026-02-26",
        "sourceName": "보안뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5OcDk0TTgzNWZrYXp5WFFTM0drR0VobDlEQW5ibUZaeGZjN2Z4YTNFaVVMckxNS3diQ19NSTdHcVhITUUxTlN2bzJjTkhSSlQ5akxvNDh3VFozYjM5STRN?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
        "analysis": "2030을 위한 AI 실무 팁! 상용 도구 버리고 ‘오픈소스·AI’ 택했다... 소규모 보안팀의 엔드포인트 생존법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
