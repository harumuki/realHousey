import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HouseProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <HouseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HouseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
