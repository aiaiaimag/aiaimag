/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-27
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI와 커리어의 미래: 2030년을 위한 새로운 일자리 기회와 쌓아야 할 역량",
        "enTitle": "AI and the Future of Careers: Emerging Job Opportunities and Skills to Build for 2030",
        "date": "2026-11-27",
        "originalDate": "2026-11-26",
        "sourceName": "ETHRWorld.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQSFhNNkFJWW1HZjhzMUJRcEx4QTNTQzBfa2RyNVlsOEViQnZmT0pDVUJFTENMNDRTaDltc2VnanpsSGdVTlhZMzdwaFdpZ1EtaF9OaUh6c0dNTmZKaWo0TnNFNDlKUUZjRDlONzc2X1BKMEdpNnh4RzB6cXp2YmNHMmNYbmVZa2dxVEwxZE9WTGJ4UjQyQ2VKbDNYSnd3aTdNcGkyaG92cUFBcFlDZ2lqeTA1b2huX2pwcjNOWkl4Y1R5cGEwWC1WZFh5RHVyWG1CUVRUQ0ZB0gHbAUFVX3lxTE5CWlV6NnlMbGFxN2d1RzRkRFVHSmdjSUVsTm5EQi1iYkJFZV9MbjVzelJPM04zSGlzbzhfQzBHMWpoTVQ3anM1eU9JeXRIVTJTRktfY0IzQmhpY09LRUJOZ0M1YUZOUUpSQ0FPczViY0hwUDEyQkZNUmxDbGVmN3VUUG1DU3doVXhGVWpTajZNWHo5Z0E5X2E4a1dVUk1kQ2xOSkhJWDc4ZGxsRkN0MENkMVJmWWpPOExvenJsODI0YUEyaHo2aks0bXJreEJJb0ZtS3lMY0xGejYxaw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 커리어의 미래: 2030년을 위한 새로운 일자리 기회와 쌓아야 할 역량 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 새로운 일자리 혁명을 일으킬 수 있을까요? | 수닐 마투르가 말하는 일의 미래",
        "enTitle": "Can AI Create A New Jobs Revolution? | Sunil Mathur On The Future Of Work",
        "date": "2026-11-27",
        "originalDate": "2026-11-27",
        "sourceName": "Business Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNUWF4MXQzQm5mYnlOY0JEVzhmcWZGekllOS1IRnNrTHpMOEM2bGk4bE9kUVQwQ2hqLVB3emJsQldQQmtwTncyMmdSbll6RFJNbUZyTklmaDZUdWk4SWFyeTh2NlVidE92ZG5qSnlFamh5Y0FsRzFCNlFnYnl4c1U5NEIxTU9jOVIyYUU4dFE3T1Z0ZXY4ajBjQ0JMdFZVdXFWR29aSUY2TjZTcU8weXN4ZGRITGhheENBeUI1RlZJaEQwN0xtNF9FUGtzaVpsQ0M3M3ppWC1n0gHbAUFVX3lxTE1JbWJrSC1QaGhER29keDVGWWp0ZVE1YUljRFZYcjBGWkpZeE5FUFJyR3ZwdEgwWjdqWnJZVnR1TW1BdGtUNk9NZEdnYnNsU1VscDdCZEFhUkJackJtN1FTWUdGNXB4YThmUlQwT2EtekhRcUNRb0xMcHhXVUFHQlhqdlRZdDUydGI5bTZYam52dGVzcERkSzRkSTIxVm1NQzZkOHhwb1JKbW43VnNSalFCXzRHaWxiQnNkNHhOcVdwS2pvNERTOGVpNnBLNlQ4eWx0TWdJVlhVSzZlMA?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 새로운 일자리 혁명을 일으킬 수 있을까요? | 수닐 마투르가 말하는 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 어디에나 있지만, 생산성 향상은 어디에 있나요?",
        "enTitle": "AI Is Everywhere, but Where Are the Productivity Gains?",
        "date": "2026-11-27",
        "originalDate": "2026-11-25",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNMUJYNEJDc2tPMDRSR2hkdmpxT2tNeW9WOERtR01BN3poaVpfa2dha2xwZk95RkF4bGZsMTNkaGRHNXBhT2MwQTFPb2dqQzNZVnVuV09Fcy0yMUxNYndLV2s5RDQ5cF9jeW44cmFiZllyRFJ2VV96SXJzQ2k1eWQ0ZWFn?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 어디에나 있지만, 생산성 향상은 어디에 있나요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "‘말로 신약 만드는 시대’?… 챗GPT·클로드, 바이오 영역까지 삼키나",
        "enTitle": "‘말로 신약 만드는 시대’?… 챗GPT·클로드, 바이오 영역까지 삼키나",
        "date": "2026-11-27",
        "originalDate": "2026-11-26",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOME1tVHd5ekszZ2dtNUE1MnRqVXBsbVlrY2NZZHgxWlRpNTlyT2RDYXdlMU8welpXek5aR3cxZFM1aTFiOVRPNGI4bGlTX1pXTzR4NDN6ZmVuc0NReFo0RGNRWTQ2UE1YUFlqcVJNNmxGSDlOZktnYUcxbW90Vjd5T2Q1VQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ‘말로 신약 만드는 시대’?… 챗GPT·클로드, 바이오 영역까지 삼키나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "같은 정책도 AI마다 판단 제각각…GPT·클로드는 성과, 딥시크는 민주성 중시",
        "enTitle": "같은 정책도 AI마다 판단 제각각…GPT·클로드는 성과, 딥시크는 민주성 중시",
        "date": "2026-11-27",
        "originalDate": "2026-11-27",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE8xemlXb0xfTWxxX2syWjdQY05ZajRiNjM3ZXdIMlhNd0xUZzFISFI2ZEVlMkdJckk0Mm5XQW96TFhwZnVwWG15ZzYtbnhvaWRTSjhyS3lId29CeVdRRmFXek1TY2V5ZUFsMWc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 같은 정책도 AI마다 판단 제각각…GPT·클로드는 성과, 딥시크는 민주성 중시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "네이버·카카오, AI 시대 ‘UGC 주도권’ 쟁탈전… 창작자 확보·수익 다각화 총력",
        "enTitle": "네이버·카카오, AI 시대 ‘UGC 주도권’ 쟁탈전… 창작자 확보·수익 다각화 총력",
        "date": "2026-11-27",
        "originalDate": "2026-11-26",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOTXlieTRCSWROcDdSRk4yakJXb1hHZE5VSERZR0dKTUpsb3JOYzE1aGJETHAzSEZKQ195c3ZoTHUzYVEtakVPeXg4M3QxRnE1allwbTBPb3JwZnNlVmotbk44MEdRYmVKNS1rbGMwVDhxczBLNkRhT0dOblo4Y2V3ckJpRQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버·카카오, AI 시대 ‘UGC 주도권’ 쟁탈전… 창작자 확보·수익 다각화 총력 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
