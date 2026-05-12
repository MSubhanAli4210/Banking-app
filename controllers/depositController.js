import { deposits } from "../data/Data.js";

export const addDeposit = (req, res) => {
  try {
    const { deposit_id, ammount, comment, from, to, purpose } = req.body;
    const newDeposit = { deposit_id, ammount, comment, from, to, purpose };
    deposits.push(newDeposit);
    res.json({
      data: newDeposit,
      message: "Deposit added successfully",
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const deleteDeposit = (req, res) => {
  try {
    const { deposit_id } = req.params;
    const index = deposits.findIndex((s) => s.deposit_id == deposit_id);

    if (index === -1) {
      return res.json({
        status: "Error",
        message: "deposit not found",
      });
    }

    deposits.splice(index, 1);
    res.json({
      status: "success",
      message: "Deposit deleted",
      deposits: deposits,
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const searchDeposit = (req, res) => {
  try {
    const { deposit_id } = req.params;
    const foundDeposit = deposits.find((s) => s.deposit_id == deposit_id);

    if (!foundDeposit) {
      return res.json({
        status: "error",
        message: "no user found",
      });
    }

    res.json({
      status: "success",
      message: "deposit found",
      deposit: foundDeposit,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const getDeposit = (req, res) => {
  try {
    res.json({
      status: "success",
      deposits: deposits,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateDeposit = (req, res) => {
  try {
    const { deposit_id } = req.params;
    const newData = req.body;
    const index = deposits.findIndex((s) => s.id == deposit_id);

    if (index == -1) {
      return res.json({
        status: "error",
        message: "deposit not found",
      });
    }
    deposits[index] = { ...deposits[index], ...newData };

    res.json({
      status: "success",
      message: "updated deposit succesfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
