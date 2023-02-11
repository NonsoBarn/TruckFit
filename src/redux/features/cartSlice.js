import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  //if cart items exist in local storage add cart items as default state else add empty array.
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ********** ADDING PRODUCT TO CART ***********
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // if product already exist in cart, adding to quantity
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // Toastify popup
        toast.info("Item quantity added", { position: "bottom-left" });
      } else {
        // if product not in cart, add product
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Item added to cart", { position: "bottom-left" });
      }

      // adding iiem to local storage, refresh wont erase

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // ********** Remove PRODUCT TO CART ***********
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;

      // updating local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Item removed from to cart", { position: "bottom-left" });
    },

    // **********DECREASE CART QTY ***********

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Item quantity decreased", { position: "bottom-left" });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        // removing from cart
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Item removed from to cart", { position: "bottom-left" });
      }
      // updating local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // **********CLEAR CART ********
    clearCart(state, action) {
      state.cartItems = [];
      toast.success("Your Order is on its Way :)", { position: "bottom-left" });

      // updating local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // **********TOTAL QTY & AMOUNT ********
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
