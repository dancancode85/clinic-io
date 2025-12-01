import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "API is running" , timestamp: new Date().toISOString() });
});

app.listen(port, () => {
    console.log(`Up and running on port ${port} 🥳 - Health check 🏥 http://localhost:${port}/health`);
});