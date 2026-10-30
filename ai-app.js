/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-30
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Sam Altman은 누구입니까? OpenAI CEO가 Z세대, AI 일자리 및 기업가 정신에 대해 말한 것; 교육, 경력, 남편, 가족, 자녀, 순 가치 및 최신 뉴스",
        "enTitle": "Who Is Sam Altman? What OpenAI CEO Said About Gen Z, AI Jobs And Entrepreneurship; Education, Career, Husband, Family, Children, Net Worth And Latest News",
        "date": "2026-10-30",
        "originalDate": "2026-10-29",
        "sourceName": "The Sunday Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwJBVV95cUxPdGpqZ0NQb3N5MG9JV1poVjNKMnMteklrZGNRSEEyVnpqQUpEaVc1RUhISDZkM01LclFMb0hqT2RQQ0d5VDN5UnFqdXAtYXNIa1hkWkhVZUF5cXlBYUdNMG1maERjMGNEYjBERjYwV3VKalI3Rjk5aTZSUHVIWHFBbEVPSFJrbnBjSnlaZm5KOW91NFpiOTVoYW5DdkVWVklzUmZqTDdEQ1hpTlI5eGk4NER4emtIWHRDZm1HcFBJMGNGV0hzSmNRMUFOeDNoZENnbTBsYlRidGJqTkJqcUl5SHFpNERrZFNKR2hDeFpnMTUzY0lPSUI4QUJNUHdzVmtLZUVZcV9yeDRXTXphQkR1RGR4cVljZUZsMElV0gGgAkFVX3lxTE1LNERLdVd6ZC1zaVdWc2tXU05hX094Tm81SW5QVEdGTDFydEViZURsalFXOGh3aVZTWjdISFNCYXRDeEh2NUxZZzQwLThPbkVGN0FnQkVWdHBFbU9XS2ZqTGtWeEkwNXEzM3hwRDZwaGRmdXNxdWc1LV9CYTQ2VkZkemxHZ1JLNFE5QVcydmdDbjRURU5MZzVNWDRMdl82aDlOeHVLMllyVHJ6RE1TUTNBZ3F0OWFBRDdGY01ldE50dVFwRGdfbTZRZjFaUzJ5alItazZuazJaUWRMdkQySUp4UDNUOXE5VmtvVnB4bUNXN3hzbHVVZlpLNE5nellhQ1dINFB6LTlwRGE4RnJISXVBN0hDX2QtNHJnc0hRclFlTA?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! Sam Altman은 누구입니까? OpenAI CEO가 Z세대, AI 일자리 및 기업가 정신에 대해 말한 것; 교육, 경력, 남편, 가족, 자녀, 순 가치 및 최신 뉴스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "네바다 노조, AI 일자리 창출과 파괴 사이에 끼인 정치인들",
        "enTitle": "Nevada unions, politicians caught between AI job creation and destruction",
        "date": "2026-10-30",
        "originalDate": "2026-10-29",
        "sourceName": "ETHRWorld.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPNWZXVDRuM0xMWGtINWY4WElfXzZkZU1PbWQ0bkRPUlB4QkVTdXoyQlJQUldnR2RQdHFPdDhyVFdyQ0FjSkxrRFpwMXdvNm8xeEoxQXVRQmxPQndZOXRxcEtlT0V2dW10RWhOSm1uejNQR3hBWXZsbXdoU01tMHVWVXZycUQtaUJsNDVkaG1uM0JJQllkaGhqTVVfUjk1OW5SUnp0UWhyZWc3dl9Nd1gzZFFxM3lWa3BxeklZSjk5VzR2Y19QNnhaYXpLTVVLOFlVa2V1VVJpYVd4VkhLaUpRQTAtaVRseGxNcHhQeUkyONIB9AFBVV95cUxPUE9FNWJhazNvR0gxZlhlcU1kdFdpQTJUT01VWjNwRE9jVTl3dUxQdjFTT0ZwTDNkS1Q1TUNVX29uTHFMaGZwSnJqcWZnZEh4RzZ2aE5hcms5WFlycEZ4T1d1X3FJZGlHWlcxaHdWakVmWGwwX0RBZGlRaVV2dTctRy1fVTZaZmo0VEVLa0xEMnVnVFYwNlo2cTB0WjJUZVJQSkRPZ0hONHRzT0w0T2dNS2ZxUW1BejlYVFZrb25aeTloTjNtTGFsNFhXUTVpREE0d1R6X1FJTk4wUlVpSWMzVHU4V0ZfM3ROVDNzelpieDV4Y25Z?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 네바다 노조, AI 일자리 창출과 파괴 사이에 끼인 정치인들 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 일의 미래를 바꾼다: J-K Gadzama LLP, 11월 11일 나이지리아 인력 관련 제19회 연례 공개 강연 개최",
        "enTitle": "AI Is Changing the Future of Work: J-K Gadzama LLP to Host 19th Annual Public Lecture on Nigeria’s Workforce, 11th Nov",
        "date": "2026-10-30",
        "originalDate": "2026-10-29",
        "sourceName": "BarristerNG.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQenBmcFp1aThPNzA0amZiMlRjbUd3cEhDSzd5RWRiZ1Z5OGhBajFpcFl0Y2NTZlF3M195c09URXpDOXY1NGdxbEpUbFdEb0xxUi1VOXJxYWdnYVZTQ2V4VC1zYVNmOElZRkZ3WUhkRnF1bml3MnJXVVU5WF9fRVBDeUFna2luNWcwVFotbW9XTEwwbDVVUGhpV0lmeDZBZTdfcDluMXdnaE1QVmtYM1U0ZUtWNU1teXpmanowUmNnZzQzblZjUzBzZUVtNA?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 일의 미래를 바꾼다: J-K Gadzama LLP, 11월 11일 나이지리아 인력 관련 제19회 연례 공개 강연 개최 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "다나아데이터, AI 건강관리 서비스 출시…검진부터 생활습관까지",
        "enTitle": "다나아데이터, AI 건강관리 서비스 출시…검진부터 생활습관까지",
        "date": "2026-10-30",
        "originalDate": "2026-10-30",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5LSXFSMHozVk03MXN6bmdrSFE5SGlfWFJZdy1xSXR3QVFCT1RZUzdrdDBpU0p2Tk5rT1k4aW5VeW1seHhYWWs4OXhrZkR3aE9QQ1lBN3dn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 다나아데이터, AI 건강관리 서비스 출시…검진부터 생활습관까지 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "GPT-6.1 Terra 소개",
        "enTitle": "GPT-6.1 Terra 소개",
        "date": "2026-10-30",
        "originalDate": "2026-10-30",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1wQmRIZ3hrNVVkSG0tOFA4aVJYM2JUMGFVclVXZGhlbDFPWXFIUmh0MVpmSndXQjNiQzJzLWFGcW0zMmxuaER4dVByNGFRdFphcnBkXzl1TXd6RU5Pd1RVRUtkRVZScU9U?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! GPT-6.1 Terra 소개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클립아트코리아, 챗GPT·클로드 연동 AI 이미지 검색 서비스 출시",
        "enTitle": "클립아트코리아, 챗GPT·클로드 연동 AI 이미지 검색 서비스 출시",
        "date": "2026-10-30",
        "originalDate": "2026-10-30",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1veGoyNi1hRXdmUzRqa3N3TzFBdUZ6UlZzSFpJWTV1dEFNQmZqY09TVjRTMmNtWDRFYzB0YXRuSWpZbWpjcUxVcFVGbk5mdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클립아트코리아, 챗GPT·클로드 연동 AI 이미지 검색 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
