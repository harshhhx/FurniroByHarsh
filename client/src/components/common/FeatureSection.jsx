import React from "react";

const FeatureSection = ({ features }) => {
  return (
    <div className="mb-5 flex flex-col justify-between gap-5 bg-[#F9F1E7] p-16 lg:flex-row lg:items-center">
      {features.map(({ title, desc, icon: Icon }, idx) => (
        <div key={idx} className="flex items-center gap-4">
          {Icon && <Icon size={64} strokeWidth={2} />}
          <div>
            <h2 className="font-poppins text-2xl font-semibold">{title}</h2>
            <p className="font-poppins text-xl font-medium text-[#898989]">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
