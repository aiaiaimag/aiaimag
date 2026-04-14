/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "업무의 미래: AI 자동화가 전 세계 일자리와 커리어를 변화시키는 방법",
        "enTitle": "The Future of Work: How AI Automation Is Transforming Jobs and Careers Worldwide",
        "date": "2026-04-15",
        "originalDate": "2026-04-14",
        "sourceName": "Tech Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxObkFDb2N3QTN5UVI3RGt1ZGRlTVNwTFlBMzktTjNkVE1PMTZ4UkNqZ2w3aGRCc3JOVUE5bUwxUV9Cc0M1b0J1dS00R0hJNmQtR05haklsS1V1cmNMdnNOcGp5NjhZUWFVamoyNlFUYTJmbVlkTzkzSklWZjRyU1R3b1VUQ1FnQ2dGX3FCY0hDMnVHbVFmVl9ROVUta2Q0QUV5eFNQUHVIQXRubVRzQmZ5XzdWNGc2eEhhY1Brdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 미래: AI 자동화가 전 세계 일자리와 커리어를 변화시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스",
        "enTitle": "OpenClaw: all the news about the trending AI agent",
        "date": "2026-04-15",
        "originalDate": "2026-04-14",
        "sourceName": "The Verge",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNU21qZE10LUlJT1lXNS1MbENLcGVzMWlhTjJMbkRwTVRlWWZyQzkxTWlhZUMwelM2NU5PX1h2MG12Zkxxc281LWFrcDZzRFFQbkh6dENseGZHYXdGUjloVmxSY1ZiYWg3djhnZVRCWEVkWS1kNHZ5VUhHT0pFejBuLURn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "SiriusXM의 수장이 인력의 미래를 보장하기 위해 기술 기반 디자인에 베팅하는 이유",
        "enTitle": "Why SiriusXM’s head of people is betting on skills-based design to future-proof its workforce",
        "date": "2026-04-15",
        "originalDate": "2026-04-14",
        "sourceName": "HR Brew",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQaHdEdUE1MEdRM0lfd0VpRGJCX2JoVGxPWGpyRDhWN2xBVE9fYUtLQjVyejI3dEI5dzN0ZUZnTEYwWXZTb2N3eE1Vd2JjY0dGeEpJT1ZCLUxNMVh5U1NteHozWVpjWmVoWmpYRzZpZTg5cm1lZUIyUk5JVF9QWlZYeDlwajZqeWl3bXNwU0F6ZTVnRUFjOGkzaTAxdHYxMkhaNzA1Y3JINXBhN3o1SklMbng1akIxQzVOcTJYZi1sMUZMNHVpMER0TFFQUFBfWTdrT2c?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! SiriusXM의 수장이 인력의 미래를 보장하기 위해 기술 기반 디자인에 베팅하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "리버스톡, 출시 직후 앱스토어 라이프스타일 1위…AI 팬덤 플랫폼 경쟁 본격화",
        "enTitle": "리버스톡, 출시 직후 앱스토어 라이프스타일 1위…AI 팬덤 플랫폼 경쟁 본격화",
        "date": "2026-04-15",
        "originalDate": "2026-04-14",
        "sourceName": "공감신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBOVHlKLVB1dnhoRFpEaHBlbEMyS1Q5LVpUOHdIT1dNWmpSMzdDWk5DMmk3WGZUNExDa3Bwd05JUGg3N003QW9WN2ZxVF9MYmRUeXIxcDZEX3RPWnlVek9lZkZrb1RuWk1V?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 리버스톡, 출시 직후 앱스토어 라이프스타일 1위…AI 팬덤 플랫폼 경쟁 본격화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[4월14일] \"클로드는 새로운 종교\"...'휴먼X' 행사서 드러난 실리콘 밸리의 권력 이동",
        "enTitle": "[4월14일] \"클로드는 새로운 종교\"...'휴먼X' 행사서 드러난 실리콘 밸리의 권력 이동",
        "date": "2026-04-15",
        "originalDate": "2026-04-14",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE8yRDZmTjRGSUNialBxOWx1eDMxd2JUQkt4TkNHYUtYQ2xwV1VEempSQVhUMTR6b3E3OU9vSXlLOXNOWnlRLWE5a2pZQmRQQ0k4Vk1EOGRwVGlKcFFiZDZJbTVDc0lBV3dQMHc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [4월14일] \"클로드는 새로운 종교\"...'휴먼X' 행사서 드러난 실리콘 밸리의 권력 이동 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "제미나이 끄면 기능도 사라진다…구글, 강제 AI논란",
        "enTitle": "제미나이 끄면 기능도 사라진다…구글, 강제 AI논란",
        "date": "2026-04-15",
        "originalDate": "2026-04-14",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBlR2Y0SGl1ZWY2ODduRzM2Q000MlRKeFFuV3QzNkpnbzdCOThLSnZpQUR5YTJ3ckdZMFlab2E0Y2JwR1pCNEUyTlNTN1JwMEVwVjJ0SzhuWjVCZjB6ejEzU3JqYjdEbUI0UVRRX2VGeldpT1k?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 끄면 기능도 사라진다…구글, 강제 AI논란 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
