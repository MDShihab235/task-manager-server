import express from "express";
import { config } from "dotenv";
import TaskRouter from "./routes/TaskRouter.js";
import cors from "cors";
import { connectDB } from "./Models/db.js";

config({
  path: "./.env",
});
connectDB();

const port = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server");
});
app.use(cors());
app.use(express.json());
app.use("/api/v1/tasks", TaskRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT=${port}`);
});
