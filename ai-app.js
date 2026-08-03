/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "순위: 미국에서 가장 AI에 강한 직업",
        "enTitle": "Ranked: America’s Most AI-Resistant Jobs",
        "date": "2026-08-04",
        "originalDate": "2026-08-03",
        "sourceName": "visualcapitalist.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNYUV0VklEU21Kd3pNTGVrWjJKRnhTdk1jSGNQbjctOC1sUURma1JlWURvZEVOeVo0a1lTRjZ1eVk0TWZ1M0o5VlJHZHVRYkRGalJjeWthSk9VY24zLTVXMDlwZkFoQzdpLUpkY2pqZjRaMEdaLW8ybzhWYnhjUk8ycQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 순위: 미국에서 가장 AI에 강한 직업 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직업의 미래는 학위보다 빠르게 변화하고 있습니다. 대학은 무엇을 다르게 해야 할까요?",
        "enTitle": "The future of work is changing faster than degrees: What must universities do differently?",
        "date": "2026-08-04",
        "originalDate": "2026-08-03",
        "sourceName": "India Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOZWNIaGExVmZQUVAyNGttbDBLdzhFVDdFOGV0SUFDdEt0OXR6ZGlDRGhHaDBXSHVaZHFZbXBNUXAtNzJORFNyWEhDaUpUOHBjM05UWlhEcmRTNDJ5bmYxWk9yRV9Ud2dsZ0M3REdZaWtueHlxeUVUZEJWem4wS0lrTUlyd3NFMFlISHY1Ync4WDRSVW1CVVNUa2hEcWgzRno0S1B0VzlGVExyWC02OWhmTWJaTF9BWjYtR1lkcnNMOUtvaFZEVUVfLXZQamkzc0xXSi1jMXRBeUY?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직업의 미래는 학위보다 빠르게 변화하고 있습니다. 대학은 무엇을 다르게 해야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Indeed는 AI가 영국에서 2속 일자리 시장을 창출하고 있다고 말합니다.",
        "enTitle": "AI is creating a two-speed jobs market in the UK, Indeed says",
        "date": "2026-08-04",
        "originalDate": "2026-08-02",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQMndfUmIxTmQtRTBqN3pQWWQ1ajhWbnVDNWp4MWhtaEd5aUZoUmN1X01XcXI0eEMxN00yZHI1YnhYNERTTHAzNlAxWmxWU3VDNGFQLTFVOGhnZjdtWWpFM2dFcEVUN0FWdl84cHZmXzJidWdMNXpMYmtPM0hacFhnclJ3OEExZk9uZWhNTEgwSHVIeU9QeThkZ0F2ekJXeHRfUVNQLWpvdw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! Indeed는 AI가 영국에서 2속 일자리 시장을 창출하고 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "구글이 로봇을 제어하는 방법… ‘제미나이 로보틱스2’ 공개",
        "enTitle": "구글이 로봇을 제어하는 방법… ‘제미나이 로보틱스2’ 공개",
        "date": "2026-08-04",
        "originalDate": "2026-08-03",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5iZ0FObW5RYkMyb2xNRkttQTZZQVBjbXZ5UGJOeTlTMC1IX0RrN2VPZnFxQ2kza2ZFZnZmRjZvc2d4eWpLNjE3YXNvZzFhWU9PdG84TmZLWW42Z0RLWW9xdS1oa3RIMlZXbXc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글이 로봇을 제어하는 방법… ‘제미나이 로보틱스2’ 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "GPT·클로드·제미나이 20여 종 한곳에서 쓴다...생성AI 구독·작업창 통합",
        "enTitle": "GPT·클로드·제미나이 20여 종 한곳에서 쓴다...생성AI 구독·작업창 통합",
        "date": "2026-08-04",
        "originalDate": "2026-08-03",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE8xQ0hnRHRpR3JnVHBFNmlSOXZIYnRXVXl5NUEtNnlzWHZEMWpxY0RBUXZYLTF4ckZqbXNQeUlhV1RTNlVKYjFhZkZrQzg2SXZfNWZGRlM0ZmtUVHVuTFVtbTNUWmFaS3ZyQmc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! GPT·클로드·제미나이 20여 종 한곳에서 쓴다...생성AI 구독·작업창 통합 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "기계설비건설공제조합, AI·카카오톡 결합한 모바일 보증서비스 출시",
        "enTitle": "기계설비건설공제조합, AI·카카오톡 결합한 모바일 보증서비스 출시",
        "date": "2026-08-04",
        "originalDate": "2026-08-03",
        "sourceName": "건설이코노미뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5LWW5VUVVIWl9abVpRSXk3cHFQREZLZ1h0bTJCSXNwRFpNTnlvN3dvOWVYRWxTNmRDeFlXU1N3TG5XZ1dQQi1uV3gyOEZHRTVlVjlaLXZnUkFiMFR2RGhjSW4zXzk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 기계설비건설공제조합, AI·카카오톡 결합한 모바일 보증서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
