/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "바이럴 \"가짜 테이크아웃\" 트렌드: 이 AI 자산 관리 앱은 테이크아웃 주문으로 사용자를 로스팅하여 연간 매출 1억 $ 이상을 창출합니다.",
        "enTitle": "Viral \"Fake Takeaway\" Trend: This AI Wealth Management App Roasts Users for Ordering Takeout, Generating Over $100 Million in Annual Revenue",
        "date": "2026-08-15",
        "originalDate": "2026-08-10",
        "sourceName": "36Kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1HbzhpSHBXbVRyWjgwUm4yVXRvX045VFN0enhrNnREb1dWdkU3cmdveTN2NXFPeEhhQWd0ZjhHam9TUWtrSmt4U1hQYUc3VVJfQ21R?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 바이럴 \"가짜 테이크아웃\" 트렌드: 이 AI 자산 관리 앱은 테이크아웃 주문으로 사용자를 로스팅하여 연간 매출 1억 $ 이상을 창출합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이",
        "enTitle": "Join us on 8-21-26 for “Hacking Productivity with AI” – Super Cyber Friday",
        "date": "2026-08-15",
        "originalDate": "2026-08-06",
        "sourceName": "CISO Series",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNYm9fSjlEdG9KVzJDcExtUWE4RENHVmJOdXhJaE5zY3hWSnFhekoxeGZYci1rVUxYTDFpX2JGY3ZTOTV1ckV4QUJIZVBlUzh4RGhYT1N2NEotU1haT1ExdlV0eE5Pa0RKY3EyS3N0SE9kX0FqQkVDMHRtamwyS29TQjdwX21lN2Q3cUlSLXptRjhlMUg3Q0oxSW1B?oc=5",
        "isRepublished": true,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "대학 졸업 후 즐겁고 생산적인 여름 휴가를 위한 13가지 Google 팁",
        "enTitle": "13 Google tips for a fun, productive summer off from college",
        "date": "2026-08-15",
        "originalDate": "2026-07-21",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQeHNYTmNwME83SXJzVVlhcVl3SWp5eDROMlVUU1BKRWxKbE8wTFk3NWZBVFJObkxKYTZRQ1Utd3BLRWkzMzdTWnYyblVSQl9WQ3IwQkZhdEdEQWtUb29hdDVqX3FTeDJPRjN0OVFiQzZ0SllvTXNoUzlMRFdnQ0RPcWQteVlVWGI5YWZ6S1hVZENaWFJRUWFMdjJJWlFmN095dkJJODhn?oc=5",
        "isRepublished": true,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 대학 졸업 후 즐겁고 생산적인 여름 휴가를 위한 13가지 Google 팁 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 3.7 플래시를 소개합니다",
        "enTitle": "제미나이 3.7 플래시를 소개합니다",
        "date": "2026-08-15",
        "originalDate": "2026-08-14",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQalF5T1N2NF80LWkxT2Z6NUN5T01vck5zaFRzSWxSdDliRHZOQldFbWFFQTN6VnN4MWlpNU13MnlFVzJZSUk0UGcwcGlSNGY5OXVId3RJLUJERGIwdVZ3dEVTN3BxTkdjQ1BKNnZ4bEVITHg3c2duMW5IdWVHR2FQcHdSWmRKVC1BSzhCb0M3Sjk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 3.7 플래시를 소개합니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "'택시 불러줘' 말하면 앱이 척척…AI '말하면척척' 출시",
        "enTitle": "'택시 불러줘' 말하면 앱이 척척…AI '말하면척척' 출시",
        "date": "2026-08-15",
        "originalDate": "2026-08-14",
        "sourceName": "서울특별시",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE40Rlk0WFhZLTliTTZ4N3pwRnczNmNoNjFJY1F3UFRfNk1LREZuc21nRFM2R0pBcXYxbmhJRkJZVV9laXdsWnFGZnVNc0t4VE5VcXp6NEpRS1g?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! '택시 불러줘' 말하면 앱이 척척…AI '말하면척척' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "크립토랩, 병원 급여·청구·심사 지원 AI 서비스 출시",
        "enTitle": "크립토랩, 병원 급여·청구·심사 지원 AI 서비스 출시",
        "date": "2026-08-15",
        "originalDate": "2026-08-14",
        "sourceName": "etnews.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9qZWdqcUlPZnVzZjNaeDU2WG5Sc1lFcHRsWUZVejI4TnZpRUlxZjZ4SFMtT1FfMzJOWUMxanlSYjgyMkZTQjNaTkg1bDdEdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 크립토랩, 병원 급여·청구·심사 지원 AI 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
