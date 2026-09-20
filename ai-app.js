/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-09-21
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "1백만 명 이상의 젊은이들이 일자리를 잃었고 AI는 수백만 개의 일자리를 없애려고 합니다. 어떻게 해야 할까요?",
        "enTitle": "More than 1m young people are out of work, and AI is about to wipe out millions more jobs. What should we do?",
        "date": "2026-09-21",
        "originalDate": "2026-09-20",
        "sourceName": "The Independent",
        "sourceUrl": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPc3YtcEI2WHRPUjZoV2twWmw5X0FWNmlYazFadURwTzRHN2RaakhEREFQaDFtRk9HZlJxdkhWRlBjQWxsLUpQWWNsYWJSd3d2THEwQm9LX05XTEgzMkRiTnljVGc1aEhBUngtZHBVUGxBd3JFVW9FSThzUGZScTNnZEd4UnlVY0tfSUZwbjIxVlU?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 1백만 명 이상의 젊은이들이 일자리를 잃었고 AI는 수백만 개의 일자리를 없애려고 합니다. 어떻게 해야 할까요? 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "AI 유창성이 새로운 커리어 통화인 이유에 대한 Biocon의 CHRO",
        "enTitle": "Biocon's CHRO On Why AI Fluency Is The New Career Currency",
        "date": "2026-09-21",
        "originalDate": "2026-09-20",
        "sourceName": "BW People",
        "sourceUrl": "https://news.google.com/rss/articles/CBMingFBVV95cUxNZVZsYWx3dG5mWHlHQUJWbzZTNGUyRnpSLV9nYnhiLXFUMDY0Vk1vTXFKNTJ6YVlMVGczcUxzR1JCTGJiclZRSmxqSHBMU3hueDIwTlJpb1ZtcDlKM0dZcDh5X0U2ektLNkhfdndQckNHbndJU0tNLWJaMldqTjRJU0IxMThBMU9VeTNuU01FLXhfN1IzQjhsYUk4SE1OZw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "글로벌 AI 트렌드 체크! AI 유창성이 새로운 커리어 통화인 이유에 대한 Biocon의 CHRO 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "싱가포르 장관은 고용주가 AI와 일자리에 대해 개방적이어야 한다고 촉구합니다.",
        "enTitle": "Singapore Minister Urges Employers to Be Open About AI and Jobs",
        "date": "2026-09-21",
        "originalDate": "2026-09-20",
        "sourceName": "Migrant Times",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQTUVocTZpY0hmbnl5b0JrTVk3djIwdEZ6MGhjLVEydDhZWTY2U0tBQmFkTVhxdGxCbWJjdm9CSWx6OVZoWHJfdGUwTklZdjFHRVR0d2RMbFYtRTU3cmV4a0VYS1ZzYlhfOV9PRFRXcXQ2TTJaVGtjVmdGVjE4clNUTTI3MjRlV0ZCd2JCVGs4OXlPd1g4bmVtSzF6UlhyMVkzb2EyamlDenA5SHhQWFh5VzhOdw?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "글로벌 AI 트렌드 체크! 싱가포르 장관은 고용주가 AI와 일자리에 대해 개방적이어야 한다고 촉구합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "에이직랜드, TSMC OIP서 AI 설계 플랫폼 공개",
        "enTitle": "에이직랜드, TSMC OIP서 AI 설계 플랫폼 공개",
        "date": "2026-09-21",
        "originalDate": "2026-09-20",
        "sourceName": "핀포인트뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1KZU8wbm9xelJRaDRzckxLekpzU2F2em8ycjY1bjZQR0tuWG9xem9qU1E0UUdldmJsSUJueDhuN2dGYUo5dUJVcE9ZV1ZuTUFxdmdVV3E5OEVXaXJDLWd5Z0RtZU5la1JiaGZrY0Z5b0VBclnSAXdBVV95cUxPdm55SDdlOVZHVTFCbkNac0tiLU9xUlRQd1VHZGlvdS1pbUswNHZNVV9PX05ZRGtZZHRkRmpXVy1KN0NNVnFLMGFsU3dmb242NlZXeldFNFI2SEh2TzZGOUJpX2V0YXZ3U3FvbDl1RzdEekx1amM2cw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 에이직랜드, TSMC OIP서 AI 설계 플랫폼 공개 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "보이스루, AI·전문가 결합 더빙 서비스 ‘폴리타’ 출시",
        "enTitle": "보이스루, AI·전문가 결합 더빙 서비스 ‘폴리타’ 출시",
        "date": "2026-09-21",
        "originalDate": "2026-09-20",
        "sourceName": "FA저널",
        "sourceUrl": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBjMnpJN0NJZ3VKTFhHS2lKZFU0NGVqcGpoWS1xemxUM283ZG9pNURjRnRRUzNRX21FQ2MzZ2JLdTNTS1J1ekFFVURqM0pYZWdCcVVvZnNiNXZSUkF1UDNURG1pQlBpZW44Yzhv?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 보이스루, AI·전문가 결합 더빙 서비스 ‘폴리타’ 출시 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "[중국의 새로운 AI 부업: 사람들이 얼굴 라이선스로 수익을 얻다] ActID와 New Claw 같은 플랫폼은 제작자들이 AI 생성 광고와 마이크로드라마에 얼굴을 라이선스할 수 있는 마켓플레이스를",
        "enTitle": "[중국의 새로운 AI 부업: 사람들이 얼굴 라이선스로 수익을 얻다] ActID와 New Claw 같은 플랫폼은 제작자들이 AI 생성 광고와 마이크로드라마에 얼굴을 라이선스할 수 있는 마켓플레이스를",
        "date": "2026-09-21",
        "originalDate": "2026-09-20",
        "sourceName": "AI넷",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiQEFVX3lxTE9JRGpHSEUzQjRFM2o2MVVVTnJ5YUtVbUdnTWJQMm52UUJPSmlsZ29YLVdHb29WbWhIZFlaNERXeDc?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! [중국의 새로운 AI 부업: 사람들이 얼굴 라이선스로 수익을 얻다] ActID와 New Claw 같은 플랫폼은 제작자들이 AI 생성 광고와 마이크로드라마에 얼굴을 라이선스할 수 있는 마켓플레이스를 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
