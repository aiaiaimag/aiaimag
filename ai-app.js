/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "시스코에서 블록에 이르기까지, 더 많은 기업들이 일자리 삭감을 공개할 때 AI를 지적하고 있습니다.",
        "enTitle": "From Cisco to Block, more companies are pointing to AI when unveiling job cuts",
        "date": "2026-05-15",
        "originalDate": "2026-05-14",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOQ0pLSkJzb0hzZEs0ZWFKZTExTm9PR3Vha3d4QTZvWXJQakFTd2tRQjRlTDhYbE1rYk5qbnJXeUZGQVRRanB4emhmVmNGS0Zra1gyeUd4VXBlaXhwQjNCUjJpdEczUFEtSGhkYkVNT3dBNzVLeDJoNklnYnlLUFNWRmJZeTU5NnhFNFB2WjZtV2M4Zi1qYUlDZnIwSzBmaGFMUnM4NXhWMmNfLUo4cmU2VHJEQ3REQVkwYm9QT09sOTlWZTR4?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 시스코에서 블록에 이르기까지, 더 많은 기업들이 일자리 삭감을 공개할 때 AI를 지적하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "클링 인공지능 (Kling AI), '한국 야구 트렌드' 로 42개국 앱스토어 차트 1위 ”전 세계적으로 화제",
        "enTitle": "Kling AI Tops App Store Charts in 42 Countries as 'Korean Baseball Trend” Goes Viral Globally",
        "date": "2026-05-15",
        "originalDate": "2026-05-14",
        "sourceName": "The Manila Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQQjlkSkRTTmZjNzQ0Z21YellfMzlMNzdYLTl5ZVpGMDRWTkhYSFo0MWVSZDZyLTI0Sl9ZWmI2c0NzaUthM3VfY3JMSDE5XzhELUFqaWhRUU8xX3Z3b3pHbk5WcHdqNlRQelk1QkVISmk1cm1ESE1iRk13UVFtSWl3TVo3SEZfRjBmV2VWX2ZFSkZRVFd6V0ZMRDB4a1hPYmVXcE1PTkZJUi1VN1pxcGRGelVuRXY2ZTZUSzF5Qm1naks0ZWEyMUlwZ1RFZXh2QWVEal93cWdHeG9FVm1xUmhLeERFWWxHQXBJZW1ITlNpY2xnV05JVzk5Y9IB_gFBVV95cUxQdGEwVW5Pa21pZ2ZhczlvbmR6OFBlNXVKNTVvMHFnWGlCV2FCYmdva1Q5ZU55MGdkWVZrVHI5NTVWRGVTMDZZSVZxZGViRXIzTTZjZHVTSXpYSXRsaDJuY3pkdnNfcW5VUFlmc2FjYWNKejRHc2x5cVpEcTAtV0ZoV3U2UG1RaUl4Uzl5VHN3U2RSOC1qYUFzWkt0TXF1elRrclVCZ29hTnRqSXlxbXU0dHVpbW1weWpZUHFjZnh3Z3JBUG56RFZMMDVrTlpEUG1TbkdEckRwQTZMYzkxeVlRSTZud2xPdlJaUGNhMzF4Rmh2X2d3M3ktZk92RkREQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 클링 인공지능 (Kling AI), '한국 야구 트렌드' 로 42개국 앱스토어 차트 1위 ”전 세계적으로 화제 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "의견: AI와 대학 졸업자에 대한 고용 전망",
        "enTitle": "Opinion: AI and the Employment Outlook for College Grads",
        "date": "2026-05-15",
        "originalDate": "2026-05-13",
        "sourceName": "govtech.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQeVVDcThleVhPdVJHNC1zOExXSzBrdXJPRkhCRHgyR0daY0RlSlA1bVdBVFlSbW12d1RzMEpzejh2R0xRTjgwZkNwQlJFaUVydzNaaVgwZ2piU3E1TWlVOU5Wd1k4U1QzZVpfLXdHN1ZVZk5yM0p2bVltanJnY29WaU15bUJMRU1pRV9wSUlKUXIxckx0NGpKSm5VNWFjLWFR?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 의견: AI와 대학 졸업자에 대한 고용 전망 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "개발자가 써본 클로드 디자인 실전 후기",
        "enTitle": "개발자가 써본 클로드 디자인 실전 후기",
        "date": "2026-05-15",
        "originalDate": "2026-05-14",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFB6T0FteGxaYnJWR1JuaEJ2V0JSbjRhYS1QWFpGRGNFMmJJY0Y0RGVwaUtqS3U1SDNfYUFxSjFhRlhKNm5YV3pjeEU5Y3Z3QUpaWjRoNW1oSzM3Zw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 개발자가 써본 클로드 디자인 실전 후기 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타, 왓츠앱에 강력한 'AI 시크릿 채팅' 출시...\"기록 삭제가 기본\"",
        "enTitle": "메타, 왓츠앱에 강력한 'AI 시크릿 채팅' 출시...\"기록 삭제가 기본\"",
        "date": "2026-05-15",
        "originalDate": "2026-05-14",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBxTXFQWlJWNDIzU0N3TFNzaDdfTm5BdVZCNE0xRlYtQWcxOFp1MDFlZjdkd1d0OHJwZ0ZGU0hwN2RHaWZXV1RvTlhUUEJpMl91bDdTSEpXd0VNdmhlbm9McERrTUNlQkFrY1E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, 왓츠앱에 강력한 'AI 시크릿 채팅' 출시...\"기록 삭제가 기본\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"회계 검토도 AI로\"…핑거-삼일PwC, ERP 기반 서비스 출시",
        "enTitle": "\"회계 검토도 AI로\"…핑거-삼일PwC, ERP 기반 서비스 출시",
        "date": "2026-05-15",
        "originalDate": "2026-05-14",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1NWWJ4dFd1ZGJ4a2NRS0twc3B2MWgzWE40X1pFQmFLNVIwMHJYbUs5U1RUQXFPcTRHU3hNY3VUbzFyR05obER3MFlKckdJNWl5TlJSV2NB?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! \"회계 검토도 AI로\"…핑거-삼일PwC, ERP 기반 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
