import request from "supertest";
import app from "../src/app";
import sequelize from "../src/config/database";
import Member from "../src/models/member.model";

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Setup mock data
  await Member.bulkCreate([
    { code: "M001", name: "Angga" },
    { code: "M002", name: "Ferry" },
  ]);
});

describe("GET /members", () => {
  it("should return a list of members", async () => {
    const response = await request(app).get("/api/members");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
