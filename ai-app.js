/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI가 인도 IT 일자리를 위협하고 있나요? 무디스가 말하는 일자리의 미래",
        "enTitle": "Is AI putting Indian IT jobs at risk? What Moody’s says about the future of work",
        "date": "2026-11-13",
        "originalDate": "2026-11-12",
        "sourceName": "The Times of India",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxNUi1sR3FwZjJnMUx6d2FWWlVlMWRfbUkzSTRFTEZWWUQ4d3Y4ZWtBZlhpdDlTUWtCb01NVnhYSm1raGQtNUNFSmY1TFlBQWhMaXdZLTJ2UzVWWDNzM2JHQnZJNVNWOVRQMEdUdGlLYWlQc2Y0V05EVkE1dkNqdmNfMHlfNjA2ZkFEZEhyYXotd1ZvRFJ3WThsbW5MUk15WUVuamZNVlRvV05kLWtPY25aU2ZsRUszZW9rYXdwM2hlNnRqc29NWmRienNEbDZiSlJzS3ROUC02WVZoUW8wVVQwNERQNEI2YzRXZVFveFFYLThGNW92RXhj0gH8AUFVX3lxTE9CS2NGbzRaaUFwUU0wYm90ckFjdWw1d2NpZnB6VWNBNTlwNmJSS0RhTWpqb3pFXzZfcUlBVUN5eWVZRlZZRTJSM05ITzJEcXJzd0kxMXJ2RlFMbVozYkZITWNQQkpkekVCTEZlUXpMLWJVQk5Jck5XVkkwNnFkNFdvNEVKdWc0bm16VzBBOV8yOU5OUjMwUzUxS2d1Rm5ybGdwR0ZFN21NcnpMdTh1RWV0TWE1YlBZTi1zMFU4NEpTMVo3YjE3ZF9BejAtdm1oYTdZZ1Zkc1RtdmV2TEpSSlJidGdEWEpSRW5WWjIxdHN1cHJoYnpZdG9mNWRVRQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 인도 IT 일자리를 위협하고 있나요? 무디스가 말하는 일자리의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "'AI가 BPO 일자리를 파괴할 것': 라잔 아난다가 말하는 일의 미래 | Walk The Talk",
        "enTitle": "'AI Will Disrupt BPO Jobs': Rajan Anandan On The Future Of Work | Walk The Talk",
        "date": "2026-11-13",
        "originalDate": "2026-11-12",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPUFN2R1N6alFtZGk1MmlKV3Y4Sk52WFR3aFZqVkFYZXEzUVFLVjk3TGU4S2ZRdGdqYVJOUDF2SkRvTGlEU1hoSy1femxPcWFXTzE1YXdDdjVPWGhNZ1Z2WnBZOGd3VjBCbzg0UW9oMzFFUGFvWkZ1Z1lLbTdLR2RuNTI2dDhPOEJvTk8zdWNsYnpCemlPOU5WS1gxc0x1MDYzYTU3NzVKbUVPNmgwWTdOSmNBTElRNXFpY1RSRnB3eG1OWThOeWRTWkF4UjRqNTR4?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 'AI가 BPO 일자리를 파괴할 것': 라잔 아난다가 말하는 일의 미래 | Walk The Talk 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "동영상 | 라잔 아난다가 말하는 AI가 일자리, 인도 스타트업 및 딥테크에 미치는 영향 | 라훌 칸왈과 함께하는 Walk The Talk",
        "enTitle": "Video | Rajan Anandan On AI's Impact On Jobs, India's Startups And Deep Tech | Walk The Talk With Rahul Kanwal",
        "date": "2026-11-13",
        "originalDate": "2026-11-12",
        "sourceName": "NDTV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOclZKaGk3TGxHZDlFRjhBZzNBdWhUWDVaUDBWY2MzX0xSd3BBYW5qRG9jdU1hZ3VnejJzYjdQN1VGUnBVQkN3bUxRMDR3Ukp0bUlNckwxVkptVm5pWnZQamJ5ZDhTT2FMbjF0ZHA3UHJMQUQwU01mekJqSHhhaUI5d0lzSTA5VUZZcEVUMy1XcDRuQVFZSVhFdWtzejRGbnZhX2NnNw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 동영상 | 라잔 아난다가 말하는 AI가 일자리, 인도 스타트업 및 딥테크에 미치는 영향 | 라훌 칸왈과 함께하는 Walk The Talk 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "삼성전자, 제미나이 탑재 AI 안경 공개…내달 국내 출시",
        "enTitle": "삼성전자, 제미나이 탑재 AI 안경 공개…내달 국내 출시",
        "date": "2026-11-13",
        "originalDate": "2026-11-12",
        "sourceName": "매일일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9WNWQzMm96d2g3cVBfcVM0aDRGc1hqZEJldUNUTHJxejRSWVNmVlVJS214NVE3VE1rSGtZdTFwVXFTODYzYVJRd1BUZWxKTUxlUTh4c01uTkpUOHVvWnJ4eGRSRlc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성전자, 제미나이 탑재 AI 안경 공개…내달 국내 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "어도비 출신 창업 포타 랩스, 일상 사진 다시 찍어 주는 AI 앱 출시",
        "enTitle": "어도비 출신 창업 포타 랩스, 일상 사진 다시 찍어 주는 AI 앱 출시",
        "date": "2026-11-13",
        "originalDate": "2026-11-13",
        "sourceName": "AI 매터스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBrR3l4Qkx3UlpqbEk1YUNZalI5eU8yZkw3dE5ra0xlMFdVWnFQZ3ljMnZheU5VdVc0YnZDTHlKcXV4UHQ0SllOZXBkS1VsOTFJck1nRw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 어도비 출신 창업 포타 랩스, 일상 사진 다시 찍어 주는 AI 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글, `제미나이4 하이드로젠` 출시… \"AI 에이전트 작업 19% 빨라\"",
        "enTitle": "구글, `제미나이4 하이드로젠` 출시… \"AI 에이전트 작업 19% 빨라\"",
        "date": "2026-11-13",
        "originalDate": "2026-11-13",
        "sourceName": "디지털데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBKQUVaZ3hVZ05TWHdUZGdReHBRSEtyQnFneGt1dUE3bkVaRUJ5My1Lajdab3NtQmpRSGxMeXZjRXpKSmJXdTVGQlhlUVpvNTVtVXk3clRHM2JrMVlqdngyLUd4Smo?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, `제미나이4 하이드로젠` 출시… \"AI 에이전트 작업 19% 빨라\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
