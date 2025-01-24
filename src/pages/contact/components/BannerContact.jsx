import React from "react";
import cover from "../../../assets/contact/coverContact.png";
import logo from "../../../assets/contact/logoBrown.png";
import logo1 from "../../../assets/contact/Facebook.png";
import logo2 from "../../../assets/contact/Twitter.png";
import logo3 from "../../../assets/contact/Instagram.png";
import logo4 from "../../../assets/contact/Linkedin.png";
import logo5 from "../../../assets/contact/youtube.png";
const BannerContact = () => {
  return (
    <div>
      <div className="lg:relative ">
        <div className="">
          <img className="w-screen object-contain" src={cover} alt=""></img>
        </div>
        <div className=" lg:absolute lg:top-0 h-full lg:left-40 flex flex-col  lg:w-96 text-center justify-center  gap-5 items-center bg-secondary-100 p-5">
          <div className="">
            <img src={logo} alt=""></img>
          </div>
          <div className=" border-white border-b  pb-8">
            <h3 className="text-white font-bold uppercase tracking-widest text-4xl">
              Contact Us
            </h3>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <h2 className="font-semibold text-white">
              Follow us on social media
            </h2>
            <div className="flex items-center gap-4">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
