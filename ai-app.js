/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "초급자 수준의 일자리에 대한 AI의 영향은 광범위한 영향을 미칠 수 있습니다(일의 미래).",
        "enTitle": "AI’s impact on entry-level jobs may have wide-ranging effects (Future of Work)",
        "date": "2026-11-18",
        "originalDate": "2026-11-17",
        "sourceName": "The Business Journals",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQTVBoZ3RXcTRWM2pERTJMdGcxYUpJWWMzR2FLYXlsR09LaHJqVGpfVE1xSkR6bWU2ZWtZQVFPZVRvMF9CQmJUdW16Q1RqN1lzZ0VfTU1yZ0VQTXBWeDh4SG9zeDdXb1V2dk8zbTNyaXlNNlhEdUJmSVRhM0F0OGJKVnB6MnYtY3duNjgyN3NDS3RNUGdkbFUtYzBIM1dROW4wNFJz?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 초급자 수준의 일자리에 대한 AI의 영향은 광범위한 영향을 미칠 수 있습니다(일의 미래). 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "CBA는 고도의 역량을 갖춘 국가를 건설하는 데 도움이 되는 미래 인력 원칙을 제시합니다.",
        "enTitle": "CBA sets out future workforce principles to help build a high-capability country",
        "date": "2026-11-18",
        "originalDate": "2026-11-18",
        "sourceName": "CommBank",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNMjlIT1pCQkFoV29POFd4eUw4VjhkLU95bmozU1o3ejUzbGpER0NWamQwSmo0Y2pzLTJVbTQ3MHZqQVM1RVNDV2lPVEszX0ZqMHNwS1NuY2pwMG5GU1BYWTNUdE5ZZXRKVzlXSVVvb19EZHVsa0w1c0lNUGl5aW1vZlN1amFkUQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! CBA는 고도의 역량을 갖춘 국가를 건설하는 데 도움이 되는 미래 인력 원칙을 제시합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI, 일의 미래, 그리고 소득 안정을 재고해야 하는 이유",
        "enTitle": "AI, the Future of Work and Why We Need to Rethink Income Security",
        "date": "2026-11-18",
        "originalDate": "2026-11-16",
        "sourceName": "Basic Income Earth Network",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNR2laQ21GeWNuSDlOYzRjTmZRejg5M3FYN1paZzJPY0ozN2ZhSVg4ZGdVNE8xREZnV0lYTG1oMWg2SmpkcE4tbzJKLW1zanpaVjFxZUhkQjB6SDZ6QkNqY0ZhdHNWbGgxd0h4Zm9tOXF0YVAtLXQ4MWphYldmT2FnSnVVOGFjek1XWExEZlRYU09DdFFZdk03NjlVVWg1VHRtbVpiNQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 일의 미래, 그리고 소득 안정을 재고해야 하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "코파일럿 하나로 문서·분석·개발·영업까지…챗GPT·클로드와 정면 승부",
        "enTitle": "코파일럿 하나로 문서·분석·개발·영업까지…챗GPT·클로드와 정면 승부",
        "date": "2026-11-18",
        "originalDate": "2026-11-17",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1sY2tUbXotRkZ4dkEwOGoxTXBuVldqbmw0RFFsT2tDZllSX0RnT2UxWTVUb2dwMEZHb3Rwdk82Vl9PYXZyN2JFMUxCYzVIUVpVWF85ZDNB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 코파일럿 하나로 문서·분석·개발·영업까지…챗GPT·클로드와 정면 승부 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 트렌드] 금천구, 누리집 ‘인공지능(AI) 다국어 자동 번역 서비스’ 개시 外",
        "enTitle": "[AI 트렌드] 금천구, 누리집 ‘인공지능(AI) 다국어 자동 번역 서비스’ 개시 外",
        "date": "2026-11-18",
        "originalDate": "2026-11-17",
        "sourceName": "베이비뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE8xMUdQdnV4ZVFxOC1pcDZZcnQ1cW9xeUZibzUxUTFOX0JMVkUzajROMjBLaHljYkJFRHBDT2NwMVFIWGJzenc2b2QtNkNpRkxZdmRWQ0NKR2FWdkdrN1pNMnZfNHVubnFaVXZ4Zg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 트렌드] 금천구, 누리집 ‘인공지능(AI) 다국어 자동 번역 서비스’ 개시 外 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "샵링커지앤씨, 리뷰레이 ‘일일이관’ 서비스 출시…AI 기반 리뷰 관리 기능 확대",
        "enTitle": "샵링커지앤씨, 리뷰레이 ‘일일이관’ 서비스 출시…AI 기반 리뷰 관리 기능 확대",
        "date": "2026-11-18",
        "originalDate": "2026-11-18",
        "sourceName": "테크월드",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE14VHduM3RNeGVUR3JSMjl0d05QY1lQblFuMmExQTQ5blhsNGppQWFJcmhwcGpyeHJuT05SOUxUXzdtSmxnb1ZxRlVSVjNObFFPaXB2blNWRFl3eUM2c2d5bjNTRFhQczVm?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 샵링커지앤씨, 리뷰레이 ‘일일이관’ 서비스 출시…AI 기반 리뷰 관리 기능 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
