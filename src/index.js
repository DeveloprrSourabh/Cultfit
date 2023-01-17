import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import stores from "./stores";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={stores}>
  <BrowserRouter>
    <React.StrictMode>
    <ProSidebarProvider>
      
      <App />
</ProSidebarProvider>
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
