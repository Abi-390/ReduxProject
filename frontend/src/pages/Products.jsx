import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const renderProduct = products.map((product) => {
    return (
      <div
        className="w-full max-w-sm border border-gray-600 rounded-lg p-4 flex flex-col gap-3 shadow-2xl"
        key={product.id}
      >
        <div className="w-full h-48 flex items-center justify-center bg-white rounded overflow-hidden group">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>

        <h1 className="font-medium text-lg">{product.title}</h1>
        <h2 className="text-sm text-gray-700">{product.category}</h2>

        <p className="text-sm text-gray-600">
          {product.description.slice(0, 60)}...
        </p>

        <div className="flex items-center justify-between mt-auto">
          <p className="font-semibold">${product.price}</p>
          <button className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return products.length > 0 ? (
    <div
      className=" w-full
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
  md:flex-wrap
  md:items-start
  md:justify-evenly
  md:gap-10"
    >
      {renderProduct}
    </div>
  ) : (
    "Loading..."
  );
};

export default Products;
