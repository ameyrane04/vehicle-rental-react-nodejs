// src/features/trucks/trucksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // Placeholder data for trucks
  { id: 1, name: "Carrier Truck", imageUrl: "https://fleetnetamerica.com/wp-content/uploads/sites/2/2017/07/Semi-Truck-Fact-scaled.jpg", farePricePerKm: "1.20" },
  { id: 2, name: "Ford XL", imageUrl: "https://imgix.ranker.com/list_img_v2/2514/282514/original/full-list-of-ford-trucks-u3", farePricePerKm: "1.00" },
  // Add more trucks as needed
];

export const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    setTrucks: (state, action) => {
      return action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setTrucks } = trucksSlice.actions;

export default trucksSlice.reducer;
