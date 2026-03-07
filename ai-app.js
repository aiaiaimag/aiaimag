/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "저는 Google에서 AI가 기술 산업을 변화시키는 것을 보았습니다. 제가 어떻게 '미래를 정의하는' 커리어 피벗을 만들었는지 설명해 드리겠습니다.",
        "enTitle": "I work at Google and saw AI change the tech industry. Here's how I upskilled and made a 'future-defining' career pivot.",
        "date": "2026-03-08",
        "originalDate": "2026-03-07",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQNmJLM3ZBMDNocmxSd1VCZ2F3VnFLT0RmYmRlY291S1JBM19oMUpDUGZSdWdNcEJHblBKX044a3ZYZWY1NFNrV3YwVUpUS092d1RuclV6VmtmOHZPdERHM2Zrek81M3ZHQ1VKV20tYllpeTRZbkkySU14UVJEVXpOWHYtWWRWTjM4VmxFNGk1aw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 저는 Google에서 AI가 기술 산업을 변화시키는 것을 보았습니다. 제가 어떻게 '미래를 정의하는' 커리어 피벗을 만들었는지 설명해 드리겠습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "억만장자 OpenAI 투자자인 비노드 코슬라 (Vinod Khosla) 는 인공지능이 대학과 일자리를 없애도 2040년의 삶이 얼마나 멋진지 예측합니다.",
        "enTitle": "Billionaire OpenAI investor Vinod Khosla predicts how awesome life could be in 2040—even if AI wipes out colleges and jobs",
        "date": "2026-03-08",
        "originalDate": "2026-03-07",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNWlM2U3RLMlo0dWhxMnJlbzNXekNTczRhNktxLVFvR3Nud3N1S0pmb3VkNFpUeGszZk1pN0ZITlNHaVZBVzVfd3U1ZnlVOXozWkw4MlBZSmhRMi11UFc2dUJISU8wUFhmb09lZXFMWDgwVEMxM005R0l6NWtodldzVGVpakhMelR3R2NSeGRfSnMzOUFnZXJCazZ6cEhXOUYzUlhfM2VtNmh5cktUNmROMmNOckhna2g4bjc0UUpCZw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 억만장자 OpenAI 투자자인 비노드 코슬라 (Vinod Khosla) 는 인공지능이 대학과 일자리를 없애도 2040년의 삶이 얼마나 멋진지 예측합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI는 전통적인 경력 상태를 대체하지 않고 직무 구조를 변경할 수 있습니다.",
        "enTitle": "AI may change job structures without replacing traditional career status",
        "date": "2026-03-08",
        "originalDate": "2026-03-07",
        "sourceName": "Devdiscourse",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPTFpmVXZHZVV4TGhGbVNlZE0tVGxKUTZzSkZQMzUyREVKeWNrMUZCbzhicE0zcGw1cW5TU2pfYXZkLUVlOTAyUFBnT3dQTGFUbTFockJSYnIxRVNuTWIzQ2kxVGtTb0xhLTQ4OWNqdmRiMUtvci0tRXlWZ0tFalpIVUIxNlF5UGFCNGxhM21LSnZIOGNpazEwdEVWVzBWeERjR1FoTEJROFgxamtiUGlFV19uNk5mdUNVYUxCX2xGRkZSQkJwRDNn0gHMAUFVX3lxTFB3VWhCV3FzR013LWhnR3lSU0JkVk1KQm9jckRnbzlFcWUyLTVkRTE0LWpxRWhYenRycC1jVnhGMTBwXzMtNkRiX3pYTVdDMUpCZ1JIM2YzSmdtOGFXazlIcWdpWkgxaUZnS2xMV2p4OV9mdG1sZDZ6UUNlQ3ZJZWM4aDNwcUowcHkyZk4xWkx6T1J4MkYtOHgwbDRVS2VfOGstcU1ZQUt5T19ZSW5tR2pnTDRrWTdPZm40TlliMXRKNm1VQWZucHVWYllqTA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 전통적인 경력 상태를 대체하지 않고 직무 구조를 변경할 수 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "광운대학교 2025년 예비창업패키지 선정기업 자기소개서 작성의 시작부터 끝까지 구직자를 돕는 커리어마이징 서비스하는 두위드",
        "enTitle": "광운대학교 2025년 예비창업패키지 선정기업 자기소개서 작성의 시작부터 끝까지 구직자를 돕는 커리어마이징 서비스하는 두위드",
        "date": "2026-03-08",
        "originalDate": "2026-03-07",
        "sourceName": "매거진한경",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5MT1dhX2t4VnphU2w5clRib3A2My0zZEtVSTVoNDVsdzk3RllyQXEyT3pzRTR3ei1DZE5NcmVCNEZ1Yk9naldLMy0wakdSSG9KOG5wcDFCd2stZmNDQXJWWWNXZk5DQVVQejRj?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! 광운대학교 2025년 예비창업패키지 선정기업 자기소개서 작성의 시작부터 끝까지 구직자를 돕는 커리어마이징 서비스하는 두위드 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "발품 넘어 'AI품'…달라진 N잡러의 세계 [스페셜리포트]",
        "enTitle": "발품 넘어 'AI품'…달라진 N잡러의 세계 [스페셜리포트]",
        "date": "2026-03-08",
        "originalDate": "2026-03-07",
        "sourceName": "네이트",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFB4eE1jNGhuSjBoeXdtTHBvNEtYWEk3QUI3dzRpVkpRN1llM3h3VmdYV1M0UExibVdxZHB2ZFNlRTRLLUxGSEZxWWdzRU9aQU5KdEJR?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 발품 넘어 'AI품'…달라진 N잡러의 세계 [스페셜리포트] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "서강대 미래교육원, 메가커리어랩과 AI 실무인재 양성 협력",
        "enTitle": "서강대 미래교육원, 메가커리어랩과 AI 실무인재 양성 협력",
        "date": "2026-03-08",
        "originalDate": "2026-03-05",
        "sourceName": "주간한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBTZkd0UVNLY3lSekRzUGV4Y2w5cFJGM2tIVXdhRGFjMnpjMWNMekEyQllkTFdUbVdwSXBoem91bzQ3c0I0X19GSkRyV0RxRVNzMFBTdXozcnd4ZUFpam1ld3ZVUzVOdHJmVW1sd3ptTTk4UVIz0gF0QVVfeXFMUFNmR3RRU0tjeVJ6RHNQZXhjbDlwUkYza0hVd2FEYWMyemMxY0x6QTJCWWRMV1RtV3BJcGh6b3VvNDdzQjRfX0ZKRHJXRHFFU3MwUFN1ejNyd3hlQWlqbWV3dlVTNU50cmZVbWx3em1NOThRUjM?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 서강대 미래교육원, 메가커리어랩과 AI 실무인재 양성 협력 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
