import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";

const RoutesLayout = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<SingleProduct />} />
   </Routes>
  </>
 );
};

export default RoutesLayout;
