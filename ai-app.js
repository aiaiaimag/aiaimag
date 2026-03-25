/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Printful, 주문형 인쇄 (Print-on-Demand) 및 확장 가능한 디지털 비즈니스를 통해 AI로 수익을 창출하는 방법 공개",
        "enTitle": "Printful Reveals How to Make Money with AI Through Print-on-Demand and Scalable Digital Businesses",
        "date": "2026-03-26",
        "originalDate": "2026-03-25",
        "sourceName": "EIN News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPSkJQR1JhSllRT2xSMHF5WHpXcThwZTdiUDZZek9QdWZ2ZnNrekFjdzVCX2pCTGtzYlNyQjRKcEpqeldHS1FMdWhuWlFsd2hHZE9maUVBd05OemtOTTBGZG4yWmRjTmxsZTBZeWxETnZCQXJMUGJZT0QwX1V3dUZ3MVBiMmVfNmd5bzVibTY0V0VQODBTb05kMlF3QUhuOWlBQnpxV29ia3lJVkFMSktwT2duWDhwMXVRSDVWcnl1M0VneVRibXVoXzRSbFluN1VVSjVHa3VGc9IB3AFBVV95cUxQdXhIRHV2ZFZWWGg5blNrcF8yLTFpbEhCNWxVa1hOYURXWktGMTIxd0FreVBfcmxRb0pNdUk1ckVWVTA0MVJXSzdBQ0NjdUF4OFJQT0RTelFILWR0WDRwbWJyOHlOZmsweldyelVJSmRyYzQ5T1phaktKNFMwZk5wM0pmWXZMNElaNWQ1bXVlRHNBQVBuUDZweDZhMnhHR3g4OUNVOFlUanhYMUE0TG41U1dtQ3BZZEdnUW1Ic0UtUkpLY0E3Wmp5VGJNZF9TUENLXy1wNDNqbzdIVmZD?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! Printful, 주문형 인쇄 (Print-on-Demand) 및 확장 가능한 디지털 비즈니스를 통해 AI로 수익을 창출하는 방법 공개 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Indeed, AI 일자리 시장 혼란 속에서 72andSunny를 글로벌 크리에이티브 AOR로 채용",
        "enTitle": "Indeed Hires 72andSunny as Global Creative AOR Amid AI Job Market Disruption",
        "date": "2026-03-26",
        "originalDate": "2026-03-25",
        "sourceName": "ADWEEK",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNWC1FOFR6RE9OSzQ5QkI1SXNwc3FsY1pLMUZGLTIwdzVsOWVydkpyWVB5a2RUN01LUUpLNmMyTEFPNERCNXV3MXFGTWpiRFBfYUY5TE9jRFM4eEI3QUFGc1RnYkpPSk5VV194Q3RHejc5SUkxMWVTcmczc1pSNUprVnFpanItUWtGb3MtdDBtaEhUNkJ1V2tweGdjb0UzLWRDUTAxcm1VQU9WNEstUVE?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! Indeed, AI 일자리 시장 혼란 속에서 72andSunny를 글로벌 크리에이티브 AOR로 채용 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 시대에 일의 미래를 위한 사람 우선의 비전",
        "enTitle": "A people-first vision for the future of work in the age of AI",
        "date": "2026-03-26",
        "originalDate": "2026-03-25",
        "sourceName": "Brookings",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxQMzRIU0RWaGRCZGFMRmtOV2Q3aEJQUE5EeHFCWDU1cUlHcmNMNW11Um9XR3Ixc2I3NkdoVmE3MFluRTdNSGlFaUxzek45WUhkS0M3WnN5SjhaR1h4RndfQzU5bjh2aWRlZklXTDVMVlRZMWxkcFBDbEt6MDNxSVlKV1NhWGRTaXpMR2F6WUxwU1BEdFFiTV83cHFZWXJ5UQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 시대에 일의 미래를 위한 사람 우선의 비전 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "뉴엔AI, 패션 산업 특화 ‘인텔리전스 플랫폼’ 공개…”핵심 트렌드·시장 전망까지 분석”",
        "enTitle": "뉴엔AI, 패션 산업 특화 ‘인텔리전스 플랫폼’ 공개…”핵심 트렌드·시장 전망까지 분석”",
        "date": "2026-03-26",
        "originalDate": "2026-03-25",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1jeFltR1dHYzhhT24wWEdmZjJXejZFMUJrOVZGeDZSaHZJWHp6c2duUFZVa3RYRjFjbVBUT0R3ZjRGUzcwSmllUkpnWVVPX1pGMmdha180RlptS3pqck9oTG9RT3hETEx5bHc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 뉴엔AI, 패션 산업 특화 ‘인텔리전스 플랫폼’ 공개…”핵심 트렌드·시장 전망까지 분석” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "자소서·면접도 AI로… 대학가, 취업 준비 서비스 제공 박차",
        "enTitle": "자소서·면접도 AI로… 대학가, 취업 준비 서비스 제공 박차",
        "date": "2026-03-26",
        "originalDate": "2026-03-25",
        "sourceName": "한국대학신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5ESEZJQmVOYUkwUVJMT0pLak9QN3hiczlCekNLdjNpdFBneW91SzdIWktZNmFYLTVuZ3RaRC1xMlh6cXd2d0FPVlprLUtsYXhmZWVTdXRhYVV0S1EyUWdSYUJyWkRUZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 자소서·면접도 AI로… 대학가, 취업 준비 서비스 제공 박차 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "‘건강보험25시’ 앱 출시…AI로 24시간 맞춤 서비스",
        "enTitle": "‘건강보험25시’ 앱 출시…AI로 24시간 맞춤 서비스",
        "date": "2026-03-26",
        "originalDate": "2026-03-25",
        "sourceName": "의학신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1PN3ZaZzFsRUI2TTB2T2g4Yll4aFZ1NTc0dHZKdUpWWXI4aGlVQUJFQkxCdy1EMHkzMEJDM01EQXM1RzZCdXZMWmpPdG5mSVI2NGdUTDFrdzJ4UGZad3RGS2h0a1Rwc2lZa0E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ‘건강보험25시’ 앱 출시…AI로 24시간 맞춤 서비스 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
