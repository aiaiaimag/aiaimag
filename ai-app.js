/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-27
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 일자리 히스테리에 대한 현실 점검",
        "enTitle": "A reality check on the AI jobs hysteria",
        "date": "2026-05-27",
        "originalDate": "2026-05-26",
        "sourceName": "MIT Technology Review",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPRmp2Rjg2VVdYZU45YnpSNXZ0QklkSkxyUVZHaHl6MmlwME53ZDR1WVpoZF9wOUhfVHg1Zlh5SjJtZXRrSjdIbzdUSEoyZ0FUd0hfbzhDNTJXU1pId2JjVHBaQW1QZVkxTEVKM0NLeTJtcVFiT3lPTjdDOUQzUHJ6ZVZ6UEg3RHBGUGhOUzhaZU9XVlp5ay1z?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리 히스테리에 대한 현실 점검 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직업의 미래는 직업이 아닌 기술에 관한 것입니다.",
        "enTitle": "The Future Of Work Is About Skills, Not Jobs",
        "date": "2026-05-27",
        "originalDate": "2026-05-26",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRE43ZkQzMkFiQ0hWdXNkWGlaY29MR3JuNFNBQVNzOUZfaHJRWGQ4aHZqVHVpUTlWUTVyYXdBaHdkSG5PUE5La1NMend0bHllQXJtd1V6NGhnME5SX0tvWVY1UzkyTWlTZWp5bmNaXzAya1hkOHgwWTFzTmJCOUl5NmYtZ1pmT2FNLUhOekZUWnhjVzVxZzZ2SHo1Vk8?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 직업의 미래는 직업이 아닌 기술에 관한 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "샘 알트먼 (Sam Altman) 과 다리오 아메데이 (Dario Amodei) 는 둘 다 블록버스터 IPO를 눈여겨보면서 인공지능 직업 종말의 예언을 되찾고 있습니다.",
        "enTitle": "Sam Altman and Dario Amodei are both walking back their AI jobs apocalypse prophecies as they eye blockbuster IPOs",
        "date": "2026-05-27",
        "originalDate": "2026-05-26",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOOXZuWVZDcUVsS0FGVUx0cE9mN3o3YkdmRlh2QTZPdkV6Z25hNXZieFJ6LXZ3ekItMDBoZkxwdmYtV3VPYWVyTWZCTlFna1pDSGZBNDZnREJOU0stUnNhZTYxWDNUYmFtYTNiV25fUkV6MlhSUnVwQkFGVmtwbWxSVUo1LUlCTTM3ZHVwa09xWEtNamRuOHRyM1JDSTltY2tObmprRA?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 샘 알트먼 (Sam Altman) 과 다리오 아메데이 (Dario Amodei) 는 둘 다 블록버스터 IPO를 눈여겨보면서 인공지능 직업 종말의 예언을 되찾고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "거물 개발자 경고 \"클로드 코드는 망가진 도구...'바이브 슬롭' 위기\"",
        "enTitle": "거물 개발자 경고 \"클로드 코드는 망가진 도구...'바이브 슬롭' 위기\"",
        "date": "2026-05-27",
        "originalDate": "2026-05-26",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE0weWJiU21JLTZSYzdvNHNBSUt4U2ZPNHdMd2xZdnd4VGc3dVBsNm43TFZWNWFsVldYSGR5WmpncWROb3NtUExjeWVwU1ZJVTZFTmhkY3JhWmZQTXpQQVJaa25JRnYxTl9HU1E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 거물 개발자 경고 \"클로드 코드는 망가진 도구...'바이브 슬롭' 위기\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "삼성전자, 'GPT·제미나이·클로드' 쓴다…업무 AX 속도",
        "enTitle": "삼성전자, 'GPT·제미나이·클로드' 쓴다…업무 AX 속도",
        "date": "2026-05-27",
        "originalDate": "2026-05-26",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9lSU8wYktfb2w0ODVKWmxuclc4dUZuSDZHYl9sQ25ydHNYRU1JakNWNktLaWRGYTBzQUZfTEhGTmY0Uy11ZGxtM1pweGZWQWs?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성전자, 'GPT·제미나이·클로드' 쓴다…업무 AX 속도 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[유미's 픽] 세일즈포스, 실적 발표 앞두고 '냉기'…AI 에이전트 수익화 의구심 확산",
        "enTitle": "[유미's 픽] 세일즈포스, 실적 발표 앞두고 '냉기'…AI 에이전트 수익화 의구심 확산",
        "date": "2026-05-27",
        "originalDate": "2026-05-26",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFA0b1cya3pwQVRVSUlfZDF2NElyRWdXRGZOU2VUS0NGRVUzdEx1TjJXOTc1OWdidElOY2N2bnJZUkFCNDJULV82LVlwMm5UR2M5WkZiWUl3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [유미's 픽] 세일즈포스, 실적 발표 앞두고 '냉기'…AI 에이전트 수익화 의구심 확산 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
