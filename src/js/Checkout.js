import { useContext, useEffect } from "react";
import { StateContext } from "./StateContext";
import { useLocation } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct.js";
import SubTotal from "./SubTotal.js";
import Banner from "../assets/checkout-page-banner.jpg";
import Header from "./Header.js";
import "../css/Checkout.css";

const Checkout = () => {
  const { state } = useContext(StateContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="checkout-page">
      <div className="header-component">
        <Header />
      </div>
      <div className="top">
        <div className="top-left">
          <img src={Banner} className="checkout-page-banner" alt="" />
          <div>
            <h3>Hello, {state.user ? state.user : "Guest"}</h3>
            <h2>Your Shopping Cart</h2>
          </div>
        </div>
        <div className="top-right">
          <SubTotal />
        </div>
      </div>
      <div>
        {state.basket.map((item, index) => {
          const { id, title, image, price, rating } = item;
          return (
            <CheckoutProduct
              key={index}
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
