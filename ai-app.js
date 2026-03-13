/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "'승진하려면 우리가 하는 일을 해야 합니다': Accenture CEO는 AI를 사용하지 않으면 근로자에게 승진 또는 업무 비용이 발생한다고 말합니다.",
        "enTitle": "'If you want to get promoted, you've got to do the things that we do': Accenture CEO says failure to use AI will cost workers a promotion—or their job",
        "date": "2026-03-14",
        "originalDate": "2026-03-13",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPWExTTHl4R2xQUnN1YVF1V1lRaHZTWFdnOHRJVzJ3ek5TMHV0Zk91MmkzeFNGUTRqOGRPaGtTVDAwNlotZXptWXVJeHhVeWFfTnptNUxVdERZUVd1amZQY2w2SnY4NXhaSWNtSUxzUDJxYTBMdzdsYmlLbnBSdzgyZlVSN2VGV1hQU3NCZVY4X252ellFYUFJaHpFSUVxYVpDeDQwMGpDLU8tazg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! '승진하려면 우리가 하는 일을 해야 합니다': Accenture CEO는 AI를 사용하지 않으면 근로자에게 승진 또는 업무 비용이 발생한다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "TUS, 미들랜드 근로자가 경력을 미래에도 보장할 수 있도록 AI 플랫폼 출시",
        "enTitle": "TUS launches AI platform to help midlands workers future-proof their careers",
        "date": "2026-03-14",
        "originalDate": "2026-03-13",
        "sourceName": "businessplus.ie",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE54cVRxU3MxaFRLWFJ4SnFMQ3lvd0R4bG80UUM0Wm9uZW5ib2xISFlXbUxWNUhLaFpiRWM5aDhTOHJaTUE1RkJKODQ3emxGMU9HbXRfdk9Dc2YyNTRFNWE3Xw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! TUS, 미들랜드 근로자가 경력을 미래에도 보장할 수 있도록 AI 플랫폼 출시 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일의 미래가 도래했습니다: 당신의 직업은 미래에도 견딜 수 있습니까?",
        "enTitle": "The future of work has arrived: Is your job future-proof?",
        "date": "2026-03-14",
        "originalDate": "2026-03-12",
        "sourceName": "Bangkok Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNWnZLVmcycFlIT2pGdk5Bc1lzalRJYUFVTU1laEFhakN2NFQ4SlNyUnBDc3g2LURQR3lJdVBNUjVObkNUWG15OUN1c1FZUXZQcEtQbDl1TEx4N1ZzVDVfVHZaRW1IekRDVDlFVHNubU12Q2dTUjBPU2RZVkJLUkFtclh6RTFUQXdoUUFyVERhQ3lRT29XOVBINTdJT0RTQWdlNXJJQkQ2VWJPTGs?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래가 도래했습니다: 당신의 직업은 미래에도 견딜 수 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "🤖지난주 시장 반등 & 급등 종목을 맞힌 AI, 지금 주목하고있는 종목은?!",
        "enTitle": "🤖지난주 시장 반등 & 급등 종목을 맞힌 AI, 지금 주목하고있는 종목은?!",
        "date": "2026-03-14",
        "originalDate": "2026-03-13",
        "sourceName": "네이버 프리미엄콘텐츠",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQaEVzQlJRWDQ4Q3JaYTlWSUpxanFkV3dDLUhCdXpXQThLNlRsZWFrUmM3RGh2VGw5REVaQ1ZNdEJOWk0xaTNPaHFablRuRVFQOUZWVUJmNmpGWGxuZTBGUmRjNmItV0Jpa2tUWmNISnFtWFNBTVgzejg4aW1zdVhGa1VORE8?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 🤖지난주 시장 반등 & 급등 종목을 맞힌 AI, 지금 주목하고있는 종목은?! 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "AI와 진지한 대화도 가능... 뇌과학자가 알려주는 꿀팁 몇 가지",
        "enTitle": "AI와 진지한 대화도 가능... 뇌과학자가 알려주는 꿀팁 몇 가지",
        "date": "2026-03-14",
        "originalDate": "2026-03-12",
        "sourceName": "오마이스타",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE8tSzE3ZjRFQjdJb0cyTlN5anFMMUZSclJrbHdMbTk5UHZ6bUNLNXhCR005Tk5PcEdsMlBaM3l0NEE4bkZXRWdsaTFqc0ljcGg5dkxPbnk4cmFxajcxLURiZTJPd3NMdUV6N1BCTHg5eTdBSzlWeXJLQnhEbFJhdw?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! AI와 진지한 대화도 가능... 뇌과학자가 알려주는 꿀팁 몇 가지 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "플리퍼스, AI 매칭 플랫폼 ‘커리어브릿지’ 서비스 개시",
        "enTitle": "플리퍼스, AI 매칭 플랫폼 ‘커리어브릿지’ 서비스 개시",
        "date": "2026-03-14",
        "originalDate": "2026-03-12",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBETENFd0htMlBKRUFMY042QXJ6MlJKVW14aGgwRThIUG5tbE5UVDE1Vmt2ckFTTlZYNXZxYUZuREtNUkh4VWxrNTJTdDRyYXBnVV9QMHhRWWtGX3FoTWE2VWJvc3VaWjZHWGRTaHBGZG_SAXRBVV95cUxOUlA2bWJya3ZNQ3E4THBvOFk2cWw3Z0o4Z1FpeVJXNmpjMXJRa2p1bHA5anJLVGpKY1pXT3JVNzRRWDZjWklWRVdJNklWM1FuQWkxNEYtaG1YSmZtZnotb2pVZEdDX2YzQzB1LVBQQjJhV2M3aA?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "2030을 위한 AI 실무 팁! 플리퍼스, AI 매칭 플랫폼 ‘커리어브릿지’ 서비스 개시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
