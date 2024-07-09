import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { Meta, Product } from "../types";
import { customFetch } from "../utils";

const url = "/products";

interface Props {
  request?: {
    url?: string;
  };
}

export const loader = async ({ request }: Props) => {
  const params = request?.url
    ? Object.fromEntries([...new URL(request.url).searchParams.entries()])
    : {};
  const response = await customFetch(url, {
    params,
  });
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
