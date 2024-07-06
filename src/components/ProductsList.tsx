import { Link, useLoaderData } from "react-router-dom";
import { type Product } from "../types";
import { formatPrice } from "../utils";
const ProductsList = () => {
  const { products } = useLoaderData() as {
    products: Product[];
  };

  return (
    <div className="mt-3 grid gap-y-8">
      {products.map((product: Product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = price;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className=" p-8 rounded- flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 group shadow-xl hover:shadow-2xl duration-300 "
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize font-medium text-md text-neutral-content bg-neutral w-fit p-1.5 rounded-md my-2">
                {company}
              </h4>
            </div>
            <p className="font-semibold text-secondary ml-0 sm:ml-auto text-lg">
              {formatPrice(dollarsAmount)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
