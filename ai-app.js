/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-02
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "IIT Madras 백서: 일자리와 인도 노동 시장 재편을 위한 AI의 역할 탐구",
        "enTitle": "IIT Madras white paper explores AI's role in reshaping jobs and India's labour market",
        "date": "2026-11-02",
        "originalDate": "2026-11-01",
        "sourceName": "EdexLive",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQUUFuc1dYcE8yaVR1NHRlWW9IY1hja3hSYldJSFpWZUotUWJUOWJuMF96WndVUkx3VFBpY2hiQnhuNnc0blBXSlhpX0dIYlVENHc3VHkzd3dGbTVlcDhEV1pLSXBwdWVHTFlHczlmM1htUHlPLVN4MnFEMGZJczluN3pXckFQMkJWM0ZZTW1MRTl4NkdmU3VuU1o5WXQ1MGk2cEg3TkQzb1JWQ1RQRUdFOVRuZ9IBwAFBVV95cUxPQVFGTlhwSWdxdzhlekhwSnEtZWJ0VXRQS0hYTUxVdnc4dXhVd0NXN3R3ZnNkOWc2R0xFVEFaNWhpcWVZTWlTbGlSaHdxMUQ5ZGJZMkdwWlh3UV8yaEhaVmdpUEExbTgzb3NfUzlXU0podG02TEN4VDdKYkVKTHlVbFctYXFVVWlTdE9RWXlIRGNsQUx3YWljbFppLXhRSWtvWHM3cHowek9nX19tR1EySklfanVrLVdNZkh2TFIwdkU?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! IIT Madras 백서: 일자리와 인도 노동 시장 재편을 위한 AI의 역할 탐구 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "2027년 기술 트렌드: 일자리와 비즈니스를 어떻게 변화시킬 것인가",
        "enTitle": "2027 Technology Trends: How They Will Change Jobs and Business",
        "date": "2026-11-02",
        "originalDate": "2026-11-01",
        "sourceName": "Analytics Insight",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNNDRVdTh5UldFSG5UVkdzLXR0bmZTNU5KcHAxTVBJZjFwMlA4YmNHTGpQc0VQY2pCOEhBS2N5X21oTWVtSFU0R3B4YXpBZXhtQ2FwX2o3NVg1MEpGM2FOTWhfQlpRSGJmZ3FXVmdRMXlKR2ZhR2hieER2SVVOZ1N1NGZKdmhGTVVRR1BaRklJTHFQM2VpS0NSMW1jNS12ME5MR0Vpa2xoTzk4MzZXVUMzTEQ5UTFwU3N1SkHSAccBQVVfeXFMT0pnamdGSE9FT05KemttMmQ1SXBuYS1sQV9GazRQQWZOM0RmTjg4Z0R2UGx1Z0hCS1YyTWM1SjNocDRjLVVQY3BfYUVvV1RhWXh4OHRkUHpQWTh6VERhV0NBZzEtQmJaMVExVFEwR2xFSTlwTk1wSFkxOFBrTkpsM1hPdF9kSGZqS2NIUDNyWC1Xa25RQ0F5VjhQZ0Y1aXRtQlFFRnU5WlR6QTNHaWtlaFNrSFhuNUt1UTlqOGxybDF5S3ROd3VSQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2027년 기술 트렌드: 일자리와 비즈니스를 어떻게 변화시킬 것인가 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "시간적 가치가 있는 2027년을 위한 5가지 AI 사이드 허슬",
        "enTitle": "5 AI Side Hustles for 2027 That Are Worth Your Time",
        "date": "2026-11-02",
        "originalDate": "2026-10-31",
        "sourceName": "MoneyLion",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBBb2lmaFNLMVc1S3Q1MUhJajlrcUJZNWsxc3p3Ull3cXFUbUo2bEJPcVpjNWdhaExiQi1jWnp3T0N4NTFnVW1VOFQtUmExbHlpZGJtWG5Xdy1mV29FQXBCUUpuamZPZ2lGR1lYOUVLbTFRYkRXb2xDcA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 시간적 가치가 있는 2027년을 위한 5가지 AI 사이드 허슬 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제천시, 인공지능 민원 응대 서비스 'AI 챗봇' 운영...충북 최초",
        "enTitle": "제천시, 인공지능 민원 응대 서비스 'AI 챗봇' 운영...충북 최초",
        "date": "2026-11-02",
        "originalDate": "2026-11-02",
        "sourceName": "굿모닝충청",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE16eUZCUHNfNE55NXRuVzlHbWZVSlF6aXZFUXVKeHRnWWhmQ1R5YVFQQW5ISmpaWmZNTE5PeW1zQU5ZY3VaMi1xTFB1TFA2c0VuMGp6UUpEdkJCMmRXTUpJTEk1N0NFWS1CWjRtWkozcXhfZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제천시, 인공지능 민원 응대 서비스 'AI 챗봇' 운영...충북 최초 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT와 Codex 사용 한도 통합",
        "enTitle": "ChatGPT와 Codex 사용 한도 통합",
        "date": "2026-11-02",
        "originalDate": "2026-11-01",
        "sourceName": "GeekNews",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBYdmV5ZVMzenpZckdKYUdIRFF0QmU5cHlNRm9rbEJwRTRUYUFLMnQ4bkxPX0dyWDVrUU1talRqMHhkQnRDRlpSdUlWOA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ChatGPT와 Codex 사용 한도 통합 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "신한증권, AI조건검색 서비스 '프리미어 AI 파인더' 출시",
        "enTitle": "신한증권, AI조건검색 서비스 '프리미어 AI 파인더' 출시",
        "date": "2026-11-02",
        "originalDate": "2026-11-02",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9WbGthNENYMUROaENkdmYtSVJkZ2hSZDJVZGhDSWw1VDU3MEZ3QXNqZ1FyODZrcFBYY3FWUkhwSHVWRWVwS2ZCUUEtOGN3eGpUVFpaT0lkbFhTaVk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 신한증권, AI조건검색 서비스 '프리미어 AI 파인더' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
