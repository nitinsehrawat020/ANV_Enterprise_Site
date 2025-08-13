import { Router } from "express";
import intelligenceEngine from "../utils/AIContent.js";

const router = Router();

// GET /api/intel/status – current scheduler and engine status
router.get("/status", (req, res) => {
  try {
    const status = intelligenceEngine.getStatus();
    res.json({ ok: true, status });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// POST /api/intel/run – manually trigger the pipeline now
router.post("/run", async (req, res) => {
  try {
    const result = await intelligenceEngine.runNow();
    res.json({ ok: true, result });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

export default router;
