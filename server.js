import express from "express";
import { UserRouter } from "./routes/userRoutes.js";
import { depositRouter } from "./routes/depositRoutes.js";
import connectDB from "./config/dataBase.js";
import dotenv from "dotenv";
import { withdrawRouter } from "./routes/withdrawRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("server is live"));
app.use("/withdraw", withdrawRouter);
app.use("/deposit", depositRouter);
app.use("/user", UserRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is live at : http://localhost:" + process.env.PORT + "/");
});