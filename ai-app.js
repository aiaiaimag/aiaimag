/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Beyond Generative AI: 업무의 미래를 형성하는 7가지 기술",
        "enTitle": "Beyond Generative AI: 7 Skills that Will Shape the Future of Work",
        "date": "2026-09-14",
        "originalDate": "2026-09-13",
        "sourceName": "analyticsinsight.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxObUo2aTB0ZTE3SlpIOHNnZjRRU0J1TmxXbml3Q3BhbFRqc3l2MG9CM1ZkcWg0UUFyVWJ3UDNQcHpDSVVzOFdNRFBjTXJidlJNMjgwbldyVVJNd2dSU3JqU29LVDBmdUUxY1d3UGFlZGI0OWlfMnV5QWZZUEdoNjhrUkg2elItMjdzeVdmOTdLWWdjVUYtMEVOWFZnYmFvTGZlUkJVSjZHdFNpOEVKS29ZcHFxaTNueEVhd0JlOXVB0gHLAUFVX3lxTE43NXVCNFpUaVBBVzJ4dWFpVWFUbWhmS1l6UFkyRzlINVhUQlBYSHlFS0wtaGJETG0xR0xVT3o0bnBCWGRXcC1IWi1GTms1dmhkWmxkNm03Qnptd19lUjlDVWRxTUlieWx6cVRRWjIxQjV4TXBxNkxYRGV0d3RJZVVlVXV2bDlJVmhBOTlvS0o5WjRYQ0VCR1VqUnpEWC1YRmtueTVfZm0yWnV2SVR4d09VbldOeWFJWjVNN05rcnExNHRTRndPWWN0NmJz?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Beyond Generative AI: 업무의 미래를 형성하는 7가지 기술 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능으로 만든 1980년대식 메이크오버를 원하시나요? 사진을 업로드하기 전에 두 번 생각하세요 | 세계일보",
        "enTitle": "Want an AI-made 1980s makeover? Think twice before uploading your photo | World News",
        "date": "2026-09-14",
        "originalDate": "2026-09-12",
        "sourceName": "Hindustan Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNLVgzRDgyeE9qVF9VSWc0LTY2QWtaY1EzRWFtVXVzRFpFZTdpcXNsU1NCcVUyZnpBaGRZSkxqbjF5eDdWVXh0akRvNGtzYU5HS09ZdUxxdWV5cnN5a2tLYVZLbzN3Z3oxaU1xM3UzWHZHODlBdEhISmJvVnFBT1ZncFk2LWt4Z2NUcXcxV2steks0VHh0Q2ZSazg4V1RpdGdfZHgxOXZNdjNtR0JnYWljeWlTZkwxNkQ3VGY4VFF0b0trblJpMGgwcl9DYzY5MXJYVkE3ZEs2WEJCWEd4X3RsVGd30gHnAUFVX3lxTFB1bXpFWW1ZU0xublZzU1dPTUlGZFY1ZFhOOFVSZWsyZVBnQU9jYkRQcmNZRXE0SFBYSkRQYWVsQ2hVN0pfeGptQVVjVHhMSmJmN25GNUdrZHlQZjdFRDlWeGxna0xybVExX0Vsamp6ZzBRLVYydVAzSC0zYk5pblFpd3lvTU9sRVd1VFNGM2gzLThmRmRwazlTMzdWYWJvMlQxYzlJanJUSHluVXVxVDZKbW5kTlBZa1Y5b2hWVHJFc1NidnlsbVFrUGxMNERGYlZ6UHFoVjZybVhMaXR1LXFwcXJPSTJRcw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능으로 만든 1980년대식 메이크오버를 원하시나요? 사진을 업로드하기 전에 두 번 생각하세요 | 세계일보 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "해고를 늘리지 않으면서 AI가 채용을 줄이는 방법",
        "enTitle": "How AI May Reduce Hiring Without Increasing Layoffs",
        "date": "2026-09-14",
        "originalDate": "2026-09-12",
        "sourceName": "quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOdWRfb3gwNGhiOFhSLXVSV2JYX2Vra21XNmZFSlFMUVV6azFrS0gtQjZrUjFpYk8zRG84NklURHZVYkFaTnY5SG9mbGJzS00zRzFNZEZycmJnNjh5cWtqZGwwcjZlaU9JUm9JSnkzY1VDcEtOVXN5U1pkNU04MmQyVldfbmdDeWFvQWVhZ1piMGI4ajFGMVMzd0RNWHNxSUE?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 해고를 늘리지 않으면서 AI가 채용을 줄이는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글, 윈도우용 '제미나이' 앱 출시…단축키로 AI 바로 호출",
        "enTitle": "구글, 윈도우용 '제미나이' 앱 출시…단축키로 AI 바로 호출",
        "date": "2026-09-14",
        "originalDate": "2026-09-13",
        "sourceName": "메트로신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBNZFVoSXRDV01ia1U5MFN2aFp2Y3NRaU9wQjVZRHk1Z0pVVXJqRUFKd1JGUmVrOE5tUTF5N2xXekF0clcxN1pNRXJlVklid2l6UVdIYVpzZ0pHT1hlQVpPUA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 윈도우용 '제미나이' 앱 출시…단축키로 AI 바로 호출 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "래디시스, V.AI 에코시스템 출시로 통신 AI 서비스 혁신 가속화",
        "enTitle": "래디시스, V.AI 에코시스템 출시로 통신 AI 서비스 혁신 가속화",
        "date": "2026-09-14",
        "originalDate": "2026-09-13",
        "sourceName": "newswire.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5vdVYzRUhhWFBBclE1WTNBeHBzN1BHMDlqVkFSMUdQay15VEVuQmMzMXZnRnJObXFtU1dtczJPaEhIa2YtbWhUcjlQQkxjc2RDNmhDRWtxczJlbUN5N3U4?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 래디시스, V.AI 에코시스템 출시로 통신 AI 서비스 혁신 가속화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "미국은 ‘미국산’으로 잡는다? 이란·후티, 클로드로 공격 시도 [이런뉴스]",
        "enTitle": "미국은 ‘미국산’으로 잡는다? 이란·후티, 클로드로 공격 시도 [이런뉴스]",
        "date": "2026-09-14",
        "originalDate": "2026-09-13",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE05bjZYVWxzeExOalVac0x0ZmZfNDQyMmZsSnFCek9yYVVYOEs4UXJuWktNck5WemZRaWhCVXJFZjJaN000cnVEMmozMUxaWG8?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 미국은 ‘미국산’으로 잡는다? 이란·후티, 클로드로 공격 시도 [이런뉴스] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
