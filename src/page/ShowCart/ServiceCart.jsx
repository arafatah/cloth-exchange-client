import React from "react";

const ServiceCart = ({ service, handleDelete }) => {
console.log(service);
  return (
    <div className="bg-white rounded-lg shadow-md w-64 p-4 m-4">
      
      <img
        src={service.image} // Replace with your service's image source
        alt={service.serviceName}
        className="w-full h-32 object-cover object-center rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4">{service.serviceName}</h2>
      <p className="text-gray-500 mt-2">{service.description}</p>
      <div className="mt-4">
        <p className="text-xl font-semibold text-blue-600">${service.price}</p>
      </div>
      <button className="btn text-red-700 btn-outline btn-sm mt-4" onClick={()=>handleDelete(service._id)}>Cancel Booking</button>
    </div>
  );
};

export default ServiceCart;
