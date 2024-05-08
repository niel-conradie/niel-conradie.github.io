import { BiLogoDjango } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const projects = [
  {
    title: "Project 1",
    description: "Django & Next.js Task Manager Application",
    image: "./projects/1.jpg",
    source: "#",
    preview: "#",
    tags: [
      { name: "Django", icon: <BiLogoDjango /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
      { name: "Next.js", icon: <RiNextjsLine /> },
      { name: "Shadcn/ui", icon: <SiShadcnui /> },
    ],
  },
  {
    title: "Project 2",
    description: "Django & Next.js Blogging Application",
    image: "./projects/2.jpg",
    source: "#",
    preview: "#",
    tags: [
      { name: "Django", icon: <BiLogoDjango /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
      { name: "Next.js", icon: <RiNextjsLine /> },
      { name: "Shadcn/ui", icon: <SiShadcnui /> },
    ],
  },
  {
    title: "Project 3",
    description: "Fullstack Next.js Music Player Application",
    image: "./projects/3.jpg",
    source: "#",
    preview: "#",
    tags: [
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
      { name: "Next.js", icon: <RiNextjsLine /> },
      { name: "Shadcn/ui", icon: <SiShadcnui /> },
    ],
  },
  {
    title: "Project 4",
    description: "Fullstack Django Image Uploader Application",
    source: "#",
    preview: "#",
    image: "./projects/4.jpg",
    tags: [{ name: "Django", icon: <BiLogoDjango /> }],
  },
];
