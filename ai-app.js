/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인도 학생들은 AI가 딥 러닝을 약화시킬 수 있다고 우려합니다. 설문 조사 결과",
        "enTitle": "Indian students fear AI may be weakening deep learning, survey finds",
        "date": "2026-10-21",
        "originalDate": "2026-10-20",
        "sourceName": "The New Indian Express",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQNFdJbnNPMDFhZHFaWFltc2RnbU5DeUcwYXhVVllGQ3ZhOEFIeUdOaFdHRVNoRExKT09qOFJ4X3RpTmp5ZXRpbUVxT2NiSzhNNTcwaVgxb1B5Um5JTGZaZkw3cGY0WkZ5UGQ1VkZIa3loX3pXTmhtd1gxZnZJTXl3emVVWHcwRWxSLUdRa0NIQUpJeV9tbUZuS0RqVV9ScnNKM01XVzdfV1V5WTkyZkwyeHo0SkM4WWJPWkHSAccBQVVfeXFMTzhWR09iaVFHbjVxR190bmo0eDVNdFBodlJmcGNOUm1UNVByWVBpT01FZjA4cndnNVlVRFMxYkQ0b2lOcHIzQVJzRVhBWHVRQ3pMeXhiS2tvaXk1dFRiY1ozSnFMQVlmOHNjR0hPdkNvd1BuTy1yQVgzaHc5UzlOWkV3Z2dCb1pZZkV5cFpqMUp4bk9PbFlpczJ5czVDcmN2MDdmS0R0RmVTS1cydVRQcGpPUHltQ1RqelpxcTRGbmNZY09palZyRQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인도 학생들은 AI가 딥 러닝을 약화시킬 수 있다고 우려합니다. 설문 조사 결과 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "국제 AI 전략가이자 저자 인 Katie King, IAMPHENOM EUROPE 2026 기조 연설",
        "enTitle": "International AI Strategist and Author Katie King to Keynote IAMPHENOM Europe 2026",
        "date": "2026-10-21",
        "originalDate": "2026-10-20",
        "sourceName": "Via TT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOeHlBbXNFcW01NlJlNjM4cE9NSmtTU1d2cU5jTzJXNlVyeUJKSENOVHVmNnU5elNrNlQ2YjlVZGdMMU9RNGNUak1HVTBsS0NpSW9URkpQNHNCRmE3Wm9vR2dEUlhFSktBR0wzeFBGQzN6bHprN0I1eThfakZ5YnJaLWVkWnVzMXNTOEJCOGI3NFdNU1kyUDBVUzBSXzVMYnR1bmdkZldJT0FDSTdYUW1FTExnU2xlQ1Yzci1vWjFNVmJrMTVtbWg2NV94bmlDZ3NzckVIM0VJOUFtS3R3TmZzRHlzWGNGQQ?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 국제 AI 전략가이자 저자 인 Katie King, IAMPHENOM EUROPE 2026 기조 연설 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI와 업무의 미래: 일자리 손실에서 사무실 이익에 이르기까지?",
        "enTitle": "AI and the future of work: From job losses to office gains?",
        "date": "2026-10-21",
        "originalDate": "2026-10-19",
        "sourceName": "IPE Real Assets",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNc1Z6UU9lZFVqMU9xLTdEQVNjS3JGMExVbndjdUk5dUNtanpOR1hWalFqcFVnTjdaU21pUWQzRUF6RVBRejVUdVdTbGdYOUZtbWowVGdhT3o4UERNZDFMUDB5c2MzQkVUcFVmUE5SYW1FQVhnd0NxUUZPMnJKbjNTRGdYRjhWQ19sT25SYU56NWE5OEpwbFJ6V2xVVTFWaXQ1c0VUcGRpMnFHWmJibUVOeXpwV0VKcUFw?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! AI와 업무의 미래: 일자리 손실에서 사무실 이익에 이르기까지? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "시장 출시 앞둔 환경분야 인공지능(AI) 서비스 첫선 보인다",
        "enTitle": "시장 출시 앞둔 환경분야 인공지능(AI) 서비스 첫선 보인다",
        "date": "2026-10-21",
        "originalDate": "2026-10-20",
        "sourceName": "에너지데일리",
        "sourceUrl": "https://news.google.com/rss/articles/CBMickFVX3lxTE9tenRVZ3JwWEN1dXpPM1c1WmJmMU5CRVgwRkk3VUZCTTdlemZDQnAzRVNhM0ZSUVNiZUM4OUJKQjV3aDdhaXhWdWx4WDUxVmI0RkJQLTA0T3ZzVzFQSWp0LTQyMmp6Slc2Q1pqYnFKZXRkQQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 시장 출시 앞둔 환경분야 인공지능(AI) 서비스 첫선 보인다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "enTitle": "제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델",
        "date": "2026-10-21",
        "originalDate": "2026-10-20",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiekFVX3lxTE51czdyblRzU3U2a2lYWTQyQXhPYjJCTmxWVjE2RS13NVlySzBZQ0VVRjRVSkFLYVZKZTlJLWZfSmxlT3g3TFRNS09KRE1waEhKd1lCSWI3TWo5OUxXRFBlVU9EdUlEU3d3VjFfR21ySjVCZlNpbFEyTFlR?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 제미나이 4 아르곤: 가장 까다로운 난제를 해결하도록 설계된 모델 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "“챗GPT 써봤다고? 뭘 만들었는데?”…AI 시대 취업법",
        "enTitle": "“챗GPT 써봤다고? 뭘 만들었는데?”…AI 시대 취업법",
        "date": "2026-10-21",
        "originalDate": "2026-10-20",
        "sourceName": "이데일리TV",
        "sourceUrl": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9wMHpYcm5pSzRJbEZlVjlsR2lycUlvQ3c5SHFHazhvTHgzRXFjM3BhU3lNM09TaVJoVllSUWp3dV8wY2I2TGtYYnZNNVlfb2dZVW1tNWI2UmxDUGxVY29UV0dPNTlKZ2RXaXlXUDBzdFJRbnhZY1dacHpMRQ?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “챗GPT 써봤다고? 뭘 만들었는데?”…AI 시대 취업법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
