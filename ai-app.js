/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-11
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "DOGE에서 AI로: 미래 고용을 위한 도구로 여겨지는 DC 지역의 새로 만들어진 일자리 위원회",
        "enTitle": "From DOGE to AI: DC region’s newly created jobs board seen as tool for future employment",
        "date": "2026-04-11",
        "originalDate": "2026-04-10",
        "sourceName": "WTOP",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOZzdrYjN0UldVZUUzU25pSmJqQUNRQjNkdFRkcjRoT1BnSldIVFY2VmE1b1k0dzBkeDZhTGVHU3U5YkMtYVJIZ24zMTd1c2FhbEQ0NmE4VXdLWmw2RDc5VUtqQzNXYlBDTXpuTUxTM0YyaGxJRTA4WVp0UjVRcjdlMU9jRDRUYWNLUHBobWVxZVRXaWFtZXRVYmU3bGowTWE4VVI5SnZKOUJ5NzlMMnJCMHpqeEYzQTktY3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! DOGE에서 AI로: 미래 고용을 위한 도구로 여겨지는 DC 지역의 새로 만들어진 일자리 위원회 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "2026년 AI의 미래: 일자리 교체 대신 일자리 재편",
        "enTitle": "The AI Future of Work in 2026: Reshaping Jobs Instead of Replacing Them",
        "date": "2026-04-11",
        "originalDate": "2026-04-10",
        "sourceName": "vocal.media",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPYWJSYWdIRXQ3bkp4QTBqUFFOcy1RbWFNLTZNYWtEVkl3SkpBSjR6UWV0b0QyMm1UOHBXdWM2TkpVSVZlSTJaZTNsNWV3RHYwWjd3cGJKcUVLN1A4Rlg1ekt0WmNWa2hpenNhR0NvZ3NlaWs3a0JORmNhQllvWXNRVnBaM2xDU0w2LVUyNjNtT1gtVjljT0JpX0NZZTFmczVH?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 AI의 미래: 일자리 교체 대신 일자리 재편 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "업무의 새로운 미래: AI는 급속한 변화와 불균등한 이점을 주도하고 있습니다.",
        "enTitle": "New Future of Work: AI is driving rapid change, uneven benefits",
        "date": "2026-04-11",
        "originalDate": "2026-04-09",
        "sourceName": "Microsoft",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPNnJLTmlNU2k1RFhnbF8yRzhaZmttX1hoRDhlSzhSeHA2Nl85NzZmajZHT2loRElibmh0ZF9XeXh1eldzN3VreURTVXI3NVk4ZkxOSDdYcWlqZk1fdXhodnQyTzBsQTlTRmROYTdMQjNtdXgxQ1VaNmlsUXJDZjJpa1dXNi03cmJPd1VNbGN0X0RNN2R1cTYyU2dwUkFBa09kSV9YdkdfVDUzWHNx?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 업무의 새로운 미래: AI는 급속한 변화와 불균등한 이점을 주도하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[요즘구글] 제미나이 팩폭: AI한테 ‘내 저주’를 물어보면 안 되는 이유",
        "enTitle": "[요즘구글] 제미나이 팩폭: AI한테 ‘내 저주’를 물어보면 안 되는 이유",
        "date": "2026-04-11",
        "originalDate": "2026-04-10",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOLVFmQXZqelUtZjJFMWVpNUxUcHlZQjRzdG9jcl9OSHF0OVowd0pzak9ra1A1SzdORzdJQUNHaXFJbjJzNFVGRnlOb2l5UElXa2NDMndOejkyb0FRZ3hROTNtRGc2U1VLVEZKaEpkdjZXMmtVNnY0R3dGVzFRempQRzNZSVQ0S3FlTWpQN2N4aGtEOThhNmFoT1VYQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [요즘구글] 제미나이 팩폭: AI한테 ‘내 저주’를 물어보면 안 되는 이유 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "오픈AI, 앤트로픽 '미소스' 맞서 사이버 보안용 서비스 출시 준비",
        "enTitle": "오픈AI, 앤트로픽 '미소스' 맞서 사이버 보안용 서비스 출시 준비",
        "date": "2026-04-11",
        "originalDate": "2026-04-10",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1qeGFSUG1iRGdBdm1yVlItYURkR09KUTBQSlJlTGVkWi1lZkhDbEdjYkpsWGhwOXliVTJkSThTYzZzTzZWbjRwa2t6WlB4bXQ0TkFlN0NGTW1DdTRaZXpibEJ6MzNKUzZvVEE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 앤트로픽 '미소스' 맞서 사이버 보안용 서비스 출시 준비 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "인공지능(AI): 동물과 대화하는 날이 올 수 있을까?",
        "enTitle": "인공지능(AI): 동물과 대화하는 날이 올 수 있을까?",
        "date": "2026-04-11",
        "originalDate": "2026-04-10",
        "sourceName": "BBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5XSUw1ZjhaVFQzeWlGVWFSQTR6SzQ0VlJ1R0lqM0FjNlIzTXVQak4xVWFiMXZKRklBM3otOWg1R3h5MHpHMnBSVUVDZzg3c0RZZ09SLW04RFVZRlM30gFiQVVfeXFMTUloVDAyRVdHZm95WnhfV2trd196ZVJwUDg0dVFyRWFGeS13aDZwdmJxNGpxRFEzYUZ2Q2JITGo1NVp1VlJiTGNBeldvZFJuZGRpM0M4OTkwUmhpNHgtRDVwdlE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 인공지능(AI): 동물과 대화하는 날이 올 수 있을까? 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
