import express from "express";
import {
  searchWithdraw,
  addWithdraw,
  getWithdraw,
  updateWithdraw,
  deleteWithdraw,
} from "../controllers/withdrawController.js";
import { verifyToken } from "../middlewares/tokenCheck.js";

export const withdrawRouter = express.Router();

withdrawRouter.use(verifyToken);
withdrawRouter.post("/addWithdraw", addWithdraw);
withdrawRouter.delete("/deleteWithdraw/:_id", deleteWithdraw);
withdrawRouter.get("/searchWithdraw/:_id", searchWithdraw);
withdrawRouter.get("/getWithdraw", getWithdraw);
withdrawRouter.patch("/updateWithdraw/:_id", updateWithdraw);
