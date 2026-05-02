/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "샘 알트먼, AI 직업에 대한 두려움에 반발",
        "enTitle": "Sam Altman Pushes Back on AI Job Fears",
        "date": "2026-05-03",
        "originalDate": "2026-05-02",
        "sourceName": "Let's Data Science",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQSVlTVGdHS0RrNGpwQS1ncGZ5b2lRNUVQbUdTTEthSXJHc011cWh5Ym5VZ0hiaW80UG8xVFN1WGpUQWhrZUY2Y2ZCcEdNRUVkcXRVMF9KWTl0Uy1zM0FVNVp1Sk5zd1BURHdLMGI2dE9KV2VNbDVmbXNIS1lmY1QzRkVCZXUwbjg?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 샘 알트먼, AI 직업에 대한 두려움에 반발 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI는 당신의 일자리를 훔칠 수 없습니다! 중국의 반전은 AI 일자리 종말을 막을 수 있다",
        "enTitle": "AI can't steal your job! A China twist can avert AI jobs apocalypse",
        "date": "2026-05-03",
        "originalDate": "2026-05-02",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPZk9LTElvQWlOSnU2YXhxNWEzbWRkbkRScUx2MUxUeHlJZTYwSHZiUk1DcFBRYTczTlhSY0tGNFBsNmpCcnpnSG50QVhEX2xPdUpFOTQ2dVpoVHZ1SVlqcFppNHJOLVhfY0lkVTNkNWdaRTRqZUxKV0lNQnJOZW4tLXJGNm1QMTFNT3VNQ294dkswMTFsU2wtS2pyd0RIQVo2bVdtYkRWUGNzeXItaHdzRWh1bFpDRnZOT1A0SUNtS3BNMW1VaW5GOFR6NFRZS0Y1R05oek54Y1dJcknSAeABQVVfeXFMTzFPOFBfZHpzcXlsbmE2SlI1UlkwN1B5dkdsaHNvSElEQ3RTMnJiSTZtU3FXVzFwWUZfdDBoY25OckNEM1c5VGFwd2cyQWROT2JSd01uRTJYQWgzdGVTeFVIckE4YTd6Q1RpSWhvUU1ab1ZxeGdKWkFMUjFZRW9iZWNoTUVSWlhIZzFMYThGZmpRWl9kb2owVTZsaTVKR2hwOG1SbnJqY2RzbDY5QnFYUUs1WURDRFg3R0M0YS0zNHFiR3FZa2dHYVFzSUN4c1JSYkFjVER0bThjcm5rWEV6WVI?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 당신의 일자리를 훔칠 수 없습니다! 중국의 반전은 AI 일자리 종말을 막을 수 있다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능이 당신의 일자리를 빼앗을까요? OpenAI의 CEO 샘 알트만 (Sam Altman) 이 놀라운 답변을 내놓습니다.",
        "enTitle": "Will AI Take Your Job? OpenAI CEO Sam Altman Gives a Surprising Answer",
        "date": "2026-05-03",
        "originalDate": "2026-05-02",
        "sourceName": "Gizmochina",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9LMnZMQTVzSmpqQ0xwVk9UY2l6Y19IRUNGbjF2enRRTW1ENWI1TjVIQVNwMjM5YmRHcTRjX0xJa3YtMHFybGFucF92ZGlKeFctQXNxWXdtRDUydXhRaDNwVnB2cDlXUUZQOTRqSF9acXFUQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 당신의 일자리를 빼앗을까요? OpenAI의 CEO 샘 알트만 (Sam Altman) 이 놀라운 답변을 내놓습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[인공지능 줌인] 중국 AI 발전을 단숨에 끌어올린 오픈소스…수익성 압박에 사라지나",
        "enTitle": "[인공지능 줌인] 중국 AI 발전을 단숨에 끌어올린 오픈소스…수익성 압박에 사라지나",
        "date": "2026-05-03",
        "originalDate": "2026-05-02",
        "sourceName": "위키리크스한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1MZUQ1dTVKYm1LSXJZUWFKUHNoQUtPbFhLQUNVSDlIeWlqTXBMSDlQVzhwRFh1N0hUalFCajJEQW9sYmVVUnBwcnR1Ymd2cmh2ekYtTi1CeGFlRHB3Qng5N0ExVkNuc1A4d2F6d1F1Yw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [인공지능 줌인] 중국 AI 발전을 단숨에 끌어올린 오픈소스…수익성 압박에 사라지나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤트로픽 클로드 미토스 AI, 日 확대 추진...\"백악관 반대에 직면\"",
        "enTitle": "앤트로픽 클로드 미토스 AI, 日 확대 추진...\"백악관 반대에 직면\"",
        "date": "2026-05-03",
        "originalDate": "2026-05-02",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPNkQydklLNktuTzJ3SjFSaUJlWFJScWEzNmNSLWZMckpfdkNXRzJ5ZWFFYzc0MGljVUJ1WE42WkVpLVdjRUNlbWQ5TGJGNk9JZTJBWjFJZE9wM1dvMFNVUlg4eC0tVkJIc29ETXNCZGJ4enlBYWgzUEVUcjd0cWdueEJsYjRYZHIy?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽 클로드 미토스 AI, 日 확대 추진...\"백악관 반대에 직면\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "네이버, AI 접목해 분기 최대 매출···연내 수익모델 ‘AI 브리핑 광고’ 출시",
        "enTitle": "네이버, AI 접목해 분기 최대 매출···연내 수익모델 ‘AI 브리핑 광고’ 출시",
        "date": "2026-05-03",
        "originalDate": "2026-05-02",
        "sourceName": "시사저널e",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE8xSFRGSjlzX1pjUXJxYTgyYWl5bDRuRGU0TXEtYllvdF9Od3l6bVdzelhFc3Jqdk4xTkJHd2hCZ1REeUZRNkZyUHZtZDN3bURRZVRLbGJqYjNHRFZRODlpbTVJclozWlpLdjRkZzhBSzZHQdIBdkFVX3lxTE9nNTZGb1FaUk81RU9TeVp4Sk1DMVUxcE95YTNwVUxyMGVuaTRhNkZpcXhDbzZadkJKVDNZYV9wNG1qZ2J5dkNZbHY0UVNMdFhYY1BzSlYxRndHSTF4emJzNmkyMUF2VUtieWVoQ3QxZ0xjaGxPQlE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, AI 접목해 분기 최대 매출···연내 수익모델 ‘AI 브리핑 광고’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
