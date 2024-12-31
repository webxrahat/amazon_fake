import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShowSingleProduct from "../components/ShowSingleProduct";

const SingleProduct = () => {
 const [singleProduct, setSingleProduct] = useState([]);

 const params = useParams();

 //  console.log(params);

 useEffect(() => {
  fetch(`https://dummyjson.com/products/${params.id}`)
   .then((res) => res.json())
   .then((data) => setSingleProduct(data));
 }, []);

 return (
  <div>
   <ShowSingleProduct singleProduct={singleProduct} />
  </div>
 );
};

export default SingleProduct;
