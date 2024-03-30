// src/features/bikes/bikesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // Placeholder data for bikes
  { id: 1, name: "BMW", imageUrl: "https://s1.cdn.autoevolution.com/images/news/bmw-bikes-to-sell-in-india-25773_1.jpg", farePricePerKm: "0.50", description: "SUPERBIKE OF SUPERLATIVES." },
  { id: 2, name: "Kawasaki", imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/171297/z900-2024-right-front-three-quarter.jpeg?isig=0&q=80", farePricePerKm: "0.30", description: "REVEAL YOUR RACING ATTITUDE"},
  // Add more bikes as needed
];

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setBikes: (state, action) => {
      return action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setBikes } = bikesSlice.actions;

export default bikesSlice.reducer;
