import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./styles.css";
import { store } from "./store/store";
import { setupAxios } from "./utils/axios.interceptor";

setupAxios();

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
