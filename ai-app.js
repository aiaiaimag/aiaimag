/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "‘인공지능과 일의 미래’ 시리즈 — 대학이 학생들에게 다음 과제를 준비시키는 방법",
        "enTitle": "The ‘AI and Future of Work’ Series — How the University is preparing students for what is next",
        "date": "2026-10-02",
        "originalDate": "2026-10-01",
        "sourceName": "The Cavalier Daily",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPQU9ObVU1ZU8zZ0tBaS0xTUx6WDQwZFBCWnlsVWdYZjFrdDN2UkpHVjA5R1dsQ1ZpZEhta1A4cEZjdlUyQlFiWmQtM2x1WFNvR1BNUkFULXRaNVJxbWo0dWVxQVJyQll4WnhGN0puVkFoeTZRYkN6SkRueVRWQ3JKSDZaWVl2MDZMdUlTTWxRSkFxT1VNakpZS0Ryc2FQZThucjlZdnJxSlNNZWpfS3UweVo0ekVZbVlhMkNUVDZLZW5RTXBFMGpfY1hkQXNnVUVGV2c?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! ‘인공지능과 일의 미래’ 시리즈 — 대학이 학생들에게 다음 과제를 준비시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "10세대 Z 두려움 AI 중 8개는 무역 커리어가 호소력을 얻음에 따라 전통적인 엔트리 레벨 일자리를 대체할 것입니다.",
        "enTitle": "Eight in 10 Gen Z Fear AI Will Replace Traditional Entry-Level Jobs as Trade Careers Gain Appeal",
        "date": "2026-10-02",
        "originalDate": "2026-09-30",
        "sourceName": "Fair Play Talks",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQem1sX3N6WVZfNkF1LXBibllYcnBueHluOU1McnVBWkVqTFdXakhKNUptNkRaR0J2Wk81THBrSnFseUduYmZ0c0RiWnUxWVVOcEhoTGxRSWZFdFBkUUR6Nk9feld5S0pRaFN3VWw5TWlkajY3Slp3SFR2WVU4aFQ3UzBQd1RjWURKMk84aGlrSnNjS0lRWFBLRWwzYUhpLW8wbDdGMFo2OFJaYWFyYU96YURrZHo3Wk92cGFGRTZwWmJPYUtJdVBXT2ZhUW9JWDJoN0k4ag?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 10세대 Z 두려움 AI 중 8개는 무역 커리어가 호소력을 얻음에 따라 전통적인 엔트리 레벨 일자리를 대체할 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "‘일자리는 변화할 것이다’: 인공지능 (AI) 이 업무의 미래에 미치는 '가장 유익한' 영향에 대한 일론 머스크 (Elon Musk)",
        "enTitle": "‘Jobs Are Going To Change’: Elon Musk On AI’s 'Most Beneficial' Impact On Future Of Work",
        "date": "2026-10-02",
        "originalDate": "2026-09-30",
        "sourceName": "News18",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPaEozQWxzNV9OcUkzdmg0NGJKVmFnZEIyYUNaR2JsR1Q2UUFaelUzWGw0X2V6TjdUdDBNeV80cmp4SWFHdGg2RWxEM1Q0aS1DV0s1MWFuYllSa2VPY0w0YlZBLWZzbUptRkhDcHRueERDUFRXZWg1NUFmUDRDTVZUY3JPNXFJRVl6SEZfaEFuQW5GNTFpYlRfUGxpak5oaVIyTUJjVWdiNWpwX0xUY0ZRNVRXdXRkbXRXN252QVFHTUNfTUhQZmY1dExB0gHPAUFVX3lxTE90MzlGUlNnSWRqNjFPcmFrSWYzY2xvZTQ2cW9WVDFPSG9HQjBPQ1Y0RFkxZmE3bFZMZkQxR0lvRXZOV2VxeVUyR0RMSDNndl9lNGk4UEZUVDFWbVhJX0VuNG5LY19ERnZYMG1IOVR6dDBvXzJPNzE1anA4VTloWGxRUlhLRlZCWGhXcDFrS1BvUGNMLVJCczJEczlnankwV3RlbHpabDFxTXBUUURNTnN0TTktc3M2M0d5N0FNenNqdXhZd1ZnTzhyUElESVdidw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! ‘일자리는 변화할 것이다’: 인공지능 (AI) 이 업무의 미래에 미치는 '가장 유익한' 영향에 대한 일론 머스크 (Elon Musk) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "GPT-6.1 Sol 소개",
        "enTitle": "GPT-6.1 Sol 소개",
        "date": "2026-10-02",
        "originalDate": "2026-10-01",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5OemY4emxSNEladU40TC1hcUppTmEweWtJTnBJTkkxYlptbEpIaUhmOFFoYXUwVVI3TWxxX2tVMksyVG1CR3ZxQk1jclZvWWFHS1hPUzdOY3J2UXdweU5kbWYwOFFuUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! GPT-6.1 Sol 소개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "더 강력해진 제미나이 ‘구글 AI 프로’ 캠페인과 특별 할인 혜택을 소개합니다",
        "enTitle": "더 강력해진 제미나이 ‘구글 AI 프로’ 캠페인과 특별 할인 혜택을 소개합니다",
        "date": "2026-10-02",
        "originalDate": "2026-10-02",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNUDVTbVppMnhfQXYxQlRkcXZUOFJQQzdXazZRb0h1MHgxSm5haVowd0EwZy10Zkd4SVp6MkpLdkxCRmZCdUlnUDNVb1hmLTBZanV6X0NfUjZlSm8zX19kWHU4Zk9BOGRTSkg4VXVVWEEzbUtuVkoxYnc0U0xjZzhNLXZxMA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 더 강력해진 제미나이 ‘구글 AI 프로’ 캠페인과 특별 할인 혜택을 소개합니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "오픈AI, 반도체 설계 전용 'GPT-시놉시스' 개발 합의…'수익 공유' 적용",
        "enTitle": "오픈AI, 반도체 설계 전용 'GPT-시놉시스' 개발 합의…'수익 공유' 적용",
        "date": "2026-10-02",
        "originalDate": "2026-10-01",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE82dWF5NmkwQkZhQTBGMnJPLVF5d1p6YlhTS19rR2cwb1lZcjA5b1h0cWJxY0wtMEI5NmwzaTloNUxsd0hxSVBhVEdidWx3ZWp0WHlObTljS1hWc29PLU9UaUVObzdZb2dCZ0E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 반도체 설계 전용 'GPT-시놉시스' 개발 합의…'수익 공유' 적용 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
