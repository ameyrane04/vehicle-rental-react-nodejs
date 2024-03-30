import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TrucksPage() {
    const trucks = useSelector(state => state.trucks);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayTrucks, setDisplayTrucks] = useState(trucks);

    useEffect(() => {
        setDisplayTrucks(trucks);
    }, [trucks]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (!term) {
            setDisplayTrucks(trucks);
        } else {
            const filteredTrucks = trucks.filter(truck =>
                truck.name.toLowerCase().includes(term.toLowerCase())
            );
            setDisplayTrucks(filteredTrucks);
        }
    };

    return (
        <div className="bg-gray-800 text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Trucks</h1>
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search trucks..."
                    className="p-2 w-full rounded-md text-black"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayTrucks.map((truck) => (
                    <div key={truck.id} className="bg-gray-700 border border-gray-600 p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
                        <img src={truck.imageUrl} alt={truck.name} className="object-cover rounded-lg mb-4 w-full h-64" />
                        <h2 className="text-xl font-semibold">{truck.name}</h2>
                        <p>{truck.description}</p>
                        <span className="text-sm text-gray-400">{truck.type} - ${truck.farePricePerKm}/KM</span>
                        <NavLink
                            to={`/trucks/${truck.id}`}
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

export default TrucksPage;
