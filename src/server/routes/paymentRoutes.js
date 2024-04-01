// src/server/routes/paymentRoutes.js or similar
const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const Payment = require('../models/Payment');

const razorpayInstance = new Razorpay({
    key_id: 'rzp_test_cRjh92wH5dKGux',
    key_secret: 'dn1dP2Y3p1dSwibrr37L14SF',
});

// Endpoint to create an order
router.post('/create-order', async (req, res) => {
    console.log("Request body:", req.body); // Log the incoming request body
    try {
        let { totalAmount } = req.body; // Total amount in smallest currency unit (e.g., paise for INR)
        totalAmount = Math.round(Number(totalAmount)); //ensure its an integer

        console.log("Total amount (rounded):", totalAmount, "Type:", typeof totalAmount);
        const options = {
            amount: totalAmount, // Amount in smallest currency unit
            currency: "USD",
            receipt: "receipt#1",
            payment_capture: '1', // Auto capture payment
        };

        const order = await razorpayInstance.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ message: "Error in creating Razorpay order", error: error.message });
    }
});

router.post('/save-payment', async (req, res) => {
    console.log("Saving payment details:", req.body);
    try {
        const paymentDetails = req.body;

        // Create a new payment record in the database
        const newPayment = new Payment({
            orderId: paymentDetails.orderId,
            paymentId: paymentDetails.razorpay_payment_id,
            signature: paymentDetails.razorpay_signature,
            amount: paymentDetails.amount,
            currency: paymentDetails.currency,
            email: paymentDetails.email, // Ensure these fields are passed from the client
            name: paymentDetails.name,
            pickupLocation: paymentDetails.pickupLocation,
            dropLocation: paymentDetails.dropLocation,
            pickupDate: paymentDetails.pickupDate,
            dropDate: paymentDetails.dropDate,
            kilometers: paymentDetails.kilometers,
            vehicle: {
                name: paymentDetails.vehicle.name,
                description: paymentDetails.vehicle.description,
                farePricePerKm: paymentDetails.vehicle.farePricePerKm,
            },
            status: "Paid", // You can update this based on the response from Razorpay if needed
        });

        await newPayment.save();

        res.status(201).json({ message: "Payment details saved successfully.", payment: newPayment });
    } catch (error) {
        res.status(500).json({ message: "Error saving payment details", error });
        return res.status(500).json({ message: "Error saving payment details", error: error.message });
    }
});

module.exports = router;
