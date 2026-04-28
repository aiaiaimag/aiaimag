/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-29
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "대체 또는 재창조? B-학교는 AI, 일자리 및 MBA 파이프라인에 대한 불확실성에 직면합니다.",
        "enTitle": "Replace Or Reinvent? B-Schools Confront Uncertainty Around AI, Jobs, And The MBA Pipeline",
        "date": "2026-04-29",
        "originalDate": "2026-04-28",
        "sourceName": "Poets&Quants",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxQRHlqaFJab2hVdEFYRVNCTTBjc2xVV3l1azdTcm9NWlE4Q1VNR2ZGWldTZlBUSlFaYl9oZzlubFBrUTdabVRHOWQ4QUJlc21xN2xHVEJQenlSN29KN3A0d0ZuUWJIbkpkUU15QzhUTzRkZWw0alBlWlZJRHM5aFRwN05EbWJnUTBjNDZEalRHbEhDQlZXZHo4TE90azhrR3NtVkpzbzdVNHp2eGxvN2xuQnVoQ1FOZmxkYUtLX2FsSnNiVVlxUlFZVnBkejJBMU1qckd0MWpRam5vN3huSlg4?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 대체 또는 재창조? B-학교는 AI, 일자리 및 MBA 파이프라인에 대한 불확실성에 직면합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "영국 CEO의 절반은 AI가 일자리를 줄일 것으로 기대하지만 데이터는 다른 이야기를 전합니다.",
        "enTitle": "Half of UK CEOs Expect AI to Cut Jobs, But Data Tells Different Story",
        "date": "2026-04-29",
        "originalDate": "2026-04-28",
        "sourceName": "Raconteur",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxQNjh2ZF9KTHNCeW9NTmxhcWg5YWYycVVDcXB0TXYxNWhJaTRLdEo0dm0yeFFlRXFhcXVERlkzVHZwMlBXVUhtOVFQYURVUUxtTlQyM2Z6Wl95VkNHLTFRRFZHQVpOd2JpYnZQMF9pb1dBTHdMWFkxa1pmdkFBZ3lZdnUzbENoT2FyTm1VSEU4ODAzczQtcWFwWVFPUnBuUQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 영국 CEO의 절반은 AI가 일자리를 줄일 것으로 기대하지만 데이터는 다른 이야기를 전합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직장 내 AI: 2025년 보고서 | 맥킨지",
        "enTitle": "AI in the workplace: A report for 2025 | McKinsey",
        "date": "2026-04-29",
        "originalDate": "2026-04-28",
        "sourceName": "McKinsey & Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직장 내 AI: 2025년 보고서 | 맥킨지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "함샤우트글로벌, AI 기반 브랜드 진단 서비스 ‘AIBA’ 출시",
        "enTitle": "함샤우트글로벌, AI 기반 브랜드 진단 서비스 ‘AIBA’ 출시",
        "date": "2026-04-29",
        "originalDate": "2026-04-28",
        "sourceName": "인더스트리뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9oNlFaUkt3dW9PcjhvY09IS2hSQmVtd0RQX3BsR3lLY29XQzF4YWh5b2poa2xxUUU3MU5jZ0FtcTdKN2o0MUJRbXV6N2JZakdZWko2NTNpcUF5bk80RHkxdW9kMGVCZmtOZ2dnV1hpUHpUUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 함샤우트글로벌, AI 기반 브랜드 진단 서비스 ‘AIBA’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[트렌드+] 챗GPT로 대동단결…'AI 커머스' 주도권 고삐",
        "enTitle": "[트렌드+] 챗GPT로 대동단결…'AI 커머스' 주도권 고삐",
        "date": "2026-04-29",
        "originalDate": "2026-04-28",
        "sourceName": "신아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9uSkFKN0s3bUo3UExJQjFfVVZBWmtRazRSU2g1OTZHVXQ0TmpoUGF3WkdqRFZwTWNaNi1hRVB0UHB4QnhaTHNxaEFibTgzbm9CMUcza19hZVQ5bnlrOTM0emYwSU8tNUZmYTR2UC1OSnk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [트렌드+] 챗GPT로 대동단결…'AI 커머스' 주도권 고삐 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[IT는 지금] 네이버, AI 검색 서비스 'AI탭' 베타 출시 外",
        "enTitle": "[IT는 지금] 네이버, AI 검색 서비스 'AI탭' 베타 출시 外",
        "date": "2026-04-29",
        "originalDate": "2026-04-28",
        "sourceName": "딜사이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBpblc2dzNKQkxvbUlfU2doYVVBaVpNT0s1dFUxTzQwSzdPc1JtYnJ5MEJFUnVxOGg5anl5SDZUT3Y3WjB0N1cwaFUxUldER3c?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [IT는 지금] 네이버, AI 검색 서비스 'AI탭' 베타 출시 外 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
