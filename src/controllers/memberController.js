import Member from "../models/member.model.js";
import BorrowedBook from "../models/borrowedBook.model.js";
import { Op } from "sequelize";

// Get all members with the number of books borrowed
export const getMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    const borrowedBooks = await BorrowedBook.findAll({
      attributes: ["memberCode", "bookCode"],
    });

    const memberCounts = members.map((member) => {
      const borrowedCount = borrowedBooks.filter(
        (b) => b.memberCode === member.code
      ).length;
      return { ...member.toJSON(), borrowedBooks: borrowedCount };
    });

    res.json(memberCounts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve members" });
  }
};

// Add a new member
export const addMember = async (req, res) => {
  try {
    const { code, name } = req.body;
    const member = await Member.create({ code, name });
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: "Failed to add member" });
  }
};

// Update a member
export const updateMember = async (req, res) => {
  try {
    const { code } = req.params;
    const { name, penalty } = req.body;
    const member = await Member.update({ name, penalty }, { where: { code } });
    if (member[0]) {
      res.json({ message: "Member updated successfully" });
    } else {
      res.status(404).json({ error: "Member not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update member" });
  }
};

// Delete a member
export const deleteMember = async (req, res) => {
  try {
    const { code } = req.params;
    const result = await Member.destroy({ where: { code } });
    if (result) {
      res.json({ message: "Member deleted successfully" });
    } else {
      res.status(404).json({ error: "Member not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete member" });
  }
};
