// src/features/vehicles/vehiclesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// const initialState = [

// ];
export const vehiclesSlice = createSlice({


  name: 'vehicles',
  initialState: [
    { id: 1, name: "Car Model A", imageUrl: "https://www.shutterstock.com/image-photo/new-car-sedan-type-modern-600nw-2295122863.jpg", farePricePerKm: "0.70" },
    { id: 2, name: "Car Model B", imageUrl: "https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.webp?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc=", farePricePerKm: "0.50" },
    { id: 3, name: "Car Model A", imageUrl: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80", farePricePerKm: "0.80" },
    { id: 4, name: "Car Model B", imageUrl: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80", farePricePerKm: "0.40" },
    { id: 5, name: "Car Model A", imageUrl: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80", farePricePerKm: "1.0" },
    { id: 6, name: "Car Model A", imageUrl: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80", farePricePerKm: "0.90" },
    // Add more vehicles as needed
  ],
  reducers: {
    setVehicles: (state, action) => {
      // Directly set the state to action.payload assuming payload is an array of vehicles
      return action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
