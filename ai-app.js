/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일의 미래가 도래했습니다: 당신의 직업은 미래에도 견딜 수 있습니까?",
        "enTitle": "The future of work has arrived: Is your job future-proof?",
        "date": "2026-03-13",
        "originalDate": "2026-03-12",
        "sourceName": "Bangkok Post",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNWnZLVmcycFlIT2pGdk5Bc1lzalRJYUFVTU1laEFhakN2NFQ4SlNyUnBDc3g2LURQR3lJdVBNUjVObkNUWG15OUN1c1FZUXZQcEtQbDl1TEx4N1ZzVDVfVHZaRW1IekRDVDlFVHNubU12Q2dTUjBPU2RZVkJLUkFtclh6RTFUQXdoUUFyVERhQ3lRT29XOVBINTdJT0RTQWdlNXJJQkQ2VWJPTGs?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래가 도래했습니다: 당신의 직업은 미래에도 견딜 수 있습니까? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Gartner는 업무 도구, 채용 및 데이터를 개선하기 위해 AI에 대한 팁을 제공합니다.",
        "enTitle": "Gartner tips AI to upend work tools, hiring & data",
        "date": "2026-03-13",
        "originalDate": "2026-03-11",
        "sourceName": "IT Brief Australia",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQcWszSVRuSEFZWllRMkd5dm1RVmgwcjBOSlMxVGl2cDFDNUFMSWNIZ3BCZVFXN2dFV0RKdUJ4MU5MRXN0QmFnd0xEd2ZWT1hMcVlFaEpJeTltdi1STGdybkozdEt2MEVXdms5V1laTTBmZkJrcW82Qzk4cWdnZUllSnZ3?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! Gartner는 업무 도구, 채용 및 데이터를 개선하기 위해 AI에 대한 팁을 제공합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "자동화와 로봇 공학이 전 세계적으로 일자리와 업무의 미래를 변화시키는 방법",
        "enTitle": "How Automation and Robotics Are Transforming Jobs and the Future of Work Globally",
        "date": "2026-03-13",
        "originalDate": "2026-03-11",
        "sourceName": "Tech Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQZ3FfYzNlVS05dExGQnRhOS1XTWE2TEJ2TjVfcVdPS21vRHlqeDh6OXllWHp1WFA4cEluN3hxSTc0OWNQQmxfQjdqWV82NEtBUE9fUUR6X2hiNWNDVlFNTWVIcnRvanZLZGszbDJBbUVaZ0w3eWVyUl9OTUNtX1JudVM4Y0N6S2N6d19kVXNBMmxaWmRpWUVsWHJTbHNrMHFPcmdGTEJoUDREb3hpTTVCNU1oLUF5bWZPTlJDaEN3?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 자동화와 로봇 공학이 전 세계적으로 일자리와 업무의 미래를 변화시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI와 진지한 대화도 가능... 뇌과학자가 알려주는 꿀팁 몇 가지",
        "enTitle": "AI와 진지한 대화도 가능... 뇌과학자가 알려주는 꿀팁 몇 가지",
        "date": "2026-03-13",
        "originalDate": "2026-03-12",
        "sourceName": "오마이스타",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE8tSzE3ZjRFQjdJb0cyTlN5anFMMUZSclJrbHdMbTk5UHZ6bUNLNXhCR005Tk5PcEdsMlBaM3l0NEE4bkZXRWdsaTFqc0ljcGg5dkxPbnk4cmFxajcxLURiZTJPd3NMdUV6N1BCTHg5eTdBSzlWeXJLQnhEbFJhdw?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! AI와 진지한 대화도 가능... 뇌과학자가 알려주는 꿀팁 몇 가지 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "“나도 AI 콘텐츠로 퇴사할 수 있을까?” 프롬프트부터 수익화까지, AI 크리에이터 되는 법",
        "enTitle": "“나도 AI 콘텐츠로 퇴사할 수 있을까?” 프롬프트부터 수익화까지, AI 크리에이터 되는 법",
        "date": "2026-03-13",
        "originalDate": "2026-03-11",
        "sourceName": "캐릿",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTE1vNC1qbkN4WFotb2tTdnZMTFJHZzRUQW1vc2g5d2pZRzBHQ0NGZDJ3ZXpncWtGUnloRnZEbnA3QXA?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "2030을 위한 AI 실무 팁! “나도 AI 콘텐츠로 퇴사할 수 있을까?” 프롬프트부터 수익화까지, AI 크리에이터 되는 법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "사람인, 'AI 에이전트'로 HR시장 혁신",
        "enTitle": "사람인, 'AI 에이전트'로 HR시장 혁신",
        "date": "2026-03-13",
        "originalDate": "2026-03-10",
        "sourceName": "한국경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1BeUJ6V2JHYW5mRmQxV1ItWHhfSVVQdWlTV05qWVY4MnFKckotMEFLdHdZenVTOEpmQUJXZ1hpcHVsSjV0ZUVsOVdHck5pLUVCbzJDSWlJX0FOZ9IBVEFVX3lxTE1Hckt3Sl9zSV9VX1RKZDg4ejBlUXJnNWNUbEFmWXhKWGp3SzEtVDhYcl85aU1EUnRodGhBR0ZtZTBPbVZSamswZjFhNlJqMmVMaUVURg?oc=5",
        "isRepublished": true,
        "viralRate": "91%",
        "analysis": "2030을 위한 AI 실무 팁! 사람인, 'AI 에이전트'로 HR시장 혁신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
