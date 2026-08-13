/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "‘코드 배우기’ 는 2010년의 일입니다. 이제 AI 부트캠프는 업무의 미래를 위한 곳입니다.",
        "enTitle": "‘Learn to code’ is so 2010 — now AI boot camps are where it’s at for the future of work",
        "date": "2026-08-14",
        "originalDate": "2026-08-13",
        "sourceName": "moneywise.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQTXZtQ3JUTHJETkgxNjdNUGV5a2xaaU82ZHV1eEcwM29haWFQTC04Um0zUVU1YUJvbkR2V3dtMFhHcmdXWkJSVWdaZm11OVhlRlVWWXVIcHRWcnJlWnFJTUNEenVZMi1lSkFGSUFHd3p6R3RtRVFwUEh1TVhCRjFtdFFXdw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! ‘코드 배우기’ 는 2010년의 일입니다. 이제 AI 부트캠프는 업무의 미래를 위한 곳입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능은 일자리를 파괴해야 했습니다. 대학살은 어디 있지?",
        "enTitle": "AI was supposed to destroy jobs. Where’s the carnage?",
        "date": "2026-08-14",
        "originalDate": "2026-08-12",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE85RVJfLU9XbWFoYlEzQ0hqdWxJVlJBZUxIcnk1VnZkR0JiVHNvSDVEelVmbDU4Ung2M3FJQUtncTNDUDR2NDJ0RkgxUWJEZEd4VzY5WUlJTGhGenVqOTZRcEYzcFNPc29xT2pYRUdFcF9kZFpEa2VXZQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능은 일자리를 파괴해야 했습니다. 대학살은 어디 있지? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "마크 주커버그 (Mark Zuckerberg) 는 일자리의 미래에 대해 논란의 여지가 있는 메시지를 보낸다.",
        "enTitle": "Mark Zuckerberg sends controversial message on the future of jobs",
        "date": "2026-08-14",
        "originalDate": "2026-08-12",
        "sourceName": "thestreet.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPVmstMFJHWVZpS3VLeDNnV2c0djdadDRUM0Fucldka1h5bjd2YUlPVHdlMzJiOVlTLW5ONkJrVkEyMkVsUXlSUkVZLWxGLTZ5X1d6VUFrcHVRaHNyMmhXMDZyLWt3VDJXSXNVc3d0YkZETU5ZQV9kOHNGYy1tejVFblEzRG5RWUE4WktlcA?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 마크 주커버그 (Mark Zuckerberg) 는 일자리의 미래에 대해 논란의 여지가 있는 메시지를 보낸다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "페이스북, 크리에이터 전용 앱 출시…AI가 댓글 읽고 답글 초안까지 만든다",
        "enTitle": "페이스북, 크리에이터 전용 앱 출시…AI가 댓글 읽고 답글 초안까지 만든다",
        "date": "2026-08-14",
        "originalDate": "2026-08-13",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBYZlpCUW41NHhSblVrQ25yV1M1b1hfd2FtV0t0SmpqcUVmWld1aXAzNFNxaTROYkNDX3JxTjRTYW9oRGV4ZDdzQmxuM0M3M3BaaXJLc0lR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 페이스북, 크리에이터 전용 앱 출시…AI가 댓글 읽고 답글 초안까지 만든다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[외신 헤드라인] 구글, 3주만에 제미나이 3.7 플래시 공개",
        "enTitle": "[외신 헤드라인] 구글, 3주만에 제미나이 3.7 플래시 공개",
        "date": "2026-08-14",
        "originalDate": "2026-08-13",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5SajRBNVdXaFF2Sk5HWnA1eUROcXhxREtuRDlHdW5OeE1DQXhqV3N1dWwyYnNwM1JCVWdzdVhzLW9MWGJseUxxbV80Mk9XLXc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [외신 헤드라인] 구글, 3주만에 제미나이 3.7 플래시 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[8월13일] 클로드 워터마크 도입에 불붙은 논쟁…\"AI가 썼다와 AI가 처리했다는 다르다\"",
        "enTitle": "[8월13일] 클로드 워터마크 도입에 불붙은 논쟁…\"AI가 썼다와 AI가 처리했다는 다르다\"",
        "date": "2026-08-14",
        "originalDate": "2026-08-13",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1qY2dMeWh2Um5WdWxXalZTR3NqNXVfSWg1M2ZCU0VfNURFX1VrQTYzRXBpVG9aQy1QWW5pbEFoeEJveE1ESEZuQnF6d29uSnE0bUNvVEhHUThNYmlVaGpKT19WMnhxWTN6NVE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [8월13일] 클로드 워터마크 도입에 불붙은 논쟁…\"AI가 썼다와 AI가 처리했다는 다르다\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
