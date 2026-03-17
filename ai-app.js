/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "OP-ED: 일의 미래",
        "enTitle": "OP-ED: The Future of Work",
        "date": "2026-03-18",
        "originalDate": "2026-03-17",
        "sourceName": "BlackPressUSA",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1vUkRVZUhoRFg4UFNIVEFYakh2N194SGR6aTF4cWlrVFNmMjM3VllzQTRVUXh1QnFwMEJFUzRBM053N3JCNnN6Xy1zYUNhb05DeWlVN1pPVVk3RzBlTklsbw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! OP-ED: 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능 (AI) 시대에 일의 미래를 위한 유럽 포럼이 리가에서 열립니다.",
        "enTitle": "European Forum on the Future of Work in the Age of AI Opens in Riga",
        "date": "2026-03-18",
        "originalDate": "2026-03-17",
        "sourceName": "The Baltic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUTRBTzJwaHMzNWxTQ3c3anFqYUFPdHIxTTVzN0Q0bHVRT01ra04xQlFpSGYxemJrbUFqS05QOEx0X1FvbHB5azNFTzZoaUl5c19IUmM5aThNVlZnTGs0UWNnZXFTRXIxaG1Hdi16dUwxaFhqblpoZ0NORU5WTXJMNnRKN2czU3YyRW1wZFd1ZkJSelh2bVdlNjRldG0?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 (AI) 시대에 일의 미래를 위한 유럽 포럼이 리가에서 열립니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능이 가장 위협하는 직업과 적응할 수 있는 사람 확인하기",
        "enTitle": "See which jobs are most threatened by AI and who may be able to adapt",
        "date": "2026-03-18",
        "originalDate": "2026-03-16",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQLW5fTVYyUm9aS2hCUXU4WGxvZXlkM1FibGRRTDFKZlJNOWJsdDlvMlBzNVRKSmtsXzEwVGFHS1k0VFNhQ0pDeS1zZ3BrcUdFYTFCNkdXVUhPY3FTNVJzZ2EyTVhPZUx3c3VOSkRGNzc1Q2oxOVR2NEFXWjRBbmZrcGVkZ0laQjl5bmFzUnYxNkx5a2ZaMzhj?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 가장 위협하는 직업과 적응할 수 있는 사람 확인하기 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI 요약 서비스 릴리스AI, 안드로이드 전용 앱 출시…유튜브 채널 구독 기능 추가",
        "enTitle": "AI 요약 서비스 릴리스AI, 안드로이드 전용 앱 출시…유튜브 채널 구독 기능 추가",
        "date": "2026-03-18",
        "originalDate": "2026-03-17",
        "sourceName": "플래텀(Platum)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFA3YmFCYWU1aldqS3pBVzltNEdYUThWNlNUeENTNFdETkp2ZmIxR0xFTW13Q1dzckNkaEVtcXFEX0hSVm5YZUczOA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 요약 서비스 릴리스AI, 안드로이드 전용 앱 출시…유튜브 채널 구독 기능 추가 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "네이버·카카오, ‘AI 에이전트’ 승부수…수익화는 ‘과제’",
        "enTitle": "네이버·카카오, ‘AI 에이전트’ 승부수…수익화는 ‘과제’",
        "date": "2026-03-18",
        "originalDate": "2026-03-17",
        "sourceName": "시사오늘",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFAxNld6Y1J4c1NSUEZ2YlpyNGZKbGJvZ0JOa3MzVzlXVEgyQVNPOHBWejFrV0VNa1ZLQUNmZ2VnTXFwNFEtQ3d6OUlFakhFcWhlMUJkR3hSX203eWtHTl91cEphaFJfb1c4b1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버·카카오, ‘AI 에이전트’ 승부수…수익화는 ‘과제’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "디지털융합교육원 최재용 원장, 물기업 재직자 대상 AI 트렌드 특강 진행",
        "enTitle": "디지털융합교육원 최재용 원장, 물기업 재직자 대상 AI 트렌드 특강 진행",
        "date": "2026-03-18",
        "originalDate": "2026-03-17",
        "sourceName": "파이낸스투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9kNE1tMXVybGZpVks0X0JuTHVOcUFlNVBXcjJRQ3o1VkNKakJuNDExR3hjclBKbkRXRUdlU1B2NlphZnhZX2dnZTVSQ2hkSWpoREE5V2hfZ0JDMDFBZW01NWNLd3llT2g0cmY0cg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 디지털융합교육원 최재용 원장, 물기업 재직자 대상 AI 트렌드 특강 진행 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
