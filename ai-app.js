/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "바이럴 AI 트렌드는 유명인, 동물 등을 Quavo와 Takeoff의 '호텔 로비' 컬러 퍼포먼스 안에 집어넣습니다.",
        "enTitle": "Viral AI Trend Puts Celebrities, Animals and More Inside Quavo and Takeoff's 'Hotel Lobby' Colors Performance",
        "date": "2026-09-26",
        "originalDate": "2026-09-24",
        "sourceName": "XXL Mag",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE0ydFFwTTBWb3poODVTeEI3TXRvLTB4REhJMmdCTW42NTNSMFYwNHlRV3puaEcwRl9sQ0xZMFRVYk4tY1JlUEVGSWpQZXNWejFXQUIzOHFUcENGQVA3X2t6SmN0YVp4TDFhcmVBY0o1MW8ydw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 바이럴 AI 트렌드는 유명인, 동물 등을 Quavo와 Takeoff의 '호텔 로비' 컬러 퍼포먼스 안에 집어넣습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직업의 미래를 재정의하는 젊은 개척자: 윤리적 해킹에서 법정 창의성까지",
        "enTitle": "Young Trailblazers Redefine Future of Work: From Ethical Hacking to Courtroom Creativity",
        "date": "2026-09-26",
        "originalDate": "2026-09-23",
        "sourceName": "ednews.africa",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE4xci1DTW43TnRScF9feFFRZW42ME4xeFpBdHZoajdZaUQ0MEttdlFxcjJOMTlIOEZmR3E0bXNqd0VXc3dXUlhZNGtYS0tYTDFyWEJCMlhQUXZMVzRoX3Y0dG42WWkzQUVRSTUxMmE1SQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직업의 미래를 재정의하는 젊은 개척자: 윤리적 해킹에서 법정 창의성까지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Transcript: 스탠포드의 채드 존스 (Chad Jones) 가 인공지능 세상에서 일자리의 미래에 대해 이야기하다",
        "enTitle": "Transcript: Stanford’s Chad Jones on The Future of Jobs in an AI World",
        "date": "2026-09-26",
        "originalDate": "2026-09-22",
        "sourceName": "singjupost.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPdmlFZE9sVjZ0SzIzYWc4akJZWlBxR0FVUXVyTnhMMnA5VkcwMWxCcFA1b0ppVnV0UDRzeFZKbmlGRXJzMnZYMWJqMTAwYkZIUVJGbHhGa2xnYWZQNndNcHpvdUZlV2lEYkZQMjJOR1NqdTZScUlHSnVBVDdPNFJZMkNCblljbnRMNGlGNm5ucmJkTTdkdklB?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! Transcript: 스탠포드의 채드 존스 (Chad Jones) 가 인공지능 세상에서 일자리의 미래에 대해 이야기하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "'클로드' 국내 AI 앱 2위 굳히기…1위는 챗GPT",
        "enTitle": "'클로드' 국내 AI 앱 2위 굳히기…1위는 챗GPT",
        "date": "2026-09-26",
        "originalDate": "2026-09-25",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5uRXlScmh1TGI2MHV0SlZldFBva3BZT0U5YXhPaV9KclpNVmZVYTZJTmxyQVh1OXNaNm5jbUlzV2U2SUZiWEJnQmFBcS1uQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! '클로드' 국내 AI 앱 2위 굳히기…1위는 챗GPT 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "챗GPT 다음은 클로드…국내 AI앱 2위 자리 굳혀",
        "enTitle": "챗GPT 다음은 클로드…국내 AI앱 2위 자리 굳혀",
        "date": "2026-09-26",
        "originalDate": "2026-09-25",
        "sourceName": "연합뉴스TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9mYTdvZnZNVkpDdGJmaVhkT0c5LTU5TDQwcGRaV09vN1FWVzNuTFdzU2RlekVPSUZ5bExfSHJ3ZEQ1bmh6aFFwNWoxdkdWaGNfQlB6aXNqVklFRlMtQllzTUdxR0t5TUk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT 다음은 클로드…국내 AI앱 2위 자리 굳혀 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드, 국내 AI 앱 사용자·신규 설치 모두 2위…챗GPT 추격",
        "enTitle": "클로드, 국내 AI 앱 사용자·신규 설치 모두 2위…챗GPT 추격",
        "date": "2026-09-26",
        "originalDate": "2026-09-25",
        "sourceName": "ebn.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5ORkVqZW9kaGhuSWdJWlBWZWZpUmtqdG91amppazk3c2tYX1JQZEptU1d3WWhnTlFlSzZ5ek43NFgzRHo5Mi1kRlpGRy1hOTEwdFZncTZQNUMzSWROMDByWXczMDM2M1R2?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드, 국내 AI 앱 사용자·신규 설치 모두 2위…챗GPT 추격 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
