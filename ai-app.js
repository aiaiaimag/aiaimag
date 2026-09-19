/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Gemini Ghostface를 수행하는 방법 AI 사진 트렌드 (프롬프트 포함)",
        "enTitle": "How to Do Gemini Ghostface AI Photo Trend (Prompts Included)",
        "date": "2026-09-20",
        "originalDate": "2026-09-18",
        "sourceName": "perfectcorp.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQcHBPUURNczAxX1NtbmVTOW1qcVVyNl9yWlpjaFZBNFhoYi1aMHpNQ1FvTkxrUjU1SkJCUGZodTdiUHkzRHM1eTBsN2pTZ1MwWmFRZFBfWnd1NF9fbVhXcm5RcTVyX0xCa2dXLTItQXhleHltLVNuOXh2QjdiN1ZWa1VibGVFdw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Gemini Ghostface를 수행하는 방법 AI 사진 트렌드 (프롬프트 포함) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "최근 대학 졸업생의 경우, AI보다 더 큰 이유 중 일부는 일자리를 찾지 못하고 있습니다.",
        "enTitle": "For recent college grads, there are reasons bigger than AI that some are not finding jobs",
        "date": "2026-09-20",
        "originalDate": "2026-09-16",
        "sourceName": "The Journalist's Resource",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQSW4tYjEwTDlVdVoyTGZISm9tUVl4angyLW4wWU1jenhtTDdaVGp2eEJXNlY1X3hvaEZuOVRiT04zUGMyU05NQ3VkQS1aVWJZR1pGQ1pEaWI1VUdzcW5XWlNTazBFQkRxakZMOVJEQTJyeDl6TWJabTZZNFN2NEVya013?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 최근 대학 졸업생의 경우, AI보다 더 큰 이유 중 일부는 일자리를 찾지 못하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "고용주는 AI 시대에 젊은이들이 인력에 진입하는 데 어떤 기술을 원합니까?",
        "enTitle": "What skills do employers want from young people entering the workforce in the age of AI?",
        "date": "2026-09-20",
        "originalDate": "2026-09-16",
        "sourceName": "weforum.org",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOUVBxMTk2aHhjWlJYbGJRTUdZOS1fRDZYYWIzYVZVMmtiUHIxamV3TlZPZVJhWnhwcjVvR012T1JLM3cyQTVLNHdDTEJ0d0JrQkhqTmZoZmxtSTVZS0pOOGhJRURqRTd5U0hIU2xsZWx2anBVZVB0WVBmdE5zd1BUVmVpQXItbVpmS3E1ZGp1MWlGZ2JlSTJQUkVGdEJOM0I4NWlldThQSW1BdmM?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 고용주는 AI 시대에 젊은이들이 인력에 진입하는 데 어떤 기술을 원합니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI트렌드] ‘프롬프트 비법’보다 중요한 것...AI 활용법이 달라졌다",
        "enTitle": "[AI트렌드] ‘프롬프트 비법’보다 중요한 것...AI 활용법이 달라졌다",
        "date": "2026-09-20",
        "originalDate": "2026-09-19",
        "sourceName": "fnnews1.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE43ZHp5MWRDNmYwREZKLThpb1ZibTlBcFhIWGNJenRsRXh5X1BpaEY4RzBpYmtTUDdPZFJkdHpjOU4tZENRN1VFQzZpMkZlRVVoVUdBX3lYU0liT3JQNVBYOFR3TUpfOFNUTHfSAW5BVV95cUxOYUZMbWVMcGdEVHp3SnZOcVRMZlNrV3NibnZicHFXdlQ0UngwUEd5SHVKbXVSaWNtSTBHcUwxWllONzNmQnlqLS1QVVEtX0w2QlBqTkhnN1p5dy14d29Xa2czM2JwTmcxX29iRHprdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI트렌드] ‘프롬프트 비법’보다 중요한 것...AI 활용법이 달라졌다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "트럼프 “’인공지능’ 대신 ’최고지능’ 어떠냐“…온라인 설문 부쳐",
        "enTitle": "트럼프 “’인공지능’ 대신 ’최고지능’ 어떠냐“…온라인 설문 부쳐",
        "date": "2026-09-20",
        "originalDate": "2026-09-19",
        "sourceName": "yonhapnewstv.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFB4SzR3T1V1R192NXZpMjdSQzA0R3d1RWNSYlgwUWhVVDlsUUp0RzNOQzR3cDJPSkZNQXV3LXBDakJTblJvN0k1YzFjSGtrbTAxYjdoczhNYU9wVC1zLTl5MG5keWtVZm8?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 트럼프 “’인공지능’ 대신 ’최고지능’ 어떠냐“…온라인 설문 부쳐 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글 '제미나이', 보안 테스트 환경 오류로 기업 3곳 침투 사고 발생",
        "enTitle": "구글 '제미나이', 보안 테스트 환경 오류로 기업 3곳 침투 사고 발생",
        "date": "2026-09-20",
        "originalDate": "2026-09-19",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5rOVpRdUFyR2c4a1djNC0zN2dSMWsyZ0NWTFlPLWNCU1B6Z0dDaFdaVUoyUXRjM2ZPb3hjajIzN0Z6TVFTdER5VmZpVVhlYlQtUXVvNXBoYXNEMmxMZ1FZekJRY0NteEFldVE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글 '제미나이', 보안 테스트 환경 오류로 기업 3곳 침투 사고 발생 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
