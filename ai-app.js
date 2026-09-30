/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-30
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "구직자들은 화요일에 보스턴 AI 주간을 위해 보스턴 대학을 포장했습니다.",
        "enTitle": "Job seekers packed Boston University on Tuesday for Boston AI Week.",
        "date": "2026-09-30",
        "originalDate": "2026-09-29",
        "sourceName": "facebook.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOSW9lOUI4QldhQllFSExrUGZPc21nN0FCMGFHd3NPVmItcHdjbEp3azF2YlR0SmtCYWRwalJySUtQTnhkQUhGREtCckl3TFhJRjc5WUg3a29sd0ZRMlFRc2ZLemFSUEUxYWkwYlAyM2lYWHhxeXNJWHlLN3FINjE5OHRaTGxpSDBibGk5b29RUkNpWWhSUi0zUTl4Qnp5Ymh1dG5yRjNHY3haRWt5VklsSVBFTUo0RndmNkhNMGFTWldPZk1reS1N?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 구직자들은 화요일에 보스턴 AI 주간을 위해 보스턴 대학을 포장했습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "취업 사기는 더욱 정교해졌습니다. 이를 발견하고 방지하는 방법은 다음과 같습니다.",
        "enTitle": "Job scams have gotten more sophisticated. Here’s how to spot and avoid them.",
        "date": "2026-09-30",
        "originalDate": "2026-09-29",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQWU03azB0NEdvSmoxeTBXZENOS0NhUU8yVUh1aHQxNm1IZUJBcHN3Rl9iZWM3OFRpM0dKRW4tRVgteVE5am0zZC1nVTYyT1RGbGk1eUtscmZ2aHNzSTdfNnVZZlRTcmk3bVVlampRYTV0Tm4wZGtDaHU1UnU0WG9Pb2d2ZG5aSm9yOWV4Y1Bydkt5MlJTWFZCZFJhQWxvVlFESVV3X3VpWTQ4SVBtLUFxRWFOV2NmejJuUlE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 취업 사기는 더욱 정교해졌습니다. 이를 발견하고 방지하는 방법은 다음과 같습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인력 이동: 미국 내 미래 일자리를 위한 기술 및 경로",
        "enTitle": "Workforce in motion: Skills and pathways to future jobs in the United States",
        "date": "2026-09-30",
        "originalDate": "2026-09-29",
        "sourceName": "McKinsey & Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOWnRQelpmc0kxV2JCaHpiZUxSSndBVnlXT2YzNEpudGpFZWUtcmtFUUNJZV9xLUdJMFBKMDE0b2pIaVZ0TWszREI0YzZZRXg4M0w1YTE2UERuV29TaEtMTzl4bllxcGY5UElVajFRRjJtYnpTWUF0eEVIV2JHWHRFVEpMa1BwTGNwaXk4WlFMYk1sLXhSVFdJaVNpTGJjU05neklXamtXVHp4WFZ4b1VwWDFDUlQxcW12?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인력 이동: 미국 내 미래 일자리를 위한 기술 및 경로 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "DevDay 2026 주요 발표",
        "enTitle": "DevDay 2026 주요 발표",
        "date": "2026-09-30",
        "originalDate": "2026-09-29",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBRNlRWMjc4Ykd0NUIxVUF5ZTNyS1dfQmNhNWNRQVFUVllabHZCYW5SR1UwSXMwRFNCRTI4NW50NEs0UHBWSVM1RjF1RVpOT1NoNXV2ZEdfRnJYbG81SHc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! DevDay 2026 주요 발표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "에이치티비욘드, 아파트 생활 플랫폼 ‘바이비’ AI 관리자앱 출시… 새 미션도 첫 공개",
        "enTitle": "에이치티비욘드, 아파트 생활 플랫폼 ‘바이비’ AI 관리자앱 출시… 새 미션도 첫 공개",
        "date": "2026-09-30",
        "originalDate": "2026-09-29",
        "sourceName": "뉴스와이어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9pUDFfLVhfWHdldDZjc2YzRWJXSzNjTkFaUFVabzdtNjBvXzdsNGdXMWtZekFPd0RLdFhSRS1zSzRHWkdGbllPRzVsNVJQaXZBNTdOTlpTWXotNmM3eVlR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 에이치티비욘드, 아파트 생활 플랫폼 ‘바이비’ AI 관리자앱 출시… 새 미션도 첫 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "KT, ‘마이 AI’ 탑재한 마이케이티 앱 출시…통신 서비스 편의성 높인다",
        "enTitle": "KT, ‘마이 AI’ 탑재한 마이케이티 앱 출시…통신 서비스 편의성 높인다",
        "date": "2026-09-30",
        "originalDate": "2026-09-29",
        "sourceName": "데일리포스트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5PemNiem0ycTV0N29CdUd4UFpZWnpQYzJ6MXkyT3o4MlB3OGZMdU5VQzYzb0tjSWlFZDdYM3JQU3pkcV9XMU1vRlZYT2V2NmZmMzlXazN6c2duOU1Ra0hBZl83Vm96dFlib29NTHh6WdIBc0FVX3lxTE5ESmRINklCY0FBWHhfUTBqdmo5LXJCVnZuemZWTHhoSVJLaXlQdUtNM0VoQ2xmOVhPOEQ2eXotVFRVZ3pYRG5PckdaV1NUUkQ2aUlXTjB0YmxkdEpCd1F6N1I0TlFqbXYyUjU5ZlhJTVlqSkk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! KT, ‘마이 AI’ 탑재한 마이케이티 앱 출시…통신 서비스 편의성 높인다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
