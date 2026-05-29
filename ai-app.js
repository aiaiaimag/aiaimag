/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-30
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Z세대에게 보내는 인공지능: 젊은 가톨릭 구직자와 직원이 일의 미래와 씨름하다",
        "enTitle": "AI to Gen Z: Young Catholic Job Seekers and Employees Wrestle With the Future of Work",
        "date": "2026-05-30",
        "originalDate": "2026-05-29",
        "sourceName": "National Catholic Register",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFB0VDFIMHA2dmpsdS1NSnhtMlFNZDNZRHB3ak8yemk4S1AzZ01Ed2NhYTQwUXpORTB0WmZNQzQ1MkF6MGNkTjZmeTR2UEZsRWM1Xy1aaEd30gFbQVVfeXFMUHJNcGZ0RFQ2RnFBWkxtLWc2OTdNMU5ubWtYc1dEMXlwdjBUNHo4eVYwX2YtMnNWdVdBY3VpMEYxTy1VejA3N0xyTnVRUndXNUxwRzFMSS1oS19aaw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대에게 보내는 인공지능: 젊은 가톨릭 구직자와 직원이 일의 미래와 씨름하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 초보 수준의 일자리를 망친 방법",
        "enTitle": "How AI Broke the Entry-Level Job",
        "date": "2026-05-30",
        "originalDate": "2026-05-29",
        "sourceName": "Washington Monthly",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPbDZTSi1UU1drT2pjQWZHLW9ETlZsWU8xX2k1QmZBRTJCV2xGTVZRRXE3Z0I0Sm9yT1huSmRuX2lfc0JtQnhfNXAzYmt6emFsT3lXdndGc1lZM29lTUNHbElSb2JDZ0RnaUwxRzhuYzhkVzVFSVdIU0hDVGJzTDZoUzR5SjJldw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 초보 수준의 일자리를 망친 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "‘그게 삶의 의미인가?’: 버니 샌더스 (Bernie Sanders) 가 기술 CEO들에게 노동자를 위한 인공지능 미래에 대해 질문하다",
        "enTitle": "‘Is that the meaning of life?’: Bernie Sanders questions tech CEOs on AI future for workers",
        "date": "2026-05-30",
        "originalDate": "2026-05-29",
        "sourceName": "The American Bazaar",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPT1ZPZEdIVVdla0lpTnV6WlZndU9NdHVzeHJ2YWZKSmx3R2hoMG9aU0hoaDdJN3dVdVVydDQxWjFmWUZnVENLdnVMaVo3cXI0cDM3eGd6RFVoUWVocnR4SGRzOFJmOVJvUFRsemZWd2l4ZS1FeVBfdTQxdWRZcW03dm56a1JfdTgwak5LQllYZV9zeDg5QWQtV1NTdEFRQjBCdUoyWnBEalVCcmh5RjJSTg?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! ‘그게 삶의 의미인가?’: 버니 샌더스 (Bernie Sanders) 가 기술 CEO들에게 노동자를 위한 인공지능 미래에 대해 질문하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "enTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "date": "2026-05-30",
        "originalDate": "2026-05-29",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOcW9xdjdiX1hrZHNlRXY1Q2FvZHRKTWU1OU5EWmtNUTRRSnhmbnN0bUVlbXNXZnNyNWFsa2JEdG9mbFpaSFNCR3Q1T0Z3bnRUdU5lcW0tTGJSQlBUODZQWlpySGJhaDI1UGVpc1E5eXgySHRQQXJSRFFzZTh6U25XMg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 이제 Mac 환경에서도 제미나이 앱을 만나보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[영상] 챗GPT vs 제미나이 vs 퍼플렉시티 vs 클로드···작업별 AI 비교 총정리",
        "enTitle": "[영상] 챗GPT vs 제미나이 vs 퍼플렉시티 vs 클로드···작업별 AI 비교 총정리",
        "date": "2026-05-30",
        "originalDate": "2026-05-29",
        "sourceName": "시사저널e",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFBBTWU5eHAtTnNTbUROR0tickdKdmFSMDFzLWZaZHFzNFhFSUNfc29qQnN6Y3NCZmRteml4V1p4azFHb1hsb2tBODRUS1dvanA3ZWJfRVpLZnRjT01uODJKU1pLMXdRSmlmVzRqMzgwUTFvd9IBdkFVX3lxTE50OVdseHpkSF94ZnZDQU5PZ3V0MHE1b21Mbm9hQzhYLXdncTVhdkFESFNiRlVUZVc5VjhEZWRvcExKUk1wT3pEa19Pd3c1UHE3dFBGZXZDTXI5ZXRxNDMwcU1lTjdPaUNmTlZ2RVJRLUxmWlp4N0E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [영상] 챗GPT vs 제미나이 vs 퍼플렉시티 vs 클로드···작업별 AI 비교 총정리 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글, ‘Google AI Studio’ 모바일 앱 출시",
        "enTitle": "구글, ‘Google AI Studio’ 모바일 앱 출시",
        "date": "2026-05-30",
        "originalDate": "2026-05-29",
        "sourceName": "디자인 나침반",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNUm5Db0xtRi1QRkNXOUp1S0tGT29vZ2tmNVJ5YWJiOW1VY3lkVVdlRWhjTzdNbEtCMGdtbVp2N0lSRlJ5QnFXWHUxdGZSZjBvNTVCU1JkM0xTbWd0UHRVeGVJLS1WTkFDQ0dwZlZoZGJIR1V1UmdhM0MyR1gyUi0tSm1KeDE0ZzRzSzJhR09rbGttODhXQi02cFc3SmZVY195MGhwZlpPX0M3WHFOdGFWVHNQOFVRdU95T3otY250RGxYMFRCanpaRjJB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, ‘Google AI Studio’ 모바일 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
