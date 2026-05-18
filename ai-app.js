/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-19
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "기술 경제가 여기 있습니다 – AI 시대에 직업, 경력 및 인재 아키텍처에 대한 재고",
        "enTitle": "The Skills Economy Is Here – Rethinking jobs, careers, and talent architecture in the age of AI",
        "date": "2026-05-19",
        "originalDate": "2026-05-18",
        "sourceName": "hrtoday.in",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNVTlnY0tNblU5MVpzYkx3eXo2cEFJc2xZengxVm84SEowZ0FFYjMxSFYwdkFVTXc5Mm54MVcwMk84dmVrSmR3R1k5RlgzWjRRN1hSTUFjN0J3by1HNGNia2cySGxhM1M5Y2hmNy1PTlBLMHh4N2RCalUzTVhnbTRxMnFFWVQ4TjF5ZzlZdFBwaXpCS0JxVzlxUHlDVEM4V2RhRkI5QlhlakVETU1TZlluNVA0YU1ZSlMwTl9mXw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 기술 경제가 여기 있습니다 – AI 시대에 직업, 경력 및 인재 아키텍처에 대한 재고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "하우스 기사 | 소프트웨어 엔지니어링이 AI와 업무의 미래에 대해 가르쳐 줄 수 있는 것",
        "enTitle": "The House Article | What Software Engineering Can Teach Us About AI And The Future Of Work",
        "date": "2026-05-19",
        "originalDate": "2026-05-18",
        "sourceName": "Politics Home",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPbHhhejJwVkJzd21LaW9QV1kxSXFiSVcwVE5lMi0tWXJMZ2FZYkpWUVhxMGRQbTl4OVJPR2pRaTJwN215ZlRmUUF4OWdMcjhKdW9xS242V2I1Wkg2cElvRFk3NGZTWHFCbFduVnVrRm9XNDVVN25ReGg4N3V0ckR3bUw3MnVvNERjVWFPNWhURQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 하우스 기사 | 소프트웨어 엔지니어링이 AI와 업무의 미래에 대해 가르쳐 줄 수 있는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 고령 근로자에게 고용 시장 레버리지를 기울일 태세",
        "enTitle": "AI poised to tilt job market leverage toward older workers",
        "date": "2026-05-19",
        "originalDate": "2026-05-16",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNSGwxcFltSkJROXFQVjlCbjBmSUk0UEY2c1REXzdWbmRaVXNGRkdWLUVnQW9UOWNfNkJYTXc3YTFjUEZNUVNNVF9CRVlzR3Nfd0JtVV9GdEV5b3BLQVJ4RENvNzhVdXdBRGZfSkRfd0daNXczNUJPVUFxeTN4REhoR1doWERoZ2JCcGNMT0c4Y1FseE5p?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 고령 근로자에게 고용 시장 레버리지를 기울일 태세 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "신한은, 통합 플랫폼 ‘슈퍼SOL’ 출시…AI기반 금융 슈퍼앱",
        "enTitle": "신한은, 통합 플랫폼 ‘슈퍼SOL’ 출시…AI기반 금융 슈퍼앱",
        "date": "2026-05-19",
        "originalDate": "2026-05-18",
        "sourceName": "재외동포신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5FSC1qcUZOS1RrUGJjam1MU1hhb0x6MmN6dkFsZGk3VV83X1Q3RGlDSUR0bGxKakNJcjVfTE9MY040dURfVFlJRDFMN2Z6bGhKXzM0dGRzMWNxUC0yRlMwZ0JJNFVVZW9RLXN5dw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 신한은, 통합 플랫폼 ‘슈퍼SOL’ 출시…AI기반 금융 슈퍼앱 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "롯데홈쇼핑, 챗GPT 기반 ‘AI쇼핑’ 출시...맞춤형 AI 서비스 강화",
        "enTitle": "롯데홈쇼핑, 챗GPT 기반 ‘AI쇼핑’ 출시...맞춤형 AI 서비스 강화",
        "date": "2026-05-19",
        "originalDate": "2026-05-18",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9LR0ZGa0VSUHdmbG8xV3drT1AwTmhZUl9kem8wU0pyVWRTQkFmbXlfWW5fQlpPVXVaMklmMDFyM1dsckhIc0FIb2xXdmZmemtxV3NaUG93?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 롯데홈쇼핑, 챗GPT 기반 ‘AI쇼핑’ 출시...맞춤형 AI 서비스 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "롯데홈쇼핑, 챗GPT 기반 AI 쇼핑 서비스 출시…홈쇼핑 최초",
        "enTitle": "롯데홈쇼핑, 챗GPT 기반 AI 쇼핑 서비스 출시…홈쇼핑 최초",
        "date": "2026-05-19",
        "originalDate": "2026-05-18",
        "sourceName": "디지털데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB0bGZ5WFRWU3dGMUszdUdGUnk3MEhyQy1pZDB4VEpOd1I1UGl2Qnl0OFhfUWxneWNtWEdYRHZSNUxWUVBxTG93aTMzNFYxLWRQcktXY2pRa2NLZEZLaFl0OWFxNnU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 롯데홈쇼핑, 챗GPT 기반 AI 쇼핑 서비스 출시…홈쇼핑 최초 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
