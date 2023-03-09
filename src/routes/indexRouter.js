import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const initState = {};
  res.render("Layout", initState);
});

router.get("/test", (req, res) => {
  const initState = {};
  res.render("Layout", initState);
});

export default router;
