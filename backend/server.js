import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming request cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//Routes
app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("helloooooo!!!");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
