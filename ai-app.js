/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-19
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "윌 스티븐슨(Will Stephenson)의 '제로 데이(Zero Days)'",
        "enTitle": "Zero Days, by Will Stephenson",
        "date": "2026-11-19",
        "originalDate": "2026-11-18",
        "sourceName": "Harper's Magazine",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPOUVtSDduaGNtNUxJY3Q0WmhLbkZ6c3VlajNCNEJPLXc1THVlYzVaQ09STFdTT0RPY0kyNUVBYjV2NlNQMzFMaUxJZWJ1OVNTbkk5dl82ZlJEZW9BUFhUYlBSX25rTnluVVlHRUtoNGN0V08yMzIwZ1dfX18xODFELU13ZVA0RFNydDN4WTFhZXF1Zw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 윌 스티븐슨(Will Stephenson)의 '제로 데이(Zero Days)' 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "새로운 설문조사에 따르면 AI 어시스턴트가 인력의 미래라고 합니다.",
        "enTitle": "AI assistants are the future of the workforce, new survey suggests",
        "date": "2026-11-19",
        "originalDate": "2026-11-18",
        "sourceName": "New York Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOUDdFdUtOemFhUnhRRkxVWUsxRW5TLTJVLVZ3OEs5VUdiSUpxdk9idnZPNWJ4THFRZGpVOVZiRVpZeURtMzFCNHljRzR5MEp3dE5kdmNmZFdaUmg2eEZic3NvampqaE5wUEpCTGpOeEhnWnhMa2h0ZW1XLXZVVU0tcWoyTENWOXlZdV94aXRHeUM4dXVhdjVsN2dWN0RocUVhSjdB?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 새로운 설문조사에 따르면 AI 어시스턴트가 인력의 미래라고 합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "RBA, 젊은 호주인들 사이에서 고용 부진 조짐 포착",
        "enTitle": "RBA Sees Tentative Job Weakness Among Young Australians",
        "date": "2026-11-19",
        "originalDate": "2026-11-18",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNbUZzdTNCNktaQ2tTU0JXb1FqMzRFZWRkYlZMV0lZaDE4ZEltUXBTbmtwb3hjQmlrWnBDd0JLRFBhb09sRlJaelJ1em5lNngzZl9LVzEtTklLTnl3c3c1QnViVmhZQ3pOZlBpbmQwUDgzTHAwdFB3cWVjRWdrcmVfTHhB?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! RBA, 젊은 호주인들 사이에서 고용 부진 조짐 포착 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[미국 특징주] MS \"코파일럿, 챗GPT·클로드보다 저렴\"…기업 AI시장 공략 가속",
        "enTitle": "[미국 특징주] MS \"코파일럿, 챗GPT·클로드보다 저렴\"…기업 AI시장 공략 가속",
        "date": "2026-11-19",
        "originalDate": "2026-11-18",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9hRlAtT0NWbmI3UXp5bnpsTV9XYktWRFdWWE9acFhsaC12bzI3SGxwenBRVElFZXctbkcteUtGcnJYWnlCaVZIWjFpZElOT1NQVVVfTGxHRF95UHF5?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [미국 특징주] MS \"코파일럿, 챗GPT·클로드보다 저렴\"…기업 AI시장 공략 가속 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "2027년도 경제 트렌드는 ‘1%’, ‘X’, ‘AI Free’",
        "enTitle": "2027년도 경제 트렌드는 ‘1%’, ‘X’, ‘AI Free’",
        "date": "2026-11-19",
        "originalDate": "2026-11-19",
        "sourceName": "세종의소리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9aZlhPdW1iUTZSaGYzTDd6WHVhWXNvRUlWdV9BX3A2ZjVGUGRzYVdPQzg5a1JqcWpWbUwtSFhSWGRUdFE0MTdJc1M4MHBkd01TZVAzQjBYYVRYR2VscTdwdGVObHZJSkk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 2027년도 경제 트렌드는 ‘1%’, ‘X’, ‘AI Free’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "내달 '모두의AI' 출시 앞두고 '국민AI서비스혁신단' 본격 채비 - 머니투데이",
        "enTitle": "내달 '모두의AI' 출시 앞두고 '국민AI서비스혁신단' 본격 채비 - 머니투데이",
        "date": "2026-11-19",
        "originalDate": "2026-11-19",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1DdE55MFVoYTF1eVg1Q0lmQVdmTlZzZzhyaUZnU09GaUlmbmhOVjJCWGlQS1g0NHpKNUxYQWI4cHdpd2tLazQ4Rl9NcXpZeTh4MTI1a3lOTEhpNXAzV21YcmlWbHVFX3A4Q2dacFFQeGJhMUVo0gF6QVVfeXFMTWx3M1FYcmRBa3IyVWZkV1BhTldwLUhjVzZWWk9QbkwzVU9zWHRzalN4NHdKcTNfRE5YQllvVmNGWk5meXUwc3ExR090eVpPNzV5TmFXNU1OWTJZWnJOSU5MQm9TbmJONzF1eUppbEFRUkRBXzI3WXhFWVE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 내달 '모두의AI' 출시 앞두고 '국민AI서비스혁신단' 본격 채비 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
