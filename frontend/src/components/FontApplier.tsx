"use client";

import { useEffect } from "react";

export const FONT_OPTIONS = [
    { id: "system", label: "시스템 기본값 (Inter)", family: "" },
    {
        id: "pretendard",
        label: "Pretendard",
        family: "'Pretendard Variable', Pretendard, sans-serif",
    },
    {
        id: "noto-sans-kr",
        label: "Noto Sans KR",
        family: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif",
    },
] as const;

export type FontId = (typeof FONT_OPTIONS)[number]["id"];

export const FONT_STORAGE_KEY = "mike_font";

export function applyFont(fontId: string) {
    const opt = FONT_OPTIONS.find((f) => f.id === fontId);
    document.body.style.fontFamily = opt?.family ?? "";
}

export function FontApplier() {
    useEffect(() => {
        const saved = localStorage.getItem(FONT_STORAGE_KEY) ?? "system";
        applyFont(saved);
    }, []);
    return null;
}
