/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일의 미래",
        "enTitle": "The future of work",
        "date": "2026-07-04",
        "originalDate": "2026-07-03",
        "sourceName": "Chris Skinner's blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5xTlpwZXRDOWNVMnQyMU9faXZIS2pKcTBTQ2dUTmpFZ2dEVHM1ZEZKZzlENVlfZGN3cnllOXZqaExXd19jWldmS1Jta3hXNE43Q2xxa1puaXdqLTZwalFB?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "소프트웨어 산업에서 일자리의 미래: 인공지능의 부상 탐색",
        "enTitle": "The future of jobs in the software industry: Navigating the rise of AI",
        "date": "2026-07-04",
        "originalDate": "2026-07-03",
        "sourceName": "University of Waterloo",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQbWZHNDBJSTJQVE1WZW14Umt6NnRXdE5tUF84eUdtcFdaYjM0T3FMTUEyTDRqaVZhb09RSE1wekJici1ObEQzQVpoOWNGajRaQld4RTUtVkV1V1hhLXp0aVZ5UlZBa3RfaTBKTXBkS3dqcnowUW92VGNoMUNSNzFGT0pxNlBMRlhIZ2VYY2ZVLTdmYlNDbm5zN2tOcHN4OHFYcnU5enlsNWxYVDQt?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 소프트웨어 산업에서 일자리의 미래: 인공지능의 부상 탐색 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능이 직업을 대체할까요? 최신 노동 시장 데이터가 실제로 알려주는 것",
        "enTitle": "Will AI replace your job? What the latest labour market data really tells us",
        "date": "2026-07-04",
        "originalDate": "2026-07-03",
        "sourceName": "Firstpost",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOal9wZm5rQm1TR0JJZHEyOW9obTc4ejhSbzh6WElaRV9zQWo0THg0cHVSVlpkU3hXTkI1V0xxelMzclNyYW94U1RtS0tlWjNUNmhSNzQ2VWczSGt6OVpnVjVPa2ZRVXBuU0cyMlh6aVlHNGNtRXNfTmh1Wlc0QWZvbWdGdFFqVFNtODljakFER1FJOXUyUzczVkd0VVVCazM0MHNSa1pxbnl5OXNEb2dNSkFkbWhZMHN5NldtQtIBwgFBVV95cUxOWlNZel9wRlRZOElvUVVzN1FLWUI0Ym9GSWNETzFxVTE5dThjemFVVHkyYXpnaDZxSkZacG9JWDBPNlVfMkxEdnE4cmxyOVpyRnhIYVVCRGdjZmRsNmlrMU1BbnNnRWpwZGQ1OEE5SFIxVnk3OU44MXphNjZtZWRFQmVlVFNPaExNYnI4Mjc4d0xxZzJFUS1fLWh4eWFhWWRGWHhJUGw3Z1NjSXhsLUJLc2Vva21XU3BHTUtsY1dMMnhRQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 직업을 대체할까요? 최신 노동 시장 데이터가 실제로 알려주는 것 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "메타, AI로 친구들과 게임 만들어 공유하는 SNS 앱 출시",
        "enTitle": "메타, AI로 친구들과 게임 만들어 공유하는 SNS 앱 출시",
        "date": "2026-07-04",
        "originalDate": "2026-07-03",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zVm95N1dINVV6dDVwLUVGam9yU0ZsZEJ4M0l6ZjB0TzNFMTMzUmxpV3ZRNzl5dnROYTIyRGJxNjl5REM0cnowWUN3TkZRWkZTZWdpV0w2X1JmUGfSAWBBVV95cUxPWDNEckEtRi1uZjhKek5FNm9XTU9WTTI5djE2QUFRU2VPcUJKUEtickdZOVZwRUttNDNBcHRMdUdOUC0wYXRjbXRUMzlzZkplN3BmV3FiUFE4dWMxREdiVlg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, AI로 친구들과 게임 만들어 공유하는 SNS 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"제미나이 할인받고 쓰자\"...SKT, ‘구글 AI 플랜’ 구독 서비스 출시",
        "enTitle": "\"제미나이 할인받고 쓰자\"...SKT, ‘구글 AI 플랜’ 구독 서비스 출시",
        "date": "2026-07-04",
        "originalDate": "2026-07-03",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5ZMWNOalZmdGg0QldlX2F2ZEJlbk1fQmlGRkxzSXNTRGQ1aVFwbEJqUWFlZGVrY1duUjJHYnRtTno3SnZhV1ZvRjdidGxnZk5WV3VCSkJvcWxoOGJSRER4ZVhVVmhZdXppSUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"제미나이 할인받고 쓰자\"...SKT, ‘구글 AI 플랜’ 구독 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"中알리바바, '보안 위험' 이유로 AI도구 클로드코드 사용 금지\"",
        "enTitle": "\"中알리바바, '보안 위험' 이유로 AI도구 클로드코드 사용 금지\"",
        "date": "2026-07-04",
        "originalDate": "2026-07-03",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5hcWt5NmdPeGVHa0FXX084aWYzc1o1cU5PdWU3cFVia1o5bHZlQ015cXNVLWllb3IwUk9LQnlKbXdJVjZKVXBfc0R6ODdhZGNLTEt2c2FEbS1UbWfSAWBBVV95cUxPcDB0ZF9NQ3pzSkMySGdJM3IzMWM1bmdXRGdPNGZzcnJ4eVd6Z1d2ZGR4NUVZZTRWMTlkc2JzbjhuWWRIR0xGQW9CVmVGTEJVRWhyM2hCQWhfYk5DMXVxZ2g?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"中알리바바, '보안 위험' 이유로 AI도구 클로드코드 사용 금지\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
