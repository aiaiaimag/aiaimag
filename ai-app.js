/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "대체 또는 재창조? B-학교는 AI, 일자리 및 B-학교 파이프라인에 대한 불확실성에 직면합니다.",
        "enTitle": "Replace Or Reinvent? B-Schools Confront Uncertainty Around AI, Jobs, And The B-School Pipeline",
        "date": "2026-05-01",
        "originalDate": "2026-04-30",
        "sourceName": "Poets&Quants for Undergrads",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQUmdEUEc0WThqTDFjWjNHclJqandhUHRjUEpwWDFQU0FGZWxtTUgwU3p4RkY3a0xZclRnQ21rM1VJYldIMGE1eHJnR3FhT3VfaHRzYnB3TDFVMEhvQkRCUnlTR2lmSThlVGEwc3hSZ0hLYktySmZ3a2dWSnBMb1BhV3BjOXhZUTFhOXg4ZnlDeGcxMUQwRGJrSnFMVkFBWDQwMkZNNk1PblN4NDJpTlRTTjlUQUc3SmMyNDlaLWEwUHB0YWJRSi1iaFFDRW4wYXlBQUh6QXBENnZiZzQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 대체 또는 재창조? B-학교는 AI, 일자리 및 B-학교 파이프라인에 대한 불확실성에 직면합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "교육자, 의원들은 AI가 미래의 업무에 미치는 영향에 대해 고민합니다.",
        "enTitle": "Educators, lawmakers grapple with AI’s impact on future of work",
        "date": "2026-05-01",
        "originalDate": "2026-04-30",
        "sourceName": "CBS 19 News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNdnhpc3Y0ZmNVZnFuOThkV1MxcURhNWt4akpobmtzeGNpR0ZfUmxERnBtaGxibFFWdUFmR0hXeVl6ZTNVZzk3T0tOVWF3d3dTbGx3UWZ0MVZtLTNGaXBtOW1UeTFvdUNfNkRfVGRwX3RaTGpRR2ZrdUFPbnpGczJkYnVOV3hXMTVYeVh3c2ljaG54anBnR2FGZ0dNNFN5MEFOb1FQY1RManIwQkJzWFdtbGtYRFdIV3lPdEdTS19neksxX2pSRzdxa2UwZWxtNlZvQXkyY2Vkdm5mRTg?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 교육자, 의원들은 AI가 미래의 업무에 미치는 영향에 대해 고민합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "봇 너머: 인도의 '덱' 청사진이 AI 작업에 대한 두려움에 대한 대본을 뒤집습니다.",
        "enTitle": "Beyond the bot: India's ''DECKS'' blueprint flips the script on AI job fears",
        "date": "2026-05-01",
        "originalDate": "2026-04-30",
        "sourceName": "ANI News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNeE5ObHRpVlJST2NUS3BqU19qQjRuNUlRZVNlMHNVeDg2N3BLSkxKOUlHQXVmMUFkVlJod0hJcVVETE5HVW9zMlpjSGZ1a2hEY2tySkVlczBJVEktblNYcVRxTVh5Y2tjWTJyY0ZJOGM5dGtBc0hhU2NPMlNIdGV4MFBHUXNadDUyNTlVb1ZFQVBOTThyUzNOb1d3LUFHVUs3b0dXMWM2eUlqbnhqNndYa1oteUFSb0dwSWxMb2ZUb24?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 봇 너머: 인도의 '덱' 청사진이 AI 작업에 대한 두려움에 대한 대본을 뒤집습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글도 ‘제미나이’ 앱 광고 검토…AI 챗봇 수익, 광고 중심으로 전환하나",
        "enTitle": "구글도 ‘제미나이’ 앱 광고 검토…AI 챗봇 수익, 광고 중심으로 전환하나",
        "date": "2026-05-01",
        "originalDate": "2026-04-30",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5PVlZDWkNuQ1pITUZEZlI2RW5PdlFRb01MX01aQmJ1MHVILThma3BvdG5FSEFhWGxXVUd3MUN1ZFVnVkxqUXA2M3puYVN6T1RpLVFJWXhwQ3FmaWJqNFc2Wm1Xb0h5Y1Y3Zmc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글도 ‘제미나이’ 앱 광고 검토…AI 챗봇 수익, 광고 중심으로 전환하나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "임팩트스퀘어, AI 기반 임팩트 리포팅 서비스 ‘impactology.ai’ 출시",
        "enTitle": "임팩트스퀘어, AI 기반 임팩트 리포팅 서비스 ‘impactology.ai’ 출시",
        "date": "2026-05-01",
        "originalDate": "2026-04-30",
        "sourceName": "blockchainus.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE96b1hWYUVWVDV2NGZEVWF6ZE1wbnFsQVFOLVZ3bUNPNm84UFk2OUxHVDVJYTBEUGd0cXNITUwxcUx0S2hJeS1hTWNFdlc3alRvWDBvUjVSckphN2ZhZXBIN2NIbWZYZF9iR251SVgySTc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 임팩트스퀘어, AI 기반 임팩트 리포팅 서비스 ‘impactology.ai’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "Klaviyo, AI 고객 서비스 에이전트용 맞춤형 스킬 출시",
        "enTitle": "Klaviyo, AI 고객 서비스 에이전트용 맞춤형 스킬 출시",
        "date": "2026-05-01",
        "originalDate": "2026-04-30",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFA1RG9tMzRKaTJhY01fVC01ZXExaGExSHVyNV80Nkp3QVNkT1FrWldlcGEyZjZjZ1BkaFQ5UFdqYTFHTGYxb2JHV1JCYzc0QUxIdVU3U2Jxejg5eHpqMlZ4VVdveVNud1pha2dNck54b1A?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! Klaviyo, AI 고객 서비스 에이전트용 맞춤형 스킬 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
