import { ChangeEvent } from "react";
import { useCartStore } from "../stores/cartStore";
import { cartProduct } from "../types";
import { formatPrice } from "../utils";
import { GenerateAmountOptions } from "./GenerateAmountOptions";

const CartItem = ({
  CartID,
  title,
  price,
  image,
  amount,
  company,
  productColor,
}: cartProduct) => {
  const { removeItem, editItem } = useCartStore();

  const removeItemFromCart = () => {
    removeItem(CartID);
  };

  const handleAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    editItem(CartID, parseInt(e.target.value));
  };

  return (
    <article
      key={CartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-semibold">{title}</h3>
        <h4 className="capitalize text-sm text-accent font-medium mt-1">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12 ">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select select-xs select-bordered"
            onChange={handleAmount}
            value={amount}
          >
            <GenerateAmountOptions number={amount + 5} />
          </select>
        </div>
        <button
          type="button"
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price.toString())}</p>
    </article>
  );
};
export default CartItem;
