/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Anthropic은 기술 인재에 대한 급증하는 수요와 충돌하는 'AI 죽이는 직업' 에 대한 두려움으로 AI 엔지니어에게 연간 $ 320,000를 제공합니다.",
        "enTitle": "Anthropic offers $320,000 a year for AI engineers as 'AI killing jobs' fears clash with booming demand for tech talent",
        "date": "2026-04-17",
        "originalDate": "2026-04-16",
        "sourceName": "moneywise.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOSl93SGU5aVh1T3RQUm9HMlNsY2E0RTN0VTZMc29pRjhEYll0Qk5pTEhmR0NROVFNVHBmSmlRa1B4QlRTbGNKblR5ZU5pMmUtOVpPWV9vTk9GbnlHZ2p4RF9XNnlKR0hXdERBdlRkeVFoZUNXRE13UjBRVnpQMExpbXhlWTNHa3hTV29OMmlR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Anthropic은 기술 인재에 대한 급증하는 수요와 충돌하는 'AI 죽이는 직업' 에 대한 두려움으로 AI 엔지니어에게 연간 $ 320,000를 제공합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI와 일의 미래: 일자리 손실을 넘어선 심각한 위기",
        "enTitle": "AI and the future of work: A deep crisis beyond job loss",
        "date": "2026-04-17",
        "originalDate": "2026-04-16",
        "sourceName": "Devdiscourse",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPSzhlUW9Senp1SUhKNDQ1VG9Wb21iU1RWWUhpNEhvSVc2MWpxQ2ZSeE82RktjYXVrSlpwQUZYMG4wN1doVDVJTEJoTDFvNGZIQWJ3dVl2aC1palNjbWt5YmdScmo3NVRldW1yYzNDRGo4U24teUtQVHM3cmwwSXRLeTJmQ0V2c1VvcnJURlE5UUN0S2xaenhfSXVGMm9ZNWZCS2c4NXNwbmFPUXg0U3lhVdIBtgFBVV95cUxOUHMzQWxNRW9VLURKUmZuSWN5WVRRLWxhYjRQcXlEd0Znay16bXBJWWpkZ3p2aHUyUGlhWk1OUm0ydmFFTkVHZzNHOU10cklMY3NRM2NCd2JTTWkzVEpEa3N5bkRiWkgtcG9ETDc4bndoMU5oZjMwb1VtZ05FSEM4WWhtcm5wRW1aZk9YZFljZlJqNzh3cHhScVBMNDlRSWtocXAxbjdILWhjSXl4NVM1ajBqRmhOZw?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 일의 미래: 일자리 손실을 넘어선 심각한 위기 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직장 내 AI: 2025년 보고서 | 맥킨지",
        "enTitle": "AI in the workplace: A report for 2025 | McKinsey",
        "date": "2026-04-17",
        "originalDate": "2026-04-16",
        "sourceName": "McKinsey & Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직장 내 AI: 2025년 보고서 | 맥킨지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, '클로드 코드' 업데이트...\"바이브 코딩→에이전틱 코딩\"",
        "enTitle": "앤트로픽, '클로드 코드' 업데이트...\"바이브 코딩→에이전틱 코딩\"",
        "date": "2026-04-17",
        "originalDate": "2026-04-16",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE0tMXg5UDNzdnVBRzZRVFE0NWU5LS0yX3VrMUwtczh5a1pSLVhvQXRIRm1fZFVEaml3LXBYS1ItNEl6T0tHY2NHZFVPWE9Fb3NibVFjYzB1Y2JnZnYxMHpwSktvVWwyMFI1SXc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, '클로드 코드' 업데이트...\"바이브 코딩→에이전틱 코딩\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "enTitle": "이제 Mac 환경에서도 제미나이 앱을 만나보세요",
        "date": "2026-04-17",
        "originalDate": "2026-04-16",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOcW9xdjdiX1hrZHNlRXY1Q2FvZHRKTWU1OU5EWmtNUTRRSnhmbnN0bUVlbXNXZnNyNWFsa2JEdG9mbFpaSFNCR3Q1T0Z3bnRUdU5lcW0tTGJSQlBUODZQWlpySGJhaDI1UGVpc1E5eXgySHRQQXJSRFFzZTh6U25XMg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 이제 Mac 환경에서도 제미나이 앱을 만나보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "﻿클로드의 8% 가격으로 코딩한다고? ﻿[정원훈의 AI 트렌드]",
        "enTitle": "﻿클로드의 8% 가격으로 코딩한다고? ﻿[정원훈의 AI 트렌드]",
        "date": "2026-04-17",
        "originalDate": "2026-04-16",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1POExibU82bElPRk5xRHVRUUFFQUd6VXdHXzJxQ2VxUHZvV290dXJZcmJxamtIcnRPM3dMY01NQUhXeU0zazlrY0FKOXZaQ052WldHU0pvQXhIdG5qYmhSNFd4cFJnUGtCY1otLTNkN0LSAXRBVV95cUxOMTYtU2ktOUE0MmZfdktQemZvNVJyUWswX0dnTkwtOE9KZHIzMmhudng4UndhVEVjNXQ4TV9wRlg4a2VpcWRYTFlGYnA4QWE3cFFXeWRfY0VfNGxXS0Q0OUpmaWlEbEtDcG4zbkN6UTluWFRkcA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ﻿클로드의 8% 가격으로 코딩한다고? ﻿[정원훈의 AI 트렌드] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
