/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "'AI는 중간 관리를 지울 것입니다': 골드만 삭스의 직업의 미래에 대한 큰 경고",
        "enTitle": "'AI Will Erase Middle Management': Goldman Sachs' Big Warning On Future Of Jobs",
        "date": "2026-10-10",
        "originalDate": "2026-10-08",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQYktEdFFvbTlRMUs4MEFNVkV2dWpMMWxQRC1fQlpHUWJtaWN6cDZYNTlzZXlxUlMxcEFhakFnUEQ3ZWJMY1Z6eUJwY1Y3S0FRazViS3NkSmZWaVNoV0lDYXg3OXd4Wm9vdnptZDJHblNuRUEzNzUyRDBTaVlLUjRteVZvQkVsNlo2WHpSd3kxOVhEbWFSUElZRnJKcHpNRUtJcnR6QWVsNHJjLVFGNTJSbVNCNDZzUXV1Y0tzTVFjRdIBxwFBVV95cUxONUR3eWp5akdQaHZkTWxPT08tbnI3WHFfZ0pjUnpjc1FERGFqeWdQN3NraFAyUUJ6LTNLb3BiNThGeXFCQ3BYYnVnYmVRWnVCbWM2Y2JIdlBiMURsd0NCUDFoR3d6T0NuVEVVYjZhaVpjSU44a3hKcTBqOF9iWXRUMGJwTjBGNExoWVQ0SVZYWWNYYnJ4SDlwaFRWc0F3N09MdmNqYW9URWNIREpYcHNqRkxidXBxa0NxbVJNMTRfSUxsS21SX2xz?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 'AI는 중간 관리를 지울 것입니다': 골드만 삭스의 직업의 미래에 대한 큰 경고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능과 일의 미래",
        "enTitle": "AI and the Future of Work",
        "date": "2026-10-10",
        "originalDate": "2026-10-07",
        "sourceName": "USBE and Information Technology",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBfTXh5X2VQaUdrN3JfaEN3cklLZVZublA5cGVBZ2pYb0V6QkRES3Jta3VhQk83b0RzbHVRdTk3S0VuWTBHZFlzXzhOVG4tdEIyQjNRRTVtRjVwV0NiWU5sbUlsTXBYaDdWN3FtZ2Y2YS3SAXtBVV95cUxQSG51VURwSUF5TW9HZlFiOEgtWEZoSGxkUV9PRkQ2N1dSTzNZYTcxaGw3MjR6cDBITUY0VHFIMjZKMzVjNWJsNlBPSUVqSkVnNVR4WWJrM3NZb0F1UDdOdi02eFdkNjRoc1pnY2ZKdUF4dm1xN0tnZnlKZzg?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능과 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 업무를 수행하는 방법을 가르치고 있습니다. 인공 지능이 우리를 대체할까요, 아니면 일하는 방식을 바꿀까요?",
        "enTitle": "AI is being taught how to do your job. Will artificial intelligence replace us, or just change the way we work?",
        "date": "2026-10-10",
        "originalDate": "2026-10-04",
        "sourceName": "CBS News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNVGR1UW82T0lfbHpsX3RoTEN5cDlWQXc4M2xVOFhnOVBpZloteEFMbmlqWUx5UWJ2cDJHMGxHb3A2TzlOY2RhQlotR3JZekh2Q213SVhhVHpLc3hySDNwRkozclJXUTNEQXRjZ3dISGVYM3Q0UVdwRWI4MmpqTk5qdGhYWmVxWTg1enV1T1U0YllHZUxFYmhVaQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 업무를 수행하는 방법을 가르치고 있습니다. 인공 지능이 우리를 대체할까요, 아니면 일하는 방식을 바꿀까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[10월7일] “비싸다던 클로드, 실제로는 챗GPT보다 5배 더 쓸 수 있었다”",
        "enTitle": "[10월7일] “비싸다던 클로드, 실제로는 챗GPT보다 5배 더 쓸 수 있었다”",
        "date": "2026-10-10",
        "originalDate": "2026-10-09",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE95UzlQUnhsNXBWZ3ZldktxV0V6YTg5Q1lyT05RWG9mRTJsVEZWTWRjNm9GSkNwaGdwRS12dHluWEE4b003Yms1bjBSaVdUNXF5and2N2RodFNWTm1kajRBZE90YWVIXzMzb3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [10월7일] “비싸다던 클로드, 실제로는 챗GPT보다 5배 더 쓸 수 있었다” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "미국·유럽에서도 AI가 ‘취업 사다리’",
        "enTitle": "미국·유럽에서도 AI가 ‘취업 사다리’",
        "date": "2026-10-10",
        "originalDate": "2026-10-09",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNMHlnZjhHZXkwZ256N1RXMU9XaDZXQmw0aGZDY1ZEWVhFRENFVmx6UUZsTTNSTkxVS21OQkFnVUF2R3R6aHhxdVVPN3hGNWdJYzBEUXNuWl9NNjAtb1JUcnJYaU5TeTRyaVZjNkZkUWlueGhiUU1jNDlycmlhSG0xbm9oVGlOdWJqeHhFVGRFaw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 미국·유럽에서도 AI가 ‘취업 사다리’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽, 'AI모욕' 이용자 차단…\"클로드 지속 학대시 대화 종료\"",
        "enTitle": "앤트로픽, 'AI모욕' 이용자 차단…\"클로드 지속 학대시 대화 종료\"",
        "date": "2026-10-10",
        "originalDate": "2026-10-09",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9RcUtfVnhiLXBnLUg0Y0RhWUJHM3h4dzk1Tk9UMmJqWWR5OG1hakEyUGViWkgxUDdSZmIyekNPY1dGUVRvWlJlQW5nZjlFTTRENnBtUFpKZXU0SmR2N2R2StIBYEFVX3lxTE9RcUtfVnhiLXBnLUg0Y0RhWUJHM3h4dzk1Tk9UMmJqWWR5OG1hakEyUGViWkgxUDdSZmIyekNPY1dGUVRvWlJlQW5nZjlFTTRENnBtUFpKZXU0SmR2N2R2Sg?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 'AI모욕' 이용자 차단…\"클로드 지속 학대시 대화 종료\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
