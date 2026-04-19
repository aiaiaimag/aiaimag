/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "이 세 가지 기술로 당신의 미래를 인공지능으로 증명하세요 — AGI의 아버지는 ‘인간의 일자리는 쓸모없어질 것이다’ 라고 말씀하십니다",
        "enTitle": "AI-proof your future with these 3 skills — Father of AGI says ‘human jobs will become obsolete’",
        "date": "2026-04-20",
        "originalDate": "2026-04-19",
        "sourceName": "Mint",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxPX0ZSWXh1VDViSTFkaUxwVEtERmFwd1VMVDBpcGM3UWdKYm1BUERCR243ZldULXVHaUhvT1BhclltMEJvREd3NnRXWWV3dGVfRnJyZTZjSTQ5X0tyYzUzczNFUC14aUtwTW9XS1NvSjlNeG5FNTdYTUJwYkVMcUp5ODYtR3VtNy1DRFhkSE9IYl9ab1g2ZUZjeXRHVnhZeU5iTE1jYXFfS3l1M1FTU2o2Um9iU1BtR3FET2gwanlXdDF3YmR4TndEMENyRUxFdktiTkp4dm53NW1jMnNPYmZPU0pWVE9QekkycHpHUDE4V3RWVFJoWDJXbWM1djRQaFo3bDkwQlBDTFE3VmfSAZACQVVfeXFMUG9CWTg5V0d0YUZRbTRhOEJpek14V2o1WDFqalJvVDlmWE9heFhha1NqblFvdjNxdnpkZUJuVWstLWU0Njd1YWtfNl9tYWQtUEdWN2hwRUw2VjlMMktYZnpOVnBCdmtubjdpaEhHWWJGN3JIM1JpZzhFQ2w1U1l5TWpuQ2tackxoelhMRWx0RU0wSTZPb01JUGpyVHRIV0VlZjJfOU5mSGFZZi1VYk1jeG93VVZmbjgwbHlxMUdpN0VDX0UtcnA1RTBOLTZULURHSGxpVXVnYTF6SERpbUN1RjNNQTF4U211Z2VXSEFHMTlzNGVXczJlRzNVa0FJRWZ2RHBuLUtZbElhWldkTHE3dTg?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 이 세 가지 기술로 당신의 미래를 인공지능으로 증명하세요 — AGI의 아버지는 ‘인간의 일자리는 쓸모없어질 것이다’ 라고 말씀하십니다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인간 AI 협업 모델: 업무의 미래가 대체가 아닌 곱셈인 이유",
        "enTitle": "The Human-AI Collaboration Model: Why the Future of Work Is Multiplication, Not Replacement",
        "date": "2026-04-20",
        "originalDate": "2026-04-18",
        "sourceName": "The AI Journal",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPUHlVU1ZkOVdMM1NkUWl6dWZHVkVuaGhQc2lYc1REWmJZYXZUMEcxMEhubjNmcHZUb2hHT3FfSWJVZVNHSUZkX0Ftb240THhpVWdaWk9mOTFUMDZLRlAxN3JuMGpCa09EYjlRZEw1eDNXUnA0UE9PWHZHbXpiRmt6QTM1ZkRiVVFvYUhyVFY1Z2d4SHdaR19RNWh1RmdMLW9MblFuSkphUXI2VXpRdkI4?oc=5",
        "isRepublished": false,
        "viralRate": "88%",
        "analysis": "글로벌 AI 트렌드 체크! 인간 AI 협업 모델: 업무의 미래가 대체가 아닌 곱셈인 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2026년 인도에서 가장 수요가 많은 IT 일자리 10개 (그리고 이를 얻는 방법)",
        "enTitle": "The 10 Most In-Demand IT Jobs in India for 2026 (And How to Get Them)",
        "date": "2026-04-20",
        "originalDate": "2026-04-17",
        "sourceName": "TalentSprint",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQa1FIMmg5WjFJZmh3cE5GSEZDWW1BZFlqVHBlcjNCenI2SFpvZVYwV3RxNDUwRXdZQnhTWXVUMVZMSi1VZGltR2ZYS25zTFNiVEl1d2NEOWtOdDBKUEZqeWhOM0loM1hWcVhSQlN6bUdWSEFyVU1Sa29Ebzc0V3FPWlZR?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 인도에서 가장 수요가 많은 IT 일자리 10개 (그리고 이를 얻는 방법) 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI 뉴스] 개발자 실직 시대 열리나? 앤스로픽 '클로드 오퍼스 4.7' 출시",
        "enTitle": "[AI 뉴스] 개발자 실직 시대 열리나? 앤스로픽 '클로드 오퍼스 4.7' 출시",
        "date": "2026-04-20",
        "originalDate": "2026-04-19",
        "sourceName": "아웃소싱타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE1IQWZpNVhMM0ZtZ0xGSDYzSGlYN2I1RFYwb3kxb2JEZ0RsaGZPRXVISmd1NGU4Z0J1REVBaGExTFhiUHNMaEhXTUk4dFI5NldoWEh0eHhOS0tXTHpweVdadGd0RTR3TWtCNlhhM0ZjaTd6Zw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 뉴스] 개발자 실직 시대 열리나? 앤스로픽 '클로드 오퍼스 4.7' 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[AI 뉴스] “데스크톱 AI 전쟁 시작됐다”…구글, 제미나이 맥 앱 출시로 정면 승부",
        "enTitle": "[AI 뉴스] “데스크톱 AI 전쟁 시작됐다”…구글, 제미나이 맥 앱 출시로 정면 승부",
        "date": "2026-04-20",
        "originalDate": "2026-04-19",
        "sourceName": "아웃소싱타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9NVk5KNWhSbk5sUUhsUGp5TW9WdlpvQXVtdTlQMGNaRDZrUnR1aDR6SGdmMnBlcmljMHpaaGx1MWhmRExNU2k4bUtoVkdDX0lFMm4xd1ZOLTlwRno5aG5rOUs4TTN4ajdyQjFoOFBScU5Edw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 뉴스] “데스크톱 AI 전쟁 시작됐다”…구글, 제미나이 맥 앱 출시로 정면 승부 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "아산 청년들의 '취업 하이패스'! AI-디스플레이 인력양성사업 참여 열기 지핀다",
        "enTitle": "아산 청년들의 '취업 하이패스'! AI-디스플레이 인력양성사업 참여 열기 지핀다",
        "date": "2026-04-20",
        "originalDate": "2026-04-19",
        "sourceName": "뉴스홈(newshome)",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9XQW9pc1JXdkpGMGNzZEhxd052ZVUyZGNhMG40aVVPRmY2ZGM3cUM3Z3IzeWFwVWJCV3htdHMwaEdacXh6OGhpYUdsVE9uY2xRUHhKSXZEZ2ozUUo3WUVEQ2lIbkczRVlQUmwzc2R3?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 아산 청년들의 '취업 하이패스'! AI-디스플레이 인력양성사업 참여 열기 지핀다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
