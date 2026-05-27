/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-28
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "소프트웨어 엔지니어 끝에 있는 Claude Code의 제작자",
        "enTitle": "Claude Code's creator on the end of the software engineer",
        "date": "2026-05-28",
        "originalDate": "2026-05-27",
        "sourceName": "Platformer",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTE90cFo2azl5M0x1d1d5ekxKSElCMzVsRTJ6eFluczloRk1URGRnYWU1WFJMa19BSHhiSF9CeHJoUF8yYXVGaU9tUFBQWDJmbW9mOUVRbEtOS0NtMFNMTzVrblJiSWpocEZUZ2pv?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 소프트웨어 엔지니어 끝에 있는 Claude Code의 제작자 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "OpenAI의 Sam Altman은 AI가 대량 화이트 칼라 일자리 붕괴를 유발할 것 같지 않다고 말합니다.",
        "enTitle": "OpenAI’s Sam Altman says AI unlikely to trigger mass white-collar job collapse",
        "date": "2026-05-28",
        "originalDate": "2026-05-27",
        "sourceName": "ET HRSEA",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNaDdhbFVFYUp4OFVjN2R3TklGV29MWW1JUjFUbXdNbWRYMUY5YmpCSW9mSjVyQjBTdXJPOC14dUVUb19JS1JRSWwwTGhOVl9xYmVqeWgzaTlhZlA4WXVhN09IZHhTeGp3ZHNTdjZDNHBJejRJN1Z6SjN1WEk3MU83R1JUT2xkTTZDZnVqQVZsc2dzVzhsYVVvdnJId182RUN5d1JJSUc5OGtUMkxxYl9LMnNOT0tRYWlURXFCUWMxVlRyRVVDR0J6VjFSdVUwRnl3bE9XbFU3RlZUd9IB3wFBVV95cUxNZEpuc3RDM0NwZWdyaVBDaHhGWW9DU21sa29tOWFXdUo3b0lrejgtTk1rbllyOFJNOHdoTEowWEZMa3g5cjl0aERsVFVCUEtVQllvaE5aaC1tR04tRjM2TjBFSVJFVl9QUmk1MDM5Rm8yY19XRV9hckpBSVh4ZVBZc0ZOWGF2NFpRTlA0Yk5Wa1JFLUlUMFJETllpWHlNYkxFTzJEOGJGbmFqOVZzNUVxVU5PcG1PREVTVkNJdFJMb1lPNGRlRzFpa09lOTlaUFNEeDgtNzYtbmZPb25HNk9Z?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! OpenAI의 Sam Altman은 AI가 대량 화이트 칼라 일자리 붕괴를 유발할 것 같지 않다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "2.5 lakh 사람들이 일자리를 잃은 후, Sam Altman과 다른 사람들은 이제 인공 지능을 키우는 것을 멈 춥니 다.",
        "enTitle": "After 2.5 lakh people lost their jobs, Sam Altman and others now stop hyping AI",
        "date": "2026-05-28",
        "originalDate": "2026-05-27",
        "sourceName": "India Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNVW1EeGp0Y2Q4ZFF2Sm5CUVdRY3BldWYtd2J2YUpCYXZ3cklkTnh6WXRrN2xpZjZTMm52ZU9PQl8yUy1VOW9zYVotcUJJNENiMmlxX0lhNkFoMlRiMGY3QWJtVkFXdVIxUkJ4bkllQ1V6a0owdS1LU1ZJanFCcEhkckUtdVk5UUxGMUtvSFZhSHFpVzhrdUxrSzQ5dDhBS0Z1RmpFVHdGLXQzYmkyeG4tZ3ZZOVkyaU9EbjZjTURiNFN3MFZLY1lMeHRtbHlIaFBLOXpfS056RHlnTkU3SE8xU0dR0gHnAUFVX3lxTE9ZMjNCMFVKSVZiMGNrOG95QmNwVk9vRE40MFlZQkpBY1hsdjREZndGRDlkOER5ZTRCUmpqSUswUXZvaGJZdjBoWnVfeS1lQ2hTT21CeUozM2YtRGVhR0ZZRUFnT3FwV19vWUR4S2FoSUNjNHk1Zko5RzZ3WDVNaUdRcnhxNFdfVFAtbjR1V3d0NFNmeHpKYzY3Q1AzZUdJNDFzVzNiNDVZYzhPUUtoeVJWM284Y0FnZGpfNDFjcGg1V0JQSGo0OEhyNVZqYUx2c1VXZjBqRjI4RmxOb1lCNGU2dnFIaC1RWQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2.5 lakh 사람들이 일자리를 잃은 후, Sam Altman과 다른 사람들은 이제 인공 지능을 키우는 것을 멈 춥니 다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "MK Pick | 하나투어, 챗GPT 전용 앱 출시로 AI 여행 추천 서비스 확장",
        "enTitle": "MK Pick | 하나투어, 챗GPT 전용 앱 출시로 AI 여행 추천 서비스 확장",
        "date": "2026-05-28",
        "originalDate": "2026-05-27",
        "sourceName": "매일경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5yUFpGTE01cnFiTU9PVlNrSHNsUW1TV2R2QkRkZXpLQkpWa3doWnhtRDhkbFFvZzN1Y0pBUUhRbjZHZVRXeXhlUHlKWjV6Um9y?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! MK Pick | 하나투어, 챗GPT 전용 앱 출시로 AI 여행 추천 서비스 확장 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "애플, \"WWDC서 알파벳 제미나이 탑재한 신형 시리 공개 가능성\"",
        "enTitle": "애플, \"WWDC서 알파벳 제미나이 탑재한 신형 시리 공개 가능성\"",
        "date": "2026-05-28",
        "originalDate": "2026-05-27",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPQWFodUdQWTNNOGxqQ2hGMHVVNTVvUDNJYy1SYmNLUHdPZUcxdnY0aDItb1lmcGdHQXVvLXkyV1FpYnhaZDE3YkdXRnNEdlFBWF9WX3JPdkN6NTQ3OUcyZFZWb0V5N0g5REVKVndfR3JMSnZaY3VhVURkTDJyUGNhRTJyQ0owd1hY?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 애플, \"WWDC서 알파벳 제미나이 탑재한 신형 시리 공개 가능성\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI 많이 쓸수록 수익 줄어든다...AI 사용량 추적·과금 체계 경쟁 본격화",
        "enTitle": "AI 많이 쓸수록 수익 줄어든다...AI 사용량 추적·과금 체계 경쟁 본격화",
        "date": "2026-05-28",
        "originalDate": "2026-05-27",
        "sourceName": "지티티코리아",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE90VVk4Ry10TzI2VWNuODhqZUZkX2w2S1hsa1ZLak4wX0FnWVdRNVZfWnB6SEc1ZTJ0N2UySE5neG5pbU1qSlNkV29VSFdPNndaOENCMHJ5elA4MEwyWmwwNDZJS2tzYnFDb1E?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! AI 많이 쓸수록 수익 줄어든다...AI 사용량 추적·과금 체계 경쟁 본격화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
