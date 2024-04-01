// src/components/CheckoutPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CheckoutPage() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { totalFare, formData, vehicle } = state;

    const handlePayment = async () => {

        console.log("handlePayment called");
        // Load the Razorpay script dynamically
        const loadScript = () => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
            });
        };

        const res = await loadScript();
        if (!res) {
            console.error('Razorpay SDK failed to load. Are you online?');
            return;
        }

        if (typeof window.Razorpay !== "function") {
            console.error("Razorpay is not loaded yet.");
            return;
        }

        try {
            const totalAmount = Math.round(totalFare * 100);
            console.log("Sending request with totalAmount:", totalAmount); // Log the data being sent
            const orderResponse = await axios.post('/api/payment/create-order', { totalAmount }); // assuming totalFare is in your currency's main unit, convert to smallest unit

            const options = {
                key: 'rzp_test_cRjh92wH5dKGux', // Use Razorpay key_id
                amount: orderResponse.data.amount,
                currency: "USD",
                name: "RAG rentals",
                description: "Transaction Description",
                order_id: orderResponse.data.id,
                handler: async function (response) {
                    // After successful payment
                    // Make a POST request to your /save-payment endpoint to save the payment details
                    await axios.post('/api/payment/save-payment', {
                        orderId: response.razorpay_order_id,
                        paymentId: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                        amount: orderResponse.data.amount,
                        currency: "USD",
                        email: formData.email,
                        name: formData.name,
                        pickupLocation: formData.pickupLocation,
                        dropLocation: formData.dropLocation,
                        pickupDate: formData.pickupDate,
                        dropDate: formData.dropDate,
                        kilometers: formData.kilometers,
                        vehicle: {
                            name: vehicle.name,
                            description: vehicle.description,
                            farePricePerKm: vehicle.farePricePerKm,
                        },
                        status: "Paid",
                        // Include other fields as per your Payment model
                    });
                    // Redirect or show success message
                    // Assuming deliveryDetails is prepared with necessary information
                    const deliveryDetails = {
                        driverName: "Kartik Lakhotiya",
                        driverContact: "9876543210",
                        estimatedTime: "Your vehicle will be delivered within 24 hours.",
                    };
                    // Navigate to DeliveryInfoPage with state
                    navigate('/delivery-info', { state: { vehicle, deliveryDetails } });
                },
                prefill: {
                    // Prefill details if any
                },
                // Add other Razorpay options as needed
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Payment initiation error:', error);
        }
    };


    return (
        <div className="min-h-screen bg-brandBlack flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white shadow rounded-lg p-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Checkout</h2>
                <div className="rounded-t-lg pt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Rental Details</h3>
                    <div className="mt-4 space-y-3">
                        <p className="text-sm text-gray-600">Pick-up Location: <span className="text-gray-500">{formData.pickupLocation}</span></p>
                        <p className="text-sm text-gray-600">Drop-off Location: <span className="text-gray-500">{formData.dropLocation}</span></p>
                        <p className="text-sm text-gray-600">Pick-up Date: <span className="text-gray-500">{formData.pickupDate}</span></p>
                        <p className="text-sm text-gray-600">Drop-off Date: <span className="text-gray-500">{formData.dropDate}</span></p>
                        <p className="text-sm text-gray-600">Estimated Kilometers: <span className="text-gray-500">{formData.kilometers}</span></p>
                        <p className="text-sm text-gray-600">Name: <span className="text-gray-500">{formData.name}</span></p>
                        <p className="text-sm text-gray-600">Email: <span className="text-gray-500">{formData.email}</span></p>
                    </div>
                </div>
                <div className="rounded-t-lg pt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Vehicle Details</h3>
                    <div className="mt-4 space-y-3">
                        <p className="text-sm text-gray-600">Vehicle: <span className="text-gray-500">{vehicle.name}</span></p>
                        <p className="text-sm text-gray-600">Description: <span className="text-gray-500">{vehicle.description}</span></p>
                        <p className="text-sm text-gray-600">Fare per Km: <span className="text-gray-500">${vehicle.farePricePerKm}</span></p>
                        <p className="text-sm font-semibold text-gray-900">Total Fare: <span className="text-red-500">${totalFare}</span></p>
                    </div>
                </div>
                <button
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handlePayment}
                >
                    Proceed to Pay
                </button>
            </div>
        </div>

    );
}

export default CheckoutPage;
