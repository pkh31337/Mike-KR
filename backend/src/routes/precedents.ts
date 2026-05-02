import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { searchKoreanPrecedents } from "../lib/chatTools";

export const precedentsRouter = Router();

// GET /precedents/search?q=해고무효&court=대법원&case_number=2023다12345
precedentsRouter.get("/search", requireAuth, async (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q : undefined;
    const court = typeof req.query.court === "string" ? req.query.court : undefined;
    const caseNumber = typeof req.query.case_number === "string" ? req.query.case_number : undefined;

    if (!query && !caseNumber) {
        return void res.status(400).json({ detail: "q 또는 case_number 파라미터가 필요합니다." });
    }

    try {
        const result = await searchKoreanPrecedents({ query, court, caseNumber });
        res.json({ result });
    } catch (err) {
        res.status(500).json({ detail: String(err) });
    }
});
