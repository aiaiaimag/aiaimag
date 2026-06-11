/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-12
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "기업가가 AI를 사용하여 일자리의 미래를 바꿀 수 있는 방법",
        "enTitle": "How entrepreneurs can change the future of jobs using AI",
        "date": "2026-06-12",
        "originalDate": "2026-06-11",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQTmFYcHNJcUFDbUQ0ZXdGZHJCZ1JqOTEwRmZiQWtVaHdfRVppRXQwbEJfQVdUaHRkR1lTWmYySEhOVHNWVTk4MlBLSklBWkJOMFZlV3dXTG9nei0taFFlUFB5bW4yMGczR1BxSS1QWmg2R2taTm90d0duUVdTenczYV9kNjlsVmhsZXU1eWhHbnY?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 기업가가 AI를 사용하여 일자리의 미래를 바꿀 수 있는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "클링 AI, '한국 야구 트렌드' 로 전 세계 42개국 앱스토어 차트 상위권 진입",
        "enTitle": "Kling AI Tops App Store Charts in 42 Countries as 'Korean Baseball Trend' Goes Viral Globally",
        "date": "2026-06-12",
        "originalDate": "2026-06-11",
        "sourceName": "The Manila Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxQV2dHUENid20ySEppMWJ6OE90YzQ3R2g0ZW5Ob2xncGl5MTdVazBrX2JuQXpycmVpTFZCNTJ5Z0l0OEx5blFxTE9oa1NybU8taTRlVFA4MFRfY2FrRVFZcGFUbjFvVFhSblE3TUZqRWc5VWZiWVU3T0h2ZGUxcmhEWW11aVZpWWFVSGp6TlExTGVNYTNrYTdSSjljVktPQjVqQzdjR25wQUdVRUY3bllNYWZMTnpoZlRNam85YVpvMjlJY1pLZWlzSndZR05pdEl0aW9ueGJrWm5fX0NoUUNoTTI5VmNFTmt5S0xSZVpaYUR4cWlI0gH6AUFVX3lxTFBKS05xUnNEcGpRbkJWbUdOOXVtRjVXWFVsN1k1a0dBSFFVMl8yQTZ5U1UzdU4xd19wMXpmXzg0bkNuQ2dvekhhaHFGRWkxUXk4T20xcHFEMi0tS2QxZDdMWTJPX2xtazVaM2xuUVR1UzZnZkdSbm1URzdZUnNHWm9wc0NmWmdTcGt0N0dEeG9jSlo4TGxZTFFDS3U0bGZjVjAxaE9IYzZ5SGpGS3pxODdLdEMwZl8tSFJUZjA0THVsbFhGMWljNEtkR0s3Qm16dnE5UVNoUWt1QUo1ck5LWUVITHZuWFNkRkx5d2NVNkF0SWFEMTJyWTFCX0E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 클링 AI, '한국 야구 트렌드' 로 전 세계 42개국 앱스토어 차트 상위권 진입 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 절대주의는 우리의 두뇌를 깨뜨리고 있습니다. 우리가 팔리고 있는 종말론적 미래는 피할 수 없는 것이 아닙니다.",
        "enTitle": "AI absolutism is breaking our brains. The apocalyptic future we’re being sold isn’t inevitable",
        "date": "2026-06-12",
        "originalDate": "2026-06-11",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOSWc4aWFjWUFGdjhMYlp1UDJkemlXdzJnY2l0RHpxQWJaaV9OMG5OVXB1TC1qQXM1SXppVUxhRXJydmV0dzZkVTNNY2VMQ3hOaTZKNmozeXI3UkwzQUc0enpoWkVBSkdPbFdXcXJiOTd3TzRKeUpFTzJZYmczcWswRC1GRUEzUTF3WEFv?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 절대주의는 우리의 두뇌를 깨뜨리고 있습니다. 우리가 팔리고 있는 종말론적 미래는 피할 수 없는 것이 아닙니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "우리은행, AI로 신용 관리 돕는 '포용채무진단 서비스' 출시",
        "enTitle": "우리은행, AI로 신용 관리 돕는 '포용채무진단 서비스' 출시",
        "date": "2026-06-12",
        "originalDate": "2026-06-11",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1CNXVHYkFZekpodGxlMWlvRVRDU2MwdkhKOXNqRUlpV3NmeHJqRGVhVWNzU1l2aUZrM2NKTk8xcXZUSGZOeUg4QXpJYXRnNDM3S2dNUmVUVFo2MWRkUjhsMtIBYEFVX3lxTE1CNXVHYkFZekpodGxlMWlvRVRDU2MwdkhKOXNqRUlpV3NmeHJqRGVhVWNzU1l2aUZrM2NKTk8xcXZUSGZOeUg4QXpJYXRnNDM3S2dNUmVUVFo2MWRkUjhsMg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 우리은행, AI로 신용 관리 돕는 '포용채무진단 서비스' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "한동대 기술경영학회, 소상공인 맞춤형 AI ERP 앱 출시",
        "enTitle": "한동대 기술경영학회, 소상공인 맞춤형 AI ERP 앱 출시",
        "date": "2026-06-12",
        "originalDate": "2026-06-11",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5DR0poUjBBVHQtMlF5dEd3Nml2ZElsY0lkVkhrT1hmWWYyR2tGUW4wTmk5bGREWEg5QkJ4WTc4SnFYRWs3V2lxRHFzUkw4alNyRldTNU5yWXJ1VnhPRUZEblJPcklOV25jOFE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 한동대 기술경영학회, 소상공인 맞춤형 AI ERP 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클로드 페이블 5 출시, 구독자 이용 기한은 6월 23일까지",
        "enTitle": "클로드 페이블 5 출시, 구독자 이용 기한은 6월 23일까지",
        "date": "2026-06-12",
        "originalDate": "2026-06-11",
        "sourceName": "itworld.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2wJBVV95cUxOM24zY093THEyd3ZTSmwwMHc4YzRraWxkZ1lKSW5rMDZ2b1NBVlBDNGMwMTE0bFhpa1RPcGFkSDc2eWlkVkxDajJtMDdBSzdwTUh3a1BXY05rZUtrSXp2bkczLUE0NEFQa1ZjSS1nbWRBOWFFd2hzak90blR2emN4dHlhYUhCNkVnZHFPNW91V29zcnBmRUtiXzl3SlhVaTE0cGd0bmFwMHpDN0txWmhseWs5a2x2WlpURmdBZGhPRE4yWEVDUnRHMzJaaHA4blpwVFJhU3VEWWtPOFFQZldmR1hzSWpyYWJzS0dHeHEwemszUWktLWg1eWlfRW4tZWxjdUJjcUFoMl8yQURWZHl3LWRmakZ3WWJybFFCdWhENGpKQ21jZXNBR29NaEppTVJBTXNFalBBQmtkejh1S0NIb2U0cC1BYmdXeDM3VFlsTUhKdzg1YUFzYXFZRQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 페이블 5 출시, 구독자 이용 기한은 6월 23일까지 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
