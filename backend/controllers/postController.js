import Post from "../models/postModel.js"; // Adjust the path if necessary
import cloudinary from "../config/cloudinaryConfig.js"; // Adjust the path if necessary

export const createPost = async (req, res, next) => {
    try {
        const { userName, userId, content, category } = req.body;

        // Check if there is a file in the request
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image.",
            });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create a new post
        const post = await Post.create({
            name: req.file.originalname,
            userId: userId,
            username: userName,
            category: category,
            content: content,
            images: [
                {
                    public_id: result.public_id,
                    url: result.secure_url,
                },
            ],
        });

        res.status(201).json({
            success: true,
            post,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


