import ProductsSection from "./ProductsSection";

const Home = () => {
  return (
    <div>
      <div className="relative bg-[url(https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:pb-24">
          <div className="max-w-xl text-center sm:text-left ">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              NEW SEASONS ARRIVAL
            </h1>

            <p className="mt-4 max-w-lg text-lg sm:text-xl lg:text-3xl sm:leading-relaxed">
              CHECK OUT LATEST TRENDS
            </p>
          </div>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
};

export default Home;
