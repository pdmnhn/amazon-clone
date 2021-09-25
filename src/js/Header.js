import "../css/Header.css";
import Logo from "../assets/white-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext";
import { useHistory } from "react-router-dom";
import { logOut, auth } from "./firebase.js";
import { types } from "./reducer.js";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const GUEST = "Guest";
  const { state, dispatch } = useContext(StateContext);
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(GUEST);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      setUsername(user.email);
      if (state.user !== user.email) {
        dispatch({ type: types.USER_SIGNED_IN, email: user.email });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const home = () => {
    history.push("/");
  };

  const checkOut = () => {
    history.push("/check-out");
  };

  const changeSignInState = () => {
    if (username !== GUEST) {
      logOut();
      dispatch({ type: types.SIGN_OUT });
      setUsername(GUEST);
    } else history.push("/login");
  };

  return (
    <nav className="nav-bar">
      <img onClick={home} id="logo" src={Logo} alt="Amazon" tabIndex="0" />
      <form className="search">
        <input name="search" type="text" />
        <button className="search-icon" type="submit">
          <SearchIcon htmlColor="black" />
        </button>
      </form>
      <div onClick={changeSignInState} className="user options" tabIndex="0">
        <span className="small-text">Hello {username}</span>
        <span className="bold">
          {username !== GUEST ? "Sign Out" : "Sign In"}
        </span>
      </div>
      <div className="orders options" tabIndex="0">
        <span className="small-text">Returns &amp;</span>
        <span className="bold">Orders</span>
      </div>
      <div className="prime options" tabIndex="0">
        <span className="small-text">Your</span>
        <span className="bold">Prime</span>
      </div>
      <div className="cart" onClick={checkOut} tabIndex="0">
        <ShoppingBasketIcon fontSize="large" />
        <span>{state.basket.length}</span>
      </div>
    </nav>
  );
};
export default Header;
