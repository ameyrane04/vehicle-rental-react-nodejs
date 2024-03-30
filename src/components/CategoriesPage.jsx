import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoriesPage() {
  // Placeholder categories data
  const categories = [
    {
      id: 'bikes',
      name: '2 Wheelers',
      description: 'Explore our range of bikes and scooters.',
      imageUrl: 'https://wallpaperboat.com/wp-content/uploads/2020/07/13/49859/motorcycle-16.jpg'
    },
    {
      id: 'four-wheelers',
      name: '4 Wheelers',
      description: 'Find the perfect car for your next trip.',
      imageUrl: '../images/car.jpg' 
    },
    {
      id: 'trucks',
      name: 'Trucks',
      description: 'Reliable trucks for heavy-duty tasks.',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/939/651/740/transport-optimus-prime-vehicle-truck-wallpaper-preview.jpg'
    },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Vehicle Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-700 border border-gray-600 p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
              <img src={category.imageUrl} alt={category.name} className="object-cover rounded-lg mb-4 w-full h-64" />
              <h2 className="text-2xl font-semibold mt-2">{category.name}</h2>
              <p className="mb-4">{category.description}</p>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-6 rounded transition duration-150 ease-in-out">
                <NavLink to={`/${category.id}`} className='w-full'>Explore {category.name} </NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
