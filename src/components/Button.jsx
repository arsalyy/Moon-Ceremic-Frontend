import clsx from "clsx";
import React from "react";
import ButtonLoader from "./ButtonLoader";

const Button = ({
  children,
  className,
  text,
  type,
  bg,
  border,
  borderWhite,
  onClick,
  disable = false,
  id,
  ref,
  loader,
}) => {
  return (
    <div
      id={id}
      ref={ref}
      type={type}
      onClick={disable ? null : onClick}
      className={clsx(
        ` uppercase tracking-wider  text-nowrap inline-flex justify-center items-center cursor-pointer text-black font-semibold py-2 `,
        {
          "text-brown-100 bg-white  ": text === "brown",
          "text-primary-200  border-white  ": text === "white",
          "underline leading-5": bg === "none",
          "border-black border-2 ": border,
          "border-white border-2 ": borderWhite,
          "border-none opacity-50  ": disable,
        },
        className
      )}
    >
      {loader ? <ButtonLoader /> : children}
    </div>
  );
};

export default Button;
