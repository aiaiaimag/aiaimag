/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-20
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "제프 베조스 (Jeff Bezos) 는 AI 인수로 '절대 대체되지 않을' 일자리를 공유합니다.",
        "enTitle": "Jeff Bezos shares jobs that will 'never' be replaced by AI takeover",
        "date": "2026-03-20",
        "originalDate": "2026-03-19",
        "sourceName": "LADbible",
        "sourceUrl": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNUczVjNFRGVqU0NIZkVqSTI3Tl9neWZMYUtTS2xxazhmTWRWR0JteXRGS1pXQ2hiWFNEczRMS0I1N0loRDBUWDVPWi1vVzRralNpSXpEX3JOLTdqY3podVdMMVE1S19aenhlWnBvc0ZSbU5uelIxMkx5ZnpNVXFoZlRrMWdzdTRsbnhYXy1oS285Q3g0Qm8xUjdHaFo?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! 제프 베조스 (Jeff Bezos) 는 AI 인수로 '절대 대체되지 않을' 일자리를 공유합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "Uber 공동 창업자는 슈퍼 AGI가 사진 속으로 들어오기 전까지는 인간 근로자가 매우 ‘소중' 할 것이라고 말합니다. ‘그건 내 하얀 알약이야’",
        "enTitle": "Uber cofounder says human workers will be extremely ‘valuable’ until super AGI steps into the picture: ‘That's my white pill’",
        "date": "2026-03-20",
        "originalDate": "2026-03-19",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQQ3RTaW5ibjlnSUV1YU1scG42TlRFeGNvcW9tVTlYQzJmc1dTV05uOGZRTlotU1BZaG1tNEZmdkVOQzJJeWFTR2YyelJIYkIzYklQMTNnVWJ0T1lnLUM1WDh1dTdwWndiYXhLNDdsMVRNSHM5MFlXNXRtX25YRzFFQkpGTTd6VzdLQ0Z6WEVpbDhSb3lXYTNRcXh6OHdSSmlnUmJHQWI1QjlZNW5ta3dmT3V4Z1FDRFNkeERkbjlJWVBXOU9jQ1Etc2xOMGk?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Uber 공동 창업자는 슈퍼 AGI가 사진 속으로 들어오기 전까지는 인간 근로자가 매우 ‘소중' 할 것이라고 말합니다. ‘그건 내 하얀 알약이야’ 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "'배관공은 변호사보다 정기적으로 더 많은 수입을 올린다': 다니엘 프리스틀리 (Daniel Priestley) 는 AI가 아메리칸 드림을 뒤집을 것이라고 예측합니다.",
        "enTitle": "'Plumbers regularly earn more than lawyers': Daniel Priestley predicts AI will flip American Dream",
        "date": "2026-03-20",
        "originalDate": "2026-03-19",
        "sourceName": "Fortune",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPeGRPRGtpdzJ4QjlubldXNVQ4SUJmSGFrdDFGcXZ2WGtzTTRBYW9PeU9iS0RSbXJZNVZfa29BSWs3Um90X2dIczY3YnROV05reW5Xako5MHV4WGpaSU1XNEh1SVJIaTRIeU9vWkxYaVVGREo0SjdfV2l1cE5YbURueTRLc2pqWHlFY2dZUjFXS3hpMWxSX2J1WmxWQWlaazd5OF9jQ1pnVjdCNjZUOS04aTllR2tFZ1p6dUs0?oc=5",
        "isRepublished": false,
        "viralRate": "92%",
        "analysis": "글로벌 AI 트렌드 체크! '배관공은 변호사보다 정기적으로 더 많은 수입을 올린다': 다니엘 프리스틀리 (Daniel Priestley) 는 AI가 아메리칸 드림을 뒤집을 것이라고 예측합니다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "클로드 코드로 ‘해외 송금 비교 서비스’ 만들어봤습니다",
        "enTitle": "클로드 코드로 ‘해외 송금 비교 서비스’ 만들어봤습니다",
        "date": "2026-03-20",
        "originalDate": "2026-03-19",
        "sourceName": "요즘IT",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9CN1hUb3BZa3g2Umdod1A2eXhUVmszWU4wTmUyaE9kbDRpQkN5eUtZdEt1NzF6X19HNHhmb01JMjVmeTNCNGM2X3RiTVNzTTVuNWtYbmJnY2hzZw?oc=5",
        "isRepublished": false,
        "viralRate": "99%",
        "analysis": "2030을 위한 AI 실무 팁! 클로드 코드로 ‘해외 송금 비교 서비스’ 만들어봤습니다 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Hot Issue"
    },
    {
        "rank": 2,
        "koTitle": "알파벳, 애플 맥 버전 제미나이 비공개 테스트 시작…시간외 '강보합'",
        "enTitle": "알파벳, 애플 맥 버전 제미나이 비공개 테스트 시작…시간외 '강보합'",
        "date": "2026-03-20",
        "originalDate": "2026-03-19",
        "sourceName": "마켓인",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBleTVOQkxyd1NjbGhoTjZPYzd1RHFqTVNrSDE3cWp1d1ZKZXUybFRGVjlxQThGWTBWTEluWVlwckUzMEp3V1F4a1ZpU090M0NzR3RjanEzaVYxR1RLZDZFc0VDaG5tajU5SzE4Z3lOMW1PMjg?oc=5",
        "isRepublished": false,
        "viralRate": "98%",
        "analysis": "2030을 위한 AI 실무 팁! 알파벳, 애플 맥 버전 제미나이 비공개 테스트 시작…시간외 '강보합' 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Life & Money"
    },
    {
        "rank": 3,
        "koTitle": "['흑'과'백'②] 네이버 vs 카카오…'에이전틱 AI' 수익화",
        "enTitle": "['흑'과'백'②] 네이버 vs 카카오…'에이전틱 AI' 수익화",
        "date": "2026-03-20",
        "originalDate": "2026-03-19",
        "sourceName": "신아일보",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5CRjFCX2ZMWjFCeHZBOG1HczQyODdubk9ZOTc4SjBXNV9Gak40N3ZVdGNGejdCcTZhWi1YRFNlZEY1WXdZTGs5N3BhaklVSGpNdlRkeWZBYkJzc0NQblBqWEU2OWNjS1NuRURvV3YzR24?oc=5",
        "isRepublished": false,
        "viralRate": "97%",
        "analysis": "2030을 위한 AI 실무 팁! ['흑'과'백'②] 네이버 vs 카카오…'에이전틱 AI' 수익화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
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
