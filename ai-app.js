/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "업무의 미래: 젊은이들이 앞서 나가기 위해 필요한 기술",
        "enTitle": "Future of Work: The skills young people need to stay ahead",
        "date": "2026-08-20",
        "originalDate": "2026-08-19",
        "sourceName": "KBC Digital",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNbnJ6eHVSLXAyR1dnYlFHLWpHVHUta3Y1S1Boem1TWEY1SzBWMWpyamdPU1FnSFRRSXhEUl9PZW5saWdfRUZSaXh0WjhhRV9fVDl6cHdwVG10M3Uxai0tMUdDZmdRVEZZdG1uVGh2NDJGajJXN09DdWNmX0lmSk9keUpfOFJMdTA?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 미래: 젊은이들이 앞서 나가기 위해 필요한 기술 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 시대에 미래를 대비한 커리어: 리더십 전문가가 돋보일 수 있는 ‘인간적’ 전략을 공유합니다.",
        "enTitle": "Future-proof your career in the age of AI: Leadership expert shares ‘human’ strategies to stand out",
        "date": "2026-08-20",
        "originalDate": "2026-08-19",
        "sourceName": "The Straits Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxORFNodWNFUk5XRHZSaWhBeldsamE5RGRwdlZDZF9jTms5WnZRUV9ZaGZIU01xdWlXQk5LdkRIRVh0VGhCcnkyYm92WHBKY1ZfZmVCNGJ2bTljS21ObXE0X3VIczZqLUtDZEFCXzBzdEJDU01uR3RBUC1SblBfejg3ZmRFSHIzNkh4MkRXMjBoVVpqU2s0eEJPM25hOUpHSlp2SWxoYUd3?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 미래를 대비한 커리어: 리더십 전문가가 돋보일 수 있는 ‘인간적’ 전략을 공유합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "LinkedIn 연구에 따르면 밀레니엄 세대와 Z세대는 빠르게 성장하는 고임금 AI 일자리를 창출하고 있습니다.",
        "enTitle": "Millennials and Gen Z are landing fast-growing, high-paying AI jobs, according to LinkedIn study",
        "date": "2026-08-20",
        "originalDate": "2026-08-18",
        "sourceName": "CNBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQb091YW44NUc5QnpXUFltNEVoc0w1THl2NHl0V3NSUXozRGhYUkFUd3hfTVg1X2pRTEtXWmlPNzJra2tZOU5HTWVNY1RFaDA4WTZHNXNRU18zVWxuUHNkRXBmeFhPVVBsSzVLaDJjbjVWYzdBM3NsM3h3aEtLbEJEajZCbUR4RzRHSmJ1aDA4UktaUzYzRGxSc1FDVnF5Y1YtdXUwYUl6RG1ZSVo5dWhxNjJrVzVtMHlPZXfSAb8BQVVfeXFMT3p1NmtqMldPOE9Gb1JEX2ZtNzFPcmZ3WDN4VEZJQ2JUVTlrM2Z1ZVFkQUkwS0xmUk1OR0FPMTVaTVNCWDA5VVo2WFlmaGNGc0FrUjN6SmM0dFNiZ2JWM2Vna1QyWDY4Rzk3bmItRFJ0dHhsSC1KSWdWb3FHRm5XSVJXaFVRc2FuLV8xY1k1MlVMQzc4WFRYVEYtdmdfRVNsbE90YzJOcTZ2b1F6bHAzOTlRN0c3ZzVLdWtMSlFtLW8?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! LinkedIn 연구에 따르면 밀레니엄 세대와 Z세대는 빠르게 성장하는 고임금 AI 일자리를 창출하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 앱에서 방탄소년단과 함께하는 4가지 새로운 인터랙티브 경험을 만나보세요",
        "enTitle": "제미나이 앱에서 방탄소년단과 함께하는 4가지 새로운 인터랙티브 경험을 만나보세요",
        "date": "2026-08-20",
        "originalDate": "2026-08-19",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNQlVmUkttb21aSjdMRnVwR3p1S01GRy1XZFB4cFVqZXlBSm53RUtUcmlvclBVaUw4aDRaci1acHJEN0FLRF9KNW4wa0dYVHRBbktMV1kyUWJoS2daRnFxQ1FaR1pvaXVBYjZiTVNBc3JGZnR2YlBLUmI3cmtPM21lTmY3RExlamc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 앱에서 방탄소년단과 함께하는 4가지 새로운 인터랙티브 경험을 만나보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "동국대 WISE캠, 전교생에 AI 서비스…챗GPT·제미나이·클로드 골라 쓴다",
        "enTitle": "동국대 WISE캠, 전교생에 AI 서비스…챗GPT·제미나이·클로드 골라 쓴다",
        "date": "2026-08-20",
        "originalDate": "2026-08-19",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBkTjgwZklPNXQzZVBXbm5pYzBfUWhFODFONnZZZmhzV1RiMnpxY0NjWVJSU21ueTVVZDNRYWJIN0Zkay1ONDhIZEFJaW01d0FGbGlabml3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 동국대 WISE캠, 전교생에 AI 서비스…챗GPT·제미나이·클로드 골라 쓴다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "뉴플로이, 온디바이스 AI 기반 '문서 OCR' 서비스 출시 - 머니투데이",
        "enTitle": "뉴플로이, 온디바이스 AI 기반 '문서 OCR' 서비스 출시 - 머니투데이",
        "date": "2026-08-20",
        "originalDate": "2026-08-19",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9ERENhMFkzWC1MLU5DeF9BZ0ZCcThibUsxM1pqTmdic04taVVPSWxXMjZGMHRfdlNuN2tRT3FDNi12MnotckI3YjFXcnRKS0g3aVIxNlc1dXF2Yll1Wm4tSWhZcnRmZExOVVHSAW9BVV95cUxNV0ZMLWoydWQtUXZpME5IYzhMNmtpVTl2TlBSUi1oZG1fblp3RllNVHpYd3Q2TmVJT3BaYU9td3FFZEdySTUtaHVFMC00bG9Hb2RNLXZHaDJ2VkMzeW9OX2VCc2VjWUVZQlVSZFdFT0k?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 뉴플로이, 온디바이스 AI 기반 '문서 OCR' 서비스 출시 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
