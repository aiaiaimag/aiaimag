/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT 캐리커처 트렌드 프라이버시 위험: 사용자가 알아야 할 사항",
        "enTitle": "ChatGPT caricature trend privacy risks: What users must know",
        "date": "2026-07-10",
        "originalDate": "2026-07-09",
        "sourceName": "Bitdefender",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNOE1HYUFNVnF3bkZFYVRxSzhRbEVibEhLek5xMmJqeS1IdGlmNWpQTW9OU0tMbkgzU0FwTHhOMDd2ZmtRcFdUQXA2YmpCX0w1VGh4NGhILURod0VMYjVCbndnZngyc0ZVTVY0OG5KZFNaOVVUY3lYS3Q0dEJkYUpQNllROWE3QQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT 캐리커처 트렌드 프라이버시 위험: 사용자가 알아야 할 사항 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "'가장 큰 AI 직업은 여전히 인간': 직업의 미래에 대한 CEA Nageswaran",
        "enTitle": "'The biggest AI job is still human': CEA Nageswaran on the future of work",
        "date": "2026-07-10",
        "originalDate": "2026-07-09",
        "sourceName": "Moneycontrol.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPYWxnazhVSkx0QkJyX2V1dUh6YlZCUDhQVzdiTHhpaG85eFpoWGI0dmJmSlNUNU5JSWJxak91NW9EZGo4VURSWXF4VC1VdWVDTWgzbFJNLTdqa0o2Q2lnUlVzWm5IbTIzV3U0cHBJMGp4c2xIX2RyVHNoZGFoYlZaOHJDcHF2QXVoRmNZcU9lVDgyUHgzbFFieWFobG9fM1JCVG5LcjRKVzQ1ZUZZS0dLZV96S05MSk90U0xFQ0dWdnNhUdIBxwFBVV95cUxNSFZ0T2xoLWZ0dC01Yi1zeHZtaTFVWGtTUlYxZjBGYjlHWDBFT2dVYmQ0TFoyc3FhN3lGRTA4eUktZFNZemhHcTBKblZyV1YyZVM1YTNBVV9HZVM1a05Fc3dfQU8xRmIxYUNXZHpQQ1ZuODNIWUhGdlEySXVibzR4cWFkWUVENjZCel9sZWJKR0FyVFNxUHExd1dWZjEzNFg0RXlvUnhqaEpmT0E5eWFvOTZ0T3lJMUJ3ZHVJcURfTmdCZ1hJT0RF?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! '가장 큰 AI 직업은 여전히 인간': 직업의 미래에 대한 CEA Nageswaran 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "팀이 리더십으로부터 최고의 AI 생산성 해킹을 숨기고 있는 3가지 이유",
        "enTitle": "3 Reasons Your Team Is Hiding Its Best AI Productivity Hacks From Leadership",
        "date": "2026-07-10",
        "originalDate": "2026-07-08",
        "sourceName": "streamlinefeed.co.ke",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQQ2hvZnVrbkJFRm9sbjhyLUNkLUJLR1E5WG11NmFBTmRqREVxRGlxS3dfdnVnU19pd25fXzB5N3d5eFViOGhxdjVZXzRSNUYxVUQwcUdDclBvYkhUYWxoc3FJRV9RcEpSUlh0ZkRkaGhDaXM4QzdjMVZjSExZX3FEUmFZNERYMS1zQWc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 팀이 리더십으로부터 최고의 AI 생산성 해킹을 숨기고 있는 3가지 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "1인 빌더, 클로드 코드로 프로젝트 9개 동시 운영한 방법",
        "enTitle": "1인 빌더, 클로드 코드로 프로젝트 9개 동시 운영한 방법",
        "date": "2026-07-10",
        "originalDate": "2026-07-09",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBXbE5BZlRGME1UNDVKX3NSLVFXTURUM3MwcnU2eFB6YXFyUnBQN3Z1T0hET0tOM05TamZKZG1hYmIxenhOanZ6ZjJQUmQyQWhuS2l4bDNSTEY5UQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 1인 빌더, 클로드 코드로 프로젝트 9개 동시 운영한 방법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "OpenAI, GPT-5.6 모델 기반 ’ChatGPT Work’ 출시",
        "enTitle": "OpenAI, GPT-5.6 모델 기반 ’ChatGPT Work’ 출시",
        "date": "2026-07-10",
        "originalDate": "2026-07-09",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE84OFhkc3dYUVJWTUhnc1Q2THRNczBZcDUteU40UWJkcC1jc1hzVmlieDRRdk44Q0pjZzZ2aVhCenY0Ty1YXzdCbGh3dDVZTjJZTVNHTlVMTjZuZXdVbnByWDZqU0JkdUVFSk5sSmt2ZkkzdEVKeENN?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! OpenAI, GPT-5.6 모델 기반 ’ChatGPT Work’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "모바일 앱 출시 지연 막는 릴리스 자동화...AI 코드까지 검증",
        "enTitle": "모바일 앱 출시 지연 막는 릴리스 자동화...AI 코드까지 검증",
        "date": "2026-07-10",
        "originalDate": "2026-07-09",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBYaDlsSGQtUFdrb1FhM0xncmhXcl91MlJiNW1RQi1PdG5rNEZTeUZ4c3M2OFRfbGpiSzNnUGpMaXhYbE1aMUw5MDYtLXRJTUR2OHotM2R5ZmpnckZFWTJsbW81ampmRVpfQ3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 모바일 앱 출시 지연 막는 릴리스 자동화...AI 코드까지 검증 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
