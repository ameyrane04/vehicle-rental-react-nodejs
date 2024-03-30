// src/components/CheckoutPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function CheckoutPage() {
    const handlePayment = async () => {
        // Dynamically load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
            try {
                const result = await createOrder(totalFare); // You need to implement createOrder
                const options = {
                    key: 'rzp_test_O5cSHTHjwcXu0E', // Replace with your key
                    amount: result.amount,
                    currency: 'USD',
                    name: 'RAG',
                    description: 'Test Transaction',
                    image: 'https://example.com/your_logo',
                    order_id: result.id,
                    handler: function (response) {
                        // Handle the payment success
                        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                        // Here you would update the database
                    },
                    prefill: {
                        name: 'Gaurav Kumar',
                        email: 'gaurav.kumar@example.com',
                        contact: '9999999999'
                    },
                    notes: {
                        address: 'Razorpay Corporate Office'
                    },
                    theme: {
                        color: '#F37254'
                    }
                };
                const paymentWindow = new window.Razorpay(options);
                paymentWindow.open();
            } catch (error) {
                console.error(error);
                alert('Error in creating Razorpay order');
            }
        };
        document.body.appendChild(script);
    };

    const location = useLocation();
    const { totalFare } = location.state || { totalFare: 0 }; // Assuming totalFare is passed via state

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <p>Total Charges: ${totalFare}</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handlePayment}
            >
                Proceed to Pay
            </button>
        </div>
    );
}

export default CheckoutPage;
