/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "유럽을 위한 AI Works 소개",
        "enTitle": "Introducing AI Works for Europe",
        "date": "2026-03-17",
        "originalDate": "2026-03-16",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQbm9PMGdxWFkwQjN4SHp1b1ptTVpFLXY1WTBmZmpOdklvdmxZTmhLMUdiR0RTZXg3Y0JBUkFpdlBLeThmNTV3cjdyQVVzdnZoaFNESVp6aWR2Q0ZHdDBfM19KQTZKZmRkR3lDVExkV2JLQ29oMjlQbFIyX01UTnpJTTJqZTJrdUI4bU9YYTRLbXpEWXpuckN0Tm1VV0JLTnc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 유럽을 위한 AI Works 소개 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "시청: '인공지능 시대의 직업의 미래' 포럼/기사",
        "enTitle": "WATCH: 'Future of Work in the Age of AI' forum / Article",
        "date": "2026-03-17",
        "originalDate": "2026-03-16",
        "sourceName": "LSM.lv",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQVUhQNFEwRll6ekc2NWplRVltcktCeUl3dkxWRi1WM0tySEtMOFRvLTMzT0hXeE5PZGhGVzJPQ1E3STR1aHRvR2czUGJzM0JXMFFQWEhIc0N3TGRTOEdQM2FsTlZJNVhEUXRkaEo0emVZeE83RFMyZDNPYU1BSzBneFQ5UUNXWU9Vcnlfb0w4NkNfbThEN3JJQm84WEFwVGpzSGFVQ3Q5SHNReEstZ3c?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 시청: '인공지능 시대의 직업의 미래' 포럼/기사 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 빠르게 움직이고 있습니다. 사랑하는 일을 버려야 할까요?",
        "enTitle": "AI is moving fast. Should you ditch the job you love?",
        "date": "2026-03-17",
        "originalDate": "2026-03-15",
        "sourceName": "Vox",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9RZktrOHVJR1dSc3VfNHZsendiWlNnQVBUNTNaUnlVS25sYXVRS2hreVBFZm83RE5pQ0xlLTUwV1Y0UVZYRTZHX3BvNEVvZ0t0WmF3bkNrdkwtRUNsLUtBZkg2SkYyTUowS01PbjRKcWNxVi1lWUJGYWE4SkN0Zw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 빠르게 움직이고 있습니다. 사랑하는 일을 버려야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "응급실 대화 기반 AI 중증도 분류 모델 최초 개발…ChatGPT보다 정확",
        "enTitle": "응급실 대화 기반 AI 중증도 분류 모델 최초 개발…ChatGPT보다 정확",
        "date": "2026-03-17",
        "originalDate": "2026-03-16",
        "sourceName": "medicalworldnews.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBVdEVOQkNBMzgtRDN4VTlTMWxlZ3hPS1ZnclowUkJrbFpzLWhVRnRqUWhKUUFhVjFOWEg5eUFxd0dwVnVQRnZqb2NTSVRHT2VEUzdER2U3RGotQURXcGdIdm9WdzFvd0hsbnNqeDBkVkM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 응급실 대화 기반 AI 중증도 분류 모델 최초 개발…ChatGPT보다 정확 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "카카오, 행정안전부와 함께 ‘AI 국민비서 시범서비스’ 출시",
        "enTitle": "카카오, 행정안전부와 함께 ‘AI 국민비서 시범서비스’ 출시",
        "date": "2026-03-17",
        "originalDate": "2026-03-16",
        "sourceName": "kakaocorp.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5KNHZrdnFJMVZMX24tVTkwOTJrWEdwckxPeGNoNndnSTZQRHdha005WFgwb1Z3ZDJqRG9MWWMyMG9NbE9mdFRmbjA3QjlqT1NTMXY2a0xR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 카카오, 행정안전부와 함께 ‘AI 국민비서 시범서비스’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT로 제품 추천·비교까지···아모레퍼시픽, ‘AI First’ 전략 속도",
        "enTitle": "챗GPT로 제품 추천·비교까지···아모레퍼시픽, ‘AI First’ 전략 속도",
        "date": "2026-03-17",
        "originalDate": "2026-03-16",
        "sourceName": "시사저널e",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFBHTHJMZXF3QWVTME91MmhRT05IYkVRc0E1MDlxZmZWLTk2elBzOHVDa3BsRFk0bi1jcVpZUmx4Z1d4V2NEUG1YLTk3dnVzSzZ1b2N3bm1KSjNaMXdjaE1QVVB3UG1MNVJfbHUxZnBDMUhnUdIBdkFVX3lxTE9YSXIyWnliVUZXem5mQ3RJVXhiN21ranlEc1YwT0cwdGFXeXR0Mm5scGVvanlFVjJGVnR2T1RSUll1Nk54ejRHNXgtbVdheGZFQjN6RVhhUkdPc1lXcXFuR00xSDBwVVpVLUU5WFNYS3NBU0tKZHc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT로 제품 추천·비교까지···아모레퍼시픽, ‘AI First’ 전략 속도 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
