import Deposit from "../models/deposit.js";

export const addDeposit = async (req, res) => {
  try {
    const deposits = req.body;
    const createdDeposit = await Deposit.create(deposits);
    res.json({
      data: createdDeposit,
      message: "Deposit added successfully",
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const deleteDeposit = async (req, res) => {
  try {
    const { _id } = req.params;
    const record = await Deposit.findByIdAndDelete(_id);
    const newData = await Deposit.find();

    if (!record) {
      return res.json({
        status: "Error",
        message: "deposit not found",
      });
    }

    res.json({
      status: "success",
      message: "Deposit deleted",
      deposit: newData,
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const searchDeposit = async (req, res) => {
  try {
    const { _id } = req.params;
    const foundDeposit = await Deposit.findById(_id);

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

export const getDeposit = async (req, res) => {
  try {
    const deposits = await Deposit.find();
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

export const updateDeposit = async (req, res) => {
  try {
    const { _id } = req.params;
    const newData = req.body;
    const record = await Deposit.findByIdAndUpdate(_id, newData);
    const updatedDeposit = await Deposit.find();

    if (!record) {
      return res.json({
        status: "error",
        message: "deposit not found",
      });
    }

    res.json({
      status: "success",
      message: "updated deposit succesfully",
      deposit: updatedDeposit,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
