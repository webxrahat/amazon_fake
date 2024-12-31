import React from "react";
import { useNavigate } from "react-router";

const ShowProducts = ({ item }) => {
 const { title, images, id } = item;
 //  console.log(images[0]);
 const navigate = useNavigate();
 // Navigate(`/product/${id}`)

 return (
  <div>
   <img src={images[0]} alt={title} className="w-72 h-72" />
   <h2>{title}</h2>
   <button
    onClick={() => navigate(`/product/${id}`)}
    className="bg-blue-500 w-full py-2"
   >
    Details
   </button>
  </div>
 );
};

export default ShowProducts;
