/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-05-04
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "인공 지능은 2030년까지 일자리의 22% 를 변화시키고 수백만 개의 기회를 창출하는 동시에 경력을 재정의하고 새로운 기술을 요구하며 글로벌 작업의 미래에 혁명을 일으킬 것입니다.",
        "enTitle": "Artificial intelligence will transform 22% of jobs by 2030 and create millions of opportunities while redefining careers, demanding new skills, and revolutionizing the future of global work.",
        "date": "2026-05-04",
        "originalDate": "2026-05-03",
        "sourceName": "CPG Click Petróleo e Gás",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAJBVV95cUxPSE5wVTNING9MaU5NZWE0NWUtOF9EWVppMkF6SHRaNnhzUUVzcVFuSklPQXlVRWZzVE5tTk8tU3otTmVyWUd4U1VLY3FmUG9Zay1lUFF5NnQ0SVlYSWxfY051Y1E0Z19mTDlkVzVxMzZyckJTVHRBazdIdEFHZ2FnQmhsTElLQkdLaVdVWV9hcHpMcnlYMXQ4VGduLWN3QUM1V1NrQmk3TWVvcTMzcGNCek9LUWVvNXBnMFRXX1NZQTFzT2VQMXdud3YxNUpTTWV5cGwyZDdsWVZaVnNzU0U5alZ2aUE5YTUwcEtMSVdJU0pKTE1na295Z1hDU3dpQzB2cEp6bkR3eWZKdmExVFg1Rw?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 인공 지능은 2030년까지 일자리의 22% 를 변화시키고 수백만 개의 기회를 창출하는 동시에 경력을 재정의하고 새로운 기술을 요구하며 글로벌 작업의 미래에 혁명을 일으킬 것입니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "직장 내 AI: 2025년 보고서 | 맥킨지",
        "enTitle": "AI in the workplace: A report for 2025 | McKinsey",
        "date": "2026-05-04",
        "originalDate": "2026-05-03",
        "sourceName": "McKinsey & Company",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQNHluenp6NE4teVg3bTJiWG9VZk81dDQwcDBJcmVJWlBHdWhIYWRSYTNWX052aHVZdjhfdmxXNk9mTENURGRzdURmMExpTm5VazdfTWZpcUxTV21TcThJbHc2cFluMmRjMXdVeE80ZDhBR0JUWUhJcHJiX2Rva1lGT2tfMDNEOHZzRkJwSUpoM3FwZjh1RU56aXcxclFqNnRyVkRBVkJIbUkyaloxWGpscjJTZ2hYVkNxX0g2d2liUm41MlhaZDQwcl9JTlFtcWVGd3d0Vzg5V3Y?oc=5",
        "isRepublished": false,
        "viralRate": "90%",
        "analysis": "글로벌 AI 트렌드 체크! 직장 내 AI: 2025년 보고서 | 맥킨지 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "샘 알트먼 (Sam Altman) 은 현재의 많은 직업이 사라질 것이라고 인정하며, 사람들은 여전히 최고의 삶을 살 것이라고 말합니다.",
        "enTitle": "Sam Altman admits many current jobs will go away, says people will still have best life",
        "date": "2026-05-04",
        "originalDate": "2026-05-02",
        "sourceName": "India Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQT0kzSVZfaUFKUFozbUtFaWZobVNVQ05Yc3VaZFZlamVWbHYzSTBZMmxUdWJ0QkxDZnpWMTZfcGoxR1Z5MDBmMWlhRk5PLXBUUWpRUkJpV0xIemwzeGNkTmZTcnVyeUVsb1RxT1l1OENFbWRYck5GaEhvd2p6UGNEZkc0NmJZc1dwaG9sZlpQOFhkUjFFdHRPZUxfMHdkZGZvaGFEN3pmQmcyeFBTQWJtallaQlVHekM2UTNub1hIMVFuRlVNRGFvM3pKZzhKTEtmYnJkRUdCT1PSAd4BQVVfeXFMTU5JalMzOXNEQWNCdzd4M213OVVHN0Q1Ri1wajgzNGN6XzlrTlFXOFJLdHlHOHVvUEpfWDJOTl82ZlY3ZzQ4M2NUSGNHMXA0bmNUazBlZ2RNSUxqOEYyYkk0bmVlX0pfSWs0cGg3QWFxUVBMMmx6Tmg1YjdQNWhjUzdUZjdpTWhkSzFJZHRYSGc3aHpocFpxVjJyb3RGLXpHYkNDSkd0ODNnbFR1a1Zqdk1IQzBQVjBMSmJsLVRaRTFaNWVITkZJQk02TmItYVpzOGxEWkh0NFF1aHlfSGJ3?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! 샘 알트먼 (Sam Altman) 은 현재의 많은 직업이 사라질 것이라고 인정하며, 사람들은 여전히 최고의 삶을 살 것이라고 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "카페24, AI 기반 개발·배포 통합 서비스 'AI 스페이스' 공개",
        "enTitle": "카페24, AI 기반 개발·배포 통합 서비스 'AI 스페이스' 공개",
        "date": "2026-05-04",
        "originalDate": "2026-05-03",
        "sourceName": "신아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5JdzA0cjJsMWtGdG50MFRWTm9hdE9vX3AxZGY4NFc1TjVzb0VNR3p6YlhVN2lQb2w4NVdGQXN1V3YzaGxJdUJrdjc2MUc4VlNmZHc0VG9kZWNkdDlTWTZDWEZneHFrSVVONmpBZHIwQ0k?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 카페24, AI 기반 개발·배포 통합 서비스 'AI 스페이스' 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "빠릿한 GPT·똑똑한 클로드…완전히 다른 차원의 '오피스 모멘트'",
        "enTitle": "빠릿한 GPT·똑똑한 클로드…완전히 다른 차원의 '오피스 모멘트'",
        "date": "2026-05-04",
        "originalDate": "2026-05-03",
        "sourceName": "한국경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBUMUZITW9ocXRPUnhBS0k2bmEzXzN6eVN5bWNRZG5xdTVEdk56N3lsaHRtemdrbXVjM1lLaFgyMlRiNjZSNi1pMkhqbjhTOGkxT3pyMGFrYUNFQdIBVEFVX3lxTE1yZ0I5dDktZTRGcGZKRTV1X1U2Njl0UFJ0RlpSZkJsbUJTN09aeWVOZVc5NTBtYy0xQjRuelpOc040S0QwLWc5QVRCR2dPUTFxZzBWMQ?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 빠릿한 GPT·똑똑한 클로드…완전히 다른 차원의 '오피스 모멘트' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "“HBM 없어서 못 판다” 마이크론의 경고… 삼성·SK 주주가 봐야 할 ‘수익 증명’ 지표",
        "enTitle": "“HBM 없어서 못 판다” 마이크론의 경고… 삼성·SK 주주가 봐야 할 ‘수익 증명’ 지표",
        "date": "2026-05-04",
        "originalDate": "2026-05-03",
        "sourceName": "초이스스탁",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1pMUFKVHQ2Mlc1dUNhaDFLYlhZVzgyb1NiV2NYa3c2OTFEXzJpS2kzRzRmaHJaQlR6YmFVV0VreWdfcnNYbjNqb3M3ZVdJUkdnOEN0d0xmUU91bnZVVzA3dDZHc25GV3c?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! “HBM 없어서 못 판다” 마이크론의 경고… 삼성·SK 주주가 봐야 할 ‘수익 증명’ 지표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
