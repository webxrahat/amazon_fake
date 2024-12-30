import React from "react";

const ShowProducts = ({ item }) => {
 const { title, images } = item;
 //  console.log(images[0]);

 return (
  <div>
   <img src={images[0]} alt={title} className="w-72" />
   <h2>{title}</h2>
  </div>
 );
};

export default ShowProducts;
