/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "HackerRank의 AI 면접관은 취업 면접이 어떻게 될 수 있는지 엿볼 수 있습니다.",
        "enTitle": "HackerRank’s AI interviewer offers a glimpse into what job interviews could become",
        "date": "2026-10-06",
        "originalDate": "2026-10-05",
        "sourceName": "TechCrunch",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPUUEydTd1MnFMN1gyRzNvdnBTYi01R2hBazZLQnVYNkpCTHdaamY5cWkxRG0ydnc1eHlyUTdUTW00Tk5XS1ZMMHo1amlDTDNQQ3lvdDRleDhTWFdFS05OZUdtUkswaENEUjA0eTQxUUdfekEzajVwNlVuX0tpSUlPNFkxZ29YbUNlYk9wVGl1c1A2RW5TNzdKNlZuSEpEcmJ3dzBBZmdTbkIxX3E3cWlmNmtIU2FUc0k?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! HackerRank의 AI 면접관은 취업 면접이 어떻게 될 수 있는지 엿볼 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Zarb 동창은 일의 미래에 대한 인간적 관점을 공유합니다",
        "enTitle": "Zarb Alumni Share a Human Perspective on the Future of Work",
        "date": "2026-10-06",
        "originalDate": "2026-10-05",
        "sourceName": "Hofstra University News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMGxyN2d6X2NLQzBIZ185aUlHVDdMZVZzQ3BDa2VsNkNYUlNHNzJjMXdKeGllM3pXbkRreE5WUFphWkRoY3JnakRycnlIWlVBNWp5N2FoQVY3cTlRT0hFN1BJUjI5ZFFRQTZDQW1XMVoySHl1dExvMWp1VDl1VGlBNzdaSGVlTkQ4RExiUTlHbWVqT19RSEFzREVWT3k?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Zarb 동창은 일의 미래에 대한 인간적 관점을 공유합니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 업무를 수행하는 방법을 가르치고 있습니다. 인공 지능이 우리를 대체할까요, 아니면 일하는 방식을 바꿀까요?",
        "enTitle": "AI is being taught how to do your job. Will artificial intelligence replace us, or just change the way we work?",
        "date": "2026-10-06",
        "originalDate": "2026-10-04",
        "sourceName": "CBS News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNVGR1UW82T0lfbHpsX3RoTEN5cDlWQXc4M2xVOFhnOVBpZloteEFMbmlqWUx5UWJ2cDJHMGxHb3A2TzlOY2RhQlotR3JZekh2Q213SVhhVHpLc3hySDNwRkozclJXUTNEQXRjZ3dISGVYM3Q0UVdwRWI4MmpqTk5qdGhYWmVxWTg1enV1T1U0YllHZUxFYmhVaQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 업무를 수행하는 방법을 가르치고 있습니다. 인공 지능이 우리를 대체할까요, 아니면 일하는 방식을 바꿀까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "KT, ‘AI Festa 2026’서 AX 기술 공개…데이터센터부터 생활 서비스까지",
        "enTitle": "KT, ‘AI Festa 2026’서 AX 기술 공개…데이터센터부터 생활 서비스까지",
        "date": "2026-10-06",
        "originalDate": "2026-10-06",
        "sourceName": "서울타임즈뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5kSUVEbG5NeWpuVVQ4WjczRkNPTnhzcUp6cnl0N2JZS25DRG81ZWtpc3V2QWFVYUpTOFd6M05KVWV1bXJFRHpMOFRsckxMc3dWRXUwUzdsbGlwU3l2TVpjYUtwYndIR1QzU0dn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! KT, ‘AI Festa 2026’서 AX 기술 공개…데이터센터부터 생활 서비스까지 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "클로드 이어 챗GPT도 텍스트 워터마크 적용…EU지역 우선 적용",
        "enTitle": "클로드 이어 챗GPT도 텍스트 워터마크 적용…EU지역 우선 적용",
        "date": "2026-10-06",
        "originalDate": "2026-10-05",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE55b1FiLUEySzI3OWEzQjVFWjdRUUxsNTJxQ3RhNV81dU5DOEVGVW95Yld1R1VhTkwzSWROSGpKaDFtX2ZRT2VkaU85SkF6ODVjY3FXYzFZWDgwQXlQNlpEYdIBYEFVX3lxTE55b1FiLUEySzI3OWEzQjVFWjdRUUxsNTJxQ3RhNV81dU5DOEVGVW95Yld1R1VhTkwzSWROSGpKaDFtX2ZRT2VkaU85SkF6ODVjY3FXYzFZWDgwQXlQNlpEYQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 이어 챗GPT도 텍스트 워터마크 적용…EU지역 우선 적용 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드, 3개월 간 논문 36편 작성…새로운 'AI 과학 연구법' 조명",
        "enTitle": "클로드, 3개월 간 논문 36편 작성…새로운 'AI 과학 연구법' 조명",
        "date": "2026-10-06",
        "originalDate": "2026-10-05",
        "sourceName": "aitimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE14azJtb05ZUVNBc1ZiQmtHc0Jjai1haS1jaHJjM05nNndoUWhiX1lNMzVsYTg3SWcyVTJmeWl3TzZOVWJLTmQzLUd4b2laWFAtRVpLNW52VlBrRF9QUFdfaFpabmdpdjJ3WFE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드, 3개월 간 논문 36편 작성…새로운 'AI 과학 연구법' 조명 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
