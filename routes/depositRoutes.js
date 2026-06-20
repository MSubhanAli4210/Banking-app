import express from "express";
import {
  searchDeposit,
  addDeposit,
  getDeposit,
  updateDeposit,
  deleteDeposit,
} from "../controllers/depositController.js";
import { validateAmount } from "../middlewares/validateAmount.js";
import { verifyToken } from "../middlewares/tokenCheck.js";

export const depositRouter = express.Router();

depositRouter.use(verifyToken);
depositRouter.post("/addDeposit", validateAmount, addDeposit);
depositRouter.delete("/deleteDeposit/:_id", deleteDeposit);
depositRouter.get("/searchDeposit/:_id", searchDeposit);
depositRouter.get("/getDeposit", getDeposit);
depositRouter.patch("/updateDeposit/:_id", updateDeposit);
