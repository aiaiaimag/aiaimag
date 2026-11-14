/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-11-14
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "남아프리카공화국에서 이직을 고려하는 사람들의 48%가 AI를 두려워합니다. 미래에도 유망한 최고의 직업을 알아보세요.",
        "enTitle": "48% of SA career changers fear AI: Top future-proof jobs revealed.",
        "date": "2026-11-14",
        "originalDate": "2026-11-13",
        "sourceName": "Fullview",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNUG5SVjR3N1E4TndqNnVTTGphb1YzeFN2Z3YyVU5aNExIWjJwblZWaTdNNHJGUEZkNlA2UTBHbm9UbDVtY0ZuWkRaRTZxSDBzcHdZWGFYcHNiLW9fNjJoTzd3LWh3eWxnRTkxRGRrMFlzRmw5ODc1OU1aWk9qdi1jOGctdmtzcXBYV2VfMlV2cEw?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 남아프리카공화국에서 이직을 고려하는 사람들의 48%가 AI를 두려워합니다. 미래에도 유망한 최고의 직업을 알아보세요. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직원들이 주 4일 근무제와 AI를 요구하면서 9시부터 5시까지의 근무 시간이 사라지고 있습니다.",
        "enTitle": "The 9-to-5 is on its way out as workers demand four-day weeks and AI",
        "date": "2026-11-14",
        "originalDate": "2026-11-13",
        "sourceName": "NationalWorld",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPdk5JRjljWGx3bUdsWk5BekZ3YVJLWGJmWmlRZ2lZdUEwcnZ0OU5KYzRpYjlBcUN1NWVhZklabTBqYVNSTFRfUnBMM3czVXE1SzREZDluWS1kS1J0VFRJTHRwT3BBUUhvdnFrYTJRNlkwSjRldUpXcXR4Rl9ISlJ3eUx4Rk5GYWRZN0dtSGFqMmhiMmtfMVZTWklJSHJaZmRKZGRZRXRB?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직원들이 주 4일 근무제와 AI를 요구하면서 9시부터 5시까지의 근무 시간이 사라지고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI가 인도 IT 일자리를 위협하고 있나요? 무디스가 말하는 일의 미래",
        "enTitle": "Is AI putting Indian IT jobs at risk? What Moody’s says about the future of work",
        "date": "2026-11-14",
        "originalDate": "2026-11-12",
        "sourceName": "The Times of India",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxNUi1sR3FwZjJnMUx6d2FWWlVlMWRfbUkzSTRFTEZWWUQ4d3Y4ZWtBZlhpdDlTUWtCb01NVnhYSm1raGQtNUNFSmY1TFlBQWhMaXdZLTJ2UzVWWDNzM2JHQnZJNVNWOVRQMEdUdGlLYWlQc2Y0V05EVkE1dkNqdmNfMHlfNjA2ZkFEZEhyYXotd1ZvRFJ3WThsbW5MUk15WUVuamZNVlRvV05kLWtPY25aU2ZsRUszZW9rYXdwM2hlNnRqc29NWmRienNEbDZiSlJzS3ROUC02WVZoUW8wVVQwNERQNEI2YzRXZVFveFFYLThGNW92RXhj0gH8AUFVX3lxTE9CS2NGbzRaaUFwUU0wYm90ckFjdWw1d2NpZnB6VWNBNTlwNmJSS0RhTWpqb3pFXzZfcUlBVUN5eWVZRlZZRTJSM05ITzJEcXJzd0kxMXJ2RlFMbVozYkZITWNQQkpkekVCTEZlUXpMLWJVQk5Jck5XVkkwNnFkNFdvNEVKdWc0bm16VzBBOV8yOU5OUjMwUzUxS2d1Rm5ybGdwR0ZFN21NcnpMdTh1RWV0TWE1YlBZTi1zMFU4NEpTMVo3YjE3ZF9BejAtdm1oYTdZZ1Zkc1RtdmV2TEpSSlJidGdEWEpSRW5WWjIxdHN1cHJoYnpZdG9mNWRVRQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! AI가 인도 IT 일자리를 위협하고 있나요? 무디스가 말하는 일의 미래 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI 이슈트렌드] 젠슨 황 퇴진 쇼크 속 트럼프 행보·앤트로픽 개인정보 유출 등 화제",
        "enTitle": "[AI 이슈트렌드] 젠슨 황 퇴진 쇼크 속 트럼프 행보·앤트로픽 개인정보 유출 등 화제",
        "date": "2026-11-14",
        "originalDate": "2026-11-14",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5FMm1YN25VV2s5YUxfdjRSMnhhbG5pSmdzckJqeEl5ZU5pOVFkUlByV196NUducktJZmYtdWJScFNWYVJhdjVyb3FYOE9EdEV6dmdIWDBONjh5TjZkRG9hSER4SUZLcDFFUmc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI 이슈트렌드] 젠슨 황 퇴진 쇼크 속 트럼프 행보·앤트로픽 개인정보 유출 등 화제 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "애플 앱스토어 심사에 몇 주씩 걸리는 iOS 음악 앱들",
        "enTitle": "애플 앱스토어 심사에 몇 주씩 걸리는 iOS 음악 앱들",
        "date": "2026-11-14",
        "originalDate": "2026-11-13",
        "sourceName": "GeekNews",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBtdU5NRFZSdENOSEh3NmhBQ2YyQUN4V3ItMXhBMDVLa1VGNHBmMUM5bFhfZ3hjaUszMl9sRk5WdGNIaHN4Y0VKc0F6MA?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 애플 앱스토어 심사에 몇 주씩 걸리는 iOS 음악 앱들 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "AI가 쇼핑하고 결제까지…오픈AI, ‘챗GPT 월렛’ 출시",
        "enTitle": "AI가 쇼핑하고 결제까지…오픈AI, ‘챗GPT 월렛’ 출시",
        "date": "2026-11-14",
        "originalDate": "2026-11-14",
        "sourceName": "서울경제TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5GTEY2b2F1QWI2cGszYjIyakd3WW02ZjFNRUZNZmwyMjhIVVdxak9udkhZMURPUnlBVlhVSlYyb1FmSm5Qa1BZeHVuX2t5Zkc5RTNabjlVTnFKbUpMaTJxR2hsWlk?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! AI가 쇼핑하고 결제까지…오픈AI, ‘챗GPT 월렛’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
