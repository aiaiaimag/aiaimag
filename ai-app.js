/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능을 벗어날 수는 없지만, 인공지능과 함께 살아가는 법을 배울 수는 있습니다. 와튼 교수인 이단 몰릭 (Ethan Mollick) 이 그 방법을 설명합니다.",
        "enTitle": "You can't escape AI, but you can learn to live with it. Wharton Professor Ethan Mollick explains how.",
        "date": "2026-11-03",
        "originalDate": "2026-11-02",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ1cxSFIwZVhEXzdBMnR0dWdGdEtIVThlYWZiWGNjNGg0Q3NBci1heVlxdmhpcXQ4S1puNHB6bml4VkRUNWtVdkR0UlJ6azV0bWNFR1FrMzlUZ0JJdzBQN0RqTURxUEtzMk9TeFhMcEFXQTltX1ZjMnRBNG5WR3FkNURkRDc3TkMyTFhLbjZWMzVFZlBjcXlhSV9QX3M?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능을 벗어날 수는 없지만, 인공지능과 함께 살아가는 법을 배울 수는 있습니다. 와튼 교수인 이단 몰릭 (Ethan Mollick) 이 그 방법을 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "노동권에 대한 정리해고: 일의 미래를 위한 중국의 18가지 인공지능 규칙서의 의미",
        "enTitle": "Layoffs To Labour Rights: What China’s 18-Point AI Rulebook Means For Future Of Work",
        "date": "2026-11-03",
        "originalDate": "2026-11-02",
        "sourceName": "NDTV Profit",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPWnpDcnphVll6YzF1SkhRSTc5aF9ydUlsQXBjcEI5U2N0amJLRnJ1X1g5bzl2MjR0RHVHUFQxcjFiVXZ0VUVjSnFxbm1JZjF5YlJyNkxfUkkyMXdqVHBQTjBjTW1EYlY4WnJYV3h5TzZXT2phcXpJbGVlRjk5LW1kRnJVSXc0VTNwTG1Md0M5SXpac0ZURmUzTzFiTml2Vm9nU1dOZEpoR0wxbXVvczIyUmczeW5aWmllUFdYd3VQNUdCZVZrNzgwakJB0gHSAUFVX3lxTE5qc250bEJ1Vl9KWi1mR2NMNjBwbFlxVEhJZmVRWEN4VjY4cVRub0xTMEI3dkdmaW81THBxTlhWN3ZqdjRZemtJN2xGckZUSWwtQzFKY2NISThKUFZuLUt3aEpsaXF3Y2EzWHZHZzJYbW5VakhWSlY1UnRmRWFJWVJnNTJocTM0WmxtRUdpb1ZQSEUtUnVvUjRQaF9HSjdRUG91TnFvVXpNVWl0ZXE0Qzg5djBTTm1RODBZZE53TF9pa1RZUk80NUpxWThockJMQW41UQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 노동권에 대한 정리해고: 일의 미래를 위한 중국의 18가지 인공지능 규칙서의 의미 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "업무의 미래 전문가 및 기조 연설 | # 1 스콧 스타인버그",
        "enTitle": "Future of Work Expert & Keynote Speaker | #1 Scott Steinberg",
        "date": "2026-11-03",
        "originalDate": "2026-11-02",
        "sourceName": "https://www.futuristsspeakers.com/",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOU3d0d253S0YwQUc0YnV5TjVOaU1ibF83QkZ5NlNWQ05mM2VaU0dRcjZMeDJUUkhURDlIT3Z5amt1UnhZaW1Qc2xlRUpsSGQxSEp6Nlpnb0NMVkJNVFp2aUZfX2kwTUxMTXZxSmRibVZEVFk3X0EzZlU3aWdIRVl4TA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 미래 전문가 및 기조 연설 | # 1 스콧 스타인버그 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "유라클, 기업 AI 서비스 통합 관리 플랫폼 '오르다 API 게이트웨이' 출시",
        "enTitle": "유라클, 기업 AI 서비스 통합 관리 플랫폼 '오르다 API 게이트웨이' 출시",
        "date": "2026-11-03",
        "originalDate": "2026-11-03",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1aMGdQZkxvVHFPVHBmaFhWZmxiQXNvbFBadXkzdm5ESThIRkwzLThUMTlhMGZFd2FSeFhXb0RfUW1kdWJKUER3Yk1iYUFKUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 유라클, 기업 AI 서비스 통합 관리 플랫폼 '오르다 API 게이트웨이' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "알림만 와도 알아서 챙기는 ‘나만의 생활비서’ AI 롯비 출시… 흩어진 생활 앱을 하나로",
        "enTitle": "알림만 와도 알아서 챙기는 ‘나만의 생활비서’ AI 롯비 출시… 흩어진 생활 앱을 하나로",
        "date": "2026-11-03",
        "originalDate": "2026-11-03",
        "sourceName": "SNS 타임즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQc3U3U3E0cFB5NGlwdHJpM1VuU3JaRk9JZ0Q1MURZWndiSktwU3RRdWZDUDg4Vml5YXBGT0lBNUs0TFY4QWFXTlNnUWY4OV94Mm44M2lLT0FMb1lxU1MwOW8zMGtfbDBZZWpJVHREYTRod1E0QTBKNUFCN2tmYnBHRV9WTmxpYjVoZHBkbUV4ckZERFBtbTRNOWdfUVpreFpNSXR5azhQYjYyRlRid3RUZmx3dzAtR2dpWmFZMFZ4Y1hockdmWlNiaFNyTHg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 알림만 와도 알아서 챙기는 ‘나만의 생활비서’ AI 롯비 출시… 흩어진 생활 앱을 하나로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "“클로드인줄 알고 썼다가 돈뜯겼다”… 짝퉁 AI 기승",
        "enTitle": "“클로드인줄 알고 썼다가 돈뜯겼다”… 짝퉁 AI 기승",
        "date": "2026-11-03",
        "originalDate": "2026-11-03",
        "sourceName": "문화일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBZcTVEdVRCOU1Ta1MyMkI3RHc3Mklfa3F2STFyaktIa3BwSnhtbXJPa0d6ZVhXRnFkUWJuc0tUd0QtcmZUc2I2RWZON1lVay1J?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! “클로드인줄 알고 썼다가 돈뜯겼다”… 짝퉁 AI 기승 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
