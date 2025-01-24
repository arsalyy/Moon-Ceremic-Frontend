import React from "react";

const PostCard = ({ imageCard, title }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <img src={imageCard} className="w-32" alt="" />
        <p className="text-sm ">{title}</p>
      </div>
    </div>
  );
};

export default PostCard;
