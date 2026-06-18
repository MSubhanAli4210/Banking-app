import express from "express";
import {
  createLoan,
  getLoansByUser,
  getActiveLoans,
  getPendingLoans,
  approveLoan,
  rejectLoan,
  activateLoan,
  closeLoan,
  deleteLoan
} from "../controllers/loanController.js";

export const loanRouter = express.Router();

loanRouter.post("/createLoan", createLoan);
loanRouter.get("/getLoansByUser/:email", getLoansByUser);
loanRouter.get("/getActiveLoans/:email", getActiveLoans);
loanRouter.get("/getPendingLoans/:email", getPendingLoans);
loanRouter.patch("/approveLoan/:loanId", approveLoan);
loanRouter.patch("/rejectLoan/:loanId", rejectLoan);
loanRouter.patch("/activateLoan/:loanId", activateLoan);
loanRouter.patch("/closeLoan/:loanId", closeLoan);
loanRouter.delete("/deleteLoan/:loanId", deleteLoan);