/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "SkillsVerse 창립자 Peter Bassey가 AI, 일자리 및 아프리카의 미래에 대한 교훈을 공유합니다 AMNC 2026 이후",
        "enTitle": "SkillsVerse Founder Peter Bassey shares lessons on AI, jobs and Africa’s future After AMNC 2026",
        "date": "2026-07-11",
        "originalDate": "2026-07-10",
        "sourceName": "Vanguard News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQYzJmNEV0UlFiX1M4RkhVc3QxS2twbkZ1b0dLbUNMX20zemRNdTR1UGdVRHNEZ0ZLTHlVRTgxMmMxWjdXeXRsSEZia2NiSEtiWXcyUjltNWdoZENScVlQcV9CZjIwYkhjRzJrYlRENHRIUVZmeFV3d1Q0Uzg2RUxldWNfOXNQMzh0bWRzbENzTWhUMndfRmd3bGRIZW5mbWIzZDlUZjlOUzNwbnpSOGpiV0lENXdwZThWTXk5N2ZuS2JoRDFQY0NRb3FR0gHPAUFVX3lxTE5QUkl1REVrb3JYUWlGb09IOEtsc0xSUUJBMTJQY2xmN0o5NDh5SmEtX2NzNmFNNmlESHVhelFVTGpKNlh3Z3BKTXdJTGhtRGtySW5oU2I5SWllVy1iTFpJNy1OUVZvdEpfbHZ4TlhiM25jaUFsWGttSmNLbkEtNU83OUlmWDBDVlBocHlvOEkyWTZDOGwycGItWDNPTXRPMmdmTFBOQ2dSc096YVZLMWQwUnA2US1BTUdrRVB5a0Ewdk9tUDljaVNQWnNKRC1OSQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! SkillsVerse 창립자 Peter Bassey가 AI, 일자리 및 아프리카의 미래에 대한 교훈을 공유합니다 AMNC 2026 이후 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 시대에 경영 경력의 미래",
        "enTitle": "Future of management careers in the era of AI",
        "date": "2026-07-11",
        "originalDate": "2026-07-10",
        "sourceName": "The Hans India",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQeWNmNl9CSHFOanpaZFU4cW5FU0NGNUhjX0VBQ0FfOV9sRXRUSHJmaHoyc2dSWTU1QVdHWGkzdjk2d2VQaktMclR0WmlDR3BheEtadXBrdGlaRkkyU1dPSFpsNzRfQ3RxOXRyQmpLc0pkYXJWanI0akN6SzFOWV8xX3Y4T3hQN25XdWJMZVd5dkdyeV84WWhYb3NHcElzb3E1R3VKdkVncDd3c29udkHSAbMBQVVfeXFMT3dZdkI2MHV2anFEeGdOOU51X0tJYXR5dVhOeGN5WW5SMlZ2NWJybXpnOG9mdVRWM2F0a1hfYVZPWVo0blQ3bExIYjJKTGdhSzB1ZG5nQWhFTHJjZ3V0U1BnRC1uYTdDdFhQWGR3N0JqaWdmZTBmYzdtcmgtMnhlMW51am5NLXN1ZTYtVVlRd2d3R1dNZW9UR1NKcllTR3RBUWR5U2JXd1BLdFNDMXdFWnVlSVk?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 경영 경력의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "ChatGPT 캐리커처 트렌드 프라이버시 위험: 사용자가 알아야 할 사항",
        "enTitle": "ChatGPT caricature trend privacy risks: What users must know",
        "date": "2026-07-11",
        "originalDate": "2026-07-09",
        "sourceName": "Bitdefender",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNOE1HYUFNVnF3bkZFYVRxSzhRbEVibEhLek5xMmJqeS1IdGlmNWpQTW9OU0tMbkgzU0FwTHhOMDd2ZmtRcFdUQXA2YmpCX0w1VGh4NGhILURod0VMYjVCbndnZngyc0ZVTVY0OG5KZFNaOVVUY3lYS3Q0dEJkYUpQNllROWE3QQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT 캐리커처 트렌드 프라이버시 위험: 사용자가 알아야 할 사항 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "1인 빌더, 클로드 코드로 프로젝트 9개 동시 운영한 방법",
        "enTitle": "1인 빌더, 클로드 코드로 프로젝트 9개 동시 운영한 방법",
        "date": "2026-07-11",
        "originalDate": "2026-07-10",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBXbE5BZlRGME1UNDVKX3NSLVFXTURUM3MwcnU2eFB6YXFyUnBQN3Z1T0hET0tOM05TamZKZG1hYmIxenhOanZ6ZjJQUmQyQWhuS2l4bDNSTEY5UQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 1인 빌더, 클로드 코드로 프로젝트 9개 동시 운영한 방법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "“질문만 받던 AI는 끝났다”…몇 시간짜리 업무 맡는 ‘ChatGPT Work’ 공개",
        "enTitle": "“질문만 받던 AI는 끝났다”…몇 시간짜리 업무 맡는 ‘ChatGPT Work’ 공개",
        "date": "2026-07-11",
        "originalDate": "2026-07-10",
        "sourceName": "뉴스탭",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBzREJSU2xXWDQ5UFJVYkRqRHd1SGd1dGpENnVZNjE1MUR0bjZDVnBUbXJ0bEk1dHpwbzZSa1BNNnd0M19ubWpOSWdmVHhKWXhzOFhreWk1d0pkb1lpcDAzVnJUSDBmTkdhRGh2RA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “질문만 받던 AI는 끝났다”…몇 시간짜리 업무 맡는 ‘ChatGPT Work’ 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI, 5060이 쓰기엔 어렵다고? “부업 대박났다” 57세의 꿀팁",
        "enTitle": "AI, 5060이 쓰기엔 어렵다고? “부업 대박났다” 57세의 꿀팁",
        "date": "2026-07-11",
        "originalDate": "2026-07-10",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFA4R2FBU1NFbkI3WUNxTEk2bURrNmZiTUpLUTRPQ1IyTmxudkxGOUQ0dF9sdHU2NGJtX094YVRqTTFQR2RWSExITGlXVExLaVJGU2E3ZlRB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI, 5060이 쓰기엔 어렵다고? “부업 대박났다” 57세의 꿀팁 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
