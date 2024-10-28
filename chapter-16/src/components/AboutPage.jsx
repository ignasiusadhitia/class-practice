import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./Navbar";

const navItems = [
  { name: "About", url: "#", isActive: true },
  { name: "Our Services", url: "#", isActive: false },
  { name: "Portfolio", url: "#", isActive: false },
  { name: "Blog", url: "#", isActive: false },
  { name: "Contact", url: "#", isActive: false },
];

const leaders = [
  {
    imgUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Larry F. Burnett",
    role: "CEO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/61.jpg",
    name: "Meghan J. Webb",
    role: "CTO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/94.jpg",
    name: "Yvonne J. Cullum",
    role: "CFO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/62.jpg",
    name: "Diana H. Williams",
    role: "COO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Larry F. Burnett",
    role: "CEO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/61.jpg",
    name: "Meghan J. Webb",
    role: "CTO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/94.jpg",
    name: "Yvonne J. Cullum",
    role: "CFO",
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/62.jpg",
    name: "Diana H. Williams",
    role: "COO",
  },
];

const footerNavItems = {
  icons: [
    { iconClassName: "bi-linkedin" },
    { iconClassName: "bi-instagram" },
    { iconClassName: "bi-facebook" },
    { iconClassName: "bi-twitter" },
  ],
  services: [
    { name: "Web Design/Development", url: "#" },
    { name: "App Development", url: "#" },
    { name: "UI/UX Design", url: "#" },
    { name: "HubSpot Integration", url: "#" },
    { name: "Email Marketing", url: "#" },
    { name: "Website Migration", url: "#" },
  ],
  careers: [
    {
      iconClassName: "bi-browser-chrome",
      title: "ReactJs Dev",
      experience: "1-5 Years of Exp.",
    },
    {
      iconClassName: "bi-wordpress",
      title: "Wordpress Dev",
      experience: "1-5 Years of Exp.",
    },
    {
      iconClassName: "bi-browser-edge",
      title: "Python Dev",
      experience: "1-5 Years of Exp.",
    },
  ],
};

const AboutPage = () => {
  return (
    <>
      <NavBar items={navItems} />
      <Header title="About" />
      <Main items={leaders} />
      <Footer items={footerNavItems} />
    </>
  );
};

export default AboutPage;
