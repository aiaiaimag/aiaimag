/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "아프리카의 차세대 인력: AI가 창출할 일자리",
        "enTitle": "Africa’s Next Workforce: The Jobs AI Will Create",
        "date": "2026-08-10",
        "originalDate": "2026-08-07",
        "sourceName": "Forbes Africa",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQSHRJR09zN0dMRnpLYjVad0RFTURCdmlfNVpkZU5LUFdzMXhSYXFUQ05qaFY3RnZoVE9SZElXaFQycG5jZzJOaXlOY1hWMUFOVEkwczFRakZjYUlWVmpSYUNsN09JR3FPaVBSOWFvdGRQX3RKcFhJTjlIY2dXeGNXblRpc3RzbkppaVI2V3Nrc1QwMzQwVFBnRktKVXZMVnNC?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 아프리카의 차세대 인력: AI가 창출할 일자리 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이",
        "enTitle": "Join us on 8-21-26 for “Hacking Productivity with AI” – Super Cyber Friday",
        "date": "2026-08-10",
        "originalDate": "2026-08-06",
        "sourceName": "CISO Series",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNYm9fSjlEdG9KVzJDcExtUWE4RENHVmJOdXhJaE5zY3hWSnFhekoxeGZYci1rVUxYTDFpX2JGY3ZTOTV1ckV4QUJIZVBlUzh4RGhYT1N2NEotU1haT1ExdlV0eE5Pa0RKY3EyS3N0SE9kX0FqQkVDMHRtamwyS29TQjdwX21lN2Q3cUlSLXptRjhlMUg3Q0oxSW1B?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 8-21-26에 참여하여 \"AI로 생산성 해킹하기\" – 슈퍼 사이버 프라이데이 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "기술 분야에 종사하는 모든 사람들이 왜 그렇게 슬퍼할까요?",
        "enTitle": "Why Is Everyone In Tech So Sad?",
        "date": "2026-08-10",
        "originalDate": "2026-08-06",
        "sourceName": "Noema Magazine",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBjZFhRZDRYRjlMLVQwcEE1Z0tPNGZna3Y3SFJzRHJKT0hSM1ZwOW5KZzJ4c19FRmVLYTZzOEliWjF6bFd3QV9OVF9XODZlVHcxak5zWHJFSDF5V0hPbVJ5SFE0dWxuZw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 기술 분야에 종사하는 모든 사람들이 왜 그렇게 슬퍼할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "오픈AI, 챗GPT 무료도 최신 모델 무한 지원…'아스트라' 출시 연기",
        "enTitle": "오픈AI, 챗GPT 무료도 최신 모델 무한 지원…'아스트라' 출시 연기",
        "date": "2026-08-10",
        "originalDate": "2026-08-08",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9SdHN2Q1ZrSHpTb2pzN01ndl8wc1E1ZWQ2MzhXeDZSMW8xc01ZbktyTWNwUDRmeHlIaG9FelJILVJvNXluTU1Ba2NweHUwdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 챗GPT 무료도 최신 모델 무한 지원…'아스트라' 출시 연기 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "식품 트렌드 분석부터 상품화까지 AI로 ‘뚝딱’… K푸드 날개",
        "enTitle": "식품 트렌드 분석부터 상품화까지 AI로 ‘뚝딱’… K푸드 날개",
        "date": "2026-08-10",
        "originalDate": "2026-08-09",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9YZW0yQlBNTlVrZldDNG51Z1VsQWJETXBGejBpWHJYM3RBNDF0ODZRWW1zYXVkRHdIaVlzOU80S1dDU0dZX2lZQmdicEVwNkE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 식품 트렌드 분석부터 상품화까지 AI로 ‘뚝딱’… K푸드 날개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "'AI 수익화' 방향 다른 네카오, 엇갈린 실적 - 머니투데이",
        "enTitle": "'AI 수익화' 방향 다른 네카오, 엇갈린 실적 - 머니투데이",
        "date": "2026-08-10",
        "originalDate": "2026-08-09",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE12YnhZMmN4X29RaUhjQnV6Y3k3cGNmTEtNakppTkJ2T3M2R1FreHNOeGZiNU52SXZhNVBVWFFpLXp6M2ROVGxhRnBYZzc0a3pXRWN0UFBRRE81eUh5b1pxZ05nZU5ndTFWVjRDVNIBbEFVX3lxTE12YnhZMmN4X29RaUhjQnV6Y3k3cGNmTEtNakppTkJ2T3M2R1FreHNOeGZiNU52SXZhNVBVWFFpLXp6M2ROVGxhRnBYZzc0a3pXRWN0UFBRRE81eUh5b1pxZ05nZU5ndTFWVjRDVA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 'AI 수익화' 방향 다른 네카오, 엇갈린 실적 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
