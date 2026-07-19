/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "MIT AI 전문가는 Z세대 보급형 일자리를 자동화하면 역효과를 낼 수 있으며 기업의 미래 인력에 비용이 발생할 수 있다고 경고합니다.",
        "enTitle": "MIT AI expert warns automating Gen Z entry-level jobs could backfire—and cost companies their future workforce",
        "date": "2026-07-20",
        "originalDate": "2026-07-19",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNZXZVcWJtWFdJOHo1Q3FaUkhiNDhBclJpOXk4cG1CMVN4djBkRFlycUVtU1gydjhTLU41eExsWlRqT2hoSlFDYWRmOWRjR1pPUDhTTmVfVzVLTE9SSHhCRkZoZVR0a3dXSmpkdXJmRmJZZm1SS2U0eDN0SXNIblJDU19PYUQ3V1V0YVhfc1R0a014c3YxQ3RJV181ZnVYQnM3Vmo1dHZMRmFrdUZJVXF0V2pDbVFyXzN0N2dpQTUyUGEzYmdtWS1mb19MdHZSOEJVYko1UjVVX0M?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! MIT AI 전문가는 Z세대 보급형 일자리를 자동화하면 역효과를 낼 수 있으며 기업의 미래 인력에 비용이 발생할 수 있다고 경고합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 영향, 비용 상승으로 Z세대 커리어가 여러 소득 흐름으로 재편: 보고서",
        "enTitle": "AI impact, rising costs reshaping Gen Z careers towards multiple income streams: Report",
        "date": "2026-07-20",
        "originalDate": "2026-07-19",
        "sourceName": "EdexLive",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPbFI4WDRhZkY0bmhHblJ0bGE0OTBzQkltOHBST1Y4c1QzeVdIY29tMUNwbmpUT1dPMGRrbXB2Tkx1S1JkNXdkdU0xMHVJWDBQUlc0aHdmY2hOS1dfdl9EMHk5STJXZ1ZUckk2cUVEb2hZYXBORHBXZmhLOEtPTmxxbWhoRXF3ZElnWEZmLVJGVU81WktQcTN3WlByalZpeGR5OHFfZHB3MmhZeDJEc2UxRXp3VGFDZ9IBwwFBVV95cUxQTHRVRWtVMmo2eGVLcUhhQnZmLVQxODZ3ZEtvVUsyTkhYX1VkU2tmbFZldUlCNG01VWlWbmxMSmE1SklLaUVlTm05c3o2QXh6cmY4WHdjOTNod0pubjltbGNYZW9WN3VFdDIyMU8xZnlhZXBCNm5DZ0JXSVM5WG83WFQzdktWb25YWUM2MWF5ZGM1Vk03VW9HVVB1bUxNRFoyZ3h5SG1qcTdwRlpOQ2hHYzZvSzlNcWkzdEJmRFkybUlnenM?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 영향, 비용 상승으로 Z세대 커리어가 여러 소득 흐름으로 재편: 보고서 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "두 개의 트랙, 하나의 선택 - PwC의 2026 AI Jobs Barometer가 몰타에 의미하는 바",
        "enTitle": "Two tracks, one choice –What PwC's 2026 AI Jobs Barometer means for Malta",
        "date": "2026-07-20",
        "originalDate": "2026-07-19",
        "sourceName": "The Malta Independent Online",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPRzJzOUJweDNKUGJJTkNBb3pJQV84Z2NvM2FULVdnU0xseWR6eHYyc2I5c0FmV29ITUVYaVRoSVZtaE1iOTFHWmlaVTY4TDdaQnZadXFEZ213bkVlVEJLTzREMHM4VTdWYVZjN0FqOHlvTVlMZE9zMTRVYXZXMThTcW1LTWU3ZUdLRDhick1LdXZxcXdKTWszaTBSaFN2Nk52MmdDbU1yMF84Qi1rY3UtbGF6U0VOcElhT0hKS3NTYlBVdGZVaWtmYzN5ODZqcGozYW50X2JyUUJJd1Ja?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 두 개의 트랙, 하나의 선택 - PwC의 2026 AI Jobs Barometer가 몰타에 의미하는 바 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드, 챗GPT 꺾고 韓점유율 절반 넘었다",
        "enTitle": "클로드, 챗GPT 꺾고 韓점유율 절반 넘었다",
        "date": "2026-07-20",
        "originalDate": "2026-07-19",
        "sourceName": "한국경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFB6ekpkU0pNcENxeTBfMldlcHRkaXVIc1EydTMzc0FLOWh1cEtxdlh1MWQ1T2h6OWJWd2RzcDhxVXhOV1czcGRseU1zX2lzZEt0VzFXSm5SUkZOZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드, 챗GPT 꺾고 韓점유율 절반 넘었다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "“의사 고액연봉? 3년 남았다”…AI시대, 진짜 돈 버는 직업",
        "enTitle": "“의사 고액연봉? 3년 남았다”…AI시대, 진짜 돈 버는 직업",
        "date": "2026-07-20",
        "originalDate": "2026-07-19",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBGalpGRmJ6ZjZGOWhmdTRVeVFHUXVkMTByYm1Wc2V6V0VRQVhsb19qdzVoOFh3MzQ0LTE1V3h3VW5vTnlPa3JCc0dsSzdJRDJxZnFOSVZn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! “의사 고액연봉? 3년 남았다”…AI시대, 진짜 돈 버는 직업 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "DXE, AI 답변 속 브랜드 경쟁력 높이는 ‘GEO 컨설팅’ 서비스 출시",
        "enTitle": "DXE, AI 답변 속 브랜드 경쟁력 높이는 ‘GEO 컨설팅’ 서비스 출시",
        "date": "2026-07-20",
        "originalDate": "2026-07-19",
        "sourceName": "dt.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1aVEk3b0R3dE41czlnTkMxWGpGbE1NTmJqN3JkdWJHbVI1bVA1R3RzWnZiVDU5dURtcmExT2RibUVyOXBHcFJPemxWZUx3QQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! DXE, AI 답변 속 브랜드 경쟁력 높이는 ‘GEO 컨설팅’ 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
