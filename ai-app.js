/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "전문가, 바이러스성 80년대 AI 추세로 인한 위험 경고",
        "enTitle": "Expert warns of risks from viral 80s AI trend",
        "date": "2026-09-15",
        "originalDate": "2026-09-14",
        "sourceName": "Te Ao Māori News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxObWtYSWwxZzRBaGMzU1o2SkhzbGNBNUtBalBTRE1idkZGYUwxdU1lUG82Rnlfdk84ZkQ3TXhQdFAtcFlVdV9iYmRyUUFjVUZYOUpGNUxvVUlJVmR5UDd4UEZmdFo1V1NPVlpQUHo3WU05eFNpdENqdkxGd2V2amJ4bUJ5TFFJUWw4Zm5KbQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 전문가, 바이러스성 80년대 AI 추세로 인한 위험 경고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능과 일의 미래: 인공지능이 일자리를 대체할 것인가, 아니면 재정의할 것인가?",
        "enTitle": "AI and the Future of Work: Will AI Replace Jobs or Redefine Them?",
        "date": "2026-09-15",
        "originalDate": "2026-09-14",
        "sourceName": "CNBC Africa",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNYW0tTXhWSmJjTzBtc0I5UHdpM3B4TXc2YnZJNmt6M2pWbHdRX0dpY2xfbXRqU0VyS1hwTmRCNlE4RmF3T3lfUEh3MDBoRmdUTlF4d01takpvRXFiMXRhWnBpNHV2TG5HaS1VQWh4MFZGVVpncDlRYjA0cWZMQTQySEV0Nm84Sm9iQmd0b1BFYmdNZG5vaE9oOHFNTjNRQnhkUmE1eGVHQlRFWEJW?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능과 일의 미래: 인공지능이 일자리를 대체할 것인가, 아니면 재정의할 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "무역 학교는 학생들이 AI, 화이트 칼라 작업의 직업 안정성에 대해 걱정함에 따라 등록 범프를 봅니다.",
        "enTitle": "Trade schools see enrollment bumps as students worry about AI, job security in white-collar work",
        "date": "2026-09-15",
        "originalDate": "2026-09-13",
        "sourceName": "Pittsburgh Post-Gazette",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOaTdBT1VIblVsSzZZUzJULVlvWmdzbWZfSS1mM2RxLUFBdUk4NkZ5YWdNZWVkVjFRRU1ScE5XNG1MVDZYeDcwTEpGenROeXpoREkxZ0VVamFIVF9aaUc1UEZhcUJZeGRhMTNDQ2VraFRHbTNyenZZNEJOQTBuX3UwYjRncnFHeVBqVlN6ajh5YjhVVzlyeTFTRFk1NlRhMVFVRVplLWxBQU90ZHhhbTVZdnhoZDhsYVhR?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 무역 학교는 학생들이 AI, 화이트 칼라 작업의 직업 안정성에 대해 걱정함에 따라 등록 범프를 봅니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "삼성SDS, 국내 최초 앤트로픽 ‘클로드 파트너 네트워크’ 셀렉트 티어 획득",
        "enTitle": "삼성SDS, 국내 최초 앤트로픽 ‘클로드 파트너 네트워크’ 셀렉트 티어 획득",
        "date": "2026-09-15",
        "originalDate": "2026-09-14",
        "sourceName": "에너지경제신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9aTlJsWVR0aGJhUHEwQWR0Si1oSFo5ZlhUT3V0TFVCSjJRazRVOENCbTMwTVpVV2pTZ3BCT21ncG5KNjd2S0t3ZS0tVHRmRWhLc25Yb3hsRENzYkc2YklhNmdtSQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성SDS, 국내 최초 앤트로픽 ‘클로드 파트너 네트워크’ 셀렉트 티어 획득 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "모아시스AI, AI·건강 데이터 기반 건강관리 앱 출시",
        "enTitle": "모아시스AI, AI·건강 데이터 기반 건강관리 앱 출시",
        "date": "2026-09-15",
        "originalDate": "2026-09-15",
        "sourceName": "한국경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1uN211Zng5akZyYlltc2hsX2MzUUo3eUZpTkp2dWdfUUdwVEFELThkLTlieU5qMGJBU19kdFhxSVRQdW9jOUNmcE12Nmh6NlI1Rk9nV1hBNnk2Zw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 모아시스AI, AI·건강 데이터 기반 건강관리 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "삼성SDS, 국내 최초 앤트로픽 클로드 파트너 네트워크 셀렉트 티어 획득",
        "enTitle": "삼성SDS, 국내 최초 앤트로픽 클로드 파트너 네트워크 셀렉트 티어 획득",
        "date": "2026-09-15",
        "originalDate": "2026-09-15",
        "sourceName": "인공지능신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE50bV80Umd0NjdoZHlsQTU0NDVTNXVfR28xU1J6dlcwbENyMkpEWDlIUnd1eGVGSnUtU2NDNUxhSFlYTjgzcl9oWEwtVGZuanNmMERLRWpzdTl1RXAtdkFVVmdsV1BPSWM?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성SDS, 국내 최초 앤트로픽 클로드 파트너 네트워크 셀렉트 티어 획득 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
