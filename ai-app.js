/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "바이러스 성 AI 캐리커처 추세는 디지털 사기 위험에 대한 위험 신호를 제기합니다",
        "enTitle": "Viral AI Caricature Trend Raises Red Flags Over Digital Fraud Risks",
        "date": "2026-03-14",
        "originalDate": "2026-03-08",
        "sourceName": "Analytics Insight",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQTXlJaThneGc2QUFkNF93bzVZdWh6NFRPME93ekpQTVRkc1QwWEtXSUR0VmVkT19nWkdWN253ZThad1B1bVZWTDUxTmhXUzN1czZFQ1ZmRHZTVEkxZ3BjNVl2V19xM1pfMTd5T2htdzlPS2ppM2hkMXBIdHl6NzF2WXVQVFZ1UnJNaFlDUUx1Ym9jY2xKMC1NcllfZzdXQUUybm5FWWg0ZXrSAbYBQVVfeXFMT3g5VjhUU0JtRTNETVdlRGZfdW1PZWVEMXNnNDR0b29vSVZpYWFlYmZWZjVLWVFFQUVnQVMydU1uSm1PWFQ3aVJyLTRYc2V0Z3RjRmhQaEE2dmJHd1J3MGtwa2dZbkJMWV9BUVppOVlQWkdacEZUSVJuNEZTWERVc0FGODEzRXRCRV9KMWFtdzFueVJVOHRtZEZodUhXWVFTS01hS1VfS05SZzhVVThkSHV3STBaakE?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! 바이러스 성 AI 캐리커처 추세는 디지털 사기 위험에 대한 위험 신호를 제기합니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스",
        "enTitle": "OpenClaw: all the news about the trending AI agent",
        "date": "2026-03-14",
        "originalDate": "2026-03-07",
        "sourceName": "The Verge",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNU21qZE10LUlJT1lXNS1MbENLcGVzMWlhTjJMbkRwTVRlWWZyQzkxTWlhZUMwelM2NU5PX1h2MG12Zkxxc281LWFrcDZzRFFQbkh6dENseGZHYXdGUjloVmxSY1ZiYWg3djhnZVRCWEVkWS1kNHZ5VUhHT0pFejBuLURn?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! OpenClaw: 최신 AI 에이전트에 대한 모든 뉴스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능이 노동시장에 미치는 영향: 새로운 척도 및 초기 증거",
        "enTitle": "Labor market impacts of AI: A new measure and early evidence",
        "date": "2026-03-14",
        "originalDate": "2026-03-05",
        "sourceName": "Anthropic",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9KTkM5U1RQMnVZS29QR3BLTzQyOHJYSHFZY253LXd2RTNyZlNOZjdxMFB5ZkV4SVNJcGtaSkJIQkdma21jS0tvWWdGQ3BDZ1ZMQjFIU09Xb2FaUl9JSlcxY1lVazhUQQ?oc=5",
        "isRepublished": true,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 노동시장에 미치는 영향: 새로운 척도 및 초기 증거 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT, 국내 '추천 의향'에서 제미나이에 밀려...\"품질은 제미나이 앞서\"",
        "enTitle": "챗GPT, 국내 '추천 의향'에서 제미나이에 밀려...\"품질은 제미나이 앞서\"",
        "date": "2026-03-14",
        "originalDate": "2026-03-13",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE0zNGxhTEY4RllYZDdfZDF5X0lkNDUwcDg1TmdtdHVZUWhXSmVhaHRuRXlCSmhacTVmZ3B1d3B6c0R4RXVvQTB6cVlleENrWEdLYWVBcWN3allvM0tHakQtVWdwX0xaV3gyRVE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT, 국내 '추천 의향'에서 제미나이에 밀려...\"품질은 제미나이 앞서\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "K-뷰티 시장 검증, AI가 바꾼다… 트렌디어AI ‘트렌드 검증 AI’ 공개",
        "enTitle": "K-뷰티 시장 검증, AI가 바꾼다… 트렌디어AI ‘트렌드 검증 AI’ 공개",
        "date": "2026-03-14",
        "originalDate": "2026-03-13",
        "sourceName": "서울복지신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE0yOE1tdGI5Zlc3VFc2aTZWamJaR1BXX2x0Tm9hVVBqd3VVM0ktRGZFM2tSU3ZCZDhEMjZrb01meUZwLWtzbnpwM2p3SmwwT0NGN0IzMmMzdVBrUGk4X0RWeWRxeWlKQdIBaEFVX3lxTE4tR01zSGt3WTZhbGllVFB5OTZ4QU82bjhZYlJ2cVdJQS12dE00VW5fU19wUW1Bd3RESUhydHVtMDBEM0dkc2dVY2tkWGZub20tQkRHVGpfS181aEFvdzJ6WE9rUy1IVGNt?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! K-뷰티 시장 검증, AI가 바꾼다… 트렌디어AI ‘트렌드 검증 AI’ 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "아모레퍼시픽, 챗GPT 앱 ‘아모레몰’ 출시…AI 쇼핑 강화",
        "enTitle": "아모레퍼시픽, 챗GPT 앱 ‘아모레몰’ 출시…AI 쇼핑 강화",
        "date": "2026-03-14",
        "originalDate": "2026-03-13",
        "sourceName": "중소기업신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9hU0w3RGhPZVpOQnpoNTg4aHNUVTBDb2pSQjZlTDNIc3drTzhkS0czTF8wLVpmYnZhR1ZsRWh1bmo2VHlYV0JPU09XbG85Tjd2NldmWXZhRUVid2lHUWRtUmdOVW5WeW1NX21EMw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 아모레퍼시픽, 챗GPT 앱 ‘아모레몰’ 출시…AI 쇼핑 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
