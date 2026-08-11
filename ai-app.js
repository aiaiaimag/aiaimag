/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-08-12
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "저커버그의 AI 비전: 더 많은 일자리, 더 적은 근로자 및 ‘개인 초지능’",
        "enTitle": "Zuckerberg’s AI vision: More jobs, fewer workers and ‘personal superintelligence’",
        "date": "2026-08-12",
        "originalDate": "2026-08-11",
        "sourceName": "HR Executive",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPbkxUWU13Z0gyR3JpMW5hLXN4VzRXYlRRS2tSMjlCQS1xOXEwVVAxQ0d0RnZ5a1FkTDUyWHdEN0kzRjg2QkFxaWF4Y245ZTFYa0tUZ0djWko4WGlPZHppTTgzSXVpT01ITEVKdFcyYlpFYXdsWlM0ZDlxcFB6Zk85TmZObDhRLU5VQ0ZLVUlZYklMSVowS0tnaEUzTUNrVWtmYURZ?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 저커버그의 AI 비전: 더 많은 일자리, 더 적은 근로자 및 ‘개인 초지능’ 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "바이럴 \"가짜 테이크아웃\" 트렌드: 이 AI 자산 관리 앱은 테이크아웃 주문으로 사용자를 로스팅하여 연간 매출 1억 $ 이상을 창출합니다.",
        "enTitle": "Viral \"Fake Takeaway\" Trend: This AI Wealth Management App Roasts Users for Ordering Takeout, Generating Over $100 Million in Annual Revenue",
        "date": "2026-08-12",
        "originalDate": "2026-08-10",
        "sourceName": "36 Kr",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1HbzhpSHBXbVRyWjgwUm4yVXRvX045VFN0enhrNnREb1dWdkU3cmdveTN2NXFPeEhhQWd0ZjhHam9TUWtrSmt4U1hQYUc3VVJfQ21R?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 바이럴 \"가짜 테이크아웃\" 트렌드: 이 AI 자산 관리 앱은 테이크아웃 주문으로 사용자를 로스팅하여 연간 매출 1억 $ 이상을 창출합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "마크 주커버그 (Mark Zuckerberg) 는 미래가 ‘풍부한 일자리’ 를 가질 것이라고 말하며 새로운 커리어의 물결을 예측합니다.",
        "enTitle": "Mark Zuckerberg says the future will have an ‘abundance of jobs’—and predicts a wave of new careers",
        "date": "2026-08-12",
        "originalDate": "2026-08-10",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiggJBVV95cUxPZE15a3JzNEp2dWRZNXR2Q0UyLXhNcWMzTWJKRGJMblBzSW1Yb011UmdSSTIyWkFVRVM5aVlzeUxucWs1OUFWN0JRWUVhNmw1VzNmT0tkREdackZVbVF5dl9CMkVPQ1F2eVdEYVRHbzV1NEZKXzVxeDZ2czhPSl95YkxnUE1SdlRaVTFSbWZ0NWtRNjZqekl1akszeGxsTUtkei1VN1huUWdWRjlrdnV2clFoQ3I2UmltNDc2clZhZmlGOWN2TmRuekxOLVpBTTB4enVMZHdOZDNtQWY5aWt2QVBfTHFHNDhteDJmUTdrOE9FZmkxSjk3M3N1VWI0TF9yN2c?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 마크 주커버그 (Mark Zuckerberg) 는 미래가 ‘풍부한 일자리’ 를 가질 것이라고 말하며 새로운 커리어의 물결을 예측합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "챗GPT·제미나이, 국내 이용 경험률 1·2위…검색 절반 이상 AI로 대체",
        "enTitle": "챗GPT·제미나이, 국내 이용 경험률 1·2위…검색 절반 이상 AI로 대체",
        "date": "2026-08-12",
        "originalDate": "2026-08-11",
        "sourceName": "v.daum.net",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9SZlZ2YVBIQm5aNUNZcVJuSFdCUENRX0VwV2RlNERCMzJtMFhjc1YzZE96U3FTRTE4dk5pM3FwSGRiVFUyRkdvSkg5X1lmZEk?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 챗GPT·제미나이, 국내 이용 경험률 1·2위…검색 절반 이상 AI로 대체 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "오픈AI, 리눅스용 챗GPT 데스크톱 앱 출시",
        "enTitle": "오픈AI, 리눅스용 챗GPT 데스크톱 앱 출시",
        "date": "2026-08-12",
        "originalDate": "2026-08-11",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBnWlhoMDZtdlY0cUxoSHBja3pzaXhoX2pFWnROM1kxY055UVlRNWxBRkVqOE9mUHpMQ2p6Wk5tbktzLWt6OXFTYWludHVCT3N5akpMODFZQ2cyQnlGUzdSd2ozcU1MWGQ4dFZGeXBFdWRtRGc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 오픈AI, 리눅스용 챗GPT 데스크톱 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "동원과기대, AI 취업·창업 시대 연다… AI 실전 프로젝트 참여자 모집",
        "enTitle": "동원과기대, AI 취업·창업 시대 연다… AI 실전 프로젝트 참여자 모집",
        "date": "2026-08-12",
        "originalDate": "2026-08-11",
        "sourceName": "411개 대학을 연결하는 '힘'",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBNX25wN0ZJOGZsMVNMNy16R2lTN2lRNFViNENQWGRRVDFvSllNX29ZZGV2aEFDM3hNc2hxOWJRWnFvWjNITFVEczVKZTR6UE8tUHRTNFZITzl6NlNidjdtekFfaDBCdw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! 동원과기대, AI 취업·창업 시대 연다… AI 실전 프로젝트 참여자 모집 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
