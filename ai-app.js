/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "2026년 미래 직업을 위한 10가지 주문형 원격 기술 - Aayushi",
        "enTitle": "10 In-Demand Remote Skills for a Future-Proof Career in 2026 - Aayushi",
        "date": "2026-04-26",
        "originalDate": "2026-04-25",
        "sourceName": "Analytics Insight",
        "sourceUrl": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPTDEzNG5GNkk0Qk0tcExEd3ROQU5nT0JScF9odnFBNFI4MGdHa2FQa2V1U0NCWl9lM3RNT0V1aFlMMXRURkZGSWJhdTZEd1BhMlE1UzBhVlBQSmNTNkxxdmRJLTJsZ1pXRWlzSXRYN3kwcWNlc1FJaEpZMlc5dXRZeUJ6bklXWV9GVlpWaG9laXJwckMtaElER2tXM3RrTGhyS1NzemdZME1Ed0pW0gG6AUFVX3lxTE50eEpqRnNMMmFJSzNtZmJwc2R2bjk5eFp4ZGlWV1I1bUtoR3ZSbnhGb2xvUnJ1VmxILWR2VTdGS1dFbGI4eEtNZDZ1NFJqMklnU2tGSkFlWFRkck5ZUmVHbVhlMHE1ckZ1Qzg5WG96WFdqR1EwcTMwcGl0dVV3ZFlRcFBRUkYzaHNyRW1vT1RPMC1NZUtBaGhJT2p5VkNmWk5DYzJWNjdHZUZRdERZbGhUcHJpSGRfc0ZKQQ?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 2026년 미래 직업을 위한 10가지 주문형 원격 기술 - Aayushi 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Spark Capital VC는 AI 붐이 새로운 종류의 공연 근로자를 만들고 있다고 말합니다.",
        "enTitle": "A Spark Capital VC says the AI boom is creating a new kind of gig worker",
        "date": "2026-04-26",
        "originalDate": "2026-04-23",
        "sourceName": "Business Insider",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOSWt2emJ1c1RFamd5Zno1MDE2RVpkaG01VHBzcE5hZHNHQkNpQ29IRzFyYWV3YVB4MENqRE5Mb05lUFJJeVV2c2JIcXZTUHpkQ3o2R3BFMHd2enRJSmEyNnhEZXNheHRXc3FsNGEtTEJoWTdXOHZRaWwzamE2LW40YUJnZGppT1N4ZjlkU3ZsYUIzZ3pONEQ0S0RPRmlZQ0g4?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Spark Capital VC는 AI 붐이 새로운 종류의 공연 근로자를 만들고 있다고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Future of Knowledge Work Summit: AI가 업무, 경력 및 지식의 가치를 변화시키는 방법",
        "enTitle": "Future of Knowledge Work Summit: How AI is changing work, careers, and the value of knowledge",
        "date": "2026-04-26",
        "originalDate": "2026-04-23",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxNM3pDSGpzd0ItZ0FsZjNDQTFaMmZOZm5GbE13R1JUTHBmSDRHTGx1MGFNT2t0Q2U5VEZieWtFRTh1MTdreGtPS3QtS3VCZ1lzMmNUOFRqSDBTbmRSRVB4NVNJaG00cHpWSGU3cW9hMFUwQkphMTJUWkt6Qm1WMTM0Uy1jX3BYS05sV1dWNmxQN3A1c3NVdUdtZzZMcFR3TTA5dmw4Z2xaZXBPRjNGS1JuUUtLWUJuZUYzUnNLZVZVQjlJN3ZQbURCTU0wVjhzR2RSM0k2UGpoZm5sZlRtWjJCQV91WUs3YmpGT0g3Y2VHZUzSAfYBQVVfeXFMTjgzNG9ISkh5b1BrQ3J3MGlHS05yTVhuZXdDTDVreERhN0M1VTJhWlNDMm5IVDloY1R4TXQwZS1wTGo4QmNjUktPNk5pUXVpbng1aS04aU5VMjBNOWFnbFd4eGZsQUcweXhJQ3hJT2haeEhmS3dpYll2S2hERmo2T3ROeTZfbjctbzF0ck9WSjJzSTYzZVk4NGFQNkZUU2YzR3R5QlhYMkNWN1FuYW92djB0UTZwSGlpdVNpYTBiUjJRWlhhUkIxUldiR2xDa25hbzB1al9TZ2dfN1JCN0xIT1M0YVMzTEJiS0w0bzkzdGw2bmdiQXB3?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Future of Knowledge Work Summit: AI가 업무, 경력 및 지식의 가치를 변화시키는 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "MIT가 선정한 'AI 핵심 트렌드 10가지' 공개, 정보 독점 시대의 그림자",
        "enTitle": "MIT가 선정한 'AI 핵심 트렌드 10가지' 공개, 정보 독점 시대의 그림자",
        "date": "2026-04-26",
        "originalDate": "2026-04-25",
        "sourceName": "유스연합",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBrZk5EMTQ5N2k4QXRRR3RkUXM2NlFtajZDZVVDemlBWTBqTTRlQnNTam8ySmRPaHQzWE1Xa2FYeFlZNDAtOWQ4NjM4WlRHZjdNV2c?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! MIT가 선정한 'AI 핵심 트렌드 10가지' 공개, 정보 독점 시대의 그림자 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "‘2026년 대학 인공지능(AI) 기본교육과정 개발 지원사업’ 선정평가 결과를 발표",
        "enTitle": "‘2026년 대학 인공지능(AI) 기본교육과정 개발 지원사업’ 선정평가 결과를 발표",
        "date": "2026-04-26",
        "originalDate": "2026-04-25",
        "sourceName": "교육앤시민",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1KVXlrejdQWnRKSkpJbFpmWkllNE9FanlhWm1lWXZsQXhobEpUeDZVWDhTVmtHdGNIb1JSXzBHR0xjVkRJQmVUQnV5TVk5VzlTT2VNTFpQMDRNTFZBaEE?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ‘2026년 대학 인공지능(AI) 기본교육과정 개발 지원사업’ 선정평가 결과를 발표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "왜 지금 다시 클로드 코드인가: 클코나잇 시즌 2",
        "enTitle": "왜 지금 다시 클로드 코드인가: 클코나잇 시즌 2",
        "date": "2026-04-26",
        "originalDate": "2026-04-25",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE44czZEVFBHZTJKZU9oeEVEZklCLVU0WWVxVFA1RlFqeFVmdUc3ZTV0a3JGTWhrVmhMcW05cUlKZGk5OFkzQjBtYWllWUtNSWp0YkxlbDQtYUVEZw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 왜 지금 다시 클로드 코드인가: 클코나잇 시즌 2 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
