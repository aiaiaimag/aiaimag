/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공 지능 시대에 인간 관계가 새로운 채용 우위입니까? – 그리고 이번 달의 직업과 기술의 다른 동향",
        "enTitle": "In the age of AI, are human connections the new hiring advantage? – and other trends in jobs and skills this month",
        "date": "2026-09-04",
        "originalDate": "2026-09-02",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOLTVYVlEzQmNTYV9vclV2bk1oRjVST2RSTnlhcHdmMUFwRENrLXFTb1hKOTlIc1Q0aXZEMk8xUjB5aW0yTUVtRHpRUkNvNGJYSmxxNjk1WDBLY2tGSTM5dTMwcU9YQTRxU0MxVm84OHo1T0pIcE14ZXRkTDBIN3Qxamx5UUMyYkNRdXRfb3hRX2ZSQnJGZ1pPTlNqSDVMZlNxek9CLVhFZmtwejVXY014NGlZNVEzMVAz?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공 지능 시대에 인간 관계가 새로운 채용 우위입니까? – 그리고 이번 달의 직업과 기술의 다른 동향 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "‘인공지능과 일의 미래’ 시리즈 — 대학이 학생들에게 다음 과제를 준비시키는 방법",
        "enTitle": "The ‘AI and Future of Work’ Series — How the University is preparing students for what is next",
        "date": "2026-09-04",
        "originalDate": "2026-09-02",
        "sourceName": "The Cavalier Daily",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPM2E2U0RYU09IWGlNTWRMS3FWQmRmQnAxUUZVckFKLURvcmFwdDdFemRqeF9NSFQzLXZ4bzRybVRjeTFyYVcxdWpWRVFvbDFIOGlWNnlzUEEzVkxpWWwtdDJVMTRObmZrLW5RRHM4TnVNYkFGTnpvWjNJRW43SVNNUjJDZ1p4cWlmNG9pQi1Wb20xalZQQjBxNnlQX1F5a1E5Q3puOU5TenZZUDlTWms2bldVTnFfQ3B2V29id2RyTFRfYzJ1VUhaZWppNDdyYzZwTWc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! ‘인공지능과 일의 미래’ 시리즈 — 대학이 학생들에게 다음 과제를 준비시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "향후 10년간 가장 빠르게 성장할 것으로 예상되는 미국 일자리 10개 중 6개가 한 산업에 속하며 이는 기술이나 AI가 아닙니다.",
        "enTitle": "6 of the 10 U.S. jobs projected to grow fastest over the next decade are in one industry—and it's not tech or AI",
        "date": "2026-09-04",
        "originalDate": "2026-09-02",
        "sourceName": "CNBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNYVQyUjJXdXNGdUhpb0FWQ1RwSGhJc3BMLXRSWTRJX0FCN3U4eHBwU3FxcDlYU0h1bnhXMWNfYUVuakRyRl9EY1JNU19BMzJhbWdWcmQzUVlRTFdSWWZIbjdDbW9nRWsxZlV5WEFMSUxSYjQtTXo0WVFOUDZtVk5UMTR6SFU5MVpJdGYyR3JKU2V4cENkbzYtQ3JFTm5uQjhhUFhXRFJMWkhncUHSAbABQVVfeXFMTjlxLUgydXFpcm1JR3htTmZ4UTFoNTdUXy1ZMkhTQkZjUWNMXzBWOGI4cmdfdml3eDRCMmNZX1BiNWQ4d2Z2SHVjSUp4bVRCbzBPVDZIMHcyZXJ1eHA5a2FZbDlMV1ZjUTBKSGpRUzB6bGJRM0Z4VlpINHVsY2IwaU5ycC1VME1YSll5ZXNyOXJCUVozM3lPN1MzNzRld0NadnJBOEI5WXg1N0UwWkpGNkY?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 향후 10년간 가장 빠르게 성장할 것으로 예상되는 미국 일자리 10개 중 6개가 한 산업에 속하며 이는 기술이나 AI가 아닙니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT·클로드·그록 한꺼번에 ’먹통’…이례적 동시 장애",
        "enTitle": "챗GPT·클로드·그록 한꺼번에 ’먹통’…이례적 동시 장애",
        "date": "2026-09-04",
        "originalDate": "2026-09-03",
        "sourceName": "연합뉴스TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1ZRGRJOGlzcGVyWFBqdFM3cWZDRVdzRGQxTURVa2g3ZzlTSDFIc1JJX2EydlUxS3dWcmFIZ0tWN1VOcEJDSzg1MzB6N2hDdzJuM3pHYUp4eHZSLTREUHRlcURoNjh5OWM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드·그록 한꺼번에 ’먹통’…이례적 동시 장애 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "챗GPT·클로드·그록 등 주요 AI 서비스, 한때 일제히 '먹통'",
        "enTitle": "챗GPT·클로드·그록 등 주요 AI 서비스, 한때 일제히 '먹통'",
        "date": "2026-09-04",
        "originalDate": "2026-09-03",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9PMWVMZk91TU9IZndkRUt3SmxHT1A5QTZqVVVLcjN6dWplMFlZVmVKa0xDTDd1Z2pqN1oyNGU2WlRCTS1PNHBUYXY5ZFBCZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드·그록 등 주요 AI 서비스, 한때 일제히 '먹통' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "Cloudflare, AI 기반 취약점 탐지 서비스 출시",
        "enTitle": "Cloudflare, AI 기반 취약점 탐지 서비스 출시",
        "date": "2026-09-04",
        "originalDate": "2026-09-03",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBrT2ZIWU95Zk5LeE5aZGRHQnJ5VGl1UGJNZ2ZkbEI0RlZLMFROVEdWYnZRb1d1MzJWV0k2RmlKTHpLOHF3Q1ZteTdOdGctbjctWkFDTFlGcDZ1OUk2SXNtWU9WWnVKM0hQQ2E5bEpIRkc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! Cloudflare, AI 기반 취약점 탐지 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
