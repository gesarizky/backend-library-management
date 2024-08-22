import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class BorrowedBook extends Model {}

BorrowedBook.init(
  {
    memberCode: {
      type: DataTypes.STRING,
      references: {
        model: "Members",
        key: "code",
      },
    },
    bookCode: {
      type: DataTypes.STRING,
      references: {
        model: "Books",
        key: "code",
      },
    },
    borrowDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "BorrowedBook",
  }
);

export default BorrowedBook;
