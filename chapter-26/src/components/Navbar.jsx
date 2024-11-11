import React, { useState } from "react";

const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Company",
    link: "#",
  },
  {
    name: "Community",
    link: "#",
    icon: "⌄",
    subMenu: [
      {
        name: "Seller Story",
        link: "#",
      },
      {
        name: "Life at Tokopedia",
        link: "#",
      },
    ],
  },
  {
    name: "Stories",
    link: "#",
    icon: "⌄",
    subMenu: [
      {
        name: "Behind The Scene",
        link: "#",
      },
      {
        name: "Innovation",
        link: "#",
      },
      {
        name: "Milestone",
        link: "#",
      },
      {
        name: "Operation",
        link: "#",
      },
      {
        name: "Product",
        link: "#",
      },
      {
        name: "Social Impact",
        link: "#",
      },
    ],
  },
  {
    name: "Insight",
    link: "#",
    icon: "⌄",
    subMenu: [
      {
        name: "Fashion Wanita",
        link: "#",
      },
      {
        name: "Toys & Gaming",
        link: "#",
      },
      {
        name: "Komputer & Laptop",
        link: "#",
      },
      {
        name: "Otomotif",
        link: "#",
      },
      {
        name: "Edukasi",
        link: "#",
      },
    ],
  },
  {
    name: "Top List",
    link: "#",
  },
  {
    name: "Newsroom",
    link: "#",
    icon: "⌄",
    subMenu: [
      {
        name: "Press Release",
        link: "#",
      },
      {
        name: "Siaran Pers",
        link: "#",
      },
    ],
  },
  {
    name: "Kalkupedia",
    link: "#",
    icon: "⌄",
    subMenu: [
      {
        name: "Kalkulator BMI",
        link: "#",
      },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Store opened sub-menu id
  const [rotated, setRotated] = useState(null); // Store sub-menu index

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index); // Toggle sub-menu based on its index
    setRotated(rotated === index ? null : index); // Toggle rotation on selected sub-menu
  };

  return (
    <nav className="shadow-md pb-0 md:pb-2 mb-0 md:mb-6">
      <div className="container mx-auto py-2 md:py-0 px-6 bg-black-700 md:bg-white">
        <div className="flex items-center justify-between w-full md:justify-start">
          <div
            className="md:hidden"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/tokopedia-logo.276ef32a.png"
            alt="logo"
            className="w-32 md:w-56"
          />
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/1109d775.svg"
            alt="search icon"
            className="w-6 md:hidden"
          />
        </div>
        <div className="hidden md:flex items-center w-full">
          {/* Main Menu */}
          <ul className="flex uppercase text-xs lg:text-sm font-bold w-full">
            {links.map((item, index) => (
              <li
                key={index}
                className={`p-2 border-b-4 flex relative group justify-center items-center w-full h-full ${
                  index === 0
                    ? "border-b-secondary-500"
                    : "border-b-transparent"
                } hover:border-b-secondary-500 mb-3`}
              >
                <a href={item.link} className="flex items-center">
                  <span>{item.name}</span>
                  {item.icon && (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Feather-arrows-chevron-down.svg/800px-Feather-arrows-chevron-down.svg.png?20170620140932"
                      alt="icon"
                      className="ml-1 w-4 h-4"
                    />
                  )}
                </a>
                {item.subMenu && (
                  <ul className="absolute left-0 top-9 hidden group-hover:block bg-white shadow-md py-2 w-48 z-50">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:text-secondary-500 capitalize font-normal"
                      >
                        <a href={subItem.link} className="block">
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="my-auto ml-8 flex-none p-2 flex justify-end">
            <img
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/b69a393e.svg"
              alt="search icon"
            />
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-gradient-to-b from-black-600 shadow-md z-50 h-screen">
          <div className="flex items-center justify-between px-4 py-6 mb-2">
            <div className="flex items-center gap-4">
              <img
                src="https://assets.tokopedia.net/asts/blog/icons/facebook.svg"
                alt="facebook"
                className="w-6 h-6"
              />
              <img
                src="https://assets.tokopedia.net/asts/blog/icons/instagram.svg"
                alt="instagram"
                className="w-6 h-6"
              />
              <img
                src="https://assets.tokopedia.net/asts/blog/icons/twitter.svg"
                alt="twitter"
                className="w-6 h-6"
              />
              <img
                src="https://assets.tokopedia.net/asts/blog/icons/youtube-new.svg"
                alt="youtube"
                className="w-6 h-6"
              />
            </div>
            <div>
              <img
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/a4e8c339.svg"
                alt=""
                className="w-6 h-6"
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
              />
            </div>
          </div>
          <ul className="flex flex-col text-2xl font-bold text-white-50 bg-gradient-to-b from-black-600 to-secondary-500 shadow-md px-4 py-8 space-y-8 h-full">
            {links.map((item, index) => (
              <li key={index} className="relative group">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block my-auto">{item.name}</span>
                  </div>
                  {item.icon && (
                    <img
                      src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/fbffa416.svg"
                      alt=""
                      className={`cursor-pointer w-4 h-4 rotate-90  ${
                        rotated === index ? "rotate-180" : ""
                      } transition-transform`}
                      onClick={() => item.subMenu && toggleSubMenu(index)}
                    />
                  )}
                </div>
                {item.subMenu && openSubMenu === index && (
                  <ul className="mt-2 pl-4">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <a
                          href={subItem.link}
                          className="block text-lg font-normal"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
