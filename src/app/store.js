import {configureStore} from '@reduxjs/toolkit';
import vehiclesReducer from '../features/vehicles/vehiclesSlice'
import trucksReducer from '../features/Trucks/trucksSlice'
import bikesReducer from '../features/Bikes/bikesSlice'


export const store = configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        trucks: trucksReducer,
        bikes: bikesReducer,
    }
});