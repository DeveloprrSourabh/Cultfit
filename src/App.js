import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Fitness from "./components/Fitness";
import Care from "./components/Care";
import Mind from "./components/Mind";
import Store, { CartContext } from "./components/Store";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { Sidebar } from "react-pro-sidebar";

  const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/fitness" element={<Fitness />} />
        <Route exact path="/care" element={<Care />} />
        <Route exact path="/mind" element={<Mind />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="cultsport/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
