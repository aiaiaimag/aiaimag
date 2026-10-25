/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-26
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Piyush Goyal tasks ministry with mapping 'AI-proof' jobs as India plans for future of work",
        "enTitle": "Piyush Goyal tasks ministry with mapping 'AI-proof' jobs as India plans for future of work",
        "date": "2026-10-26",
        "originalDate": "2026-10-24",
        "sourceName": "Moneycontrol.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPV0p3dHVaRTlXZU9wUjdET0JtbUFqMFBmekhsWTlHUHJCclMwZVpmYUxtN2tabHdnWWJPZzlRdHloMUtqd3JmUFVydjJ3NVJsaDRfZUtCSjNIMEw3ZVNuM2xwdjZYdUphOTZDYkMzeGRhUUhSaHMxZ0VDRGExakVUYmJnT3o3NnBoU0tINGVPNFFsMzNfWHR1UUN2T3oxNTQySHRja2Vaak5LRXh3bDdQUnZ2X0FpWDNCS2thbHFFUF9BNG1fZU5sZkxTc1k1SDNNemswTFNfRHdSaV82aXd5ajZNcDNMYUc4R2pVeXZjQdIB9AFBVV95cUxPZUhpYzJ3QVF3V09peFdyT3J5Yy1qbWJaUFE2WkhkbjFJTG9QNEhPal8xeXVBNGVPdWUyOFZDdk9Vak5pVWpFeDYzSFU4VTFxeTcyQ3FnNHNkdzVTZG1pZ0NqTlZyX05ZNEVjNHZXVmVKYm9LQWlFc1haY1BZZ3VrbEJVWmFhenlfT20wbmhrOEZMVV9KbHBhNUdxZXdoaVI3c2RtRHl2T2MzTHNhNWs2VmRmYWg1UkRtTXZWN2RkR0phTkJvQVRIQVQwZzZ1QThCUTk2MDhiZ25KWlk0eEEtbXZ1RUlKd3BCYTZNRGFTbnJZQkFa?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! Piyush Goyal tasks ministry with mapping 'AI-proof' jobs as India plans for future of work 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "젊은 중국인들이 인공지능에게 패션 조언을 구하고 바이럴에 빠지다",
        "enTitle": "Young Chinese Are Asking AI for Fashion Advice, and Going Viral",
        "date": "2026-10-26",
        "originalDate": "2026-10-23",
        "sourceName": "Sixth Tone",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBzUzZoM0djRXBEMFVUWENCcklGM0E2SkNNd0gxdHotTDRaM1p3Nk4wVmZsbXBrWVRMRm5pVkFPS3pFZW5qeVJ5VHhBOW1BbG8?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 젊은 중국인들이 인공지능에게 패션 조언을 구하고 바이럴에 빠지다 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "전문가들은 AI가 회사의 업무를 어떻게 변화시켰는지 상세히 설명한 Anthropic 보고서에 의구심을 제기합니다.",
        "enTitle": "Experts cast doubt on Anthropic report detailing how AI has altered work at the company",
        "date": "2026-10-26",
        "originalDate": "2026-10-23",
        "sourceName": "The Guardian",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVGtBREc5bkZGWEZuOWh1VFljWllKZ1FaUDM1eElQNFFfTFpkM2JqNzRxSzRlUnFQRUdITWNQM1NGMGxPN3lpdDd3cFZCbzB6OUVlUEJYWEN0bGhUYW5LckdlU1FVVlk5VHlsU01MNDg4SXFETFdXR1FBdDJ5bEROdHkzUzRGMmYzbVlTcjduR3M?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 전문가들은 AI가 회사의 업무를 어떻게 변화시켰는지 상세히 설명한 Anthropic 보고서에 의구심을 제기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "'클로드'가 그림에 숨긴 문장, '아스트라'가 풀었다…88% 해독",
        "enTitle": "'클로드'가 그림에 숨긴 문장, '아스트라'가 풀었다…88% 해독",
        "date": "2026-10-26",
        "originalDate": "2026-10-25",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBleXd4UGFObFRtamZYR0w0eGRRSGNoSmJZNUVGNHZOcTM1TE5Za0Y3YkYwWnlGVXdVck8yVzJTS2draTVMOHl5UmlhRWVOc1Q5ZF9iem9mdkg4UF9lRkxZNzJZUUdFOUp2VHc?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! '클로드'가 그림에 숨긴 문장, '아스트라'가 풀었다…88% 해독 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "\"천문학적 투자 대비 수익은 어디에\"… 中 AI 랠리 붕괴, '반도체 자립 드라이브' 강타",
        "enTitle": "\"천문학적 투자 대비 수익은 어디에\"… 中 AI 랠리 붕괴, '반도체 자립 드라이브' 강타",
        "date": "2026-10-26",
        "originalDate": "2026-10-25",
        "sourceName": "글로벌이코노믹",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQY0RIdWVVdFVxSWsyWnhFRlNaY1M0aWlxeTRsTHlRRjBITVBmTGFjRmRZYmdpNDVqSlhXejZxZ0Q4Y0FvcXZ6NWx4WWlFTVdTRlgzLTB3LUlubGxZbEgtWXZ0NjE1NUY1VDdPTTRqQ1NndVFNUVFwaWVnVS1TUUpsUUp2Z0EzbXpX?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"천문학적 투자 대비 수익은 어디에\"… 中 AI 랠리 붕괴, '반도체 자립 드라이브' 강타 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "\"취업해도 AI가 일한다\"‥신입사원 '경력 사다리' 끊기나",
        "enTitle": "\"취업해도 AI가 일한다\"‥신입사원 '경력 사다리' 끊기나",
        "date": "2026-10-26",
        "originalDate": "2026-10-25",
        "sourceName": "MBC 뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9FMkQ3cGJtdHpmZDNaYURpUWNTY2VDaGZtZ3h1emlHOGxXVUdqR0RNVUFBVVowc2hvdmN1WU9GUER0NThTc2R3bXdvaExRcms4bnVHZXVvczVSZWZBX25kbkowM2R2al91Ry1iaGVGWENsbmFzSGdKRdIBeEFVX3lxTE1Pb1czVUNrR2phd0NhMnlKYm9JYkxrTmJ5Sl9zZG5lQ1ZfNGdzV0QyMGdrVkdlQkthRkRleGI4eXAtYVNoUmVxUUNCQnhLNmtFVTI5Q0ZjTVZ3VVJzSTc4RDdQbEFoMDRKR2pXN3Rqb28yeld1S0RQbQ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! \"취업해도 AI가 일한다\"‥신입사원 '경력 사다리' 끊기나 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
