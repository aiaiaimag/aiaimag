/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-15
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "업워크 릴리스 2026 미래 인력 지수, AI를 찾는 것이 프리랜서 업무와 수입을 재편하고 있다",
        "enTitle": "Upwork Releases 2026 Future Workforce Index, Finding AI Is Reshaping Freelance Work and Earnings",
        "date": "2026-07-15",
        "originalDate": "2026-07-14",
        "sourceName": "Quiver Quantitative",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNWlN5dzZRUVNZbm5jZGF4OWdZTFl1cEJhN0NkU25NbndoV1hGRUdHUE5RMkpPZDNyUVpxY2xSMlFCT0VWUEVCOGdyOUk3R1JHR2ZtZUFhU0VmWENpVk45cXBDdnZIZWdibDV5cDh6QnlFSVdjU2RSb0xETGNiQnZlWHNsNDVDVHF6WWluUzJZRTJmMlVZaDRYMDJOcXVickdBQ3BfR3dMRHhEVzNET3I3cFVkeElQZUZjYzR3UFJGcDB1X0JDajV1OHAxVQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! 업워크 릴리스 2026 미래 인력 지수, AI를 찾는 것이 프리랜서 업무와 수입을 재편하고 있다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 시대에 주니어 커리어의 미래를 탐구하는 AUI 인텔리전스 포럼",
        "enTitle": "AUI Intelligence Forum Explores Future of Junior Careers in Age of AI",
        "date": "2026-07-15",
        "originalDate": "2026-07-14",
        "sourceName": "Morocco World News",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPM193cldyNVFxMGhPdWlzQmNXUnlqSzl3bTVndXA3dVBqQjdPUmpHWkhkd0VVN2xQR0FTUXFhYmFmTy1QT1NoRmRpQXY0bDU2NWtYX2k4UXlrS2s4cFFMSjcyVzIwTEhpRVpQenJRMVJwXzZoNG5RX3ZKb2diLTNsOW0xM19rVG5TTDFaWldhRjJnMmF3N0xrNlluck95eEV1cjZmOVMxaE1XOGVHTFc0SHZMemFCRjh5X3c?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 주니어 커리어의 미래를 탐구하는 AUI 인텔리전스 포럼 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Upwork의 미래 인력 지수 2026: AI가 숙련된 프리랜서가 가속화됨에 따라 업무의 가치를 재정의하는 방법",
        "enTitle": "Upwork's Future Workforce Index 2026: How AI is Redefining the Value of Work as Skilled Freelancing Accelerates",
        "date": "2026-07-15",
        "originalDate": "2026-07-14",
        "sourceName": "The Manila Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAJBVV95cUxOT24xTnNzYzFfdEw4TWZ0dUVOeXJMTWs5SE01MFJXWDZnallYbkU3UGF3Q2ZZRnBSTGY1em82dHdBSUpyelE2ektPX1BzRXQtTFNOZzdtb1NmUnI1aDZvUEh3cTdlc0UyTURIRm1tWHpZQUNFb18xdF9NX1JJcXlocE11OE9uc2RrTENYVFlYOHM4ZDE3cHM0dFFpdmc2aENWTmJvVHdLX3R1NnZrZk4tQjdmM1J0ODEycTVQTnpFbmwyVi1hNmJjVjVFVnNjVWNQYlAwNlFuVlphelpRdGpnRmd2SXRqVjg5MTNsTDVxakdlVDNiaHdQcXRzRE5LSTVLWEJlVTRkLWF3bDFJeFY5adIBlgJBVV95cUxQYVRoSDBuX1duOGV3SlZOdmxlc2FVMkVGZFdoU2lOWno5TFlxX0dKSi1qSFptTkhOUVZVTXZ0SkV5QjJrdUV3TVJmS2Y5V29DWFY5U1NHOTc0alB3czlTbUtHTXFkY3BuRDl2WkZPX2VuOVgxQVY4ckE0NWJsb1FkQkRyQlBla3NEaHFEWlpocGpGTWhfSFJ5UURYREpJQ1ZhbW1BZTZCNldBalVjRVZOQUpzOEZjQno2UVJtVDQ0WDNFelBKNVhTRjBRcXF2emRLZTY4dUVtTFQtZ3FTc2RRbG1JNzhVMjljVko4RTlWenJJeXVfZ0c2Y1F1eFVRa3I0amoweGRPNU5vUjQ4dEFGVEVxY1BLQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! Upwork의 미래 인력 지수 2026: AI가 숙련된 프리랜서가 가속화됨에 따라 업무의 가치를 재정의하는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "드롭박스, 클로드·챗GPT·제미나이 연동 확대…AI 협업 생태계 강화",
        "enTitle": "드롭박스, 클로드·챗GPT·제미나이 연동 확대…AI 협업 생태계 강화",
        "date": "2026-07-15",
        "originalDate": "2026-07-14",
        "sourceName": "테크월드",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE40WmszTk9SNjgwN0FCcmpScmFQbmlycFI4eGtPeW5PNVhWX1RjbWJEbnZVRTFHZmlrNVBJaDdCRUh1Tkh5ZHJtODRNZXh1NWNHWjZmT3FMdm9FNEZOdmFDeE5JS0g2aVBr?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 드롭박스, 클로드·챗GPT·제미나이 연동 확대…AI 협업 생태계 강화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "강남데이터랩, 페이플과 손잡고 양도세 AI 서비스 출시 - 머니투데이",
        "enTitle": "강남데이터랩, 페이플과 손잡고 양도세 AI 서비스 출시 - 머니투데이",
        "date": "2026-07-15",
        "originalDate": "2026-07-14",
        "sourceName": "머니투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE5QLUdhN0NWMVBmRmpnV2RiOEV4VmRfV3U5NEMwMEtQdlZmMmZteVFfODlnYlQzbFJEY1FibS1FX29iNUZfbEFBX2MxcVNKX0tUOEgwSGRVS19tZUlWWkotSXF0YXd3SEJuRXZUUWFLdThyQdIBckFVX3lxTE5QLUdhN0NWMVBmRmpnV2RiOEV4VmRfV3U5NEMwMEtQdlZmMmZteVFfODlnYlQzbFJEY1FibS1FX29iNUZfbEFBX2MxcVNKX0tUOEgwSGRVS19tZUlWWkotSXF0YXd3SEJuRXZUUWFLdThyQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 강남데이터랩, 페이플과 손잡고 양도세 AI 서비스 출시 - 머니투데이 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"한국어 쓰는 클로드, 더 다정하다\"…앤트로픽, 언어·모델별 가치 분석 공개",
        "enTitle": "\"한국어 쓰는 클로드, 더 다정하다\"…앤트로픽, 언어·모델별 가치 분석 공개",
        "date": "2026-07-15",
        "originalDate": "2026-07-14",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9qdXB4QVh4LWRzcURNZGowUnBGekRuTnhDbldGMUVjQm45bWhRTUgwNlkwLWdWSlhVa3QzaU1Cb05rcGZLRER4cWFHVUVFMjI1ZTRNVVpJWXBZVElPMG9yTHAtdXlZQkVmd0E?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! \"한국어 쓰는 클로드, 더 다정하다\"…앤트로픽, 언어·모델별 가치 분석 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
