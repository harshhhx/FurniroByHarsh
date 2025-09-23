import React from "react";

const RecentPost = ({ image, title, date }) => (
  <div className="flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <img src={image} alt="blog image" width={80} height={80} />
      <div className="flex flex-col gap-2">
        <h3 className="font-poppins text-base font-semibold text-[#9F9F9F]">{title}</h3>
        <p className="font-poppins text-xs text-[#9F9F9F]">{date}</p>
      </div>
    </div>
    <span className="font-poppins text-base font-semibold text-[#9F9F9F]"></span>
  </div>
);

export default RecentPost;
