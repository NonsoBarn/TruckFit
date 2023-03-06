import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const ProductsSection = () => {
  const { data, loading, filter, setFilter } = useFetch(
    "https://fakestoreapi.com/products/"
  );

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const Loading = () => {
    return (
      <>
        <div className="flex h-screen w-screen items-center justify-center">
          <button
            type="button"
            className="flex items-center rounded-lg px-4 py-2 text-gray-700"
            disabled
          >
            <svg
              className="mr-3 h-5 w-5 animate-spin text-teal-500"
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

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const DisplayProduct = () => {
    return (
      <>
        <div className="buttons flex justify-center pb-14">
          <button
            className=" px-4 text-black hover:text-blue-700  active:text-blue-700"
            onClick={() => setFilter(data)}
          >
            All
          </button>

          <button
            className=" px-4 text-black hover:text-blue-700  active:text-blue-700"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </button>

          <button
            className=" px-4 text-black hover:text-blue-700  active:text-blue-700"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button
            className=" px-4 text-black hover:text-blue-700  active:text-blue-700"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className=" px-4 text-black hover:text-blue-700  active:text-blue-700"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-48 xl:px-20  sm:w-3/5 sm:px-5 sm:ml-40 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-48 xl:gap-y-10 xl:w-full w-1/2  ml-32 lg:w-4/5  lg:px-10  md:ml-30 lg:ml-28 xl:ml-0 place-items-center">
            {filter.map((product) => {
              return (
                <div
                  className="w-80 bg-white shadow-lg rounded"
                  key={product.id}
                >
                  <Link to={`/products/${product.id}`}>
                    <img
                      className="h-48 pl-20"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                  <div className="p-4 flex flex-col items-center">
                    <p className="text-gray-400 font-light text-xs text-center">
                      {product.category}
                    </p>
                    <h1 className="text-gray-800 text-center mt-1">
                      {product.title}
                    </h1>
                    <p class="text-center font-bold text-gray-800 mt-5">
                      ${product.price}
                    </p>
                    {/* add to cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <section>
      <div className="py-10">
        <h2 className=" pt-10 md:pt-20 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Latest Product
        </h2>
        <hr />
      </div>

      <div>{loading ? <Loading /> : <DisplayProduct />}</div>
    </section>
  );
};

export default ProductsSection;
