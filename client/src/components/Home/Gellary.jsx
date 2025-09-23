import React from "react";

const Gellary = () => {
  return (
    <section className="pb-[50px] pt-[70px]">
      <div className="pb-5 text-center font-poppins">
        <p className="mb-2 text-base font-semibold md:text-xl md:font-medium">
          Share your setup with
        </p>
        <h1 className="text-2xl font-bold md:text-[40px]">#FuniroFurniture</h1>
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div>
              <img src="/assets/gellary-image-1.png" alt="gallery-1" />
            </div>
            <div>
              <img src="/assets/gallery-image-10.jpg" alt="gallery-2" style={{width:675, height:450}} />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src="/assets/gellary-image-3.png" alt="gallery-3" style={{width:281, height:281}} />
            </div>
            <div>
              <img src="/assets/gellary-image-4.png" alt="gallery-4" style={{width:500, height:381}} />
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/gallery-image-11.jpg" alt="gallery-5" style={{width:550, height:600}} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-5">
            <div>
              <img src="/assets/gallery-image-14.jpg" alt="gallery-6" style={{width:600, height:300}} />
            </div>
            <div>
              <img src="/assets/gellary-image-7.png" alt="gallery-7" />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src="/assets/gallery-image-13.jpg" alt="gallery-8" style={{width:350, height:500}} />
            </div>
            <div>
              <img src="/assets/gallery-image-12.jpg" alt="gallery-9" style={{width:550, height:400}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gellary;
