import express, { Router } from "express"
import { signup,login,logout } from "../controllers/auth.controller.js";
const router  = Router();

router.get("/signup",signup)
router.get("/login",login)
router.get("/login",logout)

export default router