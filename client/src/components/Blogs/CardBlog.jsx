const CardBlog = ({ image, title, description, date, tag, auother }) => (
  <div className="flex max-w-[817px] flex-col items-start gap-5 rounded-md">
    <div>
      <img src={image} alt="blog image" width={817} height={500} />
      <div className="mt-2 flex items-center justify-between gap-4 text-[#9F9F9F] md:justify-center md:gap-10">
        <span className="flex items-center gap-2">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
          <p className="font-poppins text-xs md:text-base">{auother}</p>
        </span>
        <span className="flex items-center gap-2">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4m-4 4h16"/></svg>
          <p className="font-poppins text-xs md:text-base">{date}</p>
        </span>
        <span className="flex items-center gap-2">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4m-4 4h16"/></svg>
          <p className="font-poppins text-xs md:text-base">{tag}</p>
        </span>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="my-2 font-poppins text-base font-medium md:text-3xl">{title}</h3>
      <p className="text-justify font-poppins text-xs text-[#9F9F9F] md:text-sm">{description}</p>
      <span className="readmore relative mt-8 w-fit cursor-pointer font-poppins text-xs text-black transition-colors duration-200 hover:text-primary md:text-base">Read More</span>
    </div>
  </div>
);

export default CardBlog;
