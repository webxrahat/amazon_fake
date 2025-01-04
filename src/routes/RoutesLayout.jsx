import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import SimpleReducer from "../components/SimpleReducer";
import RepeatReducer from "../components/RepeatReducer";
import ObjectReducer from "../components/ObjectReducer";

const RoutesLayout = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<ObjectReducer />} />
    <Route path="/product/:id" element={<SingleProduct />} />
   </Routes>
  </>
 );
};

export default RoutesLayout;
