import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

const BestSellers = ({ title, data, images }) => {
  const newData = data.length > images ? data?.slice(0, images) : data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-16  lg:gap-6 items-center lg:my-8  justify-center">
      <h3 className="uppercase text-2xl font-semibold ">{title}</h3>
      <div className="grid grid-cols-2  lg:grid-cols-4  px-4 gap-4 lg:gap-14">
        {newData?.map((item, index) => {
          return (
            <Card
              onClick={() => navigate(`/productDetail/${item.id}`)}
              key={index}
              item={item}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
