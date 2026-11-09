/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "스콧 스타인버그가 들려주는 일의 미래",
        "enTitle": "Scott Steinberg on the Future of Work",
        "date": "2026-11-09",
        "originalDate": "2026-11-08",
        "sourceName": "https://www.futuristsspeakers.com/",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOMFRqRUpqU0FLVzNoSlB4aW14T2N5aTlESi1hcWV5cVc1cGI5VmtCZDJvWTNmVC1qWXdIRFh0X2pyT2NIdkhtOGFfVVlOSG53UWxwSmhlX3A4d1piMDEwNWw3Z3hZMzBaaXZLNm1tRnBhMF9hYUhQbW5mQ2J1WXZrZXAza2pvVWJ1Q3BN?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 스콧 스타인버그가 들려주는 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "남성은 여성이 기반을 잃음에 따라 AI를 가진 직업에서 더 많은 경력 발전을 봅니다.",
        "enTitle": "Men see more career advancement in jobs with AI, as women lose ground",
        "date": "2026-11-09",
        "originalDate": "2026-11-07",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNk5OVzNZenhsMVlXMHRod1RNSGlOTklPd1NPZjZiaFpYdGdBMWRWdUJ3c21sNEwwUWpEX21xMEdJQjV1bVhvNm1qXzZaNU5QazRUMGZoNmZCVy1BYkVONm53aUlXVm5jLWpHdjNSSHJiNmY1czZYMXRJZnY4TXVWRDdLSlZKSVBKTjItUWx0NFNOa19EUzg3WF9Zc0NMYkFpc2J6bGhpOEtsUy1pRG5XQW15aWU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 남성은 여성이 기반을 잃음에 따라 AI를 가진 직업에서 더 많은 경력 발전을 봅니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Microsoft AI Economy Institute 공개 통화 4: 글로벌 연구자를 위한 $ 75,000 연구 보조금 – AI, 일자리 및 업무의 미래 (2026–2027)",
        "enTitle": "Microsoft AI Economy Institute Open Call 4: $75,000 Research Grants for Global Researchers – AI, Jobs and the Future of Work (2026–2027)",
        "date": "2026-11-09",
        "originalDate": "2026-11-07",
        "sourceName": "Global South Opportunities",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBqRnZST092dVZMUXNhb05WQ2gyMktoSmU1djRlUElQa3o3V2pQV0hLU29XTDM2U3AzYnlUQmFWY1YwOEVRQXVBRUhOQkx5djl4T3FkazNIV0JCaXVWU2ViU29yXzVkM3FINXJQaw?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Microsoft AI Economy Institute 공개 통화 4: 글로벌 연구자를 위한 $ 75,000 연구 보조금 – AI, 일자리 및 업무의 미래 (2026–2027) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이는 탐색, 클로드는 검증이 강하다…AI 투자 활용법",
        "enTitle": "제미나이는 탐색, 클로드는 검증이 강하다…AI 투자 활용법",
        "date": "2026-11-09",
        "originalDate": "2026-11-08",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1DRGplcXRPRXhLZzFTZ0lOek9qYWN1X21MQmRhMl8zaDFINURKWDQxNDNMM29KTmRqcTdPRm9ZeFVwZTkwRWtvNklWbW1WU3Y5ZVN5cUlBZHd2UQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이는 탐색, 클로드는 검증이 강하다…AI 투자 활용법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI트렌드] \"1년 만에 15배 쑥\"… 챗GPT 독주 속 맹추격 시작한 대항마의 정체",
        "enTitle": "[AI트렌드] \"1년 만에 15배 쑥\"… 챗GPT 독주 속 맹추격 시작한 대항마의 정체",
        "date": "2026-11-09",
        "originalDate": "2026-11-08",
        "sourceName": "CBC뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5ITTZJbnREUFFMUXNacUo5d0dXNW81MUdnTU9NYW90OThSY0dCd0RnMXlwaEw5UkUyNTBrZE1KX2RIZnZPNlNtOVo0cFRveXZ4TlU5TF91TndYRUNPdVZiX3JSXzRvU2RO?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI트렌드] \"1년 만에 15배 쑥\"… 챗GPT 독주 속 맹추격 시작한 대항마의 정체 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "아마존, 앱 없이 문자로 쇼핑 끝낸다…AI '알렉사' 문자 쇼핑 서비스 출시",
        "enTitle": "아마존, 앱 없이 문자로 쇼핑 끝낸다…AI '알렉사' 문자 쇼핑 서비스 출시",
        "date": "2026-11-09",
        "originalDate": "2026-11-08",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE03UXRLeUFsalktX3c1NjhrSzZiTEd3N1E5Sm1TM2N1VnVMbTVyUGtuNVh4YmIyZFo0cjR5aVRzMEVJRWN1QjRoRmZ4R3V1MzNCTmpTVk9DSUFMZHBIczctQTQ0bldUYlNoUEE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 아마존, 앱 없이 문자로 쇼핑 끝낸다…AI '알렉사' 문자 쇼핑 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
