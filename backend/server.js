import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("helloooooo!!!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
