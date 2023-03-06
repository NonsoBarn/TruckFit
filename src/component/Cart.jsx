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
              Before proceeding to check out, add some product to your cart. You
              wil find a lot of interesting products on our "Product" page
            </p>
            <Link to="/">
              <button className="border p-2 mt-2 inline-flex items-center bg-blue-600 text-white hover:bg-blue-700">
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

              <div class="flow-root pt-9">
                {cart.cartItems?.map((cartItem) => (
                  <ul className="-my-8">
                    <li className="flex flex-col space-y-3 py-10  text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0">
                        <img
                          className="h-20 w-20 max-w-full "
                          src={cartItem.image}
                          alt={cartItem.title}
                        />
                      </div>

                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className=" font-semibold text-sm text-gray-900">
                              {cartItem.title}
                            </p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              {cartItem.category}
                            </p>

                            <p
                              onClick={() => handleRemoveFromCart(cartItem)}
                              class="mx-0 mt-1 mb-0 text-xs text-red-700  cursor-pointer font-bold"
                            >
                              REMOVE
                            </p>
                          </div>

                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              $
                              {parseFloat(
                                (
                                  cartItem.price * cartItem.cartQuantity
                                ).toFixed(2)
                              )}
                            </p>

                            <div className="sm:order-1">
                              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                <button
                                  onClick={() => handleDecreaseCart(cartItem)}
                                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                >
                                  -
                                </button>
                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  {cartItem.cartQuantity}
                                </div>
                                <button
                                  onClick={() => handleIncreaseCart(cartItem)}
                                  class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
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
  );
};

export default Cart;
