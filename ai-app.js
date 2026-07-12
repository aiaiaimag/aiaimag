/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "최고경영자 (CEO) 앨리슨 무어 (Alison Moore), 여성을 위한 일의 미래에 대해",
        "enTitle": "Chief's CEO Alison Moore on the Future of Work for Women",
        "date": "2026-07-13",
        "originalDate": "2026-07-12",
        "sourceName": "Time Magazine",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5kSUk3N3ZJbEFtRWVzQWI4Q1llTDVqZzVlbTJ2akh3dkhNdHI2bnpLUWNrZzFHcVdnaFZfa0w5Z1Q1Y3VoaGo0Z1A3XzJlbnJMOXhVUTM0Q1lHOWxySW1PbkNUSFl1NU9Zam0tUnM5R1JKUk9yS3QxbA?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 최고경영자 (CEO) 앨리슨 무어 (Alison Moore), 여성을 위한 일의 미래에 대해 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI로부터 안전: 미래에 성공하는 데 도움이 될 직업은 무엇입니까?",
        "enTitle": "Safe from AI: which jobs will help you thrive in the future?",
        "date": "2026-07-13",
        "originalDate": "2026-07-11",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPMlhHMTNLWW9mT1RsOW1VaWwxa1V5TnJFc1FMdWRsNlQtWElUcl9CdEVoNmxBcndQYkdhdVowMTl4OGtlaU5JMTNTckkxZzVlZmNfc3A4Tm9yMVlPM0tqTFBXZW05SWdPNS02R1dGTmVleDY4MmNBTmlCVVk1OTBlYjRuT0N3ajNCNnJYa0dEcm5oQ3BZSlNVTnN3?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI로부터 안전: 미래에 성공하는 데 도움이 될 직업은 무엇입니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2026년 인도에서 가장 수요가 많은 IT 일자리 10개 (그리고 이를 얻는 방법)",
        "enTitle": "The 10 Most In-Demand IT Jobs in India for 2026 (And How to Get Them)",
        "date": "2026-07-13",
        "originalDate": "2026-07-10",
        "sourceName": "TalentSprint",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQa1FIMmg5WjFJZmh3cE5GSEZDWW1BZFlqVHBlcjNCenI2SFpvZVYwV3RxNDUwRXdZQnhTWXVUMVZMSi1VZGltR2ZYS25zTFNiVEl1d2NEOWtOdDBKUEZqeWhOM0loM1hWcVhSQlN6bUdWSEFyVU1Sa29Ebzc0V3FPWlZR?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 인도에서 가장 수요가 많은 IT 일자리 10개 (그리고 이를 얻는 방법) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "오픈AI, 챗GPT 워크 출시 후 UX 혼란과 비용 문제 개선 착수",
        "enTitle": "오픈AI, 챗GPT 워크 출시 후 UX 혼란과 비용 문제 개선 착수",
        "date": "2026-07-13",
        "originalDate": "2026-07-12",
        "sourceName": "디자인 나침반",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9RMTlhcUI1eUs0RGt1em5xQk15XzhqdnJLWjc1YW9tYmwyaTJEYWdKcm51WGptZXd4ZkVSdDVPVWRINnlvdS1FLXAweEtnTEpSNTFINmZJcmwyQllTemNGaXhDRjBXYmhMa3p0SDR6eFQzYnZT?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 챗GPT 워크 출시 후 UX 혼란과 비용 문제 개선 착수 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[중국증시 주간 포인트] ②'창신메모리' 청약, '제미나이 3.5 Pro' 공개설, TSMC∙ASML 2Q 실적, 알리클라우드+세일즈포스 서밋, 올리고머 가격 인상",
        "enTitle": "[중국증시 주간 포인트] ②'창신메모리' 청약, '제미나이 3.5 Pro' 공개설, TSMC∙ASML 2Q 실적, 알리클라우드+세일즈포스 서밋, 올리고머 가격 인상",
        "date": "2026-07-13",
        "originalDate": "2026-07-12",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5nZzBxWE0wTGpxMVNwSklPRlV3LTFXdTVqSXRsbmZuZzl3c2d5NzdGNVRtQ1RPS1B6eEh4ZjNrUERFQnczRGkwdm05eHlwTGN1ODJQamRyOW1ZUlhr?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [중국증시 주간 포인트] ②'창신메모리' 청약, '제미나이 3.5 Pro' 공개설, TSMC∙ASML 2Q 실적, 알리클라우드+세일즈포스 서밋, 올리고머 가격 인상 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "네카오 2분기 호실적 전망…시장 시선은 AI 수익화로",
        "enTitle": "네카오 2분기 호실적 전망…시장 시선은 AI 수익화로",
        "date": "2026-07-13",
        "originalDate": "2026-07-12",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE0tdzFYMDRET2dPNmlmcmRmYXF5aGZTMHdRejhlTE5Sd0d2RG5MbG5rdldySGNmaFlBT0xSUWdVUkJYV0xGczZyZGRGVXF0R25ld2Fudg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 네카오 2분기 호실적 전망…시장 시선은 AI 수익화로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
