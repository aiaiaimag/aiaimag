/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-29
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 수익 창출 도구",
        "enTitle": "AI Monetization Tools",
        "date": "2026-05-29",
        "originalDate": "2026-05-28",
        "sourceName": "Trend Hunter",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9vXzZpOW5RQXVrODlVY0FndzFEZ0UwZjg1ajBGMXNKNm0wODh5M0lhWU90NUtGQ0JKQkIwWDRoeTFtM0Y4anZET01Ob05sTHducXNEV21sTmIyQmVQ0gFcQVVfeXFMT29fNmk5blFBdWs4OVVjQWd3MURnRTBmODVqMEYxc0o2bTA4OHkzSWFZT3Q1S0ZDQkpCQjBYNGh5MW0zRjhqdkRPTU5vTmxMd25xc0RXbWxOYjJCZVA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 수익 창출 도구 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 채용 정보 열기",
        "enTitle": "Open AI Jobs",
        "date": "2026-05-29",
        "originalDate": "2026-05-28",
        "sourceName": "Blockchain Council",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9fVjVGbVNXZnhuU1loQ1dRREZZZXBCc2Z3UEppUDU1QzUzU2JNelFReVRSZnhWMnRBcGx4clVNRW1zeDJGZnNvanFMb3c0R3BzTzhYLWM0MXVxV0ZvVXlIV19iVVRQSDZsUjZNTndYRQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI 채용 정보 열기 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2026년 Future of Jobs Summit: 인공지능 혁명에서 살아남기 위해 SA의 미래 인력이 더 빨리 적응해야 하는 이유",
        "enTitle": "2026 Future of Jobs Summit: Why SA’s future workforce must adapt faster to survive the AI revolution",
        "date": "2026-05-29",
        "originalDate": "2026-05-28",
        "sourceName": "IOL",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxNSnhmYkRYclAxWFl2c2tMWFNvUExDR2tVVHF6VTkwUV9BXzJLQzlTWFhsVU9mWDEyLWdlNkVkVnYzZk51VVpNdVVJVzItZkY3d2VueUo5Q0piTEVMWWxDek5UNUxyUVJ1aWlqR05rdzRCUEtfeHFBUHNLa0lXZWJRYWNtaGtiak55N3lqTDFxVVlDUkRjdTl4ODF4WHVTRTdxajZ1VktERUd2c0dOX3JwUXJVMGNmWnN2QUk4b1JGVVIzZjZ3ZXFtcUJOWm1NdlVBeWREMk1tLXdVQjFSOHhVcno0RjNDQ28?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 Future of Jobs Summit: 인공지능 혁명에서 살아남기 위해 SA의 미래 인력이 더 빨리 적응해야 하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앤트로픽, '클로드 오퍼스 4.8'로 정상 탈환…'미소스급' 출시도 예고",
        "enTitle": "앤트로픽, '클로드 오퍼스 4.8'로 정상 탈환…'미소스급' 출시도 예고",
        "date": "2026-05-29",
        "originalDate": "2026-05-28",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5VSTRwekpZdVktV3ZpTnByOVBHNkJlUjAxRlY1UllnblNJOUM0NGo3Q0lZcnc5V0VMOE1PWk5vQ1hQRTFJYllqLXB5dmNkVlZ5YXgyNVJYWEdvellmVF9lT2M0SUd6MlJjWUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, '클로드 오퍼스 4.8'로 정상 탈환…'미소스급' 출시도 예고 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "Freedom Broker, AI 수익화 불확실성으로 Salesforce 목표주가 하향",
        "enTitle": "Freedom Broker, AI 수익화 불확실성으로 Salesforce 목표주가 하향",
        "date": "2026-05-29",
        "originalDate": "2026-05-28",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5jVkJ1cE4wRWVpRXUwT28zOHFJR244cUwwcklmQll2RHZaazZaS1JDMzBla0dVTldDZlg2em1tMUhDZUd1bjJvQm13bi1va0RBbjlqdkJ4VFdRWWdrbTVIeEVWVnJzRDFHX0lQQTBDVG5fVTZj?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! Freedom Broker, AI 수익화 불확실성으로 Salesforce 목표주가 하향 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "바이브컴퍼니 ‘썸트렌드’, 챗GPT 앱스 정식 승인…”국내 소셜 분석 앱 최초”",
        "enTitle": "바이브컴퍼니 ‘썸트렌드’, 챗GPT 앱스 정식 승인…”국내 소셜 분석 앱 최초”",
        "date": "2026-05-29",
        "originalDate": "2026-05-28",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5Ic2YwN2pfWGV5eUdDUFE3aktxak9JR2JUUGdkR3ZFX0JNTVo5MnV1Q2l1WFRLTHBha3gwUjJqOFQ3Tlpmd25sU1ZYZmlsTExvVVlYVGpCXzZlMjNkN0xmY3VQMjRRTmhaUnc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 바이브컴퍼니 ‘썸트렌드’, 챗GPT 앱스 정식 승인…”국내 소셜 분석 앱 최초” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
