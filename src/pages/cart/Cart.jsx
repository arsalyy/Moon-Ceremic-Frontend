import React from "react";

import { useNavigate } from "react-router-dom";
import { TableCart } from "./components";
import { useSelector } from "react-redux";
import { Button, InputText } from "../../components";

const Cart = () => {
  //Hooks
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  return (
    <div className="lg:px-40 px-3 py-8 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Cart ({cart.cart.length} items) </h2>
      <TableCart data={cart?.cart} />
      <div className="flex items-center lg:flex-row flex-col  gap-2 justify-between">
        <div className="flex flex-col lg:flex-row  items-center gap-2">
          <InputText placeholder={"Coupon code"} />
          <Button className={"bg-primary-100 text-white lg:px-4 !py-4"}>
            Apply Coupon
          </Button>
        </div>
        <Button className={"bg-primary-100 text-white lg:!px-14 !py-4"}>
          Update cart
        </Button>
      </div>
      <div className="flex lg:justify-end">
        <div className="flex flex-col gap-4 px-5  text-white bg-primary-100 lg:px-16 py-12">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div className="flex justify-between   lg:gap-56">
            <p>Subtotal</p>
            <p>$ {cart.totalPrice}.00</p>
          </div>
          <div className="flex justify-between lg:gap-56">
            <p>Cart Items</p>
            <p className="px-5"> ( {cart.cart.length} )</p>
          </div>
          <Button
            onClick={() => navigate("/checkout")}
            borderWhite={true}
            className={"bg-primary-100 text-white lg:!px-20 "}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
