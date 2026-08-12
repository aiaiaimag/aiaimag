/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공지능은 일자리를 파괴해야 했습니다. 대학살은 어디 있지?",
        "enTitle": "AI was supposed to destroy jobs. Where’s the carnage?",
        "date": "2026-08-13",
        "originalDate": "2026-08-12",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE85RVJfLU9XbWFoYlEzQ0hqdWxJVlJBZUxIcnk1VnZkR0JiVHNvSDVEelVmbDU4Ung2M3FJQUtncTNDUDR2NDJ0RkgxUWJEZEd4VzY5WUlJTGhGenVqOTZRcEYzcFNPc29xT2pYRUdFcF9kZFpEa2VXZQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능은 일자리를 파괴해야 했습니다. 대학살은 어디 있지? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "마크 주커버그 (Mark Zuckerberg) 는 일자리의 미래에 대해 논란의 여지가 있는 메시지를 보낸다.",
        "enTitle": "Mark Zuckerberg sends controversial message on the future of jobs",
        "date": "2026-08-13",
        "originalDate": "2026-08-12",
        "sourceName": "thestreet.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPVmstMFJHWVZpS3VLeDNnV2c0djdadDRUM0Fucldka1h5bjd2YUlPVHdlMzJiOVlTLW5ONkJrVkEyMkVsUXlSUkVZLWxGLTZ5X1d6VUFrcHVRaHNyMmhXMDZyLWt3VDJXSXNVc3d0YkZETU5ZQV9kOHNGYy1tejVFblEzRG5RWUE4WktlcA?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 마크 주커버그 (Mark Zuckerberg) 는 일자리의 미래에 대해 논란의 여지가 있는 메시지를 보낸다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "HR 리더는 미래의 직업을 위한 전문가를 갖추기 위한 획기적인 커리어 가이드를 출시합니다.",
        "enTitle": "HR Leaders launch landmark career guide to equip professionals for the future of work",
        "date": "2026-08-13",
        "originalDate": "2026-08-12",
        "sourceName": "citinewsroom.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOclFEbG8wd0gxV2ZGa1J2U1dzLTdZWDRRWWNKMUVqd1ZfTnBMVHVnZHNzaXJxUmRpTTd3b1l4bl9WdE9ab3lYS09zMTNWNEp1Y2M5Y1YtWXcwcUpFdU1INlZjX3BZRnkzSjBLcjA0T3ZtaEp5MGktdFNNXzhXS3dqaXkwV2ZVdXFuZXRKeU1zcG5SeTRDa0NIM3J1QjFkMGwwak5YUXFFNDltZlVhaUo2TzhidjMzczA4Vkw0dUJJVEg?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! HR 리더는 미래의 직업을 위한 전문가를 갖추기 위한 획기적인 커리어 가이드를 출시합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "앙기, Gemini AI 플랫폼에 연동 앱 출시",
        "enTitle": "앙기, Gemini AI 플랫폼에 연동 앱 출시",
        "date": "2026-08-13",
        "originalDate": "2026-08-12",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9aUDNrRGNITHhRMWtuTHhzMGhzeHhDdkpJN3FUWEwxR2Z2N0lsR1NWeVlvaTVkUUxwcklSNnRCVGlxQWlYaGxRLTkwcDJOMS1tZ29wME11Ym1pT2lrV1Q0YWU1WmJZbmR1MFhsbTBsOHU?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앙기, Gemini AI 플랫폼에 연동 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "바운드포, AI 토큰 지출 관리 서비스 '파레토' 출시",
        "enTitle": "바운드포, AI 토큰 지출 관리 서비스 '파레토' 출시",
        "date": "2026-08-13",
        "originalDate": "2026-08-12",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFAycXFTOC1NR2ViN0I3X0hDVmM2M3I0bFRyOXdjMzViUDJvdXMteThoODNWX1NBZkpWTEp5dldTa2VvVXNneW9xZFJ4WFVXT3p2emZVSzFmRFRHNFlPWHgyNVI0cTkxVUw2WkE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 바운드포, AI 토큰 지출 관리 서비스 '파레토' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "충주시, NHN와플랫과 손잡고 ‘AI 생활지원사 서비스’ 도입",
        "enTitle": "충주시, NHN와플랫과 손잡고 ‘AI 생활지원사 서비스’ 도입",
        "date": "2026-08-13",
        "originalDate": "2026-08-12",
        "sourceName": "충청미디어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9GLUV4ZWRMZy1LSFh5WU1haGdTMlpvRC1ma0VNalYtTHN1MXJ5cDJwWjl3ZUdaZ2tHeFJTUHFaemU2VWhmV19TVWozc1A3NEhpWkxSS1l0ZmRHSmw0bEE1T2xTZHcxWWxYNFHSAWpBVV95cUxPRi1FeGVkTGctS0hYeVlNYWhnUzJab0QtZmtFTWpWLUxzdTFyeXAycFo5d2VHWmdrR3hSU1BxWnplNlVoZldfU1VqM3NQNzRIaVpMUktZdGZkR0psNGxBNU9sU2R3MVlsWDRR?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 충주시, NHN와플랫과 손잡고 ‘AI 생활지원사 서비스’ 도입 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
