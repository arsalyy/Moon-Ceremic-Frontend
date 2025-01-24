import React from "react";
import image from "../../../assets/blog/BannerImage.png";

const BlogBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pb-14 ">
        <div>
          <img className="lg:w-[760px]" src={image} alt="" />
        </div>

        <div className="flex flex-col justify-center  items-center p-2  text-center gap-8 bg-primary-200  ">
          <h3 className="lg:text-4xl text-2xl uppercase font-semibold">
            What’s in a Garden set?
          </h3>
          <p className="text-primary-100 p-3 lg:px-20">
            "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
            dolor sit amet consectetur adipiscing eli mattis sit phasellus
            mollis sit aliquam sit
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
