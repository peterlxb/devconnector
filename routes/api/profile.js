const express = require("express");
const router = express.Router();

//@route GET api/profile/test
//@desc Tests profile here
//@access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Profiles Works" });
});

module.exports = router;
