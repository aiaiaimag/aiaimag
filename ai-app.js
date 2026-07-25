/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "새로운 연구에 따르면 직업에 대한 가장 큰 위험은 AI가 아닙니다. 그것으로 배우는 것을 거부하고 있습니다",
        "enTitle": "New Research Shows That the Biggest Risk to Your Job Isn’t AI. It’s Refusing to Learn With It",
        "date": "2026-07-26",
        "originalDate": "2026-07-25",
        "sourceName": "inc.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNdEtwSUVySjJlMm5sb0Nvb0JuSWZ4VHU3XzZpc01iSnZia195NW9oUC12RmdCN3VWSjBBQVhoeDBfU0N5OFE2enY1UzltMlAwUTFhSVBzQkQ1SE5XTXh6LUVBOEhlcm9QcU5KeGliVTh2V3BIZl8xWWZ2dWtOQnFYZFNrSGhPTkxMSGR5b3R2WlN5SDliRHdUcUFuMmhYdzdnZHRKNGFjZTJMN25NS2gtbW9ZTmZSOXVkSldXb0lqbzQ0NkJZbGRMSElITTNqZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 새로운 연구에 따르면 직업에 대한 가장 큰 위험은 AI가 아닙니다. 그것으로 배우는 것을 거부하고 있습니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Solopreneurs가 AI에게 넘겨주기를 거부해야 하는 것",
        "enTitle": "What solopreneurs should refuse to hand over to AI",
        "date": "2026-07-26",
        "originalDate": "2026-07-24",
        "sourceName": "Fast Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOQTk1YjFMeHFLYTFRWjJqZ1o4QWdyUXZJaGpCSzRkVENwU0diYktSM0k3NlhoZ1BRal93Rm80UFpZRk5XQ3o1Mzd3RnlYZjJOd2RSRGpRVlZOU2hIdENtQTI0MXdtNGNKeHFWLVhhc3ZwMjdzZ19jNDJNWmluZnNXRkpDeTRYOXBIcjZjSTF2a1I?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! Solopreneurs가 AI에게 넘겨주기를 거부해야 하는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 작업 손실에 대한 전문가의 상위 20개 이상의 예측",
        "enTitle": "Top 20+ Predictions from Experts on AI Job Loss",
        "date": "2026-07-26",
        "originalDate": "2026-07-24",
        "sourceName": "AIMultiple",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE1LckFPekg2eWZXd2JuN19Bam5tNWV2WmtqOWVTbDJFT0lMNF9MSVpQUjZzZkkwaEJrZ0lmaHhYZ3FZRFVUcTJuVWx3?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! AI 작업 손실에 대한 전문가의 상위 20개 이상의 예측 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "미드저니, 점성술 앱 인수하며 사업 다각화…첫 모바일 앱 출시 예고",
        "enTitle": "미드저니, 점성술 앱 인수하며 사업 다각화…첫 모바일 앱 출시 예고",
        "date": "2026-07-26",
        "originalDate": "2026-07-25",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5WcDJFM1djVjlTOEtYeHZWN1JUYi1SSlIxVGw3aDVIUVhvU0Z3YzlpaHY4TzZKSXREakh5YlNSeFZBclRNVDN4VU16bnJ5QVM3WFhDS2hFdHFGdmF6S2ZQX0xHX2FCVUJZWXc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 미드저니, 점성술 앱 인수하며 사업 다각화…첫 모바일 앱 출시 예고 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "클로드 코드, 42주 동안 사용한 팀의 워크플로우는 어떨까?",
        "enTitle": "클로드 코드, 42주 동안 사용한 팀의 워크플로우는 어떨까?",
        "date": "2026-07-26",
        "originalDate": "2026-07-25",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9DZEZnYlp5S3ZCZDg3Nks1RjF4bkxEcWstSHdpUngtUXhSRjJNOHdmWmtBakdVbVBSZm5CX0szdXdhYVotUjRJbGdWdXB0Rm1RY1VWVmlhT0hIQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 코드, 42주 동안 사용한 팀의 워크플로우는 어떨까? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[AI 이슈 트렌드] 쿠팡 화재·삼전닉스 레버리지 논란...BTS 월드컵·영화 '호프'도 눈길",
        "enTitle": "[AI 이슈 트렌드] 쿠팡 화재·삼전닉스 레버리지 논란...BTS 월드컵·영화 '호프'도 눈길",
        "date": "2026-07-26",
        "originalDate": "2026-07-25",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5kWjFLNTVGeTdLNExCQzk1UGNZRVIzNUZlY2pjNW9TaTdiYXA5S1ZudTFKQzZoVVo3bEZzVWxTYVRacmwxYjMzcGdSSTg3YXVqX25CY3o2Q2toVHE3clRKazZSc204WEJaQUE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈 트렌드] 쿠팡 화재·삼전닉스 레버리지 논란...BTS 월드컵·영화 '호프'도 눈길 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
