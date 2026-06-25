/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Chamath Palihapitiya는 AI 작업 묵시록을 거부합니다",
        "enTitle": "Chamath Palihapitiya rejects the AI jobs apocalypse",
        "date": "2026-06-26",
        "originalDate": "2026-06-24",
        "sourceName": "Axios",
        "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5QRVpjQy1EU185Z3BkMUhYc0dfcld4aGhXR281TGpkU21taWl4ZTFNZTItcEFvRkdsR3hwUHN1VzVlcnV1WnRpQVlrcGp1THpFU2Q5bG9sUU02d29icENCRm0yZlYyVmlPS2lVLTVmNHNZQmpLODRRV2V1MA?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! Chamath Palihapitiya는 AI 작업 묵시록을 거부합니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "실제로 시간을 절약하는 최고의 AI 생산성 해킹",
        "enTitle": "Best AI Productivity Hacks That Actually Save Time",
        "date": "2026-06-26",
        "originalDate": "2026-06-24",
        "sourceName": "Analytics Insight",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONXR3X01HbUQxeTU5dUlsdkZweDRRWlU3Z3JpcDVsYmdqWVhzNEx4cFRZbHZMNkpZcURRZFB6bUZRSkx5TjU4RG1HaDBBSlJ2cnJiTXYtb2d2RXBHZjRWMXNqQ3NRMGFLV1RBejl2SDdKMEplZWdadUVYYW1FWGtEd0VNRjJQVnl3RW40bDdwOWZNLURHWjlNd09XNlpmTkot0gGgAUFVX3lxTE41dHdfTUdtRDF5NTl1SWx2RnB4NFFaVTdncmlwNWxiZ2pZWHM0THhwVFlsdkw2SllxRFFkUHptRlFKTHlONThEbUdoMEFKUnZycmJNdi1vZ3ZFcEdmNFYxc2pDc1EwYUtXVEF6OXZIN0owSmVlZ1p1RVhhbUVYa0R3RU1GMlBWeXdFbjRsN3A5Zk0tREdaOU13T1c2WmZOSi0?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 실제로 시간을 절약하는 최고의 AI 생산성 해킹 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "‘전멸과 변화는 다르다’: 아마존 경영진은 수천 명의 Z세대 졸업생을 고용하면서 AI 직무 종말을 두려워한다.",
        "enTitle": "‘Wipe out and change are different’: Amazon exec slams AI job apocalypse fears as he hires thousands of Gen Z grads",
        "date": "2026-06-26",
        "originalDate": "2026-06-24",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOTW1aWU5zbTB3WjBZdHIwSVBGS1VlVERQN2RWeG1iQ0xSRi1ScThZX2ZyT0hwS0x0SnkwWjJBZ21Cd1JZNmJqYWlvb1Izbk83YnVCNlpxbmJYVkNWNGFRLTZ1eFd2WVdGeUJZc1BNME9rQmdxeXBibHlrY0dJWEotQ1c3UVplYlk3RUtNZzJyVGN1dzVWTmlGLXRpbTRuMXBBTnJBVW4xblZPdG50bFlPNGpaYzRPd0IzWXZvMzlmb3JiV1RNUUYxa2t1UEFyRlRLcDBMag?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! ‘전멸과 변화는 다르다’: 아마존 경영진은 수천 명의 Z세대 졸업생을 고용하면서 AI 직무 종말을 두려워한다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "WP “챗GPT는 AI 중 가장 좌파…제미나이·클로드는 중립”",
        "enTitle": "WP “챗GPT는 AI 중 가장 좌파…제미나이·클로드는 중립”",
        "date": "2026-06-26",
        "originalDate": "2026-06-25",
        "sourceName": "문화일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1BamtzM3hXT0RHNy1DeVpfcHBxWlZrRXUtSHIwU01SZmxwNlpKdHpDQVJFMmxaTzNhaXpHRTdpQnMtWjlJcDE0RDdodnVpWDlF?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! WP “챗GPT는 AI 중 가장 좌파…제미나이·클로드는 중립” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "﻿클로드 오푸스급 성능, 이제 누구나 무료로 쓴다 ﻿[정원훈의 AI 트렌드]",
        "enTitle": "﻿클로드 오푸스급 성능, 이제 누구나 무료로 쓴다 ﻿[정원훈의 AI 트렌드]",
        "date": "2026-06-26",
        "originalDate": "2026-06-25",
        "sourceName": "IT조선",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBlYzNRZ2UzYnFGUHgyYUNLbjBHbEt1YTQ1QlZQZnBEOWcyakNXdVhkd3V5MmFJT2I4djFsSmozVjFTZTVTSmJBcm5uNC1Bd2phSzN4RlFFV19hSjdpNmhkLUNkTVVHbXJycnJxZDNFLVjSAXRBVV95cUxPanZLMDhZM0d0TW9vdElaU2pYYjJpSGhBb1R3UDI3MzUxdnBZTnBCaVZGY2MwTWRsY0ZtVXJHeXhuV1QyVFJrS0ZqMkVhNE90OEkxMFhqdE13bUZXcGRXSDJYOGNybkU4RFFiY1R1aFQwck5ESg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! ﻿클로드 오푸스급 성능, 이제 누구나 무료로 쓴다 ﻿[정원훈의 AI 트렌드] 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[단독] “강남에 콘센트 있는 넓은 카페 추천해줘“… 네이버, 대화로 검색하는 ‘AI탭’ 정식 출시",
        "enTitle": "[단독] “강남에 콘센트 있는 넓은 카페 추천해줘“… 네이버, 대화로 검색하는 ‘AI탭’ 정식 출시",
        "date": "2026-06-26",
        "originalDate": "2026-06-25",
        "sourceName": "조선일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQLXFGY1pqYmxLLUlzcHZaYk9FYlNfczVrZ3d0clpnMXB6VmFVZ0pScDRKQmYwdHdXaTlnb3Z1ZlFaMzZ3bGxpU1lrLUJfVE9DeXdYZjZBX0pybHNnOV9XZ1k3eHgwRTZtR2x0X2hVWEttVXFWeVIyT2NwelJUbUNYcXpOTQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [단독] “강남에 콘센트 있는 넓은 카페 추천해줘“… 네이버, 대화로 검색하는 ‘AI탭’ 정식 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
