/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-25
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "‘브레이크 없는 피드백 루프’: 인공지능 종말 보고서가 미국 시장을 뒤흔든 방법",
        "enTitle": "‘A feedback loop with no brake’: how an AI doomsday report shook US markets",
        "date": "2026-02-25",
        "originalDate": "2026-02-24",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOam1VaUUycHM3Nlllakd2ZFo0MDZOaUJGNndoNE1jNGFRM0hRNWdTVEJTd0ZGUnlNblBzQWNHSnZ4ODJOek5oR0NrVmtCdjVLVzBMQXRSSWhPUmREZEJDaXdlMEhFZHNEYUtBZUNRTF9ZMHN4WDg4QjE1Ymp5WHkxUHRoTXNQXzNVR1I3aFpVaEtJajlqM0JQMUlTSml2LXE0NTZLbzhFLVV2Ujk3bTNrRVhn?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "hookTitles": [
            {
                "top": "‘브레이크 없는 피드백 루프...",
                "bottom": "(The Guardian)"
            },
            {
                "top": "오늘의 핫 이슈",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "‘브레이크 없는 피드백 루프’: 인공지능 종말 보고서가 미국 시장을 뒤흔든 방법 | 오늘 발표된 최신 뉴스입니다. 출처: The Guardian.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "미국, AI 보호 조치에 대한 분쟁 시한으로 Anthropic 위협",
        "enTitle": "US threatens Anthropic with deadline in dispute on AI safeguards",
        "date": "2026-02-25",
        "originalDate": "2026-02-24",
        "sourceName": "BBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1fTFA4Rlp2MzdLREk3VG1Ka05wWGNEWG9yczh3RXUtQTJSemtSTkE0bjVYMm5uNFIwVWZJdTk3bW9TOHhuR2p4UzFMUjVFS3N6ODh3bkFqVnNSUQ?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "hookTitles": [
            {
                "top": "미국, AI 보호 조치에 대...",
                "bottom": "(BBC)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "미국, AI 보호 조치에 대한 분쟁 시한으로 Anthropic 위협 | 오늘 발표된 최신 뉴스입니다. 출처: BBC."
    },
    {
        "rank": 3,
        "koTitle": "독점 제공: 중국의 DeepSeek는 미국의 금지 조치에도 불구하고 엔비디아 최고의 칩에서 AI 모델을 훈련시켰다고 관계자는 말합니다.",
        "enTitle": "Exclusive: China's DeepSeek trained AI model on Nvidia's best chip despite US ban, official says",
        "date": "2026-02-25",
        "originalDate": "2026-02-24",
        "sourceName": "Reuters",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNYko5c1BzTGVuUV9VZl9CMGczWm5RdThBeW00Mm5BX3NDb2Z6XzZuNGstMWs1Y2pSZS1wcWdndEZBc3YwSEtNT0ZnXzNjUUFncWN5eHFEbXZ1ZmEyR3M3dFg2TU5tZzQ0QXdhZTJhTXJGSWxyXzRMcDJxZllwRXgxQTFhbkZ2RjFJbDViNmd2enRZWGtZcVV1cE9nUXFUNFQtQzFoZ01lRkc3YTlueXhwZVUxQTVkeDBfTlZmaWxlX1g0X0tCRFE?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "hookTitles": [
            {
                "top": "독점 제공: 중국의 Deep...",
                "bottom": "(Reuters)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "독점 제공: 중국의 DeepSeek는 미국의 금지 조치에도 불구하고 엔비디아 최고의 칩에서 AI 모델을 훈련시켰다고 관계자는 말합니다. | 오늘 발표된 최신 뉴스입니다. 출처: Reuters."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "2026년에는 많은 대학에서 인공지능 전공이 대거 개설될 예정이다.",
        "enTitle": "2026년에는 많은 대학에서 인공지능 전공이 대거 개설될 예정이다.",
        "date": "2026-02-25",
        "originalDate": "2026-02-24",
        "sourceName": "Vietnam.vn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxORzlsQVFHdV9XamxLMl9Cd3RXWGZ2TjJyX0cySjRKSnNjX1lJMmJQZlh6QUtPZV83Z0xrU2F3SWtuQ0J1alJMU2xmWVhJVExmc1JONXRtTFExbzhhU0ZCNVR6TV9USGV4NEx5WkRPR3JyTk5pZThGM2ZlcW1WS1RkTTZRWThfSy1kcnJpcldSdFNYRVFhWmJB?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "hookTitles": [
            {
                "top": "2026년에는 많은 대학에서...",
                "bottom": "(Vietnam.vn)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "2026년에는 많은 대학에서 인공지능 전공이 대거 개설될 예정이다. | 오늘 발표된 최신 뉴스입니다. 출처: Vietnam.vn.",
        "category": "Physical AI"
    },
    {
        "rank": 2,
        "koTitle": "DX KOREA 2026, 인공지능 기반 전력지원체계관 신설 - 조선비즈",
        "enTitle": "DX KOREA 2026, 인공지능 기반 전력지원체계관 신설 - 조선비즈",
        "date": "2026-02-25",
        "originalDate": "2026-02-24",
        "sourceName": "Chosunbiz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNUzZZY1ZBRmhqV25kSnpYSG0yS3FLUHI3bnZxSVliQUczalRvQ0M0N1dmV1ZSZ2RyV0w1Nzc5S1hESldYUU96dkpsaDBVd0QxRm1JRjBoV2duRWRocVJmX2xUV2FySHc0bXE0VGE0TE1LbkNaR3o4OElkRlhJS1lqMkRSWlbSAZgBQVVfeXFMTWtpcTJzbUJURmtidlptMnFHZ1BkYUZrcHR0TGdtMnVnY0NaM1kxTmJEaHBUZGczM1NJd25HXy1aa1hfNGRxakJrdmRVTE1WTTlTQ29mN3gxZmMySnVNVkFHOWp2Z3NfT2pYQW1VXzVwUTlKbWZiZjZWNzlLZF91a3NnUmJ6YW1KZTQ2OHlKTmZRc1o3R3p0T1M?oc=5",
        "isRepublished": false,
        "viralRate": "83%",
        "hookTitles": [
            {
                "top": "DX KOREA 2026,...",
                "bottom": "(Chosunbiz)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "DX KOREA 2026, 인공지능 기반 전력지원체계관 신설 - 조선비즈 | 오늘 발표된 최신 뉴스입니다. 출처: Chosunbiz.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "세종시교육청, 2026학년도 학업성적관리 시행 지침 개정...AI 활용 평가 기준 반영",
        "enTitle": "세종시교육청, 2026학년도 학업성적관리 시행 지침 개정...AI 활용 평가 기준 반영",
        "date": "2026-02-25",
        "originalDate": "2026-02-24",
        "sourceName": "에이티엔뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5QOW05UHg1LXAtdzFuMXlxT2dsZEFXbzk1MXFvWWxiWlJUSllpekN4YnFXSExmam1qdF9Tbms4LUYwQ2tDWkhXR3RNRmZfbklHWEZUMW1BakFPc0pOSS0wYXNhdWNFNXdBM2Q1dA?oc=5",
        "isRepublished": false,
        "viralRate": "79%",
        "hookTitles": [
            {
                "top": "세종시교육청, 2026학년도...",
                "bottom": "(에이티엔뉴스)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-24"
            }
        ],
        "analysis": "세종시교육청, 2026학년도 학업성적관리 시행 지침 개정...AI 활용 평가 기준 반영 | 오늘 발표된 최신 뉴스입니다. 출처: 에이티엔뉴스.",
        "category": "Korea AI"
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
