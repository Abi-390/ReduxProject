import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {product:{products},
    user:{users}
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      category: product?.category,
      description: product?.description,
      price: product?.price,
    },
  });

  const dispatch = useDispatch();

  const updateProductHandler = (data) => {
    dispatch(asyncUpdateProduct(id, data));
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  if (!product) return "Loading...";

  return (
    <div className="min-h-screen bg-white px-6 py-16 space-y-16">

      
      <div className="flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-lg border shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="flex items-center justify-center bg-white rounded-lg p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-96 object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-light text-gray-900">
              {product.title}
            </h1>

            <p className="text-sm uppercase tracking-widest text-gray-500">
              {product.category}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-medium text-gray-900 mt-4">
              ${product.price}
            </p>

            <button className="mt-6 w-fit px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center">
       {users&&users?.isAdmin&&(<form
          onSubmit={handleSubmit(updateProductHandler)}
          className="w-full max-w-lg bg-gradient-to-l from-gray-200 to-gray-100
          border border-gray-200 rounded-lg shadow-md p-6 space-y-5"
        >
          <h2 className="text-2xl font-light text-gray-900 text-center">
            Edit Product
          </h2>

          <input
            className="w-full border border-gray-400 rounded px-3 py-2"
            type="text"
            placeholder="Product title"
            {...register("title")}
          />

          <input
            className="w-full border border-gray-400 rounded px-3 py-2"
            type="url"
            placeholder="Image URL"
            {...register("image")}
          />

          <input
            className="w-full border border-gray-400 rounded px-3 py-2"
            type="text"
            placeholder="Category"
            {...register("category")}
          />

          <input
            className="w-full border border-gray-400 rounded px-3 py-2"
            type="number"
            placeholder="Price"
            {...register("price")}
          />

          <textarea
            className="w-full border border-gray-400 rounded px-3 py-2 resize-none"
            rows="3"
            placeholder="Description"
            {...register("description")}
          ></textarea>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Update
            </button>

            <button
              type="button"
              onClick={deleteHandler}
              className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
            >
              Delete
            </button>
          </div>
        </form>)}
      </div>
    </div>
  );
};

export default ProductDetails;
