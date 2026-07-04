/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-05
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI가 일자리에 미치는 영향 방글라데시 | 방글라데시는 미래의 일자리에 대비하고 있습니까?",
        "enTitle": "AI Impact on Jobs Bangladesh | Is Bangladesh ready for the future of work?",
        "date": "2026-07-05",
        "originalDate": "2026-07-04",
        "sourceName": "The Daily Star",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxNbkRyWFl5dkIzcVIyQ2MwSWxCMVJORm9MTFlwSXFOYVIxdXYwR0hGTkV1R3A2aTMyeW0zdkNVTjlpazJtOG9FcG1vRjZhNlQtQ1ZaM19fYnBxMnhWTWRPQlg5azRKOU1udnhEV1ZGZUVqN1VNMEh6NDNCM2ZPS3pTVHQxSUdvSklTeHVFaXM2aEtlVWNNX293M2E2ZUthdw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 일자리에 미치는 영향 방글라데시 | 방글라데시는 미래의 일자리에 대비하고 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "VC 마문 하미드, 인공지능, 스타트업, 그리고 일의 미래",
        "enTitle": "VC Mamoon Hamid on AI, Startups, and the Future of Work",
        "date": "2026-07-05",
        "originalDate": "2026-07-04",
        "sourceName": "StartupHub.ai",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOS0xBb0VwQUVRdVA4Y1FmVE14SkNpeVEwQUpPUGxpX200SlRONE83cDlLNVFWWUhCTjd3NTRVZDlrRk9hazBZYV92TEszTnU0dW1PQ2dkcU9WR2kzX2EtN0NtMVBoY01Gdzk2LWhBbFJoX1ZCWVhlWjA3RmpSdnZTM05IMFZVZW9NM2hZV2J0UnJ3azF0NmpLeVBsTnkxWHNIYlBXRlZWZW1iM2c?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! VC 마문 하미드, 인공지능, 스타트업, 그리고 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "일의 미래",
        "enTitle": "The future of work",
        "date": "2026-07-05",
        "originalDate": "2026-07-03",
        "sourceName": "Chris Skinner's blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5xTlpwZXRDOWNVMnQyMU9faXZIS2pKcTBTQ2dUTmpFZ2dEVHM1ZEZKZzlENVlfZGN3cnllOXZqaExXd19jWldmS1Jta3hXNE43Q2xxa1puaXdqLTZwalFB?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "메타, 앤트로픽 '클로드' 직접 서비스 추진...\"클라우드 진입 준비\"",
        "enTitle": "메타, 앤트로픽 '클로드' 직접 서비스 추진...\"클라우드 진입 준비\"",
        "date": "2026-07-05",
        "originalDate": "2026-07-04",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9CSEJFX3VEUmhKOUUwVHFXbi1kLTV3UzB1emNBOXF2aHVES21Kck12VTRGTnBOVHJLWTZ3T1FUUW9FMGZ1ejZjWWVZMUVtNmR1Zzh6QjFfWkxOWFJ6Tkl0aGhLWGFyZE5tVXc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타, 앤트로픽 '클로드' 직접 서비스 추진...\"클라우드 진입 준비\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 이슈트렌드] 월드컵 32강 탈락 속 '호남 반도체 투자' 논란 주목",
        "enTitle": "[AI 이슈트렌드] 월드컵 32강 탈락 속 '호남 반도체 투자' 논란 주목",
        "date": "2026-07-05",
        "originalDate": "2026-07-04",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFAtc0JrRmtXVVdqQ1RGNk56ejYyb3dQY28zMW9SWXF3cWo0VHJQM1dxb21MVFdoSGxHLTl4Ny1mSXgxZk9KWDVnWkdjQ25zeF9lcHRWaUdaZUNLU2xVOHAxSmtxQjU2Z1JBd0E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈트렌드] 월드컵 32강 탈락 속 '호남 반도체 투자' 논란 주목 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[인공지능 줌인] \"AI를 많이 쓸수록 인간의 판단력이 약해진다\"…과학자들이 경고한 '감독의 역설'",
        "enTitle": "[인공지능 줌인] \"AI를 많이 쓸수록 인간의 판단력이 약해진다\"…과학자들이 경고한 '감독의 역설'",
        "date": "2026-07-05",
        "originalDate": "2026-07-04",
        "sourceName": "위키리크스한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9kRVdxLWtlcHRYZGFjUXZMVk5WTVpGbnJYU21mTW1Kc2RsTFNPRkwtUlVlc0JHLXRZZHJFWFdXenUydHBiOGo0Nl9rMXgyeVlqelQ2NWw1eUkyaTc0WDI5QmRIS2FnblJRYTUzdC1sdw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! [인공지능 줌인] \"AI를 많이 쓸수록 인간의 판단력이 약해진다\"…과학자들이 경고한 '감독의 역설' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
