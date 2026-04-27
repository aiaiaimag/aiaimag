/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능이 당신의 미래 커리어를 결정할까요?",
        "enTitle": "Should AI decide your future career?",
        "date": "2026-04-28",
        "originalDate": "2026-04-27",
        "sourceName": "ndsmcobserver.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPS1hzMXkwRWRTTzdNVnpocUcwc09ldThxM3dCaDNhaHlQbG5RakV2U3NHa3JCUFJRem5fd2E5THZYQXp5LW1mVzg4cnRUR1dmZ01peDM3Zk03T011MjBkZ0ttel94dXdyaHl6TnBRQXdSRVUxcVZQR19QSWd2eGlOMFFpRlZ2THBp?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 당신의 미래 커리어를 결정할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능과 일의 미래",
        "enTitle": "Artificial intelligence and the future of work",
        "date": "2026-04-28",
        "originalDate": "2026-04-27",
        "sourceName": "Meer | English edition",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOclRxeUdTa1hwREo2NFNNYTJIc1VjbkZ2cXFtNmNJYkFOMi1Pa2N5UlRZMHdGUWhfeWJMSHduUEpGTHJWNFpXUkRPOFFJRUVPXzBXTTc3djdsX0JWTHJFN21zMUpxTW1mRElmUmdGd195T0poRFUyWlY5UUN4ODZFU2NUOA?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능과 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "넷플릭스 공동 창업자 리드 헤이스팅스 (Reed Hastings) 는 인공지능 (AI) 이 일자리를 재구성함에 따라 STEM이 '과도하게 끝났다' 고 말하며,",
        "enTitle": "Netflix Co-Founder Reed Hastings Says STEM Is 'Overdone' As AI Reshapes Jobs, Urges Shift To Emotional In",
        "date": "2026-04-28",
        "originalDate": "2026-04-27",
        "sourceName": "Benzinga",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiigJBVV95cUxNaFRteVdCejN3R0RmVzk1UXQ2VnpDWGNFb3RSazM1QU9nQjN6cE5YUVN3WGlOQlh1Zm1uUHpiUWxydGp4WW5UQVJoZk1jNTFoN3ZKcXFvdkJUeF9yMjlYRmwyaEtueFdyVS0tYXFicTZjN2F5bUxldzhkWTNqRkQ5bkNUT3R6Y04tTVkwaXBneEc4RXc5UEZnN09kZVBTOUJFaWFBSjM0b3FDakE2OWU4RzRXNXFSUDRSVDMxQzJSTFZRN04wVzcyM0JjSkdvMENFTzFJWlR4Q1laUVpmdVpSQVdsaWl5dVN6XzNKOTdMTXZ2VERKeDA1RUlMRXM5YkV2WHd6eGsxY3RaZw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 넷플릭스 공동 창업자 리드 헤이스팅스 (Reed Hastings) 는 인공지능 (AI) 이 일자리를 재구성함에 따라 STEM이 '과도하게 끝났다' 고 말하며, 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "enTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "date": "2026-04-28",
        "originalDate": "2026-04-27",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOcW9xdjdiX1hrZHNlRXY1Q2FvZHRKTWU1OU5EWmtNUTRRSnhmbnN0bUVlbXNXZnNyNWFsa2JEdG9mbFpaSFNCR3Q1T0Z3bnRUdU5lcW0tTGJSQlBUODZQWlpySGJhaDI1UGVpc1E5eXgySHRQQXJSRFFzZTh6U25XMg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 이제 Mac 환경에서도 제미나이 앱을 만나보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT vs Claude, 같은 질문에도 비용이 다른 이유: ‘토큰 산출 격차’의 비밀 | 인사이트리포트 | 삼성SDS",
        "enTitle": "ChatGPT vs Claude, 같은 질문에도 비용이 다른 이유: ‘토큰 산출 격차’의 비밀 | 인사이트리포트 | 삼성SDS",
        "date": "2026-04-28",
        "originalDate": "2026-04-27",
        "sourceName": "Samsung SDS",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPRXltMkQ5bFhZY3Q5ZWxOVC15QXBfQmEtYlV2ZGtTaHVKbmFEd0prRTMwc0xhZXdoc0h3T1l5T0FLUmdQM1REU1lzaEU3SU9oOHI1Y3c1cnc0QVFjMGJtbjVqbDBoY0J2Z1RTTjlUQUNLQkFkUlBSVWd0MS1NaVliUUEzQnhfSDBXOTAyLWNhcDF3ZlZCbFpPWDhR?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT vs Claude, 같은 질문에도 비용이 다른 이유: ‘토큰 산출 격차’의 비밀 | 인사이트리포트 | 삼성SDS 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[AI 트렌드] “직함보다 ‘무엇을 할 수 있느냐’”…AI가 뒤흔드는 채용의 룰",
        "enTitle": "[AI 트렌드] “직함보다 ‘무엇을 할 수 있느냐’”…AI가 뒤흔드는 채용의 룰",
        "date": "2026-04-28",
        "originalDate": "2026-04-27",
        "sourceName": "AI라이프경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE45NldMT0lXNlJRd1IyN3NjTDdCa3NqRXgxVS11WUdSM0k2Z2wwbF8zbndVT1UyUC1kTFpoU0FUQ09CVmtYRW5mUG1EM194dHBoM1ktTVNSYnhPUTRvcXlkbUZ1Nmhib0c4ajB2ZtIBb0FVX3lxTE5yLTRFNFk4UUFrcU0zMHRVUmVGNk01OS10TDk2TEVtRjZ0a3QxSHhWQ3BpZ0JqU3VlYzRFcnVXcjJMaF9aYldUVUlWMnc2NFpubWx6d3U0QURUR0F1N0poWGJtclNMYlBnZkhHU0FlQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 트렌드] “직함보다 ‘무엇을 할 수 있느냐’”…AI가 뒤흔드는 채용의 룰 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
