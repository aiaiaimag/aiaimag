/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "시간적 가치가 있는 2027년을 위한 5가지 AI 사이드 허슬",
        "enTitle": "5 AI Side Hustles for 2027 That Are Worth Your Time",
        "date": "2026-11-01",
        "originalDate": "2026-10-31",
        "sourceName": "MoneyLion",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBBb2lmaFNLMVc1S3Q1MUhJajlrcUJZNWsxc3p3Ull3cXFUbUo2bEJPcVpjNWdhaExiQi1jWnp3T0N4NTFnVW1VOFQtUmExbHlpZGJtWG5Xdy1mV29FQXBCUUpuamZPZ2lGR1lYOUVLbTFRYkRXb2xDcA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 시간적 가치가 있는 2027년을 위한 5가지 AI 사이드 허슬 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "‘로봇을 고용하고, 인간을 해고하고, 뒤돌아보지 말라’: 빌 게이츠, 인공지능이 수백만 개의 일자리를 대체할 수 있다고 경고",
        "enTitle": "‘Hire the robot, fire the human and don’t look back’: Bill Gates warns AI could replace millions of jobs",
        "date": "2026-11-01",
        "originalDate": "2026-10-31",
        "sourceName": "Education Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxPdEpSX0FoU2p4ZFZNNE5sdkN1MXNwLUYzY2w5Z3BlWVo2bE53TVA1bnNlbG1rdjBycEFZSmhOZTdOTHdvcHRLYnVhUjhWWFh0bjVRYVNGOFhkT25zcF9Na2Z1WU9NMW5XNGFEZVM0am02bGozdGwtT2Y5UHpHZVJYdGF0bUlhWFpTN1M2aXo2UHFaYjRFN1pGVnVXRHI5Y05PcEh6Q05qOGh3clRpZFNfU3FHY3NXbHI4WHNOM3VDVktoSV9lWVVScVVXX1RkOHZEeEtNZUpseEdDLWtXVjgwcGE1MVhPY0otU0xiTzMtU19DeFFWWkRkRQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! ‘로봇을 고용하고, 인간을 해고하고, 뒤돌아보지 말라’: 빌 게이츠, 인공지능이 수백만 개의 일자리를 대체할 수 있다고 경고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "최고의 미래 2027년 기조 연설자 # 1 스콧 스타인버그",
        "enTitle": "Best Future of Work Keynote Speakers 2027 #1 Scott Steinberg",
        "date": "2026-11-01",
        "originalDate": "2026-10-30",
        "sourceName": "https://www.futuristsspeakers.com/",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOM1A5M1lLT0k4ZjlKQ1pBY0V6VW1Ub1BiZjRURy1GS0NoUFNaclBnRUhpUmVSQVZZM1ZBUktJb0ZkLS1HNUlxOC1OY2thMjhtRmlzakd4M1ptTDRhTG8yYWpXaHMwX0ZQX2NLMlI3Ukd0N1hXUHE0VGtSTFBZZ2U0UUJB?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 최고의 미래 2027년 기조 연설자 # 1 스콧 스타인버그 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "경북매일, 독자 맞춤형 ‘AI 추천기사’ 서비스로 언론의 인공지능 전환(AX) 가속",
        "enTitle": "경북매일, 독자 맞춤형 ‘AI 추천기사’ 서비스로 언론의 인공지능 전환(AX) 가속",
        "date": "2026-11-01",
        "originalDate": "2026-10-31",
        "sourceName": "경북매일",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA3UEV5aWRaQ1BzRU5tYmxLNnJiak1ITmVGZzBfV3lzTVZhVGVSVmVQem5lMFJLNFp3czFnbW5Na0NXOVFkakVoeU5mTDJ5clZVZF9FYm1GSlRCQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 경북매일, 독자 맞춤형 ‘AI 추천기사’ 서비스로 언론의 인공지능 전환(AX) 가속 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "구글, 인터넷 없이 작동하는 '제미나이 라이브' 개발 중",
        "enTitle": "구글, 인터넷 없이 작동하는 '제미나이 라이브' 개발 중",
        "date": "2026-11-01",
        "originalDate": "2026-10-31",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1pS3pSS0VUdnlLRVRwX0ttQXhxMUxWOHdoa2k1ODdRdDhpa1JnR3doY1hmUkVXWXI2MU1JdG9XVGh3M1RTdDhqWElnd0tzZzVvXzZBQ0xWVGVaR0g2aTVuUEt4S0MzWWtUV1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 인터넷 없이 작동하는 '제미나이 라이브' 개발 중 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "‘AI안경’으로 SAT문제 커닝해보니…정답, 제미나이 83%·GPT-4o 75.69%",
        "enTitle": "‘AI안경’으로 SAT문제 커닝해보니…정답, 제미나이 83%·GPT-4o 75.69%",
        "date": "2026-11-01",
        "originalDate": "2026-10-31",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5ROWpxNXRCeURjZFVMTHRVd0VfcldaaGNuX3BzU1hkN0dDTEt3WmlHNzluclBNUFFkVkhOYjZUWHN1c3dxZHJEQ2trN2FOVE1JUlp5MkdR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ‘AI안경’으로 SAT문제 커닝해보니…정답, 제미나이 83%·GPT-4o 75.69% 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
