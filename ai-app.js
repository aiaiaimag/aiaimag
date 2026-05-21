/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-22
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "전직 페이스북 임원 셰릴 샌드버그 (Sheryl Sandberg) 는 Z세대에게 '미래가 불확실할 때 당신의 커리어를 기록하지 말라' 는 AI 덕분에 10년 커리어 계획이 죽었다고 말한다.",
        "enTitle": "Ex-Facebook exec Sheryl Sandberg tells Gen Z the 10-year career plan is dead thanks to AI: 'Don't script your career when the future is uncertain'",
        "date": "2026-05-22",
        "originalDate": "2026-05-21",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNb2h5NTZxU2R2akRTRkJNWWk3WklHVWpnNzZnVDF6ZUZoT2FpcEx4YVlXOVN6TUNjSENnZWd6VXkwVFdIbXRVdVp1WjBZcnpCcnBMdEV5bU03WHZVUEpMd1ZvaXVRYXFWZnVwY3hIR0RHdURRX2dhNkFuRExxS29ybGVKSXZ6eHZCdXdGaTVVVUE5a3FjNzVCTTBxb3NVRTFrOTluN254N1NoN3FJYnc?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 전직 페이스북 임원 셰릴 샌드버그 (Sheryl Sandberg) 는 Z세대에게 '미래가 불확실할 때 당신의 커리어를 기록하지 말라' 는 AI 덕분에 10년 커리어 계획이 죽었다고 말한다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다.",
        "enTitle": "Acrisure layoffs raise questions about AI and future of jobs",
        "date": "2026-05-22",
        "originalDate": "2026-05-21",
        "sourceName": "WWMT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPS3B5RDdFRlNzOW90aVNPcERoLVE0SnZTSHlhMENZcHROcFNDajdiZ0xHbWV0MTNCY2pIYnRNYXlndjM3X2VUcnlaWDllbmpodnk1OXNZRE9jeW1aOWRnYlNncDl0U2ptbEQ1a1lWRTQySzQ5SVlaeXBzeFFobGlBNXpFM1c3MHVUZDVtN1JGMDdGZ0RSbDByWXh6QzJ5QW1wN1BZVTZrQTFPVnJGNGhUbGxfR0p6STBKdWJOOHY2UGNKLXFPZkZqR2xGVQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Acrisure 해고는 AI와 직업의 미래에 대한 의문을 제기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI, 인간 창의성 및 고객 중심 리더십으로 업무의 미래가 어떻게 재구성되고 있는지",
        "enTitle": "How the Future of Work Is Being Reshaped by AI, Human Creativity, and Customer-Centered Leadership",
        "date": "2026-05-22",
        "originalDate": "2026-05-21",
        "sourceName": "MarketScale",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQREVyakdQTVZnMW5KOXdnRHB5eDZfaXppeHF4TzJDTHg3OTBKMno2a1RNZ2N4U3p1UmEtWmtCcGM1RVozcUNSbVVsQWF2eXFZSnlKVGVZZmViOVk1ckI0eWpnMFVEZzU5bmlNSllWQXJ5VVZ0ZnJzRFpTN05wZnlGTXBlei1Kc2tCbGFhemYzT19xZmM5NU1tOVBTTXhZM3NPU2k5N3lqZDNfV3hJWFR5Vy13M3h1SGhIdFdqQzI4MEZUcHFna1I1LVZ2YmNBTWlpa3hNRUZPVi1PUk0xNURMZlYtdjVzaW5GUUp6TlR5cw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 인간 창의성 및 고객 중심 리더십으로 업무의 미래가 어떻게 재구성되고 있는지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[5월21일] 구글은 왜 ‘제미나이 3.5 프로’ 출시를 미뤘나…핵심은 ‘데이터 플라이휠’",
        "enTitle": "[5월21일] 구글은 왜 ‘제미나이 3.5 프로’ 출시를 미뤘나…핵심은 ‘데이터 플라이휠’",
        "date": "2026-05-22",
        "originalDate": "2026-05-21",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBGcFQzSHBwUk9LLVZZWnNDdjBRU3JPYmthNmF6ekxUSlpCMWRhSGZfMGhSTjZRSWtQWk9fdmVCRVlXSGg2T2dVdnNka19obkhic3RCY20tb2MxV0MwVEdabWlpNHZIY0thQ0E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [5월21일] 구글은 왜 ‘제미나이 3.5 프로’ 출시를 미뤘나…핵심은 ‘데이터 플라이휠’ 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메디온시스템즈, AI 탑재 모바일 EMR 서비스 출시",
        "enTitle": "메디온시스템즈, AI 탑재 모바일 EMR 서비스 출시",
        "date": "2026-05-22",
        "originalDate": "2026-05-21",
        "sourceName": "헬스조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5tRmd4aWJKVjBxamdPc0hfNy1lbWt0YXVtdFVKZTFaOEJPUTIzQ01OT1lLOTRSWHFZYU9xcFBNZm5ZblJEMmxrOU5YQ0VyNGVmTC1lN1laVTd0R2ZsYzhfMFVVa2g3R2NOQ2NOVGlHRkhrN2hCMmc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메디온시스템즈, AI 탑재 모바일 EMR 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드, AI 챗봇 10개 평가서 1위…전문가 신뢰도 앞세워 챗GPT 추격 뿌리쳐",
        "enTitle": "클로드, AI 챗봇 10개 평가서 1위…전문가 신뢰도 앞세워 챗GPT 추격 뿌리쳐",
        "date": "2026-05-22",
        "originalDate": "2026-05-21",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOa29pSmJwZjFnOW5PcW5mSXlMTUFEQnVLWmZTR0FrU0s0RDczUTBLYWtqRy1RODc0S3BmRFV6QjcwS0djRDRZRGhVaFdaUTZZc3I0SVljMGdvSEVWZzZXeTRiNkc3QjBneWU2a1AwdEVpcThLUlZfSXBnQ0ZsT3V5TFBMbHJreUQz?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드, AI 챗봇 10개 평가서 1위…전문가 신뢰도 앞세워 챗GPT 추격 뿌리쳐 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
