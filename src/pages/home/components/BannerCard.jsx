import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const BannerCard = ({
  title,
  desc,
  img,
  button = "shop now",
  swap,
  heading,
  heading2,
  onClick,
}) => {
  return (
    <>
      {heading && (
        <div className="flex items-center justify-center my-16">
          <h3 className="uppercase text-2xl font-semibold ">{heading}</h3>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {swap ? (
          <>
            <div>
              <img className="w-[645px]" src={img} alt="" />
            </div>

            <div className="flex flex-col justify-center  items-center p-2  text-center gap-8 bg-primary-200  ">
              <h3 className="lg:text-4xl text-2xl uppercase font-semibold">
                {title}
              </h3>
              <p className="text-primary-100 ">{desc}</p>

              <Button onClick={onClick} bg={"none"}>
                {button}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center  items-center p-2  text-center gap-8 bg-primary-200  py-14">
              <h2 className="text-brown-100 font-semibold  uppercase tracking-widest text-lg">
                {heading2}
              </h2>
              <h3 className="lg:text-4xl text-2xl uppercase font-semibold">
                {title}
              </h3>
              <p className="text-primary-100 ">{desc}</p>

              <Button onClick={onClick} bg={"none"}>
                {button}
              </Button>
            </div>

            <img
              className="h-[400px] w-[645px] mix-blend-color-burn "
              src={img}
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
};

export default BannerCard;
