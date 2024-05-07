import { BiLogoDjango } from "react-icons/bi";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const projects = [
  {
    title: "Project 1",
    description: "Description 1",
    source: "#",
    preview: "#",
    images: [
      { src: "./projects/1.jpg", alt: "Project 1" },
      { src: "./projects/2.jpg", alt: "Project 1" },
      { src: "./projects/3.jpg", alt: "Project 1" },
      { src: "./projects/4.jpg", alt: "Project 1" },
    ],
    tags: [
      { name: "Django", icon: <BiLogoDjango /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
      { name: "Next.js", icon: <RiNextjsLine /> },
      { name: "Shadcn/ui", icon: <SiShadcnui /> },
    ],
  },
  {
    title: "Project 2",
    description: "Description 2",
    source: "#",
    preview: "#",
    images: [
      { src: "./projects/2.jpg", alt: "Project 2" },
      { src: "./projects/3.jpg", alt: "Project 2" },
      { src: "./projects/4.jpg", alt: "Project 2" },
      { src: "./projects/1.jpg", alt: "Project 2" },
    ],
    tags: [
      { name: "Django", icon: <BiLogoDjango /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
    ],
  },
  {
    title: "Project 3",
    description: "Description 3",
    source: "#",
    preview: "#",
    images: [
      { src: "./projects/3.jpg", alt: "Project 3" },
      { src: "./projects/4.jpg", alt: "Project 3" },
      { src: "./projects/1.jpg", alt: "Project 3" },
      { src: "./projects/2.jpg", alt: "Project 3" },
    ],
    tags: [{ name: "Next.js", icon: <RiNextjsFill /> }],
  },
  {
    title: "Project 4",
    description: "Description 4",
    source: "#",
    preview: "#",
    images: [
      { src: "./projects/4.jpg", alt: "Project 4" },
      { src: "./projects/1.jpg", alt: "Project 4" },
      { src: "./projects/2.jpg", alt: "Project 4" },
      { src: "./projects/3.jpg", alt: "Project 4" },
    ],
    tags: [{ name: "Django", icon: <BiLogoDjango /> }],
  },
];

export const filters = [
  {
    name: "All",
    value: "",
  },
  {
    name: "Django",
    value: "Django",
  },
  {
    name: "Next.js",
    value: "Next.js",
  },
];
