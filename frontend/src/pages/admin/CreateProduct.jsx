import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    reset();
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="w-full max-w-lg bg-gradient-to-l from-gray-200 to-gray-100
 border border-gray-200 rounded-lg shadow-md p-6 space-y-5"
      >
        <h2 className="text-2xl font-light text-gray-900 text-center">
          Create Product
        </h2>

        
        <input
          className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="text"
          placeholder="Product title"
          {...register("title")}
        />

        
        <input
          className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="url"
          placeholder="Image URL"
          {...register("image")}
        />

        
        <input
          className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="text"
          placeholder="Category"
          {...register("category")}
        />

        
        <input
          className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="number"
          placeholder="Price"
          {...register("price")}
        />

       
        <textarea
          className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition resize-none"
          rows="3"
          placeholder="Description"
          {...register("description")}
        ></textarea>

       
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
