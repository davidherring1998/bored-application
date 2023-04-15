const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Register a new user
// POST
// /api/users/
const registerUser = asyncHandler(async (req, res) => {
  try {
    // Deconstruct request body
    const { username, email, password } = req.body;

    //  Check is credentials are present
    if (!username || !email || !password) {
      res.json({ msg: `Please enter all required fields.` });
    }

    // Check if user exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(409).json({ msg: `User already exist in database.` });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      msg: `User created.`,
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(400).json({ msg: `User was not created. ${error}` });
  }
});

// Login a user
// POST
// /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  try {
    // Deconstruct request body
    const { username, email, password } = req.body;

    //  Check is credentials are present
    if (!username || !email || !password) {
      res.json({ msg: `Please enter all required fields.` });
    }

    // Find user by their email
    const user = await User.findOne({ email });

    // Compare the hashed password in the database vs the plain text password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        msg: `User successfully logged in.`,
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      });
    }
  } catch (error) {
    res.status(400).json({ msg: `User not logged in.` });
  }
});

// Get a user
// GET
// /api/users/
const getUser = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});

// sign the token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: `30d` });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
