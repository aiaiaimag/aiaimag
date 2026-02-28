/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-01
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "# 693: 벤 츠바이크 박사와 함께하는 인공지능, 정리해고, 커리어의 미래",
        "enTitle": "#693: AI, Layoffs, and the Future of Your Career – with Dr. Ben Zweig",
        "date": "2026-03-01",
        "originalDate": "2026-02-28",
        "sourceName": "Afford Anything",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOYW9QVzU2R25BUThWWkpZSDVJRWtfN1FWb3B5Y1YxanlDV01mdnBKN19fN0FvREdrSmZiNzVlNkN4SlB0Ym5hZjJodXVPRkk0OGRyWEJHak1tVUxDRXZxcFhJNXRYa2VUX3NGMWlZLXFPOGJ5VDFJanpzOFNCSTJod2hZWk9OTkQtdHpZRUNmeWR0Y29n?oc=5",
        "isRepublished": false,
        "viralRate": "80%",
        "analysis": "글로벌 AI 트렌드 체크! # 693: 벤 츠바이크 박사와 함께하는 인공지능, 정리해고, 커리어의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "뉴스: Manjeet Rege on Generative AI and the Future of Work",
        "enTitle": "In the News: Manjeet Rege on Generative AI and the Future of Work",
        "date": "2026-03-01",
        "originalDate": "2026-02-26",
        "sourceName": "Newsroom | University of St. Thomas",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQdDZOX3A1ZkFBUEZtWG0wSW5Qdm5KN01sQ2hpV1RYLVp4ci1sZVZGM3RFRzUySW5BcDNja3NQZzV6OEU1bkZrYmN6ZDM5SGJ6RmlCdVdIU2NuTERYOUJXaTBBbWtJWHFLSlFzeWRLVGtLVmhBUTY5bXRBalVFWFhpdG5HWDRXUEc2N2ZzZkszUWhPbmlacWc?oc=5",
        "isRepublished": false,
        "viralRate": "82%",
        "analysis": "글로벌 AI 트렌드 체크! 뉴스: Manjeet Rege on Generative AI and the Future of Work 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "초보 수준의 업무를 AI로 대체하면 '지불해야 할 통행료' 가 부과될 수 있습니다.",
        "enTitle": "Replacing entry-level work with AI may come with 'a toll to pay'",
        "date": "2026-03-01",
        "originalDate": "2026-02-27",
        "sourceName": "USA Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQRGp6MnhhM3dNRnRvVTJCMkgzN0h2bEV2TE4xZmZ3X2ZaQlhMMWR3WGZzbkNSUkJheEZYNFdhZjRGcGNraDJrVllramlTRDgwZHFnWWVRMjZ5Sy1ZZzdJVmprNFVlMDQyWWZxSkNaTVh2T21zYjhqX0YybHRQS1BHVVJCdzJfRHRMWThSNnBB?oc=5",
        "isRepublished": false,
        "viralRate": "78%",
        "analysis": "글로벌 AI 트렌드 체크! 초보 수준의 업무를 AI로 대체하면 '지불해야 할 통행료' 가 부과될 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "enTitle": "AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로",
        "date": "2026-03-01",
        "originalDate": "2026-02-26",
        "sourceName": "컨슈머타임스(Consumertimes)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9NeV9MWXhLNGNDQ1hiQzFLU1RDWEx4ejlfb1psbW5jZW1YU1VKNkJrSXd6UnBRSlZTZmJoWkFmVUh1bVBLTGhBYU8xUnJWamktRmF0RDJIb3RJLUxZcURkalpOWEQ0ejhlTFE?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "analysis": "2030을 위한 AI 실무 팁! AI·숏폼 수익화 노린 사기 늘었다…피해 예방은 '카드 할부'로 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬",
        "enTitle": "3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬",
        "date": "2026-03-01",
        "originalDate": "2026-02-26",
        "sourceName": "한국세정신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB6c2Y4ZjE3SVVUTnZtSnVwWDFvcXpTb3l4NXJSYmtLM3Q4S25PTjZETFBBRXRVWF9UUTk4M05lNXNvS3JuY2xTMlRKcXVBUkZJNkJxc2tOVjBWOTE4eEtLX25rUVg?oc=5",
        "isRepublished": false,
        "viralRate": "80%",
        "analysis": "2030을 위한 AI 실무 팁! 3월 법인세 신고 앞두고…세무사랑 'AI 자동 조정' 선봬 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "뷰티 브랜드 전용 AI 마케팅 솔루션 캐치모먼츠, 새해 맞이 무료 체험 제공",
        "enTitle": "뷰티 브랜드 전용 AI 마케팅 솔루션 캐치모먼츠, 새해 맞이 무료 체험 제공",
        "date": "2026-03-01",
        "originalDate": "2026-02-26",
        "sourceName": "스타트업데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFB2d0tGSjZFNXk3Y2UtU3Q3U3hJdDNKXzJZUFBNMVNoekQtajZGZU80MlBCeExxcHVFdk5MdURtOTAxZGFvU1ZoUHNiMTlwd0IxYjkyQy1sdmhSMU5jeC0xRnhVTHZxeHdtNXN1d9IBcEFVX3lxTE9XZEwwOUE0U3dZTEtNbXBNdVZ4eVN2aEp1QU81aXlBbzNRWnN2WEU3X1NxSHVaS0hlN1RtVEs0Mm94RmJtNlJxa0hVUTMtRXJyZU1hQUxnbEhZY25vYmp4dUhRYUVJd3ltak5tSGFaaEg?oc=5",
        "isRepublished": false,
        "viralRate": "79%",
        "analysis": "2030을 위한 AI 실무 팁! 뷰티 브랜드 전용 AI 마케팅 솔루션 캐치모먼츠, 새해 맞이 무료 체험 제공 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
