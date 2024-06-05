import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocationAutocomplete from './LocationAutocomplete';

function VehicleDetailPage() {
    const vehicles = useSelector(state => state.vehicles);
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
    const [formErrors, setFormErrors] = useState({});
    const vehicle = vehicles.find((car) => car.id == id);

    // List of valid cities for demo. In real application, consider using an API for this.
    // const validCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Lucknow"];

    const validateForm = () => {
        const errors = {};
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Remove time part
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const pickupDate = new Date(formData.pickupDate);
        const dropDate = new Date(formData.dropDate);

        // if (!formData.pickupLocation || !validCities.includes(formData.pickupLocation)) {
        //     errors.pickupLocation = "Please select a valid city from the list.";
        // }
        // if (!formData.dropLocation || !validCities.includes(formData.dropLocation)) {
        //     errors.dropLocation = "Please select a valid city from the list.";
        // }
        if (!formData.pickupDate || pickupDate < today) {
            errors.pickupDate = "Pick-up date must be today or later.";
        }
        if (!formData.dropDate || dropDate <= pickupDate) {
            errors.dropDate = "Drop-off date must be after pick-up date.";
        }
        if (!formData.kilometers || formData.kilometers <= 0) {
            errors.kilometers = "Estimated kilometers must be a positive number.";
        }
        if (!formData.name.trim()) {
            errors.name = "Name is required.";
        }
        if (!emailRegex.test(formData.email)) {
            errors.email = "Please enter a valid email address.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const totalFare = formData.kilometers * vehicle.farePricePerKm;
            const gstCharges = totalFare * 0.18; // Example GST calculation
            const finalAmount = totalFare + gstCharges;
            navigate('/checkout', { state: { totalFare: finalAmount, formData, vehicle } });
        }
    };

    return (
        <div className="container mx-auto p-6 flex flex-wrap justify-between">
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Book Your Ride</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Pickup Location */}
                    <div>

                        <LocationAutocomplete
                            label="Pick-up Location"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            formErrors={formErrors}
                        />
                        {formErrors.pickupLocation && <p className="text-red-500 text-xs mt-1">{formErrors.pickupLocation}</p>}
                    </div>

                    {/* Drop-off Location */}
                    <div>

                        <LocationAutocomplete
                            label="Drop-off Location"
                            name="dropLocation"
                            value={formData.dropLocation}
                            onChange={handleChange}
                            formErrors={formErrors}
                        />
                        {formErrors.dropLocation && <p className="text-red-500 text-xs mt-1">{formErrors.dropLocation}</p>}
                    </div>

                    {/* Pick-up Date */}
                    <div>
                        <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">Pick-up Date</label>
                        <input
                            type="date"
                            name="pickupDate"
                            id="pickupDate"
                            className={`mt-1 block w-full border p-2 shadow-sm text-black ${formErrors.pickupDate ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.pickupDate}
                            onChange={handleChange}
                        />
                        {formErrors.pickupDate && <p className="text-red-500 text-xs mt-1">{formErrors.pickupDate}</p>}
                    </div>

                    {/* Drop-off Date */}
                    <div>
                        <label htmlFor="dropDate" className="block text-sm font-medium text-gray-700">Drop-off Date</label>
                        <input
                            type="date"
                            name="dropDate"
                            id="dropDate"
                            className={`mt-1 block w-full border p-2 shadow-sm text-black ${formErrors.dropDate ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.dropDate}
                            onChange={handleChange}
                        />
                        {formErrors.dropDate && <p className="text-red-500 text-xs mt-1">{formErrors.dropDate}</p>}
                    </div>

                    {/* Estimated Kilometers */}
                    <div>
                        <label htmlFor="kilometers" className="block text-sm font-medium text-gray-700">Estimated Kilometers</label>
                        <input
                            type="number"
                            name="kilometers"
                            id="kilometers"
                            className={`mt-1 block w-full border p-2 shadow-sm text-black ${formErrors.kilometers ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.kilometers}
                            onChange={handleChange}
                        />
                        {formErrors.kilometers && <p className="text-red-500 text-xs mt-1">{formErrors.kilometers}</p>}
                    </div>

                    {/* Your Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={`mt-1 block w-full border p-2 shadow-sm text-black ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`mt-1 block w-full border p-2 shadow-sm text-black ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Book Vehicle
                    </button>
                </form>
            </div>

            {/* Vehicle Details */}
            <div className="w-full md:w-1/2 bg-black text-white p-4">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">{vehicle.name}</h2>
                <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full mb-4" />
                <p>{vehicle.description}</p>
                <p>Fare: ${vehicle.farePricePerKm} / km</p>
            </div>

            {/* Terms & Conditions */}
            <div className="w-full mt-4 p-4 bg-gray-200 text-black border-y">
                <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
                <p>Tax inclusions and exclusions...</p>
                <p>Your Trip has a KM limit.<br />
                    If your usage exceeds this limit, you will be charged for the excess KM used.
                    We promote cleaner fuel and thus your rented vehicle can be a CNG vehicle. <br />
                    You may need to fill CNG once or more during your trip.
                    Please cooperate with the delivery executive.<br />
                    The Airport Entry/Parking charge, if applicable is not included in the fare and will be charged extra.<br />
                    Your trip includes one pick up in Pick-up city and one drop to destination city. It does not include within city travel.<br />
                    If your Trip has Hill climbs, vehicle AC may be switched off during such climbs.<br />
                    Damages to the vehicles will be thoroughly inspected, and investigation will take place.</p>
            </div>
        </div>
    );
}

export default VehicleDetailPage;
