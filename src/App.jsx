import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/product";
import ProductsSection from "./component/ProductsSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./component/Cart";
import Login from "./component/Login";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "./redux/features/cartSlice";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";
import Signup from "./component/Signup";
import NotFound from "./component/NotFound";
import Footer from "./component/Footer";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Router>
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/products" element={<ProductsSection />} exact />
        <Route path="products/:id" element={<Product />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
