import request from "supertest";
import app from "../src/app";
import sequelize from "../src/config/database";
import Book from "../src/models/book.model";
import Member from "../src/models/member.model";
import BorrowedBook from "../src/models/borrowedBook.model";

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Setup mock data
  await Book.bulkCreate([
    { code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1 },
  ]);

  await Member.bulkCreate([{ code: "M001", name: "Angga" }]);
});

describe("POST /api/borrow", () => {
  it("should borrow a book successfully", async () => {
    const response = await request(app).post("/api/borrow").send({
      memberCode: "M001",
      bookCode: "JK-45",
    });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Book borrowed successfully");
  });
});
