/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-30
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 및 초급 직업: 초기 경력자 역할을 기술로 대체할 때 가장 큰 위험은 무엇인가요?",
        "enTitle": "AI and entry-level jobs: What's the greatest risk in replacing early-career roles with technology?",
        "date": "2026-06-30",
        "originalDate": "2026-06-29",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNN25UcmlIT21PRC1BbWMwTjJqUmE2US1uYUlVNDNOcVFmYzJQQl9zOHZadEpjUkM3UVVBUjF1Rlc1MzRKUnRhWWllcG03d1RFbHRfaGwtXzIwN3JCSXA2WlpIZE96d3BEMWRWNzJKdHhZcXlmRFdySmVPYUVxRnZ4VnFDWmNDbHdCc0xxZ1pB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! AI 및 초급 직업: 초기 경력자 역할을 기술로 대체할 때 가장 큰 위험은 무엇인가요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능 시대의 일의 가치",
        "enTitle": "The value of work in the age of AI",
        "date": "2026-06-30",
        "originalDate": "2026-06-29",
        "sourceName": "Information Age | ACS",
        "sourceUrl": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5WbXpIMzdYV2djbF83X2xMVEd3ZHR0T041UEJNN1EzYVhucGFtUHBmTndVUjZsaHV0V2hjYnhwb0s2VHk3ampQRllnc1lOZlZaRmdWVmVMVUJ6R0FVakY5UDNNejRyZ3EyMDhlaVNFc1FpYVNjclh0RW91QkFEVTA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 시대의 일의 가치 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AWS CEO 매트 가먼 (Matt Garman) 은 주니어 직원을 대체하는 AI가 비즈니스에 좋지 않다고 말합니다.",
        "enTitle": "AWS CEO Matt Garman says AI displacing junior employees is bad for business",
        "date": "2026-06-30",
        "originalDate": "2026-06-29",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPWE9Od3F5S1p3UFNGM1Rwbm9ha2dWUEpDQmdTdERsLXR2cERNMW1JMFI2NEN1VWkxcm9ydHg3Q0QwVEVvd3pjZFNXTUpMU0hfaTV5TFA4eFIyV0lHZU5ZWVpyUTVfcThEZkxrWkY1S2ZudzBNMElGN1B6TkJyc2FDWGpKM0xIc0JhRVBtREFIWDJoUkxxMS1SdWd5MUZOc1MxV21jN2xQNFdJQ3ZjZDNkOVd0NGxBaVNMUndKOXMwcTNFT2lqWnNYQjdXcGc?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AWS CEO 매트 가먼 (Matt Garman) 은 주니어 직원을 대체하는 AI가 비즈니스에 좋지 않다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI로 취업 확률 확인하고 전략 추천…노동부, AI 고용서비스 3종 선봬",
        "enTitle": "AI로 취업 확률 확인하고 전략 추천…노동부, AI 고용서비스 3종 선봬",
        "date": "2026-06-30",
        "originalDate": "2026-06-29",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1SOGVrQkhRMTlTOXR1aVg1NlJkVk1UWFhkLWxCamJMZ3czYy14c0VsakJUSEpBbm1KZ3RlTUVYUzJEVzhVWmhkRGo5eTg1Umc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI로 취업 확률 확인하고 전략 추천…노동부, AI 고용서비스 3종 선봬 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "AI가 취업확률 분석하고 일자리 추천까지…고용24, 맞춤형 취업 서비스 시작",
        "enTitle": "AI가 취업확률 분석하고 일자리 추천까지…고용24, 맞춤형 취업 서비스 시작",
        "date": "2026-06-30",
        "originalDate": "2026-06-29",
        "sourceName": "브릿지경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5yQUtrMktYZmNaT3JnbXZsb3lkeGxoVHZPQVZjSEloeXVNTmxxZTNlSTV1RC01U3RfZG01RG9uaE5LanhhcTJkb2dWb2lBV0NuWXZnTmlzdVlnZw?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 취업확률 분석하고 일자리 추천까지…고용24, 맞춤형 취업 서비스 시작 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "오라클 재무 소프트웨어, AI 기반 공급망 앱 출시",
        "enTitle": "오라클 재무 소프트웨어, AI 기반 공급망 앱 출시",
        "date": "2026-06-30",
        "originalDate": "2026-06-29",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBGVmhQNDhFRDFMazVyX3o1OFhEWHIyby1XdEhjMS1Ya3ZGajBCejZJbVI5dWlDMlY5YUZxU1B6SVJkRFBFaUlRamhpcnQtQTFWNzRSRUdBaV9qTkJrUGxWVk04VDBMYS1TNzdRdi0zR1I?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 오라클 재무 소프트웨어, AI 기반 공급망 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
