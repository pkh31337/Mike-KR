import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { searchKoreanStatutes } from "../lib/chatTools";

export const statutesRouter = Router();

// GET /statutes/search?q=근로기준법&law_name=근로기준법&article=제23조
statutesRouter.get("/search", requireAuth, async (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q : undefined;
    const lawName = typeof req.query.law_name === "string" ? req.query.law_name : undefined;
    const article = typeof req.query.article === "string" ? req.query.article : undefined;

    if (!query && !lawName) {
        return void res.status(400).json({ detail: "q 또는 law_name 파라미터가 필요합니다." });
    }

    try {
        const result = await searchKoreanStatutes({ query, lawName, article });
        res.json({ result });
    } catch (err) {
        res.status(500).json({ detail: String(err) });
    }
});
