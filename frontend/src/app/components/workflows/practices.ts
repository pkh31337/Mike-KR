export const PRACTICE_OPTIONS = [
    "기업·M&A",
    "금융·자본시장",
    "부동산·건설",
    "노동·고용",
    "민사·상사소송",
    "행정·공정거래",
    "형사",
    "지식재산권",
    "국제중재",
    "개인정보·IT",
    "의료·제약",
    "환경·ESG",
    "스타트업·VC",
    "조세",
    "General Transactions",
    "Corporate",
    "Finance",
    "Litigation",
    "Real Estate",
    "기타",
] as const;

export type Practice = (typeof PRACTICE_OPTIONS)[number];
