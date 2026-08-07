/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이",
        "enTitle": "Join us on 8-21-26 for “Hacking Productivity with AI” – Super Cyber Friday",
        "date": "2026-08-08",
        "originalDate": "2026-08-06",
        "sourceName": "CISO Series",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNYm9fSjlEdG9KVzJDcExtUWE4RENHVmJOdXhJaE5zY3hWSnFhekoxeGZYci1rVUxYTDFpX2JGY3ZTOTV1ckV4QUJIZVBlUzh4RGhYT1N2NEotU1haT1ExdlV0eE5Pa0RKY3EyS3N0SE9kX0FqQkVDMHRtamwyS29TQjdwX21lN2Q3cUlSLXptRjhlMUg3Q0oxSW1B?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "세 명의 AI 개척자가 일자리, 규제, AI의 미래를 놓고 충돌합니다.",
        "enTitle": "Three AI Pioneers Clash Over Jobs, Regulation And The Future Of AI",
        "date": "2026-08-08",
        "originalDate": "2026-08-06",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOcnR4QkVrUnFuczNyOUIzUl8tdUhhTVJQM0piQnlYZTlpQkxrTWRlV0d1Q1RuOUx0ZEtab2R4WXNCZm5pMkw5WS0wOG8wX0tfQkR5WHpzZkZXOTlSSHFZckV1bkRNOHRiSkktMkNhTzBMMnl3UHRlZFNSWUt4ZS1CZUE0U1YwaG5meVZueXZR?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 세 명의 AI 개척자가 일자리, 규제, AI의 미래를 놓고 충돌합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 작업 손실에 대한 전문가의 상위 20개 이상의 예측",
        "enTitle": "Top 20+ Predictions from Experts on AI Job Loss",
        "date": "2026-08-08",
        "originalDate": "2026-07-27",
        "sourceName": "AIMultiple",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE1LckFPekg2eWZXd2JuN19Bam5tNWV2WmtqOWVTbDJFT0lMNF9MSVpQUjZzZkkwaEJrZ0lmaHhYZ3FZRFVUcTJuVWx3?oc=5",
        "isRepublished": true,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! AI 작업 손실에 대한 전문가의 상위 20개 이상의 예측 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드가 10분 만에 사내망 해킹...\"99%가 뚫린다\"",
        "enTitle": "클로드가 10분 만에 사내망 해킹...\"99%가 뚫린다\"",
        "date": "2026-08-08",
        "originalDate": "2026-08-07",
        "sourceName": "YTN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5sTm5sQ0M0THlicTY3WGFKeDh2VzY2ZEx3V0lNRGczaGxvVzRVbEU1ajhZSFgyTUtLdUkyM0M1VFBDT3h3SDZpYWk2QVRqYTRQaVdPRDZ2QVZuWmxRdTZVS012RHVvNmZWc016eGdWVHlDMDNYYmc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드가 10분 만에 사내망 해킹...\"99%가 뚫린다\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "구글 공동창업자 '브린' 경영일선 복귀…제미나이 수익화 집중",
        "enTitle": "구글 공동창업자 '브린' 경영일선 복귀…제미나이 수익화 집중",
        "date": "2026-08-08",
        "originalDate": "2026-08-07",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE56eFNpajdpa3dGWWtBekRISFF0UGNXaVY5YjZRZkpDNTRtdEQwRlF3NmZqMkZCWVdyR3VzaWRkOV9fN0FHYzlXMGpScXBpWXc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 공동창업자 '브린' 경영일선 복귀…제미나이 수익화 집중 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "매출은 역대 최대 이익은 제자리… 네이버 ‘AI 수익화’ 시험대",
        "enTitle": "매출은 역대 최대 이익은 제자리… 네이버 ‘AI 수익화’ 시험대",
        "date": "2026-08-08",
        "originalDate": "2026-08-07",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBuZHdBb1FNME9RbUNFb2Y0NEE2T1VfZ3lJaDZ3aVA4QWlqVUFqTHZkTlVBQ2dKa0N6RmY3bDBjaUs5SXYtMTJUcDFnaVl1M3U4M3F6YkZhYWV6ZnEtRVNuNXhtV3BUa1llMGlwUnlyZzTSAXRBVV95cUxNQTg2aXVVeFdpcEFVRjYwU2hQUWlxOWhqY2plbmFNbWtOTVprS2VESzl6TEZ4dkZDcTlFMkRvdkxySEdQa2FBNnFGaW5nakMtcGRqcTExUDdPZFBaWTVHTExSUjQ3SU1lYk1WQWFZbEJacmZzNA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 매출은 역대 최대 이익은 제자리… 네이버 ‘AI 수익화’ 시험대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
