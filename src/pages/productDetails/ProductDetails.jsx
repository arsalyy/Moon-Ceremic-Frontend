import React, { useState } from "react";

import { Carousel, ProductDetail } from "./components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useProductDataById } from "../../hooks";
import { BestSellers } from "../home/components";

const ProductDetails = () => {
  //Hooks
  const { productId } = useParams();
  const { data } = useProductDataById(productId);

  const products = useSelector((state) => state.product.products);
  const stateCart = useSelector((state) => state.cart.cart);

  //States
  const [color, setColor] = useState("");
  const [cartAdded, setCartAdded] = useState(false);

  const exist = stateCart?.find((product) => product.id === productId);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:mx-28">
        <div>{data?.data && <Carousel data={data?.data?.photos} />}</div>
        <div>
          {data?.data && (
            <ProductDetail
              setCartAdded={setCartAdded}
              color={color}
              setColor={setColor}
              cartAdded={cartAdded}
              data={data?.data}
              exist={exist ? true : false}
            />
          )}
        </div>
      </div>
      <div className="mx-40">
        <BestSellers data={products} images={4} title={"Similar Items"} />
      </div>
    </div>
  );
};

export default ProductDetails;
