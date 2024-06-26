import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TruckDetailsPage() {
    const trucks = useSelector(state => state.trucks);
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropLocation: '',
        pickupDate: '',
        dropDate: '',
        kilometers: '',
        name: '',
        email: ''
    });

    // Find the bike with the matching ID from the URL
    const truck = trucks.find((truck) => truck.id.toString() === id);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalFare = formData.kilometers * truck.farePricePerKm;
        const gstCharges = totalFare * 0.18; // Example GST calculation
        const finalAmount = totalFare + gstCharges;
        navigate('/checkout', { state: { totalFare: finalAmount, formData, vehicle: truck } });

        // Implement booking logic here
    };

    return (
        <div className="container mx-auto p-6 flex flex-wrap justify-between">
            {/* Booking Form */}
            <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Book Your Ride</h2>
                {/* Form fields for pickupLocation, dropLocation, etc. */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-white">Pick-up Location</label>
                        <input
                            type="text"
                            name="pickupLocation"
                            id="pickupLocation"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dropLocation" className="block text-sm font-medium text-white">Drop-off Location</label>
                        <input
                            type="text"
                            name="dropLocation"
                            id="dropLocation"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-s"
                            value={formData.dropLocation}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="pickupDate" className="block text-sm font-medium text-white">Pick-up Date</label>
                        <input
                            type="date"
                            name="pickupDate"
                            id="pickupDate"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm text-black"
                            value={formData.pickupDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dropDate" className="block text-sm font-medium text-white">Drop-off Date</label>
                        <input
                            type="date"
                            name="dropDate"
                            id="dropDate"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm text-black"
                            value={formData.dropDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="kilometers" className="block text-sm font-medium text-white">Estimated Kilometers</label>
                        <input
                            type="number"
                            name="kilometers"
                            id="kilometers"
                            min="0"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
                            value={formData.kilometers}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Book Vehicle
                    </button>
                </form>
            </div>

            {/* Truck Details */}
            <div className="w-full md:w-1/2 p-4 bg-black text-white">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">{truck?.name}</h2>
                <img src={truck?.imageUrl} alt={truck?.name} className="w-full mb-4" />
                <p>{truck?.description}</p>
                <p>Fare: ${truck?.farePricePerKm} / km</p>
            </div>

            {/* Terms & Conditions */}
            <div className="w-full mt-4 p-4 bg-gray-200 text-black border-y">
                <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
                
                <p>Tax inclusions and exclusions...</p>
                <p>Your Trip has a KM limit.<br/>
                    If your usage exceeds this limit, you will be charged for the excess KM used.
                    We promote cleaner fuel and thus your rented vehicle can be a CNG vehicle. <br/>
                    You may need to fill CNG once or more during your trip. 
                    Please cooperate with the delivery executive.<br/>
                    The Airport Entry/Parking charge, if applicable is not included in the fare and will be charged extra.<br/>
                    Your trip includes one pick up in Pick-up city and one drop to destination city. It does not include within city travel.<br/>
                    If your Trip has Hill climbs, vehicle AC may be switched off during such climbs.<br/>
                    Damages to the vehicles will be thoroughly inspected, and investigation will take place.</p>
            </div>
        </div>
    );
}

export default TruckDetailsPage;
