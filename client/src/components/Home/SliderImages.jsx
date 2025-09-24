import React, { useState } from "react";

const IMAGES = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gellary-image-7.png",
  "/assets/gallery-image-11.jpg",
  "/assets/gallery-image-13.jpg",
  "/assets/gellary-image-5.png",
];

const SliderImages = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    if (imageIndex < IMAGES.length - 3) setImageIndex(imageIndex + 1);
  };

  const showPrevImage = () => {
    if (imageIndex > 0) setImageIndex(imageIndex - 1);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-6 px-4 md:flex-row md:items-start md:gap-10">
      {/* Main Image */}
      <div className="relative w-full max-w-[404px]">
        <img
          className="h-auto w-full rounded-lg object-cover"
          src={IMAGES[imageIndex]}
          alt="slide"
        />
        {/* Caption Box */}
        <div className="absolute bottom-6 left-6 w-[80%] max-w-[217px] bg-white/70 px-6 py-6 backdrop-blur-sm sm:w-[217px]">
          <div className="flex items-center gap-1 font-poppins text-sm font-medium sm:text-base">
            <span>01</span>
            <span className="relative -top-1 font-serif">__</span>
            <p>Bed Room</p>
          </div>
          <div className="mt-2">
            <h2 className="font-poppins text-xl font-semibold sm:text-[28px]">
              Inner Peace
            </h2>
            <span className="absolute -right-10 bottom-0 flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary transition-colors duration-300 hover:bg-btnHover sm:size-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Side Images */}
      <div className="relative flex w-full max-w-[500px] items-center gap-6 md:w-auto md:gap-10">
        {/* Middle Image */}
        <div className="relative flex-1">
          <img
            className="h-auto w-full max-w-[372px] rounded-lg object-cover select-none"
            src={IMAGES[imageIndex + 1]}
            alt="slide"
          />

          {/* Prev Button */}
          {imageIndex > 0 && (
            <span
              onClick={showPrevImage}
              className="absolute -left-8 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-white shadow-md shadow-black/10 hover:bg-gray-100"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#B88E2F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </span>
          )}

          {/* Next Button */}
          {imageIndex < IMAGES.length - 3 && (
            <span
              onClick={showNextImage}
              className="absolute -right-8 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-white shadow-md shadow-black/10 hover:bg-gray-100"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#B88E2F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          )}

          {/* Dots */}
          <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {IMAGES.map((_, index) =>
              index < IMAGES.length - 2 ? (
                <span
                  key={index}
                  className={`${
                    imageIndex === index ? "bg-primary" : "bg-[#D8D8D8]"
                  } size-3 cursor-pointer rounded-full`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ) : null
            )}
          </div>
        </div>

        {/* Right Thumbnail */}
        <div className="hidden w-[120px] overflow-hidden md:block">
          <img
            className="h-auto w-full rounded-lg object-cover"
            src={IMAGES[imageIndex + 2]}
            alt="slide"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderImages;