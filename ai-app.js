/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "아일랜드 근로자의 거의 절반 (47%) 이 새로운 경력 경로를 고려하고 있다고 답했습니다. AI가 업무의 미래를 형성하기 때문에 Microsoft Ireland 연구에 따르면",
        "enTitle": "Almost half (47%) of Irish workers say they are considering new career paths, as AI shapes the future of work, Microsoft Ireland study finds",
        "date": "2026-09-11",
        "originalDate": "2026-09-10",
        "sourceName": "Microsoft Source",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgJBVV95cUxPc0RjNGRGa29QdjlSci1POUJEVGpYMUw5Yk5CeEJsWVo0UEpxcFlmLTR2ZE9sVXpqMWJwZHhENzVCNmNOM0NvZnA0WlUyQmZsNnpHanlaTzdiV0pMRGtIZThwTGg2T01UNFRFV3lXQVVDSTBRQzlUekVzZkozbFBDWC1ZemNjdU11cmV1TzAyM1NEOG9Db203R2VHVHJZSTVMc1lzZzBIb1BLLXFiaWNtemxtUXFzNVBmWldoV0JIbDRCQ3oyMGFqLVJ3Yko0ZmhNd2kwMlVOMW1kVzlQVDRuQl8yeXhZRzR3T3dXeXNmdkNkRjdiVlQtWTdtY2I3SEFqTl8xVkNnUmN4cGtNZXY3UmpR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 아일랜드 근로자의 거의 절반 (47%) 이 새로운 경력 경로를 고려하고 있다고 답했습니다. AI가 업무의 미래를 형성하기 때문에 Microsoft Ireland 연구에 따르면 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "바이러스 성 채팅을 시도하기 전에GPT 80 년대 사진 트렌드, 이러한 개인 정보 보호 위험을 알고",
        "enTitle": "Before You Try The Viral ChatGPT 80s Photo Trend, Know These Privacy Risks",
        "date": "2026-09-11",
        "originalDate": "2026-09-10",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNN3FlUk43MTgtc2lmYXEydUd6MDdjZGMzOHRpbXI2LXo3Y1lvV1l0S2tNZU9YUk5VZExVcy1sZ2QtdkxQSk91WDRGQnBTbjNzTnNDRU4tWEUtSFBlaGFoV0hxeFk3NW84anlfTlNQQ3FOYjdJekFMWmk5OE5mSzRkRE5tcm9pc1BRMWotbkowM2lhTWlKbmQ2cVYxZlpkYjBfeVNadGJ1SjJmb2fSAbMBQVVfeXFMUDF4Y0JmYWFQVVg4dFZQR2RhU09pdlM2MWZBb0pOc1d2NVRzSTF0MW5pekFfclJrTmdrMzJicGE5SktKVWFYYkxLNWJFdDl6dlFyQkZTcG5USnhtc01uRHJMRE5MdjNnYUdnYVZpTDV5LVRUc01CU2tIQzJoTFRRMjgzQXRtU0QxS3ptQ3I0Z1A0MmRucnhubG4zbG01RzhFdm43bDEyTUx0Y19RcU10X09GTlk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 바이러스 성 채팅을 시도하기 전에GPT 80 년대 사진 트렌드, 이러한 개인 정보 보호 위험을 알고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "ChatGPT 80년대 트렌드: 인공지능 사진이 환경에 미치는 영향",
        "enTitle": "ChatGPT 80s trend: How AI photos are impacting the environment",
        "date": "2026-09-11",
        "originalDate": "2026-09-10",
        "sourceName": "Firstpost",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQYXlTaEpZeU1ZUnRNUk9RRjJnYXdqTDVBUHZnZUR3aWxHNXpBZXp4OUo4UlpzX0d4QmlURjBLU0J2MWpHczJmbUozdGU5cmJNU1BiZ0pFVFAxdS1mZ2NnRzVmdElsSkxsTG5PLU5kYnZOOVYyYUtoSDc1MUFfNDJleHBHaDQ1amFrcFp4Q1g4eEFjU0NxR0RXTFBiSEJqRW9HUktrakVDYjM0Z9IBrwFBVV95cUxNS0IxbW9KQnBpcWp3TkJwRGpoeWFZU0NrdThHeU9EZWFWLXptWTI1N1AxUU03MTB3OWRPS1BORUhET0d4YmpyTDUtSnFreHplUlg2QkliY1lLa0MyVEIzd0ZLOE9yT2hTNzZTSlpoTDE1bWdDNnpNazB5QW81NEJsTmthRHg0YW5KdEtva2luTmtPcUZOajNad20tdXJNSk9HN0MzbnNjYkNQZEQyYjdj?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT 80년대 트렌드: 인공지능 사진이 환경에 미치는 영향 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "GPT-6 Astra: 새로운 세대의 지능",
        "enTitle": "GPT-6 Astra: 새로운 세대의 지능",
        "date": "2026-09-11",
        "originalDate": "2026-09-10",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9DdWlyc0FQSDFUeE8tblc2YzdaNHNXX29uNkxXbFFlbVF3MXZYU3JSd2NDOFVyUHNXdVowekdEU2NYY1daZlhuLXBzMUxkdmZnU2lfdXhB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! GPT-6 Astra: 새로운 세대의 지능 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "오픈AI, 챗GPT 금융서비스 출시…월가 신입 애널리스트 대체하나",
        "enTitle": "오픈AI, 챗GPT 금융서비스 출시…월가 신입 애널리스트 대체하나",
        "date": "2026-09-11",
        "originalDate": "2026-09-10",
        "sourceName": "와우테일",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE96ZmJiUmVnYmUxdWZoZEtSUTlyOVV0eXVHNjZwbVFyUTZqaDBJX1ZoNkdkeXU5VXc0Z25CRHJYQ1FvdHN6WlNrOWpxY05VSmc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 챗GPT 금융서비스 출시…월가 신입 애널리스트 대체하나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "오션 네트워크, AI 추론 서비스 출시…GPU 시간 단위 과금",
        "enTitle": "오션 네트워크, AI 추론 서비스 출시…GPU 시간 단위 과금",
        "date": "2026-09-11",
        "originalDate": "2026-09-10",
        "sourceName": "블루밍비트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5xSWxnZjJ0WkRkRXhEUDR5eG0zUmEzMHpNUmxYeEZIYlpuLUQ1eFp3RWl4dXZTNmlNN2xnaEZHRWpSd1M4NGZFMVNnR3g1dkw4?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 오션 네트워크, AI 추론 서비스 출시…GPU 시간 단위 과금 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
