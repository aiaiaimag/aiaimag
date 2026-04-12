/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Palantir CEO, AI가 인문학 일자리를 '파괴' 할 것이라고 말하다",
        "enTitle": "Palantir CEO says AI 'will destroy' humanities jobs",
        "date": "2026-04-13",
        "originalDate": "2026-04-12",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPYUpnTUFwQWpmQURZdzYxblotNzJjMFZROU1TQ2hZdXp5bkFNdGdnYUh6TWk3M2FETUJmQVRWRG91MU9hRHpUNnJVYllybGt3NkZQWFExdjJZR0FlUC1fX0FjdVVXR1FQTXR2azNfY2NUcjR6WHVtNjM2eU5JUTVqWG44M2FQbkFOdUh0eEo3T0pIZ25h?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Palantir CEO, AI가 인문학 일자리를 '파괴' 할 것이라고 말하다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "스카이 뉴스 오스트레일리아.. 스카이 뉴스 비즈니스 편집장 로스 그린우드 (Ross Greenwood) 는 AI의 증가가 급증함에 따라 모든 사람이 \"직업에 대해 걱정해야 한다\" 고 말합니다.",
        "enTitle": "Sky News Australia. . Sky News Business Editor Ross Greenwood says every person should be “worried about their job” as the rise in AI surges.",
        "date": "2026-04-13",
        "originalDate": "2026-04-12",
        "sourceName": "facebook.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPTWtfZGh6N0g5TVVZLUEydl96MVpEVnVrWml1c2EycnpQN1liYS1TQ203SnNXUDAyYjM4UzlweGhQM1k1elBGMGpWVXJTR3dDclNkMDFuY1gxeHVKbzRQNjlhaGNIRS1mUVdNdFlDZjZqQXZxMUpPZzNVTnZqWmtrUzJqQVZ0a0ppZnNlaHNrTkVtSlUwWkJyUTlWVjFaSEZUYmZkdXJEUHJxM3IwVE9KT2o3d0R0cjM1S3EtT1NmbVZCU3k5c1FjVXExZTExa0JSS21xTHlB?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 스카이 뉴스 오스트레일리아.. 스카이 뉴스 비즈니스 편집장 로스 그린우드 (Ross Greenwood) 는 AI의 증가가 급증함에 따라 모든 사람이 \"직업에 대해 걱정해야 한다\" 고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Sky News Australia.. 링크드인 경제기회최고책임자 (CTO) 인 Aneesh Raman은 현재 일자리에서 AI에 대한 대화는 \"너무 부담스럽다\" 고 말합니다.",
        "enTitle": "Sky News Australia. . LinkedIn Chief Economic Opportunity Officer Aneesh Raman says the conversation about AI in jobs is “so charged” right now.",
        "date": "2026-04-13",
        "originalDate": "2026-04-12",
        "sourceName": "facebook.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQRHRLY3hSbnhPTFJTb2UyMWRCOUJGd0l0Nl82RE44ZFZaOFR0TUY4Sm1vY1JoMndyamFTSUREclIxUUtmOXpGZFFRRFk4VTFVSW9FaXdnTndpWUtJbWlkZTRkcEg2MGRPeVZJLXJweGlsMjRGUUd5UTRMM0tGWHpTeXdzdm5yUHl4UTFrdEcwdnd4NWZwVnZMMlJNSlNmT2t4eGxfRDBkMWxuMHBzQV9jc0J2R2YtTXdsaGFleTY5eVRXSFFqZHFiYlJDeDhIdw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Sky News Australia.. 링크드인 경제기회최고책임자 (CTO) 인 Aneesh Raman은 현재 일자리에서 AI에 대한 대화는 \"너무 부담스럽다\" 고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[fn 이사람] \"기획자가 설명하면 AI가 코딩 척척… 서비스 출시 빨라질 것\"",
        "enTitle": "[fn 이사람] \"기획자가 설명하면 AI가 코딩 척척… 서비스 출시 빨라질 것\"",
        "date": "2026-04-13",
        "originalDate": "2026-04-12",
        "sourceName": "파이낸셜뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE94cVdiWkVzV2ZWNUV6OWN2YXFUbXVzWTBaZVVfY3JTTlkzYzAzOTZYd1ZjM0Z5NHdGS2VFTXduZFVHX1RRZHFGaFc1ZUQwWER5RktZR29xQnNRQdIBXkFVX3lxTFBlNFZDSXBncEMtOFlkWGk3dlFhQURzM0JQbG9tWVp4ak5SLWhTTURPWE1SME80YkVwdnIxYjdoeVJxdHhKSlk1NEtvb2VFWjBvXzd1X3FjUXJmUGtnVkE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [fn 이사람] \"기획자가 설명하면 AI가 코딩 척척… 서비스 출시 빨라질 것\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤스로픽 ‘클로드’ 인기 급상승…오픈AI도 추월하나",
        "enTitle": "앤스로픽 ‘클로드’ 인기 급상승…오픈AI도 추월하나",
        "date": "2026-04-13",
        "originalDate": "2026-04-12",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9iQW9zbW1ZclZod2ZzMHE1UTkyYWUwMzV2d2Q2ZWFRMnFmaFUzbU9CU1plMWRUMXhTc2d5b3VETmlxWWw0YmxVOEZDZVpFT2s?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 앤스로픽 ‘클로드’ 인기 급상승…오픈AI도 추월하나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "국내 AI시장 판도 흔드는 클로드, 10위→3위로 껑충",
        "enTitle": "국내 AI시장 판도 흔드는 클로드, 10위→3위로 껑충",
        "date": "2026-04-13",
        "originalDate": "2026-04-12",
        "sourceName": "동아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5IcUZmSkxMc2wtNTM5WTh6eU15ZGN2akhIc1M2NHppX2NleDFDNnB3WlhtMzZtTDcydjFLaUhFUXRIeUdsVEpYQkVCX2dZY2JJX2FQX3ZkSm92Mm5nSkhObVUwWHVwM1JyT3lCZTV3X1BTWF9JYkHSAWZBVV95cUxOYmYxWVZXbDh6Z2ItYnI4bmNqY2E2VWZkbEd0a0hYVUZkQjZsNkZNNTdaYzM5NWlRdnZUbnNhSFRpQVVzOC1TaXlvMUVxbW1ZTTdNZW01T3NoWjFlQmpjTko4aGY2R1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 국내 AI시장 판도 흔드는 클로드, 10위→3위로 껑충 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
