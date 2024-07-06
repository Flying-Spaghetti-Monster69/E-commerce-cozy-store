import { Link, useLoaderData } from "react-router-dom";
import { type Product } from "../types";
import { formatPrice } from "../utils";

const ProductsBento = () => {
  // useLoaderData has no typescript docs...
  const { featuredProducts } = useLoaderData() as {
    featuredProducts: Product[];
  };

  return (
    <div className="py-8  w-full sm:py-12 lg:px-6">
      <div className="grid grid-cols-1 p-0 sm:px-12 lg:px-44 gap-4 items-center  w-full h-full">
        <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
          <Link
            to={`/products/${featuredProducts[1].id}`}
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
          >
            <img
              src={featuredProducts[1].attributes.image}
              alt={featuredProducts[1].attributes.title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 capitalize text-2xl font-medium text-neutral-content absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
              {featuredProducts[1].attributes.title}{" "}
              <span className=" block text-accent bg-accent-content w-fit p-1.5 rounded-md text-base">
                {formatPrice(featuredProducts[1].attributes.price)}
              </span>
            </h3>
          </Link>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <Link
              to={`/products/${featuredProducts[0].id}`}
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src={featuredProducts[0].attributes.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 capitalize text-2xl font-medium text-neutral-content absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                {featuredProducts[0].attributes.title}{" "}
                <span className=" block text-accent bg-accent-content w-fit p-1.5 rounded-md text-base">
                  {formatPrice(featuredProducts[0].attributes.price)}
                </span>
              </h3>
            </Link>
            <Link
              to={`/products/${featuredProducts[2].id}`}
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src={featuredProducts[2].attributes.image}
                alt={featuredProducts[2].attributes.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 capitalize text-2xl font-medium text-neutral-content absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                {featuredProducts[2].attributes.title}
                <span className="block text-accent bg-accent-content w-fit p-1.5 rounded-md text-base">
                  {formatPrice(featuredProducts[2].attributes.price)}
                </span>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsBento;
