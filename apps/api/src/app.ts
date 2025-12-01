import express, { Express } from "express";

const app: Express = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "API is running" , timestamp: new Date().toISOString() });
});

export default app;