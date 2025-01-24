import React from "react";

const TagCard = ({ title }) => {
  return (
    <div>
      <div className="p-3 border-primary-100 text-primary-500 text-sm  border ">
        {title}
      </div>
    </div>
  );
};

export default TagCard;
