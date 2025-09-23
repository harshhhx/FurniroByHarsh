import CardBlog from "../components/Blogs/CardBlog";
import FeatureSection from "../components/common/FeatureSection";
import { Trophy, BadgeCheck, Gift, Headset } from "lucide-react";
import RecentPost from "../components/Blogs/RecentPost";
import { blogItems } from "../components/Blogs/blogItems";
import { recentPostItems } from "../components/Blogs/recentPostItems";


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


const Blogs = () => {
    return (
        <main className="overflow-hidden">
            <div className="relative w-full">
                <img
                    src={"/assets/cartpage-image.png"}
                    className="w-full"
                    alt="shop banner"
                    width={1440}
                    height={316}
                />
                <div className="absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 px-8 py-10 md:gap-4">
                    <img
                        className="w-8 md:w-20"
                        src={"/assets/logo.png"}
                        alt="logo"
                        width={77}
                        height={77}
                    />
                    <h1 className="my-1 font-poppins text-xl font-medium text-black md:text-[48px]">Blog</h1>
                    <div className="hidden items-center gap-2 md:flex">
                        <a className="font-poppins text-base font-semibold text-black transition-colors duration-200 hover:text-[#9F9F9F]" href="/">Home</a>
                        <span>{">"}</span>
                        <a className="font-poppins text-base font-semibold text-[#9F9F9F]" href="/blog">Blog</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-8 py-16">
                <div className="flex flex-col items-start justify-between gap-20 lg:flex-row">
                    <div className="flex-2 flex flex-col gap-10 md:gap-5">
                        {blogItems.map((i, index) => (
                            <CardBlog key={index} {...i} />
                        ))}
                    </div>
                    <div className="flex-1">
                        <div className="relative w-fit md:w-full">
                            <input className="w-full rounded-md border border-black px-4 py-2 outline-none" type="text" title="Search" placeholder="Search" />
                            <span className="absolute right-2 top-1/2 size-5 -translate-y-1/2 cursor-pointer">🔍</span>
                        </div>
                        <div className="flex flex-col gap-10 md:flex-row lg:flex-col">
                            <div className="flex-1">
                                <h3 className="my-8 font-poppins text-2xl font-medium text-black md:text-xl">Categories</h3>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center justify-between gap-2"><h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">Crafts</h4><span className="font-poppins text-base font-semibold text-[#9F9F9F]">9</span></div>
                                    <div className="flex items-center justify-between gap-2"><h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">Design</h4><span className="font-poppins text-base font-semibold text-[#9F9F9F]">8</span></div>
                                    <div className="flex items-center justify-between gap-2"><h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">Handmade</h4><span className="font-poppins text-base font-semibold text-[#9F9F9F]">7</span></div>
                                    <div className="flex items-center justify-between gap-2"><h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">Interior</h4><span className="font-poppins text-base font-semibold text-[#9F9F9F]">1</span></div>
                                    <div className="flex items-center justify-between gap-2"><h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">Wood</h4><span className="font-poppins text-base font-semibold text-[#9F9F9F]">6</span></div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="my-8 font-poppins text-2xl font-medium text-black md:text-xl">Recent Posts</h3>
                                <div className="flex flex-col gap-5">
                                    {recentPostItems.map((i, index) => (
                                        <RecentPost key={index} {...i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeatureSection
                features={trophy}
            />
        </main>
    );
};

export default Blogs;