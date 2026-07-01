/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI로 인해 진로가 불확실해짐에 따라, 캔자스시티 비영리 단체는 새로운 졸업생을 안내합니다 | 오피니언",
        "enTitle": "As AI makes career paths uncertain, Kansas City nonprofit guides new grads | Opinion",
        "date": "2026-07-02",
        "originalDate": "2026-07-01",
        "sourceName": "Kansas City Star",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5MRndsbWFtYXBTQ0VQYnR6N0REdWo1cTFSZTdyNVFvQ1poMm8wTGRxSnZVTHRMMmVnZXM3aUxKUmp2TUNGRExiUlJLZXlyYW5hY29TR3h1WjdkQlNMUVVvYjh3bUswelXSAWdBVV95cUxNV2NuZkJEMHdfSE5MT3FqcndyNThuOUlpSzR6aWRoaWEzdjYwUW1qdE4xbkl1UUhVcXZwUzd3aUlCeWpQdVVKVVpPUlpVcnRRWjlzVnQ1WTRaaXJ2eFdnOENydWJlLVEw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI로 인해 진로가 불확실해짐에 따라, 캔자스시티 비영리 단체는 새로운 졸업생을 안내합니다 | 오피니언 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Meta가 8,000명의 직원에게 오전 4시 해고 이메일을 보낸 지 며칠 후, CEO Mark Zuckerberg는 AI 일자리에 대한 두려움이 사라졌다고 말합니다.",
        "enTitle": "Days after Meta sent 4 AM layoff emails to 8,000 employees, CEO Mark Zuckerberg says fears of AI job losse",
        "date": "2026-07-02",
        "originalDate": "2026-07-01",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygJBVV95cUxOQ3AyMFNuOW4yNEpMdjN2MTdsYUlQQXprVnpQSUNPQUVsMTZQMEdXMnVOajRyR0I1V2U4SnVFRUg1aV9qdW1UUkZGai16UjY1RzlzQjd3WlFVenZoUUZqSXZVSHZ2cWs3ZUEwUE8ybU1tWE5rRjEzY1c2VHhFY1laY19qT25RcDU3YzZjSnd0N1RVakdHQnJKLUQtbWIyZzdtT0R6RnliSWU2N1JFQWp5Q0h1b19Jdnd3V0lnaHpnRHRPREdyQW14Y1FtdTJmSXVPM2JibktBXzU3NzhoZjlNNmxYRG5kdk5WV05mRjUxdHBxcUhFYkxEQWxRSGRTcWRxWE1IVGZyYkFXUTF1SzdmZXJEOEUtY3pYZkFheU9HUkg0Q2FkYXBPcXVOQkcwLThaMXhzbEZjRElDcnN0REJYVWZnUUxmTDlzN1HSAc8CQVVfeXFMTzVLN0JNTU1mdlM4c1JJTDllUGp1RlJjT2FtOWl6dVFMcTRhbmgzNmdKODdvMkU4OU94NTBEcEp3RE9zQ3VDSWxHa1NpRDVQajBadkN5eHZyY3VOeXI5NjZPdU9XZGNoU2IwOTR3VGItU2N6X2VHdDNxRlZyTXlxdUVNbi04QkdSQWVUbkpkei1Wck14bmRHcTI3U0JsU2hGMFhhdzJyQklWT0RSMnVsY3NNMVpzZW1QLXdsMEVzbmNKTkJieVpOYVk1ZFY0N3RvV0pjalVVTlBHam1oeTQtWHVUUkE1cjExZzlDcmlrOVZJd1VJOEc4LXpVNHEwaTZyMUl1TnNJRFNnWWJVaENtWEhQeGRQdGZ1d19YWHBNVjR2cVZ2cm5GY2RqZGZZTnVPa2ZUYjU4Ql9pMkZTbDl0VVlxQlJseE1FSFBxZG56V2M?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Meta가 8,000명의 직원에게 오전 4시 해고 이메일을 보낸 지 며칠 후, CEO Mark Zuckerberg는 AI 일자리에 대한 두려움이 사라졌다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "귀하의 직업이 이 목록에 포함될 수 있습니까? 인공지능이 대체할 수 있다고 생각하는 커리어의 순위를 매겼습니다",
        "enTitle": "Could your job be on this list? AI ranked the careers it thinks it can replace",
        "date": "2026-07-02",
        "originalDate": "2026-06-30",
        "sourceName": "Click2Houston",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQcC1ZRjV2NUhRRHRzd1hMNEdueEY3cm9VOUJ3Q1VRbGM2R1E4RDJ3elNkYmo2ZTlMb1RfakZzZUJGNWpKUUszcUZBTlBlM1p2ZnJRNEJBenIyU0RKSjRTYlJXNi1ZeUFsT0NlNjNmQjRxVFlIWWNDVEZzZXdaSmpnNzRzdmVsZVpSTHRYREhJT0tRRzZJaXVVNnZQWjlwaDhfODEwa2hyb3hleVJSVTJTOWJjenczelprQjFpTDdfdnRqejUzNzVzd05B?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 귀하의 직업이 이 목록에 포함될 수 있습니까? 인공지능이 대체할 수 있다고 생각하는 커리어의 순위를 매겼습니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글 제미나이 '나노 바나나' 개인화 이미지 생성, 미국서 무료 개방",
        "enTitle": "구글 제미나이 '나노 바나나' 개인화 이미지 생성, 미국서 무료 개방",
        "date": "2026-07-02",
        "originalDate": "2026-07-01",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5JVzdfaVRiSmRZQS0yVU1abzl1UHhRd2dwWDVDWGthaVB1dS1tTUc1dDBUV3ZqcDRzTDA3SXpqS0l3SUFCQW1jSzR3d3BlcjhRY01veGNn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 제미나이 '나노 바나나' 개인화 이미지 생성, 미국서 무료 개방 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"퇴사 징후 미리 파악\"...블라인드, 1400만 직장인 데이터 기반 AI 서비스 출시",
        "enTitle": "\"퇴사 징후 미리 파악\"...블라인드, 1400만 직장인 데이터 기반 AI 서비스 출시",
        "date": "2026-07-02",
        "originalDate": "2026-07-01",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9wSHdwWkkzdl9LcXpRbmdVcnBEZ25RNDBYa0VXMmIwNkFIeDJRbDdYbThZZlFsMjBfbW1OTVNINU1aNEFiN1ZvMzNKVEdJSDRzNXJwZEdjdkwxcy1wVExOYlB5U3ExNlBRYlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"퇴사 징후 미리 파악\"...블라인드, 1400만 직장인 데이터 기반 AI 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "앤트로픽, '클로드 페이블 5·미토스 5' 수출통제 해제…7월 1일부터 서비스 순차 복원",
        "enTitle": "앤트로픽, '클로드 페이블 5·미토스 5' 수출통제 해제…7월 1일부터 서비스 순차 복원",
        "date": "2026-07-02",
        "originalDate": "2026-07-01",
        "sourceName": "인공지능신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBBN0JoblhDaGRHeUpOc1RhWVN5QUcxdlBFUmRMekxhZktvTHVpYWpKMXFteXlrald2Y3dlbWU5Ukc1TGhQQTRSRV9XOXRlU2RoN2RfbkwtMlBJTllUNnpxbUdoUzNibTg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, '클로드 페이블 5·미토스 5' 수출통제 해제…7월 1일부터 서비스 순차 복원 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
