/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "젊은 근로자들이 AI 방지를 위해 하고 있는 일",
        "enTitle": "What Young Workers Are Doing to AI-Proof Themselves",
        "date": "2026-03-24",
        "originalDate": "2026-03-22",
        "sourceName": "WSJ",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi_wJBVV95cUxPYXRHOFpLd0t4MTJibXJuTl9fbkVDYzBCSWZRZ1JFd1NtbGVRZ2twXzVmTnd1LXcwWktEcUE2bzlhMWxPYV9wNU52Y2xDbm1jTmt0a2hUMmJnOUczY2lPSFA0WDNPN2dfMEkwUjVCLVliR243M2xQWGM3NlZmSzFSLWI1c3dDY0xnWHZkOUc2RlZZRXlIY1UzWGZzLWVhcVlpLXN5OVhZa2poa0g1blJ3ektMcVdCR0ptYmxrV0MtQzlreUVXV25CaVcxc1F3YmtKSjhRV2ZIcHI5LU5XUExMYmtndmF2WEQ0NTdpMzloLWRLQU1OMVQ5V1RZbXFtNWowOFBQbjRQTFQtTHRvU3EyeFdUd0N4d01GajQxY2l3a0NVX3I2TFZQa0taWDNHLXVHS0tiUVdLSzNkUlhwOXM3WmdqTzNiODlvOU93cVpZMjlPSkFtZXBqOGwzNHd1ZXpqX0tKb3ZYZzJPT3B2MHYyTUZjNzNkaFVtRjBTMjBFOA?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 젊은 근로자들이 AI 방지를 위해 하고 있는 일 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능이 성평등으로 가는 길을 바꾸고 있나요? 이번 달의 직업 및 기술 동향 및 기타 동향",
        "enTitle": "Is AI changing the path to gender parity? This and other trends in jobs and skills this month",
        "date": "2026-03-24",
        "originalDate": "2026-03-20",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPT1RHUUF0REhkSFZiTXkxdDZOLWJhTllmNTFxX0F0b2NWd2g0YUFReTZybzVXUllRNy0xMklaSjFmX1ZzVmloYlB1M1FKblJrOEVuOVR5LTZJVEp0b2w1MVYtZlhFbUhGVjc5cTZhS05TM0xIVERNUUVXcXl0a2Rfa29pTkNVTjZ4SDBz?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 성평등으로 가는 길을 바꾸고 있나요? 이번 달의 직업 및 기술 동향 및 기타 동향 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2026년 대학생을 위한 최고의 AI 기반 사이드 허슬",
        "enTitle": "Best AI-Powered Side Hustles For College Students In 2026",
        "date": "2026-03-24",
        "originalDate": "2026-03-15",
        "sourceName": "The College Investor",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNb0VJUlJSM3E2eFFZWGZrOVFOaTZ6akJnNEEzdDNVOFRJQ0xLTXRSc1JZTmNBTnJNdVllWEhZQ1MyNmhrRUxpMzdjbGtKSE9vRjctQmphTGo3bWp6ellLTDZwU3FYdWFReXZIcE1GcXVRUlh3MTZUVTEtWWplUUcwdElYYUpHTkJuUkxxVTZoTExYZ3BGems5aUlINA?oc=5",
        "isRepublished": true,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 대학생을 위한 최고의 AI 기반 사이드 허슬 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "네이버, CFO 이사회 복귀…AI 수익화 속 주주가치 논란",
        "enTitle": "네이버, CFO 이사회 복귀…AI 수익화 속 주주가치 논란",
        "date": "2026-03-24",
        "originalDate": "2026-03-23",
        "sourceName": "뉴스토마토",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1ZdndQZHB2QWRlOEtCSFVoanFFbHhLUmNmODJXMzNuRGNKak5FeEVVQ2NJMUFHSzV0ckV5YW9OVVd3N3lhVnFZWEEtY0hEMHhuWlFYc1BydTExTm5VUVJRTA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버, CFO 이사회 복귀…AI 수익화 속 주주가치 논란 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "삼성SDS, 국내 첫 'B300' GPU 서비스 출시…”GPU 8장 시간 당 14만원에 제공”",
        "enTitle": "삼성SDS, 국내 첫 'B300' GPU 서비스 출시…”GPU 8장 시간 당 14만원에 제공”",
        "date": "2026-03-24",
        "originalDate": "2026-03-23",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE80QWk3LXNvR1o3NVR2SWd5R01DcFEtTkNUenVpczEwS29iRWUydlcxUmoySV9xNHJsMzJINVFzWS0yVU1oak5OZlE1eXNnX3ZCUzJuQXZNc1VWdUJyMlpRODNhSlRVNGoyQ0E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성SDS, 국내 첫 'B300' GPU 서비스 출시…”GPU 8장 시간 당 14만원에 제공” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"광고 보면 챗GPT 무료\"…오픈AI, 수익 다각화 나선다",
        "enTitle": "\"광고 보면 챗GPT 무료\"…오픈AI, 수익 다각화 나선다",
        "date": "2026-03-24",
        "originalDate": "2026-03-23",
        "sourceName": "DealSite경제TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5OZkgxRmFQV2NVRTQ4QlRISDdDZUZ6MURRaXVGV05wdU53dHk5Wl9ub05QcEtkc3kzWll0a0NNZV91RUNPWHowQ0R1WVltWURXTjRSRFFn?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! \"광고 보면 챗GPT 무료\"…오픈AI, 수익 다각화 나선다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
