/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI Jobs: 커리어 사다리의 누락된 가로대",
        "enTitle": "AI Jobs: The Missing Rung in the Career Ladder",
        "date": "2026-05-10",
        "originalDate": "2026-05-09",
        "sourceName": "techi.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1QR1otM2M5NEhRb0tRTFZhNHhXSTBqYl9FZE1teWo2a1NxVmh0cWMyaFBFaGh3RnBwMEh6Q1NRd2pLS29QQlpTX3VwUmh1dEsxcGR0c2pxVkpsb0Y1NEpFMUkwcU5yM3VHa0FYRzI4SQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI Jobs: 커리어 사다리의 누락된 가로대 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 생산성 플레이북: 유용한 팁과 도구",
        "enTitle": "The AI productivity playbook: tips and tools for you",
        "date": "2026-05-10",
        "originalDate": "2026-05-08",
        "sourceName": "Fast Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNOUg5dFRkbEZkMEhDeHEzVzN5a0FHUVBHQ2JFb0pTdnJpR0dFUXBkSTdIOFRLbE94a2x2c1B5ckViaUZSVE9mUHJ6NlA1TTNGT1NQZU9FYjhsYkh2NksyS0ZKRU9XVTNRN0RUQ0ZnX0UyOFRjWGlIX2ZxdkJ0eTNtaEVPdDBocWFXVzY3eHJJbXA2dw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 생산성 플레이북: 유용한 팁과 도구 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "MS Excel, PowerPoint, Word, Outlook에서 Claude AI를 사용하는 방법: 기능, 장점, 스마트 생산성 팁",
        "enTitle": "How to Use Claude AI in MS Excel, PowerPoint, Word, Outlook: Features, Benefits, Smart Productivity Tips",
        "date": "2026-05-10",
        "originalDate": "2026-05-08",
        "sourceName": "Gizbot",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNZEs5OU40ckpkSERDdVdjSzRMSkF6NHlpSldBdXRvVUh1QlYwaWJPZzg5d3UxbENUcThHYTRCU0ZRNXItVk93QlRIUGM5MjNNbU91cnd0aWxJeGZOMlpvSkhyakdKanNBbERCT001SXREWVdBRFo1clk1YjlXTGhYUGFfUVlMcVFMeHFRSUdWUUw4MDhPZDcyemRmZXZFd0h4dG05TDg2NkdkTjduTzNmSDJZc0R2MnFJdFU1VTBMNVpaRmNDZWplZUl0bnpaNGhqeDJheFJscEoxOTdJMFNtdkRpMGY?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! MS Excel, PowerPoint, Word, Outlook에서 Claude AI를 사용하는 방법: 기능, 장점, 스마트 생산성 팁 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앱이 없다고? 인공지능 챗GPT 폰 출시된다",
        "enTitle": "앱이 없다고? 인공지능 챗GPT 폰 출시된다",
        "date": "2026-05-10",
        "originalDate": "2026-05-09",
        "sourceName": "베타뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBmUDlXa3N2ZUVXa0RVOTNxVHduTHkyR1h0MmNIaGpST0hjWnRTMWdrZlY4WjJjcWF6WnNmLUhoOUdMd1BDY0R5Q3liVGZCeVhoLTNTcEtyMDdDZVVrMElGdmhkVnI?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 앱이 없다고? 인공지능 챗GPT 폰 출시된다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"카네이션 대신 AI\"...부모님 인생 2막 돕는 인공지능 교육",
        "enTitle": "\"카네이션 대신 AI\"...부모님 인생 2막 돕는 인공지능 교육",
        "date": "2026-05-10",
        "originalDate": "2026-05-09",
        "sourceName": "YTN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9LMThCVzVRU1F5QXR5ZFgyYk1DYzIwQU1kVUJNb1E0MVU0UUxiMUtnR1VGcEdEN3JTSWdTbUIwckpVN05yUGpwVDJCemhFQzVEVXVPbWFUeWNqbDBnZWc?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "2030을 위한 AI 실무 팁! \"카네이션 대신 AI\"...부모님 인생 2막 돕는 인공지능 교육 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI가 인건비 줄여도 수익률 낮은 이유…자동화 ROI 흔드는 숨은 비용",
        "enTitle": "AI가 인건비 줄여도 수익률 낮은 이유…자동화 ROI 흔드는 숨은 비용",
        "date": "2026-05-10",
        "originalDate": "2026-05-09",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE91NmQ5NFp3X25BTG96MUQ1Wk83ajh1OHhzemlKbjhsOUM0SEZGMnVOWW5Pci1NeW5kVVZMbkJSQTNiSld6Z1NEVy03YjA3U0VfUXdPa0dlMEtRdENpSHI2T2d5RnhEb0ZKRUNpUUJTU19rMjA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 인건비 줄여도 수익률 낮은 이유…자동화 ROI 흔드는 숨은 비용 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
