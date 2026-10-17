/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능, 직업, 직업의 미래에 관한 5가지 신화",
        "enTitle": "5 myths about AI, jobs and the future of work",
        "date": "2026-10-17",
        "originalDate": "2026-10-16",
        "sourceName": "NTT Data",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPZXliX3hjTmF1eHI1SHJYaHp4U2NITnlmcElJU0x3R3hqRkdSUlRCTzBwSG1BU0dhN0dtc0tNQ1RBd2FmcmdSWW9UbDczR1UxbHJ1cWR4V21MUExReElrTWdXTFJsLUVZOXJxWmNUZ3MtQ1BoVTFsWTNKeVBnWmxVdjNNckY0STdYWkxmLVdiTmNFZw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능, 직업, 직업의 미래에 관한 5가지 신화 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "SAP 10월 7일: 88% 가 AI 직무 변경 보고, 절반은 안내받지 못함",
        "enTitle": "SAP Oct. 7: 88% Report AI Job Changes, Half Unguided",
        "date": "2026-10-17",
        "originalDate": "2026-10-16",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPSk45cFVsRTZsVHQ1QU4yOXA4OTZ4S3VlWDgycFd1YmFveVIxVWRSaGdtVy1YeFRUTjRBdWZtZzRDRGlMTEUyN00xX0ZTQXNGdkF6bzlhUWtXVTVWWDVfRF9SVXNHcWFlVmVCbUtzZkpERDBvT05MdGtmc0w0RDJNeTlfSTQ3YWZLa1J0RQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! SAP 10월 7일: 88% 가 AI 직무 변경 보고, 절반은 안내받지 못함 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI, 지저분한 직업, 그리고 학교 교육의 미래",
        "enTitle": "AI, messy jobs, and the future of schooling",
        "date": "2026-10-17",
        "originalDate": "2026-10-15",
        "sourceName": "The Thomas B. Fordham Institute",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQZU9yZGltQU5GSlFJNnpQMTdySGV1bzdTMW5INHZwT2REOC1EdHhZNExfdnF6OHRad2dCS3lvSmVGY0Z5dmZHd0I5XzNhY0ZMRE1Zd0R1THdzbUVkN0xjbGo2dHNaYmxzcEhTZGNmU2VvWkE3MHktRk9TMzRGQVhJWnpDekRlQ2ZPU3F3?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 지저분한 직업, 그리고 학교 교육의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이와 함께 성수에서 캠퍼스 라이프를 완성해보세요!",
        "enTitle": "제미나이와 함께 성수에서 캠퍼스 라이프를 완성해보세요!",
        "date": "2026-10-17",
        "originalDate": "2026-10-16",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQaEFGdUwzYk1IQVE3MWRINVRaOUJNLTF1S0x6RjdOZ1ZyS2l3ZWxOVjFxT0o0Q3lmT0k3ajNBY0I0RGdHZWhPRlhZbG5WVk1ZM2gzTmc0ZW5aY2tidzR4UUlHM05Xd00yZWRBVld5U2xzNTdBSlV3ZVhNWmw2VU51U3lSaVViTFpjeDZVdkEyZ0I?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이와 함께 성수에서 캠퍼스 라이프를 완성해보세요! 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[통신리뷰] KT, AI 매장음악 서비스 '래디오비즈' 출시(10월2주차)",
        "enTitle": "[통신리뷰] KT, AI 매장음악 서비스 '래디오비즈' 출시(10월2주차)",
        "date": "2026-10-17",
        "originalDate": "2026-10-16",
        "sourceName": "더구루",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9vWDRTSm5kZXV3NVJPWF9senZaYjc1Z0ZWUXE0Smc2ei1ITERPUk1DeWk0TFNDT2dpZHo2Szg2SWlybi1WQjJpdjdsdEVJVzJLdF9BaFJPcW5nd0h4TE5SYTA3SQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [통신리뷰] KT, AI 매장음악 서비스 '래디오비즈' 출시(10월2주차) 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "오픈AI, '챗GPT 보이스' 업데이트…구글, '제미나이 4 아르곤' 일반 공개",
        "enTitle": "오픈AI, '챗GPT 보이스' 업데이트…구글, '제미나이 4 아르곤' 일반 공개",
        "date": "2026-10-17",
        "originalDate": "2026-10-16",
        "sourceName": "굿모닝경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1uT3lTRHFhUnNfeWZhdlRzRlBPWXNOWU00OXA0blktODFfNm1ZMU5wME95YjRPTWgxRWJlTVpzejd5UU10ZjZqREtKd2o0dzY4WmNzN1BCbTZEWndQdjgzNTg2ZWRMSnFOQXJqWQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, '챗GPT 보이스' 업데이트…구글, '제미나이 4 아르곤' 일반 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
