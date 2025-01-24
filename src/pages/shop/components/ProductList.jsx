import React from "react";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";

const ProductList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-2 p-3 lg:grid-cols-3 gap-4 lg:gap-10">
        {data?.map((item, index) => {
          return (
            <Card
              onClick={() => navigate(`/productDetail/${item.id}`)}
              item={item}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
