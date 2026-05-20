/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI를 두려워하는 사람은 누구입니까?",
        "enTitle": "Who’s Afraid of A.I.?",
        "date": "2026-05-21",
        "originalDate": "2026-05-20",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNaDA5MGR3RFlWRHAwS2J5b2hmR2xhaml5QTI3eS1nOFRIZXZQSkJuVk1Lc3dSZ2lOc0F4N3J5dVFsNjNmUW9aQ3E4YXNoY2hCb1VCczFGZEoxckl2U25KS1pjWnJUeUpNMjNBTUpNV0FFY2R4RHh2ZWFpWFNuZmZJbjk0RV8?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI를 두려워하는 사람은 누구입니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "대중은 AI와 미래의 일에 대한 희망보다 더 많은 두려움을 가지고 있습니다. 연구 결과",
        "enTitle": "Public have more fear than hope on AI and future of work, study finds",
        "date": "2026-05-21",
        "originalDate": "2026-05-20",
        "sourceName": "King's College London",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNWFAzTXRsSDF5NURRWVBiRVA5TlNmUUY0QU4wbWE4TnNkSnh2MGIxaTVjRloyYTN4YnprdkRrc19YZVlZWGlNT0xPRHNrT1BzT0pwVWlhWkJyTVlPZlczNEhNOHI2b19reHhHd1AtYVNrLTNNZ0Z1SHA3WDJvUDhMQW9WbHI2aFBvV3g5RVo3QzBwNzVYbkQw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 대중은 AI와 미래의 일에 대한 희망보다 더 많은 두려움을 가지고 있습니다. 연구 결과 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "오늘날 AI가 화이트 칼라 일자리를 장악하고 있습니까?",
        "enTitle": "Is AI Taking Over White-Collar Jobs Today?",
        "date": "2026-05-21",
        "originalDate": "2026-05-20",
        "sourceName": "Analytics India Magazine",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxObjdmQnZ3MmVidTJTMkhObXJzcjVKd0d0R0hTTGphZVVMNHJKRXRpMUpMRWRSaHkybGJhb24tcFJoekd0T1BucFI4OXpUaktJTlNra2lEbWk1VVlEYkFoWEtHNW5ReFRfaWRITHBIeGhNeml2dU9MOWF1NDFJb3c3RTNKVnVDY3FPcVloRzZTX3hwVUY0QVVfVGxpWW1zNDZoSjVCTw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 오늘날 AI가 화이트 칼라 일자리를 장악하고 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "enTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "date": "2026-05-21",
        "originalDate": "2026-05-20",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOcW9xdjdiX1hrZHNlRXY1Q2FvZHRKTWU1OU5EWmtNUTRRSnhmbnN0bUVlbXNXZnNyNWFsa2JEdG9mbFpaSFNCR3Q1T0Z3bnRUdU5lcW0tTGJSQlBUODZQWlpySGJhaDI1UGVpc1E5eXgySHRQQXJSRFFzZTh6U25XMg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 이제 Mac 환경에서도 제미나이 앱을 만나보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "인크루트, 채용·커리어 AI ‘나비’ 공개… 채용 시장 자동화 확대",
        "enTitle": "인크루트, 채용·커리어 AI ‘나비’ 공개… 채용 시장 자동화 확대",
        "date": "2026-05-21",
        "originalDate": "2026-05-20",
        "sourceName": "매일일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBJRFJvTHdHbUZtMk1aaUFvMXAzTElydktIOHFXTnBYUlZxWWlpMkYybndUV1g0aEo4OF9YdEtkWmtMVGNXUXM4b2VSbWN3T3BHT3JUX19wUWVLZkN1OHBZUVh3Vl8?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 인크루트, 채용·커리어 AI ‘나비’ 공개… 채용 시장 자동화 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"AI로 친환경 허위광고 잡는다\"...SK AX, 그린워싱 사전 차단 서비스 출시",
        "enTitle": "\"AI로 친환경 허위광고 잡는다\"...SK AX, 그린워싱 사전 차단 서비스 출시",
        "date": "2026-05-21",
        "originalDate": "2026-05-20",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1qM0NsZm1IRXl4RkdYZkpVQ2E0WDNjUU1Mb2ZxOW5uSDRfY1RGUFpqTDVoU2JMUHBxYmtwbGlOMmVRWGxMVWdPWTdqdjdsZ0NxWTZ6SmNJLS1tTEllQkU3SkJFcWdZM2gtLUE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! \"AI로 친환경 허위광고 잡는다\"...SK AX, 그린워싱 사전 차단 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
