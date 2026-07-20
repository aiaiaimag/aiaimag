/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "미래 일자리를 위한 기술, AI를 받아들여라… 콘스탄스 스와니커, 청년들에게 권한다",
        "enTitle": "Embrace AI, technical skills for future jobs …Constance Swaniker urges youth",
        "date": "2026-07-21",
        "originalDate": "2026-07-20",
        "sourceName": "Ghanaian Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPZEE3RTBYcUVnUFEzOWdfRzY5NU1KWm12Z25WbUpUS2pqUkRkUWtCRGRIa1F2b0ZrNWFlTzZXTXBzeUlibkVLeWtIMlM3ZU1Vbnl5ZFk5dEFlS2RadFZaWG5lSHJFQi1pdm11UWRRV3JlMWxjQ0NTS2ZUeUpsYmlzVWtQRnBlTHlNalpUR096X2RzYkhyZkJDR0FyOEdVU0o3RlJCNWJacw?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 미래 일자리를 위한 기술, AI를 받아들여라… 콘스탄스 스와니커, 청년들에게 권한다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 일자리 걱정이 커집니다. 하지만 일부 인간의 기술은 기계로 대체할 수 없습니다. | Gaynor Parkin and Dave Winsborough",
        "enTitle": "AI job worries grow. But some human skills can’t be replaced by machines | Gaynor Parkin and Dave Winsborough",
        "date": "2026-07-21",
        "originalDate": "2026-07-19",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOTkV3UjhER1IzMENoSGtrMmpLeWhxOGVuN0otcjk0WlBCc0RBUzcxQldBZmVwTm9aRm1ObGZCQ3NVZnYwUGxid0gzSWFYV2hqUF9BWXBwTnlPX2dXMkg0ZFNVcWM0U2s5Mm42UDRrN3AyXy01SFNSVDd3aXZWeTVRclFNZkpmSjFOaHdjWjJ0MlRjYjNHQ0VDZldoMHdxaXlSSXE2WV9n?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! AI 일자리 걱정이 커집니다. 하지만 일부 인간의 기술은 기계로 대체할 수 없습니다. | Gaynor Parkin and Dave Winsborough 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "MIT AI 전문가는 Z세대 보급형 일자리를 자동화하면 역효과를 낼 수 있으며 기업의 미래 인력에 비용이 발생할 수 있다고 경고합니다.",
        "enTitle": "MIT AI expert warns automating Gen Z entry-level jobs could backfire—and cost companies their future workforce",
        "date": "2026-07-21",
        "originalDate": "2026-07-19",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNZXZVcWJtWFdJOHo1Q3FaUkhiNDhBclJpOXk4cG1CMVN4djBkRFlycUVtU1gydjhTLU41eExsWlRqT2hoSlFDYWRmOWRjR1pPUDhTTmVfVzVLTE9SSHhCRkZoZVR0a3dXSmpkdXJmRmJZZm1SS2U0eDN0SXNIblJDU19PYUQ3V1V0YVhfc1R0a014c3YxQ3RJV181ZnVYQnM3Vmo1dHZMRmFrdUZJVXF0V2pDbVFyXzN0N2dpQTUyUGEzYmdtWS1mb19MdHZSOEJVYko1UjVVX0M?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! MIT AI 전문가는 Z세대 보급형 일자리를 자동화하면 역효과를 낼 수 있으며 기업의 미래 인력에 비용이 발생할 수 있다고 경고합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "삼성SDS, 국산 NPU 기반 AI 서비스 출시",
        "enTitle": "삼성SDS, 국산 NPU 기반 AI 서비스 출시",
        "date": "2026-07-21",
        "originalDate": "2026-07-20",
        "sourceName": "세계일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1pUzRwWlZZeHRLV0tyRzhKbUlXeFRteVN2VS1ob3dVSVd4YlRRTmk2aGRXNm5TZnpLbS12QUlVVXZYOUtRTVZHcHg5Y0JtUF9TaWVMejdacDFTc0JITTg2ZTd2OGx6UFBLTFVj0gFUQVVfeXFMTm1CeUdLdzI3eU1MQmlTdXZzRjFoakZUUmxCWEk1NENEY1RTTHNia1N4R1UyV2RET1NfUUVDZmVES01SWjVVdjJqSlB4YUJGb0RRLUtk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성SDS, 국산 NPU 기반 AI 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "“모두의 AI, 생활밀착형 서비스로 승부”",
        "enTitle": "“모두의 AI, 생활밀착형 서비스로 승부”",
        "date": "2026-07-21",
        "originalDate": "2026-07-20",
        "sourceName": "서울신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBpWlZNMFhFWlNNZDQyTm9rTm8wQXl3MzRGY0tfNURIT0M2TElVS2NLM1Y2Wl9MazdNUTF5d2xZZEdGSS11cnNhQWFzV3MtT3FVUVZnczJ5Sk5uSTVqYlpDcjg3QWw3cTM0aUs0RXYtRQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! “모두의 AI, 생활밀착형 서비스로 승부” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글, ’제미나이 전용’ AI 칩 개발…2028년 배치 목표",
        "enTitle": "구글, ’제미나이 전용’ AI 칩 개발…2028년 배치 목표",
        "date": "2026-07-21",
        "originalDate": "2026-07-20",
        "sourceName": "연합뉴스TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5MQzl4QU10NnNsb1EtaDlyQTk5UWtsS0NDNjBxcXpVQ0NTNnEtN0ZpbTFjQlJaWUFOc0JXTHFGMHNZRUc0OEhCV0VIa3pKU01qcEUwaGJlYVlNTkxsOTJabmhjbzBQdFU?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, ’제미나이 전용’ AI 칩 개발…2028년 배치 목표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
