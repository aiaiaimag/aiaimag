/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-25
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI는 일자리를 대체하지 않을 것이며, 일자리를 근본적으로 변화시킬 것입니다. 연구 결과",
        "enTitle": "AI will not displace jobs, it will radically transform them, research finds",
        "date": "2026-05-25",
        "originalDate": "2026-05-24",
        "sourceName": "The Brighter Side of News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQUUFSd0d5bmNxOHNwcXFzX2dMZkJsVFQ3eUpBQ0xZVmVPVmE1anpZTERpcFBsbGZvZFV5SVRZQ0ZqVllUeEtEOU1pd2JNUFMwWkp5RFhGVW1JTmw3UTdIT05YdUxEMlZYRWYzVmZqSzRYb3VvZjBBRnhmNzA3NnZQTXlQbVVMTzg0aElEZTFwUDJBc3dJLWR6YmtKN3BCU2hIbHZvZklMeWV0VVkwYl85RENn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 일자리를 대체하지 않을 것이며, 일자리를 근본적으로 변화시킬 것입니다. 연구 결과 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직업을 AI로 증명하는 방법",
        "enTitle": "How to AI-proof your job",
        "date": "2026-05-25",
        "originalDate": "2026-05-22",
        "sourceName": "CNN",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5nSURWMnNQVHlsejZhV1ZvYmlwMUZDeTNMX3pERzdzUTVuZDVKUnVHUEVwU2FCdFZZNUluUEZBY2FMWEZhY1J5Rm1PT1BBQWVjR0RBcTBNb2ZaVllkNk9mWTBnT0dQQU1CZjlTYQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 직업을 AI로 증명하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다.",
        "enTitle": "Acrisure layoffs raise questions about AI and future of jobs",
        "date": "2026-05-25",
        "originalDate": "2026-05-22",
        "sourceName": "WWMT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPS3B5RDdFRlNzOW90aVNPcERoLVE0SnZTSHlhMENZcHROcFNDajdiZ0xHbWV0MTNCY2pIYnRNYXlndjM3X2VUcnlaWDllbmpodnk1OXNZRE9jeW1aOWRnYlNncDl0U2ptbEQ1a1lWRTQySzQ5SVlaeXBzeFFobGlBNXpFM1c3MHVUZDVtN1JGMDdGZ0RSbDByWXh6QzJ5QW1wN1BZVTZrQTFPVnJGNGhUbGxfR0p6STBKdWJOOHY2UGNKLXFPZkZqR2xGVQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "직원 10% 해고한 메타, 한 달새 앱 2개 출시…AI 활용 물량공세",
        "enTitle": "직원 10% 해고한 메타, 한 달새 앱 2개 출시…AI 활용 물량공세",
        "date": "2026-05-25",
        "originalDate": "2026-05-24",
        "sourceName": "한겨레",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1YbnR4bUdVZUhEMU1qU0Y3QktmRnlHZkVQcGtpbFRrcDJUam9NRGMta1RvZjAzMWJzOXo0eGpVMVBYMjA0eDFjUVpZb0Z6WWtHT3lLY0xoczVYYnB6b2dyeg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 직원 10% 해고한 메타, 한 달새 앱 2개 출시…AI 활용 물량공세 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "양향자 \"남성 청년도 HPV 무료 백신…AI·OTT 복지 지원\"",
        "enTitle": "양향자 \"남성 청년도 HPV 무료 백신…AI·OTT 복지 지원\"",
        "date": "2026-05-25",
        "originalDate": "2026-05-24",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5UUzlHM3ZpdjNVQXR1Q25lUmNBTHBBS1VqZ3lnNTEzRmp2UGtCWVp1ejd4TkRLNnVIUUV0ODBYbmY0LWJ5WGtCdmFvRVNVenJGSEFodWRFWmgzcjVkOEVmQdIBYEFVX3lxTE5UUzlHM3ZpdjNVQXR1Q25lUmNBTHBBS1VqZ3lnNTEzRmp2UGtCWVp1ejd4TkRLNnVIUUV0ODBYbmY0LWJ5WGtCdmFvRVNVenJGSEFodWRFWmgzcjVkOEVmQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 양향자 \"남성 청년도 HPV 무료 백신…AI·OTT 복지 지원\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[2026 테마캠퍼스] AI·첨단산업 전성시대, 대학 브랜드도 ‘취업 잘하는 대학’서 ‘AI 잘하는 대학’으로",
        "enTitle": "[2026 테마캠퍼스] AI·첨단산업 전성시대, 대학 브랜드도 ‘취업 잘하는 대학’서 ‘AI 잘하는 대학’으로",
        "date": "2026-05-25",
        "originalDate": "2026-05-24",
        "sourceName": "한국대학신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9lVHNjdndUdllQNVduSk03NHFEb1Y3clZWcU01clVkM0czaWlxV2hKMy10cVNGVkdydnBodXdTS0swZ2xqUm1NT1hBXzdaZENySVlmbmhqMnB2WVk5NEVoeURER2F1UQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [2026 테마캠퍼스] AI·첨단산업 전성시대, 대학 브랜드도 ‘취업 잘하는 대학’서 ‘AI 잘하는 대학’으로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
