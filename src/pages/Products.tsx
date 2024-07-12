import { QueryClient } from "@tanstack/react-query";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { Meta, Product } from "../types";
import { customFetch } from "../utils";

const url = "/products";

const allProductsQuery = (queryParams: { [k: string]: string }) => {
  const { search, category, company, shipping, page, price, order } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      company ?? "all",
      category ?? "all",
      order ?? "a-z",
      shipping ?? false,
      page ?? 1,
      price ?? 10000,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

interface Props {
  request?: {
    url?: string;
  };
}

export const loader =
  (queryCLient: QueryClient) =>
  async ({ request }: Props) => {
    const params = request?.url
      ? Object.fromEntries([...new URL(request.url).searchParams.entries()])
      : {};
    const response = await queryCLient.ensureQueryData(
      allProductsQuery(params)
    );
    const products: Product[] = response.data.data;
    const meta: Meta = response.data.meta;
    return { products, meta, params };
  };

const Products = () => {
  return (
    <section className="align-element pt-20">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </section>
  );
};
export default Products;
