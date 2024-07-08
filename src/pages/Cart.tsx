import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores";

const Cart = () => {
  // temp
  const user = null;
  const { numItemsInCart } = useCartStore();

  if (!numItemsInCart) {
    return (
      <section className="align-element pt-20">
        <SectionTitle text="Cart is empty! :C" />
        <h3 className="mt-12 text-xl">
          Go to{" "}
          <Link to="/products" className="link link-hover link-primary">
            products
          </Link>
          <span> to select some awesome products to add to your cart.</span>
        </h3>
      </section>
    );
  }

  return (
    <section className="align-element pt-20">
      <SectionTitle text="Shopping cart" textStyles="text-base-content" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Login to checkout
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
