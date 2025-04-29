import React from "react";
import Logo from "../images/logo.png";

// menu item list
const menuItems = [
  {
    index: 0,
    menuItem: "Solutions",
  },
  {
    index: 1,
    menuItem: "Industries",
  },
  {
    index: 2,
    menuItem: "Enterprise",
  },
  {
    index: 3,
    menuItem: "Our Customers",
  },
  {
    index: 4,
    menuItem: "Become Our Partner",
  },
  {
    index: 5,
    menuItem: "Company",
  },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto">
                    <nav className="flex items-center justify-between bg-white shadow px-12 py-4 rounded-br-xl rounded-bl-xl">
                        <div>
                            <a href="#">
                                <img src={Logo} alt="Logo" className="max-h-9 xl:max-h-11" />
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <ul className="flex space-x-4 gap-3">
                                {
                                  menuItems.map((item, index) => (
                                      <li key={index}>
                                          <a href="#" className="text-secondary hover:text-primary transition duration-300 text-sm font-semibold">{item.menuItem}</a>
                                      </li>
                                  ))
                                }
                            </ul>
                            <button className="bg-primary text-white px-4 border border-primary py-2 rounded-lg font-semibold text-base hover:bg-transparent hover:text-primary transition duration-300 font-semibold text-sm">
                                Book a Demo
                            </button>
                        </div>
                    </nav>
                </div>
        </header>
    )
}

export default Header;