/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-07
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Pearson CEO: AI 직무 종말은 실리콘 밸리 이야기입니다. 데이터가 다른 것을 알려줍니다",
        "enTitle": "Pearson CEO: the AI job apocalypse is a Silicon Valley story. The data tells a different one",
        "date": "2026-04-07",
        "originalDate": "2026-04-06",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQVnpBNUtOUHgtcVUwcnZlcm1fUWtoNURfVzJHZUhQNUVFRUVFN3dyc3doQTNHRUpDTENuVTFiLUo4N2JPcnE2clhyWU9Xa2Q2MEZweFhJZU5aR2lIaU1RVVgxSllVNWtWeVNMQk5sNF9ITUE0T0ttS19EQnV6NFVMdVRfUkphWEZQWVMw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Pearson CEO: AI 직무 종말은 실리콘 밸리 이야기입니다. 데이터가 다른 것을 알려줍니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI는 수백만 달러를 '직업적 정체성 연옥' 으로 보내려고 합니다. '30년 경력이 중단된 후 발견한 것은 다음과 같습니다.",
        "enTitle": "AI is about to send millions to 'professional identity purgatory.' Here's what I discovered after my 30 year career crashed to a halt",
        "date": "2026-04-07",
        "originalDate": "2026-04-06",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1LNFpacVZGa3U4UGxfWlV4OWZ3RTNMM1RVYWdMYk5UdnJQeUZSdjJQZTVzUkRtV3ZuZ3hjZjNzeEo4WUQ5RVhPVURHS1VHVFpZWHp5TEhHeUVzbnA0SW1qWG8tSkRkNUQ1T3pXc0ZwQ2cxZXo4dk5WdExnY01QbUU?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 수백만 달러를 '직업적 정체성 연옥' 으로 보내려고 합니다. '30년 경력이 중단된 후 발견한 것은 다음과 같습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Epsilon India가 AI, 액세스 및 선택을 통해 커리어를 구축하는 방법",
        "enTitle": "How Epsilon India is building careers through AI, access, and choice",
        "date": "2026-04-07",
        "originalDate": "2026-04-06",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPT2VXQU5IbkFOV3ZxcW5qUU15aWc1N05kbDV6QWJGUGdUYWVsRmljWHI4cmxrYU9rRGdrcUlTV21NMFFWWlBCUTY4ZXVzdGRmeEhWbWtWZldhMWRiSjNaS3hkVTc5Qjl2YkdLV0Jxa0tReFJTWDhCS0lwYmp4bVd0Slg2dkhTdlN5NzNBWmx4MmV3SVI0bnd1OTJFV0dCSlNMYzJBTTZfQ0p6RnVFWUJESURpMy0zWHdXY1M5TURPX1JHVHpwRXNMYXgzN1ZFWnJSQjBBT1JxaGVTUdIB3wFBVV95cUxOeGtON3JoNG12WXN1RTJwbklSZ0VQRk1qVHhhbjdNSFo0Z0M2WjFPc2x1bFgybWpnVWc2SHdrUkRFV1pkNk1EcUZuSnAtQy02cnpZU1VDN1NhOExJTVI0Uk8xQ0dxRWllTFBmdkpBZDR5YVZ3XzlJWmowRjJRR1RNNnEwQWswMkdENGEzc0MyQUdfcl9qTDMzLTVSNUtmQVNuTVBWZW9LQnd5eEZieXhxX0dOWjJYa2FPQzk2RDhfQnVKNkctZ1cxOGd0VjBiSndqWTVmZmgzNUM0SUR2eFJ3?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Epsilon India가 AI, 액세스 및 선택을 통해 커리어를 구축하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글, iOS용 오프라인 AI 받아쓰기 앱 조용히 출시",
        "enTitle": "구글, iOS용 오프라인 AI 받아쓰기 앱 조용히 출시",
        "date": "2026-04-07",
        "originalDate": "2026-04-06",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1LdWQ5UmRjZlphTU1Ua3ZSaFFfeTMyM1Y1SHNzUGJZSnFUbml0MWpMM1A4QV93dzl0aDl2MEhrS2ZYM09EOVhGY3ViUXlxbjQzYVNqa3JsR280a2J3OWkyR0QyQnN0UVpMMXlQSEd2STdseGM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, iOS용 오프라인 AI 받아쓰기 앱 조용히 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "클로드 무료 외부 접근 종료...오픈클로 등 서드파티 앱 사용자 유료 전환",
        "enTitle": "클로드 무료 외부 접근 종료...오픈클로 등 서드파티 앱 사용자 유료 전환",
        "date": "2026-04-07",
        "originalDate": "2026-04-06",
        "sourceName": "헬로티",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE55dHp4RUdqdzBCczAyNjluN2RxMm9zRGl2U1ZwWjBrWWFfYkw0QjdKYkZCb3NwbmJCcGJpOEp1ZUdzV0VWcFl4S3VJTkZ0V1ZSdXN0aG84XzJIRnVtcTVz?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 무료 외부 접근 종료...오픈클로 등 서드파티 앱 사용자 유료 전환 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글, 오프라인에서도 작동하는 AI 음성-택스트 변환 앱 출시",
        "enTitle": "구글, 오프라인에서도 작동하는 AI 음성-택스트 변환 앱 출시",
        "date": "2026-04-07",
        "originalDate": "2026-04-06",
        "sourceName": "네이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1pZi1mM09iWS04MmtLaVl5OTRVeEl1LUlra2I4dTN0X2VGcVh4WGdjVEJhR2NjYXVhTDRNXzRuNjdDTWpCc0Z4WXlOWVVlaEdodi1V?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 오프라인에서도 작동하는 AI 음성-택스트 변환 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
