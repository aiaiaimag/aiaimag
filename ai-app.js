/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "경제학자들은 인공지능과 일자리 사이에 더 강력한 연결을 도출하고 있습니다.",
        "enTitle": "Economists Are Drawing Stronger Connections Between A.I. and Jobs",
        "date": "2026-04-04",
        "originalDate": "2026-04-03",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNaXh2dFhNVHlqNXV6MC11ck8xZHk4b0ZoNTByMXJhdzI1UGdtR25feXkwTU8taVQ1YWFWVXVHYW0wUzNMM1NYRVBsVmpURDdRdm40ZXc2ZjlQZUNUNFFYdkttb2NNclcxS1ZfMFpaYTNhSm8tUWRlaHZibEZwQ1QtYVdqME1HalNBcDU2cFFYd1U3LU1UQ2FtMHRFMDlFdmQxUzluSGl1eTE1QVN2?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 경제학자들은 인공지능과 일자리 사이에 더 강력한 연결을 도출하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI는 대체할 수 있는 것보다 더 많은 일자리를 재편할 것입니다.",
        "enTitle": "AI Will Reshape More Jobs Than It Replaces",
        "date": "2026-04-04",
        "originalDate": "2026-04-03",
        "sourceName": "Boston Consulting Group",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNeW56WnUtMU9qZzJrVktDLXJqTXB6eVdHWG0tbG9mb2tHZUpEQ2JfUHJqZW4tMXRxQjVqOWdNbmF5V1V5Qm9TNnZjOEdFTWNWQW44dmMwZzhENDlGODR4YWFYS2Jhd2FsZmN3SXlpMEZqemZPMUFFQTA3eGZnUEE4aWJQMFQwaXM?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 대체할 수 있는 것보다 더 많은 일자리를 재편할 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI와 ‘경험 기승’ 으로 인해 졸업생이 일자리를 구하기가 어려워지는 이유",
        "enTitle": "How AI and ‘experience creep’ are making it harder for new graduates to find jobs",
        "date": "2026-04-04",
        "originalDate": "2026-04-03",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1BVjVneEFqd3JGVTZVNE5zM0RmN1MyUmN2VDhWSFBkX2VuT1Jvbjd3VjRQWWVMQng0ZnRDMkM1R09HVUlfYm1mYWxSSjREVFJtWEJSR0RhRm1oSnNsNWJUZ1hxeUpFVGxHbHlxeG0zcHZEdy1Mb2xZ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 ‘경험 기승’ 으로 인해 졸업생이 일자리를 구하기가 어려워지는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "일레븐랩스, AI 음악 생성 앱 ‘일레븐뮤직’ 출시",
        "enTitle": "일레븐랩스, AI 음악 생성 앱 ‘일레븐뮤직’ 출시",
        "date": "2026-04-04",
        "originalDate": "2026-04-03",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5qLXl3Q25fcDRLdEdnX0F5MzF3ZXd3ZXM0WF9PTUNhZ19oWFRDOTFvem1sZkp2M1RfWHhZZE16R3p2ZTlkNWpPd1pvZ0VfUjVRMGctSjVtcmZSaE9vdTFRQ3loUVZuUGRUTGc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 일레븐랩스, AI 음악 생성 앱 ‘일레븐뮤직’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "씨이랩, AI 추론 운영 강화한 AstraGo2.1 출시… AI 서비스 안정적 운영 지원",
        "enTitle": "씨이랩, AI 추론 운영 강화한 AstraGo2.1 출시… AI 서비스 안정적 운영 지원",
        "date": "2026-04-04",
        "originalDate": "2026-04-03",
        "sourceName": "FA저널",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE8yUkhMSkF6UkxGVFFMVGE3U0VPbVJldlh2eWhaQUQ0NEtyZ1lvZUpVLThneXpzVVgxSW5QYlNTblYzZDVfNHBrRXpjVjJZN3lrUXZZSnA5SC1lSllhSWNrR1dvbXVyeGpqTTZR?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 씨이랩, AI 추론 운영 강화한 AstraGo2.1 출시… AI 서비스 안정적 운영 지원 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "제미나이 주사용자는 챗GPT에서 온 '이민자'",
        "enTitle": "제미나이 주사용자는 챗GPT에서 온 '이민자'",
        "date": "2026-04-04",
        "originalDate": "2026-04-03",
        "sourceName": "newstong.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxONVdzaDZjWHVFNm05dTFacnlDXzNVVEhmc2IzT1FtbnZ5TUdDNnVjSGZ2LUdHZlNNUkU0VFhsVzBHejZWVlNpU1pZMXBEVV84bUVHSVhtSGNqY0ptR3BBQ0tCYTBRTGFSeDE1Y0QtNHZRaTl0bWd1SzVCejZseXJKV0pOWExHLUZybUxyNFdrZzZ2dkhaT2tDcGhvNnVyQUNQRWk2Sk9tdktMVFBGaWFtampiUVB2WWpYV1lncg?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 주사용자는 챗GPT에서 온 '이민자' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
