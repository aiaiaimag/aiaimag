/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "하이브리드 AI-인간 노동력에서 누가 실제로 번창할 것인가?",
        "enTitle": "In the Hybrid A.I.-Human Work Force, Who Will Actually Thrive?",
        "date": "2026-06-10",
        "originalDate": "2026-06-09",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE1wbDB3RnJRcVhiN2VpaC1EWkkwcWswNk5iQmlLX0hUWkRIRzhVS3lVdHJ2RkdKUUNab05RQUx3ZWZfdzRUTmNWdkZ1T0RtaEwyZzlkNWJVMDV1T3JXcU5sVHRxSlBtanI0dFE2VVFoWTBXUWZsb21XVDFwbEU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 하이브리드 AI-인간 노동력에서 누가 실제로 번창할 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 아닌 원격 근무가 가장 큰 초기 경력 위협입니다. 준비가 되셨습니까?",
        "enTitle": "Remote work, not AI, is the biggest early career threat — are you prepared?",
        "date": "2026-06-10",
        "originalDate": "2026-06-09",
        "sourceName": "unleash.ai",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPcE1NWnozTmlSQl9JcUNPTGxHNF85YkNQRzlBZUZxQ3R2UmlUNHBIYUQ5X05jQm8zbDZzX21YZ3ZIYVBfc0VWajgxa3N5Q3JZQ1VzQUIxbk9tM0xfNUhKdnU5amRxNlBDN19DSWVPVFduNFktc1lFa1EtQk5mbk9KTEVfcVczV2RRU3paakVHSW1lWTNNQ0RzejZSRjdjaDhHWTQxX3dKd1drR2ZQcjFWWlpDSGZJRmwzMHBLTV93?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 아닌 원격 근무가 가장 큰 초기 경력 위협입니다. 준비가 되셨습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 (AI) 이 월스트리트 전역으로 확산됨에 따라 미래의 은행가들은 엔트리 레벨 일자리가 줄어들고",
        "enTitle": "Future bankers face fewer entry-level jobs as AI spreads across Wall Street",
        "date": "2026-06-10",
        "originalDate": "2026-06-08",
        "sourceName": "Crypto Briefing",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBNc0t1Z3ctS3BKYU84Y2VIaUczM0NxTHlIR2U5RGY0LWJJekNSQWpIQno0VDNZYlZWNkhvN3FqME40ek5aeUwwaE9yZE10QWpQNEtiUXU0MzZoSGtfaDFJVG1ZdkdGdW8?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 (AI) 이 월스트리트 전역으로 확산됨에 따라 미래의 은행가들은 엔트리 레벨 일자리가 줄어들고 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT·클로드…서울런 회원에 유료 AI 9종 무료 지원",
        "enTitle": "챗GPT·클로드…서울런 회원에 유료 AI 9종 무료 지원",
        "date": "2026-06-10",
        "originalDate": "2026-06-09",
        "sourceName": "서울특별시",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1qcnNsdkxLSFNQYml0Y244VldSamZid3laUnNoSmlCeXJNbEppQjFNOVpVSDNXaXlJREM4U0xmc1pSdnBGT0diZm14Y2psZEphbFF1WTlLMUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드…서울런 회원에 유료 AI 9종 무료 지원 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "무신사, 챗GPT 무신사 전용 앱 출시…AI 패션·뷰티 시장 정조준",
        "enTitle": "무신사, 챗GPT 무신사 전용 앱 출시…AI 패션·뷰티 시장 정조준",
        "date": "2026-06-10",
        "originalDate": "2026-06-09",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE9lRDQxNW9oS3kyM3o0M2JjeVQ0ZF85eHQ1bmgyZjQyNFdfb3BJekJYYW9mckhVSG1QU0FxMWZqQWpJaXJWalE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 무신사, 챗GPT 무신사 전용 앱 출시…AI 패션·뷰티 시장 정조준 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드 '페이블 5' 공개…\"수일간 자율작업 가능\"",
        "enTitle": "클로드 '페이블 5' 공개…\"수일간 자율작업 가능\"",
        "date": "2026-06-10",
        "originalDate": "2026-06-09",
        "sourceName": "일간투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1UdTRLc0JDeW5RUVVpVWR2eHJYSEpyMmZKd2o1TGN4YWNFMi01WEF2R0NLdUF6U2l4cmdWVko5ZVU3TEthcW1zUUZLUXRKV2VLeU5GdXZPclpzUDZTUVBiZGw3Q2pkLUpXak5F?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 '페이블 5' 공개…\"수일간 자율작업 가능\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
