// src/server/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs'); // Make sure to use 'bcryptjs' instead of 'bcrypt' if that's what you installed
const jwt = require('jsonwebtoken'); // Make sure it's 'jsonwebtoken', not 'jwt'
const User = require('../models/Users.js');


const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { name, number, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists." });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const result = await User.create({ email, password: hashedPassword, name, number });

    // Generate JWT
    const token = jwt.sign({ email: result.email, id: result._id }, 'secret', { expiresIn: "1h" });

    res.status(200).json({ result, token });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

    // Generate JWT
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'secret', { expiresIn: "1h" });

    res.status(200).json({ result: existingUser, token });
});

module.exports = router;
