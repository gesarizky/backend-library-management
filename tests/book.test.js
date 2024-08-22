import request from "supertest";
import app from "../src/app";
import sequelize from "../src/config/database";
import Book from "../src/models/book.model";
import BorrowedBook from "../src/models/borrowedBook.model";
import Member from "../src/models/member.model";

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Setup mock data
  await Book.bulkCreate([
    { code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1 },
    {
      code: "SHR-1",
      title: "A Study in Scarlet",
      author: "Arthur Conan Doyle",
      stock: 1,
    },
  ]);

  await Member.bulkCreate([
    { code: "M001", name: "Angga" },
    { code: "M002", name: "Ferry" },
  ]);
});

describe("GET /books", () => {
  it("should return a list of books", async () => {
    const response = await request(app).get("/api/books");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("POST /books", () => {
  it("should add a new book", async () => {
    const response = await request(app).post("/api/books").send({
      code: "TW-11",
      title: "Twilight",
      author: "Stephenie Meyer",
      stock: 1,
    });
    expect(response.status).toBe(201);
    expect(response.body.code).toBe("TW-11");
  });
});
