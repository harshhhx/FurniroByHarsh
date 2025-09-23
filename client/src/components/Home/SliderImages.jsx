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
    <div className="absolute -right-0 top-0 flex items-start justify-center gap-10">
      <div className="relative max-h-[582px] max-w-[404px]">
        <img
          className="max-h-[582px] max-w-[404px]"
          src={IMAGES[imageIndex]}
          alt="slide"
          width={404}
          height={582}
        />
        <div className="absolute bottom-6 left-6 h-[130px] w-[217px] bg-white/60 pl-8 pt-8">
          <div className="flex items-center gap-1 font-poppins text-base font-medium">
            <span>01</span>
            <span className="relative -top-1.5 font-serif">__</span>
            <p>Bed Room</p>
          </div>
          <div>
            <h2 className="font-poppins text-[28px] font-semibold">Inner Peace</h2>
            <span className="absolute -right-12 bottom-0 flex size-12 cursor-pointer items-center justify-center bg-primary transition-colors duration-300 hover:bg-btnHover">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right size-5 text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-10 transition-all duration-300">
        <div className="relative">
          <img
            className="max-h-[486px] max-w-[372px] select-none"
            src={IMAGES[imageIndex + 1]}
            alt="slide"
            width={372}
            height={486}
          />
          {imageIndex > 0 && (
            <span
              onClick={showPrevImage}
              className="absolute left-[-40px] top-1/2 flex size-11 -translate-y-1/2 translate-x-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-white shadow-md shadow-black/10"
            >
              <svg width="24" height="24" fill="none" stroke="#B88E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </span>
          )}
          {imageIndex < IMAGES.length - 3 && (
            <span
              onClick={showNextImage}
              className="absolute right-0 top-1/2 flex size-11 -translate-y-1/2 translate-x-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-white shadow-md shadow-black/10"
            >
              <svg width="24" height="24" fill="none" stroke="#B88E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
          )}
          <div className="absolute -bottom-12 left-2 z-20 flex w-full -translate-y-1/2 items-center gap-4">
            {IMAGES.map((_, index) =>
              index < IMAGES.length - 2 ? (
                <span
                  key={index}
                  className={`${imageIndex === index ? "bg-primary" : "bg-[#D8D8D8]"} relative size-[11px] cursor-pointer rounded-full`}
                  onClick={() => setImageIndex(index)}
                ></span>
              ) : null
            )}
          </div>
        </div>
        <div className="w-[100px] overflow-hidden">
          <img
            className="max-h-[486px] max-w-[372px] object-cover"
            src={IMAGES[imageIndex + 2]}
            alt="slide"
            width={372}
            height={486}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderImages;
