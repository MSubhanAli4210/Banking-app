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

export const UserRouter = express.Router();

UserRouter.post("/addUser", addUser);
UserRouter.delete("/deleteUser/:user_id", deleteUser);
UserRouter.get("/searchUser/:user_id", searchUser);
UserRouter.get("/getUser", getUser);
UserRouter.patch("/updateUser/:user_id", updateUser);
UserRouter.get("/depositsFromUser/:user_id", depositsFromUser);
UserRouter.get("/depositsToUser/:user_id", depositsToUser);
