/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-07-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI 시대에 전문가가 게임에서 앞서 나갈 수 있는 방법",
        "enTitle": "How professionals can stay ahead of the game in the AI era",
        "date": "2026-07-14",
        "originalDate": "2026-07-13",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQLW5VVmJPSE9rZEFBcGd5eTMzdVNkNDg1Z1RaeS1Yek9vQ3dOMV9DLXd5TW92ak11WGMtTldsSWpSUC1Id2tRQV9CdkctRlB6ZWVPWDB5ekJtNmFHM3hoWEdIc2FJakRXYXdEMHM2dHpOOWlyOUFsbFJlMk1rZHR5cTdLSGRkSHhEQmwzX0IyRVBfUQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI 시대에 전문가가 게임에서 앞서 나갈 수 있는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI가 엘리미나보다 더 많은 일을 창출할 수 있기 때문에 시스코 사장이 '미래에는 더 많은 일자리가 생길 것 같다' 고 말합니다.",
        "enTitle": "Cisco President Says 'the Future Will Likely Have More Jobs' as AI Could Create More Work Than It Elimina",
        "date": "2026-07-14",
        "originalDate": "2026-07-13",
        "sourceName": "Benzinga",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxPeTQxb1EyQWgxZ2xYRzVtTHZMUnh3M1RCU0lKSGhfQ2lVa2JHaU9wZzU1VHJtUWxaN0lxTkhKZmdIY3ZNaXhaWGpBczlzcDVuNDJNWXZCYUZIYzdkbFJLenFlVktYRnVzVTFJSXFndmlBN2lfeWUzZ3ZHNW82TXN3aUZwUUJjeWo4NUNzekF6NmR3aXFneXB2dklvNkdSUm14ZXdLemJ6UGJocnliMVkxUDVBanVnSnhSa0FxbEItcFI1eHhKTEJoeEtjVjItVS0yMTUyNDltX1QtR001WVQtVXJSYkhQZHNUMEZwZnVwdUs?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 엘리미나보다 더 많은 일을 창출할 수 있기 때문에 시스코 사장이 '미래에는 더 많은 일자리가 생길 것 같다' 고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI, 고령 근로자를 커리어 교차로로 밀어 넣다, 스터디 쇼",
        "enTitle": "AI Pushes Older Workers Into Career Crossroads, Study Shows",
        "date": "2026-07-14",
        "originalDate": "2026-07-13",
        "sourceName": "The Tech Buzz",
        "sourceUrl": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPYlhqNW5uYUtEOWZ4NGVOT2UyaGVjQ1lRdTFoMXVHbXhEWUdfSndWUU9iZjZRQ2dkLUQ3UXQ0cjg0LUlSRUtHdDNwWWQ4MFpQbHV4MXdSZUcyaEhmRUl6bUhqTzhwZ2RteVdmY2tIUThUNVlKZTZvajROZTFKNWl1dndwUWI4Nlc1YU5Falc3dy1XWjlBMHc?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI, 고령 근로자를 커리어 교차로로 밀어 넣다, 스터디 쇼 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드 페이블5 무료 체험, 7월 19일까지 또 연장…'GPT-5.6' 견제 심화",
        "enTitle": "클로드 페이블5 무료 체험, 7월 19일까지 또 연장…'GPT-5.6' 견제 심화",
        "date": "2026-07-14",
        "originalDate": "2026-07-13",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OSnVzRUtVZjEtU21MbTFiTVV0TnpiZ1JtcDBXR3N0ZWNjeTM4VGZ6R0ZqZ2oyRm15a2RCLW1LcDVtSmkwclZmeWp0cU9wblNLY1ZoNGVQY0otTEtUWl9rRHBwM1A0dFpMNmx1MldnTVRWQ0k?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 페이블5 무료 체험, 7월 19일까지 또 연장…'GPT-5.6' 견제 심화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "삼성전자, DX 직원에 제미나이 제공",
        "enTitle": "삼성전자, DX 직원에 제미나이 제공",
        "date": "2026-07-14",
        "originalDate": "2026-07-13",
        "sourceName": "경향신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1Ba2xkZUtoUTFvWmRuRVk0WlJzblJpaS1Ed0ZfN3RQcWR1d1EwZE5hbTAyZ3dFdFZybUlyVk5GNHpYRkROaXc4aTlOWWlMWE0zVjJGVDFadDBqUdIBX0FVX3lxTE1rOXNzLXBtMF9NYXNPZkxoLU4tWE9IRV9DRGEwc0pkang4ZEdfSDZCeUJqd3draEtMMlpjRkxlUENoWDA1UW5JNlVQYzBOR19qc2JlYjVCS080aEVZN0hV?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 삼성전자, DX 직원에 제미나이 제공 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "챗GPT 독주 깨졌다…구글 '제미나이', 韓 AI 검색서 턱밑 추격",
        "enTitle": "챗GPT 독주 깨졌다…구글 '제미나이', 韓 AI 검색서 턱밑 추격",
        "date": "2026-07-14",
        "originalDate": "2026-07-13",
        "sourceName": "뉴시스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5KcDlnY05ka1QzOUJsTzFMbV9OWVQ0WTByQ2Z5SXA2cENtQ2Zkd3VKU2g5anJaYW8tZ3ROS2RoY3BRcEV5cUVNSndMOEQ4UlBMQ1g4M0dieFUydUprOWYxRtIBeEFVX3lxTE5lZ0NrRWtwb2drUnZlb1hzOE1UZjY5SUdVYTczYk9MNWpIMFJKdFd5RU5haVloajR6Q0RRZ2t1bEJzUUh5T0xzRnVlTHU2QUVCUUwxenJjX21BZFZGSFlxODF5eFYyNlFWanJDU2RYR1VlWVl5UlpyTg?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT 독주 깨졌다…구글 '제미나이', 韓 AI 검색서 턱밑 추격 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
