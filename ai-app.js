/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다.",
        "enTitle": "Acrisure layoffs raise questions about AI and future of jobs",
        "date": "2026-05-23",
        "originalDate": "2026-05-22",
        "sourceName": "WWMT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPS3B5RDdFRlNzOW90aVNPcERoLVE0SnZTSHlhMENZcHROcFNDajdiZ0xHbWV0MTNCY2pIYnRNYXlndjM3X2VUcnlaWDllbmpodnk1OXNZRE9jeW1aOWRnYlNncDl0U2ptbEQ1a1lWRTQySzQ5SVlaeXBzeFFobGlBNXpFM1c3MHVUZDVtN1JGMDdGZ0RSbDByWXh6QzJ5QW1wN1BZVTZrQTFPVnJGNGhUbGxfR0p6STBKdWJOOHY2UGNKLXFPZkZqR2xGVQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "정책연구거버넌스센터와 AI4인도, AI 시대 '일자리의 미래' 보고서 발간",
        "enTitle": "Center of Policy Research and Governance and AI4India publish report on 'future of jobs' in the age of AI",
        "date": "2026-05-23",
        "originalDate": "2026-05-22",
        "sourceName": "ANI News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxQVXVMZTNOTmJ1YmZhMTc2azJIcWs3TkV4MkM5V3N5VjUxNW9LSkRaZl93ajJ6UmJyeWF3bHhib29fOV9ITHlyOGIzYmpDSU9ySkpDYW1oVjl1N0JrNTN3R1Zjb0ZyNjNEY2MzcHdWUkdya2o2LXFwMGtkS0lCSUFhcm5PNW5IY05RejZBN0tJUVV6OVNwcnptd0RCLUVtRERxMWcyS0FOeVhlQktpekM2cTFFUFp1cjR6VHh0Z1RiVXVSTlpDZ0VHbXpsVVh4c0pVLWRqam5CU2RMbEh0TTZhbjJYWWNYUExKemFmSTFHUDI3bVgxLV9jVi1Mbw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 정책연구거버넌스센터와 AI4인도, AI 시대 '일자리의 미래' 보고서 발간 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 새로운 커리어를 창출하고 있으며, 인도의 인력은 준비가되어 있지 않을 수 있습니다: CPRG 설립자",
        "enTitle": "AI is creating new careers, and India’s workforce may be unprepared: CPRG founder",
        "date": "2026-05-23",
        "originalDate": "2026-05-22",
        "sourceName": "EdexLive",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOaUJUSERFRFJMd09WU2oxM2hETkdhc3pwVDNTeFBLcmczVUNnR0Zyc2pvTHh0WjRzVWZzd1FIWERxRHBGREZkek9XTjRSQ2thVFlCZWVIUnJXa1RXLVFINjhld2xhU3BqVGgzOGQ0V3ZmWl94Vy1MRHpfZ0lYdmlDdk41S2JzbDZ4NVRjOUdUM0VRSEdMeWg3SkhMajZhNUFyMzF4VTNnZ3pIb3NCQXo1VlFieV9TbkNZMGQ00gHIAUFVX3lxTE1XUDNSQmwyX1JCZ19VWDJJX0Y0OW9LNUVsVEcwa1FGcFNjVzltSUVoZjc0MldVT1hEUzAtMXgybm9uZFNPMy10TkZvamNUeS1pSF94N041Zy11RHhPNVN5N3NVNjlacWY2Zjc4ZnJxZnZSQjhuejYwNXI4UzlnTzV0QThYQlNPUWZOdUFhTVRBRUkwMUpTQzM0ZDdPLUZ5R3ZOT3lsS0RCblhHdkZWM3QzbVloVnBPeW9JQWlRNmctYVk3Zldod2Fn?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 새로운 커리어를 창출하고 있으며, 인도의 인력은 준비가되어 있지 않을 수 있습니다: CPRG 설립자 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "네카오, '챗GPT+클로드' 멀티 AI 전략…업무 생산성 향상 '집중 투자'",
        "enTitle": "네카오, '챗GPT+클로드' 멀티 AI 전략…업무 생산성 향상 '집중 투자'",
        "date": "2026-05-23",
        "originalDate": "2026-05-22",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBWVGxacTZPRmdSNE1vQ0xETHN1VHZGa1k0N1NXYTdjbnQ4YS1tUDEwdUtoQ2hMejFhQWVyZ3dvSXg4MXZyQ19XVnBtVmEzQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 네카오, '챗GPT+클로드' 멀티 AI 전략…업무 생산성 향상 '집중 투자' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"AI 수익으로 지역공헌, 해고보다 근로단축\" 美 고용충격 대비 나섰다 - 머니투데이",
        "enTitle": "\"AI 수익으로 지역공헌, 해고보다 근로단축\" 美 고용충격 대비 나섰다 - 머니투데이",
        "date": "2026-05-23",
        "originalDate": "2026-05-22",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9xVUNsY2N3YlF1VVVfYk5pWDBiTzRZSG5EZHpxd0NJTmdIYkFvRzY0eU9nVGF0ZUtQRmNvYV8zbDdvSWJJa1ZwQ0FvRjlSSTYtVE9qa1FoY05Ic2xUNTBIUlJLZERHczRZ0gFuQVVfeXFMTlN1aFNRNUZZbUhMdFRSSDBHcXpqWVZBRV9yVHVWZVlHclpuRlRvbDNlWmZKcjR2SjN1TWRGVmFZcmFFRjdMcWQxZHlnNlZ0WW9kbUs4TEJCT2t6MW91X1FsMzA5N0o0MGNVaXVlaUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"AI 수익으로 지역공헌, 해고보다 근로단축\" 美 고용충격 대비 나섰다 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "축산물품질평가원, 인공지능(AI) 기술로 양돈 농가 생산성·수익성 높인다",
        "enTitle": "축산물품질평가원, 인공지능(AI) 기술로 양돈 농가 생산성·수익성 높인다",
        "date": "2026-05-23",
        "originalDate": "2026-05-22",
        "sourceName": "팜인사이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1vX1RkbkFPWmtJVGtmSUFBUkNYZHd2MkpEU2M3RXEySDBUVlctdzVFRFRkcmpJd1FNcFo0bDc1T2ZhOHBhRm8zaWw0WmRUTlBucl9GMml4dnBnLXpISWQ0aFdYcHI0dzIwRkRCbkJn?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 축산물품질평가원, 인공지능(AI) 기술로 양돈 농가 생산성·수익성 높인다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
