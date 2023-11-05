import { useEffect, useState } from "react";


const ShowCart = () => {
 const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            setCart(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    ,[])

    return (
        <div>
            {cart.length}
        </div>
    );
};

export default ShowCart;