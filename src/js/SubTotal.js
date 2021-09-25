import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext.js";
import "../css/SubTotal.css";

const SubTotal = () => {
  const { state } = useContext(StateContext);
  const [total, setTotal] = useState("0");
  useEffect(() => {
    const sum = state.basket.reduce(
      (partial_sum, a) => partial_sum + a.price,
      0
    );
    setTotal(Number(sum).toFixed(2));
  }, [state.basket]);

  return (
    <div className="subtotal">
      <div className="price-total">
        Subtotal ({state.basket.length} items): <b>${total}</b>
      </div>
      <div className="gift-container">
        <input type="checkbox" id="gift" />
        <label value="gift" htmlFor="gift">
          This order contains a gift
        </label>
      </div>
      <button className="checkout">Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
