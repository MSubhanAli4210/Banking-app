import express from "express";
import { UserRouter } from "./routes/userRoutes.js";
import { depositRouter } from "./routes/depositRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("server is live"));
app.use("/deposit", depositRouter);
app.use("/user", UserRouter);

app.listen(3000, () => {
  console.log("Server is live at : http://localhost:3000/");
});
