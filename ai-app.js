/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 (AI) 시대에 당신의 커리어를 미래로 증명하는 방법",
        "enTitle": "How to Future-Proof Your Career in the Age of AI",
        "date": "2026-08-11",
        "originalDate": "2026-08-10",
        "sourceName": "NBC Palm Springs",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPempyWFNua0JGSmJmc2w1Ymh2Nk5ZSWVtLTZDNzg0X0t4M2lLbmFsdGU5SzN2ZW10LWdkVExHb3ByUHZiOU9QYkFsT0dPQUhyS09yVm9VdWR1SlhNbGxzUUZXbVJKd28tMGxhcVI2Vmg5RUxIYVl1VXQ1LVdIdkNJeWtJVlczTXRCLWhfcG1R?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 (AI) 시대에 당신의 커리어를 미래로 증명하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "바이럴 \"가짜 테이크아웃\" 트렌드: 이 AI 자산 관리 앱은 테이크아웃 주문으로 사용자를 로스팅하여 연간 매출 1억 $ 이상을 창출합니다.",
        "enTitle": "Viral \"Fake Takeaway\" Trend: This AI Wealth Management App Roasts Users for Ordering Takeout, Generating Over $100 Million in Annual Revenue",
        "date": "2026-08-11",
        "originalDate": "2026-08-10",
        "sourceName": "36 Kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1HbzhpSHBXbVRyWjgwUm4yVXRvX045VFN0enhrNnREb1dWdkU3cmdveTN2NXFPeEhhQWd0ZjhHam9TUWtrSmt4U1hQYUc3VVJfQ21R?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 바이럴 \"가짜 테이크아웃\" 트렌드: 이 AI 자산 관리 앱은 테이크아웃 주문으로 사용자를 로스팅하여 연간 매출 1억 $ 이상을 창출합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일의 미래는 첫 직장에서 시작됩니다: 초보 수준의 기회 감소가 고용주에게 의미하는 바",
        "enTitle": "The future of work starts with the first job: what the decline of entry-level opportunities means for employers",
        "date": "2026-08-11",
        "originalDate": "2026-08-10",
        "sourceName": "Lewis Silkin LLP",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPZHE5UXJqMHJjb2JWMVJfdlM3NWs3MVRVdFdXYkx6ajlvcnBzb0h3bTlFQXlWZDZJcEF3a3ExT0hkVzlONW83Z1VyQUxULVViSW9naVVaQ0VWVHFXSC1rUHJ0bFM3YWt6d2k4ajZZU0hWM2JTWmJmclA5azZfbHd5SHdKTnFxQlZ6b2c3a19mYUNGUmM0eTdvS1pyaWJ0bmR3U3FaU2VFUFd1OENhRUgyQnFhTkNmc2hsX1Bzd0hrbDNBdkFRam9kR1pCbEJ5U2RTN25xZ25uRWIzZ3JES3c?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래는 첫 직장에서 시작됩니다: 초보 수준의 기회 감소가 고용주에게 의미하는 바 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "OpenAI, ChatGPT 비즈니스용 월 $125 프리미엄 요금제 출시",
        "enTitle": "OpenAI, ChatGPT 비즈니스용 월 $125 프리미엄 요금제 출시",
        "date": "2026-08-11",
        "originalDate": "2026-08-10",
        "sourceName": "kr.investing.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBoNHVKN2FyekFzOEJBOEN1aERqV3RIOVg3eXlLaWN1SlNTZ1g3MEgtQ3pKZHBDWW16Z2p4SHpGcElMXzZKVV9xZFpjUzA5TExXeVZvcDQxdE1WLXpjd0Fwd2kyVDNFMkJhcW1EMmxiVTVKYlNZcnlB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! OpenAI, ChatGPT 비즈니스용 월 $125 프리미엄 요금제 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "로빈후드, 영국서 가상자산 거래 서비스 출시…AI 분석 기능도 탑재",
        "enTitle": "로빈후드, 영국서 가상자산 거래 서비스 출시…AI 분석 기능도 탑재",
        "date": "2026-08-11",
        "originalDate": "2026-08-10",
        "sourceName": "블루밍비트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBpcjhZSTFpcmtQd2pxRzFmblJuMHJUemNBUWFYLVc0SmgxWGlPZC1Lbjl1a1RRUFhaTVhjQXRwbXFfTHhIOFVIdHVfTm1BMVF1?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 로빈후드, 영국서 가상자산 거래 서비스 출시…AI 분석 기능도 탑재 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "'AI 접목' 집중하는 네이버…'AI 수익화' 윤곽 만든다",
        "enTitle": "'AI 접목' 집중하는 네이버…'AI 수익화' 윤곽 만든다",
        "date": "2026-08-11",
        "originalDate": "2026-08-10",
        "sourceName": "굿모닝경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE0xUmVsbFpSOEE2XzU5Q2FLUXFxYTZnQS1PeFBGeHJUaWdrdDhwYmpfSjJHbE9vVDdrOTcyZGJPZFFWWnQzbGlTU3U1Vk9iVU9DTmhPY1lSZ2thZmM2YzJzUjA3S2JaMGhPYlV3eA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 'AI 접목' 집중하는 네이버…'AI 수익화' 윤곽 만든다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
