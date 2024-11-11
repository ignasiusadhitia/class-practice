import React from "react";

const links = [
  {
    name: "Tentang Kami",
    link: "#",
  },
  {
    name: "Pusat Penjualan",
    link: "#",
  },
  {
    name: "Mobile Apps",
    link: "#",
  },
  {
    name: "Mitra",
    link: "#",
  },
  {
    name: "Karir",
    link: "#",
  },
  {
    name: "Tokopedia Care",
    link: "#",
  },
  {
    name: "B2B digital",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className=" p-6 bg-neutral-50 text-neutral-400 text-xs">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:block">
          <p className="text-center md:text-left mt-6 md:mt-0">
            © 2009-2024, PT Tokopedia
          </p>
          <ul className="flex flex-wrap gap-4 px-16 md:px-0 md:gap-6 mt-4">
            {links.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
