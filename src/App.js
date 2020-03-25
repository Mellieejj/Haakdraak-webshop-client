import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    // <Provider>
    <div className="wrapper">
      <Route path="/" component={NavBar} />
      
    </div>
    // </Provider>
  );
}

export default App;
