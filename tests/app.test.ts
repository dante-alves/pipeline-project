import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("API", () => {
  it("GET /health retorna ok", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("GET /hello/:name retorna saudação", async () => {
    const res = await request(app).get("/hello/Dante");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Olá, Dante!");
  });
});
