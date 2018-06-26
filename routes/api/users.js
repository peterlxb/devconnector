const express = require("express");
const gravatar = require("gravatar");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const password = require("passport");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User model
const User = require("../../models/User");

//Get authentication middle
const Authentication = require("../../controllers/authentication");

//@route GET api/users/test
//@desc Tests user here
//@access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Users Works" });
});

//@route POST api/users/register
//@desc Tests user here
//@access Public
router.post("/register", (req, res) => {
  //get validate msg
  const { errors, isValid } = validateRegisterInput(req.body);
  //check vaidation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      console.log("user", newUser);

      // generate salt for password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@route POST api/users/login
//@desc Login User / Returning JWT Token
//@access Public
router.post("/login", Authentication.login, (req, res) => {
  // //get validate msg
  // const { errors, isValid } = validateLoginInput(req.body);
  // //check vaidation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  // const email = req.body.email;
  // const password = req.body.password;
  // //Find user by email
  // User.findOne({ email }).then(user => {
  //   //Check for user
  //   if (!user) {
  //     errors.email = "User not found";
  //     return res.status(404).json(errors);
  //   }
  //   //Check Password
  //   bcrypt.compare(password, user.password).then(isMatch => {
  //     if (isMatch) {
  //       // User Matched
  //       //Create JWT payload
  //       const payload = {
  //         id: user.id,
  //         name: user.name,
  //         avatar: user.avatar
  //       };
  //       // Sign Token
  //       jwt.sign(
  //         payload,
  //         keys.secretOrKey,
  //         { expiresIn: 3600 },
  //         (err, token) => {
  //           res.json({
  //             success: true,
  //             token: "Bearer " + token
  //           });
  //         }
  //       );
  //     } else {
  //       errors.password = "password incorrect";
  //       return res.status(400).json(errors);
  //     }
  //   });
  // });
});

//@route POST api/users/current
//@desc Return current user
//@access Private
router.get(
  "/current",
  password.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
