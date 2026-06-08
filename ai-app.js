/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 (AI) 이 월스트리트 전역으로 확산됨에 따라 미래의 은행가들은 엔트리 레벨 일자리가 줄어들고",
        "enTitle": "Future bankers face fewer entry-level jobs as AI spreads across Wall Street",
        "date": "2026-06-09",
        "originalDate": "2026-06-08",
        "sourceName": "Crypto Briefing",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBNc0t1Z3ctS3BKYU84Y2VIaUczM0NxTHlIR2U5RGY0LWJJekNSQWpIQno0VDNZYlZWNkhvN3FqME40ek5aeUwwaE9yZE10QWpQNEtiUXU0MzZoSGtfaDFJVG1ZdkdGdW8?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 (AI) 이 월스트리트 전역으로 확산됨에 따라 미래의 은행가들은 엔트리 레벨 일자리가 줄어들고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 일부 일자리를 대체하고 있지만, 이 12개의 새로운 AI 일자리가 빠르게 등장하고 있습니다.",
        "enTitle": "AI is replacing some jobs—but these 12 new AI jobs are emerging fast",
        "date": "2026-06-09",
        "originalDate": "2026-06-08",
        "sourceName": "Storyboard18",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxObTNaZldiSDBzcjItdmRZNHpCcGJqcnRjeTFvcHV1MjRnMzI1NmJtOEhTb0NsS0xXa2JlOHoxYzB1VWJmcmhmUjI2M3ZXSzhjdHZKZjl5MlpUcG5aZWYxVUlBLTFsY3BjQkpKc0FzbHQ5cDRzVDdrUTRHbHNEQTJjTHcta0NTZlNGbVNRaUhsS3hvWTNKT25nR1o5QXNQZVJiWmdoVDZ6c0d6QVhZVUowTGtldjNVd29K0gG-AUFVX3lxTE1ka0ZlVVBqUjFPbk9BMnVqUW1XVGtfdk53VDlKUDJYZUYzRXR2RTlyTG1IZklYVnFpd2hfS0RTME1oVHUtcGNSZmhOTU84ZU5qQjNGWTNHaWhuNzNmSmttREFMTVBYdVpkbzN4WDE2NUJJanBjYnc4eEFrZzRLY1BpTkdYRXo2LWg5N0NYNnBocThpWFJEUThPM2g0SlBtSWpfZm0xQzZ0WEtHMUpzNXFNZmtzTjZHZUpJVzlITEE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 일부 일자리를 대체하고 있지만, 이 12개의 새로운 AI 일자리가 빠르게 등장하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "‘AI 트윈과 대화하기': 바쁜 경영진이 새로운 생산성 해킹을 당했습니다.",
        "enTitle": "‘Talk to My A.I. Twin’: Busy Executives Have a New Productivity Hack",
        "date": "2026-06-09",
        "originalDate": "2026-06-08",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1fZnBYemx0U1pIYUJQSk1WSm1sdThzLWNxcnJmaUNqMDFSajVISUtSXzJBTWFtSW9PY0JjcUVZSjRSaTZwblhuYWg3NUM1Xy1MVmxpSWtHSUJzRmlGZjA1VHBHczEwbkl5UmswVW1qVi00Q0Z3NUtZeHZDb0lEQQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! ‘AI 트윈과 대화하기': 바쁜 경영진이 새로운 생산성 해킹을 당했습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "웍스피어, 비핵심 서비스 정리…AI 커리어 플랫폼 전환 속도",
        "enTitle": "웍스피어, 비핵심 서비스 정리…AI 커리어 플랫폼 전환 속도",
        "date": "2026-06-09",
        "originalDate": "2026-06-08",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9obEY4bmdIdExSZ1dVSWV4dm5SNVBMYWZsU1RDME03NncyaS1yZVV3TkUyeTE0VU5pYW1aTEM3U3VoOUFjWFRTYzVaQ0ZsQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 웍스피어, 비핵심 서비스 정리…AI 커리어 플랫폼 전환 속도 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "무신사, 글로벌 AI 패션·뷰티 시장 정조준··· 챗GPT 무신사 전용 앱 출시",
        "enTitle": "무신사, 글로벌 AI 패션·뷰티 시장 정조준··· 챗GPT 무신사 전용 앱 출시",
        "date": "2026-06-09",
        "originalDate": "2026-06-08",
        "sourceName": "무신사 뉴스룸",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5UT19kSmVzQ0RtelptUUZFOWRRbk56NGpRZ0N0Q29XOG5KaDJ4enBqdkxVX19Nc0ZWN2dZWU5GeU1Xclp3TS1Lb2xRQXJXTGhnVjZKbXR6ZTJXVXpsUTQ5U3ZSRV94UQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 무신사, 글로벌 AI 패션·뷰티 시장 정조준··· 챗GPT 무신사 전용 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "애플, 제미나이 통합한 새 '시리 AI' 공개…\"프라이버시 최우선\"",
        "enTitle": "애플, 제미나이 통합한 새 '시리 AI' 공개…\"프라이버시 최우선\"",
        "date": "2026-06-09",
        "originalDate": "2026-06-08",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE96bTBPTWlMOWF1LVFFS1ZrUjBqenJPSmxWNm95dXM0eWVzQ2lJVWdtOFdVeGtSbkllMVlYakJEUEd6RVhyUUpZc0lvZm9FNFFsaXJrU1lRZDM2QkkxMWZLZtIBYEFVX3lxTE96bTBPTWlMOWF1LVFFS1ZrUjBqenJPSmxWNm95dXM0eWVzQ2lJVWdtOFdVeGtSbkllMVlYakJEUEd6RVhyUUpZc0lvZm9FNFFsaXJrU1lRZDM2QkkxMWZLZg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 애플, 제미나이 통합한 새 '시리 AI' 공개…\"프라이버시 최우선\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
