import express, { Router } from "express"
import { signup,login,logout } from "../controllers/auth.controller.js";
import { verify } from "../middleware/auth.middleware.js";
const router  = Router();

router.post("/signup",signup)
// router.route("/signup").post(signup)
router.post("/login",login)
router.post("/logout",verify,logout)

export default router