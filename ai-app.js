/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "남성은 여성이 기반을 잃음에 따라 AI를 가진 직업에서 더 많은 경력 발전을 봅니다.",
        "enTitle": "Men see more career advancement in jobs with AI, as women lose ground",
        "date": "2026-11-08",
        "originalDate": "2026-11-07",
        "sourceName": "The Washington Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNk5OVzNZenhsMVlXMHRod1RNSGlOTklPd1NPZjZiaFpYdGdBMWRWdUJ3c21sNEwwUWpEX21xMEdJQjV1bVhvNm1qXzZaNU5QazRUMGZoNmZCVy1BYkVONm53aUlXVm5jLWpHdjNSSHJiNmY1czZYMXRJZnY4TXVWRDdLSlZKSVBKTjItUWx0NFNOa19EUzg3WF9Zc0NMYkFpc2J6bGhpOEtsUy1pRG5XQW15aWU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 남성은 여성이 기반을 잃음에 따라 AI를 가진 직업에서 더 많은 경력 발전을 봅니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Microsoft AI Economy Institute 공개 통화 4: 글로벌 연구자를 위한 $ 75,000 연구 보조금 – AI, 일자리 및 업무의 미래 (2026–2027)",
        "enTitle": "Microsoft AI Economy Institute Open Call 4: $75,000 Research Grants for Global Researchers – AI, Jobs and the Future of Work (2026–2027)",
        "date": "2026-11-08",
        "originalDate": "2026-11-07",
        "sourceName": "Global South Opportunities",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBqRnZST092dVZMUXNhb05WQ2gyMktoSmU1djRlUElQa3o3V2pQV0hLU29XTDM2U3AzYnlUQmFWY1YwOEVRQXVBRUhOQkx5djl4T3FkazNIV0JCaXVWU2ViU29yXzVkM3FINXJQaw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Microsoft AI Economy Institute 공개 통화 4: 글로벌 연구자를 위한 $ 75,000 연구 보조금 – AI, 일자리 및 업무의 미래 (2026–2027) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Microsoft의 단점: AI가 우리의 일자리를 빼앗고 있습니까?",
        "enTitle": "Microsoft cuts: Is AI taking away our jobs?",
        "date": "2026-11-08",
        "originalDate": "2026-11-06",
        "sourceName": "The Indian Express",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPN1lFV0huVl9oSzZiTTczWlFhanJNQmUxb2UzeldLQlRQa1lhcm1XTkh6X2pkNDUwZ2ZYN3Jyem5MTmwxZC1MVEdlY3g0VzZUVlozU3JFei1EbldBb2RxbGpVbFVVMW1ub2ZmVlNqMzQyMHN1NkczaExHX0dIQ0Ntc3dEMnJwM0JFQmNMZ1VoeFd5Q2lNSkZkLXVZYVZ2aHZXcGQw?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Microsoft의 단점: AI가 우리의 일자리를 빼앗고 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT, 오래 쓰는 ‘생활 AI’로 자리 굳혀..국내 앱 이용자 첫 1800만명 돌파",
        "enTitle": "챗GPT, 오래 쓰는 ‘생활 AI’로 자리 굳혀..국내 앱 이용자 첫 1800만명 돌파",
        "date": "2026-11-08",
        "originalDate": "2026-11-08",
        "sourceName": "한국정경신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1tS2M2UGswNzlwTXYwMHZKeFFLNGxBdEwxNWhwbVcxc2U0MnRmRmZ6aVZHRTFmZnpnalU5NFdOS1NidnNpTkF2S3RjR0xxbmpUS1E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT, 오래 쓰는 ‘생활 AI’로 자리 굳혀..국내 앱 이용자 첫 1800만명 돌파 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "챗GPT 국내 앱 이용자 1876만명 역대 최다…클로드도 1년 새 15배 급증",
        "enTitle": "챗GPT 국내 앱 이용자 1876만명 역대 최다…클로드도 1년 새 15배 급증",
        "date": "2026-11-08",
        "originalDate": "2026-11-08",
        "sourceName": "Chosunbiz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNeGp0akFOVlNQYzhlb0lhaHRBRlBXcnF0UlZwNXJ1NzJ4TEhQckZYd1J2Y1ZTckJIUmh2WUUwYVhvUTF6U0FNNGJRVkdCek9YWFZyWmFLR3pacElYX0Q3blB5Z1Fnd0NSNjVsalFaa0lmQjd1ZnEtWDk3ckFpdDlIcG1B0gGWAUFVX3lxTE5SQXpEWTI2Y01iTlVIdEYxS01qckE2M012RldUcFBEYUxlZGs3RkNndnZMc3cyVkxjclI3ZTBNVW42cjcyZGRDT2ZmZTJOczJlMDdxUmhqOS14Y1FiR3ZRSWhGbjdRREZTLVdrSjA3cTBVYVJENUlJOTg5eWdwUkdoOWlQNWhLNUVMSGR1WklNc2t5LTBCZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT 국내 앱 이용자 1876만명 역대 최다…클로드도 1년 새 15배 급증 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT 국내 앱 이용자 1800만명 돌파… 클로드 2위 도약",
        "enTitle": "챗GPT 국내 앱 이용자 1800만명 돌파… 클로드 2위 도약",
        "date": "2026-11-08",
        "originalDate": "2026-11-08",
        "sourceName": "천지일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1jWHpUV1p2aWdCVU0tbldaNmNsMkxCNHBuaUJDQ1JmMkRTTFZJLXhxWjV4aUlSQ2ZRNFRNMmZKc0cxd0dWTW0yWWNIaE9KWWxyLS1TVkJJdlJkUWMyZTB3ZzBBR0NDaFRpVnc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT 국내 앱 이용자 1800만명 돌파… 클로드 2위 도약 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
