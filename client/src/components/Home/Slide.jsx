import React from "react";
import SliderImages from "./SliderImages";

const Slide = () => {
    return (
        <section className="relative bg-bg-secondary px-8 py-16">
            <div className="container mx-auto flex flex-col items-center justify-start gap-5 lg:flex-row lg:justify-between">
                <div className="flex flex-col items-center justify-center lg:items-start">
                    <h1 className="font-poppins text-[40px] font-bold">
                        50+ Beautiful rooms inspiration
                    </h1>
                    <p className="font-poppins text-base font-medium text-[#616161]">
                        Our designer already made a lot of beautiful prototipe of rooms that inspire you
                    </p>
                    <button className="mb-5 mt-[25px] flex h-[48px] w-[176px] items-center justify-center bg-primary font-poppins text-base font-semibold text-white transition-colors duration-300 hover:bg-btnHover">
                        Explore More
                    </button>
                </div>
                {/* Working SliderImages */}
                        <div className="relative hidden md:flex h-[582px] w-[1196px] overflow-hidden bg-gray-200 items-center justify-center">
                            <SliderImages />
                        </div>
            </div>
        </section>
    );
};

export default Slide;
