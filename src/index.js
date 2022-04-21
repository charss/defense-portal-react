import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "styles/global.scss";
import App from "./App";
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
