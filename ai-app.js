/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-30
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "엔비디아 CEO 젠슨 황 (Jensen Huang) 은 이 진로가 AI 시대에 번창하고 새로운 산업 혁명을 주도할 것이라고 말합니다.",
        "enTitle": "Nvidia CEO Jensen Huang says this career path will thrive in the AI era—and drive a new industrial revolution",
        "date": "2026-04-30",
        "originalDate": "2026-04-29",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQTVVLY1RlRGlCcHB1TGc0bWxGYm1NZW94VTAzMUFXcHU4U2tPTUtfaW14TDg4UmFoWlhPcFpOa2dMZ0RJSUhYTHB0U2RBa0hOX210dDg1ZnBDOV9wdmVUSUdoa3pBX2ZmMW9PZkR5U0tDWkY0ZllDazUwSVZEanZZME1naS1ldFhSZEMtVHV2MXo1T0N3cHVOWFFhdFpfMEhZVkdveTExYVdJYU12c0ljNXR3dFFfcnFyNU9wdExJQkdSUE10TkVreEh3?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 엔비디아 CEO 젠슨 황 (Jensen Huang) 은 이 진로가 AI 시대에 번창하고 새로운 산업 혁명을 주도할 것이라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "대체 또는 재창조? B-학교는 AI, 일자리 및 MBA 파이프라인에 대한 불확실성에 직면합니다.",
        "enTitle": "Replace Or Reinvent? B-Schools Confront Uncertainty Around AI, Jobs, And The MBA Pipeline",
        "date": "2026-04-30",
        "originalDate": "2026-04-29",
        "sourceName": "Poets&Quants",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxQRHlqaFJab2hVdEFYRVNCTTBjc2xVV3l1azdTcm9NWlE4Q1VNR2ZGWldTZlBUSlFaYl9oZzlubFBrUTdabVRHOWQ4QUJlc21xN2xHVEJQenlSN29KN3A0d0ZuUWJIbkpkUU15QzhUTzRkZWw0alBlWlZJRHM5aFRwN05EbWJnUTBjNDZEalRHbEhDQlZXZHo4TE90azhrR3NtVkpzbzdVNHp2eGxvN2xuQnVoQ1FOZmxkYUtLX2FsSnNiVVlxUlFZVnBkejJBMU1qckd0MWpRam5vN3huSlg4?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 대체 또는 재창조? B-학교는 AI, 일자리 및 MBA 파이프라인에 대한 불확실성에 직면합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "TAFE 학생에게 직업을 보장하는 AI-증거 과정",
        "enTitle": "The AI-proof courses guaranteeing TAFE students a job",
        "date": "2026-04-30",
        "originalDate": "2026-04-29",
        "sourceName": "Herald Sun",
        "sourceUrl": "https://news.google.com/rss/articles/CBMixAJBVV95cUxPYkhpYWV1ZG4tMXNieTRDcG80bGFOU3l6UnBuNWk5U1NTT3MzdzJjWWhXZl9ncElOSzBST3NuWWRSSm9SUzF5NEhBOFFCNHJuYW1CZnV4dUVZT1JmSDV3TGNUd00xb0tjRXI3UlAxZEw5UWdNdDJHZHExMGlFdDBHcW9WdXlnOHk3UTVtTHNzSVdKTE5RaXlyaDhGZ3kwNjRSZFZMWkZZcHhGX1RPZVlRZzZWbnhGdEhzY0k1MGctVVVET2F2amxoS1BlcXpkY1lfYlJMbENlN0lNc2J3Q29rS3YtVktlelpvY2VQaW05RUhLcUs5ZjFiN3F6TUE5TW9NYnZhZEo1OGtkUDdaamRwRTVhdWlaT3k0ZGtwM252WWZuVzJZWHJUcVZpRUJGZUt6VzE3YUFOVTI4NVp2SFJZanFZZzfSAcoCQVVfeXFMT3o1MmtNVVEya3FIMUJvMGVGdWwzNnlYUVAwSXQ1NGctWm5RS2hXY1lCaTBOYzlzYkYxSDRUV3lXODFwV0NEX2c4Y3owbElHTlJqVmdsZ2xxRXo5UVRHTldTNVdpcDVfMzRzNTlBZGlEM01waTRfWVNsQXozSkpDeHpNRWhpbXBPRE5CWUdHSWVwMV8ydHRieXpycGJqVnRmSEpXVDhLcERIaXVRaWNsbmZ4Zk1aVmJLT2FQXzZDa2hIQnMyU0dqWGg5T0ZWbUM1amgxWlAtaE1OR21yMEgtbTB5NFUyaTJHRDhuaEFLbWhGUVFDaDRxenUwYXMtMHllQVplSnhBT05OenJaZkNWUlFyTDlrUzNkaDBxSVp5OGtVRjNnUHVldFluQzBNOEFSQzlTNm82c1czdFZESE1pUHlUVTF5al8tSzl3?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! TAFE 학생에게 직업을 보장하는 AI-증거 과정 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "뉴엔AI, AI EXPO KOREA 2026서 AI 트렌드 분석 플랫폼 'Quettai' 공개… \"글로벌 뷰티 특화 AI로 확장\"",
        "enTitle": "뉴엔AI, AI EXPO KOREA 2026서 AI 트렌드 분석 플랫폼 'Quettai' 공개… \"글로벌 뷰티 특화 AI로 확장\"",
        "date": "2026-04-30",
        "originalDate": "2026-04-29",
        "sourceName": "에이빙",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE8ySzJ1MkVjMzFjTDRZOEgwVTQxTUJFWnZJVzgzMFVDUmhibWNhLXZCdlhtRU56WEt6dTlPVS1jeFFIcmZIWEJfdXlMMml6aEVYcXQ4VXVQTzJZRS1ZSE9mc0g4U0Z2YWVpQW44?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 뉴엔AI, AI EXPO KOREA 2026서 AI 트렌드 분석 플랫폼 'Quettai' 공개… \"글로벌 뷰티 특화 AI로 확장\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "네이버 ‘AI탭’ 베타 출시, 이제 AI가 검색 결과 알아서 한 방에 정리해 준다고? 🤖🔍",
        "enTitle": "네이버 ‘AI탭’ 베타 출시, 이제 AI가 검색 결과 알아서 한 방에 정리해 준다고? 🤖🔍",
        "date": "2026-04-30",
        "originalDate": "2026-04-29",
        "sourceName": "뉴닉",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE95QzNmUTJxSE9HS3R4ZndNTllZT1p3LUx1dkVNQldnSjFLaHVmcjFZcmlDTFhHS1k3SXdGcDFxRG1XdGxaS3NFSFFmS3hIOXBsdHA0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 네이버 ‘AI탭’ 베타 출시, 이제 AI가 검색 결과 알아서 한 방에 정리해 준다고? 🤖🔍 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "아마존, 베드록에서 오픈AI 최신 모델 서비스 시작...생산성 제품군도 출시",
        "enTitle": "아마존, 베드록에서 오픈AI 최신 모델 서비스 시작...생산성 제품군도 출시",
        "date": "2026-04-30",
        "originalDate": "2026-04-29",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE05Nks1UWdVbnpQd2RZbUN1S2FkWkRaeDBGdUgtTzkzRTNEQkx4VFZfYUhNY0tQUWxRbkVheUpqQzZvSHdjcTNIUmN3d0Z2UGFWc2VsdHZhMi1VQVYtWklmN1FIdzZwdXczakE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 아마존, 베드록에서 오픈AI 최신 모델 서비스 시작...생산성 제품군도 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
