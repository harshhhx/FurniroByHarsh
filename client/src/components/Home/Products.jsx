import ProductCard from "../common/ProductCard";

const Products = () => {
  // Dummy product data
  const itemsProduct = [
    {
      id: 1,
      title: "Syltherine",
      price: "$2,500.00",
      description: "Stylish cafe chair",
      image: "/assets/product-image-1.png",
      priceBeforeDiscount: "$3,500.00",
      discount: 28,
    },
    {
      id: 2,
      title: "Leviosa",
      price: "$2,500.00",
      description: "Stylish cafe chair",
      image: "/assets/product-image-2.png",
    },
    {
      id: 3,
      title: "Lolito",
      price: "$7,000.00",
      description: "Luxury big sofa",
      image: "/assets/product-image-3.png",
      priceBeforeDiscount: "$14,000.00",
      discount: 50,
    },
    {
      id: 4,
      title: "Respira",
      price: "$5,000.00",
      description: "Outdoor bar table and stool",
      image: "/assets/product-image-4.png",
      newItem: true,
    },
    {
      id: 5,
      title: "Grifo",
      price: "$1,500.00",
      description: "Night lamp",
      image: "/assets/product-image-5.png",
    },
    {
      id: 6,
      title: "Muggo",
      price: "$7,500.00",
      description: "Small mug",
      image: "/assets/product-image-6.png",
      priceBeforeDiscount: "$13,500.00",
      discount: 44,
    },
    {
      id: 7,
      title: "Pingky",
      price: "$9,500.00",
      description: "Cute bed set",
      image: "/assets/product-image-7.png",
      priceBeforeDiscount: "$17,300.00",
      discount: 45,
    },
    {
      id: 8,
      title: "Potty",
      price: "$5,000.00",
      description: "Minimalist flower pot",
      image: "/assets/product-image-8.png",
      newItem: true,
    },
  ];

  return (
    <section className="container mx-auto px-8 py-16">
      <div className="text-center">
        <h1 className="font-poppins text-2xl font-bold md:text-[32px]">Our Products</h1>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {itemsProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <button className="h-[48px] w-[245px] cursor-pointer border border-primary text-center font-poppins text-base font-semibold leading-relaxed text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Products;
