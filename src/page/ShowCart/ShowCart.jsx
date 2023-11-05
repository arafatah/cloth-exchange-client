import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import { Helmet } from "react-helmet-async";

const ShowCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
        <Helmet>
      <title>FASHION | Cart</title>
      </Helmet>
      {cart.length === 0 ? (
        <p>You have no service at cart</p>
      ) : (
        cart.map((service) => (
          <ServiceCart key={service.id} service={service} />
        ))
      )}
    </div>
  );
};

export default ShowCart;
