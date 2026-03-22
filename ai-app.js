/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능이 성평등으로 가는 길을 바꾸고 있나요? 이번 달의 직업 및 기술 동향 및 기타 동향",
        "enTitle": "Is AI changing the path to gender parity? This and other trends in jobs and skills this month",
        "date": "2026-03-23",
        "originalDate": "2026-03-20",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPT1RHUUF0REhkSFZiTXkxdDZOLWJhTllmNTFxX0F0b2NWd2g0YUFReTZybzVXUllRNy0xMklaSjFmX1ZzVmloYlB1M1FKblJrOEVuOVR5LTZJVEp0b2w1MVYtZlhFbUhGVjc5cTZhS05TM0xIVERNUUVXcXl0a2Rfa29pTkNVTjZ4SDBz?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 성평등으로 가는 길을 바꾸고 있나요? 이번 달의 직업 및 기술 동향 및 기타 동향 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "엔비디아의 CEO는 AI 도입이 점진적일 것이라고 말하지만, AI 도입이 타격을 입으면 우리 모두는 로봇 의류를 만들 수 있습니다.",
        "enTitle": "Nvidia’s CEO says AI adoption will be gradual, but when it does hit, we may all end up making robot clothing",
        "date": "2026-03-23",
        "originalDate": "2026-03-20",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPNXM0ZW9UcWluM3ItZV9xNmxFTzdTU05QQld3MnVJWWJ4NEZPSjNjbk0wbjY2V2RNV1VXS3U2Y2tWaHl0bk16eVlVcUxNWGtDRzBzMXdfcUhzeF9RMnBISEpKUlhfRmJ4eDZvbVNicURIVndtdnMwM0VZRjhTbEhJQWN1NjhCb3hDQkRWaXhvVzFzcUk?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 엔비디아의 CEO는 AI 도입이 점진적일 것이라고 말하지만, AI 도입이 타격을 입으면 우리 모두는 로봇 의류를 만들 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI로 인해 향후 10년 동안 전 세계적으로 3억 개의 일자리가 사라질 수 있습니다. 골드만삭스",
        "enTitle": "AI disruption could displace 300 million jobs globally over the next decade: Goldman Sachs",
        "date": "2026-03-23",
        "originalDate": "2026-03-20",
        "sourceName": "ETHRWorld.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQOWtEYUVYZng2Sk9QaWY0cHVMUUhhRzVDbzBYRXNxaDFMUUtwekU2UUNQdFpvcDQzTlQ3MGtsMkd0c29KVExVR2kzaXdYcGUtQ05qLWRkcm1GLXc5MEFaYU80enUySUJjT2oxOEszNzJYandsZnN5cUJMUmlscnhVTzZRRm8wclRwWmV0VHRMWFRPOW5VeDliVjNXQ2lzWFRGZ0FWRW90UmZVcHlqNnFoZ0RJcDR0VEI2eDBUcmc3LUxYQ3ZJOGxCTXZuYUFnLTdpbFB3VUFTd3JFSkthOVlpMTBHMmRXSkcx0gHuAUFVX3lxTE1NVVBiRjRJd3JVV0lGQkRGNU9hOVlPVkdSVEN0TVRhZjgtajlEalQ0ZkpZSERnT0VDYUs1MnBIQ21IMGk1WDZjM0RBdmNVZ3FlUGdzcWc4TlZ6c1R2NGlFMTNtcTNrYzVKNDZUSmpuWDI0VVh6aVFWRXFWRGIzN2lpODh6bEtGZU9oZWMxRktNVndleE11YU1YcEhXbHQ2WjBaUGpaUGVkMkQyNUhlMllIRll1Z2o4MUlSbEV0UzRKMkc0eHlDNzBlME5DOHZNR2w1eVZJQk1ja1dPNEFySXVTeXFLVzhHeU50RUhaSWc?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI로 인해 향후 10년 동안 전 세계적으로 3억 개의 일자리가 사라질 수 있습니다. 골드만삭스 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "와이즈레이크, AI 양돈 경영 리포트 서비스 ‘인사이트 피그플랜’ 정식 출시",
        "enTitle": "와이즈레이크, AI 양돈 경영 리포트 서비스 ‘인사이트 피그플랜’ 정식 출시",
        "date": "2026-03-23",
        "originalDate": "2026-03-22",
        "sourceName": "livesnews.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE96NkxHU3FQeVh6YVVwbXluaERjTGx2eFUyWFdWY2hvcldYTnl2a2RIdzU1dGpJby1EcHhFb0k2OGduSHYtNXdEMTBxTUhPQmtWaWRGMk5EWjhRb0dD?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 와이즈레이크, AI 양돈 경영 리포트 서비스 ‘인사이트 피그플랜’ 정식 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "중소기업들이 GOOGL, META, ChatGPT 광고에 대해 말하는 것은? By Investing.com",
        "enTitle": "중소기업들이 GOOGL, META, ChatGPT 광고에 대해 말하는 것은? By Investing.com",
        "date": "2026-03-23",
        "originalDate": "2026-03-22",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1rTHQ1QVhQRlloVFdBbkRYVHRHQVJRdW04bVVKUGNYZmFDbVNUNkhmRFdmWXppamNEX3Q2RVVQdWFmTTFZN2lUMU1CT1lrTDZYMm5GNGNWTkJCRjh5em1hMUF1N2RvaVJGa1NDZDJxaEk?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 중소기업들이 GOOGL, META, ChatGPT 광고에 대해 말하는 것은? By Investing.com 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "오픈AI, 챗GPT 무료 서비스에 광고 도입 검토…수익 구조 전환 신호",
        "enTitle": "오픈AI, 챗GPT 무료 서비스에 광고 도입 검토…수익 구조 전환 신호",
        "date": "2026-03-23",
        "originalDate": "2026-03-22",
        "sourceName": "비즈월드",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5mNjZwRFpTelpkZl9sVnZwVE9xUC1MdWUzYXJiODB3VV9sMUdrQ0NVOXdIMUNCcmNtQzI4WjJYQ1ktajdPV2hjLUZyM0tCSDRRb0VoUHpoZjY4T01wc256c082VmtlQTBVckE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 챗GPT 무료 서비스에 광고 도입 검토…수익 구조 전환 신호 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
