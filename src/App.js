import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./Containers/Cart/Cart";
import Footer from "./Containers/Footer/Footer";
import Header from "./Containers/Header/Header";
import { Login } from "./Containers/Login/Login";
import ProductDetails from "./Containers/ProductDetails/ProductDetails";
import ProductPage from "./Containers/ProductList/ProductList";
import { SignUp } from "./Containers/SignUp/SignUp";

function App() {

  useEffect(() => {
    localStorage.setItem('user',JSON.stringify([]));
    localStorage.setItem('cart',JSON.stringify([]));
    return () => {
      localStorage.clear();
    }
  },[])

  return (
    <div className="body">
      <header><Header/></header>
      <article>
        <Routes>
          <Route path="/" exact element={<ProductPage/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<div>Page does not exists</div>}/>
        </Routes>
      </article>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;