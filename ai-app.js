/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "생산성 도구에 대해 알아볼 블로그 게시물 97개",
        "enTitle": "97 Blog Posts To Learn About Productivity Tools",
        "date": "2026-06-13",
        "originalDate": "2026-06-12",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBMVmpxeGRiai1jZkFCOFAzZWhFZTB4dUpCWk5IZmNyazN5dlR4NUt6RlRoMUs1Ykx3WVBzU3ZveElUdkZJSG94amFQX09EanVRN256RUIyNmdrY1hEMTI5UEtTRVhoMUVySDctRS1vaks4Si1sU1F4bmRR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 생산성 도구에 대해 알아볼 블로그 게시물 97개 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Walmart는 210만 명의 직원에게 다음과 같은 메시지를 전합니다. AI는 당신의 일을 개선할 것입니다.",
        "enTitle": "Walmart has a message for its 2.1 million workers: AI is going to improve your job, not take it",
        "date": "2026-06-13",
        "originalDate": "2026-06-12",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNdEhXQ0tIbXBtRnhBRktZUEozZGh4ZnB2VzhSRFBFdEdCVHVQbzZfLXMyMFFULU9KQ3Qzczg4OXFQNWhta2pXX3VCSW1Tc1gtNmZRRTJidWg4cDBKbnRXSjN1VjlCOURnSjZJQnczMDAtd3hDWm9kUWoydVhkcnFjYTIyTGFsbFRNY2xyUW9rLTFabnREWDUzdXNfLTdhcHBWWlE1RlR6eW1KUG1zczV2Y1FVWEo5bHlMa3c?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Walmart는 210만 명의 직원에게 다음과 같은 메시지를 전합니다. AI는 당신의 일을 개선할 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "기업가가 AI를 사용하여 일자리의 미래를 바꿀 수 있는 방법",
        "enTitle": "How entrepreneurs can change the future of jobs using AI",
        "date": "2026-06-13",
        "originalDate": "2026-06-11",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQTmFYcHNJcUFDbUQ0ZXdGZHJCZ1JqOTEwRmZiQWtVaHdfRVppRXQwbEJfQVdUaHRkR1lTWmYySEhOVHNWVTk4MlBLSklBWkJOMFZlV3dXTG9nei0taFFlUFB5bW4yMGczR1BxSS1QWmg2R2taTm90d0duUVdTenczYV9kNjlsVmhsZXU1eWhHbnY?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 기업가가 AI를 사용하여 일자리의 미래를 바꿀 수 있는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤스로픽의 클로드, 제미나이 제치고 한국 AI 앱 시장 2위 등극",
        "enTitle": "앤스로픽의 클로드, 제미나이 제치고 한국 AI 앱 시장 2위 등극",
        "date": "2026-06-13",
        "originalDate": "2026-06-12",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPRnBtaUg3aDcwaXNYeGZWdEpibE10UVZXenUyUmJsSG9aSURqSUVpdC1NWFdBSHdlaHdTa0ZYVURISDJkeHZPa2F1Ykx6SVdLWjBGUHh0OWRaWVVrNlBFMG1HeURqV1hZWVhFNEk3elU2elp5MkhMbEZfbTgzOHZnNU5DMA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤스로픽의 클로드, 제미나이 제치고 한국 AI 앱 시장 2위 등극 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "캐시우드 \"반도체 분할매수 추천\" 조정 당연…AI 트렌드 수년간 지속",
        "enTitle": "캐시우드 \"반도체 분할매수 추천\" 조정 당연…AI 트렌드 수년간 지속",
        "date": "2026-06-13",
        "originalDate": "2026-06-12",
        "sourceName": "중소기업신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9vQTlDX21yRW52Qjd6dllPSUY0cTZ3QjU3S2Myc1dsUXFzd1lCSWlZVzAta21ZZnJnSDZaUDFVQXo1dHJBQklCLU9Qc2Y3VVZWOEtlWFczVjBEeWNqblVpSVV6M3p1SlYxcmhySmVR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 캐시우드 \"반도체 분할매수 추천\" 조정 당연…AI 트렌드 수년간 지속 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "제미나이 밀어낸 '클로드'…국내 AI 시장 2위 격변, 비결은?",
        "enTitle": "제미나이 밀어낸 '클로드'…국내 AI 시장 2위 격변, 비결은?",
        "date": "2026-06-13",
        "originalDate": "2026-06-12",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE81WEFHVHpHQV9qWG5PWnNtWTVGY05sUWNiZ3M4RHhydDBBYXV2c00wTEdqVV9GY0tHaEZkYzY5N0htQ1NxSXVIaENNMk85c1hhb2Ywdi13?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 밀어낸 '클로드'…국내 AI 시장 2위 격변, 비결은? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
