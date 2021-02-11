import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./style/global.scss";
import App from "./App";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { search, pathname } = useLocation();

  useEffect(() => {
    console.log("pathname", search)
    window.scrollTo(0, 0);
  }, [search, pathname]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
