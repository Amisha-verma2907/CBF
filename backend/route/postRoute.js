import express from "express";
import upload from "../middleware/multerMiddleware.js";
import { createPost, getAllPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/post", getAllPost);
router.post("/upload-image", upload.single("image"), (req, res) => {
  // This function can be empty as multer middleware already handles file upload
});
router.post("/post/new", createPost);

export default router;
