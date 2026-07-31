/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "업무의 이면: 파올리 병원의 확장이 우리에게 커리어의 미래에 대해 가르쳐주는 것",
        "enTitle": "The Work Behind the Work: What Paoli Hospital's Expansion Teaches Us About the Future of Careers",
        "date": "2026-08-01",
        "originalDate": "2026-07-31",
        "sourceName": "VISTA.Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9lMHhubVJ6R0hKbFVKdVR6cm96Y0dSWkNfY1luOV9yV011dXJFQ2VFRVVUT3c1LTc5RTBOb3o4RExTNWdNNDVLVVdnZTc4MFA2aHdmclNlRFhtc0xmRXF2dURVNTU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 이면: 파올리 병원의 확장이 우리에게 커리어의 미래에 대해 가르쳐주는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능이 재편되면서 한 대학의 일자리가 인문학의 미래에 대한 논쟁을 불러일으킨다.",
        "enTitle": "As AI reshapes work, one university's job cuts fuel debate over future of humanities",
        "date": "2026-08-01",
        "originalDate": "2026-07-30",
        "sourceName": "Anadolu Ajansı",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOMUlsTlM1Qzk2a1VnQmMwVC1ySC1DaUw2MVhvaHRWaHFaa25zMkFHanAxcXU1N2FGUUFPNmM5X2J4MkNURWp0aThGQk1pNm9RQWJQeXdRSEhCSHNEVTYteUxwbFZRcC1xRDBvYXNCS3hiX2FLRV9EUlJxbzNoeE9hcWVXZWhVdGxsbzFrNnloYi0xX2NBR0JGV09DTTZPdFM2M2k0NTR0QmFTR3RXU2RvUWhMTjlLbmFqaGdIZUo3SUVzU0ZRdEprMFItMTM1RDQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 재편되면서 한 대학의 일자리가 인문학의 미래에 대한 논쟁을 불러일으킨다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 생산성이 결함이 있는 지표인 이유",
        "enTitle": "Why AI Productivity Is a Faulty Metric",
        "date": "2026-08-01",
        "originalDate": "2026-07-28",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9FZ01QSV9QaGhFQklTSlAtZ3VQcHFKMzNkTDhrQU1oeDdTUGtDeTk1NF9RdjZJTmhEbllrZ0t6SXJoX2Zzb0txdXUzdTkwbzUxaDZUbENUWGEtWjlYXzhXWHUzUVY0ZmgxZGhleC13?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! AI 생산성이 결함이 있는 지표인 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[\"AI 덕분에 앱 찍어내는 중\"... 메타, 실패 딛고 '앱 공세' 재개] 메타는 거대 언어 모델(LLM)이 단순한 앱 개발을 넘어, 사용자 콘텐츠 이해와 추천 시스템 고도화라는 핵심 영역에서 결정적인 역할을 하고 있다고 설명했다.",
        "enTitle": "[\"AI 덕분에 앱 찍어내는 중\"... 메타, 실패 딛고 '앱 공세' 재개] 메타는 거대 언어 모델(LLM)이 단순한 앱 개발을 넘어, 사용자 콘텐츠 이해와 추천 시스템 고도화라는 핵심 영역에서 결정적인 역할을 하고 있다고 설명했다.",
        "date": "2026-08-01",
        "originalDate": "2026-07-31",
        "sourceName": "AI넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTE02ei1xOFNvRS1QVVF6ZXFnbDV0dnFsSDJ1bWlic040UkE5Z2lDMWtsV0d0RmxJNk11cE9GT1p4Uko?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [\"AI 덕분에 앱 찍어내는 중\"... 메타, 실패 딛고 '앱 공세' 재개] 메타는 거대 언어 모델(LLM)이 단순한 앱 개발을 넘어, 사용자 콘텐츠 이해와 추천 시스템 고도화라는 핵심 영역에서 결정적인 역할을 하고 있다고 설명했다. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "GPT 이어 클로드도…외부기관 3곳 무단 해킹",
        "enTitle": "GPT 이어 클로드도…외부기관 3곳 무단 해킹",
        "date": "2026-08-01",
        "originalDate": "2026-07-31",
        "sourceName": "연합뉴스TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9qb3RLV3FxZ3ViRGVnWWQ1ZjBxTWZSVzY1S3lTNjdrdmNBMkxTcFA3bFh0aXZpNXdVTjJlMHBjMVdMMVZuZ3VEMXYzZjZOZ2xNYnhuOGhkTHl0cFFoWmRtZHJHZW1OSEU?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! GPT 이어 클로드도…외부기관 3곳 무단 해킹 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "틸론, AI 기반 동화책 제작 서비스 출시",
        "enTitle": "틸론, AI 기반 동화책 제작 서비스 출시",
        "date": "2026-08-01",
        "originalDate": "2026-07-31",
        "sourceName": "비욘드포스트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE02M1hIZFB5Vmx6R1ZLTUowOXo0enVaTWxPMXNaeEhvVjBxX3RYQnV1NkRDOV9yZWZzV0JqMGx2cjYtbUpGRHFtU2tjZTgxaE0zV0k1NGRJZjVzM0FYS3VPT0FoSVJOSV8wZWhpaXN1VFd0RUttRGNZYW52elc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 틸론, AI 기반 동화책 제작 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
