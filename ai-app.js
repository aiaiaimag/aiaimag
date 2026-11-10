/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "글로벌 스터디 조사에 따르면 근로자 10명 중 거의 6명이 고용주의 AI 가치보다 일자리를 거부할 것으로 나타났습니다.",
        "enTitle": "Nearly Six in 10 Workers Would Reject a Job Over Employer’s AI Values, Global Study Finds",
        "date": "2026-11-10",
        "originalDate": "2026-11-09",
        "sourceName": "Fair Play Talks",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOZXJ3Ulk5M2JLb2pOVldIZnU4UGw4bldtdm1RaHB6cVVMVG9lVXp1aFljY1BqclRlSjVSSEZnaUFDb2lvWi13THM1VW5RNW5TYVpYekhwaWNCSkZJQXNhbzdjd256VWpOdWpXelpiRHNVRjdEb2g5b01YUVNIUlQ5blFCUWc3YUV1Nm1adEtTajBKb1NlQVBQXzhSSFVJcW1KOEFoeDNrNnBZMWlQRHVDSEJkTlk3UXVrQ1htZVhLdHBwT0lGdVBLQw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 글로벌 스터디 조사에 따르면 근로자 10명 중 거의 6명이 고용주의 AI 가치보다 일자리를 거부할 것으로 나타났습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "스콧 스타인버그가 들려주는 일의 미래",
        "enTitle": "Scott Steinberg on the Future of Work",
        "date": "2026-11-10",
        "originalDate": "2026-11-08",
        "sourceName": "https://www.futuristsspeakers.com/",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOMFRqRUpqU0FLVzNoSlB4aW14T2N5aTlESi1hcWV5cVc1cGI5VmtCZDJvWTNmVC1qWXdIRFh0X2pyT2NIdkhtOGFfVVlOSG53UWxwSmhlX3A4d1piMDEwNWw3Z3hZMzBaaXZLNm1tRnBhMF9hYUhQbW5mQ2J1WXZrZXAza2pvVWJ1Q3BN?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 스콧 스타인버그가 들려주는 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "남성은 여성이 기반을 잃음에 따라 AI를 가진 직업에서 더 많은 경력 발전을 봅니다.",
        "enTitle": "Men see more career advancement in jobs with AI, as women lose ground",
        "date": "2026-11-10",
        "originalDate": "2026-11-07",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNk5OVzNZenhsMVlXMHRod1RNSGlOTklPd1NPZjZiaFpYdGdBMWRWdUJ3c21sNEwwUWpEX21xMEdJQjV1bVhvNm1qXzZaNU5QazRUMGZoNmZCVy1BYkVONm53aUlXVm5jLWpHdjNSSHJiNmY1czZYMXRJZnY4TXVWRDdLSlZKSVBKTjItUWx0NFNOa19EUzg3WF9Zc0NMYkFpc2J6bGhpOEtsUy1pRG5XQW15aWU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 남성은 여성이 기반을 잃음에 따라 AI를 가진 직업에서 더 많은 경력 발전을 봅니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "카페24, 커머스 특화 AI 앱 출시 4.5배 증가…활용 분야도 확대",
        "enTitle": "카페24, 커머스 특화 AI 앱 출시 4.5배 증가…활용 분야도 확대",
        "date": "2026-11-10",
        "originalDate": "2026-11-10",
        "sourceName": "디지털데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1hM2E5S0JwMF9zeHlURzdrRkhKeF9HT2Z1RmxXUlRuV0wwQnBEYzJDYlhBZGNfYXVLcHhXaW5FVUQyY0poTzdkLW00VkpUb2xzbS1yaC1aX0dSV1ZnNDJiTzIzWlY?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 카페24, 커머스 특화 AI 앱 출시 4.5배 증가…활용 분야도 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"쇼핑몰 운영도 AI가 돕는다\" 카페24, 신규 앱 출시 4.5배 급증",
        "enTitle": "\"쇼핑몰 운영도 AI가 돕는다\" 카페24, 신규 앱 출시 4.5배 급증",
        "date": "2026-11-10",
        "originalDate": "2026-11-10",
        "sourceName": "뉴시스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBYN2E5RnJ2djZxWEtRVzhocFhUZ2JIbjQ2T1EzY1hlem5ScXY5amtubTlQLUw4Q0NfSWhReUFTM2ZKZUpIM2I3bnFtck9oVVlzQks4bzNtc0dBT1JRU2JLQlF5VUpsOExCdmtfa0ExRnByVF9IdWJhVdIBeEFVX3lxTFBYN2E5RnJ2djZxWEtRVzhocFhUZ2JIbjQ2T1EzY1hlem5ScXY5amtubTlQLUw4Q0NfSWhReUFTM2ZKZUpIM2I3bnFtck9oVVlzQks4bzNtc0dBT1JRU2JLQlF5VUpsOExCdmtfa0ExRnByVF9IdWJhVQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! \"쇼핑몰 운영도 AI가 돕는다\" 카페24, 신규 앱 출시 4.5배 급증 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽도 뚫렸다?···‘클로드’ 국내 기업 계정 100여개 유출 신고",
        "enTitle": "앤트로픽도 뚫렸다?···‘클로드’ 국내 기업 계정 100여개 유출 신고",
        "date": "2026-11-10",
        "originalDate": "2026-11-09",
        "sourceName": "경향신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFByaC13a3pzRW1ocWtYc2RJaUhCQlBPeFRqTjZ0eGlNVFdFYk5tZTc0MVRTTjlIRDlFdnRjYWo0bjZfa0xGOXZOZUVMaFRXRUpuZ1pENGQzbXY4Z9IBX0FVX3lxTE56YWNZcEotQUNHQUtydHFsUUlaaFVYSjlIdkpuWnk0V3lFbEd0eS03czdpbmR0SmJOYjJHY2p0a0czS2RHbXlXY0lHQUg4MzdubUhKUzhTR1BOV2JSNWNv?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽도 뚫렸다?···‘클로드’ 국내 기업 계정 100여개 유출 신고 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
