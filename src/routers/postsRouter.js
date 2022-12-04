const express = require("express");
const router = new express.Router();

const {
  addPostValidation,
  patchPostValidation,
} = require("../middlewares/validationMiddleware");

const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
} = require("../controllers/postController");

// Get /api/posts => [...posts]
router.get("/", getPosts);
// Get /api/posts/<123> => {post with id 123}
router.get("/:id", getPostById);
// Post /api/posts => [newPost,...posts]
router.post("/", addPostValidation, addPost);
//  Put /api/posts/<123> => [changedPost,...posts]
router.put("/:id", addPostValidation, changePost);
//  Patch /api/posts/<123> => [changedPost,...posts]
router.patch("/:id", patchPostValidation, patchPost);
//  Delete /api/posts/<123> => [posts wwithout post with id 123]
router.delete("/:id", deletePost);

module.exports = { postsRouter: router };
