import Logo from "../assets/black-logo.svg";
import "../css/Login.css";
import { useHistory } from "react-router-dom";
import { auth, signIn, signUp } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { StateContext } from "./StateContext";
import { types } from "./reducer.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);
  const history = useHistory();
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    if (user) {
      history.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const home = () => {
    history.push("/");
  };

  const onSignIn = () => {
    if (password.length === 0) {
      alert("Enter a password");
      return;
    }
    if (signIn(email, password)) {
      dispatch({
        type: types.USER_SIGNED_IN,
        email: email,
      });
    }
  };

  const onSignUp = () => {
    if (password.length === 0) {
      alert("Enter a password");
      return;
    }
    if (signUp(email, password)) {
      dispatch({
        type: types.USER_SIGNED_IN,
        email,
      });
    }
  };

  return (
    <div className="login-page">
      <input type="image" onClick={home} id="logo" src={Logo} alt="Amazon" />
      <div className="login-container">
        <h1 className="sign-in">Sign-in</h1>
        <form className="login-details">
          <label htmlFor="email">
            <div>E-mail</div>
            <input
              className="width"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label htmlFor="password">
            <div>Password</div>
            <input
              className="width"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </form>
        <button className="width" onClick={onSignIn}>
          Sign In
        </button>
        <p className="width">
          By signing-in you agree to the Amazon Fake Clone Conditions of Use and
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button className="width" onClick={onSignUp}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
