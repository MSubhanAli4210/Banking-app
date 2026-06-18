export const validateAmount = (req, res, next) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({
      status: "failed",
      message: "Invalid amount",
    });
  }

  next();
};