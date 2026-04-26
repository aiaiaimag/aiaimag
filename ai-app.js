/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-27
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "'급진화 된 느낌': 메타 AI 임원이 에이전트가 최고 근로자를 때리는 것을 목격했습니다. 이제 그녀는 Z세대가 사라지기 전에 일자리를 찾을 수 있도록 비영리 단체를 설립했습니다.",
        "enTitle": "'You feel radicalized': A Meta AI exec watched agents beat her top workers. Now she's built a nonprofit to help Gen Z find jobs before they disappear",
        "date": "2026-04-27",
        "originalDate": "2026-04-26",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPNDk5SnJIXzZFTDUwbVJZbzJnZTBZalE1STZnXzhnX3d4d180ZVdTNTlPVWdJQnNzUXdaZkZYdkZKZFlteTk2SE5kcVk1bEZDZ2ctaFp2ZWZ0SlkwY3lFc21PVDBxV3BsS0FCcExQQTZfckItSktUU1hLUUk2VWVyYXZYWXdzU2Yxb2l3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! '급진화 된 느낌': 메타 AI 임원이 에이전트가 최고 근로자를 때리는 것을 목격했습니다. 이제 그녀는 Z세대가 사라지기 전에 일자리를 찾을 수 있도록 비영리 단체를 설립했습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "취업 시장을 재편하기 위한 커다란 'A' 세트 (AI가 아님)",
        "enTitle": "The big 'A' set to reshape the job market (it's not AI)",
        "date": "2026-04-27",
        "originalDate": "2026-04-26",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE1OVmdjaG0yalIxYklEWmppcFRZSVoyczkyN0RGTE9UTG5DWFFGZ19PQmdLek01YV9XdThfSUwxeE5mVnhUcG5EOWFrVTZISUo0YnNJWkJOMXI5VHM5RjQ5S3FZbHdXN3dCQnR6ZWhWNnVjVmtNTkZlTXI2Qms?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 취업 시장을 재편하기 위한 커다란 'A' 세트 (AI가 아님) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일론 머스크 (Elon Musk) 는 AI가 풍요로운 세상을 만들 것이기 때문에 은퇴를 위한 저축은 무의미하다고 말합니다: ‘그것은 중요하지 않을 것입니다’",
        "enTitle": "Elon Musk says saving for retirement is irrelevant because AI is going to create a world of abundance: ‘It won't matter’",
        "date": "2026-04-27",
        "originalDate": "2026-04-26",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNUEJ0SDRuVTVFQ2pmNjNmcFlrbi1ubUh3QjRDcW5nYnotMUVvNHlFOHhPMEtpaWRGenlzR2pQU0RYSGFjNjliYnBnTU5hOXFIdl9rRVRYODNsR1Z4dEl1NVBUVU4xY2hNdEZtbFZqdEQ1ajg1ZmE0Nll1c3FRZjJLckt4X1owSTFLNk1pVlBPdTNwXzlNVEktcnQ3bm9sN20zYVFOQkpKaDVXU0RUQ1FnOFNaSjItZUVDRXZFbQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 일론 머스크 (Elon Musk) 는 AI가 풍요로운 세상을 만들 것이기 때문에 은퇴를 위한 저축은 무의미하다고 말합니다: ‘그것은 중요하지 않을 것입니다’ 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "스페이스 앤 타임, 온체인 개발을 간소화하는 ‘드림스페이스 AI 앱 빌더’ 출시",
        "enTitle": "스페이스 앤 타임, 온체인 개발을 간소화하는 ‘드림스페이스 AI 앱 빌더’ 출시",
        "date": "2026-04-27",
        "originalDate": "2026-04-26",
        "sourceName": "Bitcoin News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNRUJKd1hsbXE5UEs5QVBjQVQyVjBxMDBZWHJWTXMtYk1uSFZPLUMxS3JVVnlXenM5YnVTdHFQS2ljdGFUQmpNd013NkRESEVNcjdPMmxHSTl0azRBYUdYYTFodG9hZnZuU3E4YmhtOHN1SUEwVlZVV3N2SWtzRTRacjAxTkoxUk43clhXaThJcFBWbVBJdHlCOUZkaDhhZjdzeXJCSHR4WXNETUJpYzBvcmNPWi1ndVdv?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 스페이스 앤 타임, 온체인 개발을 간소화하는 ‘드림스페이스 AI 앱 빌더’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "완벽한 온프레미스 환경에서 '제미나이' 구동하는 시스템 등장",
        "enTitle": "완벽한 온프레미스 환경에서 '제미나이' 구동하는 시스템 등장",
        "date": "2026-04-27",
        "originalDate": "2026-04-26",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFB6NnRySVFHdzVyRW5PbnUwYUZueHdrdW1jTlRZZGl2RVd3WDNxVXdSeThOMUtnWWU5eEZVaEFYam9oZWtHZS1SSGJhMnZ5T1NNalNYcXV5bEVRNDZNNDVqNWtNSjkxaVhBSkE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 완벽한 온프레미스 환경에서 '제미나이' 구동하는 시스템 등장 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "쇼핑·광고 업은 네카오, 1Q 실적 청신호…'AI 수익화'는 아직",
        "enTitle": "쇼핑·광고 업은 네카오, 1Q 실적 청신호…'AI 수익화'는 아직",
        "date": "2026-04-27",
        "originalDate": "2026-04-26",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9Ua0RvYk9ZLXpxUmJyTHY2STg4a3FfYXo1UGtBLW9YWVlOTVBta2g0TGxzQkdOUXJFUW1JUmNFSm1uNkhzSWQ1MHVsY2tJRDZpczJ6VTF5dVp5bWVOVFB3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 쇼핑·광고 업은 네카오, 1Q 실적 청신호…'AI 수익화'는 아직 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
