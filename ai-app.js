/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT는 AI를 사용하여 수익을 창출하는 방법을 설명합니다.",
        "enTitle": "ChatGPT Explains How To Make Money Using AI",
        "date": "2026-03-03",
        "originalDate": "2026-03-02",
        "sourceName": "AOL.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPVVZtWTQtaWZTZUlJdnZmR0EzUmY0elROU0pNUVAtZlMyaE9aeGNjNE4xX2UyOGthYnhNbWYtaWs4b2hCZ3JocDYwVlpyZWRzYmw4ZVhfR3JnTm5YbnpIZUkzYm9OYlFBV0czZ1V0U04yNTdTTVV5Y18tZ2QxdkprXw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT는 AI를 사용하여 수익을 창출하는 방법을 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "미래의 AI 일자리는 저널리즘의 역할을 바꿉니다",
        "enTitle": "AI jobs of the future change roles in journalism",
        "date": "2026-03-03",
        "originalDate": "2026-03-02",
        "sourceName": "KGUN 9",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQRFBmejd0NE1LbzBfY3RQME00YWtCNnE3Y1BZQWVOckFrNmRaazR0eW9pS1k1X21Oc2ljR0swMHlaX2ctbFFteEN2R0ZDalNrVTRmVzNkY1BQUzNFckxZNllES1BfMWc3Z1RjdElaWjZFTzExd2NCLWxJUTExejBNTVpwdzhDdlRITHVaeXByQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 미래의 AI 일자리는 저널리즘의 역할을 바꿉니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "심각한 전기 기술자 부족은 AI 데이터 센터 붐에 대한 ‘생사가 걸린’ 위협이며 Z세대의 기회입니다.",
        "enTitle": "A dire electrician shortage is a ‘life-or-death’ threat to the AI data center boom—and an opportunity for Gen Z",
        "date": "2026-03-03",
        "originalDate": "2026-03-02",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQWGlZeElGcEplUXRfQWo0Z3d2dzBpMHVON0h5VTdHQndkWmV0Q0NBRWRrXzBidVQ5ZUpBY2NGUVMybGlDOTlZWmtTTHAyT096TGhLc2tMcE5ZYUpidHUwdVBGMXVWV1ZwcWxXQ0c0bXFFWHltTHVtcERNd0dZNWkwUFlTSEhpTHZpV3Rsb1pUR0lXdGdSN1E?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 심각한 전기 기술자 부족은 AI 데이터 센터 붐에 대한 ‘생사가 걸린’ 위협이며 Z세대의 기회입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영",
        "enTitle": "노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영",
        "date": "2026-03-03",
        "originalDate": "2026-02-27",
        "sourceName": "데브타임즈",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9aWnpkMGdoWjUyU0wtbVJaNThpUGRSeDJvUGFkQUN2dkhBVmtEOGdCUlJEMWtvbzNfcWhIR1BPR1dnM3dCeXlieTBoZko2emc?oc=5",
        "isRepublished": true,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 노원구 청년내일, ‘2026 채용트랜드&AI활용법’ 3월 커리어 기초 클래스 운영 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "enTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "date": "2026-03-03",
        "originalDate": "2026-02-26",
        "sourceName": "컨슈머타임스(Consumertimes)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9NeV9MWXhLNGNDQ1hiQzFLU1RDWEx4ejlfb1psbW5jZW1YU1VKNkJrSXd6UnBRSlZTZmJoWkFmVUh1bVBLTGhBYU8xUnJWamktRmF0RDJIb3RJLUxZcURkalpOWEQ0ejhlTFE?oc=5",
        "isRepublished": true,
        "viralRate": "89%",
        "analysis": "2030을 위한 AI 실무 팁! AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "AI 시대, '바른채용'이란 무엇인가...HR 전문가들 해법 나눠",
        "enTitle": "AI 시대, '바른채용'이란 무엇인가...HR 전문가들 해법 나눠",
        "date": "2026-03-03",
        "originalDate": "2026-02-26",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9OS2lsckNyX2dMWDlEQmFCTlgtOUhkRlg1X3hDSl9TNGhCXy1leklpcjNTQlJOVXV5Z2l6N2p4Y0RBZjhPLUs0T1dIZm83REw4bkpEbUJn?oc=5",
        "isRepublished": true,
        "viralRate": "87%",
        "analysis": "2030을 위한 AI 실무 팁! AI 시대, '바른채용'이란 무엇인가...HR 전문가들 해법 나눠 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
