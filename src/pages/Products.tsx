import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
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
