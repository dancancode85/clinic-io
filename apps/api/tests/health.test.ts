import request from "supertest";
import app from "../src/app";

describe("Health Endpoint", () => {
  it("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.timestamp).toBeDefined();
  });

  it("GET /health should return valid timestamp format", async () => {
    const response = await request(app).get("/health");

    const timestamp = new Date(response.body.timestamp);
    expect(timestamp).toBeInstanceOf(Date);
    expect(isNaN(timestamp.getTime())).toBe(false);
  });
});