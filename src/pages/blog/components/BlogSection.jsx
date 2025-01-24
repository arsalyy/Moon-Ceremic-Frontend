import React from "react";
import BannerCard from "../../home/components/BannerCard";
import image1 from "../../../assets/blog/image1.png";
import image2 from "../../../assets/blog/image2.png";
import image3 from "../../../assets/blog/image3.png";
import image4 from "../../../assets/blog/image4.png";
import image5 from "../../../assets/blog/image5.png";
import image6 from "../../../assets/blog/image6.png";
import BlogCard from "./BlogCard";
import SearchInput from "../../../components/inputField/SearchInput";
import imagecard from "../../../assets/blog/BannerImage.png";
import PostCard from "./PostCard";
import TagCard from "./TagCard";
import Pagination from "../../../components/Pagination";

const BlogSection = () => {
  const postCardData = [
    { image: imagecard, title: "What’s in a Garden set?" },
    { image: image1, title: "How Can I Use Ceramic When I Decorate??" },
    { image: image4, title: "The secrets to a Living Room set?    " },
  ];
  const tagData = [
    "Ceramic",
    "Kitchen",
    "Gifts sets",
    "Lamp",
    "Flower vase",
    "Plate",
    "Kitchen",
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-3 lg:px-28">
        <div className="">
          <BlogCard
            image={image1}
            title={" How Can I Use Ceramic When I Decorate?"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices"
            }
          />{" "}
          <BlogCard
            image={image3}
            title={"The secrets to a Living Room set?"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis"
            }
          />
          <BlogCard
            image={image5}
            title={"How to Style a Beautiful House"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus"
            }
          />{" "}
        </div>
        <div>
          <BlogCard
            image={image2}
            title={"The secrets to a Living Room set?"}
            desc={
              " Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi."
            }
          />
          <BlogCard
            image={image4}
            title={"Chocolate Clementine Cake Recipe"}
            desc={
              " Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus"
            }
          />{" "}
          <BlogCard
            image={image6}
            title={" Holiday Food Traditions With Moon Family"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam ."
            }
          />
        </div>
        <div className="p-4 flex flex-col gap-6">
          <SearchInput placeholder={"Search for product..."} />
          <h2 className="lg:text-3xl text-2xl font-bold py-4 tracking-widest text-primary-100 uppercase ">
            popular post
          </h2>
          <div className="flex flex-col gap-4">
            {postCardData.map((item) => {
              return <PostCard imageCard={item.image} title={item.title} />;
            })}
          </div>
          <h2 className="text-2xl font-bold py-4  text-primary-100 uppercase ">
            Categories
          </h2>
          <div>
            <p className="text-primary-300 text-sm py-1"> Dinnerware (3)</p>
            <p className="text-primary-300 text-sm py-1"> Ceramic (5)</p>
            <p className="text-primary-300 text-sm py-1">Furniture (7)</p>
            <p className="text-primary-300 text-sm py-1">Decor Art (2)</p>
            <p className="text-primary-300 text-sm py-1">Gifts sets (8)</p>
          </div>
          <h2 className="text-2xl font-bold py-4  text-primary-100 uppercase ">
            Tags Post
          </h2>
          <div className="flex items-center gap-4 flex-wrap ">
            {tagData.map((item) => {
              return <TagCard title={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default BlogSection;
