import { useCartStore } from "../stores";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cartItems } = useCartStore();
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.CartID} {...item} />;
      })}
    </>
  );
};
export default CartItemsList;
