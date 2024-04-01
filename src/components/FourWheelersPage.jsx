import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
// Placeholder data for vehicles in the 4-wheelers category


function FourWheelersPage() {
  const navigate = useNavigate();
  const vehicles = useSelector(state => state.vehicles);
  const [searchTerm, setSearchTerm] = useState('');
  const {isAuthenticated} = useAuth();
  // A copy of vehicles to filter for search without altering the original state
  const [displayVehicles, setDisplayVehicles] = useState(vehicles);

  useEffect(() => {
    setDisplayVehicles(vehicles);
  }, [vehicles])

  // Handle search functionality
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (!term) {
      setDisplayVehicles(vehicles);
    } else {
      const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.name.toLowerCase().includes(term.toLowerCase())
      );
      setDisplayVehicles(filteredVehicles);
    }
  };

  const handleRent = (vehicleId) => {
    if (!isAuthenticated) {
      navigate('/Login/Signup'); // Redirect to the login/signup page
    } else {
      navigate(`/vehicles/${vehicleId}`); // Proceed to vehicle detail page
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">4 Wheelers</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search vehicles..."
          className="p-2 w-full rounded-md text-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-gray-700 border border-gray-600 p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
            <img src={vehicle.imageUrl} alt={vehicle.name} className="object-cover rounded-lg mb-4 w-full h-64" />
            <h2 className="text-xl font-semibold">{vehicle.name}</h2>
            <p>{vehicle.description}</p>
            <span className="text-sm text-gray-400">{vehicle.type} - ${vehicle.farePricePerKm}/KM</span>
            <button
              onClick={() => handleRent(vehicle.id)}
              className="mt-auto w-96 bg-black text-white p-2 hover:bg-gray-900 rounded-lg flex justify-center items-center"
            >
              Rent
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default FourWheelersPage;
