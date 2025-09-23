
import ProductCard from "../components/common/ProductCard";
import FeatureSection from "../components/common/FeatureSection";
import { Trophy, BadgeCheck, Gift, Headset, Grip, SlidersHorizontal, Columns2 } from "lucide-react";

const itemsProduct = [
    { id: 1, title: "Syltherine", price: "$2,500.00", description: "Stylish cafe chair", image: "/assets/product-image-1.png", priceBeforeDiscount: "$3,500.00", discount: 28 },
    { id: 2, title: "Leviosa", price: "$2,500.00", description: "Stylish cafe chair", image: "/assets/product-image-2.png" },
    { id: 3, title: "Lolito", price: "$7,000.00", description: "Luxury big sofa", image: "/assets/product-image-3.png", priceBeforeDiscount: "$14,000.00", discount: 50 },
    { id: 4, title: "Respira", price: "$5,000.00", description: "Outdoor bar table and stool", image: "/assets/product-image-4.png", newItem: true },
    { id: 5, title: "Grifo", price: "$1,500.00", description: "Night lamp", image: "/assets/product-image-5.png" },
    { id: 6, title: "Muggo", price: "$7,500.00", description: "Small mug", image: "/assets/product-image-6.png", priceBeforeDiscount: "$13,500.00", discount: 44 },
    { id: 7, title: "Pingky", price: "$9,500.00", description: "Cute bed set", image: "/assets/product-image-7.png", priceBeforeDiscount: "$17,300.00", discount: 45 },
    { id: 8, title: "Potty", price: "$5,000.00", description: "Minimalist flower pot", image: "/assets/product-image-8.png", newItem: true },
    { id: 9, title: "Muggo", price: "$7,500.00", description: "Small mug", image: "/assets/product-image-6.png", priceBeforeDiscount: "$13,500.00", discount: 44 },
    { id: 10, title: "Pingky", price: "$9,500.00", description: "Cute bed set", image: "/assets/product-image-7.png", priceBeforeDiscount: "$17,300.00", discount: 45 },
    { id: 11, title: "Respira", price: "$5,000.00", description: "Outdoor bar table and stool", image: "/assets/product-image-4.png", newItem: true },
    { id: 12, title: "Lolito", price: "$7,000.00", description: "Luxury big sofa", image: "/assets/product-image-3.png", priceBeforeDiscount: "$14,000.00", discount: 50 },
    { id: 13, title: "Respira", price: "$5,000.00", description: "Outdoor bar table and stool", image: "/assets/product-image-4.png", newItem: true },
    { id: 14, title: "Syltherine", price: "$2,500.00", description: "Stylish cafe chair", image: "/assets/product-image-1.png", priceBeforeDiscount: "$3,500.00", discount: 28 },
    { id: 15, title: "Pingky", price: "$9,500.00", description: "Cute bed set", image: "/assets/product-image-7.png", priceBeforeDiscount: "$17,300.00", discount: 45 },
    { id: 16, title: "Respira", price: "$5,000.00", description: "Outdoor bar table and stool", image: "/assets/product-image-4.png", newItem: true },
];

const trophy = [
    {
        title: "High Quality",
        desc: "crafted from top materials",
        icon: Trophy,
    },
    {
        title: "Warranty Protection",
        desc: "Over 2 years",
        icon: BadgeCheck,
    },
    {
        title: "Free Shipping",
        desc: "Order over 150 $",
        icon: Gift,
    },
    {
        title: "24 / 7 Support",
        desc: "Dedicated support",
        icon: Headset,
    },
]


const Shop = () => {
    return (
        <main className="overflow-hidden">
            {/* Shop Banner */}
            <div className="w-full">
                <img
                    alt="shop image"
                    loading="lazy"
                    width={1440}
                    height={316}
                    decoding="async"
                    className="w-full"
                    srcSet="/assets/shop-image.png 640w"
                    src="/assets/shop-image.png 640w"
                    style={{ color: "transparent" }}
                />
            </div>

            {/* Filter & Sorting */}
            <div className="relative -top-2 flex flex-col items-center bg-[#F9F1E7] p-5 md:flex-row">
                <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-8 lg:flex-row">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-5">
                            <span className="flex cursor-pointer items-center gap-2">
                                <SlidersHorizontal />
                                <h4 className="font-poppins text-base font-semibold md:text-xl">
                                    Filter
                                </h4>
                            </span>
                            <Grip />
                            <Columns2 />
                        </div>
                        <span className="h-8 w-0.5 bg-gray-700" />
                        <h3 className="font-poppins text-xs md:text-base">
                            Showing 1-12 of 40 results
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:items-center">
                        <div className="flex items-center gap-2">
                            <h3 className="w-14 font-poppins text-base text-black md:text-xl">
                                Show
                            </h3>
                            <input
                                className="max-h-12 max-w-20 bg-white p-2 text-black outline-none md:p-4"
                                type="number"
                                placeholder={16}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <h3 className="w-14 font-poppins text-base text-black md:text-xl">
                                Sort by
                            </h3>
                            <input
                                className="max-h-12 bg-white p-2 text-black outline-none md:p-4"
                                type="text"
                                placeholder="Default"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Product Grid */}
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 justify-items-center gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {itemsProduct.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mx-auto my-20 flex w-fit items-center gap-5">
                    {["1", "2", "3", "Next"].map((item, idx) => (
                        <button
                            key={idx}
                            className={`rounded-md px-5 py-2 font-poppins text-xl font-light transition-colors duration-300 ${item === "1" ? "bg-primary" : "bg-[#F9F1E7] hover:bg-primary"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Feature Section */}
            <FeatureSection
                features={trophy}
            />
        </main>
    );
};

export default Shop;
