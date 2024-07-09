import { toast } from "react-toastify";
import { getUserFromStore } from "../stores/userStore";
import { redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { CustomError, loggedUser } from "../types";

export const loader = async ({ request }: { request: Request }) => {
  const user = getUserFromStore() as loggedUser;
  if (!user) {
    toast.error("login to access orders");
    return redirect("/login");
  }

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const response = await customFetch("/orders", {
      params,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return { orders: response.data.data, meta: response.data.meta };
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

const Orders = () => {
  return <div>Orders</div>;
};
export default Orders;
