import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiEnvelope,
  HiHome,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import { SiCoursera } from "react-icons/si";

export const routes = [
  { name: "Home", href: "/", icon: <HiHome />, active: <HiHome /> },
  { name: "About", href: "/about", icon: <HiUser />, active: <HiUser /> },
  {
    name: "Projects",
    href: "/projects",
    icon: <HiViewColumns />,
    active: <HiViewColumns />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <HiEnvelope />,
    active: <HiEnvelope />,
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "#",
    icon: <FaGithub />,
  },
  { name: "LinkedIn", href: "#", icon: <FaLinkedin /> },
  { name: "Coursera", href: "#", icon: <SiCoursera /> },
];
