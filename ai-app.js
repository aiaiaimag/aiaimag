/**
 * AI 이슈 큐레이터 - 데이터 매니저 (Brand & Influencer Edition)
 * 코다리 부장 & 뿌리 제작 🫡
 * 최신 업데이트: 2026-03-06
 */

// ─── 📰 AI 핵심 이슈 TOP 3 ── 코다리 선별, 카드뉴스 터질 가능성 기준 ───
const aiNewsData = [
    {
        "rank": 1,
        "koTitle": "Google NotebookLM, 시네마틱 AI 동영상 제작 및 새로운 생산성 도구 소개",
        "enTitle": "Google NotebookLM Introduces Cinematic AI Video Creation and New Productivity Tools",
        "date": "2026-03-06",
        "originalDate": "2026-03-05",
        "sourceName": "gHacks",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQWDRxdU5hVHBDYTNNV3lteWc5WS1yakpNY1pRNU9GSzdwZEo4UnQ3T3EwbGNGcjIwdU1tSVkxdUtvUU14OS16UVlWeWpxeVFTTnZRRHJMMVROQmRTWUEzTmgxUnFkUGVBZHlEX185aGx0czlnSHROTHlWTXhNSk5XVDlHMDBqNF9nMDF2aFlrQXZva0NUSXBYSGFlN3NNeHYyT2xLaWVRbWctNjZmSVYxMjJsZEhIbXp5WlE?oc=5",
        "isRepublished": false,
        "viralRate": "95%",
        "analysis": "글로벌 AI 트렌드 체크! Google NotebookLM, 시네마틱 AI 동영상 제작 및 새로운 생산성 도구 소개 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다.",
        "isTopPick": true
    },
    {
        "rank": 2,
        "koTitle": "OpenAI 투자자 비노드 코슬라 (Vinod Khosla) 는 인공지능 (AI) 덕분에 오늘날의 5살짜리 아이들이 일자리를 구할 필요가 없을 것이라고 예측했다.",
        "enTitle": "OpenAI investor Vinod Khosla predicts today’s 5-year-olds won’t ever need to get jobs thanks to AI",
        "date": "2026-03-06",
        "originalDate": "2026-03-04",
        "sourceName": "Yahoo Finance",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQQzhQako4dzRBeWhjTVRGdWNvLWpnZzlVbWhIdmNEM09JNmtVdUR4SWxBWk0xRkxtang0QnpVYjgtVDJWZ1Z6X1p5UkVCU3FtTGZxR1lzTHFEUzl5SFc5MFh0NnNDeVA1MGRNM3h0cjdxS0lfTnZwbXpNekRLZVJvWld1aHhRRW1Da3Fj?oc=5",
        "isRepublished": false,
        "viralRate": "96%",
        "analysis": "글로벌 AI 트렌드 체크! OpenAI 투자자 비노드 코슬라 (Vinod Khosla) 는 인공지능 (AI) 덕분에 오늘날의 5살짜리 아이들이 일자리를 구할 필요가 없을 것이라고 예측했다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    },
    {
        "rank": 3,
        "koTitle": "Z세대는 AI와 사랑/증오 관계를 맺고 있다.",
        "enTitle": "Gen Z Has a Love/Hate Relationship with AI",
        "date": "2026-03-06",
        "originalDate": "2026-03-04",
        "sourceName": "The Bulwark",
        "sourceUrl": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQSG5iYWlpQ3J1dlcweUdOMDZUMzBLM1U4c21VS0JZYUpKM1h2UzA4WnNlaGEtOXJKT1RvRjFCdkMwTWVBX0ZycXFscXlOSnJiVjUzcl9uNHRsSTRmWEtwaXVKMmY2NkxaNmZCcERXWGNaV1U0U0ZoZXp6NTJNaGdVNTRKUGhpNVpjU1FvQkxfaFE4dG9PTWpNeVk2bC1kWnJweVFMM0xn?oc=5",
        "isRepublished": false,
        "viralRate": "91%",
        "analysis": "글로벌 AI 트렌드 체크! Z세대는 AI와 사랑/증오 관계를 맺고 있다. 소식은 현재 북미권에서 화제입니다. 우리에게 어떤 기회가 될지 분석이 필요합니다."
    }
];


// ─── 💡 2030 세대 AI 트렌드 TOP 3 ── 디팀장 X 코다리 기획 주제 ───
// 단순 뉴스가 아닌, 2030의 삶을 바꿀 '기가 막힌 주제' 기반 큐레이션
const generalTrendingData = [
    {
        "rank": 1,
        "koTitle": "서강대 미래교육원, 메가커리어랩과 AI 실무인재 양성 협력",
        "enTitle": "서강대 미래교육원, 메가커리어랩과 AI 실무인재 양성 협력",
        "date": "2026-03-06",
        "originalDate": "2026-03-04",
        "sourceName": "주간한국",
        "sourceUrl": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9OSXNMdzNNV3NVRlpwT2RPM2RsVnNrSXVKbWdna1k1MDBrQk9jWGNXcEdJR3Awd2VlWHhmNnhVQ2kwOWkwNUFCYkpvUlVraGJrb2xEb0RYQ05SYXBxcWduTzdlQ3k2dnRCamhRNnJLUFjSAXRBVV95cUxQU2ZHdFFTS2N5UnpEc1BleGNsOXBSRjNrSFV3YURhYzJ6YzFjTHpBMkJZZExXVG1XcElwaHpvdW80N3NCNF9fRkpEcldEcUVTczBQU3V6M3J3eGVBaWptZXd2VVM1TnRyZlVtbHd6bU05OFFSMw?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "2030을 위한 AI 실무 팁! 서강대 미래교육원, 메가커리어랩과 AI 실무인재 양성 협력 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Productivity"
    },
    {
        "rank": 2,
        "koTitle": "사람인, 신입·인턴 홈 개편…'AI 취업 에이전트'로 진화",
        "enTitle": "사람인, 신입·인턴 홈 개편…'AI 취업 에이전트'로 진화",
        "date": "2026-03-06",
        "originalDate": "2026-03-04",
        "sourceName": "파이낸셜뉴스",
        "sourceUrl": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9xcVJaeF91alBJd0FOUkdsZkktOGluZmZDeFRKVU1Pa3Vyb1JWUG50TFpkX2Q5MjUza0xXMXMtRk1mU1NreWtQeHZIYjhPV2JqMnZjWmx1b2FYQdIBXkFVX3lxTE9QbjgtbmVLNDg3a1h2TTVfRDZGNzdTd2FSUzdnbklSek9IcC0zazlINXpSY3pRblA5S3EzLWUzb1JaVnM0SHNENzBaWVVoMEprZGR2U2pBSnNzQ2lpUUE?oc=5",
        "isRepublished": false,
        "viralRate": "94%",
        "analysis": "2030을 위한 AI 실무 팁! 사람인, 신입·인턴 홈 개편…'AI 취업 에이전트'로 진화 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Money & SideHustle"
    },
    {
        "rank": 3,
        "koTitle": "사람인, 신입·인턴 전용 서비스 개편...\"개인화 넘어 AI에이전트로 진화\"",
        "enTitle": "사람인, 신입·인턴 전용 서비스 개편...\"개인화 넘어 AI에이전트로 진화\"",
        "date": "2026-03-06",
        "originalDate": "2026-03-04",
        "sourceName": "디지털투데이",
        "sourceUrl": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9VTFMzRHlabHNNblEwZHJVaG5aTVcyQUlpcG5WMHg5SUptQ3RVVXhVR1h2RzNrOF9MdV9QYllHUV9DdkFYQjd6bF8xeS10dUFzUGYxMzctbWdmTlc5bVQwMVJEWDNhU3J2Y1pTZXpqd0tsSkk?oc=5",
        "isRepublished": false,
        "viralRate": "93%",
        "analysis": "2030을 위한 AI 실무 팁! 사람인, 신입·인턴 전용 서비스 개편...\"개인화 넘어 AI에이전트로 진화\" 관련 소식입니다. 이 기술을 어떻게 내 업무나 수익에 연결할지 고민해볼 시점입니다.",
        "category": "Career Trend"
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
