const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@desc Tests post here
//@access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Posts Works" });
});

module.exports = router;
