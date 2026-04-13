/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "커리어를 ‘미래 지향적’ 으로 준비하기",
        "enTitle": "Preparing to ‘future-proof’ your career",
        "date": "2026-04-14",
        "originalDate": "2026-04-13",
        "sourceName": "ASU News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPOWh5Q2dYemRnM0x6WE01ZEs0QmdzRjNWX3hoTlRZMGVYNDF2QjVkN0YzTW1nTnRFZ0gwa2cyQ21qMllvc2tlYVlsamMxY09uTmxNMUtSWmlyUjk2d29tOFdtYUVlZ2l1Zk1IUTJvamhmYVM5T2dUZVBGVGhfU2hRR2ZsRU13aHRsZzRtTHNWZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 커리어를 ‘미래 지향적’ 으로 준비하기 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Microsoft, SAP가 초기 인재 전환을 지원함에 따라 AI 작업에 미치는 영향에 대해 경고",
        "enTitle": "Microsoft Warns on AI Jobs Impact as SAP Backs Early-Talent Shift",
        "date": "2026-04-14",
        "originalDate": "2026-04-13",
        "sourceName": "UC Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQTVNuSVJLd1hNTGZJUWJITVJoUjNvdkhEeGhqNm5pa2R4NmZnWkRiUkdrc1h6S3JIOTJhTEF5STV5ZlBIRnBpRXE0cHdZT1IwY1JiaW4wREZWRG5KTjJLdUlVSzVGX2tYa0huSms4OHpFYWJPRVIyMXloU2wtcE9ndDV3?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Microsoft, SAP가 초기 인재 전환을 지원함에 따라 AI 작업에 미치는 영향에 대해 경고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 직장에 오는 대신 주말을 연장할 수 있습니다.",
        "enTitle": "Rather than coming for your job, AI could extend your weekend instead",
        "date": "2026-04-14",
        "originalDate": "2026-04-13",
        "sourceName": "AFR",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNcjhJTVU0dTk1Y3hodnlxVHNUVmRVbG11TXZINXoxMDYzdS1xSWppdUVzcEVJc1N0TkFrSnNZSmEyRTQtSXpQVlhhYkgxcFFiRzdzVGtfckJUSkpLM0FPVloxSTJZd0ZIRjJhcElkTl93QUc5eHFrV0ZrSTlnQTdORkdMcDItSFN2Tk1oTXBTYV93Y1p3cHRLa2JEWlh0UnlUeGc0MVJsWTl2aFVCbkVGZncwdVltdFhuRFZRVjQwOTd0WkxobkgyNA?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 직장에 오는 대신 주말을 연장할 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "보이지 않는 과금 기준 ‘토큰’…챗GPT·클로드 코워크·깃허브 코파일럿 구조 비교",
        "enTitle": "보이지 않는 과금 기준 ‘토큰’…챗GPT·클로드 코워크·깃허브 코파일럿 구조 비교",
        "date": "2026-04-14",
        "originalDate": "2026-04-13",
        "sourceName": "cio.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgJBVV95cUxPTVNNYlZaRVJZNGp6QTNNX3gteUVjNmw2ZFJkUmEzOTd4MG5UM3h2Yno0UEF2amNidEtzbzdGbnZRYnY4Vi1kcTl5NnAxZjRLQW9BWnRONnowM05tc2h2UUFlLUV1c3o1Skw4aTdFOE5CXzM3c1hEVG5uQ0xLUGRMeHBtVkRucllDMnFBOHVqcmxVdjhsU2tXY1NoaTdCeFQ4bUpKUUVkeDhMR1FZMHEyRHNScWRUSDV2aTJacnB4STNxSGVPSEVzTVR2LW1BRnVIeVZDSzEyZ1diVV9GdFFRRnRUUmYyTXZJR3FoWVJuLTNkWHNRT0IzSmM3bTVvbzdWU1l3WVZiQ2tCNlBGamRCOFJRcTVPNFhSa0ZxajZBS253OW9ORUtRSzd1N2dfM0oxR2c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 보이지 않는 과금 기준 ‘토큰’…챗GPT·클로드 코워크·깃허브 코파일럿 구조 비교 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "하나증권, 'AI자율주행 투자 서비스' 출시 기념 이벤트",
        "enTitle": "하나증권, 'AI자율주행 투자 서비스' 출시 기념 이벤트",
        "date": "2026-04-14",
        "originalDate": "2026-04-13",
        "sourceName": "mstoday.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE05VmNZVFB5ZXlkWUtrbkl0SEUtV3otYXdUeURUQ2NHeGxULVZVRy0xNFVfRFZ3b1Y3RW5HdldqS1c1aXd5QW91dnR2cmtDSTZ0TnZ6NWlqbUlCdzBvMzA1U1RvWHk5ZWUzNFNORmR3?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 하나증권, 'AI자율주행 투자 서비스' 출시 기념 이벤트 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "중구청장 예비후보 최강선 \"AI 생활혁신 프로젝트\" 공약 발표",
        "enTitle": "중구청장 예비후보 최강선 \"AI 생활혁신 프로젝트\" 공약 발표",
        "date": "2026-04-14",
        "originalDate": "2026-04-13",
        "sourceName": "프레시안",
        "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBOVUl2anNleERyM3VVZ2ltUlR3eGhtTVJRYXl3bHBmWF9GN05NQThsVGNPUjYwNzVuTDdJVjUybkdLUGQ0TjdRSjNncmM4RmtJZHpKdU9pYnZJTGpkMms1M2daSTFmN085RGtQQVhSbzI5X1MyOFFEY3gyUQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 중구청장 예비후보 최강선 \"AI 생활혁신 프로젝트\" 공약 발표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
