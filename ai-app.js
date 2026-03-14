/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능이 당신의 직업을 대신할까요? Microsoft CEO 사티아 나델라 (Satya Nadella) 가 커리어의 미래를 보장하는 방법을 설명합니다.",
        "enTitle": "Will AI take your job? Microsoft CEO Satya Nadella explains how to future-proof your career",
        "date": "2026-03-15",
        "originalDate": "2026-03-14",
        "sourceName": "The Financial Express",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOTllMc0dXNGpPZTNvMFZOd3FDdkswQ0JfUV9iNGRKTXhKUU1KcjZDeUhmZU9LSWlwQ0pjQ0ZZLXpta2NNNTd5ZUhMNFBHTl9NY252VkRpRDNlMnBIb1pBLUpOZ1Z1aVpHb2xVbmlXM2hoZ1NiQjhvVUlfbDVsWkQwN3IwN0NaTDV0d09fZTE5T2x1QVduQlU4Uy1VODZWQW13R2ZROTJoc0lTMTJGcHhiLTlqeWJFWlo1TnNrLWFEWjNjZ1RxS1B2bVlxQ0dpWjduM0JjTktXeFJPWXVIUFcxeU9n0gHoAUFVX3lxTE9XN3ZRRzJoRlFFTFlOc1Q5LUo1Q0Y0SVRiTGxhNWxvTHdMT0xzalh2cWN4WDJWaFdtcWYtcWota2ozZU9iU3VVQVhIT3dPWERLOGl4bWItVUNxT0ExdmlsbG1EbnhiYkpBS29Xd2ZCdklwMHJKWWRjRGxJNGMyd1hqWThHdWs3MGp0LVlDOTdZSTZTLTZ4VFNIdHFIWG5BRkdIWkh5UnpFMUlHMkVTRlBRckJqTHJnSkJ0SkFERU1sSE1yckNhV3VmbUFaX0E1VGloZ05VNUx5bnBHOFV5LTBoSXVERkx1OEE?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 당신의 직업을 대신할까요? Microsoft CEO 사티아 나델라 (Satya Nadella) 가 커리어의 미래를 보장하는 방법을 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "2026년 미래를 보장하는 커리어: Replit CEO, AI 시대에 살아남기 위한 고임금 커리어 옵션 공유",
        "enTitle": "Future-proof your career in 2026: Replit CEO shares high-paying career options to survive in AI era",
        "date": "2026-03-15",
        "originalDate": "2026-03-14",
        "sourceName": "The Financial Express",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNVExCYnNFbXN4WlFvRDBxc1E5aHY5eS1BME9tdnVMb1hScXlOSVJxamQyUmN2VWRSaFFFaDFNSVlKNGdyRXNXZ2NNQTg5NkhrQV92bFROcFBGWWstWWdmSnRBT0kwUDM4WU5OdWVlTWlyZWw3OFExRVNpd3pkcVpCbHpUNFpZQ1VMVmxRWGU4WmhhbnVqMDhiM3BCRWVVb2hVelliNk5ONzc5bGlSTWY3bHpCemhoVkZib0lISWg3R1BtblREOGhpMmVWcmduUFoxNlFUVFQzQTNMTGh6UjBFWmhnRHVOZTloYlpnOdIB8wFBVV95cUxORnJnejJ1UWY3Qk0zS3FIc2RtWl9YZUdKT21Sa0VhVk83dlkzSWpCU3dkX1NuUVpkZExpREh4bnFUU1J2ak5ubmtEUUktRXpiRGxxZHhIRUZURGRwR0d1RXVwbEMyQ3RmNWN1ak1VT2pJLTA3TFF6QjdLOEJDWlEwZUZoUEpCUU5TTjlrLXdIMVpmeDhuSE9IWXRtaWphb0twbWtNVlRzZ1hhTkJIZUVqVm5CeVZmNGRUeVlSdVFLTUtEdTVPUG1xQXE2NFpJdi00UkZIQkhXOVRWMGJhbUJWT3lLQTNjRWc4MkNMYVBldTZwTzg?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 미래를 보장하는 커리어: Replit CEO, AI 시대에 살아남기 위한 고임금 커리어 옵션 공유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "바이러스 성 AI 캐리커처 추세는 사진과 개인 정보를 온라인으로 위험에 빠뜨릴 수 있습니다. 조심하십시오.",
        "enTitle": "Viral AI caricature trend could put your photos and personal info at risk online; stay cautious",
        "date": "2026-03-15",
        "originalDate": "2026-03-13",
        "sourceName": "MSN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8AJBVV95cUxQX1dwQktvY3g1amNSbzZocHRfUVZNT3dyUWYxQlIzU2lCWFpjOTZ5TEVTbnhIa2s1RUdtOGNEWW83NXNzLTR5UFdTOFhKNC1PV3FSYm54Ny1FbDNNQlVfV1hYRDAxTHpHSlI3OUpialhEeHFuN0ZjYWtzZjdoQTV3VzVwUzlrMTktdi1XUjJCc3pmNnQxVWtfWkdsZm0zQm8tSDB4aFljdFBKRGlCLU5oekptdWZrTzRxZENZZDIxR1N2SzN5VW1EWFNIMGFSZmZzTmtUNEl5eXp1M21OTXdZcFFHSFROaW56UDRtSnNxcHdOX3NCMk1Vd2V2eElxdVp5ek1RMEVSb0dtQ1ZweDNvUVItZm9wQlNxUjdPZG1pdTVZb1Z0R0NZdzAxeHk4LU9samdQaTZaTDZQcHM4X3BkX090VkRVd2xfN3pKdF9DT1NCYmc3d0JDZmx4ZUxHU0V3aS1uQTJTcUdGdlpXX0FseA?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 바이러스 성 AI 캐리커처 추세는 사진과 개인 정보를 온라인으로 위험에 빠뜨릴 수 있습니다. 조심하십시오. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "4. 챗GPT의 독주체제 붕괴와 제미나이·클로드의 역습",
        "enTitle": "4. 챗GPT의 독주체제 붕괴와 제미나이·클로드의 역습",
        "date": "2026-03-15",
        "originalDate": "2026-03-14",
        "sourceName": "네이버 프리미엄콘텐츠",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPTWE0cU1oNEFoU2d5WHlPcm5qTHpaMWhoX2NpUmQ5TjNkbHpqYVkwQXlIV2JDNVdtOFM0V0RqTzZjdldPYnY1U0J3RmpjdkMzX293YlJ5RHFpRGZWLXFkWGJoWkQ3Mm5UcjJYYjJWbGVOS2NEeGpheGdKU0pHQncxN29HdTRDcXc0OFJ0M2VTRlA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 4. 챗GPT의 독주체제 붕괴와 제미나이·클로드의 역습 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "‘역대급 실적’에도 웃지 못한 네카오…주총 키워드는 ‘AI 수익화·책임경영’",
        "enTitle": "‘역대급 실적’에도 웃지 못한 네카오…주총 키워드는 ‘AI 수익화·책임경영’",
        "date": "2026-03-15",
        "originalDate": "2026-03-14",
        "sourceName": "동아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE42bERlNFQ0QnhMOEE5SE9ZN3BON21CbkxNZnphY2Z3LVF3OGVHa3ZpWnk4ak5ZRHdLSmJ4N1JSOGRXV3A0QkdaV1NqVUNGOW90UFotWDV0UDNhVk0wT2tEWENRRTJoVjZwR3lCMHpnVFBvbmdXUGfSAWZBVV95cUxPSkxPSjRXU2lmYndzdmJUTnRSVldFYk8tRHVGZURwbkk1Rm5TUXBtcGJwTE5SM00zaGhuOHBLTzlYc2hyWmFQOGRMMWxtbFA2dDZEX0lSSElvSXRpUUZYcnI3TmtkWnc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ‘역대급 실적’에도 웃지 못한 네카오…주총 키워드는 ‘AI 수익화·책임경영’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "알리바바, 중국의 '오픈클로' 열풍 타고 전용 앱 출시",
        "enTitle": "알리바바, 중국의 '오픈클로' 열풍 타고 전용 앱 출시",
        "date": "2026-03-15",
        "originalDate": "2026-03-14",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9XZVpJVmdLdllTTGRRNlM5WnBGdWQyWkk3cExSTnZIRlBKRFpsMW9hV2xJZHVjRlZaQ05FWFNyZ2ZkVTh5eVdhOUE5VkQ4bk4wRmFrRzlKZGNfX0h3NG5hMjRTMGYyT1pRTXc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 알리바바, 중국의 '오픈클로' 열풍 타고 전용 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
