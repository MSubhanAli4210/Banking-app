import Loan from "../models/loan.js";

export const createLoan = async (req, res) => {
  try {
    const { email, amount, interestRate, durationMonths, monthlyInstallment } = req.body;

    const loan = await Loan.create({
      userEmail: email,
      amount,
      interestRate,
      durationMonths,
      monthlyInstallment,
      status: "PENDING"
    });

    res.json({
      status: "success",
      message: "Loan created successfully",
      loan
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message
    });
  }
};

export const getLoansByUser = async (req, res) => {
  try {
    const { email } = req.params;

    const loans = await Loan.find({ userEmail: email });

    if (!loans || loans.length === 0) {
      return res.json({
        status: "failed",
        message: "No loans found for this user"
      });
    }

    res.json({
      status: "success",
      message: "Loans fetched successfully",
      loans
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error fetching loans"
    });
  }
};

export const getActiveLoans = async (req, res) => {
  try {
    const { email } = req.params;

    const loans = await Loan.find({
      userEmail: email,
      status: "ACTIVE"
    });

    res.json({
      status: "success",
      message: "Active loans fetched",
      loans
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error fetching active loans"
    });
  }
};

export const getPendingLoans = async (req, res) => {
  try {
    const { email } = req.params;

    const loans = await Loan.find({
      userEmail: email,
      status: "PENDING"
    });

    res.json({
      status: "success",
      message: "Pending loans fetched",
      loans
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error fetching pending loans"
    });
  }
};

export const approveLoan = async (req, res) => {
  try {
    const { loanId } = req.params;

    const loan = await Loan.findByIdAndUpdate(
      loanId,
      { status: "APPROVED" },
      { new: true }
    );

    res.json({
      status: "success",
      message: "Loan approved",
      loan
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error approving loan"
    });
  }
};

export const rejectLoan = async (req, res) => {
  try {
    const { loanId } = req.params;

    const loan = await Loan.findByIdAndUpdate(
      loanId,
      { status: "REJECTED" },
      { new: true }
    );

    res.json({
      status: "success",
      message: "Loan rejected",
      loan
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error rejecting loan"
    });
  }
};

export const activateLoan = async (req, res) => {
  try {
    const { loanId } = req.params;

    const loan = await Loan.findByIdAndUpdate(
      loanId,
      { status: "ACTIVE" },
      { new: true }
    );

    res.json({
      status: "success",
      message: "Loan activated",
      loan
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error activating loan"
    });
  }
};

export const closeLoan = async (req, res) => {
  try {
    const { loanId } = req.params;

    const loan = await Loan.findByIdAndUpdate(
      loanId,
      { status: "PAID" },
      { new: true }
    );

    res.json({
      status: "success",
      message: "Loan closed successfully",
      loan
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error closing loan"
    });
  }
};

export const deleteLoan = async (req, res) => {
  try {
    const { loanId } = req.params;

    await Loan.findByIdAndDelete(loanId);

    res.json({
      status: "success",
      message: "Loan deleted"
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "Error deleting loan"
    });
  }
};