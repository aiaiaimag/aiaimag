/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI가 당신의 직업을 취할 수는 없지만 커리어가 시작되는 방식을 바꿀 수 있습니다.",
        "enTitle": "AI May Not Take Your Job, But It Could Change How Careers Begin",
        "date": "2026-07-08",
        "originalDate": "2026-07-07",
        "sourceName": "iAfrica.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNLXl3N1lxYy1oZ0dDNjBENElpU29DZ2YyOHo0SGxwYTBnQkxFWXlCWEw2aWRDZjhETFNVeHo5Wm90YS01UTJQZzMwLWVYaU9icFdkeFVMT2NQbmR3UFhKWGV3SmxnNWwtUkphblZmbnVIVWRIQmdpSWhZMENrOGVBWFJJcXRwQVdwNE9r?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 당신의 직업을 취할 수는 없지만 커리어가 시작되는 방식을 바꿀 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 시대에 자신의 경력을 미래에도 증명하기 위해 3가지 간단한 일을 해보세요. '가치를 유지할 수 있을 것' 이라고 전문가가 말합니다.",
        "enTitle": "To future-proof your career in the age of AI, do 3 simple things: You'll 'remain valuable,' says expert",
        "date": "2026-07-08",
        "originalDate": "2026-07-06",
        "sourceName": "CNBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQbDFibkowUGcwZjlEZnBSM19Dek45cWczb09RcHM1Z2FEN2hlcWNuaWFkX2hGekRGQzR3OGZSRnJHSUZJMVVJbHpjNnl0OVQ3cmZaQWdyYS1PMGU5ZGp2dDd2bHB0OVNLNUR5Y3QzVEdETjZORTdTS2szV21GdVRfNHkyQ0xQZGZTbFg2UW5IRDk2UzZxa2VCeDJzSlRqSFlmQkHSAacBQVVfeXFMTzc1a3ZQOGU3SUhkNlRTSm5wc0dPQXlONDlkTEJteURqRmxGYzFvOURTdEo0SUVoR1Jpcy1keldIMUF6LTdQWVVNc1ZOTEhldGFnT1BDRl8wbS1uRlVNdkZ3RElMRzV3UmhNYm1qdG1oZUtiSkJPekVDd2hYM1BXS25zOWg5ZmQwQ0x6T01RSEF3UHhnZ3diV2p1Mi1KRVRyM0lVWlFUNGs?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 자신의 경력을 미래에도 증명하기 위해 3가지 간단한 일을 해보세요. '가치를 유지할 수 있을 것' 이라고 전문가가 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "모든 직장인이 알아야 할 AI 생산성 해킹",
        "enTitle": "AI Productivity Hacks Every Office Worker Should Know",
        "date": "2026-07-08",
        "originalDate": "2026-07-06",
        "sourceName": "Analytics Insight",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQbGJBcGNobTZVOU4tbTRnZENHTzRyYi1mbEtkd3JKcUxHaFlwWlF2NWVtR0h4T2ZiU0VSdnZ6WFg0bDdZdndiOGw0MmZZUWNfaUhZeUdENVdURjdpWkZFc3lGOVp3SVB0TDc5ektvTEV0WGhncXRaSTlCd2NPOE92d3ZPNkVSX0paUmpFSk43dHlVWVVSeHg5NnlCZFRXN2d6N1l4U21BTTliT2VtYXR5NGh6UFl4Z19BQzROekV30gG-AUFVX3lxTFBsYkFwY2htNlU5Ti1tNGdkQ0dPNHJiLWZsS2R3ckpxTEdoWXBaUXY1ZW1HSHhPZmJTRVJ2dnpYWDRsN1l2d2I4bDQyZllRY19pSFl5R0Q1V1RGN2laRkVzeUY5WndJUHRMNzl6S29MRXRYaGdxdFpJOUJ3Y084T3Z3dk82RVJfSlpSakVKTjd0eVVZVVJ4eDk2eUJkVFc3Z3o3WXhTbUFNOWJPZW1hdHk0aHpQWXhnX0FDNE56RXc?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 모든 직장인이 알아야 할 AI 생산성 해킹 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AWS 공인 파트너 '노타', AI칩 최적화 서비스 출시",
        "enTitle": "AWS 공인 파트너 '노타', AI칩 최적화 서비스 출시",
        "date": "2026-07-08",
        "originalDate": "2026-07-07",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5vVmpMNzY0eUd5LXJ5UnQyZXJQdHY5NUE1X3RkaDIzaWZIdHJCYUNrOTZzYjFhVFU5Y0FKZDJDamptQ2FoRjcycE5Jbw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AWS 공인 파트너 '노타', AI칩 최적화 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "Anthropic, 클로드 코워크 모바일 및 웹 출시…원격 근무 지원 확대",
        "enTitle": "Anthropic, 클로드 코워크 모바일 및 웹 출시…원격 근무 지원 확대",
        "date": "2026-07-08",
        "originalDate": "2026-07-07",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9LNUhYWGRvci1nQ1F0cDdReUdnU1JlQVA0T29JT3BlVnN4cmgwQks4ckxFeVRkaU1FZS05YzUxUngtU21hR2tfd080TEZuV210NXhMN1Nuc0h1dl9fb3I3cDVpT3UwVm9Xa2RZRTZCR2dKcWRsQUZn?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! Anthropic, 클로드 코워크 모바일 및 웹 출시…원격 근무 지원 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "한국폴리텍Ⅳ대학 충남캠퍼스, 충청권 최초 ‘AI 매칭 취업박람회’ 연다",
        "enTitle": "한국폴리텍Ⅳ대학 충남캠퍼스, 충청권 최초 ‘AI 매칭 취업박람회’ 연다",
        "date": "2026-07-08",
        "originalDate": "2026-07-07",
        "sourceName": "뉴스와이어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE4xQWZ5RnRGdUlTTHRWeG1EUzhiV2Q1MTU4OF9QSU02b016eWdzVEhiNlRuaFItcWxOZXRyVGcwcHFzd1U0R3Z0VDZZY1lYR3R1TE5aR29TQzZaRVpxTmcw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 한국폴리텍Ⅳ대학 충남캠퍼스, 충청권 최초 ‘AI 매칭 취업박람회’ 연다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
