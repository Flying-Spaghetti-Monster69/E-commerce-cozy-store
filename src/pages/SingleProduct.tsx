import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { cartProduct, Product } from "../types";
import { useCartStore } from "../stores/cartStore";
import { toast } from "react-toastify";
import { GenerateAmountOptions } from "../components/GenerateAmountOptions";
import { QueryClient } from "@tanstack/react-query";

const singleProductQuery = (id: string) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { id: string } }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    const product: Product = response.data.data;
    return { product };
  };

const SingleProduct = () => {
  const { product } = useLoaderData() as {
    product: Product;
  };

  const { addItem } = useCartStore();

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct: cartProduct = {
    CartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const addToCart = () => {
    addItem(cartProduct);
    toast.success("item added successfully");
  };

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
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h3 className="capitalize text-primary mb-2 text-3xl font-bold">
            {title}
          </h3>
          <h4 className="text-xl text-neutral bg-neutral-content w-fit rounded-md p-1.5  font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl font-bold  ">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/*COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-secondary border-2"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/*AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              <GenerateAmountOptions number={10} />
            </select>
          </div>
          <div className="my-10">
            <button
              className="btn btn-secondary uppercase btn-md"
              onClick={() => addToCart()}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
