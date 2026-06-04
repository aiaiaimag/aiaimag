/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-05
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 일자리 손실이 걱정되시나요? 확실성을 기다리지 마십시오",
        "enTitle": "Worried About AI Job Loss? Don't Wait For Certainty",
        "date": "2026-06-05",
        "originalDate": "2026-06-04",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQVXkxT0c2Mm5TUTlWc1V5S2lTdWRqNUM0UENEVW9XSm1FV1JKbmJ3VGU0UTI3YkdBVXhmdEVqQzlXS2RUMTZ3US1OM1pGeWtxTW1waW5sZzZzYnlEWGoxeHlXQ0lXX280LVI5dm5EVExyMXNLUWVySGtmU0VvWVU2VjdJMFUxcHlhOW1ZUjFIMllHX0xuT0F0clJwRkUzUldaRkRn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리 손실이 걱정되시나요? 확실성을 기다리지 마십시오 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "작업에 대해 알아볼 블로그 게시물 125개",
        "enTitle": "125 Blog Posts To Learn About Jobs",
        "date": "2026-06-05",
        "originalDate": "2026-06-04",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE54eTc5MEFlV3luQ1J5U2VRaENZQXp1MjZuRmo0MXNXUGVJaGFrYldVX2ZwLVF2TkNBQ2ViQnN6d3VrajBrWmVVRDUySnJiTFJrX0pYcGk4bWs5eVdHX2FvVm5SaXdISXQ5?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 작업에 대해 알아볼 블로그 게시물 125개 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "데이비드 솔로몬 (David Solomon): AI는 일자리 손실, 금융에서의 인간 상호 작용의 중요성, 엔트리 레벨 직업의 진화하는 풍토를 유발하지 않으면서 생산성을 향상시킬 것입니다 | 홀수 로트",
        "enTitle": "David Solomon: AI will enhance productivity without causing job loss, the importance of human interaction in finance, and the evolving landscape of entry-level jobs | Odd Lots",
        "date": "2026-06-05",
        "originalDate": "2026-06-04",
        "sourceName": "Crypto Briefing",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAJBVV95cUxOdTJFRVh0V1hpVUdKY09jMTM5UXRGa3gzR2xDX0E2ZlAtWkJpY2NNYl9OdENYNWtGa2g5QWp1SERFTjdYVmw4X0hDTXg0NXNEenBSRnY4TkZhY0xqY1dWbzZWVTUzZ1h3TzFVbHVFdEk0UHlZQ2FZTDNfSWZEemlVSXdlVGJHQWgxc01BTlp2WWxRZ1ZhTDl5V0VWYlhocmJpMVNFWWxiX2xIeFpGM29EVV8wUnhaUldaNHlTODdDR2g0WVlwemdoYXVkWUEtLXMtRl8zd2lrZUp6QWVMb3lvOFU1M3JXUzJzbEpVMk5NMWcwSnEyNG4tWFAtMzVyTWlFUVkySTMyZlgwZ0JRcWU3Y3dkb05wb1djeEFhc1hQRE96QUds?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 데이비드 솔로몬 (David Solomon): AI는 일자리 손실, 금융에서의 인간 상호 작용의 중요성, 엔트리 레벨 직업의 진화하는 풍토를 유발하지 않으면서 생산성을 향상시킬 것입니다 | 홀수 로트 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "르세라핌이 안드로이드와 제미나이로 일상 속에서 영감을 얻는 방법",
        "enTitle": "르세라핌이 안드로이드와 제미나이로 일상 속에서 영감을 얻는 방법",
        "date": "2026-06-05",
        "originalDate": "2026-06-04",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQajF6enprYU5Qd2FWMzZ2YVFTdVM4TzFwdWpQOGxuc3NMTy05YlBhdVF0MFRyVG9TdEpzVnE0UGd4bWQtTi1McTBGWmtXa25fRnA5VDhhUlVGWXJVWVNLaFFMNXhNc3RsM29lM2lKQ0txd1d0YkRNTTZSN1R5MWhUTGN3YXNkNGpJb3BRSXk3MlR2NnNfYlpTTThOb1JGMm83RW9F?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 르세라핌이 안드로이드와 제미나이로 일상 속에서 영감을 얻는 방법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타, AI모델 개발자용 도구 출시 지연…\"수익화 차질\"",
        "enTitle": "메타, AI모델 개발자용 도구 출시 지연…\"수익화 차질\"",
        "date": "2026-06-05",
        "originalDate": "2026-06-04",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1PVk15QWRYTzFHd01yQXpoRW1HVU1obU42bkxpTHZWQ2lJZUdnZklKMzB3Z3J5SGJheXFtTTRveGJwZTFZbFF1TzlQcXlxS1pDaDZzS2x3NlIwd2vSAWBBVV95cUxOOW52NkJFVGExNlY3M3dvcW5EcEF2RFF6MFl6LTl2dGxUWmpaMVA5UFNQYTJ6Q1VLbmttWEozcElTOXFFNGF0Z1hnZ2s0VW5ya0g5WWpvTWlKUVVEdkU0a3Q?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, AI모델 개발자용 도구 출시 지연…\"수익화 차질\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI로 설계·코딩·테스트 자동화...모바일 앱 출시 기간 단축하고 품질 높인다",
        "enTitle": "AI로 설계·코딩·테스트 자동화...모바일 앱 출시 기간 단축하고 품질 높인다",
        "date": "2026-06-05",
        "originalDate": "2026-06-04",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5WckFBYTVjc0lkbm1WbjVSaUZhampobXp1dkVhdDc1ZlFsT19MY19vcnR3QWNUdDh5Z1ZnUkt6QzA4Tm9YOEY1Y3p4cERCb3RaNl9hd3U1bVF1dFh5LXl4WTVNNF9nczlxbVE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI로 설계·코딩·테스트 자동화...모바일 앱 출시 기간 단축하고 품질 높인다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
