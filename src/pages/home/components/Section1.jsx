import image from "../../../assets/section1/image1.png";
import image2 from "../../../assets/section1/image2.png";
import image3 from "../../../assets/section1/image3.png";
import image4 from "../../../assets/section1/image4.png";

const Section1 = () => {
  return (
    <div className="grid bg-white mt-4  border-black py-5 justify-items-center grid-cols-1 lg:grid-cols-4 ">
      <div className="flex flex-col  gap-4 items-center text-center">
        <img src={image} alt="" />
        <h2 className=" lg:text-lg font-bold uppercase">TableWare</h2>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image2} alt="" />
        <h2 className=" text-lg font-bold uppercase">Home decor</h2>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image3} alt="" />
        <h2 className=" text-lg font-bold uppercase">holiday</h2>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image4} alt="" />
        <h2 className=" text-lg font-bold uppercase">Collection</h2>
      </div>
    </div>
  );
};
export default Section1;
