import React, { useEffect, useState } from "react";
import ShowProducts from "../components/ShowProducts";

const Home = () => {
 const [listProducts, setListProducts] = useState([]);
 const items = listProducts?.products;

 useEffect(() => {
  fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) => setListProducts(data));
 }, []);

 return (
  <div className="grid grid-cols-6">
   {items && items.map((item, idx) => <ShowProducts item={item} key={idx} />)}
  </div>
 );
};

export default Home;
