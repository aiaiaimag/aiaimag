/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI와 일의 미래: 전환기의 구인 시장 탐색",
        "enTitle": "AI and the Future of Work: Navigating a Job Market in Transition",
        "date": "2026-11-24",
        "originalDate": "2026-11-23",
        "sourceName": "orfonline.org",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNZHVDNU5oM21WLWlrOGdCQmowMk5LbWVXMG5JTmhacG1rT0NMVE9ZQmtrQURyWm93c0lYOXJwRmctN054UDJsZ3g0X1N6bWJyTU1IOHNIcFM5WEJvQ1l3Q3RUREhOLVg2anNwcWhNM2NtR3BvZklqNmRPeG1nVFNvZlo3aVdLRFRQNGU4U3g2YzdpMjJkenlabWRtcw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 일의 미래: 전환기의 구인 시장 탐색 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "새로운 연구: 워싱턴주 청년층의 절반 미만이 미래의 일자리에 대한 준비가 되어 있다고 느낌",
        "enTitle": "New Research: Fewer Than Half of Washington State's Young Adults Feel Prepared for the Future of Work",
        "date": "2026-11-24",
        "originalDate": "2026-11-23",
        "sourceName": "01net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxORkVqTjVRNlhwRFR3OWdsVTBmdUUtYzZ2cjN2ZTMwQ2tIVnVEaVZyQ3F6c0pNQ0JUNndWX3p3SFp6MWcyOXVRSVBDVXpyYW5EeEwtTm5idWtmdjRpYi1GRnJMdXg5SnI5Z2J2MmlhdEtRRVVVWHhrT2xMUTNTOGVSNkt3eUJCS1hFYXhob2loc1VQa1V2WXBfWE85UEJwYzZ3R0NHSXhGWEZKdHdiX0JTeW0zM196RmRjbGo0c2hn?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 새로운 연구: 워싱턴주 청년층의 절반 미만이 미래의 일자리에 대한 준비가 되어 있다고 느낌 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 일자리를 변화시키고 있습니다. 대학은 어떻게 학생들을 미래에 대비하도록 준비시켜야 할까요?",
        "enTitle": "AI Is Changing Jobs: How Should Universities Prepare Students for the Future?",
        "date": "2026-11-24",
        "originalDate": "2026-11-23",
        "sourceName": "Shoolini University",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQcjFZRUt4VUh5ODBoemx1UlU0eDVkdHRKdy1HQTI2ZlF6VHhDeWUzekcwY3ZEcFZCM05GVVcwVlBPalpvbmVqTVNvMW5oNHIydUd3MlJFVU4xZTR1eXptZkRiZUJLZEQwMUpfVEtfc3IwR0kxMEYxY2lrRk5Ed1ZkN0RzMC1RNjZyRTJvOGRDSVF2WlAxMERCU2ZwbVEwNlZSZlBrT2lzempaN2VKcEhFbzdB0gG6AUFVX3lxTE1uWjRKemNKYTVMcmZUNURLTGFfekJ3WGhzUklMc3U4d3o5ckdGbXB0c1liUnAwZFNqWGs2enJoOTBNeFlQdnA0Y29saTloNEp5bDFQUjg3NVhfMkIyeGpLdnMzbndWYlZtbmxOSWxMWl9KNmNBaWxocmlldjloMnpOaE9TU0RIdUE4Z0I3cUlZQ0kzRjdNU2wyNWs4Z3k5VFpJRmNsTjZDdkliNklrUGVPMWEtZmtDNmJ1dw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 일자리를 변화시키고 있습니다. 대학은 어떻게 학생들을 미래에 대비하도록 준비시켜야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI가 코드 검사하고 승인까지…앤트로픽, '클로드 쉽' 출시",
        "enTitle": "AI가 코드 검사하고 승인까지…앤트로픽, '클로드 쉽' 출시",
        "date": "2026-11-24",
        "originalDate": "2026-11-24",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5haWwtOEU2R1dnWmtHZUxHV21WRjJMRldZbzEwUldIb0pnTFdvMHZkUUowc1R4WWhtbmhqY2NZRGFpSW0xc0QxX0I0MXF0ZV82S2dMYi1R?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 코드 검사하고 승인까지…앤트로픽, '클로드 쉽' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤트로픽 '클로드 쉽' 베타 출시…코드 검토·승인 자동화",
        "enTitle": "앤트로픽 '클로드 쉽' 베타 출시…코드 검토·승인 자동화",
        "date": "2026-11-24",
        "originalDate": "2026-11-24",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1sZlFueW5TbWJISTNvcE1JTnRlck00QXA4NGRMRjU3LThaRzFhdlREeTEybThzN2xzSW5fMFg5VXVHMXkyNWtrLWxvNXZlTDJuQVlPRl95bmkwdWhFLUNSZkxxOUFSZEM0UHI3ZmlUZHJXX3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽 '클로드 쉽' 베타 출시…코드 검토·승인 자동화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "NH투자증권, AI 로보어드바이저 서비스 출시",
        "enTitle": "NH투자증권, AI 로보어드바이저 서비스 출시",
        "date": "2026-11-24",
        "originalDate": "2026-11-24",
        "sourceName": "농민신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1WSkxuWXN6bEcxNDFJaGtVMGFQR3MzYlN4R0hmOEMtTXRrald4cnRwVThBd0tCemhUWUZPT3FsS04zZEp0Tjg1ZzhBTlhpQVVoQUpDTkYzNFo0Zw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! NH투자증권, AI 로보어드바이저 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
