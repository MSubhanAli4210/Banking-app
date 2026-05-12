import express from "express";
import {
  searchDeposit,
  addDeposit,
  getDeposit,
  updateDeposit,
  deleteDeposit,
} from "../controllers/depositController.js";

export const depositRouter = express.Router();

depositRouter.post("/addDeposit", addDeposit);
depositRouter.delete("/deleteDeposit/:deposit_id", deleteDeposit);
depositRouter.get("/searchDeposit/:deposit_id", searchDeposit);
depositRouter.get("/getDeposit", getDeposit);
depositRouter.patch("/updateDeposit/:deposit_id", updateDeposit);
