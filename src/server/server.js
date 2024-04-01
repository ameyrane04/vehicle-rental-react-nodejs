// src/server/server.js
require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes'); // Ensure this file exists
const cors = require('cors');

// Use it before any route definitions


// dotenv.config();
// dotenv.config({ path: './.env' });
console.log(process.env.MONGODB_URI);
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes); // Example of adding payment routes

mongoose.connect("mongodb+srv://ameyrane98765:shinchan4@vehiclerental.w2usbv0.mongodb.net/?retryWrites=true&w=majority&appName=vehicleRental")
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));


 