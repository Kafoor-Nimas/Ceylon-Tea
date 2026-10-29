import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "ok", message: "Ceylon tea API is running" });
});

export default router;
