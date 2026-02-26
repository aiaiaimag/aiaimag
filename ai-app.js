/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-27
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT는 AI를 사용하여 수익을 창출하는 방법을 설명합니다.",
        "enTitle": "ChatGPT Explains How To Make Money Using AI",
        "date": "2026-02-27",
        "originalDate": "2026-02-26",
        "sourceName": "AOL.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPVVZtWTQtaWZTZUlJdnZmR0EzUmY0elROU0pNUVAtZlMyaE9aeGNjNE4xX2UyOGthYnhNbWYtaWs4b2hCZ3JocDYwVlpyZWRzYmw4ZVhfR3JnTm5YbnpIZUkzYm9OYlFBV0czZ1V0U04yNTdTTVV5Y18tZ2QxdkprXw?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT는 AI를 사용하여 수익을 창출하는 방법을 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 경영진이 미래의 직업에 대해 자신의 아이들에게 이야기하는 것",
        "enTitle": "What AI Executives Tell Their Own Kids About the Jobs of the Future",
        "date": "2026-02-27",
        "originalDate": "2026-02-26",
        "sourceName": "WSJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugNBVV95cUxOV09sdW1uQ0FKU25QMGwzRUJ4NTFqUlhTTTQyVkNCVFkydVRnam9yZVdlc0YxcTdwY3REQWl1b2Y5UVNzVW1SYlhZRE1TS015aVdwbjctT2JfTmlLOFlSZzVNekdNTmFJRUQxMDFMbVhIdUFYZTViemJFbVAzUkEwc1pVaXBLMVRycGYwT28xN01MeVB5RnZlNkppRms3dGxhRjFqRHNyRmRScUdlYU9EUjZBVGVyN1BJOGxOakRoRmtITlZxY21lZWNoUHdnUkotX0lVTEtDWnZiWTdyV21NcUVJOUgwZ210OG42VGlzbUNha2JSc3YwbWVxa2JmYkY4bVozcXBlRUlKenk2M1JQZzdVY0cyVEpEMWJuaHllQkJXeWt2Y0F2cjZXdWNEMTlWNXNkcHBtSkVqOGZld1VJa3ZrSlhaczFZbG1zNzdVcXlFb1JqeFdNY3hCZ0U5bl8wVVFZY0JIVHBIYy1COWFSeFFCZXpac1BpNnBTWDZXanNoWUZCZ0VYTFpYeGZLd3lJQV9ZTTNIREF1RnVzMjFvUHBHWjZ2UHg3eG1ZRFAxRFh3MjM4X0s2eVpn?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! AI 경영진이 미래의 직업에 대해 자신의 아이들에게 이야기하는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "모건 스탠리 (Morgan Stanley) 는 AI가 조기 퇴직을 허용하지 않을 것이라고 예측합니다. 대신, 아직 존재하지 않는 직업을 훈련시켜야합니다.",
        "enTitle": "Morgan Stanley predicts AI won’t let you retire early: Instead, you’ll have to train for jobs that don’t exist yet",
        "date": "2026-02-27",
        "originalDate": "2026-02-26",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPX0x2S19iX3k5ZkRlZmhzTXNkUzEyQXp0LVFyUExjRThTeTBuQ05Ya0ZCbGE1YXlva29PSjZES3ZZa2tHeEp3N29KV0dnRnp0bWhFRFFsdjc4R2tXTTZwTHBhU1VERVJIY3F6VG1DU0VJUFJIX0Z0RnNJdXRpb3lFU19nOXl3WmFrZkZfSWg5ZGtfdTE1eklYSTRKY2hyUWVVZnZ1YVhOdlRpalV5TG1rc3p4cWtoUGR0WGY5YkREUERETFNFbV9FZGxRZlJVZHpKbzZMazFxaHg?oc=5",
        "isRepublished": false,
        "viralRate": "86%",
        "analysis": "글로벌 AI 트렌드 체크! 모건 스탠리 (Morgan Stanley) 는 AI가 조기 퇴직을 허용하지 않을 것이라고 예측합니다. 대신, 아직 존재하지 않는 직업을 훈련시켜야합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "enTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "date": "2026-02-27",
        "originalDate": "2026-02-26",
        "sourceName": "컨슈머타임스(Consumertimes)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9NeV9MWXhLNGNDQ1hiQzFLU1RDWEx4ejlfb1psbW5jZW1YU1VKNkJrSXd6UnBRSlZTZmJoWkFmVUh1bVBLTGhBYU8xUnJWamktRmF0RDJIb3RJLUxZcURkalpOWEQ0ejhlTFE?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "2030을 위한 AI 실무 팁! AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신",
        "enTitle": "2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신",
        "date": "2026-02-27",
        "originalDate": "2026-02-26",
        "sourceName": "세무사신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9rbVJQYnl0YXk1dHg0UUJUbV90UHdfM3Vac2FVYk4xU05UX3oxb1pwX0ZfTXlPTk1laGluZmFQYVBaQi1tMUgwWU0ycnZqQ0VKSzN3VnhlYU1oTzZzd2NLMzA0Rkp2LUc3TzRQZ3FR?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "analysis": "2030을 위한 AI 실무 팁! 2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬",
        "enTitle": "3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬",
        "date": "2026-02-27",
        "originalDate": "2026-02-26",
        "sourceName": "한국세정신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB6c2Y4ZjE3SVVUTnZtSnVwWDFvcXpTb3l4NXJSYmtLM3Q4S25PTjZETFBBRXRVWF9UUTk4M05lNXNvS3JuY2xTMlRKcXVBUkZJNkJxc2tOVjBWOTE4eEtLX25rUVg?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "analysis": "2030을 위한 AI 실무 팁! 3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
