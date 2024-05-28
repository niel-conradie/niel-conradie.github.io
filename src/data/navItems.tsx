import { HiEnvelope, HiHome, HiUser, HiViewColumns } from "react-icons/hi2";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HiHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <HiUser />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <HiViewColumns />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <HiEnvelope />,
  },
];
