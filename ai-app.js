/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-17
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인력: 일부 대학 졸업생이 일자리를 찾지 못하는 이유",
        "enTitle": "Workforce: Why some college grads are not finding jobs",
        "date": "2026-09-17",
        "originalDate": "2026-09-16",
        "sourceName": "The Journalist's Resource",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQSW4tYjEwTDlVdVoyTGZISm9tUVl4angyLW4wWU1jenhtTDdaVGp2eEJXNlY1X3hvaEZuOVRiT04zUGMyU05NQ3VkQS1aVWJZR1pGQ1pEaWI1VUdzcW5XWlNTazBFQkRxakZMOVJEQTJyeDl6TWJabTZZNFN2NEVya013?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 인력: 일부 대학 졸업생이 일자리를 찾지 못하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Z세대 AI 위기가 한창 진행 중입니다. 더 악화될 것입니다.",
        "enTitle": "The Gen Z AI crisis is in full swing. It's going to get worse.",
        "date": "2026-09-17",
        "originalDate": "2026-09-16",
        "sourceName": "The Business Journals",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVTdLblhWQUUzZXdXZVpPRnJHejlzUXRnV3FLcmMtNUxiekVjTGlZZktqYmpST2NJS2t5cmlaSms4TUVHclNXbzNRYmpseXAzZHVkWFlhbWg2d3Z2VUlqbVhOTk9tMzRxMHFfYjZDS25iLWdJMmtCeXdLSWhSSmhCOWxhc1loMXFLOVV0Zg?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대 AI 위기가 한창 진행 중입니다. 더 악화될 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "싱가포르, 일자리가 새로운 시대로 진입함에 따라 200개의 AI 강좌 개설",
        "enTitle": "Singapore Rolls Out 200 AI Courses as Jobs Enter a New Era",
        "date": "2026-09-17",
        "originalDate": "2026-09-16",
        "sourceName": "New Fortune Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNQWJIcUJLODhDQjlrWl9yUWNkM1pvT0xzQUlLamwzblY1VjRnUjVpWXdidy14UjJRbnh3VWhGcTYyeTlfckJiRTc1YVlnel9jY3pfZ0NfRm5VRWlMZGVxaU9MV2dwZ05YVmFySnN0ZWRVSFM2ZHBfNFRpeUxlQ3BCakNoRWRIb3JsaUZseVh5U3lvYnQxQVE?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 싱가포르, 일자리가 새로운 시대로 진입함에 따라 200개의 AI 강좌 개설 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "\"택시 부르고 병원 예약하는 무료 AI 서비스 연말 출시한다\"",
        "enTitle": "\"택시 부르고 병원 예약하는 무료 AI 서비스 연말 출시한다\"",
        "date": "2026-09-17",
        "originalDate": "2026-09-16",
        "sourceName": "한국일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE95TmtqN05LUkgyb3pzZG03Rzd0c3pibmpXcmp4OHh1N1NFV1VUVkdVdTNpSXVIS3lveGhValJPNTlLX1huUF8xTUd3cVdDSkptSWxUQ3VLbXRKWG56VXUybWsxOXhwMk5TZ3FlWFZmODVjWDDSAXNBVV95cUxPeU5rajdOS1JIMm96c2RtN0c3dHN6Ym5qV3JqeDh4dTdTRVdVVFZHVXUzaUl1SEt5b3hoVWpSTzU5S19YblBfMU1Hd3FXQ0pKbUlsVEN1S210SlhuelV1Mm1rMTl4cDJOU2dxZVhWZjg1Y1gw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! \"택시 부르고 병원 예약하는 무료 AI 서비스 연말 출시한다\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "새로워진 ‘제미나이 노트북’으로 학습 효율을 한층 더 높여보세요",
        "enTitle": "새로워진 ‘제미나이 노트북’으로 학습 효율을 한층 더 높여보세요",
        "date": "2026-09-17",
        "originalDate": "2026-09-16",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPZVpKMS0tc0RVMG5YMHpsU1owcEhULXNLaW9fclZqQlV2bWlETnIyRkNOUUZrS3ZvSGhqdURidnBMMTNkLVFkM1pOeFlUYzhKQnhlem5EbmdCWTQzRTBXYXAtWDB6UTd6WG41dkFRT1otNy1OZ19XaUh4Uk96YlZHUnZlNFVkSjV5NFhlN0xNamZROVk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 새로워진 ‘제미나이 노트북’으로 학습 효율을 한층 더 높여보세요 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "보이스루, AI·전문가 결합 더빙 서비스 ‘폴리타’ 출시",
        "enTitle": "보이스루, AI·전문가 결합 더빙 서비스 ‘폴리타’ 출시",
        "date": "2026-09-17",
        "originalDate": "2026-09-16",
        "sourceName": "테크월드",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5uckVkdWFNajFSQi1qZFpYamk0eEl0eno0cmNZNzRNcTNyQjBzcVExSTZJN3poTTNkUk5hR0NWamswYVd1RTNFdklJMXdKS1hfRGVwTW5CdF9ST3d6SS05RWNfV0QyWGJs?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 보이스루, AI·전문가 결합 더빙 서비스 ‘폴리타’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
