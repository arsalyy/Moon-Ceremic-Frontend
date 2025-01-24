import React from "react";

const TeamCard = ({ data, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-1"
    >
      <img src={data.img} alt="" />
      <h2 className="font-semibold uppercase">{data.name}</h2>
      <p className="text-primary-500 text-sm">{data.designation}</p>
    </div>
  );
};

export default TeamCard;
