import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { UilStar } from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, product } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const Loading = () => {
    return (
      <>
        <div className="flex h-screen w-screen items-center justify-center 20">
          <button
            type="button"
            className="flex items-center rounded-lg px-4 py-2 text-gray-700"
            disabled
          >
            <svg
              className="mr-3 h-5 w-5 animate-spin text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="font-medium"> Loading... </span>
          </button>
        </div>
      </>
    );
  };

  const DisplayProduct = () => {
    return (
      <>
        <section className="text-gray-700 body-font overflow-hidden bg-white pb-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product.title}
                className="lg:w-96 object-cover object-center rounded border border-gray-200"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>

                <span className="flex items-center">
                  <UilStar size={20} className="" />
                  <UilStar size={20} className="" />
                  <UilStar size={20} className="" />
                  <UilStar size={20} className="" />
                  <UilStar size={20} className="" />
                  <span className="text-gray-600 ml-3">3 Reviews</span>
                </span>
                <p className="leading-relaxed pb-2">{product.description}</p>
                <hr />

                <div className="flex pt-2">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>

                  <button
                    className="flex ml-auto text-black bg-transparent border py-2 px-3 focus:outline-none
                  hover:text-white hover:bg-black rounded"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>

                  <Link
                    to="/cart"
                    className="flex ml-6 text-white bg-blue-700 border-0 py-2 px-1 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    Go to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div>
      <div className="container ">
        {loading ? <Loading /> : <DisplayProduct />}
      </div>
    </div>
  );
};

export default Product;
