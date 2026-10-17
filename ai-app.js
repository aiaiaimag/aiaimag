/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 슬픔은 현실입니다: 일자리 불안, 변화, 일의 미래 | Cassandra Worthy",
        "enTitle": "AI Grief Is Real: Job Anxiety, Change & the Future of Work | Cassandra Worthy",
        "date": "2026-10-18",
        "originalDate": "2026-10-17",
        "sourceName": "KTVU",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9MU3pGb0N2em5TVVc0SEdxZF9GOU9ZTEg5UHhGVDYtX1RBQW5nb0hwOEZZb0pUdXhnNi1zUjdsWm0wUk9kUTQ4dWd5cThjcnV6b3BsbXIyQnVpTGfSAWBBVV95cUxQX2VZcjZVbFRBRkg1OWNmeHI5WTJ5dmFmVVRNNTlXNEpjdzdkTUxSOVBUNmc1NnI1U1lWYkVoUnFmVlRvanhOa2Q0MkJsS0E3eTVIajl3REp5NFdhRUhCOW4?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 슬픔은 현실입니다: 일자리 불안, 변화, 일의 미래 | Cassandra Worthy 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "현지 경제학자들은 AI가 일자리를 창출하고 없앨 수 있다고 말합니다.",
        "enTitle": "Local economist says AI could create jobs as well as eliminate them",
        "date": "2026-10-18",
        "originalDate": "2026-10-17",
        "sourceName": "KTNV Las Vegas",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOYk1oSDNBVWpRVVh6eDhBOHNDS2pwaGNzQTRJaFhWN3ZiZHZBRnJIeVpMd2JCX3hkQTM1TlNPaUp6Q3p3QldIV2RDVkRKN2RZOWxBbi1zaTF1U19Sc2stb1BmMXFJZ1FUNXc5aU01RnJvY1JmUWJQQUptbEd5RWVxdFVrYk1xcnphaTZyVWdQVTdjQkNOdm1sZHFFS0tVNnlMbUZUNHJZTUhjSVYtekNnNVQzQUNrQU5FVHUyMUx2MA?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 현지 경제학자들은 AI가 일자리를 창출하고 없앨 수 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "CEA Nageswaran은 AI의 다섯 가지 위험, 직업에 대한 위협, 인간 기술 및 금융 안정성에 대한 경고를 표시합니다.",
        "enTitle": "CEA Nageswaran flags five risks of AI, warns of threats to jobs, human skills & financial stability",
        "date": "2026-10-18",
        "originalDate": "2026-10-17",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxQTmJwcjNYdXNibVJ0YjhVcy16alJDNVNKOTctRmhhbTVIUmlGNWVZWFdiZFp6NGRPU2dCVWQtLWJmaVZxQ1lRLWRhZWZBWG5VZmY0OFV3aGg1MmdRckdibk40dTRFa19yVHJVUDY3dzRiYUJuZG53ZkJUSlpYWTZJajBCNXhBa1Q2WW1DQU9KZWI5VEJMTmVETE0yNXIyVHRtR2dfTXpQS01NRlhZVGg1Q3FKdk9ReVE1aFBIZDZqYnZzdWl3QzZ1dzhJLW1udjdLaFlzUk5uYmx0QUZYUkZaUVdPMmQ3cmlOdHl3b0xhWVVob0d20gH0AUFVX3lxTFBOYnByM1h1c2JtUnRiOFVzLXpqUkM1U0o5Ny1GaGFtNUhSaUY1ZVlYV2JkWno0ZE9TZ0JVZC0tYmZpVnFDWVEtZGFlZkFYblVmZjQ4VXdoaDUyZ1FyR2JuTjR1NEVrX3JUclVQNjd3NGJhQm5kbndmQlRKWlhZNklqMEI1eEFrVDZZbUNBT0plYjlUQkxOZURMTTI1cjJUdG1HZ19NelBLTU1GWFlUaDVDcUp2T1F5UTVoUEhkNmpidnN1aXdDNnV3OEktbW52N0toWXNSTm5ibHRBRlhSRlpRV08yZDdyaU50eXdvTGFZVWhvR3Y?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! CEA Nageswaran은 AI의 다섯 가지 위험, 직업에 대한 위협, 인간 기술 및 금융 안정성에 대한 경고를 표시합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "enTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "date": "2026-10-18",
        "originalDate": "2026-10-17",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE51czdyblRzU3U2a2lYWTQyQXhPYjJCTmxWVjE2RS13NVlySzBZQ0VVRjRVSkFLYVZKZTlJLWZfSmxlT3g3TFRNS09KRE1waEhKd1lCSWI3TWo5OUxXRFBlVU9EdUlEU3d3VjFfR21ySjVCZlNpbFEyTFlR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "클로드 코드 토큰 한도 아끼는 방법 7가지",
        "enTitle": "클로드 코드 토큰 한도 아끼는 방법 7가지",
        "date": "2026-10-18",
        "originalDate": "2026-10-17",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE45R1lNOW5VVVR0aTZCT3ZCUjlqeW1WQ1NKRFN1bUxJQy1nWXo1bGNma3p3QkI2RmFWVVZiQ1VDYXZmaFlmaWRQaXNGbzBNNVdWY3hkalZyNXJXQQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 코드 토큰 한도 아끼는 방법 7가지 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "미 물가 충격·AI 수익 우려에…코스피 5500선까지 추락",
        "enTitle": "미 물가 충격·AI 수익 우려에…코스피 5500선까지 추락",
        "date": "2026-10-18",
        "originalDate": "2026-10-17",
        "sourceName": "JTBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5NenZ6T2xseHFRdGtoRFU1TzBENTlfdnFSV1dndXplRmRtaDZiUXp2cWlLU1EzWFNxZXZUZGpvZ3lrc0lFbktfWUtsem9jR0dBYkE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 미 물가 충격·AI 수익 우려에…코스피 5500선까지 추락 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
