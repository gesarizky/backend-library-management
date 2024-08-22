import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Book extends Model {}

Book.init(
  {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    stock: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Book",
  }
);

export default Book;
