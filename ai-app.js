/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-02-24
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "미국 AI 거대 기업, 중국 라이벌을 대량 데이터 도용 혐의로 고발",
        "enTitle": "US AI giant accuses Chinese rivals of mass data theft",
        "date": "2026-02-24",
        "originalDate": "2026-02-23",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBjSTZTNVNoNVFnbl80ejNOdUJvQTdpNXlmWFBqM3NaTXRsWU4wbkRFYmRYSktIT002YWdUampiV18tUXBMR1BhMW5aWU5jN0RKWnV0cnp4enZ2bjg5aUNKTjlPLWs1ODBPeVh0bExuMjNXTlVEeEEtTTltdHA?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "hookTitles": [
            {
                "top": "미국 AI 거대 기업, 중국...",
                "bottom": "(The Guardian)"
            },
            {
                "top": "오늘의 핫 이슈",
                "bottom": "최초발행: 2026-02-23"
            }
        ],
        "analysis": "미국 AI 거대 기업, 중국 라이벌을 대량 데이터 도용 혐의로 고발 | 오늘 발표된 최신 뉴스입니다. 출처: The Guardian.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Bridgewater에 따르면 2026년 AI에 약 6,500억 $ 를 투자할 빅 테크",
        "enTitle": "Big Tech to invest about $650 billion in AI in 2026, Bridgewater says",
        "date": "2026-02-24",
        "originalDate": "2026-02-23",
        "sourceName": "Reuters",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOYTBiU2Z2N19yek9Qa0M3dTg3QWRvcXowRUZNcGxnU0o4QkRmXzU4N053Vy1HdktTSU16UHhfQWdrcmhrVE51M1RJZER5X3NkQm5XRXh1RXlncXRBbWZ4UktfQUhkMkEwZHhCRWZxMHVOZ1lfSWpYbzJydjl4c3pHMU5CR1A5VHk1OFBrNGJpYWh1X0ppS3BmT2dzOFViTlBFTDltVTNR?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "hookTitles": [
            {
                "top": "Bridgewater에 따르...",
                "bottom": "(Reuters)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-23"
            }
        ],
        "analysis": "Bridgewater에 따르면 2026년 AI에 약 6,500억 $ 를 투자할 빅 테크 | 오늘 발표된 최신 뉴스입니다. 출처: Reuters."
    },
    {
        "rank": 3,
        "koTitle": "소프트웨어, AI 위험에 대한 Citrini Post 후 결제 공유 싱크",
        "enTitle": "Software, Payment Shares Sink After Citrini Post on AI Risks",
        "date": "2026-02-24",
        "originalDate": "2026-02-23",
        "sourceName": "Bloomberg.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQeVlEU2xHYlhTVXJnS0drZXpPV0tNbzBBbFZBVnJmbWxBcWQ1c2Jsb1B1YXBubld6TTFaaDllYVRaejlKSVgtTVhyVndwbEd2eTB4UENzbGM4TUcxdURJR2ZaTDRxVURlYWpwT1hmVTZqd2E1RzJ3STlBT1FpTnpGejdkNmthT2w2blEyZXpwdmlmY3N2RXZsZ0U4ME5IbFB4Q0xvdXBWWlp2dFhqcW52UUNrVQ?oc=5",
        "isRepublished": false,
        "viralRate": "89%",
        "hookTitles": [
            {
                "top": "소프트웨어, AI 위험에 대...",
                "bottom": "(Bloomberg.com)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-23"
            }
        ],
        "analysis": "소프트웨어, AI 위험에 대한 Citrini Post 후 결제 공유 싱크 | 오늘 발표된 최신 뉴스입니다. 출처: Bloomberg.com."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 코다리 직접 큐레이션 ───
// 뉴스 기반이 아닌, 대학생·취준생·직장인이 진짜 궁금해할 AI 주제
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "교육부, 2026년 대학 인공지능(AI) 기본교육과정 개발 지원사업 선정 공고",
        "enTitle": "교육부, 2026년 대학 인공지능(AI) 기본교육과정 개발 지원사업 선정 공고",
        "date": "2026-02-24",
        "originalDate": "2026-02-23",
        "sourceName": "시사미래신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE50YTBpeEswQWRYaW9EdDlqdFh1REZ2ejZweFpDVWJKczVFOGkxTDBDdng4VUVXWjFkM0ktbjNVQUl3dzBTeVFwRXJvYkhrTG1fcGhJbldNNTA5Mkpkd2ZENmpJNA?oc=5",
        "isRepublished": false,
        "viralRate": "85%",
        "hookTitles": [
            {
                "top": "교육부, 2026년 대학 인...",
                "bottom": "(시사미래신문)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-23"
            }
        ],
        "analysis": "교육부, 2026년 대학 인공지능(AI) 기본교육과정 개발 지원사업 선정 공고 | 오늘 발표된 최신 뉴스입니다. 출처: 시사미래신문.",
        "category": "Physical AI"
    },
    {
        "rank": 2,
        "koTitle": "국립중앙도서관, 2026년 AI 리터러시 무료 교육 운영",
        "enTitle": "국립중앙도서관, 2026년 AI 리터러시 무료 교육 운영",
        "date": "2026-02-24",
        "originalDate": "2026-02-23",
        "sourceName": "전자신문",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9yZlZnMzBjeUJnbnA2aGtGSmFOVDBXaGQ4VkVzU255MmtwMTJibUNqQ2VGLVBnLU53aUx2ZU9palo2TWJsaGZCV0pPZzJ1QQ?oc=5",
        "isRepublished": false,
        "viralRate": "81%",
        "hookTitles": [
            {
                "top": "국립중앙도서관, 2026년...",
                "bottom": "(전자신문)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-23"
            }
        ],
        "analysis": "국립중앙도서관, 2026년 AI 리터러시 무료 교육 운영 | 오늘 발표된 최신 뉴스입니다. 출처: 전자신문.",
        "category": "Work & Career"
    },
    {
        "rank": 3,
        "koTitle": "다가오는 MWC 2026 …통신 3사, AI 전략 뽐낸다",
        "enTitle": "다가오는 MWC 2026 …통신 3사, AI 전략 뽐낸다",
        "date": "2026-02-24",
        "originalDate": "2026-02-23",
        "sourceName": "굿모닝경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1KSXZvVFhHRWhoaTE3YW51dy1tSGJReUFpd2tKUWlxbEt6YTRBaS1fa2hZVmVta0FfOXRFX2VxWTJrT0ViMnBiY3JQQmE4Z1VpR0twX256VDVpa05BZ29na0UxeDIwSTZ2ZERGSw?oc=5",
        "isRepublished": false,
        "viralRate": "79%",
        "hookTitles": [
            {
                "top": "다가오는 MWC 2026 …...",
                "bottom": "(굿모닝경제)"
            },
            {
                "top": "주목할 이 뉴스!",
                "bottom": "최초발행: 2026-02-23"
            }
        ],
        "analysis": "다가오는 MWC 2026 …통신 3사, AI 전략 뽐낸다 | 오늘 발표된 최신 뉴스입니다. 출처: 굿모닝경제.",
        "category": "Korea AI"
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
