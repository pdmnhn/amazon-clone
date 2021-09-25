import "../css/Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useContext } from "react";
import { StateContext } from "./StateContext";
import { types } from "./reducer";

const Product = ({ id, title, image, price, rating }) => {
  const { dispatch } = useContext(StateContext);

  const addToBasket = () => {
    dispatch({
      type: types.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="card">
      <div className="details">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        <div className="rating">
          {[...Array(Math.floor(rating)).keys()].map((index) => (
            <GradeIcon htmlColor="gold" key={index + 1} />
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="add-to-cart" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
