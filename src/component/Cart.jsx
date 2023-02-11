import { UilMinus } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/features/cartSlice";

const shippingCost = 10.0;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="container mx-auto mt-10">
        {cart.cartItems.length === 0 ? (
          // empty cart
          <div className="cart-empty flex flex-row min-h-screen justify-center items-center">
            <div className="text-center max-w-sm p-6 bg-white ">
              <UilShoppingCartAlt
                size={98}
                className="inline-flex items-center "
              />

              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Your Cart is Currently Empty
              </h3>

              <p className="mb-3 font-light  text-gray-500 ">
                Before proceeding to check out, add some product to your cart.
                You wil find a lot of interesting products on our "Product" page
              </p>
              <Link to="/">
                <button
                  href="#"
                  className="border p-2 mt-2 inline-flex items-center bg-blue-600 text-white hover:bg-blue-700"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        ) : (
          /* Cart conataining */
          <div className="cart containing">
            {/* grid2 */}

            <div className=" grid md:grid-cols-2 grid-cols-1">
              <div className="w-full bg-white md:px-0 px-10 py-16">
                {/* Shopping cart */}
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">
                    {cart.cartTotalQuantity} Items
                  </h2>
                </div>

                <div className="">
                  <div className="grid grid-cols-4 gap-28 pt-5">
                    <h3 className=" font-semibold text-gray-600 text-xs uppercase w-2/5">
                      Product Details
                    </h3>

                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5">
                      Quantity
                    </h3>

                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                      Price
                    </h3>

                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                      Total
                    </h3>
                  </div>
                  {cart.cartItems?.map((cartItem) => (
                    <div key={cartItem.id}>
                      <div className="grid grid-cols-4 gap-28 pt-10">
                        <div className="productdetails">
                          <div className="grid grid-cols-2 gap-10 sm:w-2/3  ">
                            <div className="h-24 w-24">
                              <img
                                className="  w-10"
                                src={cartItem.image}
                                alt={cartItem.title}
                              />
                            </div>
                            {/* description */}
                            <div className="grid grid-col justify-between ml-4 ">
                              <span className=" font-bold text-sm">
                                {cartItem.title.substring(0, 20)}
                              </span>
                              <span className="text-blue-600 text-xs font-medium mt-1 mb-1">
                                {cartItem.category.toUpperCase()}
                              </span>
                              <a
                                href="#"
                                className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                onClick={() => handleRemoveFromCart(cartItem)}
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*quatity */}
                        <div className="quantity">
                          <div className="grid grid-cols-3 gap-5 justify-center lg:ml-0  ml-6">
                            <span>
                              <button
                                onClick={() => handleDecreaseCart(cartItem)}
                              >
                                <UilMinus
                                  size={18}
                                  className="mt-1 mr-1 fill-current text-gray-600 cursor-pointer"
                                />
                              </button>
                            </span>

                            <div className="quantity">
                              <p className="">{cartItem.cartQuantity}</p>
                            </div>

                            <span>
                              <button
                                onClick={() => handleIncreaseCart(cartItem)}
                              >
                                <UilPlus
                                  size={18}
                                  className=" fill-current text-gray-600 text-lg font-bold mt-1 cursor-pointer 0"
                                />
                              </button>
                            </span>
                          </div>
                        </div>
                        {/* price */}
                        <div className="price">
                          <span className="text-center font-semibold text-sm">
                            ${cartItem.price}
                          </span>
                        </div>
                        {/* total */}
                        <div className="total">
                          <span className="text-center font-semibold text-sm">
                            $
                            {parseFloat(
                              (cartItem.price * cartItem.cartQuantity).toFixed(
                                2
                              )
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Order Summary */}
              <div id="summary" className="w-full lg:px-28  px-10 py-16">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase ">
                    Items {cart.cartTotalQuantity}
                  </span>
                  <span className="pr-6 font-semibold text-sm">
                    ${parseFloat(cart.cartTotalAmount.toFixed(2))}
                  </span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Shipping
                  </label>
                  <select className="block border p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - ${shippingCost}</option>
                  </select>
                </div>
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full border"
                  />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                  Apply
                </button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>
                      $
                      {parseFloat(
                        (cart.cartTotalAmount + shippingCost).toFixed(2)
                      )}
                    </span>
                  </div>
                  <div>
                    <Link to="/">
                      <button
                        className="bg-blue-600 font-semibold hover:bg-blue-700 py-3 text-sm text-white uppercase w-full"
                        onClick={() => handleClearCart()}
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
                <Link
                  to="/products"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <UilArrowLeft size={20} className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
