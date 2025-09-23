import React from "react";

const Browse = () => {
  return (
    <section className="container mx-auto px-8 py-16">
      <div className="text-center">
        <h1 className="font-poppins text-2xl font-bold md:text-[32px]">
          Browse The Range
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <img src="/assets/browse-item-1.png" alt="Dining" className="rounded-lg" />
          <span className="mt-4 font-poppins text-lg font-semibold">Dining</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/browse-item-2.png" alt="Living" className="rounded-lg" />
          <span className="mt-4 font-poppins text-lg font-semibold">Living</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/browse-item-3.png" alt="Bedroom" className="rounded-lg" />
          <span className="mt-4 font-poppins text-lg font-semibold">Bedroom</span>
        </div>
      </div>
    </section>
  );
};

export default Browse;
