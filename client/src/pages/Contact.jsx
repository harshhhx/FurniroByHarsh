import { ContactSection } from "../components/Contact/ContactSection";
import FeatureSection from "../components/common/FeatureSection";
import { Trophy, BadgeCheck, Gift, Headset } from "lucide-react";

const Contact = () => {
    return (
        <main className="overflow-hidden">
            <div className="relative w-full">
                <img
                    src={"/assets/cartpage-image.png"}
                    className="w-full"
                    alt="contact banner"
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
                    <h1 className="my-1 font-poppins text-xl font-medium text-black md:text-[48px]">Contact</h1>
                    <div className="hidden items-center gap-2 md:flex">
                        <a className="font-poppins text-base font-semibold text-black transition-colors duration-200 hover:text-[#9F9F9F]" href="/">Home</a>
                        <span>{">"}</span>
                        <a className="font-poppins text-base font-semibold text-[#9F9F9F]" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
            <ContactSection />
            <FeatureSection
                features={[
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
                ]}
            />
        </main>
    );
};

export default Contact;