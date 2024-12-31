import React from "react";
import { useNavigate } from "react-router";

const ShowSingleProduct = ({ singleProduct }) => {
 const { title, description, images } = singleProduct;

 const navigate = useNavigate();

 //  console.log(singleProduct);

 return (
  <div>
   <h1>{title}</h1>
   <h1>{description}</h1>
   <img src={images?.[0]} alt={title} className="w-72 h-72" />
   <button className="bg-blue-400 px-3 py-1" onClick={() => navigate(-1)}>
    Back
   </button>
  </div>
 );
};

export default ShowSingleProduct;
