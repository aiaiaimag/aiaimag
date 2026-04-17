/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "미래의 직장 기술을 재구성하는 AI",
        "enTitle": "AI Reshaping Future Workplace Skills",
        "date": "2026-04-18",
        "originalDate": "2026-04-17",
        "sourceName": "WDEF",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE94WVdnWUk3emVucHZhbTI0ZnVWa2tuMXlsSVlHX2xCUDJYT0hSRUl2WWZDM25mTEJ0djZMVXZCSTlyVklhOTJuOGV6dmV2QV9wMC1IUmRZa2NQUkE5eVlOTjdiQVpiaDc2Qnc?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 미래의 직장 기술을 재구성하는 AI 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Monzo 창업자는 AI 미래에서 당신의 직업에 대해 어두운 예측을합니다.",
        "enTitle": "Monzo founder makes dark prediction about your job in AI future",
        "date": "2026-04-18",
        "originalDate": "2026-04-17",
        "sourceName": "LADbible",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNSTVaWnUybUdCQWZtMzhDLUtkaHp6VG1FYUxtdmJIYWN2YjcxcHo1M3VJbkNuM3c1RTFiQXYyOHlWZjZ5bWllZkpDRkYwS1N2cE9ncy12T3o1OG9ZamdMdUhfNnRoTjc5UHI3ZWFTM0gtUUJpNXNOYzlBSDBFbS1LX0JuSWE0M18tZ2c0MHRpX2pZNkFvbVpxTUhPZUpjbVQ2MzZDcEhGRzMwRkI4VVR5RnUyM1kteTI4bUhZZzVDaWw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Monzo 창업자는 AI 미래에서 당신의 직업에 대해 어두운 예측을합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능이 당신의 일자리를 빼앗을지 묻지 말고, 누가 원하는지 물어보세요.",
        "enTitle": "Don’t ask if AI will take your jobs, ask who wants it to",
        "date": "2026-04-18",
        "originalDate": "2026-04-17",
        "sourceName": "The Mail & Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQSF9pNXJxc2M0dDFWNzZPcktFY19vTTQzTDBHN19Md2g4eHJpaDA2NDhCU2xGVlE1YTQwOS1fOFpNdE0zREZnaFRWcnFOUE4wZVBmSkV0QlRXUW9kSkdEMTh4YVhSSGJiZTg2dFNyYW5yTVVXdnhVdFVZS1haLTFHMlFBaTNXa0RrMDExb2c5SmRaMGFkVVFhTUU4Nm5uWk0?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 당신의 일자리를 빼앗을지 묻지 말고, 누가 원하는지 물어보세요. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제로지, 코딩없이 AI앱 만드는 ‘제로지 앱’ 출시",
        "enTitle": "제로지, 코딩없이 AI앱 만드는 ‘제로지 앱’ 출시",
        "date": "2026-04-18",
        "originalDate": "2026-04-17",
        "sourceName": "데일리브리프",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9sdjloekZkVU9UQ0xnNlBJTUF2bmxEN2RRY3ZZNXNuRFBPb3VlQjJVU0tKX0dLc0Y3OFQ1S2pLTTRud2c4dlVhYkt2OTFIb3JSTjdHc0VGbmF3VWI2eEN6MTM2MXpUTVR2VUotS2tn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제로지, 코딩없이 AI앱 만드는 ‘제로지 앱’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시",
        "enTitle": "세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시",
        "date": "2026-04-18",
        "originalDate": "2026-04-16",
        "sourceName": "약업신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQOTR2SlJCanB1dE9HR1l0Zy1jc0xLUWFtbEl5UFlfWGhRNFNXdWdvckJmR0lNVEFHTlZsajBsWWdhcGNfNjZ2dy14OFVqdWFDbjZiR2t6cnJZcktad1A1SUE3NGxicjdKcDZYRUZYQ0xmc3ZHeGVYWmVJUFZfaDhHenJwd0hIUlFlajhsQm15eURtY2NobXl4ck9VSUNNNVZLdTFITGc0YVFkYlM4X1lrbVhWc1dpX1JrdGk5UVhWcmQzWTJtNHoxdGw0ZWtfN3NKQmhKYmNKWlpSMk1uMklXTg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 세포라, 대화형 AI 서비스 ‘챗GPT’서 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "‘미토스 쇼크’에 입장 바꾼 美 백악관…클로드 활용 재추진",
        "enTitle": "‘미토스 쇼크’에 입장 바꾼 美 백악관…클로드 활용 재추진",
        "date": "2026-04-18",
        "originalDate": "2026-04-17",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5HVjZiLUpsS1dUWG1SbWpETDZhN1lGYzhVNkQwOTBHZWx0NjVWZWdHMl9xVF9oZldqLS02cW4yVE5rcnJiVFFJVEt6Y1NmSlIta0l5NXVR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ‘미토스 쇼크’에 입장 바꾼 美 백악관…클로드 활용 재추진 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
