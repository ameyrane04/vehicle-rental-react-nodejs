const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: String,
  paymentId: String,
  signature: String,
  amount: Number,
  currency: String,
  status: String,
  email: String,
  name: String,
  pickupLocation: String,
  dropLocation: String,
  pickupDate: Date,
  dropDate: Date,
  kilometers: Number,
  vehicle: {
    name: String,
    description: String,
    farePricePerKm: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
