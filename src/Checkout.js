import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Jupiter_21/phase_4/cat_page/150x90_Stripe2.jpg"
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email.split("@gmail.com")}</h3>
        </div>

        <div className="checkout__tile">
          <h2 className="checkout__title"> Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
