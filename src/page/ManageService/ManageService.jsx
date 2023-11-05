import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageService = () => {
  const services = useLoaderData();

  const [cartItems, setCartItems] = useState(services);

  const handleDelete = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${itemId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              setCartItems((prevCartItems) =>
                prevCartItems.filter((item) => item._id !== itemId)
              );
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  console.log(services);
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cartItems.map((serviceDetail, index) => (
          <ServiceCard
            key={index}
            serviceDetail={serviceDetail}
            handleDelete={handleDelete}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
