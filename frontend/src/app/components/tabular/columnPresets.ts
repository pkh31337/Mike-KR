import type { ColumnFormat } from "../shared/types";

export interface ColumnPreset {
    name: string;
    matches: RegExp;
    prompt: string;
    format: ColumnFormat;
    tags?: string[];
}

export const PROMPT_PRESETS: ColumnPreset[] = [
    // ─── 한국법 프리셋 ─────────────────────────────────────────────────────────
    {
        name: "당사자 (갑/을)",
        matches: /당사자|갑[^\w]|을[^\w]|계약당사자/,
        format: "bulleted_list",
        prompt: '이 계약서의 모든 당사자를 파악하세요. 갑(甲), 을(乙), 병(丙) 등 각 당사자별로 전체 명칭(상호 또는 성명), 법인 유형(주식회사 등), 계약상 역할을 기재하세요. 각 당사자를 별도 항목으로 표시하세요. 추가 설명 없이 목록만 작성하세요.',
    },
    {
        name: "준거법",
        matches: /준거법|적용법률|적용\s*법/,
        format: "text",
        prompt: '이 계약서의 준거법을 명시하세요. "대한민국 법률", "뉴욕주 법" 등 약식 명칭으로 표시하세요. 다른 설명 없이 준거법만 기재하세요.',
    },
    {
        name: "관할법원",
        matches: /관할|관할법원|분쟁해결/,
        format: "text",
        prompt: '이 계약서의 관할법원 또는 분쟁해결 방식을 명시하세요. 예: "서울중앙지방법원 전속관할" 또는 "대한상사중재원 중재". 합의된 관할 또는 분쟁해결 기관만 간결하게 기재하세요.',
    },
    {
        name: "계약기간",
        matches: /계약기간|계약\s*기간|유효기간/,
        format: "text",
        prompt: '이 계약의 유효 기간을 명시하세요. 시작일과 종료일 또는 기간을 "YYYY. M. D.부터 YYYY. M. D.까지" 또는 "계약 체결일로부터 2년" 형식으로 기재하세요.',
    },
    {
        name: "계약금액",
        matches: /계약금액|대금|매매대금|용역대금|공사대금/,
        format: "monetary_amount",
        prompt: '이 계약의 총 계약금액(대금)을 통화 단위와 함께 명시하세요. 예: "KRW 100,000,000" 또는 "금 일억원정(₩100,000,000)". 금액만 기재하고 다른 설명은 포함하지 마세요.',
    },
    {
        name: "손해배상 예정액",
        matches: /손해배상|위약금|배상예정/,
        format: "text",
        prompt: '이 계약서의 손해배상 예정 또는 위약금 조항을 요약하세요. 위약금 금액 또는 산정 방식, 발생 사유, 해당 당사자를 간결하게 기재하세요.',
    },
    {
        name: "비밀유지 의무",
        matches: /비밀유지|기밀유지|비밀\s*보호/,
        format: "text",
        prompt: '비밀유지 의무 조항을 요약하세요. 비밀정보의 범위, 비밀유지 의무 당사자, 허용 공개 대상, 의무 존속 기간(계약 종료 후 포함)을 포함하세요.',
    },
    {
        name: "계약 해제·해지",
        matches: /해제|해지|계약\s*종료/,
        format: "text",
        prompt: '계약 해제 및 해지 조항을 요약하세요. 해제/해지 사유, 통보 기간, 해제/해지 후 효과(원상회복 의무 포함), 손해배상 청구권을 포함하세요.',
    },
    // ─── 영문 공통 프리셋 ──────────────────────────────────────────────────────
    {
        name: "Parties",
        matches: /\bpart(y|ies)\b/i,
        format: "bulleted_list",
        prompt: 'List all parties to this agreement. For each party, state their full legal name, entity type, and defined role, e.g.:\n• ABC Corp, a Delaware corporation ("Company")\n• John Smith ("Shareholder")\nOne party per bullet. No additional commentary.',
    },
    {
        name: "Governing Law",
        matches: /\bgoverning law\b|\bjurisdiction\b/i,
        format: "text",
        prompt: 'State only the governing law of this agreement using the short-form jurisdiction name, e.g. "New York Law", "English Law", "Indian Law", "PRC Law". No other text.',
    },
    {
        name: "Effective Date",
        matches: /\beffective date\b/i,
        format: "date",
        prompt: 'State only the effective date of this agreement in DD Mon YYYY format, e.g. "2 Jan 2026". If not explicitly stated, write "Not specified".',
    },
    {
        name: "Term",
        matches: /\bterm\b|\bduration\b/i,
        format: "text",
        prompt: 'State only the duration or term of this agreement in a concise form, e.g. "3 years", "24 months", "perpetual". No other text.',
    },
    {
        name: "Termination",
        matches: /\bterminat(e|ion|ing)\b/i,
        format: "text",
        prompt: "Extract the termination provisions. State who may terminate, the trigger events, required notice period, any cure period, and the key consequences of termination. Be concise.",
    },
    {
        name: "Change of Control",
        matches: /\bchange of control\b/i,
        format: "text",
        prompt: "Identify any change of control provisions. Summarize the trigger events, consequences, consent requirements, and any related termination or acceleration rights. Be concise.",
    },
    {
        name: "Confidentiality",
        matches: /\bconfidential(ity)?\b|\bnon-?disclosure\b/i,
        format: "text",
        prompt: "Summarize the confidentiality obligations: scope of confidential information, permitted disclosures, use restrictions, duration, and key carve-outs or exceptions.",
    },
    {
        name: "Assignment",
        matches: /\bassign(ment|ability)?\b/i,
        format: "yes_no",
        prompt: "Is assignment of this agreement permitted without the other party's consent?",
    },
    {
        name: "Payment & Fees",
        matches: /\bpayment\b|\bfees?\b/i,
        format: "text",
        prompt: 'State the key payment obligations concisely: amount, timing, and currency, e.g. "USD 10,000 payable within 30 days of invoice". Note any late payment consequences.',
    },
    {
        name: "Amendment",
        matches: /\bamendment\b|\bvariation\b/i,
        format: "text",
        prompt: "Summarize the amendment provisions: how amendments may be made, who must consent, and any formality requirements such as writing or signature.",
    },
    {
        name: "Indemnity",
        matches: /\bindemni(ty|ties|fication)\b/i,
        format: "text",
        prompt: "Summarize the indemnity provisions: who indemnifies whom, the scope of indemnified losses, any liability caps or exclusions, and key claims procedures.",
    },
    {
        name: "Warranties",
        matches: /\bwarrant(y|ies|ing)\b|\brepresentations?\b/i,
        format: "text",
        prompt: "Identify and describe key representations and warranties provided by any party, including the scope of such assurances and any specific time periods or conditions applicable to them. In particular highlight any non-standard warranties.",
    },
    {
        name: "Force Majeure",
        matches: /\bforce majeure\b/i,
        format: "yes_no",
        prompt: "Does this agreement contain a force majeure clause?",
    },
];

export function getPresetConfig(
    title: string,
): Pick<ColumnPreset, "prompt" | "format" | "tags"> | null {
    const trimmed = title.trim();
    if (!trimmed) return null;
    const preset = PROMPT_PRESETS.find(({ matches }) => matches.test(trimmed));
    if (!preset) return null;
    return { prompt: preset.prompt, format: preset.format, tags: preset.tags };
}

export function getPresetPrompt(title: string): string | null {
    return getPresetConfig(title)?.prompt ?? null;
}
