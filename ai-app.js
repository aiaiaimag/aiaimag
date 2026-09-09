/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-10
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "ChatGPT의 1980년대 빈티지 에스테틱에서 바이럴 나노 바나나까지: 비즈니스를 활성화한 5대 AI 트렌드와 그 방법",
        "enTitle": "From ChatGPT’s 1980s Vintage Aesthetic to the Viral Nano Banana: Top 5 AI Trends That Boosted Business And How",
        "date": "2026-09-10",
        "originalDate": "2026-09-09",
        "sourceName": "Jagran Josh",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxNaDVlRDNmalFGb094UEttOVdZQlZ6dG16QTNsX0ZsTjZidVdoajFjT2hmMHBleDNRM1VmOVo5dWNwSkRPWGdFWXYzaW12blkwZFlscl9RX0tMaTRES253dXhqN3JtNllhVDRGM2wxa09FYlYycEtMZ3U1Y01Sb1VfVmlCWXQwZ3dMZU9feVhmRno0QVRnVWRSWU8xdGc3LXczczY3T1pXb2dfX0tjX0RPSlp6bzItb0hKZnM0Z2VQN202VWVUNmdCcXdyNzhQZVh4azhwRURMcTRocmFCdkpKTHNHaFRGMElqVlk3Q2hQS1M2ZEhPUW82NdIB_wFBVV95cUxNdjduVEE3cGNZclVfcEprNktMMkF3czV0a1FCMWdKU3lMTXlvT3dXd3RobWNBdGJPby1fVGEtMVBxVm5SLXNNYzN1YjBZRGpTUHVtYWxuSVVmVWJhUmlfQlNrSnlBZ1RMRmlMN09mNnlEeEUzejEtR1VSN3VOZkpHNlFrRVR0ME4yVHo0Q09oQ2Jjbm0zMVllb19hTDlUamRFRnlHMjJlYUFFVTJCeTVPUWttWUFkempfUFBLaHZpWUR3bnVwTHFrVmQwNGJDNnA1OGd3a3lSR2pMbndrWkEzZjVfLTNXR3J6Nm5pR204U3hvbU5IeXZON1ZtMmFlek0?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT의 1980년대 빈티지 에스테틱에서 바이럴 나노 바나나까지: 비즈니스를 활성화한 5대 AI 트렌드와 그 방법 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "ChatGPT 1980년대 사진 트렌드 화제: 1990년대 발리우드, Y2K 패션 및 2000년대 초반을 위한 10가지 이상의 최고의 AI 프롬프트",
        "enTitle": "ChatGPT 1980s photo trend goes viral: 10+ best AI prompts for 1990s Bollywood, Y2K fashion and early 2000s",
        "date": "2026-09-10",
        "originalDate": "2026-09-09",
        "sourceName": "The Economic Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMioAJBVV95cUxPQ1Z4NmJwSU1BTjRNWmxSOWZRRHhYUmdFb2lKbUdYTmZ2NF84TXpKMUZnU19hY2xGNmhQMk9JTEc0WWF5SlZmY2xjVnhQSW54WVBBN2QteEZWRjg4VFUtdDdaTE9JT2x3cHZPNUc4dGFwNTM2YTFNS0RiZnlsRFNmTXR0Z0hHTVJIZUZGRVNOa0hocFB6dDJWeV92b29BM2V1WENIbDdnMER6ZVBmUUJRc3RLR2gybTZ1MDNXWmdoRVpxZmZFeUZlcDFRUEhFX0c3a2F3YzlERVZ2MnAweXRDdFNEZDlZSUEzbWdkMUFsUUxiY21pVzlicGhuSE8wd0E3YXQxWUl0Q2dCR2UwTHNJMGo1UXJWUzZrdHA4ZkMyM23SAaACQVVfeXFMT0NWeDZicElNQU40TVpsUjlmUUR4WFJnRW9pSm1HWE5mdjRfOE16SjFGZ1NfYWNsRjZoUDJPSUxHNFlheUpWZmNsY1Z4UElueFlQQTdkLXhGVkY4OFRVLXQ3WkxPSU9sd3B2TzVHOHRhcDUzNmExTUtEYmZ5bERTZk10dGdIR01SSGVGRkVTTmtIaHBQenQyVnlfdm9vQTNldVhDSGw3ZzBEemVQZlFCUXN0S0doMm02dTAzV1pnaEVacWZmRXlGZXAxUVBIRV9HN2thd2M5REVWdjJwMHl0Q3RTRGQ5WUlBM21nZDFBbFFMYmNtaVc5YnBobkhPMHdBN2F0MVlJdENnQkdlMExzSTBqNVFyVlM2a3RwOGZDMjNt?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "글로벌 AI 트렌드 체크! ChatGPT 1980년대 사진 트렌드 화제: 1990년대 발리우드, Y2K 패션 및 2000년대 초반을 위한 10가지 이상의 최고의 AI 프롬프트 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "바이럴 80년대 AI 사진 트렌드는 인터넷에 심각한 복고풍 변신을 선사하고 있습니다.",
        "enTitle": "The viral 80s AI photo trend is giving Internet a serious retro makeover",
        "date": "2026-09-10",
        "originalDate": "2026-09-09",
        "sourceName": "India Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNQmhjRDcyY2VVM1NxX3ZlLW41UlVHWHpRR3JWak9OeTV2djJUQkdCbVBBS0JCNFB4MDRPdTNXaUNZSmF5VlBVQTE0cDNndloxU3R1clItN2d2VElaNjg2OU9qcmVZaVg1dEtLSUdGNUxSVmFvVkVmamJiWDFadGh4VGNjSkNIVEJSZnc0MmZOMlRHTXJNQVlkVmhGZ3NxVFlpdnJjR2pXMndZbFFfUW5XS3BnbjRJWWszbEwxVlBlQ1ZPT19ocmhRdFVlV0NJRGJfWjJN0gHYAUFVX3lxTE9Od3FoeFprdG5naWRleFhtV3NwS3hOSEFrZHRERTlhcW5jS0RWei1QWWJ5dDMzbVNGeDBuRE1hdVJCYkN6S1hNSy1JM3hLVHN1eGp5NDZWai1SZkZFbUxlZ0NZTm5XTjBhdXBnVjVEM3A3ZDlNTmp1ZFZBX2RHdnhrMFVkcEFCblRIRllES1ZnSzBWM200UmxfS0xEY2haUk42UlQ1MU91R0hUVGl5Q3BiV2VFNktRZllXMG56ZTBTZUdweU1GSmN6OXVUNGhaTjFqWGE2R21odA?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! 바이럴 80년대 AI 사진 트렌드는 인터넷에 심각한 복고풍 변신을 선사하고 있습니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "“S&P500 이겨줘” 말만 했다…31% 수익 낸 클로드 투자법",
        "enTitle": "“S&P500 이겨줘” 말만 했다…31% 수익 낸 클로드 투자법",
        "date": "2026-09-10",
        "originalDate": "2026-09-09",
        "sourceName": "중앙일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBEMUVsU1NwWTFyUzVHSVJJSW5KYjRxUU1wZFgzOXpoNFpLV3ZNRmx4SnYxUEdYRU1CS2pjbHlGZlJXZndMT3NyM08wemE0Y1Uyd3dZZ3h3?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! “S&P500 이겨줘” 말만 했다…31% 수익 낸 클로드 투자법 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤트로픽, 클로드 AI 모델서 4번째 보안 사고 발생 발표",
        "enTitle": "앤트로픽, 클로드 AI 모델서 4번째 보안 사고 발생 발표",
        "date": "2026-09-10",
        "originalDate": "2026-09-09",
        "sourceName": "Investing.com 한국어",
        "sourceUrl": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9yUWtacUl6S3l0Vkc2amxJc1hFVzk3eFQxLTFUYzllbVF1c3BRRnZORGNqZ2gwa0hOUFZFQnN5dllhdjhpYWNKbmNjUXk2QUJBOEdYNzRXeXZKbGR2dUw4THVYQjNqYnVtdktLNGxLWUtIQWhKVk5r?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 클로드 AI 모델서 4번째 보안 사고 발생 발표 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[미국 특징주] 앤스로픽, 클로드 관련 네 번째 사이버보안 사고 공개",
        "enTitle": "[미국 특징주] 앤스로픽, 클로드 관련 네 번째 사이버보안 사고 공개",
        "date": "2026-09-10",
        "originalDate": "2026-09-09",
        "sourceName": "뉴스핌",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5Ha3JnSHB2MjhtN1pzQ0dOd1dncWY3cjZjX0MwQmg0R1BpOFp2MUFJVkt0SUN2Q0JWRm1FTWFKMVNJeUhlajNjOGFoWHBjWmxvNFpBeXc2MnpJWmxh?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! [미국 특징주] 앤스로픽, 클로드 관련 네 번째 사이버보안 사고 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
