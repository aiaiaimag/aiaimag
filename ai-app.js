/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "하나의 차트는 AI의 업무 영향과 다른 기술 발전과 비교하여 AI가 어떻게 영향을 미치는지 보여줍니다.",
        "enTitle": "One chart shows AI's jobs impact — and how it compares to other tech advances",
        "date": "2026-06-20",
        "originalDate": "2026-06-19",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOeVFvOU9rUlBEQUxFbE5UQmZLZkNfWFBaSnA5MWwzNW8yMS1CZkZFWGIyOWxSb0FaajlObnFFbm9tS01aenRWRkhaSl9fakJVY1dackg5aDlpRUYyYllnc2p5Mkp5d2lqdXdMWVVvMlBnYkNzb0taMEdva1F2bTdEMzQ1T2gxWFFmYjVGcDZjSTNyQkFEOE9UcTVXQlV4cG8?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 하나의 차트는 AI의 업무 영향과 다른 기술 발전과 비교하여 AI가 어떻게 영향을 미치는지 보여줍니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI, 미래의 직업에 중요한 디지털 기술, 전문가들이 나이지리아 학생들에게 말하다",
        "enTitle": "AI, Digital Skills Crucial for Future Jobs, Experts Tell Nigerian Students",
        "date": "2026-06-20",
        "originalDate": "2026-06-19",
        "sourceName": "THISDAYLIVE",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPS1JKRWt2aG5xd1hQTFBoRGUwYjF4c3MydHhuNmVXeUhWSkdxY0JsSFg4LVFfSW82V21RMkE5UVlHRDJMdXl2TTBkSVdjR2dGMGQ1TVVlM2hCbzQzZjkxRnFGWjlIcFMwWGlFT0xaVGtEYy1jajJzQnpBNnEycEk3dlJLVnc4dExVaHpDak5JUGpwLU5wNFNwLVl3QkhCYk5aSVl5MjRBdG9XTWJNVDlybGh3?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 미래의 직업에 중요한 디지털 기술, 전문가들이 나이지리아 학생들에게 말하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "케빈 오리어리 (Kevin O'Leary) 는 '인공지능도 다르지 않다' 고 말합니다. 기술은 '차세대 혁신' 을 주도할 것입니다.",
        "enTitle": "Kevin O'Leary Says 'AI Is No Different,' Technology Will Drive The 'Next Generation Of Innovation'",
        "date": "2026-06-20",
        "originalDate": "2026-06-19",
        "sourceName": "Yahoo Finance",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOS1I0UkwwX0tSQS13TURkQmpYVmpXamJBWTU5NXo5WW10RTh1SDlUTllSRG5iSlRuLVVRWVBFaW5NN2dSblZFU3ZhdF9tWXE3YktEa1FJNklhM1drUWlsd05hbEJ4enR1Y0pHa1pTS0psdVFZVFhhVDVRbkJoOURfOHpMNHVYckxpSU4wNG5CUy0?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 케빈 오리어리 (Kevin O'Leary) 는 '인공지능도 다르지 않다' 고 말합니다. 기술은 '차세대 혁신' 을 주도할 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "오픈AI, 한국서 챗GPT 광고 도입… AI 수익모델 확대",
        "enTitle": "오픈AI, 한국서 챗GPT 광고 도입… AI 수익모델 확대",
        "date": "2026-06-20",
        "originalDate": "2026-06-19",
        "sourceName": "브릿지경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9YV05lT3E5UlQxNVc5UGtDUVA4Xy1fTC1hS3oycjkxNHJsdkUzOWdsZzFGZGE4TWFuTzFCRVFjXzktcFhLWi1FOHgtZmVYMjRrSlBPc2dsNl9uUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 한국서 챗GPT 광고 도입… AI 수익모델 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "교황청, 인공지능(AI)과 노동에 있어서 인간의 존엄성과 공동선이 지켜져야 한다.",
        "enTitle": "교황청, 인공지능(AI)과 노동에 있어서 인간의 존엄성과 공동선이 지켜져야 한다.",
        "date": "2026-06-20",
        "originalDate": "2026-06-19",
        "sourceName": "Vatican News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOaWVaVzJZeDdMMlFVRzI1a0ZoeVlPY0ppV0drMHBBU3VoT3FWekZ1V0ZvNG1wVzZnZ09GVUJXdGpJQzNRTmxIMEV3anlLa3Y4WlBrN1B3YVMwSGluYk5Rck1OdjFnUHBKTnphMm5uZFFxay1qYnBTZTNvN29kcnBzQWpVb1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 교황청, 인공지능(AI)과 노동에 있어서 인간의 존엄성과 공동선이 지켜져야 한다. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글 제미나이로 탄생한 세계 첫 AI 미술관, '데이터랜드' 6월 20일 LA 개관",
        "enTitle": "구글 제미나이로 탄생한 세계 첫 AI 미술관, '데이터랜드' 6월 20일 LA 개관",
        "date": "2026-06-20",
        "originalDate": "2026-06-19",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE4td1Z5YjdLOHQ2SUFLZ0xZRHFqalYxWW9ia1o0SklUOW1PT0RvbGF1a19zS25iS2F6OS1qNTQ0OVNUeUdRVTRqZ0hDR05MZnd6NzVUSlFR?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 제미나이로 탄생한 세계 첫 AI 미술관, '데이터랜드' 6월 20일 LA 개관 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
