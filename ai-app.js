/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "로피 더스크 인스타그램 트렌드: 바이럴 AI 초상화 만드는 법",
        "enTitle": "Lofi Dusk Instagram Trend: How to Create Viral AI Portraits",
        "date": "2026-05-20",
        "originalDate": "2026-05-19",
        "sourceName": "Analytics Insight",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLXE2RGJldlIzYmM4WDR5dW5XdFBid19TX05uVHBkcDNGMkloX0YxRnVyX0pmLVVyN2lKS015bHZyeGxWX2VsRDQ1dWZ3eXJYMWV4dEtralFqNjE0T2NGVVBGV1Y3eUdqZDRSLTgzeU1UU1hBTnpwQTduMlpDU0NFRnY5bDlTcFBQbmg0MEx0UFJaLTVJVVdGM2lWMGXSAaoBQVVfeXFMTUg3N0tWVUhua2F1dU9QazY3eGxPUUlWV2pSOFhNVndxb0ZQVmdFSXFCZFUybGktQmpMXzdobDRCRXpoRl8xSmhucDN3SHZVV0tPMEluM1hFWnZ6bnhId1ctVDlJYjZCenJCbGhtQUpZUXVmTGNvdXo1bEg5dDBQRkU1WXBYbWlDUTRGTUx2VTd1a1BFNUU2dXZaY3dGaXJGODFIUDVHeXN1cHc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! 로피 더스크 인스타그램 트렌드: 바이럴 AI 초상화 만드는 법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "WeWork 및 Upwork CEO는 Z세대 채용의 악몽이 진짜라고 확인하지만 새로운 것은 아닙니다.",
        "enTitle": "WeWork and Upwork CEOs confirm the Gen Z hiring nightmare is real—but it’s nothing new",
        "date": "2026-05-20",
        "originalDate": "2026-05-19",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1xODVOa3l2S1UzWEFQR2FOSVFfeVdMT0JwLU9mNUVJenhTcndxVTFCNnpaNTdkSlVMaEtXVnZfaU5oTWFvMms1UWpNNl9VR3g1ZzA2dzEzUkRZV0hkdVZ4T0VLZU4xN2ppcGlsVl9Ka3p4UUNOa05fV2h6NHB3Zw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! WeWork 및 Upwork CEO는 Z세대 채용의 악몽이 진짜라고 확인하지만 새로운 것은 아닙니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 일자리 위협: 걱정이 가장 적은 60세 이상의 근로자",
        "enTitle": "AI job threat: workers over 60 least worried",
        "date": "2026-05-20",
        "originalDate": "2026-05-19",
        "sourceName": "moneywise.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxORU0wTXhBaUEtMTJUdkNtci1SQ2p0bkJCSnN1d3hoeUoxUklEczA1SUNNejFLdjV6ZTZPZFdPMWQtYzhGT1BXRU5NVVljem5nNEtYVktkSzFXYmFXYW5OTmQ5UUI0M0gyZmw3d3lYRkRWeXdsdjJ4MEpUNnNEWnFQNndOOG9pR1JYVlIyNlVlV0ZnMl9uZHRhbjZiYUR5TGh3Nk42dVZn?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리 위협: 걱정이 가장 적은 60세 이상의 근로자 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[I/O 2026] 최첨단 인텔리전스에 실행력까지 갖춘 ‘제미나이 3.5’를 소개합니다",
        "enTitle": "[I/O 2026] 최첨단 인텔리전스에 실행력까지 갖춘 ‘제미나이 3.5’를 소개합니다",
        "date": "2026-05-20",
        "originalDate": "2026-05-19",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9ibGVaR1FIcmc1VzU0Q0FDaGNkamFQdUJlelVUMkJjUEs4cl9CMk0wbXd4Q2hSb2h2ZzBpUm5WMnY3OXhoWHU2SkpQVEd3ZVIxd0NoWUx1MW54MzFfd2V4RHlKTk9ONnMtUkEyNjMxSlR5UmdxYllMOA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [I/O 2026] 최첨단 인텔리전스에 실행력까지 갖춘 ‘제미나이 3.5’를 소개합니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "개발 단계서 개인정보·AI 규제 검토 자동화...글로벌 출시 시간 줄인다",
        "enTitle": "개발 단계서 개인정보·AI 규제 검토 자동화...글로벌 출시 시간 줄인다",
        "date": "2026-05-20",
        "originalDate": "2026-05-19",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9kSXppelNDRFJBTnpZaHZ4cU5UZXMxb1dtRTNKcGpFeWk5a2gtSWs2dVpDbjRRbFpPZE5tTEstUmhtMFZvZEhQWmk3R1R0eHlzM1RJRkRpb2Y5QzBLNHZVbHlMVFIyVTJLaGc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 개발 단계서 개인정보·AI 규제 검토 자동화...글로벌 출시 시간 줄인다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "그리드 다이내믹스, Azure 기반 AI 현대화 서비스 출시 By Investing.com",
        "enTitle": "그리드 다이내믹스, Azure 기반 AI 현대화 서비스 출시 By Investing.com",
        "date": "2026-05-20",
        "originalDate": "2026-05-19",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1UOTlQeTN1YlExaHJCNllFQ3ZJZEZZLU90emc5RlZ3N3lMclYxZkk2d3hCMkRodE5BdnB6MTFjcjBhaklLdlFId3hteTNPeGQzNllTZ0pZYTVUeTFSUVEtYndHblo3LTlJYVU1MldWVUs?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 그리드 다이내믹스, Azure 기반 AI 현대화 서비스 출시 By Investing.com 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
