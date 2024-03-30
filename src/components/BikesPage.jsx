import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BikesPage() {
  const bikes = useSelector(state => state.bikes);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayBikes, setDisplayBikes] = useState(bikes);

  useEffect(() => {
    setDisplayBikes(bikes);
  }, [bikes]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (!term) {
      setDisplayBikes(bikes);
    } else {
      const filteredBikes = bikes.filter(bike =>
        bike.name.toLowerCase().includes(term.toLowerCase())
      );
      setDisplayBikes(filteredBikes);
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Bikes</h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search bikes..."
          className="p-2 w-full rounded-md text-black"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayBikes.map((bike) => (
          <div key={bike.id} className="bg-gray-700 border border-gray-600 p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
            <img src={bike.imageUrl} alt={bike.name} className="object-cover rounded-lg mb-4 w-full h-64" />
            <h2 className="text-xl font-semibold">{bike.name}</h2>
            <p>{bike.description}</p>
            <span className="text-sm text-gray-400">{bike.type} - ${bike.farePricePerKm}/KM</span>
            <NavLink
              to={`/bikes/${bike.id}`}
              className="mt-auto w-96 bg-black text-white p-2 hover:bg-gray-900 rounded-lg flex justify-center items-center"
            >
              Rent
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikesPage;
