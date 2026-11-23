/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "일의 미래: AI x 커리어 믹서",
        "enTitle": "The Future of Work: AI x Careers Mixer",
        "date": "2026-11-23",
        "originalDate": "2026-11-21",
        "sourceName": "Superpower Daily",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOdk5obkxlQ2JNRUF4R183ZDRwdDZLUnFYSGN6ZGIwRHFXSW9hQmJaWmpvLVB1ZWR5Y2o1aWpTZXdKc1Z0VkhQdC1ISEpJWTlaQkhodHJUdktQcHhmRjlBMHJBUEhCajBySUVtLTR0QVZTVW5Qc3RQOTYyZW41NGtURklJdE5jUWZiZndTQm9WdEdXeGJ6Mk8xTVI1VzVSTXBXT0NQS0dtVXRKNkJZUnc?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! 일의 미래: AI x 커리어 믹서 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "편집자의 노트: AI는 우리가 일하는 방식을 변화시키고 있지만, 여전히 사람은 중요합니다(업무의 미래)",
        "enTitle": "Editor's Notebook: AI is transforming the way we work, but people still matter (Future of Work)",
        "date": "2026-11-23",
        "originalDate": "2026-11-20",
        "sourceName": "The Business Journals",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPX2pRUjhYV0U5VmVBMk9lZkJzWVBtcV96b2NRcW5jaDBLRWdoWHRCajE0eTBxVndHV0RQTFl4NUZ1RGxoTmJXckJYSmZwUXNQWjdlbzh1MDR0dmRMQ29IY3RrZjJ3eUJQYVJmUkYyS2c1QklaMGdESXp5UTNvV0tkamp3X1A0M0lxRnZMSXVEQmRuVHZyVmhV?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 편집자의 노트: AI는 우리가 일하는 방식을 변화시키고 있지만, 여전히 사람은 중요합니다(업무의 미래) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Anthropic은 어떻게 수익을 창출할까요? AI 비즈니스의 내부.",
        "enTitle": "How does Anthropic make money? Inside the business of AI.",
        "date": "2026-11-23",
        "originalDate": "2026-11-19",
        "sourceName": "Yahoo Finance",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPZE5vcUdvQk40ZHhGMjJJYlN1ZmZrT3IxLVNlSFh4N0F3TkJlVXRsNk9Hd3d1Q215VFg5LVBJQjhpVGtMLVN2NEx6RVpFWW9BV295bF82WVRrS3VydlpLWnFuSDBQWHJSWnVVcjE1M05WTVR4bGNGTDlXenRuQTN3T0Y1YUhmVmZiTDg1aVpsT0JiMGtDMDNrUWhtUnFXcVNodl9uUU9XWEpvNFF4alN0MWRjZXhMR0ZXSnJNZ080Qlc1a2lPVnhROExDYw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Anthropic은 어떻게 수익을 창출할까요? AI 비즈니스의 내부. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "\"AI 메가트렌드 20년 간다\"…한투운용, 고수익 TDF 출시(종합)",
        "enTitle": "\"AI 메가트렌드 20년 간다\"…한투운용, 고수익 TDF 출시(종합)",
        "date": "2026-11-23",
        "originalDate": "2026-11-23",
        "sourceName": "연합인포맥스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9WTmhCYTdpZDJlNnBmN0lDY3pHQ0NpUVJHZ19TVndUMEdjbVgtQ1YyamhyR0dtMnNNTzdIdEEzN0hWUFFEOFhiVEtZWU9FMmV2STA5TXlBRjl1NVlnNGJxTG5MYzdDX0VqaTVoVnF1LXM?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"AI 메가트렌드 20년 간다\"…한투운용, 고수익 TDF 출시(종합) 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "LS증권, 생성형 AI 연동 ‘LS커넥터’ 베타 서비스 출시",
        "enTitle": "LS증권, 생성형 AI 연동 ‘LS커넥터’ 베타 서비스 출시",
        "date": "2026-11-23",
        "originalDate": "2026-11-23",
        "sourceName": "인더스트리뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE50cGVpendwemxXWlBneDNjWXotM0djeTlkQTZYcmQ0cm9nM1l1Rlp0SmdVS08tVHpXVENQS0ZmbHo0YTFkMWVZRGpRdkFLSG9Gb0NpMkk0dGVoT2IzSHBaZ0tXUmNvbjJjay16c2lCN3VGQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! LS증권, 생성형 AI 연동 ‘LS커넥터’ 베타 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 검색에 뉴스 원문 클릭률 최대 93% 낮아…언론사 수익 위협 논란 > 뉴스",
        "enTitle": "AI 검색에 뉴스 원문 클릭률 최대 93% 낮아…언론사 수익 위협 논란 > 뉴스",
        "date": "2026-11-23",
        "originalDate": "2026-11-23",
        "sourceName": "천안신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQ0FVX3lxTE9BODg0bFpFeUJqcksweFBBSnhNMGxMRjFKRG90OHJHSlg1VEdQb2cxUWVHU1N6UmE2eGxvQWxucXZ3LXM?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! AI 검색에 뉴스 원문 클릭률 최대 93% 낮아…언론사 수익 위협 논란 > 뉴스 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
