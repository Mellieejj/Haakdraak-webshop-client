import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { loadReCaptcha } from "react-recaptcha-google";
import store from "./store";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";
import ProductsListContainer from "./components/ProductsListContainer";
import ProductDetailsContainer from "./components/ProductDetailsContainer";
import CartContainer from "./components/CartContainer";
import ContactContainer from "./components/ContactContainer";

import "./App.css";

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Route path="/" component={NavBar} />
          <Route exact path="/producten" component={ProductsListContainer} />
          <Route
            exact
            path="/producten/:productId"
            component={ProductDetailsContainer}
          />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={Footer} />
        </div>
      </Provider>
    );
  }
}

export default App;
