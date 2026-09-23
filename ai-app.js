/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-23
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "AI의 역량이 높아짐에 따라, 사람들이",
        "enTitle": "With AI becoming more capable, here's why people must too",
        "date": "2026-09-23",
        "originalDate": "2026-09-21",
        "sourceName": "The World Economic Forum",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQbWRNQVNSczJQUDR2YkZ0Ym04WUxGVzl0OUtCVm9JMFZEYkh1bmY5UkVUa1JoRVp1UU5rNkdWdkRxZXhxMlFmVFN1NGFJdXZKUmFjSmdISUc0Y2pkZzZmNm0tTHBwaDByLWNuWTl2LVZyeVJZWTBhWG5KNU9GYXJYLThMUUJTMlZtQTBr?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "analysis": "글로벌 AI 트렌드 체크! AI의 역량이 높아짐에 따라, 사람들이 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "인공지능 시대에 어떤 직업을 선택해야 할까요?",
        "enTitle": "Watch What Career Should You Choose in the AI Age?",
        "date": "2026-09-23",
        "originalDate": "2026-09-21",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQS0U1Rm1qTjFjM1UzMFNKZGpqYl85NHhreWxrOWlXT0Y0RGZXa2xPdk81VFFrd09KVExkNXlPeG9HLW5KNjU0RG8yelYxLXUwZklCRW52cVN5dFpudGFXTTUzLUpQbTM1VFVpWUREaHlrZG5tNHJ6bGZvMUtGTHA1bENaZkR5REdXWEliVXBQQ1lwOGRzQkNWTGZfQUlsZnM?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능 시대에 어떤 직업을 선택해야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 수백만 개의 일자리를 없애려 한다면, 우리는 어떻게 해야 할까요?",
        "enTitle": "With AI about to wipe out millions of jobs, what should we do?",
        "date": "2026-09-23",
        "originalDate": "2026-09-20",
        "sourceName": "The Independent",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPc3YtcEI2WHRPUjZoV2twWmw5X0FWNmlYazFadURwTzRHN2RaakhEREFQaDFtRk9HZlJxdkhWRlBjQWxsLUpQWWNsYWJSd3d2THEwQm9LX05XTEgzMkRiTnljVGc1aEhBUngtZHBVUGxBd3JFVW9FSThzUGZScTNnZEd4UnlVY0tfSUZwbjIxVlU?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 수백만 개의 일자리를 없애려 한다면, 우리는 어떻게 해야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "AI 속도조절 외친 앤트로픽, 새 모델 ‘클로드 오퍼스 5.5’ 출시…“최상위 성능에 비용은 40%↓”",
        "enTitle": "AI 속도조절 외친 앤트로픽, 새 모델 ‘클로드 오퍼스 5.5’ 출시…“최상위 성능에 비용은 40%↓”",
        "date": "2026-09-23",
        "originalDate": "2026-09-22",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE8xSUU5VUR5Yk8tVWdxdzNWb1hxZ09UX29RVlZUQkpyaG91RW53NTJzdi1sakZ3elYwRGNsbWFSbVpvYXdPaEk4RzdDOXBWT3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! AI 속도조절 외친 앤트로픽, 새 모델 ‘클로드 오퍼스 5.5’ 출시…“최상위 성능에 비용은 40%↓” 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "메타 에이전트 '뮤즈' 돌풍, 출시 초기 챗GPT 기록 뛰어넘었다",
        "enTitle": "메타 에이전트 '뮤즈' 돌풍, 출시 초기 챗GPT 기록 뛰어넘었다",
        "date": "2026-09-23",
        "originalDate": "2026-09-22",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5qNGxJVE5SaERaVGhrS3Y4Sm9zaWRlMzNCcnJWVG93Q1lCdGpaMnV3b01ybGdoams0YWlWQTBRTzEzdnplWXY4Y0EyUFpfa09uVVNsZk45S3JCZnQ1eW5OZVJ0eXp1Q2hIWFE?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 메타 에이전트 '뮤즈' 돌풍, 출시 초기 챗GPT 기록 뛰어넘었다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "팔로 알토 네트웍스, AI 기반 보안 테스트 서비스 출시",
        "enTitle": "팔로 알토 네트웍스, AI 기반 보안 테스트 서비스 출시",
        "date": "2026-09-23",
        "originalDate": "2026-09-22",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE12VzlGdDA4OWZXOENGT0hmcm1Ec3JLeFZPelZfRno3a213OGZ3aVZITHI3bUx5WGJsZHlVQWZTLVNvZWVQb3JGWmJtekJRSjVNNHdWNllBQzNyaVk3dXIwMUZWd2VBUFE3QUFNcTBjRnE?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 팔로 알토 네트웍스, AI 기반 보안 테스트 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
