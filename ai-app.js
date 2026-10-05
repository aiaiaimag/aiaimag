/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-05
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI는 여전히 우리의 일자리를 빼앗을 것인가?",
        "enTitle": "Will A.I. Still Take Our Jobs?",
        "date": "2026-10-05",
        "originalDate": "2026-10-02",
        "sourceName": "The New Yorker",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPaTZzWUdteVBNeXM5Ui1kemx6LU1SSVdUVXpWQzhKSFh4V3preFp4NkVoN1JSMzhBQXpZV0o5WXJaOGtjOEZiVWZnV2twTXJEQXE2aFMwTVJlZVl5WnpjSHdTY1NXRHB1enZ6TjFWaW1nMkNERjRWU2NsbndXemFIWUFB?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 여전히 우리의 일자리를 빼앗을 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "벤 애플렉은 인공지능이 일자리를 없애거나 우리 모두를 죽일 것이라는 예측은 그저 '선전' 이라고 말합니다.",
        "enTitle": "Ben Affleck says predictions that AI will wipe out jobs—or kill us all—are just 'propaganda'",
        "date": "2026-10-05",
        "originalDate": "2026-10-02",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQek0wYXI3VFkyY0l2VUJQZ3pNdWsxd2Q5dk90YVoxdXlPYldzeEozZnRkR0tCeFVGaWh6Zjk0OTVONXlna01UbFA3aTRjQmJwQ2FvaEJ0NFdzTTFQYzBDWW9NX3JGOG9fS2NiNVVWUnZmcThSUnBLXzJmeE1KS05kZlZ5WldZZXRIM1JMQk5NWmJhNW9JaEVXR0F5WVpCYjJzMmk5cDZmMkhfbmxoYTVNMV9hdmZaQ3pubmVSdmIxbGZJWWpIR25VV05uN2dCQ0ZGa2tuSg?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 벤 애플렉은 인공지능이 일자리를 없애거나 우리 모두를 죽일 것이라는 예측은 그저 '선전' 이라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "‘인공지능과 일의 미래’ 시리즈 — 대학이 학생들에게 다음 과제를 준비시키는 방법",
        "enTitle": "The ‘AI and Future of Work’ Series — How the University is preparing students for what is next",
        "date": "2026-10-05",
        "originalDate": "2026-10-01",
        "sourceName": "The Cavalier Daily",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPQU9ObVU1ZU8zZ0tBaS0xTUx6WDQwZFBCWnlsVWdYZjFrdDN2UkpHVjA5R1dsQ1ZpZEhta1A4cEZjdlUyQlFiWmQtM2x1WFNvR1BNUkFULXRaNVJxbWo0dWVxQVJyQll4WnhGN0puVkFoeTZRYkN6SkRueVRWQ3JKSDZaWVl2MDZMdUlTTWxRSkFxT1VNakpZS0Ryc2FQZThucjlZdnJxSlNNZWpfS3UweVo0ekVZbVlhMkNUVDZLZW5RTXBFMGpfY1hkQXNnVUVGV2c?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! ‘인공지능과 일의 미래’ 시리즈 — 대학이 학생들에게 다음 과제를 준비시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글 제미나이 AI요금 개편…월10달러 내도 '프로' 모델 못쓴다",
        "enTitle": "구글 제미나이 AI요금 개편…월10달러 내도 '프로' 모델 못쓴다",
        "date": "2026-10-05",
        "originalDate": "2026-10-04",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1GOG1wb3lCVnprQm94djlIeEpzM0JwZmFFMjhnMDBLbXdvUXdQTWZTd2pPd2JMeGtfUEQtcHBuTC02TENPTkU5WTlSXzBHRG9IQmgybGY2dWx0Y0U2OEJVX9IBYEFVX3lxTE1GOG1wb3lCVnprQm94djlIeEpzM0JwZmFFMjhnMDBLbXdvUXdQTWZTd2pPd2JMeGtfUEQtcHBuTC02TENPTkU5WTlSXzBHRG9IQmgybGY2dWx0Y0U2OEJVXw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 제미나이 AI요금 개편…월10달러 내도 '프로' 모델 못쓴다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "AI활용법 익힌 제주 청년, 지역 스타트업 '취업 연계' 구조 만든다",
        "enTitle": "AI활용법 익힌 제주 청년, 지역 스타트업 '취업 연계' 구조 만든다",
        "date": "2026-10-05",
        "originalDate": "2026-10-05",
        "sourceName": "헤드라인제주",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFBnNjBlSXJTeHo0VXBKZktPQ2JBOXVKc01iME9iT3p1bVVOaHdGN3paS1RYc204M2dMTFpPd1hlUHpZclhGMWhqSkN0YUZRWlhyYTVnR1hHTjdadS0yRWdLdHpnbEQ1N04tZkFuTFE5ZWw5QQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! AI활용법 익힌 제주 청년, 지역 스타트업 '취업 연계' 구조 만든다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "LG유플러스, 해외 AI 서비스 '유독'으로 순차 출시",
        "enTitle": "LG유플러스, 해외 AI 서비스 '유독'으로 순차 출시",
        "date": "2026-10-05",
        "originalDate": "2026-10-05",
        "sourceName": "싱글리스트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5zeTVpMzk4bnRpM3pzYlZYYktsOGFOZWluVWxCQWRoQVYzQnc1a3MwdDlnaHkwQUhxVFVRUHBhREEzdVdtZEZWWkhfaGM1VENRX1IxdlY3elVXcnZjWkxya2l3V0lEdw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! LG유플러스, 해외 AI 서비스 '유독'으로 순차 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
