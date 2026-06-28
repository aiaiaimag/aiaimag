/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-29
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AWS CEO 매트 가먼 (Matt Garman) 은 주니어 직원을 대체하는 AI가 비즈니스에 좋지 않다고 말합니다.",
        "enTitle": "AWS CEO Matt Garman says AI displacing junior employees is bad for business",
        "date": "2026-06-29",
        "originalDate": "2026-06-28",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPWE9Od3F5S1p3UFNGM1Rwbm9ha2dWUEpDQmdTdERsLXR2cERNMW1JMFI2NEN1VWkxcm9ydHg3Q0QwVEVvd3pjZFNXTUpMU0hfaTV5TFA4eFIyV0lHZU5ZWVpyUTVfcThEZkxrWkY1S2ZudzBNMElGN1B6TkJyc2FDWGpKM0xIc0JhRVBtREFIWDJoUkxxMS1SdWd5MUZOc1MxV21jN2xQNFdJQ3ZjZDNkOVd0NGxBaVNMUndKOXMwcTNFT2lqWnNYQjdXcGc?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AWS CEO 매트 가먼 (Matt Garman) 은 주니어 직원을 대체하는 AI가 비즈니스에 좋지 않다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "일의 미래는 AI에 관한 것이 아닙니다. 우리에 관한 것입니다.",
        "enTitle": "The Future Of Work Isn’t About AI. It’s About Us.",
        "date": "2026-06-29",
        "originalDate": "2026-06-26",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQTDNxMDZPUzRiRTJtQndBZVZiNm1pS1Fad1dNMTBfQ2FmU1FuM3B6RV9UNDljU1Y5dDZ4VlpPRWxsekJibWJ2YkpfbHRuOXdqZXlWS0pKT2hpdG16QVJqTjFLV3JXT0U2U1huZlVkM2dnczh6S184UDFGR21RRjFEU0J0NGtNRVJUVUk2bGktMUpkeWloWm83TnRCT21xQlk0VWNwVQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래는 AI에 관한 것이 아닙니다. 우리에 관한 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능의 제국: 지식의 한계와 직업의 미래 예측",
        "enTitle": "AI’s Empire: The Limits Of Knowledge, And Predicting The Job Future",
        "date": "2026-06-29",
        "originalDate": "2026-06-26",
        "sourceName": "CityWatch LA",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOQWlldGoyOW9EZTAzN00wNHZrdmw2Qy1fUnU2WXkxMmhmbmFWRDZ2XzB1Ym5Dc3hLcmhKa0M2QTY2TzRqNDczT2cwWTRnWkNGRW1aT3l2b3IwY2VOcXZhblVxS1hldlg1Z3BvaWdERUJGbmZTZzJlRDNsUW8wV0xBZkdHN3BBVXg1SGRYNFpYMmExZ3JWSUNyWDRjbGdPUUZRdGJ5SnIwZjJZSkRZVnNnUG1CSkY?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능의 제국: 지식의 한계와 직업의 미래 예측 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“AI로 만든 영상입니다” 경고 붙인 틱톡, 되레 수익 급감한 사연 [팩플]",
        "enTitle": "“AI로 만든 영상입니다” 경고 붙인 틱톡, 되레 수익 급감한 사연 [팩플]",
        "date": "2026-06-29",
        "originalDate": "2026-06-28",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBpMHJsOXNrZzdaWHEzWlpjMXlpaHBTT3R6aHJpQko5RjNkLV90SGd5RmNzNVMwcExvQUhQWkdQM1hicTZuTllJdGtRVlhOSmhUWDVqWUpR?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! “AI로 만든 영상입니다” 경고 붙인 틱톡, 되레 수익 급감한 사연 [팩플] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "【AI 시대 소비 트렌드】 (2)AI 추천은 소비자의 선택 기준을 어떻게 바꾸는가?",
        "enTitle": "【AI 시대 소비 트렌드】 (2)AI 추천은 소비자의 선택 기준을 어떻게 바꾸는가?",
        "date": "2026-06-29",
        "originalDate": "2026-06-28",
        "sourceName": "브랜드뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE0yN2hiT2hnVmdNU3c2RDgtenhTZUE1aUd0d281SDRTb3FJTDBqdjFockRjWTNGRy05VDdpZHQzWDBJSGdYY3B6ZHV3VjRUeTltS2VkcHRlTlo1cVJhZzk2MWQ0bXJ2TXVHZ25uSg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 【AI 시대 소비 트렌드】 (2)AI 추천은 소비자의 선택 기준을 어떻게 바꾸는가? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[미국 특징주] 구글, AI 인프라 부족에 메타 '제미나이' 사용 제한…컴퓨팅 병목 현실화",
        "enTitle": "[미국 특징주] 구글, AI 인프라 부족에 메타 '제미나이' 사용 제한…컴퓨팅 병목 현실화",
        "date": "2026-06-29",
        "originalDate": "2026-06-28",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBfSTU1ZURvNGNwUEtPWnpXZm9USXBNQS1RSVFkVzBtVXB5VmhGYXJYbGRoZ0FzbWtiZU00MTFaZlpJRlZobGxienRfeW00Z0VSNjgxS0otc0d5MGp2?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [미국 특징주] 구글, AI 인프라 부족에 메타 '제미나이' 사용 제한…컴퓨팅 병목 현실화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
