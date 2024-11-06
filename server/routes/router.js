const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/userSchema');



// Register a new user
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body.inpval;
  if (!name || !email || !password) {
    res.status(404).json("Please Fill the data");
  }
  try {
    const preuser = await users.findOne({ email: email });
    if (preuser !== null) {
      return res.json({ msg: "This user is already Present" });
    } else {
      const adduser = new users({
        name: name, email: email, password: password
      });
      await adduser.save();
      return res.json({ msg: "User Created", adduser });
    }
  } catch (error) {
    return res.json(error);
  }
})

//login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body.inpval;

    // Check if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password." });
    }

    // Find the user by email
    const user = await users.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Check if the password matches
    if (user.password === password) {
      // Password is correct, respond with success
      return res.status(200).json({ message: "Valid user" });
    } else {
      // Password is incorrect
      return res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (error) {
    // Handle any errors
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});



// // Login user
// router.post("/login", async (req,res)=>{
//   const {email,password} =req.body.inpval;
//   users.findOne({email:email})
//   .then(users=>{
//     if(users){
//       if(users.password === password){
//       return res.json( "valid user");
//       }else {
//       return res.json( "Invalid email or password");
//       }
//     }else{
//       res.json("Invalid email or password");
//     }
//   })
// })















// // Route to get all users
// router.get("/users", async (req, res) => {
//   try {
//     const allUsers = await users.find(); // Fetch all records from the "users" collection
//     res.status(200).json(allUsers); // Send the fetched data as a JSON response
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     res.status(500).json({ message: "Error fetching user data" });
//   }
// });








// try {
//   let user = await User.findOne({ email });
//   if (user) return res.status(400).json({ message: 'User already exists' });

//   user = new User({ name, email, password });
//   await user.save();

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.status(201).json({ token, user });
// } catch (error) {
//   res.status(500).json({ message: 'Server error' });
// }
// });

// Login user
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

module.exports = router;

