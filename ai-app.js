/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-31
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "업무의 미래는 AI를 마스터하는 사람들의 몫입니다.",
        "enTitle": "The Future of Work Belongs to People Who Master AI",
        "date": "2026-05-31",
        "originalDate": "2026-05-30",
        "sourceName": "SciTechDaily",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNQk9oRHNPeWg0Wk5aM1lyQXI2cVFjUnduWU5wU0JFXy1EbXI4Q0dOQld0anEzR0hhUnAySHB2ZFBXMzRWdFdSSm05OF9rYVFyQ0tPdVFpLTh1aDFYWGlqSVotRklCZ0lmQnQ1cC1sOHYzaUdHWWZ3Qlg2S0pfRDBvVjRB?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 미래는 AI를 마스터하는 사람들의 몫입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능이 당신의 직업을 훔쳐야 할까요?",
        "enTitle": "Should AI steal your job?",
        "date": "2026-05-31",
        "originalDate": "2026-05-30",
        "sourceName": "Financial Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNODNiR1FYQ283NU1nZFZLMUR0S1VmLUNidktIajNfYkl2THpRbUN2aXlOLTV0TS1JY1Y2UW5aN3hsZ0c5SWJZdVB1a09kWDYyZGlCdllaODJXZUFvNFZkYTlVOGd2a3VxdDE1cjdyTDl1LUlkYy05amJEVXllS1FiNlYzdTI?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능이 당신의 직업을 훔쳐야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "‘싱가포르 사람들은 적어도 한 번은 확실히 회복될 것이다’ — HR 컨설턴트이자 ‘인공지능 시대에 여전히 관련성이 있는가?’ 의 저자는 ‘언제냐의 문제일 뿐이다’ 라고 말한다.",
        "enTitle": "‘Singaporeans will definitely get retrenched at least once’ — HR consultant and author of ‘Still Relevant in the Age of AI?’ says, ‘It’s only a matter of when’",
        "date": "2026-05-31",
        "originalDate": "2026-05-30",
        "sourceName": "The Independent Singapore News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihwJBVV95cUxPNnp6Y2xNMlJlMUFoc0hVVVJzcmVEekZ0bWF4WDBZYklka1laQkNmSGNGWklOcHc5OGNaNm91aHVqQU9qTWVoU2tPY2otMVN4b3lPMUNuVUw4M3dVRTdnVVFicGpXTlFyMTFKb0lTb3NIX29YTllCZUdiOEtSQmdkVXpQSmFLQWJTY1hEeEQta1o2cVJubmZLLXF2LVJMU19MZXlrQVdQcDhMU0VNbjl4d0d6OHVMczc4N21ES1JRNXVIMVNRM2ZLWmNidlV1MUE0VGpKelZ3MHBObGJOci1YNk4yc2EyYmFMZE5udnUyczdrZ21YbGp5cHBLQi1BVng4VVpRNVVlaw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! ‘싱가포르 사람들은 적어도 한 번은 확실히 회복될 것이다’ — HR 컨설턴트이자 ‘인공지능 시대에 여전히 관련성이 있는가?’ 의 저자는 ‘언제냐의 문제일 뿐이다’ 라고 말한다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "Opus 4.8 등장: 클로드는 빼앗긴 주도권을 찾아올까?",
        "enTitle": "Opus 4.8 등장: 클로드는 빼앗긴 주도권을 찾아올까?",
        "date": "2026-05-31",
        "originalDate": "2026-05-30",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1XNGhQc1FWZ1ZhTGswd056Tkt2QWJTVHhkbEV1eVNoaVJ3b19SVEdiclVvcTlfMFBvUEJ2N2diWnI2SmZXN1hRV1p0WS1FN1RYUXdXNE1IZmNDQQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! Opus 4.8 등장: 클로드는 빼앗긴 주도권을 찾아올까? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 이슈트렌드] 서소문 고가 붕괴·삼전닉스 ETF 여풀 속 '종전 기대감'에 출렁인 환율",
        "enTitle": "[AI 이슈트렌드] 서소문 고가 붕괴·삼전닉스 ETF 여풀 속 '종전 기대감'에 출렁인 환율",
        "date": "2026-05-31",
        "originalDate": "2026-05-30",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5lMmUyZXZzNm9lRFFjX05CellILTBxU0ZrNTZ1Ri1UNVl3OWNRaWpEcXVTSEItdjl3ODhLcFZ2U25HOXhzc1l5cndvQ1JwNkN0eGJzdkVkSkgzQ1dDbmZIOFVocVYwOVJ1Y2c?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈트렌드] 서소문 고가 붕괴·삼전닉스 ETF 여풀 속 '종전 기대감'에 출렁인 환율 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[빅테크칼럼] 클로드 AI 한달 요금이 무려 5억 달러? “토큰맥싱의 역습”… AI 요금 폭탄이 던진 경고",
        "enTitle": "[빅테크칼럼] 클로드 AI 한달 요금이 무려 5억 달러? “토큰맥싱의 역습”… AI 요금 폭탄이 던진 경고",
        "date": "2026-05-31",
        "originalDate": "2026-05-30",
        "sourceName": "뉴스스페이스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9FZW9ncTg4XzlCYUFwaVFweTZCQUFsTUR0OWRXeF9JNmdVT2RBUEtBTWRoS1dQRG9xX0xJU2w3aG9sMm9DdFFkc1dHcThDX1ZJYW1LdWZLblRQRDVoajFGeg?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! [빅테크칼럼] 클로드 AI 한달 요금이 무려 5억 달러? “토큰맥싱의 역습”… AI 요금 폭탄이 던진 경고 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
