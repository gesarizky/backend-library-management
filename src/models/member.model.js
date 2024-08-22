import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Member extends Model {}

Member.init(
  {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    penalty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Member",
  }
);

export default Member;
