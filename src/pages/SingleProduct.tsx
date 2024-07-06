import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "../types";

export const loader = async ({ params }: { params: { id: string } }) => {
  const response = await customFetch(`/products/${params.id}`);
  const product = response.data.data;
  return { product };
};

const SingleProduct = () => {
  const { product } = useLoaderData() as {
    product: Product;
  };

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <section className="align-element pt-20">
      <div className=" text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default SingleProduct;
