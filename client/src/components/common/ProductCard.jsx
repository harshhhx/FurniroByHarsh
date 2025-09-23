const ProductCard = ({ product }) => {
  const { id, title, price, description, image, priceBeforeDiscount, newItem, discount } = product;

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-md">
      <div className="relative">
        <img
          alt={title}
          loading="lazy"
          width={285}
          height={301}
          decoding="async"
          style={{ color: "transparent" }}
          src={image}
        />
        {(newItem || discount) && (
          <div className="absolute right-5 top-5 z-10 flex gap-2 font-poppins text-xs font-semibold text-white">
            {discount && (
              <span className="flex size-10 items-center justify-center rounded-full bg-[#E97171] shadow-md">
                -{discount}%
              </span>
            )}
            {newItem && (
              <span className="flex size-10 items-center justify-center rounded-full bg-[#2EC1AC] shadow-md">
                New
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 bg-bg-secondary p-4">
        <h1 className="font-poppins text-2xl font-semibold">{title}</h1>
        <p className="font-poppins text-base font-medium text-[#898989]">{description}</p>
        <div className="flex justify-between gap-2">
          <h2 className="font-poppins text-xl font-semibold">{price}</h2>
          {priceBeforeDiscount && <span className="text-gray-500 line-through">{priceBeforeDiscount}</span>}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center bg-[#3a3a3ab6] transition-all duration-500 group-hover:h-full h-0">
        <button className="h-[48px] w-[200px] bg-white font-poppins text-base font-semibold text-primary transition-colors duration-300 hover:bg-gray-50 group-hover:block hidden">
          Add to cart
        </button>
        <div className="flex items-center justify-center gap-2 pt-5 text-white">
          {/* Share, Compare, Like icons */}
          {["share", "compare", "heart"].map((icon) => (
            <span
              key={icon}
              className="flex items-center gap-1 transition-colors duration-300 hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Simplified: paths would depend on icon */}
              </svg>
              {icon.charAt(0).toUpperCase() + icon.slice(1)}
            </span>
          ))}
        </div>
        <a
          className="mt-10 bg-white px-5 py-2 font-poppins text-base font-semibold text-primary transition-colors duration-200 hover:bg-gray-50 group-hover:block hidden"
          href={`/shop/${id}`}
        >
          Show Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;