/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 시대에 일의 미래",
        "enTitle": "The Future of Work in the Age of AI",
        "date": "2026-11-04",
        "originalDate": "2026-11-03",
        "sourceName": "United Nations Development Programme",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBzaWNwdmZ5WnNlNV9wQWRkZVBLc3VQQzNUNVRYaURkSk8tYmdYVW1aRXFWemN0MXdPTUwydnhRQmRlMEdObm1tNWhpWHg1NW14RDY2alJreElQcEpfMmdSZlJDdVRQR0ZZczM4?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 시대에 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "바우미아는 AI 일자리 손실로부터 근로자를 보호하기 위한 법률을 요구합니다.",
        "enTitle": "Bawumia calls for laws to protect workers from AI job losses",
        "date": "2026-11-04",
        "originalDate": "2026-11-03",
        "sourceName": "MyJoyOnline",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQSFljOUEtdVZiVUItay1UQS05UU1VT0NjMTI5WkJ1bEhOWVNKd0hKT1g4cFEwWG1TUWVlRVBmbUZST005dXNzZElhRVNyTE1DdjZJcS10VWxweDJvdjBENEJiUFBJRnhQd3RMak56NkxvcXp3SC1CRnZrXzBwekJjWXptbkNTQ2VlWFJnOXNJVnpwVWs?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 바우미아는 AI 일자리 손실로부터 근로자를 보호하기 위한 법률을 요구합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능을 벗어날 수는 없지만, 인공지능과 함께 살아가는 법을 배울 수는 있습니다. 와튼 교수인 이단 몰릭 (Ethan Mollick) 이 그 방법을 설명합니다.",
        "enTitle": "You can't escape AI, but you can learn to live with it. Wharton Professor Ethan Mollick explains how.",
        "date": "2026-11-04",
        "originalDate": "2026-11-02",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ1cxSFIwZVhEXzdBMnR0dWdGdEtIVThlYWZiWGNjNGg0Q3NBci1heVlxdmhpcXQ4S1puNHB6bml4VkRUNWtVdkR0UlJ6azV0bWNFR1FrMzlUZ0JJdzBQN0RqTURxUEtzMk9TeFhMcEFXQTltX1ZjMnRBNG5WR3FkNURkRDc3TkMyTFhLbjZWMzVFZlBjcXlhSV9QX3M?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능을 벗어날 수는 없지만, 인공지능과 함께 살아가는 법을 배울 수는 있습니다. 와튼 교수인 이단 몰릭 (Ethan Mollick) 이 그 방법을 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "KT, ‘안심365’ 서비스 출시…AI 기반 보호 역량 강화",
        "enTitle": "KT, ‘안심365’ 서비스 출시…AI 기반 보호 역량 강화",
        "date": "2026-11-04",
        "originalDate": "2026-11-04",
        "sourceName": "아이티비즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE54VlpLTjRoSndodk00VlJfSjNyTmV3YkVDSm9XdWNwTGI4c1ZvdGpZSTBiOW5ESkgxYWdnay1ndkJXeDB0VEhmaFVHZVVmV3o2enRTcmMwT01HMWdva3JKOHpoT3o3TEU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! KT, ‘안심365’ 서비스 출시…AI 기반 보호 역량 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "구글 \"초중고에서 제미나이 차단하면 검색 기능 못쓴다\"",
        "enTitle": "구글 \"초중고에서 제미나이 차단하면 검색 기능 못쓴다\"",
        "date": "2026-11-04",
        "originalDate": "2026-11-03",
        "sourceName": "매일경제 마켓",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5pX2tuUWROQ0swWU85Ymp0RmZtU0M0X3k4TW81aTI5Ml9HYkVZUjdkQWZLYUkza2VnM001OUY5eFlXcF9SdWVxemIyNzEya2hWaVE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 \"초중고에서 제미나이 차단하면 검색 기능 못쓴다\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "KT, ‘안심365’ 출시…“AI 고객 보호 서비스 통합·체계화”",
        "enTitle": "KT, ‘안심365’ 출시…“AI 고객 보호 서비스 통합·체계화”",
        "date": "2026-11-04",
        "originalDate": "2026-11-04",
        "sourceName": "주간한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE80TktwdzNwOXJUa1BGUy01SVFaS0ZVLWRXcFhlaDJ3VnIwWGdyU21GR29pMHFBODdzQVRmUk1TS2hhWXBfRjhlMC1RWC1OQjJVRU44OEdDRXNlWC1qSWJ0clA0dnlEZkpFQ1RNa3ZnTErSAXRBVV95cUxNdTRobm5YNXkta255dE5lTnRWRDc0T2Fpd3JUT3M0NWxBSzk4LS1Ed3U0SU05dUJ5a29JSDVaS0RHeE83M0FDTHNCcnR5dk83ZUJVZGd5ZDFjbWZROXJ4SlJXMXppYlowQ1RLMlJKOTBJN1A0Zg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! KT, ‘안심365’ 출시…“AI 고객 보호 서비스 통합·체계화” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
