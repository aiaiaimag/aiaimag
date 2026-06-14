/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "거의 75% 가 실업 수당을 신청하지 않기 때문에 AI 일자리 중단이 가중될 수 있습니다.",
        "enTitle": "AI job disruption may be compounded because nearly 75% don't apply for unemployment benefits",
        "date": "2026-06-15",
        "originalDate": "2026-06-14",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxQc21OVjEyLThlX0tfSC00a3pXU3dadjNJcEdfWUFHZ1BXdk9FLTI4emNwU3hmb2dxRkxIN29Ub2R3cmpHMGx5YWJwSTkyZmtQVndXZF9jMDZmMlBmWDFkY2VtMGlfN2s3WkFReFdhaUF5elMtN3ZHQXVfYlpGSm5sWURsR2NaM0JMSUJfam9aRVZkU0ZMM0lUYlpUQXRsQQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 거의 75% 가 실업 수당을 신청하지 않기 때문에 AI 일자리 중단이 가중될 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "24세에 메타에서 해고된 이 데이터 과학자는 다른 경력 경로를 추구하는 것을 고려하게 되었습니다.",
        "enTitle": "A layoff from Meta at 24 has made this data scientist consider pursuing a different career path",
        "date": "2026-06-15",
        "originalDate": "2026-06-14",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOaWxoLWhJYW5WeXNOMzVKendzNlZZYWRVLUtROHlsaW1pc1NyVEpNSzdreEFGUDVSZlJ6VXE5dzlHQTBsM21nTFBqN2JnQm5raWUzVDRGdEVBR1lxSEg0ZUFabW90M0pWc1d0RElZUHBydkdHSkhrMEwtQ1VVcHc0WVdHR1JCOUY2bngxOUJWckFzQQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 24세에 메타에서 해고된 이 데이터 과학자는 다른 경력 경로를 추구하는 것을 고려하게 되었습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일론 머스크와 코는 로봇의 행진을 좋아할 수 있지만 직장에는 AI 경계가 있어야 합니다 | 헤더 스튜어트",
        "enTitle": "Elon Musk and co may relish march of the robots but there must be AI boundaries in the workplace | Heather Stewart",
        "date": "2026-06-15",
        "originalDate": "2026-06-14",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQZkZoZXZId2tQeWliZXVMWWRjdTBUSmV5TmxrQnNjX0xoVlRjTUlsNTYxM1Y1dEUwRXN5clNGN0N2dVhUSnJxSFV6cmk3dUpObEwwMnl6X3dGSWpsSnVIOVVlNjM0WWI2NVNYcTNvU192LTRkdjFVWm5EZXI4ZDdSNkhGUHNuRGRCXzBUTU0zNVlMTUFBN2FUdw?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 일론 머스크와 코는 로봇의 행진을 좋아할 수 있지만 직장에는 AI 경계가 있어야 합니다 | 헤더 스튜어트 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI 이슈트렌드] 선관위 사태 파장 속 한성숙 총리 지명·젠슨 황 방한 주목",
        "enTitle": "[AI 이슈트렌드] 선관위 사태 파장 속 한성숙 총리 지명·젠슨 황 방한 주목",
        "date": "2026-06-15",
        "originalDate": "2026-06-14",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5KYlVxRHhGcjZIZHFadU8wemFWaGdjd3FVUk9SNFBEcUxJd2xYZHlSa3hMbWtuTmV1ZjJvQ0lYT1RHYnQ1dTViX0ZZODljc2lIRThab1o5djFUWXRNbUxmUVBuLUo3QUVtSEE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈트렌드] 선관위 사태 파장 속 한성숙 총리 지명·젠슨 황 방한 주목 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"서류 500번 거절, 결국 '연봉 3억' 도어대시 뚫었다\"…무경력 AI 개발자가 밝힌 취업 비결",
        "enTitle": "\"서류 500번 거절, 결국 '연봉 3억' 도어대시 뚫었다\"…무경력 AI 개발자가 밝힌 취업 비결",
        "date": "2026-06-15",
        "originalDate": "2026-06-14",
        "sourceName": "AI포스트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9jQWNmT2VnS0ZQZk5DazQ1c2VWd1pUM0gwdjhJY08yaXduRzNQR05yR3pHbnB1LVAyczIwVlVTS2JDNmk3dXdIN2ZuVmpzSnZMRkdYQ2I2SWhyU080NG5WYmxIaVZkUkNKTklZdUt30gFyQVVfeXFMT2NzNTVPMVhWMzVDZG1IX3RsTTlGbVluME83aEZKdUN1bk12SW9mQmVpV1RKTFlMY3RFOXRkSlNPbUkxLWYtZ1g0T0t2RGtoZG56d0txOEZqSEkwWnZMR0ltQzdNM2NTemhTUVZXLVVWcHRB?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"서류 500번 거절, 결국 '연봉 3억' 도어대시 뚫었다\"…무경력 AI 개발자가 밝힌 취업 비결 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[기업포커스] 유니에스, AI 기반 취업지원 플랫폼 ‘잡매칭’ 공식 론칭",
        "enTitle": "[기업포커스] 유니에스, AI 기반 취업지원 플랫폼 ‘잡매칭’ 공식 론칭",
        "date": "2026-06-15",
        "originalDate": "2026-06-14",
        "sourceName": "아웃소싱타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9QQkZjU3pSYkhpSlZ2V0g1WkhzZ1daN1VzT25PN2JZYlZnYTdnQ19hbUJoeWlKVDBISHltcmhtejVoM0FJNzhxQkdjSWxLd0FHZGU5V3BfNnV1UmI4V25GSlRHdkJOM00tMjc5OExIa0hrQQ?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! [기업포커스] 유니에스, AI 기반 취업지원 플랫폼 ‘잡매칭’ 공식 론칭 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
