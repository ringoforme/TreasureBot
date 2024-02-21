import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Storefront from "./pages/Storefront";
import ProductPageTemp from "./pages/ProductPageTemp"; //  this is the name of product page component
import LoginPage from "./pages/user/LoginPage";
import SignUpPage from "./pages/user/SignUpPage";
import Profile from "./pages/user/profile";
import ProductPage from "./pages/ProductPage";
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* <Header />  */}
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/productTemp" element={<ProductPageTemp />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/storefront" element={<Storefront />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
