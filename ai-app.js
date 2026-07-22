/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI를 위해 초보 수준의 일자리를 줄이는 회사는 미래의 관리자를 잃을 위험이 있습니다.",
        "enTitle": "Companies cutting entry-level jobs for AI risk losing future managers",
        "date": "2026-07-23",
        "originalDate": "2026-07-22",
        "sourceName": "qz.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFB3S1dYWktpcmktLWxRNkxkWXRNcURtdktMdWkzVzV6UUxkMmRaTVNrQ0dHOXBqNlV0el9KODZQcEI0a1N3ODVYWTFtdm12SGtCZkhHV2tLdDRHZV9XUjlN?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI를 위해 초보 수준의 일자리를 줄이는 회사는 미래의 관리자를 잃을 위험이 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 시대에 대학, 비즈니스 리더가 업무의 미래를 공동 설계할 수 있는 방법",
        "enTitle": "How colleges, business leaders can co-design the future of work in the age of AI",
        "date": "2026-07-23",
        "originalDate": "2026-07-22",
        "sourceName": "The Business Journals",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNaUl6R2E3cmVmUXZjSkhzVFF6c2phU0pIZmVjbU5PaDY2V1J6SzFLTmJsVkhSbWFMSXJJbllGMGM4Rmt3eF9DMXVrTnFWWFV1SXBMZTVsTkJBbVByR1VFOVd2c0NFME5MUFg3ellrSk1mV0tvX0NLWEdmckw3THkwMzJVR3F6alZHd19NSXlMalpwWW9ZV2YwM2lrSG9Cd3daVEE?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 대학, 비즈니스 리더가 업무의 미래를 공동 설계할 수 있는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "EU 집행위원회는 생활비, AI, 일자리 및 돌봄에 대한 사회 정책 의제를 검토합니다.",
        "enTitle": "EU Commission reviews social policy agenda on living costs, AI, jobs and care",
        "date": "2026-07-23",
        "originalDate": "2026-07-22",
        "sourceName": "INSIGHT EU MONITORING",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOWDkzeFFtOEdXVkJJeUMwSUR6SDVTQ2RLUEF5dFFsUEU4LUNFTXZFUWkydE1EUXZUV3BSa1hHMEpGSFE0aTJrYjQySEx0aDg0WXYwX2gzZFZDbF9mdktVY1hNZGJzRVpZd1JZTFhscHZCOUVzUUsxQTdKNW82RXhHWmgtbk5rOEVQeU96dG0yMkFLNmRvcklGSjEzeHA0ZG1iNWhfZXZ5Uk9HYW51bXBEMTJJdFBSalBzOFRLcDVWRUZHU09SaHVMNjFjcmxpSUVZZUlLNkpwVkw?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! EU 집행위원회는 생활비, AI, 일자리 및 돌봄에 대한 사회 정책 의제를 검토합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "‘제미나이 3.5 플래시 사이버’(Gemini 3.5 Flash Cyber)를 소개합니다",
        "enTitle": "‘제미나이 3.5 플래시 사이버’(Gemini 3.5 Flash Cyber)를 소개합니다",
        "date": "2026-07-23",
        "originalDate": "2026-07-22",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNZEVVWkFOTEdXMi1ySUl5MWpBdkt0QkZGT01kbDlxMldfVnNNTVFTSGRLbTdQSjZDUWtEbHp4SFFHeEYtZEFPR3lsUGkzaGNTSU4wUEdaZFVwNzh0b09GTTlsSEJYNDljS2dQSWtpZGJ2b2ZXeXBmOG5lVkJKUWlvdmVYNHh4Q3dqQ2NPbmxOeVA0SGlV?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ‘제미나이 3.5 플래시 사이버’(Gemini 3.5 Flash Cyber)를 소개합니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 뉴스] 구글 ‘제미나이 3.6 플래시’ 공개…빠른 AI가 앱까지 만든다",
        "enTitle": "[AI 뉴스] 구글 ‘제미나이 3.6 플래시’ 공개…빠른 AI가 앱까지 만든다",
        "date": "2026-07-23",
        "originalDate": "2026-07-22",
        "sourceName": "아웃소싱타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFBOd0hDNGpnYVE0UVlJNHc1aVhIYzZaeVpsWllKdmY5ak1vNTJVOVF3YzN3SDNDV1ZjRzVvaE1FUlVvUFMyNVJmQjU2RnFPUXgzU2VONGJ6NENiVG1GZGowTzZJM3dkOFlDNlJKVUpNLXN2dw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 뉴스] 구글 ‘제미나이 3.6 플래시’ 공개…빠른 AI가 앱까지 만든다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "서비스나우, 구독 매출 25% '깜짝 성장'…AI 수익화 본격화│Global Money Club",
        "enTitle": "서비스나우, 구독 매출 25% '깜짝 성장'…AI 수익화 본격화│Global Money Club",
        "date": "2026-07-23",
        "originalDate": "2026-07-22",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBRTVVCeFFXQzhmOTZQWl92SlBJSUhEYkk0Z3Q2amFkYW41M3c4dDJnTmZ0cnRKSFd3SDM4cnJRckRMbGdxYk1QMkZ2R28tNWhHeGZiMUJQNU93SzA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 서비스나우, 구독 매출 25% '깜짝 성장'…AI 수익화 본격화│Global Money Club 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
