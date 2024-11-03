import express from "express";
import {
  logout,
  signup,
  login,
  loginPost,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);

router.get("/login", login);

router.post("/login", loginPost);

router.get("/logout", logout);

export default router;
