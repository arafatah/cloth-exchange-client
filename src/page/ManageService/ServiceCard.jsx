import { useState } from "react";
import Swal from "sweetalert2";

const ServiceCard = ({ serviceDetail, handleDelete }) => {
  const { _id, yourName, serviceName, description, price, serviceArea, image } =
    serviceDetail;
 

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src={image} alt="" />

        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2">{serviceName}</h3>
          <p className="text-gray-600">${price}</p>
        </div>

        <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit
          </button>

          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
