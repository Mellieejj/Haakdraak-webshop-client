import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
// import { loadReCaptcha } from "react-recaptcha-google";
import store from "./store";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";
import ProductsListContainer from "./components/ProductsListContainer";
import ProductDetailsContainer from "./components/ProductDetailsContainer";
import CartContainer from "./components/CartContainer";
import ContactContainer from "./components/ContactContainer";
import OrderDetailsContainer from "./components/adminComponents/OrderDetailsContainer";
import AdminPage from "./components/adminComponents/AdminPage";
import OrdersContainer from "./components/adminComponents/OrdersContainer";

import "./style/global.scss";

export default function App() {
  // useEffect(()=> {
  //   loadReCaptcha();
  // },[])

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Route path="/" component={NavBar} />
        {/* <Route exact path="/producten" component={ProductsListContainer} />
        <Route exact path="/producten/:productId" component={ProductDetailsContainer} />
        <Route exact path="/admin/orders" component={OrdersContainer} />
        <Route exact path="/admin/orders/:orderId" component={OrderDetailsContainer} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/contact" component={ContactContainer} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/" component={Home} /> */}
        <Route path="/" component={Footer} />
      </div>
    </Provider>
  );
}
