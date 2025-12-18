import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { asyncCreateProduct } from "../../store/actions/productActions";

import { useDispatch } from "react-redux";
const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createProductHandler = (product) => {
    product.id = nanoid();

    console.log("product data", product);
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };

  return (
    <form
      onSubmit={handleSubmit(createProductHandler)}
      className="flex items-center justify-center flex-col mt-5"
    >
      <input
        className="border-b-2 outline-0 mb-5"
        type="text"
        placeholder="Enter product title"
        {...register("title")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="url"
        placeholder="Enter product image url"
        {...register("image")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="text"
        placeholder="Enter product category"
        {...register("category")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="number"
        placeholder="Enter product price"
        {...register("price")}
      />
      <textarea
        className="border-b-2 outline-0 mb-5"
        type="text"
        placeholder="Enter product description"
        {...register("description")}
      ></textarea>
      <button className="px-4 py-2 font-thin rounded bg-gray-400 text-white font-bold mt-3">
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
