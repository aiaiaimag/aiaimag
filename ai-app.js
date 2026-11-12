/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-12
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일의 미래를 바꿀 수 있는 AI 채용 딜레마",
        "enTitle": "The AI Hiring Dilemma That Could Reshape the Future of Work",
        "date": "2026-11-12",
        "originalDate": "2026-11-10",
        "sourceName": "WSJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxObGpXd1J5Y1VkdEV0N011VFdNMjgzTURLTnZYSG9tXy0xVXAzd21VYTVoSlBxNjVDd0pqZDJjSlJDZk1vZnNxdk9PZklUcmtQcnBMZl9PdzBUaVdKQlI4aHNLZ21LZXRGdnVyNGNaWmNPLXpUZ2dYRDlpaS01TjRLeEVLRnAxSi1pSzV4bXMtODBCMFF2bWdtNG9CU21qdVA5UWV0bG9qZzNKVWVYZ252Zld5elJxYjZBcm4yN25Rbw?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래를 바꿀 수 있는 AI 채용 딜레마 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "IBM Impact Accelerator, 학습과 업무의 미래에 AI와 양자 기술을 도입하다",
        "enTitle": "IBM Impact Accelerator Brings AI and Quantum to the Future of Learning and Work",
        "date": "2026-11-12",
        "originalDate": "2026-11-10",
        "sourceName": "TradingView",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPM1YwRzlacmFfTXl1R1Rwa2RGblI3WHZpQ01FUEdzYzFuVDFmV3lFUjl4bXc4R1pnYlEtZUxIb0VoeDhkVUo1YWNONkdOcURxQWFoY1RYSURqbzRJWFR1cDA2TV9laDFwbFpyNWJ3MFpRR3gxYy16VzVKZU5BN0owY2JjYUsxemtMVFkyelRGcjdremxUcXNlai1pQlpkcEdmMjNSTGRhWExocnVyQmJIM1FQUW5UUmFLV21oMnFLUEtWRnA0LUI3QWIyOVVKSlFrVF9VVlhDUQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! IBM Impact Accelerator, 학습과 업무의 미래에 AI와 양자 기술을 도입하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "글로벌 설문조사 결과, 근로자 10명 중 6명 가까이가 고용주의 AI 가치관 때문에 취업을 거절할 것이라고 답함",
        "enTitle": "Nearly Six in 10 Workers Would Reject a Job Over Employer’s AI Values, Global Study Finds",
        "date": "2026-11-12",
        "originalDate": "2026-11-09",
        "sourceName": "Fair Play Talks",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOZXJ3Ulk5M2JLb2pOVldIZnU4UGw4bldtdm1RaHB6cVVMVG9lVXp1aFljY1BqclRlSjVSSEZnaUFDb2lvWi13THM1VW5RNW5TYVpYekhwaWNCSkZJQXNhbzdjd256VWpOdWpXelpiRHNVRjdEb2g5b01YUVNIUlQ5blFCUWc3YUV1Nm1adEtTajBKb1NlQVBQXzhSSFVJcW1KOEFoeDNrNnBZMWlQRHVDSEJkTlk3UXVrQ1htZVhLdHBwT0lGdVBLQw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 글로벌 설문조사 결과, 근로자 10명 중 6명 가까이가 고용주의 AI 가치관 때문에 취업을 거절할 것이라고 답함 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "네이버, 쇼핑·예약 대신하는 AI 앱 연내 출시 [네이버 컨콜]",
        "enTitle": "네이버, 쇼핑·예약 대신하는 AI 앱 연내 출시 [네이버 컨콜]",
        "date": "2026-11-12",
        "originalDate": "2026-11-12",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1qUnV0WjBzSF9tQ1Zua2ZBSm5LNGdBWGJ4Y3NtcXdMYmo2Z2VTYk1oRkZxSjhSa0RiUHc3eFlMVkNad3E0aHVza0U0VVBIVkpsT3lHMG4tdTJ5LWZZV2pMampFZUZKNDladnZ4RjJ3WXTSAXRBVV95cUxNWkFGNk5EVXMzQ3d2eGRJajgzRjE4a1Vxa1B1ZTNudWdxeW93am1qcDdGVmg1YnI0X0JzY25tcmxNM3JIMmZuMVBILVhVWjR3TE5DVndCc1BqTGtVU1JVd1g5YnM2QTlvUXZpU1NvbGtoYm9neg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, 쇼핑·예약 대신하는 AI 앱 연내 출시 [네이버 컨콜] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "네이버, '연내 개인화 AI에이전트 앱 출시'...검색·광고 수익화도 박차",
        "enTitle": "네이버, '연내 개인화 AI에이전트 앱 출시'...검색·광고 수익화도 박차",
        "date": "2026-11-12",
        "originalDate": "2026-11-12",
        "sourceName": "테크M",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9VUHRtSGlVRFBWaGdKWWxoNTF3QTFTRm9XWE9VVlF3dmRRbFpTd25VX0NrdzAtWEh6TVlyRFQ5aWlDdU83TDBDSmhfWHhjQVdrTGVxaVMxRWlVanFqUVJUVmRBbXBtUdIBakFVX3lxTE9yWWk5dDh4dWlLVzFoRkZOZjItQ1JiV19YMElXTFVuNEJHbUpyNGF1T2dEWkd2S0NHNEVOT0JicXMyQUR1bnlVY2xwU1dQVjBrUkdJbmpoMnhFZThxU0g4YXppUmtJUHo0TGc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, '연내 개인화 AI에이전트 앱 출시'...검색·광고 수익화도 박차 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "네이버, 검색부터 예약·결제까지 AI가 대신…연내 앱 출시",
        "enTitle": "네이버, 검색부터 예약·결제까지 AI가 대신…연내 앱 출시",
        "date": "2026-11-12",
        "originalDate": "2026-11-12",
        "sourceName": "매일경제 마켓",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1SclNMN3ZOT1djQ0gxeWVsb3QzYU9WSjN0REdQSjhVc2pzZHcxSzFZTmpxNzRXTjRKRVVQcGhEaUdWUHVMdmJEQWszYjNweUVjbWc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, 검색부터 예약·결제까지 AI가 대신…연내 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
