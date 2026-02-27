/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "맛이 좋으신가요? 인공지능 직업 묵시록 동안 일자리를 얻을 수 있다고 샘 알트먼은 말합니다.",
        "enTitle": "Have good taste? It may just get you a job during the AI jobs apocalypse, says Sam Altman",
        "date": "2026-02-28",
        "originalDate": "2026-02-27",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQRHIyUklTbklhdF9Hc2hEcWNWSEhKTjl3S2tVQUpQckNWdnhTel9GYWxkbFZGeWhhOHhSU2IwbDNueHZ3R2pqUGJnb1ZJaTE5Ql9TZ0tIS3NTOUlQV0VGQU1ENE9jT2syd05aT19TZFd5OTJ0NThWV0VkdVZQbTdyY3dReHdQY3FXa29uR0dVdWsxc29lUTlr?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! 맛이 좋으신가요? 인공지능 직업 묵시록 동안 일자리를 얻을 수 있다고 샘 알트먼은 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "아이들은 어떻게 할까요? 이번 주 일자리 손실은 쓰나미 이전의 파급력입니다.",
        "enTitle": "What are the kids going to do? This week’s job losses are the ripple before the tsunami",
        "date": "2026-02-28",
        "originalDate": "2026-02-27",
        "sourceName": "SMH.com.au",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOOWFiYjZIa2stV1RPZWx1aU1yWTE0SXJnenpoV1VYV3NWb1kzenhqbGY2aEhZMXI5RDlfS1ItclpWeTZQb2QwcHNsT29aTGVITGNOWU9xQldkajAySHN5OUg2RDFDQ2dWRS1rYlZEbUIySTZDMFJPaW5uWlEycTI1Q3cwVFhIOGxod2M1cEVQd2xXSXhXMkV4ckk1ZnlsM1VVdHB1WGVrenBBV2ZXUlBBa20xRmE4YmNpWEQ5MVRTdHN4R0V6UmUzdlh6OTdWbmxjb29EdGNn?oc=5",
        "isRepublished": false,
        "viralRate": "82%",
        "analysis": "글로벌 AI 트렌드 체크! 아이들은 어떻게 할까요? 이번 주 일자리 손실은 쓰나미 이전의 파급력입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "4000 작업 삭감: Afterpay 소유자 AI 도끼를 휘두를 옆의 차단",
        "enTitle": "4000 job cuts: Afterpay owner Block next to wield the AI axe",
        "date": "2026-02-28",
        "originalDate": "2026-02-27",
        "sourceName": "The Australian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxPYkF2OUVZQW9lWW1ER0lxUTRNX25zNktEZ1c4dGVXWVdHQ2RuYmhPb0ExX3RwZmNJNFB2MmJVWS1NaTZhbFdDUFdCa1plT29NVy16eFlYbW5jaVhiZXdVd1lCYkNkWll4bWQ2RlJVUS00MzRQbkJRcmdiY2pjSVl1b19fWGxlVFdzSzBwNTZaYVZXQmw4UWhDX3g5cWEwclJGU0tsNDE5N2ptMjd6d1RpQWFBZW85MVpiUTBCZE5sbTduUXpLYkZSUmQtYzhqdlVXSnY0bU9xanRPOGIxYkVkc3BGbkM3Q3RmSXFCMmNpMV_SAfYBQVVfeXFMTTFzZnBDSDQtTU13WFNtRXBjRk42Sk1WRy1EWWQ2Y2JSNlpFOS1RVEl1Q1hQZnduUEVyZ3dzVXZTdDhwLTFkTFJSUm5Nei1UQll6RC1YLUJreTFSeXRKZjBqNWk0WEEwYUE2S2hwLWZrb0ZkZjRaRHN0NzMwLTF3Sm1kM0lVdEpNQlJUaVdEbzZUaWRUSjItYzNtSGNyVnltMlp1RHNWWGlHbHdDYWNlM192azZVWGdQU3VUQjUyWkZEZllLQzVoYVhBMGNjY0I2Y2ZtbGpkdXVrZGswU3ZxNzc1cWlyczRRU0hsdVNTR0p0MUJHT2VR?oc=5",
        "isRepublished": false,
        "viralRate": "78%",
        "analysis": "글로벌 AI 트렌드 체크! 4000 작업 삭감: Afterpay 소유자 AI 도끼를 휘두를 옆의 차단 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI로 '자산'을 만드는 5단계 플레이북",
        "enTitle": "AI로 '자산'을 만드는 5단계 플레이북",
        "date": "2026-02-28",
        "originalDate": "2026-02-27",
        "sourceName": "브런치",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5VVW5NMVByOVdRQ3ZPUGt6VVMzT0hEQlNrUFVFeU45azhsaVUzamVhTTNzZnd1ODhzUmxfem1fSXlEQTJC?oc=5",
        "isRepublished": false,
        "viralRate": "75%",
        "analysis": "2030을 위한 AI 실무 팁! AI로 '자산'을 만드는 5단계 플레이북 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "enTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "date": "2026-02-28",
        "originalDate": "2026-02-26",
        "sourceName": "컨슈머타임스(Consumertimes)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9NeV9MWXhLNGNDQ1hiQzFLU1RDWEx4ejlfb1psbW5jZW1YU1VKNkJrSXd6UnBRSlZTZmJoWkFmVUh1bVBLTGhBYU8xUnJWamktRmF0RDJIb3RJLUxZcURkalpOWEQ0ejhlTFE?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "analysis": "2030을 위한 AI 실무 팁! AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신",
        "enTitle": "2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신",
        "date": "2026-02-28",
        "originalDate": "2026-02-26",
        "sourceName": "세무사신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9rbVJQYnl0YXk1dHg0UUJUbV90UHdfM3Vac2FVYk4xU05UX3oxb1pwX0ZfTXlPTk1laGluZmFQYVBaQi1tMUgwWU0ycnZqQ0VKSzN3VnhlYU1oTzZzd2NLMzA0Rkp2LUc3TzRQZ3FR?oc=5",
        "isRepublished": false,
        "viralRate": "82%",
        "analysis": "2030을 위한 AI 실무 팁! 2025년 귀속 법인세 신고, 세무사랑 ‘AI 자동 조정’으로 업무 혁신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
