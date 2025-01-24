import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import WishDrawer from "./components/WishDrawer.jsx";

const queryClient = new QueryClient();
const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE_KEY);

const options = {
  // passing the client secret obtained from the server
  clientSecret: import.meta.env.VITE_SECRET_KEY,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
        <ScrollToTop />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
