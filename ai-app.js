/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "실리콘 밸리 정리 해고가 고용 시장의 미래에 대해 숨기고 있는 것",
        "enTitle": "What Silicon Valley layoffs hide about the future of the job market",
        "date": "2026-05-02",
        "originalDate": "2026-05-01",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQMm1jSHNoQzVRN0QwUS1uRC1jWURJdDNiSFptaXhPTkNBREhpU2syRFBrTTVjTzVNLXctX2MzbDZkZHFMR3lndmxjQVU3WVZNNldEcWN2VE1tYnVmQy1PUHFoWU5aSGxLVmE5U0l1S3Ztd2JuUkhXeks0dU1rTnRocmNxeVprWjN5MDgxTg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 실리콘 밸리 정리 해고가 고용 시장의 미래에 대해 숨기고 있는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "MIT AI 전문가는 Z세대 보급형 일자리를 자동화하면 역효과를 낼 수 있으며 기업의 미래 인력에 비용이 발생할 수 있다고 경고합니다.",
        "enTitle": "MIT AI expert warns automating Gen Z entry-level jobs could backfire—and cost companies their future workforce",
        "date": "2026-05-02",
        "originalDate": "2026-05-01",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQZzU0bmYySGRvLU14VWQwdFlNV1RZMnlJR1E5VlYwcGxKaFV2Y0tDSnd3SzJZUURCMTdocG1KVmtScEFqT09HaGp6U1dDQjlTLXlfd0RFeVc0ZDFiaFNnR1UxOTM5aEQyWHluR2FNS2FDTm92X2tra1YyYWo4OXkwVEdXVnhDZV9tSUo0R1BSRUU1OFlHQlBycXNSeFY0dXJUbGNiMnQzemFNX0pVTXBCV3NlUTdxTlpBUWhDX2l0ZjhHY093UTJmS3d0cVlUbXpqcmhN?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! MIT AI 전문가는 Z세대 보급형 일자리를 자동화하면 역효과를 낼 수 있으며 기업의 미래 인력에 비용이 발생할 수 있다고 경고합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Tesla의 전 HR 책임자: AI 정리 해고 공황은 잘못된 전제를 기반으로 합니다. 대부분의 근로자가 알아야 할 사항입니다.",
        "enTitle": "Tesla's former HR chief: the AI layoff panic Is built on a false premise—here's what most workers need to know",
        "date": "2026-05-02",
        "originalDate": "2026-05-01",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPdmxod28zbjU4RnpsWmVSaG9LME82Yk1tSG4zLVlPRzVFYTRSSG1rVXNFZ0szNEM0dGhtSy05UTU0N2QxZmtHVllxRWNFdlhZeVowNFk2anFRYXdNRDdpNmRZMExLS2l3Q1JlYTBadVl0WG40Rmx4UXZkWGtJeXVpaU55ZGZtRDN2ajRFNHNud095Rlk2UjhIZDZadG9LdVpSNFE?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Tesla의 전 HR 책임자: AI 정리 해고 공황은 잘못된 전제를 기반으로 합니다. 대부분의 근로자가 알아야 할 사항입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글, 온디바이스 AI 실험 앱 'COSMO' 플레이 스토어 출시…제미나이 나노 탑재",
        "enTitle": "구글, 온디바이스 AI 실험 앱 'COSMO' 플레이 스토어 출시…제미나이 나노 탑재",
        "date": "2026-05-02",
        "originalDate": "2026-05-01",
        "sourceName": "브랜드경제신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQ0FVX3lxTE0yTUItZl9YRXhZRTFicnpacWsxcnRrU0NselV5OWdjVUtRUk41Mmc0NUFCOHJXbkR3aXpGY3p3YTdBVk0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 온디바이스 AI 실험 앱 'COSMO' 플레이 스토어 출시…제미나이 나노 탑재 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "구글, 22년 만에 '최고의 4월'...AI 수익 입증으로 주가 34% 급등",
        "enTitle": "구글, 22년 만에 '최고의 4월'...AI 수익 입증으로 주가 34% 급등",
        "date": "2026-05-02",
        "originalDate": "2026-05-01",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9acGZteThrby1zX3ZuVEplNWNvUzA2NUFBNXRfQkpnSGRKV0xNY0I4eGlWZTl1LXQ3MHBHTjRDaFRVZ19vNzRCdnRjMzRBcmZFampRWjQtTzFzT2NTd0NQclREMUNwSjNmbUE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 22년 만에 '최고의 4월'...AI 수익 입증으로 주가 34% 급등 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "머스크 “xAI도 오픈AI 모델 일부 활용”…오픈AI, 수익 압박 속 AI 증류 논란 확산",
        "enTitle": "머스크 “xAI도 오픈AI 모델 일부 활용”…오픈AI, 수익 압박 속 AI 증류 논란 확산",
        "date": "2026-05-02",
        "originalDate": "2026-05-01",
        "sourceName": "이코노미트리뷴",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE02X0pPMXRpY0ZLQWRUVnI3Nmw0ajU4U29ybE9RTk1iM0pOdXdHS2x0Slk1RTFkU1B3LVVJRGRJVnFSV0R5LUZ2ME5NLThfVzNRRU1qdV9TX3RkdzBoaXc4dm9UaUxCajFnRGFpYTVob1dxTnc4b2Nn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 머스크 “xAI도 오픈AI 모델 일부 활용”…오픈AI, 수익 압박 속 AI 증류 논란 확산 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
