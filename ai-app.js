/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 및 Tech Brief: 업무의 미래",
        "enTitle": "AI & Tech Brief: The future of work",
        "date": "2026-06-06",
        "originalDate": "2026-06-05",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQLThTanVYRVc3ZnNNaHVpelcxX3I2UWtVWkRTekRlRDVBRkdqbjY5RnhfLTNvelJHZ0tNX3FySHRyWDlybHdab2h2OTQwX3RoY1BYLWxXbFpmaGpOeWhROFlVODJEVWR0LU81T1V2R0o1SERkRXVRdG80NEswVUl2Y0MyUk81N3EtVm5Za2w5alk0eGhRSHJVS3B3YlNNSUU?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 및 Tech Brief: 업무의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 당신의 일을 할 수 있습니까? 이 마이애미 노동자들은 가장 많이 노출되어 있습니다",
        "enTitle": "Can AI do your job? These Miami workers are the most exposed",
        "date": "2026-06-06",
        "originalDate": "2026-06-05",
        "sourceName": "Miami Herald",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPLVo4Ull3WGRTanhBVnBqMG5TcDJtdVZkNDc3d1NDTEJGUFFibno0d2ZrY3gwczJkSDFfY2pScDYtOUpoSjhTUzFPY2lpTDZDYVk2UGNKMVRtRjFzMkxSTkl4UzN3Vi10d2Rjem0xMXd1VnpjTGRxZTJmNDlseUhSYWJnSDFBLWRR0gGIAUFVX3lxTFAzNlp5eWtHWm11bmRvdDFjamt5V2RacHA4U0s5NmZaRl9iTmJQR3FnVEFxQU1rZTNwSXpfb3VEMHV1bGNCeXQ1bEJ4WWwxTWVPVHk3aG5PZWZqNWpkYjFUX29EQTVkTzAxS2pzUTF5NERzdWR4NnlIem1tZUFRSVNyRlFhbWlnaVk?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 당신의 일을 할 수 있습니까? 이 마이애미 노동자들은 가장 많이 노출되어 있습니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "마음, 기계, 의미: 일의 미래가 여전히 인간인 이유",
        "enTitle": "Mind, Machines, and Meaning: Why the Future of Work Is Still Human",
        "date": "2026-06-06",
        "originalDate": "2026-06-05",
        "sourceName": "ETHRWorld.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQYmhWbUplUG81ZDF2Qk5haUNRWXJ6eVdoSUlWeE9OV21MLTFiYnhTT2VtdU9BaEpPOG1NN0k3WnRfbG8wNWRXaWdGckZRVW56MXhVRFdnMmNDZ1BHNmlRYzdZcHA5YjJwYkJqSG1qU0tiSUVNMnktQXM0VzlMc3NGOWxpYS1BcFp2aElaM09EMm5McUJpcXRLRG1senZVZXQzT19aMzhVclJQT2UyYjdIN3JEMlo5c0hKVnM4SUFGRmlmNjdKM0HSAcsBQVVfeXFMTUZYNEZhQV9vNHJ1b2I4d3R3ZTFsZ1VoSXdqZWdzaWp4X3lBTXJBSDI1a0w0dmZLeWhqYWNwOVhsVHN1SGw3WFkyVGNQa0JUSU1mbnFpTmNsVnhMSU1OQUZ0YVh2X2FrV2xFMEpLa1pHVF94VnB1SkhWdjRqZmRpOEk4LW53SjJ1RkFfWkN5SlViZHJGWV9xSWt1ZUc0STg1WWpBSUxXUkRTSnowaWJaVWFXQU5WLV83dDFvMmZzanhURHR5ZWZzRzV6VVk?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 마음, 기계, 의미: 일의 미래가 여전히 인간인 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI 생산성 패러독스: 같은 ChatGPT, Claude, Gemini를 써도 성과가 달라지는 이유 | 인사이트리포트 | 삼성SDS",
        "enTitle": "AI 생산성 패러독스: 같은 ChatGPT, Claude, Gemini를 써도 성과가 달라지는 이유 | 인사이트리포트 | 삼성SDS",
        "date": "2026-06-06",
        "originalDate": "2026-06-05",
        "sourceName": "Samsung SDS",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTFB6TjdaTFBtS2F3bEhBelc4TGlWTWc4VGtWT0V6eHJYU29ydWpOd2lKcU0wUW9EaFVEdUZQZzlBcjRmWEVFNGlFNEE0bjQ4d1dZbXROcjBtNWtnWElVamNaMm5uYXpaay0yOHN2d2F1NFdJME1WTGc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 생산성 패러독스: 같은 ChatGPT, Claude, Gemini를 써도 성과가 달라지는 이유 | 인사이트리포트 | 삼성SDS 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타, '뮤즈 스파크' API 출시 두 달째 연기…AI 수익화 비상",
        "enTitle": "메타, '뮤즈 스파크' API 출시 두 달째 연기…AI 수익화 비상",
        "date": "2026-06-06",
        "originalDate": "2026-06-05",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1VU3ZqMEVfU0NXdDVCVEhoUVRjQW5YYkgybzVQcE9Qa19VTVdEMzdvcWRTcUJjWS15a21iejJHY3IwUG1qWEo4VFJNN19VVTZmeXl6UXUtR1E1Sm9wQ1d2QTJra0tKVnNGM1E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, '뮤즈 스파크' API 출시 두 달째 연기…AI 수익화 비상 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "‘BTS 더 시티 아리랑’에서 제미나이를 만나보세요",
        "enTitle": "‘BTS 더 시티 아리랑’에서 제미나이를 만나보세요",
        "date": "2026-06-06",
        "originalDate": "2026-06-05",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOQzVWNEFobzVlaDJORVl4djlWZTVtQkFQdkJaTUFTZ0VMaDc3UDV4QVZvU1FZeXJvVUpnbEdZX2pVdGpRNDFUdU8tQ3NSc0J3Z0d3amw2WUFvV1d4OS13YUJOczRfeUtNTGQ5NkVIZFJ5dG5rQmhvUWwwbVhzVXB0bmNaMGVrSkRNcnBnRHFn?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! ‘BTS 더 시티 아리랑’에서 제미나이를 만나보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
