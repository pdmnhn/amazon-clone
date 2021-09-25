import { useContext } from "react";
import { StateContext } from "./StateContext.js";
import GradeIcon from "@material-ui/icons/Grade";
import { types } from "./reducer";
import "../css/CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const { dispatch } = useContext(StateContext);

  const removeFromBasket = () => {
    dispatch({
      type: types.REMOVE_FROM_BASKET,
      itemId: id,
    });
  };

  return (
    <div className="checkout-card">
      <img src={image} alt="" />
      <div className="checkout-details">
        <p className="checkout-title">{title}</p>
        <p className="checkout-price">{price}</p>
        <div className="checkout-rating">
          {[...Array(Math.floor(rating)).keys()].map((index) => (
            <GradeIcon htmlColor="gold" key={index + 1} />
          ))}
        </div>
        <button className="remove-from-cart" onClick={removeFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
