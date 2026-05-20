import Withdraw from "../models/withdraw.js";

export const addWithdraw = async (req, res) => {
  try {
    const withdraws = req.body;
    const createdWithdraw = await Withdraw.create(withdraws);
    res.json({
      data: createdWithdraw,
      message: "Withdraw added successfully",
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const deleteWithdraw = async (req, res) => {
  try {
    const { _id } = req.params;
    const record = await Withdraw.findByIdAndDelete(_id);
    console.log(record);
    const newData = await Withdraw.find();

    if (!record) {
      return res.json({
        status: "Error",
        message: "withdraw not found",
      });
    }

    res.json({
      status: "success",
      message: "Withdraw deleted",
      withdraw: newData,
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const searchWithdraw = async (req, res) => {
  try {
    const { _id } = req.params;
    const foundWithdraw = await Withdraw.findById(_id);

    if (!foundWithdraw) {
      return res.json({
        status: "error",
        message: "no user found",
      });
    }

    res.json({
      status: "success",
      message: "withdraw found",
      withdraw: foundWithdraw,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const getWithdraw = async (req, res) => {
  try {
    const withdraws = await Withdraw.find();
    res.json({
      status: "success",
      withdraws: withdraws,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateWithdraw = async (req, res) => {
  try {
    const { _id } = req.params;
    const newData = req.body;
    const record = await Withdraw.findByIdAndUpdate(_id, newData);
    const updatedWithdraw = await Withdraw.find();

    if (!record) {
      return res.json({
        status: "error",
        message: "withdraw not found",
      });
    }

    res.json({
      status: "success",
      message: "updated withdraw succesfully",
      withdraw: updatedWithdraw,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
