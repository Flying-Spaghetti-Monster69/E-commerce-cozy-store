import ProductsBento from "./ProductsBento";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle
        text="featured products"
        textStyles="text-neutral-content"
      />
      <ProductsBento />
    </div>
  );
};
export default FeaturedProducts;
