/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-05
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI와 일의 미래: AI가 일자리를 없애기보다 바꿀 가능성이 높은 이유",
        "enTitle": "AI and the Future of Work: Why AI is More Likely to Change Jobs Than Eliminate Them",
        "date": "2026-11-05",
        "originalDate": "2026-11-04",
        "sourceName": "TD Stories",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOajRSTnY3TWhFMEVwSE1TVG5Oa1E3ZjJUT0dXUThSb3VpNVJDcnNsT3Y0bFdkQ3FZcVZPbjYxN3hvZ3F6Q19YUWhJWGJGUzlOYXZoTmJzOG9EV3llLXRPSHBhSXhqYjZEazZwLUJNc0JkM2FEQmlMNDNwSXREY18ydDI3RUhZSmJCcHBvTl9FZF8xNW1mdkIzRzRKMGszczJmTXBEOWtVTGc0ekhQMEVCdVBQTUdNVkxoSVU0?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 일의 미래: AI가 일자리를 없애기보다 바꿀 가능성이 높은 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Coursera 직무 기술 보고서 2026: AI 및 주문형 기술에 대한 5가지 연구 결과",
        "enTitle": "Coursera Job Skills Report 2026: 5 findings on AI and in-demand skills",
        "date": "2026-11-05",
        "originalDate": "2026-11-04",
        "sourceName": "qz.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5NSkQwc0dzQ1N4dlhSYUtpS3NKNEZqV0pDWHF0aG5qTGt0TVQtMk10eWxOY3l5VlNGODJXY0U1NlFORVV0UHRVd21rYm9jV1BHY1RpbGFHMmE0Z1RQQlliSVNKdzFVRnozTTJz?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! Coursera 직무 기술 보고서 2026: AI 및 주문형 기술에 대한 5가지 연구 결과 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 시대에 일의 미래",
        "enTitle": "The Future of Work in the Age of AI",
        "date": "2026-11-05",
        "originalDate": "2026-11-04",
        "sourceName": "United Nations Development Programme",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBzaWNwdmZ5WnNlNV9wQWRkZVBLc3VQQzNUNVRYaURkSk8tYmdYVW1aRXFWemN0MXdPTUwydnhRQmRlMEdObm1tNWhpWHg1NW14RDY2alJreElQcEpfMmdSZlJDdVRQR0ZZczM4?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 시대에 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "충남 당진시, 2026년 일자리박람회 성료…현장 면접·AI 취업지원 호응",
        "enTitle": "충남 당진시, 2026년 일자리박람회 성료…현장 면접·AI 취업지원 호응",
        "date": "2026-11-05",
        "originalDate": "2026-11-05",
        "sourceName": "뉴스홈(newshome)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBONkdFT1JpQ2NKZ0ZuZ3hWRDVuM1JBeEdVVDgtQ1JLOHNYOFp5aEpUZnI3REhSb0Zqc2Excm96ZTB6ZGV6VFRzaVNSdjBsQUh3bi1RdWdycWkybl9CWWthZGJMbmd6Mms0Qk8yNXd3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 충남 당진시, 2026년 일자리박람회 성료…현장 면접·AI 취업지원 호응 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "말하면 사진 찾아줘…클립아트코리아, AI 검색 서비스 출시 - 머니투데이",
        "enTitle": "말하면 사진 찾아줘…클립아트코리아, AI 검색 서비스 출시 - 머니투데이",
        "date": "2026-11-05",
        "originalDate": "2026-11-05",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBJSEdrbmktVEh6dENNR2RRX24wWFg2d1pIUkFPZHRzcmtQS3E3M2kySUFMelhtY21xenppN1ZNQkxfNS1SWnFrY3JLbHNpOThOWTRJNDJrYkdFcFN1alRCd0RXcEJCU1pUeG1VONIBckFVX3lxTE4wdVdRNkRGX2dkbFFJNmhzWXQ2TS1BcmR6eTFGUmZ5SGpUaVN1MHN3TnplczAxZk9YS0NJLWJ0bUx3QXJ2ZGxzTl92bmdRTC1lLTlxcGdFb3Y4MmthdHpuOUFpSU5VWTBldWFFYlFkTEtNZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 말하면 사진 찾아줘…클립아트코리아, AI 검색 서비스 출시 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 기반 제조 플랫폼 RWAI, 메인넷 출시 및 의류 주문 제작 서비스 개시",
        "enTitle": "AI 기반 제조 플랫폼 RWAI, 메인넷 출시 및 의류 주문 제작 서비스 개시",
        "date": "2026-11-05",
        "originalDate": "2026-11-05",
        "sourceName": "서울신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1FRGdfREFaS0dhZDhaOTVMZE5aZGdmSG9BLWhFN0xBTWlxbV9CNjY5dlp5OXFnR19aeXJ6Mldqbjdja0YweGtmM3pjRXdjNld0NTRNZ1E0NTJtRUVWbTVNQUhNeXpvSUVwVi03SkxmUQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! AI 기반 제조 플랫폼 RWAI, 메인넷 출시 및 의류 주문 제작 서비스 개시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
