/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-04-08
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Anthropic의 연구에 따르면 인공 지능은 이미 많은 직업에서 큰 부분을 차지할 수 있습니다. 최고의 경제학자는 그것이 어떻게 미래의 직업을 형성 할 수 있는지에 대해 이야기합니다.",
        "enTitle": "Anthropic's research shows that AI can already do a huge portion of many jobs; its top economist talks about how that could shape the future of work",
        "date": "2026-04-08",
        "originalDate": "2026-04-07",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNaWU5WENmZExYUjBZZnFSQUtwZEhTZ21WSHhfWWM0R1VHbTRoa3k0eV9VZlExM2N3M0hpZm1temQ0Z2Fwc2ZLUkdyT2Y0MUpsQlU4N3M2cVQ5Z2NkM0lkZXJEdmNhekZWdVFsQVV0cXh3ZWFUR2hPX2M0MDFXeG1YT0xKcW1zMFVidGxGeXNnaHAxdWRaY2NuVWEwLVc4eWhiMVMzVC1uMA?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! Anthropic의 연구에 따르면 인공 지능은 이미 많은 직업에서 큰 부분을 차지할 수 있습니다. 최고의 경제학자는 그것이 어떻게 미래의 직업을 형성 할 수 있는지에 대해 이야기합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 고용 시장 영향 2026: AI가 일자리를 죽일 수는 없지만 고용을 늦출 수 있다고 새로운 보고서가 말합니다.",
        "enTitle": "AI job market impact 2026: AI may not kill jobs, but it could slow hiring, says new report",
        "date": "2026-04-08",
        "originalDate": "2026-04-07",
        "sourceName": "dqindia.com",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNVHprdVVETG04M0VvYWM2UGVOaUtPU3p1dkdkc2ppWVB3MUY3b1ZPMVZiVDRQNnVvaUZrSDdkSXQtUXdhNGZPREVRUmE3M0x0U0NCMlBDU0VsRmxUUWRWaF93REpHZmRSdmZHaE90NGlHcUdYVEFnWlZUd1FfRWZKNGR5T1NTOVg3QUU1SkF4M2tnSHI1cE9UYllNeGdkc3pmWnlwM0xXNTdHZHViaTkyeWtkektuTzNJRjVDSmtSOUJtWm_SAcMBQVVfeXFMTVR6a3VVRExtODNFb2FjNlBlTmlLT1N6dXZHZHNqaVlQdzFGN29WTzFWYlQ0UDZ1b2lGa0g3ZEl0LVF3YTRmT0RFUVJhNzNMdFNDQjJQQ1NFbEZsVFFkVmhfd0RKR2ZkUnZmR2hPdDRpR3FHWFRBZ1pWVHdRX0VmSjRkeU9TUzlYN0FFNUpBeDNrZ0hyNXBPVGJZTXhnZHN6Zlp5cDNMVzU3R2R1Ymk5MnlrZHpLbk8zSUY1Q0prUjlCbVpv?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 고용 시장 영향 2026: AI가 일자리를 죽일 수는 없지만 고용을 늦출 수 있다고 새로운 보고서가 말합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "AI 직무 교체에 대한 두려움: AI가 새로운 업무를 창출하는 이유",
        "enTitle": "AI Job Replacement Fear: Why AI Creates New Work",
        "date": "2026-04-08",
        "originalDate": "2026-04-07",
        "sourceName": "Pakistan Today",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNNm5uWlRUOU04N1h2X3hqNGlQMFlXUEQ2bjBKWVpGcVFucUNyeGFpcEd4YXgxOHJKeVA3TzMwM1BGQk5KNWdMM0EydG9hdW9mZ2oyMlp5NDhSMWZDc2FWYjZUM1YxMFl2NWpkSTlEazhvcEpHSnpORnA4M2VvS1Z1T0JaVXFtWGI1THRVbkxIUjRuQQ?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 직무 교체에 대한 두려움: AI가 새로운 업무를 창출하는 이유 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "김연아의 일상이 제미나이를 만나면? 웃음 터지는 스마트 갓생 기록, 캠페인 숏폼 시리즈 공개!",
        "enTitle": "김연아의 일상이 제미나이를 만나면? 웃음 터지는 스마트 갓생 기록, 캠페인 숏폼 시리즈 공개!",
        "date": "2026-04-08",
        "originalDate": "2026-04-07",
        "sourceName": "blog.google",
        "sourceUrl": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPZ1RCNV84dUdvMWNvbnJ3UW9sdTh4MnlkSFZfZ1BXNGFpR2pIT2hCWTlzVUp5MUZwY1U3MFBfRGtXb2hNbGFXN0FicGJDa1hIeFVLdDdUeFlIUy1nSlVqeHltTDgtQ2daQmkwd2dKbTF0cE5QWm4zOHo1V213R21xY1JmUTQ3Vjh5U2tSbk93?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 김연아의 일상이 제미나이를 만나면? 웃음 터지는 스마트 갓생 기록, 캠페인 숏폼 시리즈 공개! 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "앤트로픽, 역대 최강 '클로드 미소스' 공개...\"일반 출시는 없어\"",
        "enTitle": "앤트로픽, 역대 최강 '클로드 미소스' 공개...\"일반 출시는 없어\"",
        "date": "2026-04-08",
        "originalDate": "2026-04-07",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTE52bUtBS0tHYVNZTEI3VThVMGc5LVlJNVV3THZwQW5EOHM2NmY1M245MUx4aU96VDR0UjdiamlBRThyc3JsSGNtMVJua0RKOXZoWU8zd3dCRmRRNUtCakpEaExScGFmcEZUZWc?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 앤트로픽, 역대 최강 '클로드 미소스' 공개...\"일반 출시는 없어\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "구글, 스마트폰에서 다운받아 쓰는 음성 인식 AI 앱 출시",
        "enTitle": "구글, 스마트폰에서 다운받아 쓰는 음성 인식 AI 앱 출시",
        "date": "2026-04-08",
        "originalDate": "2026-04-07",
        "sourceName": "AI타임스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBUX1pkZUZTcUdROUcta2UxQ2ZKSFVvSE5QdDRKTmZPbVVpbUsydnBBQXRIMWMtdVZNWmhVUENFSjIxTGlaanJDVlNNckFxOGgyMEkzNURRSkxReEJlYW9EVFZFakFyY0xVX3c?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 구글, 스마트폰에서 다운받아 쓰는 음성 인식 AI 앱 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
