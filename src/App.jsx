import { Suspense } from "react";
import {
  About,
  Blog,
  Cart,
  Checkout,
  Contact,
  Home,
  Login,
  ProductDetails,
  Shop,
  SignUp,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { PrivateRoutes } from "./utils";
import { Loader } from "./components";
import WishDrawer from "./components/WishDrawer";

function App() {
  const loader = useSelector((state) => state.loader.loader);
  // const cart = useSelector((state) => state.cart);
  // const user = useSelector((state) => state?.auth?.user?.user);
  // const wishlist = useSelector((state) => state.wish);
  // const products = useSelector((state) => state.product.products);
  // console.log({ products });

  // console.log({ cart });
  return (
    <div>
      <WishDrawer />
      {/* <div className="z-40 fixed h-full w-80 border right-0 top-0 bg-white">
        draaw
      </div> */}
      <Loader visible={loader} />

      <Header />
      <Suspense
        fallback={
          <div className="container flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/cart" element={<PrivateRoutes Component={Cart} />} />
          <Route
            path="/checkout"
            element={<PrivateRoutes Component={Checkout} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/productDetail/:productId"
            element={<ProductDetails />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
