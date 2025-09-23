
import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../constants/links";

const Footer = () => {
  return (
    <section className="bg-white border-t-1 border-gray-300">
      <div className="container mx-auto p-8">
        <div className="mb-5 flex flex-col items-start justify-between gap-5 lg:flex-row">
          {/* Logo and address */}
          <div className="max-w-72">
            <Link to="/" className="flex items-center gap-[5px]">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-[25px] w-[40px] md:h-[32px] md:w-[50px]"
              />
              <h1 className="text-2xl font-bold md:text-[34px]">Furniro</h1>
            </Link>
            <p className="mt-16 font-poppins text-base font-normal text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          {/* Links and Help */}
          <div className="my-5 flex items-start gap-20">
            <div>
              <h3 className="mb-14 font-poppins text-base font-medium text-[#9F9F9F]">
                Links
              </h3>
              <nav className="flex flex-col items-start gap-12">
                {links.map((i) => (
                  <Link
                    to={i.url}
                    key={i.title}
                    className="font-poppins text-base font-medium transition-colors duration-300 hover:text-primary"
                  >
                    {i.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="mb-14 font-poppins text-base font-medium text-[#9F9F9F]">
                Help
              </h3>
              <ul className="flex flex-col items-start gap-12">
                <li className="cursor-pointer font-poppins text-base font-medium transition-colors duration-300 hover:text-primary">
                  Payment Options
                </li>
                <li className="cursor-pointer font-poppins text-base font-medium transition-colors duration-300 hover:text-primary">
                  Returns
                </li>
                <li className="cursor-pointer font-poppins text-base font-medium transition-colors duration-300 hover:text-primary">
                  Privacy Policies
                </li>
              </ul>
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="mb-14 font-poppins text-xs font-medium text-[#9F9F9F] md:text-sm">
              Newsletter
            </h3>
            <div className="flex gap-5">
              <input
                className="border-b-1 border-black py-1 pr-5 outline-none"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <button className="relative overflow-hidden border-b-1 border-black font-poppins text-xs font-medium uppercase transition-colors duration-300 hover:text-primary md:text-sm">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div>
          <p className="mb-12 mt-5 text-center font-poppins text-base lg:text-start">
            {new Date().getFullYear()} Furniro. Powered by {" "}
            <a
              href="#"
              className="font-semibold text-blue-600 hover:text-blue-800"
              target="_blank" rel="noopener noreferrer"
            >
              Harsh Chouhan
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;