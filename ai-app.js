/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "한국 야구 인공지능 동영상 트렌드: 이 인공지능 프롬프트를 사용하여 그러한 경기장 동영상을 만드십시오. Instagram은 이것으로 넘쳐납니다.",
        "enTitle": "Korean baseball AI video trend: Use THIS AI prompt to create such stadium videos; Instagram is flooded with this",
        "date": "2026-05-14",
        "originalDate": "2026-05-13",
        "sourceName": "Zee News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONlpWd0doVHBfWEFNaUFEdFRkdTF5UUN2UUtQc2NWS0h0RWwxMVZ1RHI3ME1YZ1dKak0yVldLN1ZZSlR0WHQybU94Vi1fX3lJUnRiMHNsMVJJRDhCNXIwbWd5RGYxdXlHSzdYQmlwRDExR0EtNFdSV0tGcEpNOGdSY2pCZWlmczZsLU9qRnkxVVpMQVhqM1BOZGxXWFJza0I0ZGtTMGNkX0s4SEV4Nm5BU3F4SEVRTzBfemU5aUxFbURlVGdFY2FjM3UycEs1ZFdIWXMtSUZaTGZMWVBYcVo1dnVoNkt5azU0a1hkaXFPZTlwZ9IB9wFBVV95cUxQbUItTmNnTGl3NFFVZGZfQS1sNERma21UQ0piejRkTEd0dk5FT05lUXZxWks0bDhKQzR4Q2ZhVTNDT0JnU3FybWVZby1hM0ZQbUpyNEdJT0NhMGVGc2NpYmFNdlBqQ3RCdjRMRTlaZ3lHN1B0NGxMRTFaMmVOTFF4bU5DMjVQUy1jcVBOMldNNWRrU3VudXFRYTV1X3A3VnRlZHhjQWxnUGlkR0pkMVdVWmVvcVcwbHpiUmowZE9YLVNuNE5JSTR1SC1LWU5seEZYQ1RMcFBPVDluQklWYjc2ZUozUHAxYWM2ZkptbnNGcGdXNlhMdFpV?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 한국 야구 인공지능 동영상 트렌드: 이 인공지능 프롬프트를 사용하여 그러한 경기장 동영상을 만드십시오. Instagram은 이것으로 넘쳐납니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT 한국 인공지능 야구 트렌드 사진 편집 프롬프트",
        "enTitle": "ChatGPT Photo Editing Prompts for Korean AI Baseball Trend",
        "date": "2026-05-14",
        "originalDate": "2026-05-13",
        "sourceName": "Jagran Josh",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPc3E1bjBYRXNSYXYxZXpmcDhWUVk0MUJ2cXpNRC1hbllRcVN6WXc0X3hfSGxEMGxMSEk0RVYxaDlDclpXN1A1MzJ3WDJvNzdHNy04UUJfdWQ3TUg5a0RmR1BrZDh0ZjhRS2RXLWdMWjMwOEo5aFA2ZE9UWmxLQ2JkWXExMVhrTmluQUM1dWJFRm5HYzlaLThQcDFuS2sxaDcyMWZpc1BscW0?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT 한국 인공지능 야구 트렌드 사진 편집 프롬프트 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일의 미래는 인간 + 인공지능",
        "enTitle": "The Future of Work is Human+AI",
        "date": "2026-05-14",
        "originalDate": "2026-05-13",
        "sourceName": "ARC Advisory Group",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9NMHBkczBGMVpLQ2hHMU1hUUFYamJ1MWlpTmhPNzV1cXhUOG5fM05FWFFVT3h5Z1l1NGVSMHdONDhLMUprWElCbWJWSERjRXZmN19ueGY3czFzd0U?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래는 인간 + 인공지능 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "서비스나우, 액션 패브릭 출시...외부 AI에이전트에도 플랫폼 공개",
        "enTitle": "서비스나우, 액션 패브릭 출시...외부 AI에이전트에도 플랫폼 공개",
        "date": "2026-05-14",
        "originalDate": "2026-05-13",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBscXgzZVo1NDhVWGpxRmtxT1lNTHhGQkE5QW0yZ0pfeUk5a0V0S0ljb1VuZnBqVTBjM2h5UjQ0S0RZSGhUZnBUemRZTi0yUmJaSFpXRjhYbVNKbVJLRHJEb0t3NzAyd0FKTms0Znp2UVp5Sm8?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 서비스나우, 액션 패브릭 출시...외부 AI에이전트에도 플랫폼 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "롯데칠성음료, 챗GPT에 '칠성몰' 전용 앱 출시…AI 커머스 전략 본격화",
        "enTitle": "롯데칠성음료, 챗GPT에 '칠성몰' 전용 앱 출시…AI 커머스 전략 본격화",
        "date": "2026-05-14",
        "originalDate": "2026-05-13",
        "sourceName": "뉴스웍스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1mWEdWYnhIUkN1QVpHRjBqUEdjelB1Tmo3VFpST2FhMGRRdEJOcndLTDR6dnJiVHVkbk4tTDF6TVlkOTlJZWpwYnFhZklhUERrNDZlUGlDdTN1WDh3cno4ZzhWSk5LdXVHbGJ3SmFlWdIBc0FVX3lxTE1pcjczOWswNndvcDZrbmR3YkhRRWdtRDA3Z0xBVnNObXRDd1d0LUVsQ1lFSWtSSUNNdUU3Q0I0UThpeDdYdU9FWDhzcDNPQXN3VmRXczlqQnAtTEVRS0NlV0VIa19ReEVNU0xVRVVMSjkyMDA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 롯데칠성음료, 챗GPT에 '칠성몰' 전용 앱 출시…AI 커머스 전략 본격화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "25화 클로드 코드로 필요한 7가지 툴 만들기",
        "enTitle": "25화 클로드 코드로 필요한 7가지 툴 만들기",
        "date": "2026-05-14",
        "originalDate": "2026-05-13",
        "sourceName": "브런치",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RX3lOR2tWMWhkeUpsLW9PTXR6b3A1enlmamZfbkpEdWFjejU0cGpabE41d29HZmllMElyMGVtbDJUaC1xQnYwclBCRTZ6UQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 25화 클로드 코드로 필요한 7가지 툴 만들기 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
