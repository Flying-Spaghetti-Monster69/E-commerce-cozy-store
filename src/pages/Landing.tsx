import { Hero } from "../components";

const url = "/products";

export const loader = () => {
  return null;
};

const Landing = () => {
  return (
    <>
      <section className="align-element pt-20">
        <Hero />
      </section>
      <div className="spacer waves-svg relative z-[-1] overflow-hidden translate-y-[-15%]"></div>
      <div className=" py-20 bg-neutral mt-[-4.7%]">
        <section className="align-element">
          <h1>hello</h1>
        </section>
      </div>
    </>
  );
};
export default Landing;
