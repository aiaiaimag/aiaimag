/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI로부터 당신의 경력을 미래에 증명할 수 있는 다섯 가지 직업과 그렇지 않은 다섯 가지 직업",
        "enTitle": "Five jobs that could future-proof your career from AI, and five that definitely won’t",
        "date": "2026-03-28",
        "originalDate": "2026-03-27",
        "sourceName": "Herald Sun",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxPY1lDdXo3X210SXdfcWRaSk9FSVhnNkd2SmFMUG9LazFjVndvSUpScnA5U3VqbVVORFVuVi1hdThRRXJmeEg1REVIeENHX3ZuejJ1X1FjYkNNb1Y2UU9ZbmtYcm12T2hYb25WTGhMMVFsNmpVY3A1ZGd1ZVZhR3BnU3ZPTHJYcEFWak5NdEhUb0dPNl9oRG1aMDRIRXdMOGFFc3lFUmtpTmo5MWt1dUpxc0UzZ3M5aUtfVExjZmVDTWlObl9NbGdVUmR4LUZVX3Q5Z1ZBQjNka2MxOEtyVGFWMTRZRkZQMmJLSk1CSmFUZTF4VGVKMUJqLWs4NEhnS3RiMlpfcWpnRjQwMTDSAZACQVVfeXFMUGlpTVlIZXFiZ18wVUVtck8xSEFobnk4dVJ6eFVLNUJzN0czbFdUd1JSMVRsdU1pLTAyMHFpQ1Q0U1g4TmlBOHcwcV9jUmhpdWluNV9vLXhyOXNkSTNueWhtZFFHb0dBZUZzNzh5eGpKWmtDcnozOHRUcVVGM1RybHVlS1VZU3h6YUZhYkRJdm1jbFVUZ1UxcTcyMGNvQVc4c09fWkdSQ2hPbGRoSTBIa3VQdnBuR1ZzcVVkWWMyU2NrZkZBUWVrb3EyUmhFV2FfbFZLa210WndaRmJLVVJDWkRzOC1XUVhVZ3p2S2dSdDV3TjdqdWJOLVJ4Zy1rOFQ1ZUdtQnpWTkFqbXZTS3FHQ08?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI로부터 당신의 경력을 미래에 증명할 수 있는 다섯 가지 직업과 그렇지 않은 다섯 가지 직업 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 에이전트와의 업무의 미래: 디지털 동료가 이미 여기에 있습니다.",
        "enTitle": "Future of Work with AI Agents: Your Digital Colleagues Are Already Here",
        "date": "2026-03-28",
        "originalDate": "2026-03-27",
        "sourceName": "TechPluto",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE16WnBHbHdrVGd1V1U0bnUzcjZRZjh4Snl5SHo2M0NURzVZZEV0YVh3eFVsX3lQMGtiZFFVSFd4Y3VuSC1SVGFKRDR2MzZ2b08yUFZwVll2TS1DZ0FTS0dkRHdVMDRkY2c?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI 에이전트와의 업무의 미래: 디지털 동료가 이미 여기에 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능이 엔트리 레벨 작업의 성격을 바꾸는 방법",
        "enTitle": "How AI is changing the nature of entry level work",
        "date": "2026-03-28",
        "originalDate": "2026-03-26",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPc0RtNW1wOHhNaVFHRHFTTDdNSTBVRGt2cjM1OFE5NS1UMlgtQ2ZIWVVReGxybXdCWHpON1V4d2JSLWZrcWxCTlVXWUludEgzWDdVSVQxOHI4bElIS2RtcTJmV1RVZFZ1MHdxZXNVUkhIY011UjhCWV9HY25iZTdsYWpZQ0NmS0FpWFNaVFQ4d3JyQXc0?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 엔트리 레벨 작업의 성격을 바꾸는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "영화 'her' 현실로?…구글, AI 기반 음성검색 서비스 ‘서치라이브’ 글로벌 출시 [팩플]",
        "enTitle": "영화 'her' 현실로?…구글, AI 기반 음성검색 서비스 ‘서치라이브’ 글로벌 출시 [팩플]",
        "date": "2026-03-28",
        "originalDate": "2026-03-27",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1qTU1BajA4WmdZcHlKeHlhVkFZa3Y2aXhSN3AzeUExOXZqMzNSM0ZXUHJ3Yk9ORWkwUzU4MGxhTVhibV9reDBPSDg0WlVJMmlsTmhLLTFR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 영화 'her' 현실로?…구글, AI 기반 음성검색 서비스 ‘서치라이브’ 글로벌 출시 [팩플] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "제미나이 3.1 플래시 라이브: 더욱 자연스럽고 신뢰할 수 있는 오디오 AI",
        "enTitle": "제미나이 3.1 플래시 라이브: 더욱 자연스럽고 신뢰할 수 있는 오디오 AI",
        "date": "2026-03-28",
        "originalDate": "2026-03-26",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPTHdBd2pBcUZFYzkxOHY3VFNob0lJVXU3NmV1X21kelc1VVp4WVAyRm9EclVBQTZRSnl5VjI5SWduY1JzMkYxY3BoQkUwTDh6T0taV1VFNWlPMExqVHRCWGNiY1h2cC16czd4M1NIbm5YbFhLdkwwWU1rZWc1blJXdUlMSGgtUQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 3.1 플래시 라이브: 더욱 자연스럽고 신뢰할 수 있는 오디오 AI 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "토지 개발 및 분석 플랫폼 '토지프로', AI 기반 신규 서비스 출시로 차세대 플랫폼 개척",
        "enTitle": "토지 개발 및 분석 플랫폼 '토지프로', AI 기반 신규 서비스 출시로 차세대 플랫폼 개척",
        "date": "2026-03-28",
        "originalDate": "2026-03-27",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFA3MVdub01iNnJqem9iSTByejlNMGIyVENBTlBwZk1NN0F0WDhTQ0dzbWdMWUgtaFpuMGc0UUtIY01FNW1LM0pDcXZidHJNZw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 토지 개발 및 분석 플랫폼 '토지프로', AI 기반 신규 서비스 출시로 차세대 플랫폼 개척 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
