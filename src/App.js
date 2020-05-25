import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Details from "./components/details/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/default/Default";
//import axios from 'axios';
//import Login from './components/login/Login';
import Modal from "./components/modal/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT LOGGED IN",
      user: {},
    };
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED IN",
      user: data,
    });
    console.log("Added");
  };

  handleLogout = () => {
    console.log("Remove");
    localStorage.removeItem("setItemUser");
    this.setState({
      loggedInStatus: "NOT LOGGED",
      user: {},
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        <Switch>
          <Route path="/details" component={Details}></Route>
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart {...props} loggedInStatus={this.state.loggedInStatus} />
            )}
          ></Route>
          <Route
            exact
            path="/"
            render={(props) => (
              <ProductList
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
