/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI로 대체되지 않는 직업은 무엇인가요?",
        "enTitle": "What jobs won’t be replaced by AI?",
        "date": "2026-06-02",
        "originalDate": "2026-06-01",
        "sourceName": "University of Cincinnati",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9RY05ndUliMzZoUlJpQlpmR2dXRHBnZlhfczZiUEZQbTM1ajlUYXNXMXhPNTE2dEt0aFBHS0RzbXA5VHlMcjNHOVVvbUFSTlNxUDRFNmhKeHVOZUFfUjI1Nw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! AI로 대체되지 않는 직업은 무엇인가요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능이 일자리를 대체하고 있나요? 17가지 직무 유형이 효과를 느끼는 방식",
        "enTitle": "Is AI replacing jobs? How 17 job types feel the effects",
        "date": "2026-06-02",
        "originalDate": "2026-06-01",
        "sourceName": "TechTarget",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNNDdYaTdTelNBYkdJNmVkeTM1MUtIQVFJcjEtQ1IyTHlsNUN1OVJyTnRuYVRETldka1BabmpXX3hFYl8wWVFjbFdXU3h2SlJ1QzNQd3dsZHJfNG1UZ0k5QXJrMFNhTDVhX3JhY0R2eEhCZGJuUU1ybFBjTFRQSi1OaVQ1VTRETkpBNlRqaVlBRlhKc09YejZaUTRNZXVKTkk0UlpDWlNBbWpxb3FP?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 일자리를 대체하고 있나요? 17가지 직무 유형이 효과를 느끼는 방식 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "업무와 교실의 미래를 탐색하는 Marion AI 이벤트",
        "enTitle": "Marion AI event to explore future of work and classrooms",
        "date": "2026-06-02",
        "originalDate": "2026-06-01",
        "sourceName": "AOL.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE05S0tBX0ZzX21MV1JqOGNsVWtOQlhFUXEyRkt4OE0tMUxaRWhwT2tlUC1qTlhKeGI5c0RiSVNkWkF6TWM4LVd4eU00bFZhY1lvaWtyYVpwUFNXVklrZGVuYk0yaEZ5YW1wZjkyWlNUZ0FvQURjTUUxd3F3?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 업무와 교실의 미래를 탐색하는 Marion AI 이벤트 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "'클로드 오퍼스 4.8' 딥SWE 벤치마크에 첫 등장...1위는 여전히 'GPT-5.5'",
        "enTitle": "'클로드 오퍼스 4.8' 딥SWE 벤치마크에 첫 등장...1위는 여전히 'GPT-5.5'",
        "date": "2026-06-02",
        "originalDate": "2026-06-01",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9LNzZIbnJIMXBWVmEzeXdOX3VJaWVHT1ZlQW92WVd3Vmd6OU9lOFBmYm5ydlM3aFFxMTBRY1BDeGJUakZLRGd3UWhzUkU1M094RzdWaG9aRzZnb05oUk8wZUFDanZUMzJ6SlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! '클로드 오퍼스 4.8' 딥SWE 벤치마크에 첫 등장...1위는 여전히 'GPT-5.5' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "美 아르곤연구소, 과학 연구 혁신할 AI 추론 서비스 출시",
        "enTitle": "美 아르곤연구소, 과학 연구 혁신할 AI 추론 서비스 출시",
        "date": "2026-06-02",
        "originalDate": "2026-06-01",
        "sourceName": "에너지안전신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5HcVVKbVJxby12VzI2Qms2eVhBemFDaHhqa2F6TWE4RWtYbjdsQ2VpMmlHQUh0Nk1RdWRQNnJCdHdPWEIwdDdwUHA0VTNZQmdNNHhwaTl3UEVKZEp2NkNsMHNXd2g?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 美 아르곤연구소, 과학 연구 혁신할 AI 추론 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "DB생명, AI서비스 결합해 보험료 할인하는 보험 출시",
        "enTitle": "DB생명, AI서비스 결합해 보험료 할인하는 보험 출시",
        "date": "2026-06-02",
        "originalDate": "2026-06-01",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBmdC1pSFl1TkpEUUZWTjF3cnBLTVlaLWdSNEpDZnQ4NnAwM2p6dGZuY0YxMTh2UjBBOFExcFNRQWs0RzhpN0E?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! DB생명, AI서비스 결합해 보험료 할인하는 보험 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
