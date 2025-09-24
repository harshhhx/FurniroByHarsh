const Banner = () => {
  return (
    <section className="relative h-[calc(100vh-95px)] w-full">
      {/* Background Image */}
      <img
        src="/assets/banner.png"
        alt="Banner Image"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Content Box */}
      <div className="absolute bottom-8 left-1/2 w-[90%] max-w-lg -translate-x-1/2 rounded-md bg-secondary/90 px-6 py-10 text-center sm:px-8 md:left-auto md:right-12 md:translate-x-0 md:text-left lg:bottom-[100px] lg:h-[440px] lg:w-[640px] lg:px-[40px]">
        <div className="space-y-4 lg:space-y-6">
          <h3 className="font-poppins text-sm font-semibold sm:text-base">
            New Arrival
          </h3>
          <h1 className="font-poppins text-primary text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-tight">
            Discover Our New Collection
          </h1>
          <p className="font-montserrat text-sm font-medium text-[#333] sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* Button */}
        <button className="mt-6 h-[56px] w-[180px] rounded-md bg-primary font-poppins text-sm font-bold capitalize text-white transition-colors duration-300 hover:bg-btnHover sm:h-[64px] sm:w-[200px] sm:text-base lg:mt-10 lg:h-[72px] lg:w-[222px]">
          buy now
        </button>
      </div>
    </section>
  );
};

export default Banner;