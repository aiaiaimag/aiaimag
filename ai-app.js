/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "맥킨지: AI는 1100만 개를 파괴한 후 죽이는 것보다 더 많은 일자리를 창출할 것이다.",
        "enTitle": "McKinsey: AI will create more jobs than it kills — after destroying 11 million",
        "date": "2026-10-04",
        "originalDate": "2026-10-03",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxON3U4UXcxbWZMQklxZW16a011VzFkaFFzeE80ZkhUcFRFUlhUNmYzM05UU19LUFFMSzZ2UmsxM1FWTmZMcDFlRnI5UWxWdUxMb2dzdXlQWDBoOElDNFRDNGN1cm41T1RUeWdTSjdvY0d4ZGxhcHhUbF9lS3FlQmhnSzZ3M2xXeTFlUmt6Mkx2aEs3V3R0Qk80akZTa19HZ0RYcURDeWpoMEtSbExKaEgyc2t3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 맥킨지: AI는 1100만 개를 파괴한 후 죽이는 것보다 더 많은 일자리를 창출할 것이다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI는 여전히 우리의 일자리를 빼앗을 것인가?",
        "enTitle": "Will A.I. Still Take Our Jobs?",
        "date": "2026-10-04",
        "originalDate": "2026-10-02",
        "sourceName": "The New Yorker",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPaTZzWUdteVBNeXM5Ui1kemx6LU1SSVdUVXpWQzhKSFh4V3preFp4NkVoN1JSMzhBQXpZV0o5WXJaOGtjOEZiVWZnV2twTXJEQXE2aFMwTVJlZVl5WnpjSHdTY1NXRHB1enZ6TjFWaW1nMkNERjRWU2NsbndXemFIWUFB?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 여전히 우리의 일자리를 빼앗을 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "크리에이티브 클래스 전문가 리차드 플로리다 (Richard Florida) 는 ‘AI는 기술을 향상시키고 기술을 없애는 것' 이라는 189k 직업 전멸에 직면합니다.",
        "enTitle": "Creative class guru Richard Florida confronts 189k job wipeout: ‘AI is both an enhancing technology and eliminating technology’",
        "date": "2026-10-04",
        "originalDate": "2026-10-02",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPbjNpRjd4dFBLbWxSRkU3MTBOeTVXTTBlRm93UnM2NFI4SnVrWE45b0hzNmVSWC1oTVA3eU8zdFc5UDgwdVhRX24wTHRRTEVCQS1fNXdCNE4xeVZUb1VlRTJWU0prdU5uOVVIVGVVeF9ZZmQwcTQ0VlpYV2FnT2tlRnp3ZHdNc1g1Nl9mdVBrc3pQZw?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 크리에이티브 클래스 전문가 리차드 플로리다 (Richard Florida) 는 ‘AI는 기술을 향상시키고 기술을 없애는 것' 이라는 189k 직업 전멸에 직면합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "'나만의 클로드 코드' 만든다...앤트로픽, 커스텀 확장 기능 '모드' 출시",
        "enTitle": "'나만의 클로드 코드' 만든다...앤트로픽, 커스텀 확장 기능 '모드' 출시",
        "date": "2026-10-04",
        "originalDate": "2026-10-03",
        "sourceName": "aitimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFB0ZnRRSkFTSWQzVkhMLXFWaW04Wkx6UE04X1ptQXlDRW5wdnM2akV5ODVtTEJVM2VmNXFSbmpXZS1CU01hVVRRTXRmMC1nWHlhSTk1NW5GcHl4NXF6ck8ybldaYzlzNjA5UlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! '나만의 클로드 코드' 만든다...앤트로픽, 커스텀 확장 기능 '모드' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI는 지금] 챗GPT·클로드 추격할까…'제미나이4' 띄운 구글, 기술·가격·마케팅 총공세",
        "enTitle": "[AI는 지금] 챗GPT·클로드 추격할까…'제미나이4' 띄운 구글, 기술·가격·마케팅 총공세",
        "date": "2026-10-04",
        "originalDate": "2026-10-04",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9hbTl4SExFWm53Y1VxeU83UFRfRUtpdFdhcmlDdGp2cE9VY2J1emRtOU11SHg2TEprNEZjNnhzMFI2Rmo3TlF3WHpfSkFYcEU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI는 지금] 챗GPT·클로드 추격할까…'제미나이4' 띄운 구글, 기술·가격·마케팅 총공세 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT·클로드에도 있는데…메타 '뮤즈'에 월가가 열광한 이유 - 머니투데이",
        "enTitle": "챗GPT·클로드에도 있는데…메타 '뮤즈'에 월가가 열광한 이유 - 머니투데이",
        "date": "2026-10-04",
        "originalDate": "2026-10-03",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5Oa2FuX2k4dXBLcXdpYjFsMUE2YTIteHVhbk1iNzBOZWFJTlVqajE1U2dQUThNNzFobWlRUjE4U2RpXzBlRXJoSDR6MnRTaWZsaXp2cDdBaWxnTzZUUTQyUWljMThOY1FZ0gFuQVVfeXFMTVNZNW8xLWxBd29zZUowdmkyMF9rdTZYZlpPalRtbVR2b3p4VUI2dFloUjFiT3hYQWhUZlpVVVI3UGFZTnNyLWtkcVBkQWxsczRScGVlaVFPd3lmS1k3OWR2cXJKMEtrZi14MUFGVmc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드에도 있는데…메타 '뮤즈'에 월가가 열광한 이유 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
