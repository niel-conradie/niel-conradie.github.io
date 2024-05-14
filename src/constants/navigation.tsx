import { HiEnvelope, HiHome, HiUser, HiViewColumns } from "react-icons/hi2";
import { SiCoursera, SiGithub, SiLinkedin } from "react-icons/si";

export const routes = [
  {
    name: "Home",
    href: "/",
    icon: <HiHome />,
    active: <HiHome />,
  },
  {
    name: "About",
    href: "/about",
    icon: <HiUser />,
    active: <HiUser />,
  },
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
    href: "https://github.com/niel-conradie",
    icon: <SiGithub />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <SiLinkedin />,
  },
  {
    name: "Coursera",
    href: "#",
    icon: <SiCoursera />,
  },
];
