/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ClickUp의 대량 해고가 업무의 미래에 대해 알려주는 것",
        "enTitle": "What ClickUp’s mass layoff tells us about the future of work",
        "date": "2026-05-26",
        "originalDate": "2026-05-25",
        "sourceName": "TechCrunch",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPcm5qSWNHRW1TU0tWOVowc0h1THgtQ01fUU84aVdyczBVbG5zWGE4Z25ka0luSHhJek9rNXAzNWFJZnFZa2FIVktxTnZvRzVBZF9NNk02Ml84bjRGVlhxR243Mi1Pc2Utb1BlRlZXNlk1WEppalR6UVZraksweWlUSjFoT2ZCYnJvVDRnOWxSRWhmSmFzZ01BUGd3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! ClickUp의 대량 해고가 업무의 미래에 대해 알려주는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 당신을 대신하지는 않지만 AI를 사용하는 사람이 당신을 대신할 수 있습니다.",
        "enTitle": "AI won’t replace you but someone using AI might",
        "date": "2026-05-26",
        "originalDate": "2026-05-25",
        "sourceName": "ScienceDaily",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1YWXByQTV0MlMxSTBRaFM4YmkwdzFQZXFuZm1aQXItU08xRmhfbDJuTHEwaTdMWWtwT2Nia0NHc1RscExmeXZzTC1XZlRIZXNzbTF0YjY1Y2E0UTN6MUY4SFdKUWNvZjRpck10ZUtxRQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 당신을 대신하지는 않지만 AI를 사용하는 사람이 당신을 대신할 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 일자리 손실에 대한 두려움이 커지는 가운데, 순다르 피차이는 ‘부 전략‘ 의 부상을 다룹니다.",
        "enTitle": "Amid growing fears of AI job losses, Sundar Pichai addresses the rise of the ‘boo strategy’",
        "date": "2026-05-26",
        "originalDate": "2026-05-25",
        "sourceName": "Firstpost",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOdXdRZHVpZEFNUGx4QmJBazhKVGVmc2VFNlYyQmUzc1diN0lyS0IwQ2RPR1VMUDFQbU5vNHIyM2kzZ1dyN2JDc3NOUWFlZm5lcW5SN0I0d0RYMU9BUmJ6Z2RNNFdMdjhfVEcyeE1OS29vbU0xZm9saEJBU1ozV1UtMk9DbXRsOHRNVUZHbmVKM19yX1ZDOUZUdHVKNkhmbThJalhoVElsWVhqTEVrSzE3cms0NEs0ZWFTdG1FamxTWjM2VWxUMDlJLVRJUmRVQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리 손실에 대한 두려움이 커지는 가운데, 순다르 피차이는 ‘부 전략‘ 의 부상을 다룹니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[주간 데이터동향] 챗GPT 독주 속 AI 앱 3강 구도...클로드 1년 새 12배 성장",
        "enTitle": "[주간 데이터동향] 챗GPT 독주 속 AI 앱 3강 구도...클로드 1년 새 12배 성장",
        "date": "2026-05-26",
        "originalDate": "2026-05-25",
        "sourceName": "반론보도닷컴",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5XODBaWDk4UDhuci1RMjBQVDBRQkV2SDBnazFMUW1Dei1PSzYwNWZ2dDVaTVAwN2lrYndINTJKY2FFbUlmU3Q1MjRnMEI1ODlIZ2ltaFUtWDhncHVPS3RZb2RTZEl4NFhLTjJLddIBcEFVX3lxTE90YWxySUVaSTh1emE4dENnYVREd0xkZzd1X3kxMlAzNmhQeC1fS2VQTjVSMDRaNG5meFBuU1ZfZ1hkQm9FMkZlaExRWG1WSEZORHdYYmZFd29VQUpiOG1BelFaaElHSkVIWEg1QldWUGI?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [주간 데이터동향] 챗GPT 독주 속 AI 앱 3강 구도...클로드 1년 새 12배 성장 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "삼성전자, 챗GPT·클로드 업무 활용 허용…6월12일부터",
        "enTitle": "삼성전자, 챗GPT·클로드 업무 활용 허용…6월12일부터",
        "date": "2026-05-26",
        "originalDate": "2026-05-25",
        "sourceName": "아이뉴스24",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1RVGFDNG9FLXJwa1JxU3BnZnNWZDF5dHktTU1oSWtyZmhLck53V2FoSWxNem9hYXMyUnZmcnZLUVYzbThZcHVYNUdTQUk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성전자, 챗GPT·클로드 업무 활용 허용…6월12일부터 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 시대… ‘고학력이 취업 유리’ 이젠 옛말",
        "enTitle": "AI 시대… ‘고학력이 취업 유리’ 이젠 옛말",
        "date": "2026-05-26",
        "originalDate": "2026-05-25",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQejYxSkFiNmVIUTdtRGRpYTI4UmtKU0ZadFJ3NkwtdGtTaEltZkRCcGJpV1ZocWNMNkl3cm1FMk1VY1YtbHpWSUlGVEV0RW1ERzlPZU1HMzhNaGxoSXFEVDVvOE5IaXdCeXQwRno2QW5SVV9TNVV6OEQtUXdGamtvbVNDbVpMbjVGRW80NWh3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! AI 시대… ‘고학력이 취업 유리’ 이젠 옛말 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
