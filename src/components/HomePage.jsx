import React from 'react';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // Assuming Framer Motion is added for animations
import ReviewsSection from './ReviewsSection';

import('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');


function HomePage() {
  const vehicles = useSelector(state => state.vehicles);
  const images = [
    "https://www.cars-4-hire.co.za/images/slides/banner1.jpg",
    "https://gulliveradventures.com/wp-content/uploads/2018/06/bike-on-rent-manali-price.jpg",
    "https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711065600&semt=ais"

  ];

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen p-6 text-brandYellow bg-brandBlack">
        <Slide duration={3000} indicators={true} autoplay={true}>
          <div className="each-slide-effect">
            <div className='flex items-center justify-center h-[350px] bg-cover' style={{ 'backgroundImage': `url(${images[0]})`}}>
              {/* <span className='p-5 text-xl bg-gray-200 text-center'>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div className='flex items-center justify-center h-[350px] bg-cover' style={{ 'backgroundImage': `url(${images[1]})` }}>
              {/* <span className='p-5 text-xl bg-gray-200 text-center'>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div className='flex items-center justify-center h-[350px] bg-cover' style={{ 'backgroundImage': `url(${images[2]})`,'backgroundSize': 'contain' }}>
              {/* <span className='p-5 text-xl bg-gray-200 text-center'>Slide 3</span> */}
            </div>
          </div>
        </Slide>

        {/* New Services Section */}
        <div className="my-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Service Card */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-sync-alt fa-3x mb-3"></i>
              <h3 className="text-2xl font-semibold">24/7 Support</h3>
              <p>We offer round-the-clock support to ensure you're always covered.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-car-side fa-3x mb-3"></i>
              <h3 className="text-2xl font-semibold">Wide Range of Vehicles</h3>
              <p>Choose from a wide variety of vehicles to suit your needs.</p>
            </motion.div>
            {/* Used by Millions */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-users fa-3x mb-3"></i>
              <h3 className="text-2xl font-semibold">Used by Millions</h3>
              <p>Join the community of millions who trust us for their vehicle rental needs.</p>
            </motion.div>

            {/* Easy and Fast Booking */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-clock fa-3x mb-3"></i>
              <h3 className="text-2xl font-semibold">Easy and Fast Booking</h3>
              <p>Our streamlined booking process makes renting a vehicle quick and hassle-free.</p>
            </motion.div>

            {/* Affordable Pricing */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-tags fa-3x mb-3"></i>
              <h3 className="text-2xl font-semibold">Affordable Pricing</h3>
              <p>Enjoy competitive pricing and great deals on a wide range of vehicles.</p>
            </motion.div>

            {/* Verified and Trusted */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gray-800 rounded-lg">
              <i className="fas fa-badge-check fa-3x mb-3"></i>
              <h3 className="text-2xl font-semibold">Verified and Trusted</h3>
              <p>All vehicles are thoroughly inspected and verified for your safety and trust.</p>
            </motion.div>
            {/* Repeat for other services */}
          </div>

        </div>
        <div className="container mx-auto p-4 bg-brandBlack text-brandYellow">
          <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="border p-4 flex flex-col">
                <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-48 object-cover mb-2" />
                <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                <p className="my-2">Fare: ${vehicle.farePricePerKm} / km</p>
                <NavLink
                  to={`/vehicles/${vehicle.id}`}
                  className="mt-auto w-96 bg-brandYellow text-black p-2 hover:bg-gray-900 hover:text-white rounded-lg flex justify-center items-center"
                >
                  Rent
                </NavLink>

              </div>
            ))}
          </div>
        </div>

        <ReviewsSection />
      </motion.div>
    </>
  );
}

export default HomePage;
