import { Link } from "react-router-dom";
import { links } from "../../constants/links";
import { icons } from "../../constants/headerIcons";
import { User, Heart, Search, ShoppingCart } from "lucide-react";

const iconMap = {
  user: <User aria-label="User" />,
  search: <Search aria-label="Search" />,
  heart: <Heart aria-label="Wishlist" />,
  cart: <ShoppingCart aria-label="Cart" />,
};

const Header = () => {
  return (
    <header className="container mx-auto flex h-[95px] items-center justify-between px-8 py-9">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-[5px]">
        <img
          src="/assets/logo.png"
          alt="Furniro Logo"
          className="h-[25px] w-[40px] md:h-[32px] md:w-[50px]"
        />
        <h1 className="text-2xl font-bold md:text-[34px]">Furniro</h1>
      </Link>

      {/* Navbar */}
      <nav className="hidden items-center gap-[75px] lg:flex">
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

      {/* Icons */}
      <ul className="flex items-center gap-3 md:gap-12">
        {icons.map((i) => (
          <li
            key={i.icon}
            className="cursor-pointer transition-colors duration-300 hover:text-primary"
          >
            {iconMap[i.icon]}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;