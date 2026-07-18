/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-19
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "11명의 CFO와 수석 재무 리더가 AI가 재무 커리어의 미래를 어떻게 재구성하고 있는지 공유합니다.",
        "enTitle": "11 CFOs and Senior Finance Leaders Share How AI Is Reshaping the Future of Finance Careers",
        "date": "2026-07-19",
        "originalDate": "2026-07-18",
        "sourceName": "ANI News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPRlVoYWxPaGdZeVctN2pQOUZmZ21YeGtJYU5RajM0S05LX0YyZWI0Q1JwVHpBOS0tUXBkQ3pnR1JZdUx2eFcxLWFILVVjZldIZHc4Z29QTlEzT0xSNXQxMTBlU2JpVEN0bXc3MTJnVFpLN1N6a3dnd1VjNG5wTENQTjJ6bGJDWXUyVHBOa2FNSmxfUjBMekM1aVBGSl9FRkxWa2tHRll0MlVHLUx3WV9iY0k0UXhKZUE5d29fYlNwQ3M5TGloMGpNTDBjSmQyZnE5Q2dRMDZrZU8?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 11명의 CFO와 수석 재무 리더가 AI가 재무 커리어의 미래를 어떻게 재구성하고 있는지 공유합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인력 동향, AI 및 경력 기술",
        "enTitle": "Workforce Trends, AI & Career Skills",
        "date": "2026-07-19",
        "originalDate": "2026-07-18",
        "sourceName": "PW",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQM00zcWY4a2R1NlU0eUpjTkRQRjhYVGx3YUU2NEZOSmRUdXBEQmw4T2ljWk96NGQwbXd1MHlXQXctZXo5LVJfcmRNaWlIMTZERVl2VENCOWlzdFg5NDE2V0lsT1B2N3dmX3R4WFZwTVZTUW1Vd2thUGVXVFBYRVJPTVBiYWc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인력 동향, AI 및 경력 기술 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 경제가 노동을 생계로 재고할 것을 요구하는 이유",
        "enTitle": "Why the AI economy demands we rethink work as livelihood",
        "date": "2026-07-19",
        "originalDate": "2026-07-17",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQSmJwVzdGR0xJWlJaQ0R3N2VxZUFwUkotR2pyMTVSbTAzQ3lRVERJRGE2YTVmV2NnYzhGVDJrTmR6ZnJOeVJyQ3g1bnNwLU1aS1JMM3o4SUJ6aTlidzRrTTBKdVZuYlE0enlFTTJvS29EZFdFM3dmemNtUkRnOHZTeDVVUXV5QQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 경제가 노동을 생계로 재고할 것을 요구하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "中 AI기업 문샷, 신모델 '키미 K3' 출시…\"클로드·GPT 추격\"",
        "enTitle": "中 AI기업 문샷, 신모델 '키미 K3' 출시…\"클로드·GPT 추격\"",
        "date": "2026-07-19",
        "originalDate": "2026-07-18",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBoN0wyckx4cUtNR21iQlM5T1VqYWlVbVNmN2ZmVGJLOVl3UnNFbkprN2JPY1Jia0g3a0JmWDdvMUpnYTQwSUxEbllTWk1NZ2FKNDZDbGhLS2t2emfSAWBBVV95cUxPbVJLSlQwTkFYNDRPUmZRMnZKZ3RzQ1p4VTQwblQ4enNyNmpGWHNlYndsRS1ETVY1aFktZE1valY4MHRQWVpqZ1hwWUFLNlBUbDNZZDlxN3Z1SmxZXzhRYjI?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 中 AI기업 문샷, 신모델 '키미 K3' 출시…\"클로드·GPT 추격\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "애플, 오픈AI 이직 前직원 40명에 경고장…AI 동맹, 소송전으로",
        "enTitle": "애플, 오픈AI 이직 前직원 40명에 경고장…AI 동맹, 소송전으로",
        "date": "2026-07-19",
        "originalDate": "2026-07-18",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5Cc2RGaXlqeGNFdkRvYUg5YlNnSTFyRld4ajhNSVIzNmdXd3ZHcXU0RHk5SWVRd1o5eXE3THZNLWEzYVFxZnNURGRFeW9IbzFFVHZ4dQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 애플, 오픈AI 이직 前직원 40명에 경고장…AI 동맹, 소송전으로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "애플, 오픈AI 이직한 전 직원 40명에 법적 경고 - 조선비즈",
        "enTitle": "애플, 오픈AI 이직한 전 직원 40명에 법적 경고 - 조선비즈",
        "date": "2026-07-19",
        "originalDate": "2026-07-18",
        "sourceName": "Chosunbiz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNaTUxeTYyVXY5TFl1SG1KUjFwZmd4ZVItRjhnWG02QXNSclRnTkFEdlk5Z2x6WG82aGQ0c0dsdkZtX3RGVnRYTmdBZ2xlMk55YmM3M3VVT3c2bmRLNHFJS3VXMEJJZnBNUkd0akVGSXkyTUtiMUh5ZXB1Y3U0R1RfNXBR0gGWAUFVX3lxTE5JVWRXVG0wcUMtZ25mYVlWOUpZNXBodGFVMXRsOHk1aExmV0tQSlI1dEtLNXlmZ3BidWY2UnBXVjRUek9fcm8xdVpyWHpqX2FTWU5McmtFZllhM1VRRHF0clFoRmZvODZIUUJaMktTb3NpWEFuNlMyX0M2dmtRTGcwaGRlYkF2c3FLREc1NkxmejVXNFd2Zw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 애플, 오픈AI 이직한 전 직원 40명에 법적 경고 - 조선비즈 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
