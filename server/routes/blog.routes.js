import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { CreateBlogsDetailsFromUser, deletePost, getPost, getPostById } from "../controllers/auth.controller.js";
import { verify } from "../middleware/auth.middleware.js";

const router = Router()

router.post("/create",upload.single('Thumbnail'),CreateBlogsDetailsFromUser)
router.post("/delete/:id",verify,deletePost)
router.get("/getPost",getPost)
router.get("/getPostById/:id",getPostById)

export default router