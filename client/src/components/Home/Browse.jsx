import React from "react";

const Browse = () => {
  return (
    <section className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="font-poppins text-2xl font-bold md:text-[32px]">
          Browse The Range
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="/assets/browse-item-1.png"
              alt="Dining"
              className="h-auto w-full object-cover"
            />
          </div>
          <span className="mt-4 font-poppins text-lg font-semibold">
            Dining
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="/assets/browse-item-2.png"
              alt="Living"
              className="h-auto w-full object-cover"
            />
          </div>
          <span className="mt-4 font-poppins text-lg font-semibold">
            Living
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="/assets/browse-item-3.png"
              alt="Bedroom"
              className="h-auto w-full object-cover"
            />
          </div>
          <span className="mt-4 font-poppins text-lg font-semibold">
            Bedroom
          </span>
        </div>
      </div>
    </section>
  );
};

export default Browse;