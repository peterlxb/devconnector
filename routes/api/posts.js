const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load User Post
const Post = require("../../models/Post");

//Load User Profile
const Profile = require("../../models/Profile");

// Validation
const validatePostInput = require("../../validation/post");

//@route GET api/posts/test
//@desc Tests post here
//@access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Posts Works" });
});

//@route GET api/posts
//@desc Get posts
//@access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ posts: "There are no posts!" }));
});

//@route GET api/posts/:id
//@desc Get post by id
//@access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ posts: "There is no post!" }));
});

//@route POST api/posts/
//@desc Creates post here
//@access Privat
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      // If any errors ,send 400 with error object
      return res.status(404).json(erorrs);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.name,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

//@route DELETE api/posts/:id
//@desc Delete post
//@access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ noauth: "user no auth" });
          }

          // Delete
          post.remove().then(() => res.json({ success: true }));
        });
      })
      .catch(err => res.status(404).json({ posts: "Post not found!" }));
  }
);

module.exports = router;
