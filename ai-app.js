/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-19
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Gemini Ghostface를 수행하는 방법 AI 사진 트렌드 (프롬프트 포함)",
        "enTitle": "How to Do Gemini Ghostface AI Photo Trend (Prompts Included)",
        "date": "2026-09-19",
        "originalDate": "2026-09-18",
        "sourceName": "perfectcorp.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQcHBPUURNczAxX1NtbmVTOW1qcVVyNl9yWlpjaFZBNFhoYi1aMHpNQ1FvTkxrUjU1SkJCUGZodTdiUHkzRHM1eTBsN2pTZ1MwWmFRZFBfWnd1NF9fbVhXcm5RcTVyX0xCa2dXLTItQXhleHltLVNuOXh2QjdiN1ZWa1VibGVFdw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Gemini Ghostface를 수행하는 방법 AI 사진 트렌드 (프롬프트 포함) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "래디슨 호텔 그룹의 글로벌 커리어 페스티벌은 호스피탈리티 분야에서 커리어 모빌리티와 AI에 중점을 두고 돌아왔습니다.",
        "enTitle": "Radisson Hotel Group’s global career festival returns with a focus on career mobility and AI in hospitality",
        "date": "2026-09-19",
        "originalDate": "2026-09-17",
        "sourceName": "Hospitality Net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQYTBnS3Z2TEh1d1pOcjQtMTBVdW9MYThfOUtLOE1zbHpLbkVMeWtuajdBNE9MU1FPZlhpcWJmaEVQbDlzT3NYM0M5b1JBNlFxNEtscUhXU01DR3VUYk51aFZyd3I0bFZ5NGpwMWJVX0JQR05jeWVUbG1SV0doTWdoOUc0dk9NSFZUZUlSd25jUW8zekZVWWUwcUxCMlVCcUtzQU1yMDIyUVQzQy1rM1VFZ2EtaDBJZVFMVndkd0d5VmVIclJxMG9UYnlkbDA5YmNRdWZWZ0wxT1E3TGRJQlk1bTJvcDE?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 래디슨 호텔 그룹의 글로벌 커리어 페스티벌은 호스피탈리티 분야에서 커리어 모빌리티와 AI에 중점을 두고 돌아왔습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인력: 일부 대학 졸업생이 일자리를 찾지 못하는 이유",
        "enTitle": "Workforce: Why some college grads are not finding jobs",
        "date": "2026-09-19",
        "originalDate": "2026-09-16",
        "sourceName": "The Journalist's Resource",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQSW4tYjEwTDlVdVoyTGZISm9tUVl4angyLW4wWU1jenhtTDdaVGp2eEJXNlY1X3hvaEZuOVRiT04zUGMyU05NQ3VkQS1aVWJZR1pGQ1pEaWI1VUdzcW5XWlNTazBFQkRxakZMOVJEQTJyeDl6TWJabTZZNFN2NEVya013?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인력: 일부 대학 졸업생이 일자리를 찾지 못하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "\"클로드로 챗GPT 뚫었다\"…내부 코드 저장소까지 접근",
        "enTitle": "\"클로드로 챗GPT 뚫었다\"…내부 코드 저장소까지 접근",
        "date": "2026-09-19",
        "originalDate": "2026-09-18",
        "sourceName": "연합뉴스TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5TdFJCemEyVjF3c3BEaHVrV1EwaFhrallVengybEkyZS1ja3ItUDY2U0RFV05zOFgxckl4TlNJNlJOZHlRZEliRU0yalM0QTNNUUVZdkRDYlIwUU0tRUtxdXh2OVdSM0U?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"클로드로 챗GPT 뚫었다\"…내부 코드 저장소까지 접근 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "렌탈앤캐시, AI 기반 `맞춤형 렌탈·가입 비교 서비스` 정식 출시",
        "enTitle": "렌탈앤캐시, AI 기반 `맞춤형 렌탈·가입 비교 서비스` 정식 출시",
        "date": "2026-09-19",
        "originalDate": "2026-09-18",
        "sourceName": "마이데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE94cVh0YzNYQ21ydGhXdms3aU1vb09FMnJ2S29aS25QQVlBN3k5U01rYWNwNGwzQ0twc1RCRHhCOFF4bGRWRXVuYW43OS1RSXUxQnEtUFI1eXVEeGxlQ0xSMQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 렌탈앤캐시, AI 기반 `맞춤형 렌탈·가입 비교 서비스` 정식 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 자율 상담기업 케이잡스, AI 취업센터 출시",
        "enTitle": "AI 자율 상담기업 케이잡스, AI 취업센터 출시",
        "date": "2026-09-19",
        "originalDate": "2026-09-18",
        "sourceName": "ceoeconomy.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBhMXJaZzJfdGxaRHBGYVdLdHFXMWdrTWpyZEZzdjdYNjNMcm1RSGNDa21wOXZGMVhnMXVCb1JrbUxLUWxKT0NZVU5yZjc0U2VlTXpKUUZ3ZUlaM2FaNGJRQy1uZlBKLVVoc1NSRA?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! AI 자율 상담기업 케이잡스, AI 취업센터 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
