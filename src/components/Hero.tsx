import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <header>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-xd highlighted-text text-wrap sm:text-nowrap">
          Forget Shopping uncomfortable. Welcome to shopping cozy. ️✨
        </p>
        <p className="mt-1 max-w-xl text-lg leading-8 ">
          We curate a relaxed and easy experience with clear navigation,
          high-resolution product views, and detailed descriptions. Shop smarter
          and faster with streamlined checkout, saved lists, and 24/7 support.
        </p>
        <div className="mt-6">
          <Link to="/products" className="btn capitalize btn-primary">
            our products
          </Link>
        </div>
      </header>
      <div className=" h-[28rem] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                alt={`image number ${index}`}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
