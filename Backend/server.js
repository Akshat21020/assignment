import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import athleteRoutes from "./routes/athleteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/athletes", athleteRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/athlete");

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
