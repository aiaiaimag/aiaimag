/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-07
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "TechBeat: AI 생산성 향상으로 인재 위기 발생 (9/6/2026)",
        "enTitle": "The TechBeat: Your AI Productivity Gains Are Creating a Talent Crisis (9/6/2026)",
        "date": "2026-09-07",
        "originalDate": "2026-09-06",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE95QVlKVDNYaGtoSHQxeUFvUVdzUTh4QzhQUjJzX2NmQVZpc1p5ZldaWjUyS0VNVE5LVy1idFp3cUoyeDVYSHdaSHdYWWJkbUh5eEE?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! TechBeat: AI 생산성 향상으로 인재 위기 발생 (9/6/2026) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "'소프트웨어에 종사하는 우리 모두는 관련성을 유지하는 방법을 찾아야합니다.': Sridhar Vembu는 AI가 변형 될 수 있다고 경고합니다...",
        "enTitle": "'All of us in software need to figure out how to stay relevant': Sridhar Vembu warns AI could transform...",
        "date": "2026-09-07",
        "originalDate": "2026-09-06",
        "sourceName": "Moneycontrol.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgJBVV95cUxOd3lEbkpxQVMwaGFIajRnNE1PSEtDTTk4czg5bHZNNWJhdEpyWTlqcjV3b2hmSzBpdHVQeUNackNOQVpVNVZHUHJCY1dvTzRVa3RSSDdsNkhnaUhxa2dzUlRZTmphNkZKbTFOZm1XeG9jcnNEVmctbVBRSkx0a2NBVGRjSF9BckZLRFJVekxsY0NCa1hkY1EzaEZNVTlPZHZRSFM3U0FLX0tYLUJpY01ZdFJqc25raWlYUkdadXdvSnIzOEY1RUMwdVpJbktZQlFrTXFwcEN2Y21uS2p0OExJMXhkNHg0cV84ZjRIM0pEb2RrSkNwSThLcTB4UGJscnhvOTdqVG16S3ZxQ19reHfSAZMCQVVfeXFMT0E3Xzk2MktLZjF2d2tRMV9Da3lTbERyS3B0VGZJX1VyV3NCV0I5VVFJX25BYkpiMjRjNVp0aUpPd3BvQy1RTVRObUktb0F2OF9zYjMwNVFDeDBJcFVBS2RZd3Z0aXByMHRGZjNUaDh5QWp4SW04NXI1SnFQSXl5bWg4UVNIY2ZZWFRZbnAzZDNDdm1FN2F1VC05dC04ZjBLdDhEN3ctMjNMdUFJdXIxeHlwZkdNZC1DRDMtSkxiM0hmdjdOWDBJcEFZQ245YVdJV3dBbWlIVFl6cThCNmZXUG85TE5IdTRrcGp1UG83LTJiRndCc19tUWliU2Q0bFpfNXhZVk4zYWhGNWlQWTJ6dTlDc0E?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! '소프트웨어에 종사하는 우리 모두는 관련성을 유지하는 방법을 찾아야합니다.': Sridhar Vembu는 AI가 변형 될 수 있다고 경고합니다... 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "빌 게이츠의 AI 직무 경고 및 개입 제안",
        "enTitle": "Bill Gates’s AI Jobs Warning and Intervention Proposals",
        "date": "2026-09-07",
        "originalDate": "2026-09-05",
        "sourceName": "quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQb29NVFB6M1ZNMTBVbDgteWhTc1dVZi1HQVQ5a29wWFZTMFNNYUZSSEd5dV9oUC1pU1lYcWRFMUdqVFBEZ3ZQWlhXeGFaNkxPdURCZkVBZ1lrd3JMdlk0N2NSSjN2VG4xOVRQXzF3RnJYWFJQQkFsbTBSb2dGaFVOSmhsRkcyOVEtcUdNV1RSTDd0VFBORkd2NERNY2hLLUZIWmc?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 빌 게이츠의 AI 직무 경고 및 개입 제안 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "중국, 온라인 사기 방지용 AI 앱 출시.",
        "enTitle": "중국, 온라인 사기 방지용 AI 앱 출시.",
        "date": "2026-09-07",
        "originalDate": "2026-09-06",
        "sourceName": "Vietnam.vn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNQXZCRS1yVXN4NjA0aGI2OG0tbUNnZC1NWDJhRWFOeDA5aUk3VjhDSzY5Sk01Y1owTVNWeWx5TWNaODh4Yk9hSXh2UTA5UGxtNUpNbWdGOWtzNERxRV9SelhQSVhrajA4VjZtOGJCNWdpMlpiamVpcUgtaDRzYldTZjdTWFNERkE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 중국, 온라인 사기 방지용 AI 앱 출시. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "구글 AI 제미나이는 왜 ‘작은 모델’만 빨라졌을까",
        "enTitle": "구글 AI 제미나이는 왜 ‘작은 모델’만 빨라졌을까",
        "date": "2026-09-07",
        "originalDate": "2026-09-06",
        "sourceName": "포춘코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFBSTWVESEhmZU9mVDNJZVpSQ3FDaFdDTUlwdkhxNW9CX2VBQTdXRkZKRVYtZWNWa3huNVQyTVRzYldRRjRvZW5LRElPa3NZNjF1LUt0LVQ2T0xGdDBrM2xPSnRhYWg3LUFyUzNWV1dBWGpwd9IBdkFVX3lxTE14cmdKcW1lVFpzUGJXbHRMNWZ0aVZvS2NSR3dpaksydTAxNk82dnNTejZKZms0MUdSN3lDT0VvRkxBc0ZFZEw0MW55VXRYNVRhbnVCWS14M2xxMXozVWlTb01KRTQ3QkNCOHJMMXZpUXpkTS1rcWc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 AI 제미나이는 왜 ‘작은 모델’만 빨라졌을까 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "서울중남부AI조합, 중소기업 '돈 되는 AI' 찾는다…무료 컨설팅",
        "enTitle": "서울중남부AI조합, 중소기업 '돈 되는 AI' 찾는다…무료 컨설팅",
        "date": "2026-09-07",
        "originalDate": "2026-09-06",
        "sourceName": "신아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1abWxvNjZzazBKUGkyQzM5dnp4NjFYSFN5LWFaWllOQWd4TjhvMFp6VFJHYzB1T2dxaGZ5M1QwZ21penRDZUZPaEI1RFV4UG9jOE4wZXdaajI1YnFId0Eyem43MFJnTGg1QmRsRm5MaGU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 서울중남부AI조합, 중소기업 '돈 되는 AI' 찾는다…무료 컨설팅 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
