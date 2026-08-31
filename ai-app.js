/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-31
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "격동의 AI 시대가 도래했습니다. 지금 우리가 내리는 선택은 매우 중요합니다.",
        "enTitle": "The turbulent AI era is here. The choices we make now are critical.",
        "date": "2026-08-31",
        "originalDate": "2026-08-30",
        "sourceName": "gatesnotes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5vNHRZblJwZHNZZEZfZ285LUdncWl0YUk0UHVfTDM1b05YSU9rVHRhYUpkQ1VwV1RJaXZ4SzZwV2dBd2ZYeEZtbUpGNkpDdng5WjRTa28yOVdIM3drTERSVVVoeWI0WnpWT3dQbGVQcVhvdEZIZE1oaTB4cHdRb0E?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 격동의 AI 시대가 도래했습니다. 지금 우리가 내리는 선택은 매우 중요합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "앞으로의 일터: 인공지능, 인재 그리고 일의 미래",
        "enTitle": "The workplace ahead: AI, talent and the future of work",
        "date": "2026-08-31",
        "originalDate": "2026-08-28",
        "sourceName": "The Business Journals",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPdTJRWjFNWlJUNHBHUGt3ZmgwMG1WbUNKU3BKdmN3aDY5MW1LSHp6MkV2U1RRZ2wwelRRMHBzSHE0SUZJbmxqa2Z6SEtQb01OU1gxTUV4aV96R2pGQjkyaEZKeTVtcHNMQ0xUOTBNd1FKdE1wbkJENG9fT0lVWFVhanJvTGRXN3NrRTkxNklURkx0LS02cWo4UkxmYw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 앞으로의 일터: 인공지능, 인재 그리고 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "파키스탄의 새로운 학문적 경쟁: 엔지니어링, AI 및 미래의 직업",
        "enTitle": "The new academic race in Pakistan: engineering, AI and the future of work",
        "date": "2026-08-31",
        "originalDate": "2026-08-28",
        "sourceName": "The News Pakistan",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOYlVqRWEtNzRMaFVHMG9HX1FTc2RaVVB0SGpjNGRhWGlEVzVfS0ZoTjR4SEZiMWtvLXQyVC1UaUIzMHZycVBrcUJrcHl6aWVaamJGeTJMWnF4M192Z2FZdE01Y1NCVlVWbERqMEdtV1lZR2d2SndoSjRrTTFFSUNOWnpfTk1MeVZIbnRGcFZ0S2xMU0JvNlF6MXBDc2gzMDl4VjVrMnBhU2dWYVRRSlNhalY0TGM?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 파키스탄의 새로운 학문적 경쟁: 엔지니어링, AI 및 미래의 직업 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT 0830",
        "enTitle": "ChatGPT 0830",
        "date": "2026-08-31",
        "originalDate": "2026-08-30",
        "sourceName": "더인디고",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9TYXZzYm5FQ2hEX1FHZlMzclN6dzE1QV9vMUYwOF9YbUlYSmU0RG5LNTNDdTVNamZnOFpEYzhwcFo5bV9ibXQ4UDFvOWdZd0hiYl9wSVhOajV2RFlqVUZMNQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT 0830 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "재테크부터 AI·취업까지…강서구, 청년의 날 ‘어쩌다 청년생활’",
        "enTitle": "재테크부터 AI·취업까지…강서구, 청년의 날 ‘어쩌다 청년생활’",
        "date": "2026-08-31",
        "originalDate": "2026-08-30",
        "sourceName": "문화일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE43T1BWelBSQ21qazFUMW03NGI5VVA0ZnZ4azl3X19ieHJOUmtDaVZfbms3ckpvZVdfVEVySXF5V1N0Rms5bEo2WVF3MXFCckFD?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 재테크부터 AI·취업까지…강서구, 청년의 날 ‘어쩌다 청년생활’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "ChatGPT 광고가 시작되면, 브랜드는 무엇을 준비해야 할까",
        "enTitle": "ChatGPT 광고가 시작되면, 브랜드는 무엇을 준비해야 할까",
        "date": "2026-08-31",
        "originalDate": "2026-08-30",
        "sourceName": "오픈애즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE81RHM5WGtvNEthcDRDZ0R3Z0F0NmFQUDQxcU5hUFA0TVRwbXJqMEhZUnhWOEExbGVLRFJxNDRLOU9SNzBJaEEyZjk3NDZJZ0NjOHlQMjhqMklNQU1ESXZ3Z3lKc25LQ0x6UVZGWkZ3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT 광고가 시작되면, 브랜드는 무엇을 준비해야 할까 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
