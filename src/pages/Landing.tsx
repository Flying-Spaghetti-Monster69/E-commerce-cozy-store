import { AssociatesSlider, FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
import { themes, type Product } from "../types";
import { useUserStore } from "../stores/userStore";
import { QueryClient } from "@tanstack/react-query";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient: QueryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const featuredProducts: Product[] = response.data.data;
  return { featuredProducts };
};

const Landing = () => {
  const { theme } = useUserStore();
  return (
    <>
      <section className="align-element pt-20">
        <Hero />
      </section>
      <div
        className={`spacer relative ${
          theme === themes.light ? "light-waves" : "dark-waves"
        } z-[-1] overflow-hidden translate-y-[-15%]`}
      ></div>
      <div className=" py-20 bg-neutral mt-[-4.7%]">
        <section className="align-element">
          <div className="flex flex-col w-full items-center">
            <h1 className="text-neutral-content mb-8 font-bold text-4xl">
              Associates <span className="text-sm">(not really...)</span>
            </h1>
            <AssociatesSlider />
          </div>
          <FeaturedProducts />
        </section>
      </div>
    </>
  );
};
export default Landing;
