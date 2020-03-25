import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";

import "./App.css";

function App() {
  return (
    // <Provider>
    <div className="wrapper">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route path="/" component={Footer} />
    </div>
    // </Provider>
  );
}

export default App;
