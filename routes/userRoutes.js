import express from "express";
import {
  searchUser,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import {
  depositsFromUser,
  depositsToUser,
} from "../controllers/userDepositController.js";
import {
  withdrawsFromUser,
  withdrawsToUser,
} from "../controllers/userWithdrawController.js";
import User from "../models/user.js";

export const UserRouter = express.Router();

UserRouter.post("/addUser", addUser);
UserRouter.delete("/deleteUser/:email", deleteUser);
UserRouter.get("/searchUser/:email", searchUser);
UserRouter.get("/getUser", getUser);
UserRouter.patch("/updateUser/:email", updateUser);
UserRouter.get("/depositsFromUser/:email", depositsFromUser);
UserRouter.get("/withdrawsFromUser/:email", withdrawsFromUser);
UserRouter.get("/depositsToUser/:email", depositsToUser);
UserRouter.get("/withdrawsToUser/:email", withdrawsToUser);

