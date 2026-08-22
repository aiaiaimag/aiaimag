/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "변화하는 취업 시장에서 인공지능의 재판 요인 후 남자는 $ 95,000를 얻습니다.",
        "enTitle": "Man wins $950,000 after tribunal factors in AI in changing job market",
        "date": "2026-08-23",
        "originalDate": "2026-08-21",
        "sourceName": "ABC News & Headlines – Australian Broadcasting Corporation",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQSWkyc205bm0xcWl4Q0FTeDdGWTR6RE8yXzJSVzNkMEg2MzdrenRLSlBPTktNd1pKQ1Y3WlJDT3FEb3BhWEI3ZHlGaENBV2M5emtSd3d2V0M3c2czeDhGNXFHbzVlRF9OMkR4LXgzNUNPLTVaM2V4eWNMMEVSajVxZUlCS0EtVXBmdGN6STFscUF5QQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 변화하는 취업 시장에서 인공지능의 재판 요인 후 남자는 $ 95,000를 얻습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "들쭉날쭉한 작은 기술: 차세대 커리어를 구축할 인공지능이 변화하는 방법",
        "enTitle": "Jagged little skill: How AI is changing where the next generation of careers will be built",
        "date": "2026-08-23",
        "originalDate": "2026-08-21",
        "sourceName": "The Globe and Mail",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQai1ya1RuWU5NY1lNeERpeTVCVGpKcVBwTXlFaUNLcFlzdXhhRkdsaTVoS1pCOVNnaTdLZlN3WE1LMzlTeXlFd19lMEk2d1dqb1IyTW5WYWlkS3lDcTJIMjNHT1pISlQxRE1SQTZ5WVBWOC1lMy1SSEZxLTNNMWVlYUFNbTJZSWI0eFA1YzRQaEg4bGwwLUYyNy1VU0VBVllGQVdnV2xNRjZSbmluX0xTNEJHaHRnZjZOVDRxSDJXZng5UFliNl9EWXQ3a3k?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 들쭉날쭉한 작은 기술: 차세대 커리어를 구축할 인공지능이 변화하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "주제 - AI가 소셜 모빌리티와 업무의 미래에 의미하는 바는 무엇인가요?",
        "enTitle": "Topics - What does AI mean for social mobility and the future of work?",
        "date": "2026-08-23",
        "originalDate": "2026-08-21",
        "sourceName": "Charity Digital",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOM2djbmZsR1o0cVBvWE5RTU5uR2d1VVpsal8zQ2RhcjBjZlBsMEVNRlp6RE9UREdvSi00dk1DNU9zMzY4VzlnQjl4ZUFpX2R0eG55clJ3UG5qRXhEUWdZZGlQRWpLcWhXbE9SbW9admRXZXFybm5HWkVMZ19DNHJxZDJOV29lUEhLcjVxcGRWY0htX2pNUTdScWtlSjVNYnktUGFSSURn?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! 주제 - AI가 소셜 모빌리티와 업무의 미래에 의미하는 바는 무엇인가요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI 이슈트렌드] 집중호우 피해·민주당 전당대회 주목…증권가는 '대형 주주환원' 화제",
        "enTitle": "[AI 이슈트렌드] 집중호우 피해·민주당 전당대회 주목…증권가는 '대형 주주환원' 화제",
        "date": "2026-08-23",
        "originalDate": "2026-08-22",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5zTlBYQ25FWmVFS2p6aVF6dzRZTHZ0SEktaTR0NFBEbERIaU0yUDdZdUlQSDNIS3Z2ZG5abmhvdElmQ0J4dGt4Y3RTejBidTM3Q3JOVzRELUk4eGxHbFNyanRKcmJEZTU2NGc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈트렌드] 집중호우 피해·민주당 전당대회 주목…증권가는 '대형 주주환원' 화제 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "챗GPT·클로드 구독료 10% 할인…‘카카오뱅크 착붙 신한카드’ 출시",
        "enTitle": "챗GPT·클로드 구독료 10% 할인…‘카카오뱅크 착붙 신한카드’ 출시",
        "date": "2026-08-23",
        "originalDate": "2026-08-22",
        "sourceName": "issueon.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5ydVF3Nm54YzJnelhHcXJhSzkzQ1dFZ2RzNG83ek1DQkwtTHVMWFNOZW53RG5oZmYwTU04b0xDRnZ3RHg5Y3pZdUJEVU83em5nQ0RtWVRjMC1ONVdVb2U1MlZzT2RjcUZuOTRV?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드 구독료 10% 할인…‘카카오뱅크 착붙 신한카드’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "요즘 클로드가 한국어를 어색하게 쓴다고 느꼈다면",
        "enTitle": "요즘 클로드가 한국어를 어색하게 쓴다고 느꼈다면",
        "date": "2026-08-23",
        "originalDate": "2026-08-22",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5RUExIRGsyM21YVGdBanBObGxWQ245MEJXVDQ1XzgzM3MydlowQk5oLUxUNXFsUVBhZ3JLWmo2N25ZSlZ3NFdNU2Y4MlNRaTdtS2JEN0djRXQwQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 요즘 클로드가 한국어를 어색하게 쓴다고 느꼈다면 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
