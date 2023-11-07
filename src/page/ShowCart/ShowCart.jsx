import { useContext, useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const ShowCart = () => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [user]);

  const handleDelete = (itemId) => {
    fetch(`http://localhost:5000/deleteOrder/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          setCart((prevCartItems) =>
            prevCartItems.filter((item) => item._id !== itemId)
          );
        }
      });
  };

  return (
    <div className="flex flex-wrap justify-center">
      <Helmet>
        <title>FASHION | Cart</title>
      </Helmet>
      <div>
        My Bookings:
      </div>
      {cart.length === 0 ? (
        <p>You have no service at cart</p>
      ) : (
        cart.map((service) => (
          <ServiceCart key={service.id} handleDelete={handleDelete} service={service} />
        ))
      )}
      <div>
      {/* My Pending works */}
      </div>
    </div>
  );
};

export default ShowCart;
