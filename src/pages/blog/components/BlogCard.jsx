import React from "react";
import avatar from "../../../assets/blog/Avatar.png";

const BlogCard = ({ image, title, desc }) => {
  return (
    <div>
      <div className="flex flex-col py-4 ">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="flex items-center gap-2 py-6">
          <img src={avatar} alt="" />
          <p className="font-semibold text-primary-300">Brian Clark</p>
          <p>------</p>
          <p className="font-semibold text-primary-300">Jan 24, 2024</p>
        </div>
        <h2 className="font-semibold text-xl py-2 text-primary-100  ">
          {title}
        </h2>
        <p className="text-primary-100 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
