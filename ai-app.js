/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "구직 전략: 2026년 재향 군인이 집중해야 할 곳",
        "enTitle": "Job Search Strategy: Where Veterans Should Focus in 2026",
        "date": "2026-04-21",
        "originalDate": "2026-04-20",
        "sourceName": "Clearance Jobs",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOcDVrQXhsLXlMS2ZQTXFXOFJ4NUNoS014cFIxU3ZqM0VFT0QxdWJlWmQ5MWtnbXFZdnFieURpNERyaUQzcEVUMnBSaFlxTktzUGZPeDQ5bGNkVFRsTC03TWtvSURvQTNfWTE0Y3ZNN05taE5kUzU5LTBDeXczMEVIMTF0YlVENFh4MlVjOHVKcGdvMEdEYkhHY3l6LVhCZlk?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 구직 전략: 2026년 재향 군인이 집중해야 할 곳 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Meta Plans 'Biggest Layoffs in History' | Amazon, Snap Lead AI Job Cuts | Vantage on Firstpost",
        "enTitle": "Meta Plans 'Biggest Layoffs in History' | Amazon, Snap Lead AI Job Cuts | Vantage on Firstpost",
        "date": "2026-04-21",
        "originalDate": "2026-04-20",
        "sourceName": "Firstpost",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNR19MR2o4bS1mYVZtMUZONFVHSFFXQXB2YlRBRkRSZURLdkQ0cTVCMFBYQjhZS3JaNkRfc2Z6N3BVRk9xLWptUHBYemczNThLeDBhQ2l0TkhiWmdpVl9fd2c2QWhKUjkxZC05Y09fYmlta2ptME5FbTVRa05NZzI0ZkNROEIycXVqbWNfMkdfMFhHNzBPbGgxSE04eEJrOFZDNGh6VzY4Zzl6aEtjVi1RV2FxM3FSNmNLd3RVek02aEFPZndZaDc5Tk82N2o3Z9IB0wFBVV95cUxQRnpvbHJWZk5IenI1ZFV5Vk1QemI3by1OSjZsRXlXTzhoSFFWU1A2cjVQdUNGLS1zZU9KQTAxd0YwRTYtMWwyN3hkRk10OTRrbXVhMGtmdDBUQ1V6ZnpmUUNOQVZEaEZ0RFVuSXFONktkUW5pNGVFNkQ2aXNwc3ZxYUgxdVFhY0FJN01aNzFOOERLOHZQLUQ5VDVyak5BcmQ5eTJBV2NGSFFSU0xpOUZtcldKYVd2ekNjMENWbDliYTA2a1RuMXhCYUdDM1A3dXhDcUdn?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! Meta Plans 'Biggest Layoffs in History' | Amazon, Snap Lead AI Job Cuts | Vantage on Firstpost 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "직장 내 AI: 2025년 보고서 | 맥킨지",
        "enTitle": "AI in the workplace: A report for 2025 | McKinsey",
        "date": "2026-04-21",
        "originalDate": "2026-04-20",
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
        "koTitle": "[요즘 구글] \"지금 당장 크롬 우측 상단을 확인하세요\" 역대급 기능 터졌다",
        "enTitle": "[요즘 구글] \"지금 당장 크롬 우측 상단을 확인하세요\" 역대급 기능 터졌다",
        "date": "2026-04-21",
        "originalDate": "2026-04-20",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQaF96SDVNMDV3T3ZfclB4RTFtdkF0MzRxbnEzOFBmMVJ4OHk1V3FSeVRIcUNVbDI4Rk16dnc3Z1ZLUnZtWFYwY3JCVmtRLUFheFVXTTF6SHFIMXVxeWFCNHQ2STd4b3lxYUZCc1liRjF6NUR5MVRnT1hIN2VxSlMwT1pOUGp0clZFa2M1LWRwTGI1Qm4w?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [요즘 구글] \"지금 당장 크롬 우측 상단을 확인하세요\" 역대급 기능 터졌다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI픽] '제미나이 품은 크롬' 한국 출시…웹 탐색 'AI 통합'",
        "enTitle": "[AI픽] '제미나이 품은 크롬' 한국 출시…웹 탐색 'AI 통합'",
        "date": "2026-04-21",
        "originalDate": "2026-04-20",
        "sourceName": "연합뉴스 한민족센터",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9Ta0pXMlVwYWdiejdWSnJsdFczR0gtR3d5VU1feG5tdE50OWdXWkZVR0U3WHU0VDFteVJMSlZTRmNTTWxLWm1UR2JZNGlVbGlBMU9nY0EtdnJGM3E4RlNPbU9YWXMwY09ScXlPdzk4LVRQVmRY?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI픽] '제미나이 품은 크롬' 한국 출시…웹 탐색 'AI 통합' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "하나투어, AI 기반 여행 추천 서비스 ‘어디든지’ 출시",
        "enTitle": "하나투어, AI 기반 여행 추천 서비스 ‘어디든지’ 출시",
        "date": "2026-04-21",
        "originalDate": "2026-04-20",
        "sourceName": "fetv.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5Jd1V1cnZjV3hJS3pfZFlOcDZhQ25kVk11WTR6ZWJiUXFyR2JmS08yN2JRd0JsanF3NjdkczZ4bG9MdGxPZ0NNd2NGeWUza1hiWWw2eHVxNnZucW93NzJVaDBGOWlGdHlm?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 하나투어, AI 기반 여행 추천 서비스 ‘어디든지’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
