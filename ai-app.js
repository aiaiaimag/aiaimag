/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-19
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "향후 초점: 애프터 아워, 핫 잡스, 마음을 읽는 AI",
        "enTitle": "Future Focus: After-Hours Work, Hot Jobs, and Mind-Reading AI",
        "date": "2026-03-19",
        "originalDate": "2026-03-18",
        "sourceName": "SHRM",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOWTVuTkFQWldOSmVKbUZhUnZOUmdzLXFFQU5pZGNsX0daQUpnZThzMXNoYzVPVFBYOWE2V1VlZ2trbWc1WU5wNmM0SzFTdlpOWlpEd1dXY2szdXBhMU5yT3RrYU42RktDMDlZSFN1NTl1SEh5X3N2YkNqU2pYeUZpSHJub3FqM1pPelJ1aHBIOG45QkNTMFJveQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 향후 초점: 애프터 아워, 핫 잡스, 마음을 읽는 AI 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "2026년 AI가 직업에 미치는 영향: AI로 대체된 직업과 직업의 미래",
        "enTitle": "AI Impact on Jobs 2026: Jobs Replaced by AI and Future of Work",
        "date": "2026-03-19",
        "originalDate": "2026-03-18",
        "sourceName": "dqindia.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNMHFXLU10ZnhGaWpqT0NLNE1pdEk3d0VfbTBaT2xhVEo3ZXdUd083WExFT3EyTVZqY0R2aDVBQnZ4enNjbmdDOC03QlBGTVFPbWhJZlRBMGpDME10V2tLUDhuT2lqM0lsNzlXbzZENU05bGQ2Zk1nN3V2cnl0OVpMVmNfTndIbmdFWFoycmx4QVY1TjdLeHVacXliUFlfSS00aDB2cVF2NTE1a0hPX0xqcHJ3QzRxd0FQSUcwbTJFWVZaNnfSAcMBQVVfeXFMTTBxVy1NdGZ4Rmlqak9DSzRNaXRJN3dFX20wWk9sYVRKN2V3VHdPN1hMRU9xMk1WamNEdmg1QUJ2eHpzY25nQzgtN0JQRk1RT21oSWZUQTBqQzBNdFdrS1A4bk9pajNJbDc5V282RDVNOWxkNmZNZzd1dnJ5dDlaTFZjX053SG5nRVhaMnJseEFWNU43S3h1WnF5YlBZX0ktNGgwdnFRdjUxNWtIT19ManByd0M0cXdBUElHMG0yRVlWWjZ3?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 AI가 직업에 미치는 영향: AI로 대체된 직업과 직업의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI, 커리어, 그리고 일의 미래: 니카르 아로라 (Nikhar Arora): 인도가 AI 원주민 경제에 대비해야 하는 이유 - ET",
        "enTitle": "AI, careers, and the future of work: Nikhar Arora on Why India must prepare for an ai-native economy - ET",
        "date": "2026-03-19",
        "originalDate": "2026-03-17",
        "sourceName": "ET Edge Insights",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPQlp4YTVjblY4MjRxTWNIcG9pNGJxLVlVNVczUXlOYkdydUROUHlSVWxSQlBxWWxnUXUxcVhiZm1BZHM4YXdZRVdTYkdVanhzeXNOY2hNbWdNbEZsLThZMUtkUnM0TDdHUGN6cm9iNmMyS3MxWUVFak9OTW1ua1BPOW9FQ3ZZMW5UWUtjUjZZU0tkUldnLWhoczRzVGN0UmFfV0tMRzV4aWJXV1UxUjIwaFVpY0l3VHhmMS1VV2FTVDhOU1ljaUxfckZwYi1zNnBjOVpVTNIB2gFBVV95cUxPXzYzdUhZUm4xblBabXh3XzBBdW1JalY4Y0JzZ2FmczZObE5acElxZWx4TlphWHVISTBZMW4xMjhmZHVMd3drR1IxOU5YQVlHTmRCVWNteDluV2tVUk9iOFhqNWpvTGh6Rk0wLVRzZmU0MVFqVzc5RFU4RlBueWhJS1N2WVRlN0lSNWQ5aEtPTWVweS1vM0ZfZ3pzWW1ZaEdJWXFQX05BcFZwMko3Rm1odWREWU13Q1A1X3owNlV0QllKeFRCWU5TdmN5WGZJaTNObkFabURiLVhxdw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 커리어, 그리고 일의 미래: 니카르 아로라 (Nikhar Arora): 인도가 AI 원주민 경제에 대비해야 하는 이유 - ET 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글, 검색·제미나이 앱·크롬에 개인화 기능 ‘퍼스널 인텔리전스’ 전면 확대",
        "enTitle": "구글, 검색·제미나이 앱·크롬에 개인화 기능 ‘퍼스널 인텔리전스’ 전면 확대",
        "date": "2026-03-19",
        "originalDate": "2026-03-18",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9EaWpQTmlvLWFWNzJtQXFSNFFTd1NBSnJIZTZpdG1QN0wwQ3VvZzllcm5WZ2tiaUNERElpU1FiUkVUZldhekw0bldaNjYxa1FpbWNHUUhqaFFfaGI0QzFhcEljcEI3eUVwclE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 검색·제미나이 앱·크롬에 개인화 기능 ‘퍼스널 인텔리전스’ 전면 확대 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[유미's 픽] 챗GPT·제미나이에 밀린 '코파일럿'…위기 느낀 MS, 조직 재편 승부수",
        "enTitle": "[유미's 픽] 챗GPT·제미나이에 밀린 '코파일럿'…위기 느낀 MS, 조직 재편 승부수",
        "date": "2026-03-19",
        "originalDate": "2026-03-18",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE10Ny1uNG9EVGhUZWxlQ21wNGFsSEJqaXNfNW9RQ3JIaFc3OE9ob2tsYk8yNU1aZ0JKOWZoSE15QnNhbjY3WFdKNWhuTXkyQzBuWjQwSk5B?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [유미's 픽] 챗GPT·제미나이에 밀린 '코파일럿'…위기 느낀 MS, 조직 재편 승부수 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "“AI가 실시간 여론 읽는다” 바이브컴퍼니, 썸트렌드 MCP 정식 공개",
        "enTitle": "“AI가 실시간 여론 읽는다” 바이브컴퍼니, 썸트렌드 MCP 정식 공개",
        "date": "2026-03-19",
        "originalDate": "2026-03-18",
        "sourceName": "헬로티",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5TWmdCN3kyZmpmR0xOSXg1TXlBZ2JVS0Nnd2dldHBwV3ExekJNN0ZhNlR6aUVzLUNMcHJNWldFdG4xRmNRUjFEemFMTUhCZU9QRzhQd2l3WG9DTVVsWFZR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “AI가 실시간 여론 읽는다” 바이브컴퍼니, 썸트렌드 MCP 정식 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
