import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useCartStore } from "./stores/cartStore";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TIME_UNTIL_STALE_MS = 1000 * 60 * 5;

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: TIME_UNTIL_STALE_MS,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader,
        action: checkoutAction(queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  const { getItemsFromLocalStorage } = useCartStore();
  useEffect(() => {
    getItemsFromLocalStorage();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
