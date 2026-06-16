/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 (AI) 이 일자리를 재편하면서 인간의 기술이 더욱 가치가 높아짐: 보고서",
        "enTitle": "Human skills becoming more valuable as AI reshapes jobs: Report",
        "date": "2026-06-17",
        "originalDate": "2026-06-16",
        "sourceName": "Anadolu Ajansı",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNOE1GeFJJSmNES3J5YXh0SDI4WGQ0SjBhQ0lFUVZHa2dQMHVCV2hISG5kWnRTM1JWYXhQMFoyTEVzdFdkZGR6UTlwYWpsQ0lzN1ktQ2FiR0ZpOEpiZVp5RGctUENaLUhSNUxLbXh3QVhFQW1lSXI3aWtQcnBvOEpJckZ3Y2Z1ZHVwd2o0WjNMdG1OSDhnRkRKclZUYTljSEhnaC1qX24xYklYSzRWSlJiWlFYMGw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 (AI) 이 일자리를 재편하면서 인간의 기술이 더욱 가치가 높아짐: 보고서 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "\"자르기만 하면 성장할 수 없습니다\": Huy Nguyen Trieu가 재무 직무에서 AI에 대해 이야기합니다.",
        "enTitle": "\"You Can’t Grow Just by Cutting”: Huy Nguyen Trieu on AI in Finance Jobs",
        "date": "2026-06-17",
        "originalDate": "2026-06-16",
        "sourceName": "TradingView",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxObmUtTWFUZTF1NWZoWDdBa0MwV28yRWhKLWJCMEpuRWd1amlOOGpOU3dYbEFVcTJFQkxOdnIzSVdjWTFsVEM1Y1RfY1FUMmVFR0VLa28wUC1VeG5NMlVMQWZRanlSalZqejNrTkMycHQyanozWlgwV3BJYjQteXVLSUx4LXVfaUxPaGUwV0tzWF92d0Ytd2RCZGs3RVZTMnlJNjQ2YnFoSjN3YUJSNExZZ1h6QkZLLTVDNlpqWUVsdjFlWklKdldJT1VtTEc1Q19l?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! \"자르기만 하면 성장할 수 없습니다\": Huy Nguyen Trieu가 재무 직무에서 AI에 대해 이야기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI의 가장 큰 이름조차도 당신의 직업 불안이 정당화된다고 말합니다.",
        "enTitle": "Even AI's Biggest Names Say Your Job Anxiety Is Justified",
        "date": "2026-06-17",
        "originalDate": "2026-06-16",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQdy1INk16ajZFUnRUOHdRTDROU2xRSVl5YmpUUW5WQWRSdG5pTUJzSi1TX1lGYVN6dk4zSFJKWEdZTzQ1Z3FkaHpuaVcwVnhwaXM3MXFwZ1pIalEtRjNKd3E1aTNueUc1dUZLR0RvUEk5b1Nhb3RSUmdGeG1vM0dhYXhsZVJnSnNOcUhjZ1FVTS1TY1YyVTB1TFM5NVBtOHRDSWZVTkoxYWNNUWx3LS0tSHo2MnpvLVM0UWNMQW1rZm5oMXJzX1pZWEhOTXZaM2VTczdoTEN2dzc0Y3FVam40bGUxeF9QWWNGVDdF?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI의 가장 큰 이름조차도 당신의 직업 불안이 정당화된다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "소프트뱅크, 日서 오픈AI 기반 사이버 보안 서비스 출시… 美 규제 속 '기술 독립' 가속",
        "enTitle": "소프트뱅크, 日서 오픈AI 기반 사이버 보안 서비스 출시… 美 규제 속 '기술 독립' 가속",
        "date": "2026-06-17",
        "originalDate": "2026-06-16",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQMUp3eGpLVlBReDNZQ2VQci12MEZSR01JWkNiOG5RWWgySS1PeWlPVGF1VUNKdGhnRGxmOXJzNFYzWjNPZF9EcXV5MXJQVHI4LXIyeHhsUjdRU3UxdE5TNjRTSklUZ1ZWbzlMQWVDSDF1dnNkQlBmMnhJVk02Wkdvc0RaM0YtOWxD?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 소프트뱅크, 日서 오픈AI 기반 사이버 보안 서비스 출시… 美 규제 속 '기술 독립' 가속 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "BNK금융, AI가 운용하는 퇴직연금 서비스 출시",
        "enTitle": "BNK금융, AI가 운용하는 퇴직연금 서비스 출시",
        "date": "2026-06-17",
        "originalDate": "2026-06-16",
        "sourceName": "bseconomy.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE01RGVYbUxlZEpJOV80RkhXb3Z6N1liSnp6bUxyVGg1ZzhyTlI1RXV6RFJDQkxkN3VJblczNjFzQTc3c3VkRENLZThzdHlpOXV2T253QlFZV3l2dGoyT18tQnJLQXI1cTQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! BNK금융, AI가 운용하는 퇴직연금 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽, '클로드 맥스' 허위 광고 집단소송 직면...\"토큰 용량 못 미쳐\"",
        "enTitle": "앤트로픽, '클로드 맥스' 허위 광고 집단소송 직면...\"토큰 용량 못 미쳐\"",
        "date": "2026-06-17",
        "originalDate": "2026-06-16",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5TNFI4UDVvSDFhX3NuTjFmVllNSXNfVGdienJUcEg0dE03dEU2YV9jS3Y3eDl4ZHFHdEJ2aVNNeUhGR0VrMHAwcVNxcy1SOW5veldJQTlnSVh2emc0eUh2d0R6c0VhOTZhYnc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, '클로드 맥스' 허위 광고 집단소송 직면...\"토큰 용량 못 미쳐\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
