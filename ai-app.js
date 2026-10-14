/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 발전은 CPP 학생들을 위한 직업의 미래에 대한 질문을 제기합니다",
        "enTitle": "AI advances raise questions about the future of jobs for CPP students",
        "date": "2026-10-14",
        "originalDate": "2026-10-13",
        "sourceName": "The Poly Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQSVJFWkF4Nmpnc2ZYdmJLcXhMRWs0SllrYktoVGlWUnRRWlRkb3MyeWc1RVZld3pyT3FDZkpXWjZnaENZMWZWWThnLXZUSEVtNHVuOVR3STdPSTRCUm5PcjJfXzFIMEt4dEFkVEJVMnFrU05oUGN1QnAyVHpHeHRBbl8zSkd3d2E4Mk1IaXNpR1piYkpEMGl0YjdoRVZaZ0gtTW5QRjlYdjRuNXp1NW9hVXZjUVnSAbQBQVVfeXFMUElSRVpBeDZqZ3NmWHZiS3F4TEVrNEpZa2JLaFRpVlJ0UVpUZG9zMnlnNUVWZXd6ck9xQ2ZKV1o2Z2hDWTFmVlk4Zy12VEhFbTR1bjlUd0k3T0k0QlJuT3IyX18xSDBLeHRBZFRCVTJxa1NOaFBjdUJwMlR6R3h0QW5fM0pHd3dhODJNSGlzaUdaYmJKRDBpdGI3aEVWWmdILU1uUEY5WHY0bjV6dTVvYVV2Y1FZ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI 발전은 CPP 학생들을 위한 직업의 미래에 대한 질문을 제기합니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "남아프리카 공화국 경력 변경자의 48% 가 AI에 대해 불안해하고 있습니다. 어떤 직업이 안전한가요?",
        "enTitle": "48% of South African Career Changers Anxious About AI Which Jobs Are Safe?",
        "date": "2026-10-14",
        "originalDate": "2026-10-13",
        "sourceName": "EIN News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNX0pkSHN0Wkg1YXlSWHBHclJzYVBZU3lOZVpJQW9CdXI0LWlueU9VazRSR1dheWtUcG1hWkdEb2lrT2M0emFXcFhNYVV1akNEY3FlQjF0VWw5ZEhkNzVhdkdfYUUtQU9aS2VKb09fbkoxcmlrT2xpdTNrUG50SkpTUndvWHZob0RYT2t4QW8yWUxobHRKakpfTVpMWmYxb3plTnJ2TEo4a3JqUHprUjluMk5KZUE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 남아프리카 공화국 경력 변경자의 48% 가 AI에 대해 불안해하고 있습니다. 어떤 직업이 안전한가요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 경제를 부동적으로 유지하고 있습니다. IMF는 젊은 노동자들이 그 대가를 지불할 수 있다고 말합니다.",
        "enTitle": "AI is keeping the economy afloat. The IMF says young workers could pay the price.",
        "date": "2026-10-14",
        "originalDate": "2026-10-13",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQY1JVWkwydWJHRERRcUJCaFJOaXFveFBhdVcwMVlsc19yR0J6NnpvY29WdHl4WkNGMWpJUTN6U0ZRYlg0OC0yckhSVm5ValJrM203SmlPXzFyNFJqOE1VbVJnc0V4MjJmLUlWTE9vcUtLSEgtR3N5M1hZd0tURkxEXzFIR01fWlVieF82RGFiZDBZWnFWVW1lWFpuLXZYSDRfNXZv?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 경제를 부동적으로 유지하고 있습니다. IMF는 젊은 노동자들이 그 대가를 지불할 수 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "enTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "date": "2026-10-14",
        "originalDate": "2026-10-13",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE51czdyblRzU3U2a2lYWTQyQXhPYjJCTmxWVjE2RS13NVlySzBZQ0VVRjRVSkFLYVZKZTlJLWZfSmxlT3g3TFRNS09KRE1waEhKd1lCSWI3TWo5OUxXRFBlVU9EdUlEU3d3VjFfR21ySjVCZlNpbFEyTFlR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "AI 수익화 속도 내는 메타…‘유료 버전’ 뮤즈 원더 출시",
        "enTitle": "AI 수익화 속도 내는 메타…‘유료 버전’ 뮤즈 원더 출시",
        "date": "2026-10-14",
        "originalDate": "2026-10-13",
        "sourceName": "서울경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE82N2xtNE9RU1dmMjYtX0dRTDhtZTBTaE9xUS1hcHVtajd4bmJlZnhvaHkzTXJvcndLM1htSjZuZi1qekJCNjJaZ244QUNOenBlS2fSAVNBVV95cUxOZlpFVEhacGM3VjdpWVZnZGhfUXA1MFFoQzFTNWZUTjNIVm5GZnNvYTQySlJoSXF6MVhXT3NSRnhLYUpaRlRqeHdoYTdubElDQ3JwNA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 수익화 속도 내는 메타…‘유료 버전’ 뮤즈 원더 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "클라우드타입, 기업 내 AI 앱 개발·배포 통합 지원 플랫폼 출시",
        "enTitle": "클라우드타입, 기업 내 AI 앱 개발·배포 통합 지원 플랫폼 출시",
        "date": "2026-10-14",
        "originalDate": "2026-10-13",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE8xdDJ6dDJ2OGdNODBnY1FhcENRNlJjUkhBTkRaQk5zZ0dydnhoOUtJU25nUlVKTC1hT0JZb2FZdndURDA4bER1MlFaV0k2NDhxWk1QSXJn?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클라우드타입, 기업 내 AI 앱 개발·배포 통합 지원 플랫폼 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
