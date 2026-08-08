/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "아프리카의 차세대 인력: AI가 창출할 일자리",
        "enTitle": "Africa’s Next Workforce: The Jobs AI Will Create",
        "date": "2026-08-09",
        "originalDate": "2026-08-07",
        "sourceName": "Forbes Africa",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQSHRJR09zN0dMRnpLYjVad0RFTURCdmlfNVpkZU5LUFdzMXhSYXFUQ05qaFY3RnZoVE9SZElXaFQycG5jZzJOaXlOY1hWMUFOVEkwczFRakZjYUlWVmpSYUNsN09JR3FPaVBSOWFvdGRQX3RKcFhJTjlIY2dXeGNXblRpc3RzbkppaVI2V3Nrc1QwMzQwVFBnRktKVXZMVnNC?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 아프리카의 차세대 인력: AI가 창출할 일자리 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이",
        "enTitle": "Join us on 8-21-26 for “Hacking Productivity with AI” – Super Cyber Friday",
        "date": "2026-08-09",
        "originalDate": "2026-08-06",
        "sourceName": "CISO Series",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNYm9fSjlEdG9KVzJDcExtUWE4RENHVmJOdXhJaE5zY3hWSnFhekoxeGZYci1rVUxYTDFpX2JGY3ZTOTV1ckV4QUJIZVBlUzh4RGhYT1N2NEotU1haT1ExdlV0eE5Pa0RKY3EyS3N0SE9kX0FqQkVDMHRtamwyS29TQjdwX21lN2Q3cUlSLXptRjhlMUg3Q0oxSW1B?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "세 명의 AI 개척자가 일자리, 규제, AI의 미래를 놓고 충돌합니다.",
        "enTitle": "Three AI Pioneers Clash Over Jobs, Regulation And The Future Of AI",
        "date": "2026-08-09",
        "originalDate": "2026-08-06",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOcnR4QkVrUnFuczNyOUIzUl8tdUhhTVJQM0piQnlYZTlpQkxrTWRlV0d1Q1RuOUx0ZEtab2R4WXNCZm5pMkw5WS0wOG8wX0tfQkR5WHpzZkZXOTlSSHFZckV1bkRNOHRiSkktMkNhTzBMMnl3UHRlZFNSWUt4ZS1CZUE0U1YwaG5meVZueXZR?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 세 명의 AI 개척자가 일자리, 규제, AI의 미래를 놓고 충돌합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "‘클로드’에 백업 맡겼더니 홈 디렉토리 전체 삭제...\"미안, 오타였다\"",
        "enTitle": "‘클로드’에 백업 맡겼더니 홈 디렉토리 전체 삭제...\"미안, 오타였다\"",
        "date": "2026-08-09",
        "originalDate": "2026-08-08",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFA0RlBBYlZrSHFVaFVHWXRkUTBtVmt2ZXkzVHRId0JudFdXZjdTWHJRTkxCOHpoTW9GSmlRY3o5WlRqbmt4dHlkZzVFUEozQzVZSWpkb3I3Y3pnaWVoNzl2X1ZXZi11d0VhS1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ‘클로드’에 백업 맡겼더니 홈 디렉토리 전체 삭제...\"미안, 오타였다\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "네이버, AI 수익화 확장…AI팩토리 새 성장축 키운다",
        "enTitle": "네이버, AI 수익화 확장…AI팩토리 새 성장축 키운다",
        "date": "2026-08-09",
        "originalDate": "2026-08-08",
        "sourceName": "Naver Blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQNlcxWUpWRmZXTFpHRGNHbFIxbmlGaXNydlJnZnljLWdsSFJwakhjekJtQ1o2MGt4TWRFUER5Y3ZEcW9zeWFRcXZBWUVBaGNhSWxrTTNsczVnX0dqd01ZSEs4UXdnNndqeU9qaUZKOWo1MzRrRExYYnpCTXVVVXJwdXVxUW53eVFObGJIN3RFMA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, AI 수익화 확장…AI팩토리 새 성장축 키운다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "하이퍼커브, AI 취업 에이전트 ‘마이커리어AI’ 오픈 베타 개시… 취업 준비 패러다임 혁신",
        "enTitle": "하이퍼커브, AI 취업 에이전트 ‘마이커리어AI’ 오픈 베타 개시… 취업 준비 패러다임 혁신",
        "date": "2026-08-09",
        "originalDate": "2026-08-08",
        "sourceName": "국민기자뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE45bnQ5a09XYkFXbW5sbG93WmJCdjRPdnZpaXpwT25BYTNHT2otNXRaOHFHdFRWNGdsZTJuWllVYnk3ejJEV3c3Yi1jaFR0M3U3TjVEV1ppTDFERWZzNk9FdVZDRdIBZ0FVX3lxTE1KRmJzTU5oUHpkTThCNmJBMUdjeDJQZEkxQWxLMV92UVltQ1hyQlBESWlvcU02ZExDYk9URTFtb3o4eVF3ZF9xN3ZPYkNnNDk5T0Z4dUw5dlZyaTAwU09XVnduUUJtUVk?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 하이퍼커브, AI 취업 에이전트 ‘마이커리어AI’ 오픈 베타 개시… 취업 준비 패러다임 혁신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
