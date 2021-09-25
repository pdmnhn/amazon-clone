import "../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import { StateProvider } from "./StateContext";
import { initialState, reducer } from "./reducer.js";
import Login from "./Login.js";
import Checkout from "./Checkout.js";
const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/check-out">
            <Checkout />
          </Route>
          <Route path="/">
            <div className="container">
              <Header className="header" />
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
