
const Banner = () => {
  return (
    <section className="relative h-[calc(100vh-95px)]">
      <img
        src="/assets/banner.png"
        alt="Banner Image"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <div className="bg-secondary absolute bottom-[100px] right-[50px] hidden h-[440px] w-[640px] rounded-md px-[40px] lg:block">
        <div className="pb-[60px] pt-[75px]">
          <h3 className="font-poppins text-base font-semibold">New Arrival</h3>
          <h1 className="font-poppins text-primary text-[52px] font-bold leading-tight">
            Discover Our New Collection
          </h1>
          <p className="font-montserrat text-lg font-medium leading-none text-[#333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <button className="font-poppins bg-primary h-[72px] w-[222px] text-base font-bold capitalize text-white transition-colors duration-300 hover:bg-btnHover">
          buy now
        </button>
      </div>
    </section>
  );
};

export default Banner;
