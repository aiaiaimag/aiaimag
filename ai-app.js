/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-12
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "1980년대 AI 사진 채팅GPT 트렌드는 바이러스성입니다. 하지만 얼굴을 업로드하는 것이 안전한가요? | 세계 뉴스",
        "enTitle": "1980s AI photo ChatGPT trend is viral. But is it safe to upload your face? | World News",
        "date": "2026-09-12",
        "originalDate": "2026-09-11",
        "sourceName": "hindustantimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNLVgzRDgyeE9qVF9VSWc0LTY2QWtaY1EzRWFtVXVzRFpFZTdpcXNsU1NCcVUyZnpBaGRZSkxqbjF5eDdWVXh0akRvNGtzYU5HS09ZdUxxdWV5cnN5a2tLYVZLbzN3Z3oxaU1xM3UzWHZHODlBdEhISmJvVnFBT1ZncFk2LWt4Z2NUcXcxV2steks0VHh0Q2ZSazg4V1RpdGdfZHgxOXZNdjNtR0JnYWljeWlTZkwxNkQ3VGY4VFF0b0trblJpMGgwcl9DYzY5MXJYVkE3ZEs2WEJCWEd4X3RsVGd30gHnAUFVX3lxTFB1bXpFWW1ZU0xublZzU1dPTUlGZFY1ZFhOOFVSZWsyZVBnQU9jYkRQcmNZRXE0SFBYSkRQYWVsQ2hVN0pfeGptQVVjVHhMSmJmN25GNUdrZHlQZjdFRDlWeGxna0xybVExX0Vsamp6ZzBRLVYydVAzSC0zYk5pblFpd3lvTU9sRVd1VFNGM2gzLThmRmRwazlTMzdWYWJvMlQxYzlJanJUSHluVXVxVDZKbW5kTlBZa1Y5b2hWVHJFc1NidnlsbVFrUGxMNERGYlZ6UHFoVjZybVhMaXR1LXFwcXJPSTJRcw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 1980년대 AI 사진 채팅GPT 트렌드는 바이러스성입니다. 하지만 얼굴을 업로드하는 것이 안전한가요? | 세계 뉴스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Anthropic의 2030년 세 가지 AI 경제 시나리오에 대해 설명합니다.",
        "enTitle": "Anthropic's three AI economic scenarios for 2030, explained",
        "date": "2026-09-12",
        "originalDate": "2026-09-11",
        "sourceName": "The Next Web",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE03aUMtcGw5cVg3NmlYT2FSN0diekpsZUZsMnhubnFxNDg0ZDBKakVMaHB5SkNEbjVnWGhCLXlTX05zSHIwZHJLM2c5NDFZVUVub1IwbXhMeG9zRDRWLWEtcWZGdXdZQ1diVEFWNGFjbmp4QQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Anthropic의 2030년 세 가지 AI 경제 시나리오에 대해 설명합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "아일랜드 근로자의 절반이 AI의 부상으로 인해 새로운 경력 경로를 고려하고 있다고 연구 결과가 밝혔습니다.",
        "enTitle": "Half of workers in Ireland considering new career path due to rise of AI, study shows",
        "date": "2026-09-12",
        "originalDate": "2026-09-11",
        "sourceName": "tuamherald.ie",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOSTNuM2lVWTZnbTR0SFZ5OGRMOF9MLXBYc1hudVpESlgtUmRrbFQxWUlWQm1qdjdRTmYwTndwR1NZR2NyN2dmQnQxME1PNmo3VVVRRE95aG1tcjc4WDhpdVFjN3VsUVBOTWtnYmxxdXZWSUI4b2xBQkVXY1ZIazd2UEFmZEtXRmdzY0RNVDRyeVJ3ZHJROTF6Tkp1TjY1RlpfMHB5aVhvOEY3QUNOUmlyb0FCdDc4T3pVUWxFbktwdw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 아일랜드 근로자의 절반이 AI의 부상으로 인해 새로운 경력 경로를 고려하고 있다고 연구 결과가 밝혔습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "돈 냈는데 '사용 한도 초과?'⋯챗GPT·클로드, 얼마나 쓸 수 있나",
        "enTitle": "돈 냈는데 '사용 한도 초과?'⋯챗GPT·클로드, 얼마나 쓸 수 있나",
        "date": "2026-09-12",
        "originalDate": "2026-09-11",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5JSFQxb3dkVjVyc2h1X0ppT3hURExkaHRBbjAzT2JTbUZGV2p3OGcyS1dST3BhXzBIQ2VZelNQVFgxTDZzUXFwMGZTa1lUNk0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 돈 냈는데 '사용 한도 초과?'⋯챗GPT·클로드, 얼마나 쓸 수 있나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "웹 브라우저 벗어난 구글 '제미나이', 윈도우용 데스크톱 앱 출시",
        "enTitle": "웹 브라우저 벗어난 구글 '제미나이', 윈도우용 데스크톱 앱 출시",
        "date": "2026-09-12",
        "originalDate": "2026-09-11",
        "sourceName": "aitimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1UUFZTdTdhQkdIR21nc00yUXpLbDBWYlM5WXh2QWpUQjlpOW9oS2JWLWltZVBEMkI0MkxvQlZvaTUyNThjN2xDVXR5aVdUakVPTWNMVEZMNWFON1k3QVJSVTgwV253TFl3cUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 웹 브라우저 벗어난 구글 '제미나이', 윈도우용 데스크톱 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"스마트워치 없이도 수면 측정\"...비브레스트, '트랜슬립 AI' 앱 출시",
        "enTitle": "\"스마트워치 없이도 수면 측정\"...비브레스트, '트랜슬립 AI' 앱 출시",
        "date": "2026-09-12",
        "originalDate": "2026-09-11",
        "sourceName": "aitimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5zT0VqWFFHbkVVa3ZpT2t0NDdMQ09wdU5uT0k2THRoTktwcXREbzZiTkZIVHdrbEZsNmJWMHRNUVRZNTFoQURVNjZuR1ZTcXVoMU1PVFFJMkNIWURUNHp5WVN1ZHVaMFlmdlE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"스마트워치 없이도 수면 측정\"...비브레스트, '트랜슬립 AI' 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
