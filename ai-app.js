/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-03
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI는 여전히 우리의 일자리를 빼앗을 것인가?",
        "enTitle": "Will A.I. Still Take Our Jobs?",
        "date": "2026-10-03",
        "originalDate": "2026-10-02",
        "sourceName": "The New Yorker",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPaTZzWUdteVBNeXM5Ui1kemx6LU1SSVdUVXpWQzhKSFh4V3preFp4NkVoN1JSMzhBQXpZV0o5WXJaOGtjOEZiVWZnV2twTXJEQXE2aFMwTVJlZVl5WnpjSHdTY1NXRHB1enZ6TjFWaW1nMkNERjRWU2NsbndXemFIWUFB?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! AI는 여전히 우리의 일자리를 빼앗을 것인가? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "리차드 플로리다 (Richard Florida) 는 인공 지능이 창조적 인 클래스를 위해 오지 않는다고 말합니다: '갈고 닦은 직업' 을 위해 오고 있습니다.",
        "enTitle": "Richard Florida says AI isn't coming for the creative class: It's coming for the 'grind-out jobs'",
        "date": "2026-10-03",
        "originalDate": "2026-10-02",
        "sourceName": "fortune.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPbjNpRjd4dFBLbWxSRkU3MTBOeTVXTTBlRm93UnM2NFI4SnVrWE45b0hzNmVSWC1oTVA3eU8zdFc5UDgwdVhRX24wTHRRTEVCQS1fNXdCNE4xeVZUb1VlRTJWU0prdU5uOVVIVGVVeF9ZZmQwcTQ0VlpYV2FnT2tlRnp3ZHdNc1g1Nl9mdVBrc3pQZw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 리차드 플로리다 (Richard Florida) 는 인공 지능이 창조적 인 클래스를 위해 오지 않는다고 말합니다: '갈고 닦은 직업' 을 위해 오고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "벤 애플렉은 인공지능이 일자리를 없애거나 우리 모두를 죽일 것이라는 예측은 그저 '선전' 이라고 말합니다.",
        "enTitle": "Ben Affleck says predictions that AI will wipe out jobs—or kill us all—are just 'propaganda'",
        "date": "2026-10-03",
        "originalDate": "2026-10-02",
        "sourceName": "fortune.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQek0wYXI3VFkyY0l2VUJQZ3pNdWsxd2Q5dk90YVoxdXlPYldzeEozZnRkR0tCeFVGaWh6Zjk0OTVONXlna01UbFA3aTRjQmJwQ2FvaEJ0NFdzTTFQYzBDWW9NX3JGOG9fS2NiNVVWUnZmcThSUnBLXzJmeE1KS05kZlZ5WldZZXRIM1JMQk5NWmJhNW9JaEVXR0F5WVpCYjJzMmk5cDZmMkhfbmxoYTVNMV9hdmZaQ3pubmVSdmIxbGZJWWpIR25VV05uN2dCQ0ZGa2tuSg?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 벤 애플렉은 인공지능이 일자리를 없애거나 우리 모두를 죽일 것이라는 예측은 그저 '선전' 이라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "GPT-6.1 Sol 소개",
        "enTitle": "GPT-6.1 Sol 소개",
        "date": "2026-10-03",
        "originalDate": "2026-10-02",
        "sourceName": "OpenAI",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5OemY4emxSNEladU40TC1hcUppTmEweWtJTnBJTkkxYlptbEpIaUhmOFFoYXUwVVI3TWxxX2tVMksyVG1CR3ZxQk1jclZvWWFHS1hPUzdOY3J2UXdweU5kbWYwOFFuUQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! GPT-6.1 Sol 소개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "[게시판] KT, 소상공인 플랫폼 ‘사장이지’에 AI면접 서비스 출시 등 단신",
        "enTitle": "[게시판] KT, 소상공인 플랫폼 ‘사장이지’에 AI면접 서비스 출시 등 단신",
        "date": "2026-10-03",
        "originalDate": "2026-10-02",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBBOUQ0R01tX2FvbnBBZkwzekRUcVJ6ZnZGZU1YRVlybVRJRjBnQVhlSVdoSnhLZGwtSXRYc0d6ZHhrLVNsZlVDLVMtV1FPTC1PSy1MMm9nT04wcG9PZGwwUW1QNHNrcTV2SUE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [게시판] KT, 소상공인 플랫폼 ‘사장이지’에 AI면접 서비스 출시 등 단신 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "업비트, AI로 뉴스·데이터 분석 서비스 출시",
        "enTitle": "업비트, AI로 뉴스·데이터 분석 서비스 출시",
        "date": "2026-10-03",
        "originalDate": "2026-10-02",
        "sourceName": "주간한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBVWXhoVGpPVW1NZVMwYUtWMVZSWEdwMnBWQjc0OEFNb0RSQlN2RjRISEtWLWxBWmZuOENTRkNXRDg4X1Bmb2k2QlJTU0RFVVppLTZiR2xIbE1ZOVpUUzJzT1dQZFVHaGQ3UVJWMHRxYlJZdURq0gF0QVVfeXFMUFVZeGhUak9VbU1lUzBhS1YxVlJYR3AycFZCNzQ4QU1vRFJCU3ZGNEhIS1YtbEFaZm44Q1NGQ1dEODhfUGZvaTZCUlNTREVVWmktNmJHbEhsTVk5WlRTMnNPV1BkVUdoZDdRUlYwdHFiUll1RGo?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 업비트, AI로 뉴스·데이터 분석 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
