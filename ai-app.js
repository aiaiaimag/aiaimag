/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-05
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능이 모든 일자리를 갉아먹고 있는가? 진실은 우리가 단지 모른다는 것입니다.",
        "enTitle": "Is AI eating up all the jobs? The truth is that we just don’t know",
        "date": "2026-08-05",
        "originalDate": "2026-08-04",
        "sourceName": "The Indian Express",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxONnF4ZkdSN2lCOXdRUmFJcS00cWQwNmNGU2ZIQWhLMTlpbEpDYTJMZkdqWVRNRy1tVmRES2V0anNCX0t0cGQxdVNhUmk2ekNiaEtyTnRuN3A5T0NBb0ZjaFczc183Q2ZrUEJfY0I1cHFvRUxzaWlPTjlaTHBaRkYwcW9MSGxzbk8tdWNnSFI5QkdrUVJsd0JreGlnUmY5QkVJQ0w2bXgtV09kNHdsblNodDVwUWlDeF9zUEhwT29NXzhUZ9IByAFBVV95cUxObXZGaTV4UjUtRVlTTWZXRFNHblI2VXJPQWJObERFWkpiOUNkaHBFMURxRVRTRWU3Y052MFdlZDBSd04tNGpPcHRjdVNhZXUzd0NFcGh3WG1DU2VVcTJFTDhfc1h6NzdWZDgyMGJFbFg0aTdCLTR1NnAtWTJLdldHM1NoeGg1SkJXRnJSOVY5RC10U2J1YS02N0NrYk5YQjJrb0MwM3dWaXJtWndzTHZDN2tOTUxZNXVXUzhjV0RVSWRJeVFXeHlzcA?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 모든 일자리를 갉아먹고 있는가? 진실은 우리가 단지 모른다는 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인력 트렌드 전문가이자 미래의 일 기조연설자: 지금 바로 예약하고 채용하세요!",
        "enTitle": "WORKFORCE TRENDS EXPERT & FUTURE OF WORK KEYNOTE SPEAKER: BOOK AND HIRE TODAY!",
        "date": "2026-08-05",
        "originalDate": "2026-08-04",
        "sourceName": "futuristsspeakers.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNNXpyaWc1SVlJMmtlY1F1U3BPczZsWGlHSGhBTzRZeXo3MzZKNWFsTGE3bTJQMW1aaXNVNVJrUm1SRmwxQXNrUzV1WklSVDhma21yUE5heUNNblNxOEwwZ3NUU1A3SVAwU0xLcEhxeTBJM18xNGxZYU5HWEcyMjhGRnBuRS1UWl9LQ1dHRDdHZTdObXcySWV0ZmNXeDVER3RTamZ0MkRCZC1pMzI0aUE?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 인력 트렌드 전문가이자 미래의 일 기조연설자: 지금 바로 예약하고 채용하세요! 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "순위: 미국에서 가장 AI에 강한 직업",
        "enTitle": "Ranked: America’s Most AI-Resistant Jobs",
        "date": "2026-08-05",
        "originalDate": "2026-08-03",
        "sourceName": "Visual Capitalist",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNYUV0VklEU21Kd3pNTGVrWjJKRnhTdk1jSGNQbjctOC1sUURma1JlWURvZEVOeVo0a1lTRjZ1eVk0TWZ1M0o5VlJHZHVRYkRGalJjeWthSk9VY24zLTVXMDlwZkFoQzdpLUpkY2pqZjRaMEdaLW8ybzhWYnhjUk8ycQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 순위: 미국에서 가장 AI에 강한 직업 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[완전분석] 챗GPT·클로드·제미나이·코파일럿, 어떤 업무에 써야 할까…‘AI 도구 선택법’ 총정리",
        "enTitle": "[완전분석] 챗GPT·클로드·제미나이·코파일럿, 어떤 업무에 써야 할까…‘AI 도구 선택법’ 총정리",
        "date": "2026-08-05",
        "originalDate": "2026-08-04",
        "sourceName": "아웃소싱타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTFAyUTVrMWVRdDFwdHN1UGZhTUY5VlIwMDlXZzRoVjk1S0hyM0wwOW9KekhENjJFUDE0ajJnRko3ZC10cGZfT3RYcGhzSGVGSW9hdENsUnlpZUttWkhtX3lvemJkcVc3aTN0aWExWGEyVVpydw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [완전분석] 챗GPT·클로드·제미나이·코파일럿, 어떤 업무에 써야 할까…‘AI 도구 선택법’ 총정리 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "영림원, AI기반 입사자 온보딩 서비스 ‘에버웰커밍’ 출시",
        "enTitle": "영림원, AI기반 입사자 온보딩 서비스 ‘에버웰커밍’ 출시",
        "date": "2026-08-05",
        "originalDate": "2026-08-04",
        "sourceName": "dt.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ka1lLV2c4bl9qMF9OcXFBNWVoRzE5SnZ5YklFN2pzSEFKS0dMQmdraFloSURxMlduOGRyZnZscWNIdDB2STl2UVo2dlFmZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 영림원, AI기반 입사자 온보딩 서비스 ‘에버웰커밍’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "파리 생제르맹, 구글과 AI 파트너십...'제미나이' 공식 어시스턴트 도입",
        "enTitle": "파리 생제르맹, 구글과 AI 파트너십...'제미나이' 공식 어시스턴트 도입",
        "date": "2026-08-05",
        "originalDate": "2026-08-04",
        "sourceName": "aitimes.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFAxVVQtNGtxYmhhVS1STGg5dzdpMFBNWW11MTBWR1RMQ2FSUmxJZWFtc2lJLUhFa3BGQlppcHh5bTVqWXMzU3NUYlR1NDk0aWEzSkZaTHp5WFdtZ3hLLThyX2VMNEMwdUhseWc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 파리 생제르맹, 구글과 AI 파트너십...'제미나이' 공식 어시스턴트 도입 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
