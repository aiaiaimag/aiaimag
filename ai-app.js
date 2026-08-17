/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "‘인공지능의 대부’ 는 대량 실업이 도래하고 있다고 예측한다.",
        "enTitle": "‘Godfather of AI’ predicts mass unemployment is on its way",
        "date": "2026-08-18",
        "originalDate": "2026-08-16",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPQmxheVQtQ3RYOGwwbkpaWmpyZlIzVmdmemJkS2F4bVBsUEs0NW5zRW80RFNYZ2hUbjlxMnBxZHc2VzMwVDVWZGp3bEtVQ2JFdWFMUTIzbHVvdEJiekc3MTNOeEhCRVo4eFBBWkVldW5pbUZzQkEyS3RoV3EyRkhUVmlDd1hnS0ltbm9QOHg3eC1SUVFEeVNEdERXYnRTM3NDbzQ5Um1GaEhfOGFUMmtLbk5TeWxzVjg?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! ‘인공지능의 대부’ 는 대량 실업이 도래하고 있다고 예측한다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 위기에서 살아남을 10가지 직업",
        "enTitle": "10 jobs that will survive the AI crunch",
        "date": "2026-08-18",
        "originalDate": "2026-08-13",
        "sourceName": "The Telegraph",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPclcteFh1SDdGSGlfZ2RXNHJVaVpJbllWVER1VGtRdGx3UWY0Q1p1dno1WS1lNzNSY0RVTm9HbGN1SjFDNGhpMnk1VXhjeTVmbmNQWDlIQXdlRjhmdDRXZTZnX0hsYjBMUnc0UW1ERktOaDBVMmh4MldMOVlBTFl5NkhQbWJpcV8wRTlES216Yzh1dFFlUlF5N3EzN2tRdlRZQ2pRYVV5a1p6VjNCYW9uVQ?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! AI 위기에서 살아남을 10가지 직업 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능은 일자리를 파괴해야 했습니다. 대학살은 어디 있지?",
        "enTitle": "AI was supposed to destroy jobs. Where’s the carnage?",
        "date": "2026-08-18",
        "originalDate": "2026-08-12",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE85RVJfLU9XbWFoYlEzQ0hqdWxJVlJBZUxIcnk1VnZkR0JiVHNvSDVEelVmbDU4Ung2M3FJQUtncTNDUDR2NDJ0RkgxUWJEZEd4VzY5WUlJTGhGenVqOTZRcEYzcFNPc29xT2pYRUdFcF9kZFpEa2VXZQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능은 일자리를 파괴해야 했습니다. 대학살은 어디 있지? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT, Google Cloud 실시간 동기화로 Workspace 탭 전환 없앤다",
        "enTitle": "ChatGPT, Google Cloud 실시간 동기화로 Workspace 탭 전환 없앤다",
        "date": "2026-08-18",
        "originalDate": "2026-08-17",
        "sourceName": "Hypebeast.KR",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOVWlKa1NJOThiR0YtdWRNcW9qczZqT2Frb2FGeURvTGRNM18zTXg1WG9FZ2pPcHVNYWNvbGtmbE9HV2ZCRy14YUFubFdPVFViMXB6UzlRU2k1Q1hmT3hBOHlsajNBTk00bTdyTllPQXZodktIOXB0UWluV0JQMGtWMThPSHBGZ0ZHTWc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT, Google Cloud 실시간 동기화로 Workspace 탭 전환 없앤다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 뉴스] 구글 ‘제미나이 3.7 플래시’ 출시…가격 낮추고 코딩·업무 자동화 강화",
        "enTitle": "[AI 뉴스] 구글 ‘제미나이 3.7 플래시’ 출시…가격 낮추고 코딩·업무 자동화 강화",
        "date": "2026-08-18",
        "originalDate": "2026-08-17",
        "sourceName": "아웃소싱타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9JTHhkVk1UQU5qamdwV2hlVzgtMDRfUWFWWmRwVnp6SE5HcEhyZE1GVkw2TFowWmJHcGdtZ3VtVmJoVnhLUHFXakl2RENOZUhpRUFGdXBsM0t6YW5YUkhwY3dPd1ljS240X3o3eFphMG5oUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 뉴스] 구글 ‘제미나이 3.7 플래시’ 출시…가격 낮추고 코딩·업무 자동화 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "빅테크, 1276조 투자 vs 중소기업 AI 지출, 0.1%… '수익 회수' 시험대",
        "enTitle": "빅테크, 1276조 투자 vs 중소기업 AI 지출, 0.1%… '수익 회수' 시험대",
        "date": "2026-08-18",
        "originalDate": "2026-08-17",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNeFRYbl9aV3pjaVFzWUNmamNudUo3am1DcldqSGs0bUVEV1VjTFotaDVJaHhjcFppQi1MdmluOEVNVFVtNXFWZkR5Z2lyVm03OHdWN2RMbUgxcGxYSVZNWEVNd0FXNXpmNkc3UGROcGxnTV9KQjlGcUp6X1g4WGFpSTJodU15aGg5?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 빅테크, 1276조 투자 vs 중소기업 AI 지출, 0.1%… '수익 회수' 시험대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
