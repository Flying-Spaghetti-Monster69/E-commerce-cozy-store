import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { getUserFromStore } from "../stores/userStore";
import { clearCartWithoutHook, getCartFromStore } from "../stores/cartStore";
import { customFetch, formatPrice } from "../utils";
import { CustomError, loggedUser } from "../types";
import { toast } from "react-toastify";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);
  const user = getUserFromStore() as loggedUser;
  const { cartItems, orderTotal, numItemsInCart } = getCartFromStore();

  const info = {
    name,
    address,
    chargeTotal: orderTotal,
    orderTotal: formatPrice(orderTotal.toString()),
    cartItems,
    numItemsInCart,
  };

  try {
    const response = await customFetch.post(
      "/orders",
      { data: info },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log(response);
    clearCartWithoutHook();
    toast.success("order placed successfully");
    return redirect("/orders");
  } catch (error) {
    const errorMessage =
      (error as CustomError)?.response?.data?.error?.message ||
      "there was an error placing your order";
    toast.error(errorMessage);
    if (
      (error as CustomError).response.status === 401 ||
      (error as CustomError).response.status === 403
    ) {
      return redirect("/login");
    }
    return null;
  }
};

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">shipping information</h4>
      <FormInput label="First Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
