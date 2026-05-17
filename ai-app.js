/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-18
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 시대에 어떤 커리어가 안전합니까? 업무의 미래에 대한 심층 분석",
        "enTitle": "What Careers Are Safe in the Age of AI? A Deep Dive into the Future of Work",
        "date": "2026-05-18",
        "originalDate": "2026-05-17",
        "sourceName": "Modern Ghana",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPWkVJNG12ZHBYaHUweC00RGd0ellLSnVJMzFhWjJZUUlyU3FXRVNyVHQxeThDdmp4NE5LeGVKVi01V0NsMDVWQ3IzWmxVd0djaGFQWGdYYjNFc1lwM3RHMHduUERDOFpDUHdNeEhtcmNKMlU5S2h6QjZtU0FZVHBDOGpVZDVyRVdOZ2kxUl9DcDJtRjA2Y0tZ0gGWAUFVX3lxTE1aekFSZlBLU0FlYVZZdW53MzdwckF2Nl9QNnp1QWl5RFRQUnNqbjhYcjctTGgxai0tSktWOFNvNjRHUmduaGNpc2RKR2RzZ3FhaWNHNEdnWGVCdXo2Um94TmpubjlvY0xub0E3WlBOUmFGaGg2cnRjeHlRNnUyMzRJQzdONzM3NDl4a2VIMktuV2pJUjJndw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 어떤 커리어가 안전합니까? 업무의 미래에 대한 심층 분석 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Microsoft AI Chief는 AI에 의해 모든 화이트 칼라 작업을 자동화하기 위해 18개월을 제공합니다.",
        "enTitle": "Microsoft AI chief gives it 18 months—for all white-collar work to be automated by AI",
        "date": "2026-05-18",
        "originalDate": "2026-05-16",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQLXAwd1YwLWZMR0NTZVhlVFBHM1gwS0taWDFjcmFHMFdtOVc2NjdSd3dlNHBMVE1GYUo4c2IxMXQ2REl0Q2xnbUJnU0pxMG1USkZqempOWGdjN01obGJUNmMxSllFcGxWZUt4T1FXdHlGTHdKYVFMcGRiR0VJc25pQnpaT3FLU08zbzhIRzR6VzdMcVZiY0NING02UnJxTU9OZVdv?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Microsoft AI Chief는 AI에 의해 모든 화이트 칼라 작업을 자동화하기 위해 18개월을 제공합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능 미래에서 가장 안전한 직업은 무엇일까요?",
        "enTitle": "Which Careers Are Safest in the AI Future?",
        "date": "2026-05-18",
        "originalDate": "2026-05-16",
        "sourceName": "LPU",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTE16VW01U3R0N0NlWEZXYXB1blNmUG1RRzhzZWppX29fa1k0Qm1BODRnajEtM0pwTERBbjdTTlp3ZC1lZ1paUV80VzdoWXRnR3hCZnJVNk1fQmJENzZOejRETnFDVXl4dkU5XzFkU3B3VlV1aG5v?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 미래에서 가장 안전한 직업은 무엇일까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "인터넷상의 AI 트렌드에 참여할 때 개인 정보가 유출되거나 손실될 수 있습니다.",
        "enTitle": "인터넷상의 AI 트렌드에 참여할 때 개인 정보가 유출되거나 손실될 수 있습니다.",
        "date": "2026-05-18",
        "originalDate": "2026-05-17",
        "sourceName": "Vietnam.vn",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNeFNRQ29XaFlBUHJycm5rRUUxWnU1UU1aTnhyR1duZ2c4d1NQWjl4cGlTRlBXWnhGY2lJaWFkVDB6bjYxN0hyM0k4Vnp3ZGtBS2MyUXRUZHI4Y1NfUE1JVWpRRkRiZXpJLVVZenJrTGZ1WHMxRy1vNzRVbVlpZ214UmRsdjNRN0p4U0ItNTBMSEpSSkpUclNrNEZuWGNuVDQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 인터넷상의 AI 트렌드에 참여할 때 개인 정보가 유출되거나 손실될 수 있습니다. 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[인공지능 줌인] AI가 환자 상태 먼저 감지…의료 서비스 구조 바뀌고 있다",
        "enTitle": "[인공지능 줌인] AI가 환자 상태 먼저 감지…의료 서비스 구조 바뀌고 있다",
        "date": "2026-05-18",
        "originalDate": "2026-05-17",
        "sourceName": "위키리크스한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBVSnBYYW1ZaGtYaEJKYXBONjk4ejZyX1NqSFY3MnpINnhrZnBBWVg4WFY5Vzc2T2tOcjZJMXFIWktrOFRhenphMjNQbnNLMHJmbERzR0JQMnQ2RWFJekU2RkhDeFpXa0YxbmJ1XzJQMA?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! [인공지능 줌인] AI가 환자 상태 먼저 감지…의료 서비스 구조 바뀌고 있다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI에 '라디오 DJ' 맡겼더니...\"클로드, 강제 노동 반발로 파업 선언\"",
        "enTitle": "AI에 '라디오 DJ' 맡겼더니...\"클로드, 강제 노동 반발로 파업 선언\"",
        "date": "2026-05-18",
        "originalDate": "2026-05-17",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE95YzFGUkNGcG1WYW1BX3RMNEFTVnMtUE5idS1wSnpYUkRFdXVWejFUQzczQVFSbzByVENTQWlsZlRjR3RUOWlFbVV6NlZsUmRxSDh5enFwRFBicWltREFlWmJoUjc0Z05pYlE?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "2030을 위한 AI 실무 팁! AI에 '라디오 DJ' 맡겼더니...\"클로드, 강제 노동 반발로 파업 선언\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
