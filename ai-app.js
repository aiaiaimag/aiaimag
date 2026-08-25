/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능 직업의 미래에서 5가지 새로운 커리어 기회",
        "enTitle": "5 New Career Opportunities In The AI Future Of Work",
        "date": "2026-08-26",
        "originalDate": "2026-08-25",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNMm9LRWFVamFfQUY5WFpvRzVLSG1iaFlKQ3MxdElKTGRvOFd3MUtyOUNwV1AxUWFOcVc5MGwyZjdhejRzd3JGN1RHZVZ2clZvTU9JbDlBdjl5WWVBTElmVmRUOUV4blZQZ2tQU2Z1b2ppbGtpcjVtRm1oWHFYVnZIQk8xeTVndE44SmI3MmtqV3pKSUw0M011NUY3MEgwY1VHMjVzb0xHNA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 직업의 미래에서 5가지 새로운 커리어 기회 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 조기 취업을 변화시키는 방법",
        "enTitle": "How AI Is Changing Early Career Jobs",
        "date": "2026-08-26",
        "originalDate": "2026-08-25",
        "sourceName": "Techerati",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNNjRHV29NdWJ4RnVGRUNlbW96aHNhbklqanhXLVZhbU1GMVpab0tsV2ZMTUdCUzBscldTUzlIaW55SEdrVDZUYkc2YktCLXNDVzd0X3ZTeV9reVF0TzA0ZzVJWEJUckF0b21YZWZ5bXEwWlY1bE1SV1VBeTF6TVZvV0Y0NnlGY29jRlNsVUItWElnWG9IUlNlVGFn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 조기 취업을 변화시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "영국, 반즐리 거주민이 미래 일자리에 대비할 수 있도록 AI 교육 계획 시작",
        "enTitle": "UK launches AI training schemes to prepare Barnsley residents for future jobs",
        "date": "2026-08-26",
        "originalDate": "2026-08-25",
        "sourceName": "Digital Watch Observatory",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBWbVp1eUoyNXdNTXNjSEdNdkJNdHNyNktRVVlDUl9veEZHWVVRRU5laVRwSWFUajF1RmNid1BZYkpZbGJ5aXFGWFp1bVFrdlBPUmN2Um9lbU91MDNGWjRqLXM2UW0wc3h4WHJxTzRoSDMtNTQxZWs3WQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 영국, 반즐리 거주민이 미래 일자리에 대비할 수 있도록 AI 교육 계획 시작 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "대학생이면 구글 제미나이 ‘0원’… AI 플러스 1년 무료",
        "enTitle": "대학생이면 구글 제미나이 ‘0원’… AI 플러스 1년 무료",
        "date": "2026-08-26",
        "originalDate": "2026-08-25",
        "sourceName": "한국대학신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBaX0RKc3p2cnQyRFB1Ukp3dGlOYXNXWGxUVGZGcE16aXZRTTBkeXZyV3A5dmFrcVJGR0twRWllcFhCOE5UN1V0T1JfbzBJUnVwWkNHajRKR012ZjhRLW9jTzlJbVlLdw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 대학생이면 구글 제미나이 ‘0원’… AI 플러스 1년 무료 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "이스트소프트, 비개발자 위한 AI 마크다운 앱 '마크닷' 출시",
        "enTitle": "이스트소프트, 비개발자 위한 AI 마크다운 앱 '마크닷' 출시",
        "date": "2026-08-26",
        "originalDate": "2026-08-25",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9qZXVOS3EtcWUwSmpWZGNyVDhtdGt4WXZza0o3RW5lM04weFhyNmpfRGNpel9OZWxIV3I3amJjWHBFallmSmpOWV9YOTJwVkdBRXZ4eVVUam5KdGVhWTJRM3Rnd1NHTzJaR1E?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 이스트소프트, 비개발자 위한 AI 마크다운 앱 '마크닷' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "리퀴드 AI, 스마트폰용 AI 벤치마크 앱 '피펫' 출시…무료 이용 가능",
        "enTitle": "리퀴드 AI, 스마트폰용 AI 벤치마크 앱 '피펫' 출시…무료 이용 가능",
        "date": "2026-08-26",
        "originalDate": "2026-08-25",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTFAyTy1IV0l3bjJnMkZTU21kcE04X0x4NEI5MnhPLTQzQ3k2LXNxOE1LTW1BN18tMWFlNXFFeWZTZVV3QURQc2gyMUtaeEcxYTRPS3RwYUpPaEVVMDVieThUNE8ySWNIMWxKRGxzMG9nSXhESnM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 리퀴드 AI, 스마트폰용 AI 벤치마크 앱 '피펫' 출시…무료 이용 가능 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
