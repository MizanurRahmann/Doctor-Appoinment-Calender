import React from "react";
import ReactDOM from "react-dom/client";
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
// COMPONENTS
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// ROUTER
import { BrowserRouter } from "react-router-dom";
// REDUX STORE
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
