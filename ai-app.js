/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-06-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "태국인이 인공지능과 함께 생활하고 일하는 법을 배우는 방법",
        "enTitle": "How young Thais are learning to live and work with AI",
        "date": "2026-06-14",
        "originalDate": "2026-06-13",
        "sourceName": "Bangkok Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOeGNhWkhMSXVMNFZ1bHl2RWNFNDZ5bG14OUlUYnR5TEpLMkVMRTBSZlFHdzdLZkxULU1nTWVGdjlaam5QVEQyaUxkSkJSOTRSMXVLU0ZHSlo3blM2VWF4Z2VFc2VGd19ZbmhCZEtuQ1JQa0psR29qTGlJa2gwczllSjg1WEMtbW4tNEcxdTcxYm1XcWp4Sm9VV1YySnNRYmJ1SGp6S2FPSW82RWJOWkQza1J5S2g?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 태국인이 인공지능과 함께 생활하고 일하는 법을 배우는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Z세대가 업계 베테랑보다 더 나은 채용 베팅인 이유에 대한 자율주행 트럭 유니콘의 배후에 있는 ‘AI 슈퍼스타’ CEO",
        "enTitle": "The ‘AI superstar’ CEO behind a self-driving truck unicorn on why Gen Z is a better hiring bet than industry veterans",
        "date": "2026-06-14",
        "originalDate": "2026-06-13",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQT2kycEJ4VjlnbXZIUEYtdTVGWlBxbFU1bXAyUnJoZ044U3BWcHhMVTQ5WE1zaTR3OUNINHZjb3UxcjFSUHFnX3VGUVFPVWI5RzBEYnB5bXdCUnp6dV9zalZldGpSOFh6Wl9xZ1dFZEt3bmJ2UWs4dDFTYnJheFo5b1BVdXBCNTBMbFYtdC1uVmd2Qkt4SFd5eHIwTlhKTUZIVjVCd3d4RWc3ZVdfVGJ3SWRYX2FDeEhlaVlwSk1OXzhzNjBrcnZYbnp3?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대가 업계 베테랑보다 더 나은 채용 베팅인 이유에 대한 자율주행 트럭 유니콘의 배후에 있는 ‘AI 슈퍼스타’ CEO 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "생산성 도구에 대해 알아볼 블로그 게시물 97개",
        "enTitle": "97 Blog Posts To Learn About Productivity Tools",
        "date": "2026-06-14",
        "originalDate": "2026-06-12",
        "sourceName": "HackerNoon",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBMVmpxeGRiai1jZkFCOFAzZWhFZTB4dUpCWk5IZmNyazN5dlR4NUt6RlRoMUs1Ykx3WVBzU3ZveElUdkZJSG94amFQX09EanVRN256RUIyNmdrY1hEMTI5UEtTRVhoMUVySDctRS1vaks4Si1sU1F4bmRR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 생산성 도구에 대해 알아볼 블로그 게시물 97개 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드 페이블 5, 출시 하루 만에 너무 막힌다는 반응이 쏟아졌다",
        "enTitle": "클로드 페이블 5, 출시 하루 만에 너무 막힌다는 반응이 쏟아졌다",
        "date": "2026-06-14",
        "originalDate": "2026-06-13",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9nejdRd2RodEZyajhsRjcwdERVcWxrY0VDeTVRYUNXSVFFbGRkamNYSGlfSzZSVWJsRnoyX2U2ekFkbDBDTXYxZlN6T3hsM1hZUmpzZ3lnU3BCdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 페이블 5, 출시 하루 만에 너무 막힌다는 반응이 쏟아졌다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[인베스트] AI가 직접 비트코인 사고 판다…코인베이스 자동 거래 서비스 출시",
        "enTitle": "[인베스트] AI가 직접 비트코인 사고 판다…코인베이스 자동 거래 서비스 출시",
        "date": "2026-06-14",
        "originalDate": "2026-06-13",
        "sourceName": "위키리크스한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFB4aHVqcm5nd1BQc293bm53RGNZZ2huUUdYQmFRWjI3UWN1MzJld2VnOWhNekZGbUNVZ0pJRkI5eWRtTHJTdVRvaFB2LU15bFV4RTBTUUprQjNyUTVCNlItX3d6aDR2blhxY2JWbXk0NA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [인베스트] AI가 직접 비트코인 사고 판다…코인베이스 자동 거래 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "수원특례시, 인공지능(AI) 기반 지능형 모바일 전자고지 서비스 체계 구현",
        "enTitle": "수원특례시, 인공지능(AI) 기반 지능형 모바일 전자고지 서비스 체계 구현",
        "date": "2026-06-14",
        "originalDate": "2026-06-13",
        "sourceName": "유교신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5NMk5OWTMxeVNwbHlJQk1rT1pNcV83VC1CdmNTUlNTZEdtX1pkMWVsRFBOYzZCOUxTS2d4Q2FhaFF6QnpCV1JsSGN1c05iVVVOVDM1VVpwNnFYLThheFE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 수원특례시, 인공지능(AI) 기반 지능형 모바일 전자고지 서비스 체계 구현 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
