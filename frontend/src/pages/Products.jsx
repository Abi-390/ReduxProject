import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const renderProduct = products.map((product) => {
    return (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>

        <h3>{product.description.slice(0, 10)}....</h3>
        <div>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  });
  return products.length > 0 ? <div className=" w-full
  min-h-full
  object-cover
  flex
  flex-col
  items-center
  justify-center
  gap-6
  mt-5
  sm:flex-col
  md:flex-row
  md:items-start
  md:justify-evenly
  md:gap-0">{renderProduct}</div> : "Loading...";
};

export default Products;
