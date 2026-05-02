"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
    FONT_OPTIONS,
    FONT_STORAGE_KEY,
    applyFont,
    type FontId,
} from "@/components/FontApplier";

export default function AppearancePage() {
    const [selectedFont, setSelectedFont] = useState<FontId>("system");

    useEffect(() => {
        const saved = (localStorage.getItem(FONT_STORAGE_KEY) ?? "system") as FontId;
        setSelectedFont(saved);
    }, []);

    function handleFontChange(fontId: FontId) {
        setSelectedFont(fontId);
        localStorage.setItem(FONT_STORAGE_KEY, fontId);
        applyFont(fontId);
    }

    return (
        <div className="space-y-4">
            <div className="pb-6">
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl font-medium font-serif">폰트</h2>
                </div>
                <p className="text-sm text-gray-500 mb-6 max-w-xl">
                    UI 전체에 적용할 폰트를 선택하세요.
                </p>

                <div className="space-y-3 max-w-md">
                    {FONT_OPTIONS.map((font) => {
                        const active = selectedFont === font.id;
                        return (
                            <button
                                key={font.id}
                                onClick={() => handleFontChange(font.id as FontId)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors text-left ${
                                    active
                                        ? "border-gray-900 bg-gray-50"
                                        : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                                }`}
                            >
                                <div>
                                    <p
                                        className="text-sm font-medium text-gray-900"
                                        style={{
                                            fontFamily: font.family || undefined,
                                        }}
                                    >
                                        {font.label}
                                    </p>
                                    <p
                                        className="text-xs text-gray-500 mt-0.5"
                                        style={{
                                            fontFamily: font.family || undefined,
                                        }}
                                    >
                                        가나다라마바사 / AaBbCcDd / 1234567890
                                    </p>
                                </div>
                                {active && (
                                    <Check className="h-4 w-4 text-gray-900 shrink-0 ml-3" />
                                )}
                            </button>
                        );
                    })}
                </div>

                <p className="mt-6 text-xs text-gray-400 max-w-md">
                    * Pretendard는 한국어 가독성에 최적화된 폰트입니다.
                    Noto Sans KR 선택 시 Google Fonts에서 자동으로 로드됩니다.
                </p>
            </div>
        </div>
    );
}
