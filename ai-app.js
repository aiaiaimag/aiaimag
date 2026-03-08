/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI는 전통적인 경력 상태를 대체하지 않고 직무 구조를 변경할 수 있습니다.",
        "enTitle": "AI may change job structures without replacing traditional career status",
        "date": "2026-03-09",
        "originalDate": "2026-03-07",
        "sourceName": "Devdiscourse",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPTFpmVXZHZVV4TGhGbVNlZE0tVGxKUTZzSkZQMzUyREVKeWNrMUZCbzhicE0zcGw1cW5TU2pfYXZkLUVlOTAyUFBnT3dQTGFUbTFockJSYnIxRVNuTWIzQ2kxVGtTb0xhLTQ4OWNqdmRiMUtvci0tRXlWZ0tFalpIVUIxNlF5UGFCNGxhM21LSnZIOGNpazEwdEVWVzBWeERjR1FoTEJROFgxamtiUGlFV19uNk5mdUNVYUxCX2xGRkZSQkJwRDNn0gHMAUFVX3lxTFB3VWhCV3FzR013LWhnR3lSU0JkVk1KQm9jckRnbzlFcWUyLTVkRTE0LWpxRWhYenRycC1jVnhGMTBwXzMtNkRiX3pYTVdDMUpCZ1JIM2YzSmdtOGFXazlIcWdpWkgxaUZnS2xMV2p4OV9mdG1sZDZ6UUNlQ3ZJZWM4aDNwcUowcHkyZk4xWkx6T1J4MkYtOHgwbDRVS2VfOGstcU1ZQUt5T19ZSW5tR2pnTDRrWTdPZm40TlliMXRKNm1VQWZucHVWYllqTA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 전통적인 경력 상태를 대체하지 않고 직무 구조를 변경할 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "2025년 실제로 돈을 버는 최고의 인공지능 사이드 허슬",
        "enTitle": "Top AI Side Hustles That Actually Make Money in 2025",
        "date": "2026-03-09",
        "originalDate": "2026-03-07",
        "sourceName": "MSN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixwJBVV95cUxNVG9uMHpwd1lNbUw1b0VDY0lWTVRON0djNWs4NFltR3ZnVDNoWFhXZ0ZIYlVRQmNTMGpnSkZQUXhrVkpYdnVfdnVmUVZwNmtxMzdFUGh2QVUwNlNVSGZMbEFKRVpsTnBEdUJDS0pOWTdVVHEySDdNejYtTnJaeDZqVEl1V0FkdlU1bGpPV3BKbUFWTEdzSW5QUkQ3NEZZaFJrY2FMOTFkTWphTFJmWUFJSjBzY2R3Q0o4ejlMa2UxOTA1N3pES0FWUGE5ZEJ2c0I0NERyNnRWMzZsSlc4MWpxLVFVaE5kVVhpLXUxV1BkcGY0LXRILUhPb0FBUVU2RjNuanhqRXRGdEpsTVg4S0t4NUxVc0g3T3NmM0NlNnNzVU5Pcnp6eUptd1BtWXFZYjVvb3R4TENYY0JsemNKYy1uZTBoVXJTNTQ?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 2025년 실제로 돈을 버는 최고의 인공지능 사이드 허슬 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "저는 Google에서 AI가 기술 산업을 변화시키는 것을 보았습니다. 제가 어떻게 '미래를 정의하는' 커리어 피벗을 만들었는지 설명해 드리겠습니다.",
        "enTitle": "I work at Google and saw AI change the tech industry. Here's how I upskilled and made a 'future-defining' career pivot.",
        "date": "2026-03-09",
        "originalDate": "2026-03-07",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQNmJLM3ZBMDNocmxSd1VCZ2F3VnFLT0RmYmRlY291S1JBM19oMUpDUGZSdWdNcEJHblBKX044a3ZYZWY1NFNrV3YwVUpUS092d1RuclV6VmtmOHZPdERHM2Zrek81M3ZHQ1VKV20tYllpeTRZbkkySU14UVJEVXpOWHYtWWRWTjM4VmxFNGk1aw?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 저는 Google에서 AI가 기술 산업을 변화시키는 것을 보았습니다. 제가 어떻게 '미래를 정의하는' 커리어 피벗을 만들었는지 설명해 드리겠습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "취업 공식이 완전히 바뀌었다… 2026년 직장인의 생존 전략 ‘리스킬링과 커리어 오너십’",
        "enTitle": "취업 공식이 완전히 바뀌었다… 2026년 직장인의 생존 전략 ‘리스킬링과 커리어 오너십’",
        "date": "2026-03-09",
        "originalDate": "2026-03-08",
        "sourceName": "한국AI부동산신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1YQlhsdWc1VV9aaHl0VFNEQ3dSeDV3NE1Ud3JreEJxQi1JdkFndDQ3MkxjMGRqQW1LU0ZzVGdYLWRqU1d5UzhweEhsMFc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 취업 공식이 완전히 바뀌었다… 2026년 직장인의 생존 전략 ‘리스킬링과 커리어 오너십’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "매거진 한경",
        "enTitle": "매거진 한경",
        "date": "2026-03-09",
        "originalDate": "2026-03-07",
        "sourceName": "매거진한경",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1wMnpLeXlzQ1FrbXMyUEI3TkZMcEIzTl9Dak9kbE4xeVFKZEI2NVdHOU0teG5hMlRKRDhJT25McDRocWVkQzFoQzhqbGNaM2dwMXp5NUpjQmJ1ZUNYZFZ4b0hNRG5NUQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "2030을 위한 AI 실무 팁! 매거진 한경 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "발품 넘어 'AI품'…달라진 N잡러의 세계 [스페셜리포트]",
        "enTitle": "발품 넘어 'AI품'…달라진 N잡러의 세계 [스페셜리포트]",
        "date": "2026-03-09",
        "originalDate": "2026-03-07",
        "sourceName": "네이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFB4eE1jNGhuSjBoeXdtTHBvNEtYWEk3QUI3dzRpVkpRN1llM3h3VmdYV1M0UExibVdxZHB2ZFNlRTRLLUxGSEZxWWdzRU9aQU5KdEJR?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "2030을 위한 AI 실무 팁! 발품 넘어 'AI품'…달라진 N잡러의 세계 [스페셜리포트] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
