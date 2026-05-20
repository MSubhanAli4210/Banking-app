import Withdraw from "../models/withdraw.js";

export const withdrawsFromUser = async (req, res) => {
  try {
    const { email } = req.params;
    let indexs = await Withdraw.find({ from: email });
    if (!indexs || indexs.length === 0) {
      return res.json({
        status: "failed",
        message: "unable to find withdraws from the user.",
      });
    }
    res.json({
      status: "success",
      message: "withdraws found done by the user",
      withdraws: indexs,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "unable to find withdraws from the user.",
    });
  }
};

export const withdrawsToUser = async (req, res) => {
  try {
    const { email } = req.params;
    let indexs = await Withdraw.find({ to: email });
    if (!indexs || indexs.length === 0) {
      return res.json({
        status: "failed",
        message: "unable to find withdraws to the user.",
      });
    }
    res.json({
      status: "success",
      message: "withdraws found recived to the user",
      withdraws: indexs,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "unable to find withdraws to the user.",
    });
  }
};
