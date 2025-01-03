import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import SimpleReducer from "../components/SimpleReducer";
import RepeatReducer from "../components/RepeatReducer";

const RoutesLayout = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<RepeatReducer />} />
    <Route path="/product/:id" element={<SingleProduct />} />
   </Routes>
  </>
 );
};

export default RoutesLayout;
