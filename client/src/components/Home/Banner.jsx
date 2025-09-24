const Banner = ({
  title = "Discover Our New Collection",
  subtitle = "New Arrival",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  buttonText = "Shop Now",
  image = "/assets/banner.png",
}) => {
  return (
    <section
      role="banner"
      className="relative h-[60vh] w-full sm:h-[75vh] lg:h-[calc(100vh-95px)]"
    >
      {/* Background Image */}
      <img
        src={image}
        alt="Promotional Banner"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content Box */}
      <div className="absolute bottom-6 left-1/2 w-[90%] max-w-lg -translate-x-1/2 rounded-md bg-secondary/90 px-5 py-8 text-center shadow-lg sm:px-8 md:left-auto md:right-12 md:translate-x-0 md:text-left lg:bottom-[100px] lg:h-[440px] lg:w-[640px] lg:px-[40px]">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <h3 className="font-poppins text-sm font-semibold text-gray-800 sm:text-base">
            {subtitle}
          </h3>
          <h1 className="font-poppins text-primary text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-tight">
            {title}
          </h1>
          <p className="font-montserrat text-sm font-medium text-[#333] sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Button */}
        <button
          className="mt-5 h-[52px] w-[160px] rounded-md bg-primary font-poppins text-sm font-bold capitalize text-white shadow-md transition-colors duration-300 hover:bg-btnHover sm:mt-6 sm:h-[60px] sm:w-[190px] sm:text-base lg:mt-10 lg:h-[72px] lg:w-[222px]"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Banner;