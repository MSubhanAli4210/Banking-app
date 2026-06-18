import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const loanSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    index: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  interestRate: {
    type: Number,
    required: true,
  },

  durationMonths: {
    type: Number,
    required: true,
  },

  monthlyInstallment: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED", "ACTIVE", "PAID"],
    default: "PENDING",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Loan = model("Loan", loanSchema);
export default Loan;
