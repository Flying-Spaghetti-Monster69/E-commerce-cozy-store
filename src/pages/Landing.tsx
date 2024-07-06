import { AssociatesSlider, FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
import { type Product } from "../types";
import { useStoreTheme } from "../stores";
const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const featuredProducts: Product[] = response.data.data;
  return { featuredProducts };
};

const Landing = () => {
  const { theme } = useStoreTheme();
  return (
    <>
      <section className="align-element pt-20">
        <Hero />
      </section>
      <div
        className={`spacer relative ${
          theme === "nord" ? "light-waves" : "dark-waves"
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
