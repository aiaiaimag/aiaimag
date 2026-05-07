/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "마크 쿠반 (Mark Cuban) 은 CEO가 AI를 이해하지 못하는 회사가 살아남지 못할 수도 있다고 경고합니다: '다른 직업에 대해 생각하기 시작하십시오'",
        "enTitle": "Mark Cuban Warns Companies Whose CEOs Don't Understand AI May Not Survive: 'Start To Think About Another Job'",
        "date": "2026-05-08",
        "originalDate": "2026-05-07",
        "sourceName": "Benzinga",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPWDhfLWMtVUM5cDlYeGRtaVhaSHBRUzg2TXhYQUhfbDhFNXNITkV5VkR3aWJDQV9vbDBlN0tqRFpleHhJZTl2bzFjR1ZVVHhTSlBOOURuWXlVLUw4YVVaUlZGOHdoem14VmV5S2JJTjJGMWY0NEdGX3AzQkFVSXltYUc0YWh6X0lLRFo4MmRxWFRlc3NINTNSVHNXRUJheDBaU0pGUXBONGwzejZlb2NyT09FaXFmTURZRjFQX0RDT2FVWFQ4QUw3YW5GbjBtTWVrd2IwNkVGYmxGVy1iaGMzSXVFM3JFVmYzM05adXNqcw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! 마크 쿠반 (Mark Cuban) 은 CEO가 AI를 이해하지 못하는 회사가 살아남지 못할 수도 있다고 경고합니다: '다른 직업에 대해 생각하기 시작하십시오' 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "역량에서 역량으로: AI가 업무의 미래를 가속화하는 방법 - 사람이 중요합니다",
        "enTitle": "From competency to capability: How AI is accelerating the future of work - People Matters",
        "date": "2026-05-08",
        "originalDate": "2026-05-07",
        "sourceName": "People Matters - HR News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNVnQ5Q3Y4R29EVjNaMXY0Yzh2WHRYbGFCRGpIYThTLXdQdkJFTUxyUHFqemRhWnJwOW9vb0JpZWI4SEpldDctTHkzU0gzSnJwVnZwcWZyS19aU0p4ODNyT3hYM21vNVhtc040ZTNRS0wwcHFNUlN0VWVrQmFpMFRJOExNTVJBRWdzS3IwYUEwWGU2NWZ6STE2aU9yaU13TnpwbHVaSzZXVUpvUE5JcU1QUngtX1phekF4QmF0UTVKVUl5bldCT3RuWTNBa3NFWGx3?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 역량에서 역량으로: AI가 업무의 미래를 가속화하는 방법 - 사람이 중요합니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "La Trobe University ‘AI and Future Employment Opportunities’ 패널 토론 doncludes",
        "enTitle": "La Trobe University ‘AI and Future Employment Opportunities’ panel discussion doncludes",
        "date": "2026-05-08",
        "originalDate": "2026-05-07",
        "sourceName": "dailynews.lk",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPb205Y1UzakhBaURHQWpod21LUWhHLWo5V1lHd1BvUW1iRDZncHdtUkZWdVdqZEZNTUwzb3cwQmRZTGZWNmo5eTJwNEo0OGRsSmNuWjBtdUhtVmpLTlVWdG5CRlc3ZnBCSDJrS0w3Vm1DNEVRb3JDaDhhQVRjdzh0XzE4bmFtS3h3WEJqVnB4Y00ySFB3aDBNQV9kMXpuY0lKVGlFVVFDNEQ1Wm9FdURQdl9DeGZRNE9xZTl4TU96SFRyMlNINzN4YnJ6R3M3bEk?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! La Trobe University ‘AI and Future Employment Opportunities’ 패널 토론 doncludes 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "이큐포올·소소한소통, 쉬운 글 AI 서비스 ‘온글’ 출시",
        "enTitle": "이큐포올·소소한소통, 쉬운 글 AI 서비스 ‘온글’ 출시",
        "date": "2026-05-08",
        "originalDate": "2026-05-07",
        "sourceName": "스트레이트뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1rYjdYRnRVZmEtdE5OanJoMFFPYklQYWpEdFZfUVhhdmh6cmdQeE9idExuNDIzeTFaTi1iclAxWXlPN3c1Y29TTm5VWHdyS2Y2dlNVSW9xTUs3ZkpFTVIzcXgycnBKMGcybDVvQmRSZmZINTDSAXdBVV95cUxOSkZwbF92cUkzeUgtazRUZFY3N2pIbE9DNzdnMi1fUWZRQlB2YUVoTVhQZ2dWMjcwS0k0MlM0cy1OWnZncUpLX3hpSHJxR3Bib2dCcFY1TnFUVlAwdkwxNUlTeHgzM0RDVWRqNmtwcGVkMG03VXBVUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 이큐포올·소소한소통, 쉬운 글 AI 서비스 ‘온글’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "이큐포올·소소한소통, ‘정보 문턱’ 낮추는 AI 서비스 ‘온글’ 전격 출시",
        "enTitle": "이큐포올·소소한소통, ‘정보 문턱’ 낮추는 AI 서비스 ‘온글’ 전격 출시",
        "date": "2026-05-08",
        "originalDate": "2026-05-07",
        "sourceName": "지이코노미",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ya0dpRXl3bkxyMGVIQ3BreEFEMmR0V3dUVTNYdDhxVGZZdzRvOFlBMVBYYTVsS1NhTnpNdk1kaGZQVmRtdllFeklwdmRRQnh4ZjBUWkF6WWhfOEhwUUZXaXVqM1pKaXc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 이큐포올·소소한소통, ‘정보 문턱’ 낮추는 AI 서비스 ‘온글’ 전격 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 쓰려다 ‘복붙 노예’ 됐다? PC 조종하는 클로드 사용법",
        "enTitle": "AI 쓰려다 ‘복붙 노예’ 됐다? PC 조종하는 클로드 사용법",
        "date": "2026-05-08",
        "originalDate": "2026-05-07",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9ZWTJfbkJrM1lwVm5UeDc5ZXVPc05OSnY0UF9aU0hITkE2YjljYVVoQW1MaEJmenE4ajdFTm0wSVJVdEJ1bVhpdE4xWlRGcjg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! AI 쓰려다 ‘복붙 노예’ 됐다? PC 조종하는 클로드 사용법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
