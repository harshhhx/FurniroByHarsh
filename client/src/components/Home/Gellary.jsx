import React from "react";

const Gallery = () => {
  return (
    <section className="pb-[50px] pt-[70px]">
      {/* Title */}
      <div className="pb-5 text-center font-poppins">
        <p className="mb-2 text-base font-semibold md:text-xl md:font-medium">
          Share your setup with
        </p>
        <h1 className="text-2xl font-bold md:text-[40px]">#FuniroFurniture</h1>
      </div>

      {/* Gallery Grid */}
      <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src="/assets/gellary-image-1.png"
              alt="gallery-1"
              className="h-auto w-full max-w-[300px] rounded-md object-cover sm:w-[280px]"
            />
            <img
              src="/assets/gallery-image-10.jpg"
              alt="gallery-2"
              className="h-auto w-full max-w-[675px] rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src="/assets/gellary-image-3.png"
              alt="gallery-3"
              className="h-auto w-full max-w-[281px] rounded-md object-cover"
            />
            <img
              src="/assets/gellary-image-4.png"
              alt="gallery-4"
              className="h-auto w-full max-w-[500px] rounded-md object-cover"
            />
          </div>
        </div>

        {/* Center Image */}
        <img
          src="/assets/gallery-image-11.jpg"
          alt="gallery-5"
          className="h-auto w-full max-w-[550px] rounded-md object-cover"
        />

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src="/assets/gallery-image-14.jpg"
              alt="gallery-6"
              className="h-auto w-full max-w-[600px] rounded-md object-cover"
            />
            <img
              src="/assets/gellary-image-7.png"
              alt="gallery-7"
              className="h-auto w-full max-w-[280px] rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src="/assets/gallery-image-13.jpg"
              alt="gallery-8"
              className="h-auto w-full max-w-[350px] rounded-md object-cover"
            />
            <img
              src="/assets/gallery-image-12.jpg"
              alt="gallery-9"
              className="h-auto w-full max-w-[550px] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;