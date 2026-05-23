/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI가 등장함에 따라 은행 업무의 미래가 어떻게 보이는지",
        "enTitle": "How the future of work in banking looks like as AI enters the scene",
        "date": "2026-05-24",
        "originalDate": "2026-05-23",
        "sourceName": "Daily Nation",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPMFpvT1ZzclNZSzI2cTFNel9wa3BFVk5UU0RmcFJ2QnhBSzNMcWdGbHAzczA1NU5FNEluOTZhOXRCVlo0ODU4RmMyRkJTNnF4OC00UUpJRzlVVXFIM1U5eUxibHNxUUhQU1NuVm5MQ1hIYTJ6RW0xWmhfNXFTc3U0WVlZQU00aDhHZXp0YnhHaDB6R0NoSnBuNFpQQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 등장함에 따라 은행 업무의 미래가 어떻게 보이는지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다.",
        "enTitle": "Acrisure layoffs raise questions about AI and future of jobs",
        "date": "2026-05-24",
        "originalDate": "2026-05-22",
        "sourceName": "WWMT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPS3B5RDdFRlNzOW90aVNPcERoLVE0SnZTSHlhMENZcHROcFNDajdiZ0xHbWV0MTNCY2pIYnRNYXlndjM3X2VUcnlaWDllbmpodnk1OXNZRE9jeW1aOWRnYlNncDl0U2ptbEQ1a1lWRTQySzQ5SVlaeXBzeFFobGlBNXpFM1c3MHVUZDVtN1JGMDdGZ0RSbDByWXh6QzJ5QW1wN1BZVTZrQTFPVnJGNGhUbGxfR0p6STBKdWJOOHY2UGNKLXFPZkZqR2xGVQ?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "랜드스태드 CEO가 들려주는 인공지능과 일의 미래",
        "enTitle": "Watch Randstad CEO on AI & Future of Work",
        "date": "2026-05-24",
        "originalDate": "2026-05-22",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOR1JUNllYQk4wY3Y3eU5OM3IxRS1ESmRnMHV1T1ZRVVM2ZjMwNHRWajJMcVRWUDBaLWRKeWFXRDJCWjFWTnl5OVNZanBXOHpFRXNwYWVEdV9Pb05sdGZtLWVlcjhVMFFlNm5FNjFobWp6Nnk4d3JvbnFjZDljRHNPVnNZcTNDM3djRnBBVEVMZWx6dw?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 랜드스태드 CEO가 들려주는 인공지능과 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "조혜련 “아들 우주, AI 탓 취업 안 돼 엄마카드 자르고‥” 근황 공개 (동치미)[어제TV]",
        "enTitle": "조혜련 “아들 우주, AI 탓 취업 안 돼 엄마카드 자르고‥” 근황 공개 (동치미)[어제TV]",
        "date": "2026-05-24",
        "originalDate": "2026-05-23",
        "sourceName": "newsen.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1CaVJGeThJNHo3NW9lSklSb3N1NkpwWUZORzAzdDA5dUc0enZaYTNrODZfVkd1WUI4VElZd3dWc25nM1RFNllKOFJSQ1UweFV5UGVMSGNtQlB2M2dLY0V1REd2M3BnUmRS?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 조혜련 “아들 우주, AI 탓 취업 안 돼 엄마카드 자르고‥” 근황 공개 (동치미)[어제TV] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타, 한달 새 앱 2개 기습 출시…\"AI로 수십개 개발\" 현실화하나",
        "enTitle": "메타, 한달 새 앱 2개 기습 출시…\"AI로 수십개 개발\" 현실화하나",
        "date": "2026-05-24",
        "originalDate": "2026-05-23",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE82NHFNTTdyN1ZiLTNyeklJOXVPX0o4SHJNQmpTcEZDa2ZsT1pRNlp0V08xaVFJWEh0YnVUU3JmVUtBNHJoTnEzclBaaGE1emNMbTB1LWV1X0psdjRTdUpHeHdJQWJSNXUzRlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, 한달 새 앱 2개 기습 출시…\"AI로 수십개 개발\" 현실화하나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[AI 이슈트렌드] 삼성전자 파업·스타벅스 '5·18 비하' 파문에 관심 집중",
        "enTitle": "[AI 이슈트렌드] 삼성전자 파업·스타벅스 '5·18 비하' 파문에 관심 집중",
        "date": "2026-05-24",
        "originalDate": "2026-05-23",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE05RmZCazVFNFV5WTZfTFBMUjBwZV9pcnM5aUJJVW1Zcmo3aVpIay1sQUFsbDJMWVZkMkRkZF9idGYycGR1alhNVXpzejd4NmtXMUliVmFTWEgxSUc3czdPRVlYam1lZFZBa3c?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈트렌드] 삼성전자 파업·스타벅스 '5·18 비하' 파문에 관심 집중 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
