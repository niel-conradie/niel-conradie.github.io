import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope, HiHome, HiUser, HiViewColumns } from "react-icons/hi2";
import { SiCoursera } from "react-icons/si";

export const routes = [
  { name: "Home", href: "/", icon: <HiHome /> },
  { name: "About", href: "/about", icon: <HiUser /> },
  { name: "Projects", href: "/projects", icon: <HiViewColumns /> },
  {
    name: "Contact",
    href: "/contact",
    icon: <HiEnvelope />,
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/niel-conradie",
    icon: <FaGithub />,
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: <FaLinkedin /> },
  { name: "Coursera", href: "https://www.coursera.org/", icon: <SiCoursera /> },
];
