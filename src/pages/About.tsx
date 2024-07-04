const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-text-6xl">
          We adore
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Cozy!
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-text-6xl">
          🍵
        </h1>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to Cozy store, your one-stop shop for all things cozy! We
        believe that creating a cozy atmosphere is essential for well-being and
        happiness. Whether it's curling up with a good book on a rainy day or
        enjoying a cup of tea by a crackling fire, we want to help you create
        those moments of pure comfort in your own home.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        We offer a curated selection of high-quality products designed to bring
        warmth, softness, and a touch of luxury to your everyday life. From
        plush blankets and comfy throws to delightful scented candles and
        aromatherapy diffusers, we have everything you need to transform your
        space into a haven of relaxation.
      </p>
    </>
  );
};
export default About;
