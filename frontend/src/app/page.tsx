import { Analytics } from "@vercel/analytics/next";
import { redirect } from "next/navigation";

export default function RootPage() {
    return (
        <>
            <Analytics />
            {redirect("/assistant")}
        </>
    );
}
