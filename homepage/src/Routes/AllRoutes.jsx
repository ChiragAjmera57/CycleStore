import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
// import { Login } from "../Pages/Accountpage/LoginPage";
import ProductPage from "../Pages/Productpage/ProductPage";
import Detailspage from "../Pages/Homepage/Detailspage";
import CartPage from "../Pages/Cartpage/Cartpage";
import Wishlist from "../Components/Wishlist"
import PaymentPage from "../Pages/Checkoutpage/payment";
import Protected from "./Protected";
import Login from "../Pages/Login";
import Signup from "../Pages/SignUp";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productPage" element={<ProductPage/>}/>
      <Route path="/productPage/details/:id" element={<Detailspage/>}/>
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/wishlist" element= {<Wishlist/> }/>
      <Route path="/payment" element={<PaymentPage/>}/>
      <Route path="*" element={<Homepage/>}/>

      {/* Extra Routes */}{/* Not working properly */}
      {/* <Route path="/productPage/Mountain" element={<ProductPage Mountain/>} />
      <Route path="/productPage/Road" element={<ProductPage Road/>} />
      <Route path="/productPage/Active" element={<ProductPage Active/>} />
      <Route path="/productPage/Kids" element={<ProductPage Kids/>} />
      <Route path="/productPage/Electric" element={<ProductPage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
