/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "하이브리드 AI-인간 노동력에서 누가 실제로 번창할 것인가?",
        "enTitle": "In the Hybrid A.I.-Human Work Force, Who Will Actually Thrive?",
        "date": "2026-06-11",
        "originalDate": "2026-06-10",
        "sourceName": "The New York Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTE1wbDB3RnJRcVhiN2VpaC1EWkkwcWswNk5iQmlLX0hUWkRIRzhVS3lVdHJ2RkdKUUNab05RQUx3ZWZfdzRUTmNWdkZ1T0RtaEwyZzlkNWJVMDV1T3JXcU5sVHRxSlBtanI0dFE2VVFoWTBXUWZsb21XVDFwbEU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 하이브리드 AI-인간 노동력에서 누가 실제로 번창할 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "에드먼드슨: 직업의 미래는 커리어 경로를 재구축하는 데 달려 있습니다.",
        "enTitle": "Edmondson: The future of work depends on rebuilding career pathways",
        "date": "2026-06-11",
        "originalDate": "2026-06-10",
        "sourceName": "ROI-NJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQdG9qd213QVA0b1FpMFRpNno1Z2NQYnJRVEgxWjd3OFY3ZEprZjFURkpFdldtM2NPeXB6Q3FWVS1vd2t2ZU1TVDhDUm91cWx3cm5sX0trVnc0MWl2U2xaRG44SWY3N0I5TDdXSnNISlZXNzBTV3lGSzJmSE83alE3SGZvcGpzamY4T2pjcWkzd0w1M25rOVltcmR0czFRRFVjUGJ1Wkl2WDhZUQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 에드먼드슨: 직업의 미래는 커리어 경로를 재구축하는 데 달려 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "경제학자들은 일과 AI의 미래에 무게를 두고 있습니다.",
        "enTitle": "Economists Weigh In on the Future of Work and AI",
        "date": "2026-06-11",
        "originalDate": "2026-06-10",
        "sourceName": "WSJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPWlR5TEhSQk9KRTFxVVlzUlN0SkcwbnE4TjRCWFFwcnVSMGRFcE5fRktVbjNyeVltRk04d1pwX0t5TnF0WVNGc0J0bWF0QVBPQWFVMUJ5eHM3MDlGOF9pZnFibWd6Zl92ZVFic3ZnLWN0eUFDTlFpaGoySG9TRzlKX21XdW1JYnJEbGxOTnRB?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 경제학자들은 일과 AI의 미래에 무게를 두고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, ‘클로드 페이블 5·미토스 5’ 공개…차세대 AI 모델 출시",
        "enTitle": "앤트로픽, ‘클로드 페이블 5·미토스 5’ 공개…차세대 AI 모델 출시",
        "date": "2026-06-11",
        "originalDate": "2026-06-10",
        "sourceName": "테크월드",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE0xRTFLdTUxUzlnc3NBc0lpMF9tampZWWlnSWJmQ3JOUm1vUE9WeVV4Sjk4WmFIUkExc2ExUm1oSXVTRGRYOFc0MEJDZDRMUnpieDhQY280SFlPTk1SOGxJWkp5bFFiMHFO?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, ‘클로드 페이블 5·미토스 5’ 공개…차세대 AI 모델 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "삼성전자, 12일부터 챗GPT·제미나이·클로드 사용 가능…AX 본격화",
        "enTitle": "삼성전자, 12일부터 챗GPT·제미나이·클로드 사용 가능…AX 본격화",
        "date": "2026-06-11",
        "originalDate": "2026-06-10",
        "sourceName": "뉴스1",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBVRC02NnlWSklXNDNNbHFJQ2JnRDZVcmJ4eXgtSlBmMmozRlVEMEVnZm1qYThzVjAtWmRaeVJJemUyYnhlUVE2TWdSTGtXV3NoMjFlTXZFQldta1lPVHJUY2FrcXQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성전자, 12일부터 챗GPT·제미나이·클로드 사용 가능…AX 본격화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽, AI 수익 공유 프레임워크 공개",
        "enTitle": "앤트로픽, AI 수익 공유 프레임워크 공개",
        "date": "2026-06-11",
        "originalDate": "2026-06-10",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE80MnpCUDh0c1RGMk4wdV9aS0xFazRLM3V1Y3RicU9wSkhpdmp3clNCeW9IRWoyYWlOcWt0ZTEtSnVFU0pEbTVhSFpSblZQRm41ZFExM2FuOHNCM2M0QWU3aE1PYkxzOWk0dHVvUUpqLUZzRzQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, AI 수익 공유 프레임워크 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
