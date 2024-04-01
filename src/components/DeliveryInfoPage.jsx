import React from 'react';
import { useLocation } from 'react-router-dom';

function DeliveryInfoPage() {
  const { state } = useLocation();
  const { vehicle, deliveryDetails } = state || {};

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Vehicle Details</h3>
        <p>Vehicle: {vehicle?.name}</p>
        <p>Description: {vehicle?.description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Driver's Details</h3>
        <p>Name: {deliveryDetails?.driverName}</p>
        <p>Contact: {deliveryDetails?.driverContact}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Estimated Time of Delivery</h3>
        <p>{deliveryDetails?.estimatedTime}</p>
      </div>
    </div>
  );
}

export default DeliveryInfoPage;
