/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Gemini와 ChatGPT를 사용하여 GTA 6 스타일의 AI 사진을 만드는 방법: 인스타그램에 올릴 만한 이미지를 위한 5가지 간단한 프롬프트 시도해 보기",
        "enTitle": "How to create GTA 6-style AI photos using Gemini and ChatGPT: Try these 5 easy prompts for Instagram-worthy images",
        "date": "2026-11-20",
        "originalDate": "2026-11-19",
        "sourceName": "The Times of India",
        "sourceUrl": "https://news.google.com/rss/articles/CBMimgJBVV95cUxQMHQtMzQ3dHRYVjF3Rlh5Z2JJSE5sSEFteUpYTnVzVUxocFd4cC1QY1lpeThyUG5NeG8yeElKazg3MjNhM0h3eDVIbFgzVkUtMmw2WWRHbmNMTDhobmE2TUVFV056YW9QLWJESkdqZXhqc3hfNEltdVlaYzNCeW1raWRoNmlHbWtSYlZUN0lyRmtuVm9FNGxBT0F6MUhQQVAxelB2UnNrbWRSUFNPbU5VSmFuQjZ6YTZLR3NDMVN1Wk44Ym5pdmNhVGNnZTM0dFBuYlU3cE9JUEl6dVpGUmJfR0V1ZXNRbF9YMFVQcWpQX1VOZ1BIN2FHTmtXLUktU1BnUTBzUzAzeGhQSlZPLWhjaDg0T3BSZGJ4bmfSAaICQVVfeXFMTWFZM29Ca0lBUld3S2ZZYUQtOXRtMnpfamMzRE85b29oMWgtZ1VDRFFLLXBMZU5oM0FnX1lsaS10QkxoOVZZUlVLS3Z1d1huckFNN0hycTVneGVhSldlcUd3Rk05azhTTU9JR3JoOXRJUGkwbFM4NUxvRG53RHVsWEtlSVZJSG5FdWt3TDA0UF9mNkFJTlcxb2NzNnRsZFh0cTE3NFNISlpXRFdkdGRlX1Joc2hxczFWYXR4SHZUTHg2YUUzQkswOWxJZTFvQW5NSElPdm0ybG1DTmpVNEcyMnZLUVo0LWp4LVFsTElmV0dkTl9zcU1GZ1BoU3N6QktJVEo5UFpMaC1KMWRwQ25QR3pMeVFrVjZicXhfWnlGSHRITmc?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! Gemini와 ChatGPT를 사용하여 GTA 6 스타일의 AI 사진을 만드는 방법: 인스타그램에 올릴 만한 이미지를 위한 5가지 간단한 프롬프트 시도해 보기 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Anthropic은 어떻게 수익을 창출하나요? AI 비즈니스 내부.",
        "enTitle": "How does Anthropic make money? Inside the business of AI.",
        "date": "2026-11-20",
        "originalDate": "2026-11-19",
        "sourceName": "Yahoo Finance",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPZE5vcUdvQk40ZHhGMjJJYlN1ZmZrT3IxLVNlSFh4N0F3TkJlVXRsNk9Hd3d1Q215VFg5LVBJQjhpVGtMLVN2NEx6RVpFWW9BV295bF82WVRrS3VydlpLWnFuSDBQWHJSWnVVcjE1M05WTVR4bGNGTDlXenRuQTN3T0Y1YUhmVmZiTDg1aVpsT0JiMGtDMDNrUWhtUnFXcVNodl9uUU9XWEpvNFF4alN0MWRjZXhMR0ZXSnJNZ080Qlc1a2lPVnhROExDYw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Anthropic은 어떻게 수익을 창출하나요? AI 비즈니스 내부. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "UPSC 위원장 Ajay Kumar가 말하는 교육 분야의 AI, 인도의 인재 육성 포부 및 일자리의 미래",
        "enTitle": "UPSC Chairman Ajay Kumar on AI in education, India's talent ambitions and the future of jobs",
        "date": "2026-11-20",
        "originalDate": "2026-11-20",
        "sourceName": "ET Education",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxPSlBmR0Q5YVozOFktVkFlWF9fM2hsbGZlLTdMYlF2RXI4MHRMNWtMTFdvanRMWXUwX25VNkVCZmVjdWcwQVpXYjlYaFo1dXVOT2pFWWFsZENPM3pHM0traXR6cEZneW81M2ktaTVROFZnbVZ5Zl9PbVF0NFI5RU5WTGd6TnVMcGpQWGNiUDZON1JNdWMtcHRtVVRwR0FpZEFncG5oT2ZwNEpXenc3di0zalV3MFI5TU05eDlvWWtZWnhzZDd5MHZOdnNjU1FKWmN6QllmVkpuMVdmMksteGNRUWsyVERQN2RDVEVhcWlXN3pkWFktdUkzYTZENzbSAYICQVVfeXFMT09nbk5nWldXc09tZEdsZzY0N2NjWV9QRzZETHVNWTF5M1YtSi1IZzhWSzV5M3BzUXdnVU9BQnpzTlMwZVhWZ0dLQnVlbTd5cXRXQjV4TXExMlBOd3BCTTZrYTJUMjZvZE9IaEJzaDNMTzgyNDZ2SThUS1ZHempSblFTd1FtLU9lYi1PV2hQeEhrU0xTb2dxdlJNLTlqRFJRTWhFNy1nM1BZODJScm9WZDZCdjUxSDI1SmViaVJUTzN5V21wQ2YyRkhzc0Y1VXlDd0JMWnE4MjFpNTVpQXpsbzMxV1huc2diZkY2LWM0Vy1BdFY0ekZzVXlUWG9ENXRxYjVn?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! UPSC 위원장 Ajay Kumar가 말하는 교육 분야의 AI, 인도의 인재 육성 포부 및 일자리의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT·클로드 국영수 만점, 제미나이는 수학 반타작",
        "enTitle": "챗GPT·클로드 국영수 만점, 제미나이는 수학 반타작",
        "date": "2026-11-20",
        "originalDate": "2026-11-19",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9ETHhrNVhpTm5aZGl3Q296MVhhVWVGWndVNkVEcmlYM1NfaVZQLTZxNWMyWGpmM2VOQnUxd2lSanA2eVA1RHBRTHRjTVJwUFA3SE9KMnZR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·클로드 국영수 만점, 제미나이는 수학 반타작 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "취업·이직·경력관리 고민에 대한 현실 조언",
        "enTitle": "취업·이직·경력관리 고민에 대한 현실 조언",
        "date": "2026-11-20",
        "originalDate": "2026-11-20",
        "sourceName": "지디넷코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBHT1RPMlM2YUZlZk5LcjlLZjIxY2FGclhxY3VyaUppTHkzVHlBeUN4eWZTM0licFRtM2pBSVRCc3JrZGJaZ3lzV1QxeDdtbXQ4aEdtQ19n?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 취업·이직·경력관리 고민에 대한 현실 조언 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "인포뱅크, AI 메시징 자동화 서비스 '비즈고 플러스' 정식 출시",
        "enTitle": "인포뱅크, AI 메시징 자동화 서비스 '비즈고 플러스' 정식 출시",
        "date": "2026-11-20",
        "originalDate": "2026-11-20",
        "sourceName": "이데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNUVh2eFZSSkpwMHdZSmNjS0NNM0xtbkVleHMwQ053bHFxd19QbGRaQVRGendWR0IzNlJ0eU0xNVFrazdxRVJLdXVoWkluaDBlczFqSWJCODNla0xmTFM3Szlqem1SbHRGeUNfVGRHbkhYUkJXT3c2bERNRTdqa1U1QQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 인포뱅크, AI 메시징 자동화 서비스 '비즈고 플러스' 정식 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
