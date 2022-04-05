import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import TitleProvider from "./context/TitleContext";

ReactDOM.render(
  <TitleProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TitleProvider>,
  document.getElementById("root")
);
