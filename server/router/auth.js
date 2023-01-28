const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const jwt = require("jsonwebtoken");

require("../db/conn");

const User = require("../model/userSchema");
const bcrypt = require("bcryptjs/dist/bcrypt");

router.get("/", (req, res) => {
  res.send(`Hello india`);
});

//  || USING---PROMISES ||  //

// router.post("/register", (req, res) => {
//   const { name, email, phone, password, cpassword } = req.body;

//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "plz fill data" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exist" });
//       }

//       const user = new User({ name, email, phone, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user register successfuly" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed registered" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//USING--async//
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill data" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    if (password != cpassword) {
      return res.status(422).json({ error: "Email already exist" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });

      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "user register successfuly" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/login", async (req, res) => {
  try {
    let token;

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    const isMatch = await bcrypt.compare(password, userLogin.password);

    token = await userLogin.generateAuthToken();
    console.log(token);

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 2592000000),
      httpOnly: true,
    });

    if (!isMatch) {
      res.status(400).json({ error: "user error" });
    } else {
      res.json({ message: "user signin successfuly" });
    }
  } catch (error) {
    console.log(error);
  }
});

//about s page
router.get("/user", authenticate, (req, res) => {
  console.log("hello my about");
  res.send(req.rootUser);
});

module.exports = router;
