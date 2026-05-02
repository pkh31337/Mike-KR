import type { Metadata } from "next";
import { Inter, EB_Garamond, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { FontApplier } from "@/components/FontApplier";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "latin-ext"],
});

const notoSansKR = Noto_Sans_KR({
    variable: "--font-noto-sans-kr",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const ebGaramond = EB_Garamond({
    variable: "--font-eb-garamond",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "미케 - AI 법률 플랫폼",
    description: "AI 기반 법률 문서 분석 및 계약서 검토 플랫폼.",
    icons: {
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico" },
        ],
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
                />
            </head>
            <body
                className={`${inter.variable} ${ebGaramond.variable} ${notoSansKR.variable} font-sans antialiased`}
            >
                <FontApplier />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
