/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 시대에 미래를 대비한 커리어: 리더십 전문가가 돋보일 수 있는 ‘인간적’ 전략을 공유합니다.",
        "enTitle": "Future-proof your career in the age of AI: Leadership expert shares ‘human’ strategies to stand out",
        "date": "2026-08-21",
        "originalDate": "2026-08-19",
        "sourceName": "The Straits Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxORFNodWNFUk5XRHZSaWhBeldsamE5RGRwdlZDZF9jTms5WnZRUV9ZaGZIU01xdWlXQk5LdkRIRVh0VGhCcnkyYm92WHBKY1ZfZmVCNGJ2bTljS21ObXE0X3VIczZqLUtDZEFCXzBzdEJDU01uR3RBUC1SblBfejg3ZmRFSHIzNkh4MkRXMjBoVVpqU2s0eEJPM25hOUpHSlp2SWxoYUd3?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 미래를 대비한 커리어: 리더십 전문가가 돋보일 수 있는 ‘인간적’ 전략을 공유합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "LinkedIn 연구에 따르면 밀레니엄 세대와 Z세대는 빠르게 성장하는 고임금 AI 일자리를 창출하고 있습니다.",
        "enTitle": "Millennials and Gen Z are landing fast-growing, high-paying AI jobs, according to LinkedIn study",
        "date": "2026-08-21",
        "originalDate": "2026-08-18",
        "sourceName": "CNBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQb091YW44NUc5QnpXUFltNEVoc0w1THl2NHl0V3NSUXozRGhYUkFUd3hfTVg1X2pRTEtXWmlPNzJra2tZOU5HTWVNY1RFaDA4WTZHNXNRU18zVWxuUHNkRXBmeFhPVVBsSzVLaDJjbjVWYzdBM3NsM3h3aEtLbEJEajZCbUR4RzRHSmJ1aDA4UktaUzYzRGxSc1FDVnF5Y1YtdXUwYUl6RG1ZSVo5dWhxNjJrVzVtMHlPZXfSAb8BQVVfeXFMT3p1NmtqMldPOE9Gb1JEX2ZtNzFPcmZ3WDN4VEZJQ2JUVTlrM2Z1ZVFkQUkwS0xmUk1OR0FPMTVaTVNCWDA5VVo2WFlmaGNGc0FrUjN6SmM0dFNiZ2JWM2Vna1QyWDY4Rzk3bmItRFJ0dHhsSC1KSWdWb3FHRm5XSVJXaFVRc2FuLV8xY1k1MlVMQzc4WFRYVEYtdmdfRVNsbE90YzJOcTZ2b1F6bHAzOTlRN0c3ZzVLdWtMSlFtLW8?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! LinkedIn 연구에 따르면 밀레니엄 세대와 Z세대는 빠르게 성장하는 고임금 AI 일자리를 창출하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능으로 돈을 버는 방법: 실용적인 소득 경로",
        "enTitle": "How to make money with AI: Practical income paths",
        "date": "2026-08-21",
        "originalDate": "2026-08-18",
        "sourceName": "Condia",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBBOFh1OVhlTE1rT3hscHlNYlNya2VwS1hrYTFsaEVyMGEzTjdGcU9IcHl5eGN4bndHdzhac2hveDlJUmxHSUc3ejVlSFhqLXl4aE9yY0dIVTd5NWpj?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능으로 돈을 버는 방법: 실용적인 소득 경로 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 1년 무료 혜택과 함께, 알찬 새 학기를 시작해 보세요",
        "enTitle": "제미나이 1년 무료 혜택과 함께, 알찬 새 학기를 시작해 보세요",
        "date": "2026-08-21",
        "originalDate": "2026-08-20",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPNUtuUldXVHNWZVlnOXRLV290X014X0Qyc1lKT0h0WEJYTDAyM3B3eFU1bkxrQWw0WkQyaDFRNS1TaUwycmtqVFA4MFllN3liWkFFTU1XeFUteUM3Q1l3b3g1aUI3ak1GTVJtRk5iYXJSQVl6TXJ2R1BkZWJQRWF1ZTU5NE5hQU5SbnRmMUxR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 1년 무료 혜택과 함께, 알찬 새 학기를 시작해 보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타, 맥용 'AI 비서' 앱 출시…인스타·광고 연동 강점",
        "enTitle": "메타, 맥용 'AI 비서' 앱 출시…인스타·광고 연동 강점",
        "date": "2026-08-21",
        "originalDate": "2026-08-20",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5OSjV6alQ3U1luUG5RN1RYZ3hkSmZ6dWk1ODR0dHZTeFZqN3lvZ05maEFlbm1kMkt0TmFCdjYxaDdDeVZTQlVrekJYaGN2RUhtano4VWh3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, 맥용 'AI 비서' 앱 출시…인스타·광고 연동 강점 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "메타, 맥OS 전용 AI 데스크톱 앱 정식 출시...‘슈퍼 앱’ 시장 추격전",
        "enTitle": "메타, 맥OS 전용 AI 데스크톱 앱 정식 출시...‘슈퍼 앱’ 시장 추격전",
        "date": "2026-08-21",
        "originalDate": "2026-08-20",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBDd0NHLUk3cl94bTdzc2VtVF95OE55bmNNcjVyTGM3SDdqRGpNQ05CQzJZMXlXLTNvVUxTYzNoaVdHYnVtOWlQOWU3MVB5VjlobEJ0M1hsb251eFFaVDZOTmZrV2NaZTRNR3c?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, 맥OS 전용 AI 데스크톱 앱 정식 출시...‘슈퍼 앱’ 시장 추격전 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
