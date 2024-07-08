import { useCartStore } from "../stores";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useCartStore();
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300">
          <span>Subtotal</span>
          <span className="font-bold">{formatPrice(cartTotal.toString())}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300">
          <span>tax</span>
          <span className="font-bold">{formatPrice(tax.toString())}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300">
          <span>shipping</span>
          <span className="font-bold">{formatPrice(shipping.toString())}</span>
        </p>
        <p className="flex justify-between text-sm mt-4">
          <span>Order total</span>
          <span className="font-bold">
            {formatPrice(orderTotal.toString())}
          </span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
