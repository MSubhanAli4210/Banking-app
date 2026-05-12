import { deposits } from "../data/Data.js";

export const depositsFromUser = (req, res) => {
  try {
    const { user_id } = req.params;
    let indexs = deposits.filter((s) => user_id == s.from);

    res.json({
      status: "success",
      message: "deposits found done by the user",
      deposits: indexs,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: "unable to find deposits from the user.",
    });
  }
};

export const depositsToUser = (req, res) => {
  try {
    const { user_id } = req.params;
    let indexs = deposits.filter((s) => user_id == s.to);

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
