import Deposit from "../models/deposit.js";

export const depositsFromUser = async (req, res) => {
  try {
    const { email } = req.params;
    let deposit = await Deposit.find({ from: email });

    if (!deposit || deposit.length === 0) {
      return res.json({
        status: "failed",
        message: "unable to find deposits from the user.",
      });
    }
    res.json({
      status: "success",
      message: "deposits found done by the user",
      deposits: deposit,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "unable to find deposits from the user.",
    });
  }
};

export const depositsToUser = async (req, res) => {
  try {
    const { email } = req.params;
    let indexs = await Deposit.find({ to: email });
    if (!indexs || indexs.length === 0) {
      return res.json({
        status: "failed",
        message: "unable to find deposits to the user.",
      });
    }
    res.json({
      status: "success",
      message: "deposits found recived to the user",
      deposits: indexs,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "unable to find deposits to the user.",
    });
  }
};
