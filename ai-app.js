/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ADP CEO: 일자리와 AI에 대한 진정한 대화는 다음에 올 일에 어떻게 대비해야 할까요?",
        "enTitle": "ADP CEO: the real conversation on jobs and AI is how do we prepare for what comes next?",
        "date": "2026-09-01",
        "originalDate": "2026-08-31",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQcHFMVmhxWGFrbVlRbDlJMkZuNjNNcFJ0WmFMNnAybU9sTTVXUE1GdkpVbzJEMFlDWEdHVU5EZXhsQ1pUX3kyNmVHTXRVZnZoUlVwQUR3bks1TElpSmRfd2pSSEZUY0poeTU1MFhvcU9ZcXY0eG1vYXdRZjRpVk5rOTN3Ti1XNF9qaTlJZkpIUXNLQXdpSWpaRFZOakRpcFJFLVpzdWV6ZFRRSUJINFUwSWFWdkVzTzgx?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! ADP CEO: 일자리와 AI에 대한 진정한 대화는 다음에 올 일에 어떻게 대비해야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "싱가포르는 AI가 일자리를 방해하기 전에 근로자들이 지원이 필요하다고 말합니다.",
        "enTitle": "Singapore Says Workers Need Support Before AI Disrupts Jobs",
        "date": "2026-09-01",
        "originalDate": "2026-08-31",
        "sourceName": "Migrant Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNbDJjWEdYbjJxc0VKcTRQaHdwSUhSRVRpNTA2RXExR3FmZWVkcEVoZjF2RVhSUFBhQVJiZVRBOFhyb1pxTDl3dzluUkp4b3laazhXNXBqVmNnWnB5SlRnQUo5Mzl3ZFJ4VDVxdlNrRlNTQmY0RUw4d3FDRFpLOEVFVG9WX0ZxeTd1YkMtNTNaZjhhdlZpd3FwdmVZMTMzLUhoWVdJQmUxOTVpNHZVZll5NThYalJEaUlWZVhrMlkxdFRxc1NFUGpuMU9NRVo0Zy1DRE5RYTVrSnl1UWc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 싱가포르는 AI가 일자리를 방해하기 전에 근로자들이 지원이 필요하다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "앞으로의 일터: 인공지능, 인재 그리고 일의 미래",
        "enTitle": "The workplace ahead: AI, talent and the future of work",
        "date": "2026-09-01",
        "originalDate": "2026-08-28",
        "sourceName": "The Business Journals",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPdTJRWjFNWlJUNHBHUGt3ZmgwMG1WbUNKU3BKdmN3aDY5MW1LSHp6MkV2U1RRZ2wwelRRMHBzSHE0SUZJbmxqa2Z6SEtQb01OU1gxTUV4aV96R2pGQjkyaEZKeTVtcHNMQ0xUOTBNd1FKdE1wbkJENG9fT0lVWFVhanJvTGRXN3NrRTkxNklURkx0LS02cWo4UkxmYw?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 앞으로의 일터: 인공지능, 인재 그리고 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "유럽연합(EU)은 ChatGPT를 포함한 미국 서비스 플랫폼 3곳에 대한 감시를 강화하고 있다.",
        "enTitle": "유럽연합(EU)은 ChatGPT를 포함한 미국 서비스 플랫폼 3곳에 대한 감시를 강화하고 있다.",
        "date": "2026-09-01",
        "originalDate": "2026-09-01",
        "sourceName": "Vietnam.vn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNWW1iNXl1YjN4WGVqM3RQTkVYaTNoRjdLbFhSeW4wLV8teW1QOWIxZjZZTWN0TkNuMy1uSzdBa2NwQ0dfNG83M0xMRjZPY1ZUcFJOM1hsdE9xcExMYzF4S1ZDZ3JJMThLUXVjc0xabkg3YzVodkE2elQwdVRoZkZMeHg0dnhqRnBuRFN5d2ZHVXJNUGM?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 유럽연합(EU)은 ChatGPT를 포함한 미국 서비스 플랫폼 3곳에 대한 감시를 강화하고 있다. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "AI로 벌었나? 머스크 덕에 벌었나? 빅테크 AI 수익 ‘착시 논란’",
        "enTitle": "AI로 벌었나? 머스크 덕에 벌었나? 빅테크 AI 수익 ‘착시 논란’",
        "date": "2026-09-01",
        "originalDate": "2026-08-31",
        "sourceName": "더스쿠프",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBZVTVraXROUkxzbzlEdVBGLVdleXRfbDdCZ1VjY21PRlBsUWpVRWZUN1lnX0dxUkp2cTd4d2s3YjZhUGRqSHlvZmpub0tOX0VOQW1TMG1UckQzRkU3M21HYUpBYmw0cjl4LTFyTWt3?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! AI로 벌었나? 머스크 덕에 벌었나? 빅테크 AI 수익 ‘착시 논란’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT도 클로드도 제미나이도… 왜 모두 ‘채팅창’일까?",
        "enTitle": "챗GPT도 클로드도 제미나이도… 왜 모두 ‘채팅창’일까?",
        "date": "2026-09-01",
        "originalDate": "2026-08-31",
        "sourceName": "디지털 인사이트 DIGITAL iNSIGHT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipwJBVV95cUxOVnc2YUlZYzRKVHlQSHBpX1AwSFpwUHFmWHBENHUyZF9XQXJ4YTR0cThtbnYwbjczMmo0dGxGcnFaOURuZzdwT09BMWdkLS1talRMNEFYT0dZSzRIWVZ3SU1LUkE5QksxLWhQUThZTGZDQjhqSHh3bmpQLWxmTlBzZkNyZVVXODA0WmZNU2ZpN0Z5OXVma3kzbUhENXJyMEtqNWRJYmhOOXJ0Y24wRzhRREdYb3pzemhBN0c0OTJXQUd4ZE9leE9JWUUzbUo4eXpELXh4bzBuQi1pSjM2dld3Qm9qTHpLbmtlZWVWbFJfUk4xTFZKTVhvSDFEa1ZaMExRaEdBQmxLb1g3WTlWSTlGTjVhdmZxMzA5MVZsTVE4X3RkOHA1d0xj?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT도 클로드도 제미나이도… 왜 모두 ‘채팅창’일까? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
