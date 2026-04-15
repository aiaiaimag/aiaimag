/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-16
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "CEO, AI의 ‘영광스러운 미래’ 는 일자리를 잃을 가치가 있다고 말함",
        "enTitle": "CEO Says ‘Glorious Future’ of AI is Worth Workers Losing Jobs",
        "date": "2026-04-16",
        "originalDate": "2026-04-15",
        "sourceName": "Newsweek",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQSV92anAyWVhDbXBGRVo4akt3UXViemZaNVNhcHRSNGJKT21iQVFkQUlaMDlPYTJLZ1ZuVEE0YnhKSjc5UUFrME1VOVcwazc4QnhVWHB6X3p1elY1ZlRRcmZrZEFWb1ZsRTNQQ3drd2JhamlzUzJfT0ZWckRCU2R3LXVMekhndEEwVWw0bHl5WDk3R2JET2c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! CEO, AI의 ‘영광스러운 미래’ 는 일자리를 잃을 가치가 있다고 말함 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "2026년 자동화로부터 안전한 일자리: AI에 맞서 확고히 서 있는 실무 중심의 사람 중심의 역할",
        "enTitle": "Jobs safe from automation in 2026: the hands-on, people-focused roles standing firm against AI",
        "date": "2026-04-16",
        "originalDate": "2026-04-15",
        "sourceName": "Freelance Informer",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNWVFrVG90SVdkc0hvTXpYREVqalIzUGRkSEZPZ0x0NVJOSVlUYVpUODB6VHFpZko5Ti1UMGp3eWZ5djFnN1RuX180VmdLRmRmV0d5a0Ewa1g5VGNDcVFBYmhzN09RWGpXOFpHdk4tRktkb3JKMTZ2Y2xRUms4VjUxUDd4SmhQT2tCVUdHQ3N5aDRBbG03Rk5IWXV1NzV5NHI2UmY1ZnJCcHBlRy00YktkMlRnRU1pYjRWellHTWFZd21YdGQ2aC1kVHljOHE?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 자동화로부터 안전한 일자리: AI에 맞서 확고히 서 있는 실무 중심의 사람 중심의 역할 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직장 내 AI: 2025년 보고서 | 맥킨지",
        "enTitle": "AI in the workplace: A report for 2025 | McKinsey",
        "date": "2026-04-16",
        "originalDate": "2026-04-15",
        "sourceName": "McKinsey & Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직장 내 AI: 2025년 보고서 | 맥킨지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 로보틱스-ER 1.6: 강화된 체화된 추론을 통한 실세계 로봇 작업의 혁신",
        "enTitle": "제미나이 로보틱스-ER 1.6: 강화된 체화된 추론을 통한 실세계 로봇 작업의 혁신",
        "date": "2026-04-16",
        "originalDate": "2026-04-15",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQMkJfNVY0bko3MlQwRjQweFpuLTEyR3lnM21EbkI2ZWpKX3dvWDVwMmZxNnlPc2lKNUdhVy1PdFkyUXlNQ2dacmpJSkVQYUlESDZxS0c1VHBBU2laX1pxRnUwV2VxbEhSbFFaNC0yTlVZQWl3NXJuVEU0RGdFMkVJUGN1V2h0Slk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 로보틱스-ER 1.6: 강화된 체화된 추론을 통한 실세계 로봇 작업의 혁신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "AI 금융서비스 업데이트 출시 빨라진다…당국, 절차 간소화",
        "enTitle": "AI 금융서비스 업데이트 출시 빨라진다…당국, 절차 간소화",
        "date": "2026-04-16",
        "originalDate": "2026-04-15",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE4tYmM1TjhzNzVKNHRaSzhoWWdoc1FlQ2VJUWs4b19aWEYtRkN2RFBhU2NRdmZTZTRvY1oxZW9LYThzU2duNnVwaGd3TkEtMmVEdmx0SGpzMC1XRUhQRFRDedIBYEFVX3lxTE4tYmM1TjhzNzVKNHRaSzhoWWdoc1FlQ2VJUWs4b19aWEYtRkN2RFBhU2NRdmZTZTRvY1oxZW9LYThzU2duNnVwaGd3TkEtMmVEdmx0SGpzMC1XRUhQRFRDeQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 금융서비스 업데이트 출시 빨라진다…당국, 절차 간소화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "롯데웰푸드, ‘챗GPT’에 전용 앱 출시…AI 커머스 시장 선점 나서",
        "enTitle": "롯데웰푸드, ‘챗GPT’에 전용 앱 출시…AI 커머스 시장 선점 나서",
        "date": "2026-04-16",
        "originalDate": "2026-04-15",
        "sourceName": "식품음료신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBhcjFUazZVN21EeTE2TncyZjRRb0J4b3Boak16MGpBOUU2N1JzemE3cWc3c3hCS2MtZTY3OU1HaXlvN294TG9WRG1ZOXZwcnljdGVtdi1RR25hTTF1VmJ3QWdhUmM4NDBwem03VUU3NA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 롯데웰푸드, ‘챗GPT’에 전용 앱 출시…AI 커머스 시장 선점 나서 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
