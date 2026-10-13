/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-10-13
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "2027년 일자리를 바꿀 수 있는 10가지 미래 업무 트렌드",
        "enTitle": "10 Future Of Work Trends That Could Change Your Job In 2027",
        "date": "2026-10-13",
        "originalDate": "2026-10-12",
        "sourceName": "Forbes",
        "sourceUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxONkhEaTBoTy1BbWFna2xTS2J4SkdvVE5KQ2dTdVA3UEJuN2FubDUycTlEUFVnTWRNaEZVR1FpSzF1VEttcWN5QXEzbW9vWlo5cWZuUnp2eXdJbklpWFpKMGlDZDFtaWZ0YnJNWU1hQjlVVHRfRWlqMFpWdXp4MnBpb2htXzVocmN3VC1NcFRDODVGZlNQYzlBUmRwSXJESnJ5dVdaTjlDWnNzVkRQZm15VDVn?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "글로벌 AI 트렌드 체크! 2027년 일자리를 바꿀 수 있는 10가지 미래 업무 트렌드 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "HubSpot, 660개 직무 삭감 계획, 직접 AI 교체 거부",
        "enTitle": "HubSpot Plans 660 Job Cuts, Denies Direct AI Replacement",
        "date": "2026-10-13",
        "originalDate": "2026-10-12",
        "sourceName": "Quasa.io",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOeGNoaGxCNkp3OXp4ZHBwY2dEYWxJaWpGYi1oOEVseUYtUVlvam9iR0xPaWk3dkJXcmdRWlVlYzlrZUdvc2NmUEJQRzRQTVZ1dnV6VWltWEk5UlFTWWJJb3VmS0ZSVnNTMG1oUWFHa3FWdHJRM3hlQTZ6RFAzWWhvQ3FXcV81ZzJ4OWs4ZWxGQkw0UQ?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! HubSpot, 660개 직무 삭감 계획, 직접 AI 교체 거부 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "인공지능은 코딩을 자동화하고 있습니다. 그렇다면 소프트웨어 개발자 채용 공고가 급증하는 이유는 무엇일까요?",
        "enTitle": "AI is automating coding. So why are software developer job postings on the rise?",
        "date": "2026-10-13",
        "originalDate": "2026-10-11",
        "sourceName": "CNBC",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE80a2hhYm5Pd1BrUWdvV1lNQ0pvUGVhSDRicGVQWG1IU3J1MzlBN012VDA4QjlITVdwcUFXcUl5anVacHpXZzgxaDI2a19BaHJvbnVLaU1EdXNGX3VwSWc2RDd2amhCdm9VblR3cTVodTbSAXZBVV95cUxPc1pqTVJmenh6aFNEUEdaMU0wMTN3eWRLNTBrR29LWHhQdzUyWXk3OEpvX1dEM2NzMXJSZWd4QzNDOVRhRElEaWg5YkN5ZjJ4cHYwd1NyVW5SS3owYUFJMDNvX01PbjNuVDJwQ3NDZlk0SnBITTVR?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! 인공지능은 코딩을 자동화하고 있습니다. 그렇다면 소프트웨어 개발자 채용 공고가 급증하는 이유는 무엇일까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "[AI프리즘] AI가 업무까지 척척…챗GPT·클로드, 협업툴 넘본다",
        "enTitle": "[AI프리즘] AI가 업무까지 척척…챗GPT·클로드, 협업툴 넘본다",
        "date": "2026-10-13",
        "originalDate": "2026-10-12",
        "sourceName": "연합뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFA4SmIxRnk1ZHhfM0ZYeElocGxJY2dUTlN0cU95WTJDUHdUa2NkV3o3OHp6ZjJBRUxTVUkxemsyWU1OU3JyZEw5U1BKMWpFNUUtSlVqY2Fab2FRYkVYcmp4Z9IBYEFVX3lxTFA4SmIxRnk1ZHhfM0ZYeElocGxJY2dUTlN0cU95WTJDUHdUa2NkV3o3OHp6ZjJBRUxTVUkxemsyWU1OU3JyZEw5U1BKMWpFNUUtSlVqY2Fab2FRYkVYcmp4Zw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! [AI프리즘] AI가 업무까지 척척…챗GPT·클로드, 협업툴 넘본다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "“AI가 읽을 책, 토큰으로 검색”…멘탯, 도서 데이터 거래 서비스 출시",
        "enTitle": "“AI가 읽을 책, 토큰으로 검색”…멘탯, 도서 데이터 거래 서비스 출시",
        "date": "2026-10-13",
        "originalDate": "2026-10-12",
        "sourceName": "매일일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9ZSFBEblNxR0Q2T3lyV3lUeWlpdV96Q0FkVEhBYklETzJYTG55OVFOd1JGci1FeE5mVS1tSnpJelBqb3RHSzkwc0RLdjdmTEU4ZGt6aTZ1ZVJvY2h2Qm9PUmdIRVo?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! “AI가 읽을 책, 토큰으로 검색”…멘탯, 도서 데이터 거래 서비스 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "KT, 구글 AI·생활 혜택 더한 구독 상품 출시",
        "enTitle": "KT, 구글 AI·생활 혜택 더한 구독 상품 출시",
        "date": "2026-10-13",
        "originalDate": "2026-10-13",
        "sourceName": "아시아경제",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5tNEg4NjZHbmhmbHd1dzhrcmtzTTZHSEJSZE5aa1VkZ2h6TndoMVBTOFNQM1ZpdGpVYjBpZFZuM3NzSW11a3llQWtaU0k5TkhEcUtiNzR1dXBNWmRnM3hkdw?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! KT, 구글 AI·생활 혜택 더한 구독 상품 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
