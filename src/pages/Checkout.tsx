import { Link, redirect } from "react-router-dom";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { useCartStore } from "../stores/cartStore";
import { getUserFromStore } from "../stores/userStore";
import { toast } from "react-toastify";

export const loader = () => {
  const user = getUserFromStore();
  if (!user) {
    toast.error("you must be logged in to access checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const { cartTotal } = useCartStore();

  if (!cartTotal) {
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
      <SectionTitle text="Please place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </section>
  );
};
export default Checkout;
