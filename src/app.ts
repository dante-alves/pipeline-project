import express from "express";

export const app = express();

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello/:name", (req, res) => {
  res.json({ message: `Olá, ${req.params.name}!` });
});
