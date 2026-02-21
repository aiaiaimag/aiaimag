/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "isTopPick": true,
        "koTitle": "사람들은 닷컴 붐을 좋아했다. AI 붐은? 전혀 그렇지 않다.",
        "enTitle": "People Loved the Dot-Com Boom. The A.I. Boom, Not So Much.",
        "date": "2026-02-21",
        "originalDate": "2026-02-21",
        "sourceName": "The New York Times",
        "sourceUrl": "https://www.nytimes.com/2026/02/21/technology/ai-public-opinion-dotcom.html",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "NYT가 여론조사 데이터를 근거로 '대중은 AI를 닷컴 붐만큼 흥분하지 않는다'는 충격적 결과를 보도했습니다. AI에 열광하는 소수 얼리어답터 vs. 불안해하는 다수 일반인의 간극을 수치로 증명한 겁니다. 이 갭이 커질수록 정치권이 움직이고, 규제 명분이 강해집니다. '나만 AI 싫어하는 거 아니었구나' 공감 폭발이 예상되며, 반AI 정서를 가진 팔로워들의 저장·공유율이 최상위권일 것으로 봅니다."
    },
    {
        "rank": 2,
        "koTitle": "오픈AI, 카메라 달린 AI 스마트 스피커 개발 중 — 조니 아이브 협업, 2027년 출시 예정",
        "enTitle": "OpenAI Is Building a Smart Speaker With a Camera",
        "date": "2026-02-21",
        "originalDate": "2026-02-19",
        "sourceName": "The Verge",
        "sourceUrl": "https://www.theverge.com/2026/2/19/openai-smart-speaker-camera-jony-ive",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "아이폰을 만든 조니 아이브 + AI의 제왕 오픈AI가 '거실에서 항상 켜진 카메라'를 만들겠다는 소식입니다. '편의냐 감시냐'라는 프라이버시 논쟁이 즉시 불붙습니다. 디자인 팬(조니 아이브), AI 팬(오픈AI), 프라이버시 우려 그룹이 동시에 충돌하는 희귀한 뉴스입니다. 세 집단이 동시에 공유하면 알고리즘이 폭발합니다."
    },
    {
        "rank": 3,
        "koTitle": "엔비디아 아닌 AI 주식 2종목, 2월 26일 이후 급등 예측",
        "enTitle": "Prediction: These 2 Artificial Intelligence (AI) Stocks Will Soar After Feb. 26 (Hint: Not Nvidia)",
        "date": "2026-02-21",
        "originalDate": "2026-02-20",
        "sourceName": "Nasdaq / The Motley Fool",
        "sourceUrl": "https://www.nasdaq.com/articles/prediction-these-2-artificial-intelligence-ai-stocks-will-soar-after-feb-26-hint-not",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "'엔비디아 아님'이라는 힌트 하나로 클릭율이 최소 3배 뜁니다. 2026년 들어 엔비디아 피로감이 쌓인 투자자들에게 '대안 AI 주식'은 꿈의 키워드입니다. 2월 26일이라는 구체적인 날짜 제시로 긴박감을 극대화했고, 지금부터 그날까지 매일 저장하고 다시 꺼내볼 기사입니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "category": "AI 부업",
        "rank": 1,
        "koTitle": "AI로 월급 외 수입 만들기 — 2030이 실제로 쓰는 방법 5가지",
        "viralRate": "99%",
        "analysis": "돈 얘기는 항상 1등입니다. 취준생은 스펙 쌓는 것보다 '지금 당장 수입' 이 급하고, 직장인은 인상보다 '추가 수입'에 더 민감합니다. AI 부업은 진입 장벽이 낮고 결과가 빠릅니다 — Notion 템플릿 판매, GPT 프롬프트 판매, AI 영상 편집 외주 등 실제 사례가 넘쳐납니다. '나도 할 수 있겠다'는 실행 욕구를 자극하는 콘텐츠는 저장율과 공유율이 동시에 터집니다."
    },
    {
        "category": "AI 취업",
        "rank": 2,
        "koTitle": "AI 면접관이 내 이력서를 먼저 본다 — 취준생이 몰랐던 채용 AI의 실체",
        "viralRate": "97%",
        "analysis": "카카오·네이버·삼성 등 대기업이 이미 AI 서류 스크리닝을 도입했습니다. 취준생 입장에서 이건 공포 + 필수 정보의 조합입니다. 'AI가 내 이력서를 어떻게 읽는가'를 아는 것만으로 합격률이 달라질 수 있다는 메시지는 절박한 공감을 만들어냅니다. 취준 커뮤니티(블라인드·에브리타임)에서 자발적으로 퍼지는 유형의 콘텐츠입니다."
    },
    {
        "category": "AI 관계",
        "rank": 3,
        "koTitle": "AI 친구·AI 연애 — 외로운 2030이 선택한 새로운 인간관계",
        "viralRate": "94%",
        "analysis": "Replika, Character.ai 사용자 급증 — 한국 2030 사이에서도 AI와 대화하는 것이 더 이상 '이상한 일'이 아닙니다. '진짜 친구보다 AI가 더 편하다'는 현실은 찬반 논쟁을 동시에 부릅니다. 공감파 + 비판파 + 호기심파가 모두 댓글을 달고 싶어지는 구조입니다. 사회적 고립감이 심화되는 현 시점에서 이 주제는 단순 기술 이슈가 아닌 세대 감성 이슈로 폭발합니다."
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
