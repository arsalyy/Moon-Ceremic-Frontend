import React from "react";
import image from "../../assets/Image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

import { useNavigate } from "react-router-dom";
import {
  Banner,
  BannerCard,
  BestSellers,
  EmailCard,
  Section1,
} from "./components";

import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/slices/ProductSlice";
import { useProductData } from "../../hooks";

const Home = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useProductData();

  //Functions
  dispatch(addProducts(data));

  return (
    <>
      <Banner />
      <div className="lg:mx-40">
        <Section1 />
        <BannerCard
          button={"shop now"}
          title={" Up to 40% off our Christmas collection"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image}
          onClick={() => navigate("/shop")}
        />
        {data?.length > 0 && (
          <BestSellers data={data} images={8} title={"best sellers"} />
        )}
        <BannerCard
          title={" Made in viet Nam since 1450"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image2}
          button={"learn more "}
          onClick={() => navigate("/blog")}
        />
        <BannerCard
          swap={true}
          title={" Made in viet Nam since 1450"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image3}
          button={"learn more "}
          onClick={() => navigate("/blog")}
        />
        <div>
          {data?.length > 0 && (
            <BestSellers
              data={data}
              images={4}
              title={"Discover new arrivals"}
            />
          )}
        </div>
        <div>
          <BannerCard
            heading2={"TableWare"}
            heading={"our blogs"}
            title={" Made in viet Nam since 1450"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
            }
            img={image3}
            button={"learn more "}
            onClick={() => navigate("/blog")}
          />
        </div>
        <EmailCard />
      </div>
    </>
  );
};

export default Home;
