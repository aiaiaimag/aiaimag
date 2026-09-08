/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-09
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "버지니아는 AI 도입으로 커리어 사다리를 강화해야 합니다 | 게스트 칼럼",
        "enTitle": "Virginia should make AI adoption strengthen the career ladder | Guest column",
        "date": "2026-09-09",
        "originalDate": "2026-09-08",
        "sourceName": "Richmond Times-Dispatch",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNbXdIc3hMM3F5MzZ6U1c5UWFnS0JlN1VLNnpxQm1faTBDcVlPajZCMG5EZEdzek5RTk1nTndFaGF1dFR6dzRkMXBqV2w3LTFidXhyY2YzVHJoS0NiTFRIbkpMZTBTdm5WWEl6ODlGYnAxeWlBZGdvWDlKZTUyWHBxRUNfbWNoWW9VZXJSQVNB?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 버지니아는 AI 도입으로 커리어 사다리를 강화해야 합니다 | 게스트 칼럼 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI Jobs Future: Kris Gopalakrishnan의 견해",
        "enTitle": "AI Jobs Future: Kris Gopalakrishnan’s View",
        "date": "2026-09-09",
        "originalDate": "2026-09-08",
        "sourceName": "StratNews Global",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE11RmpXYWFkUERVLXctb1hrVVl4c252WS1rUXVyRnQ1RXBXMHBXZ0NSUWl5MWl3NXRuV2hxV1phUUEtZVp1RVBwNnBXRVBfVFJpUDVudEhuZ1RpcE1PUHVib09lU3UzenVqU1ZkNU03TWgtcV9udDM2dA?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI Jobs Future: Kris Gopalakrishnan의 견해 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "생산성 향상을 위한 최고의 AI 도구",
        "enTitle": "Top AI Tools for Productivity Hacks to Work Smarter",
        "date": "2026-09-09",
        "originalDate": "2026-09-07",
        "sourceName": "KTPL Blog",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNV0x3TUkydERlaTdKeENPLUd3T0RtQ29ITVd1NFZsUEMtRElSVmFaUF9RdTlQREdUYXFZcnRJTjZZcmNEY3dMSEJPdHZnc1hhcUg0RldCWlJLTkRXb2hRd3Q3Ync5YVRHQ3RqVU5yRXdVdWhUZHc2T2haU1YzeVR2VXVLZ0hXNXNs?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 생산성 향상을 위한 최고의 AI 도구 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI 클로드, 10년 걸릴 '페르마의 마지막 정리' 증명 검증 11일 만에",
        "enTitle": "AI 클로드, 10년 걸릴 '페르마의 마지막 정리' 증명 검증 11일 만에",
        "date": "2026-09-09",
        "originalDate": "2026-09-08",
        "sourceName": "DongA Science",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBUTHd4Zng1QnhGV1pfak5XNTNWNXotaGxoeUxJbVdwZ3lINEtrWEt1NkdUVEtENmRGOFN4Q1VpYk01N0tESHZkNWhFSTVnV1V3UEp0Qg?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 클로드, 10년 걸릴 '페르마의 마지막 정리' 증명 검증 11일 만에 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "스스로 앱 열어 메일·예약·쇼핑…메타, AI 에이전트 출시",
        "enTitle": "스스로 앱 열어 메일·예약·쇼핑…메타, AI 에이전트 출시",
        "date": "2026-09-09",
        "originalDate": "2026-09-08",
        "sourceName": "edaily.co.kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNeTZwYkdYZGFKcXNqOGFCV01fd1Q2TTA3TlZaM3BNTDE2a1BpNEZqenZkeldWNkNTU2d4ZzM4ZVFVeE43TTVnVHFMUmJFME1rYWd1V1ZvdlZabGlBVWZjXzdTdFY3VHBsVnNmWXUxMXJKb1FEaUJ6S18yQnhiaWRhVQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 스스로 앱 열어 메일·예약·쇼핑…메타, AI 에이전트 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "'AI가 선생님 대신 학생 상담을'…日통신사, 유료 서비스 출시",
        "enTitle": "'AI가 선생님 대신 학생 상담을'…日통신사, 유료 서비스 출시",
        "date": "2026-09-09",
        "originalDate": "2026-09-08",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5wTFk0VklOM3VmRG1HZ29JNWQ2Wmd0VFVTbjFpQ1lvenY1WllzUzVhUHI1NUZOUnVrODNtS3hGeVMzcjhJSFEwSGR5bmw2N1ZGTS00c3AtWm9WeFVzcF9URNIBYEFVX3lxTE5wTFk0VklOM3VmRG1HZ29JNWQ2Wmd0VFVTbjFpQ1lvenY1WllzUzVhUHI1NUZOUnVrODNtS3hGeVMzcjhJSFEwSGR5bmw2N1ZGTS00c3AtWm9WeFVzcF9URA?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 'AI가 선생님 대신 학생 상담을'…日통신사, 유료 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
