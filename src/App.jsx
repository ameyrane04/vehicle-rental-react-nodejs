import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import React from 'react';
import Layout from './Layout';
import HomePage from './components/HomePage.jsx'
import About from './components/About';
import Contact from './components/Contact'
import AuthForm from './components/AuthForm';
import VehicleDetailPage from './components/VehicleDetailPage';
import CategoriesPage from './components/CategoriesPage.jsx';
import FourWheelersPage from './components/FourWheelersPage.jsx';
import BikesPage from './components/BikesPage.jsx';
import BikeDetailsPage from './components/BikeDetailsPage.jsx';
import TrucksPage from './components/TrucksPage.jsx';
import TruckDetailsPage from './components/TruckDetailsPage.jsx';
import CheckoutPage from './components/CheckoutPage.jsx';
import DeliveryInfoPage from './components/DeliveryInfoPage.jsx';

// Import other page components 

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Login/Signup' element={<AuthForm />} />
        <Route path='vehicles/:id' element={<VehicleDetailPage  />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='four-wheelers' element={<FourWheelersPage />} />
        <Route path='bikes' element={<BikesPage/>}/>
        <Route path='bikes/:id' element={<BikeDetailsPage/>}/>
        <Route path='trucks' element={<TrucksPage/>}/>
        <Route path='trucks/:id' element={<TruckDetailsPage/>}/>
        <Route path='checkout' element={<CheckoutPage/>}/>
        <Route path='/delivery-info' element={<DeliveryInfoPage/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
