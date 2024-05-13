import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const categories = [
  { name: "Technology", value: "technology" },
  { name: "Qualification", value: "qualification" },
  { name: "Experience", value: "experience" },
];

export const technologies = [
  {
    title: "Languages",
    info: [
      {
        name: "Python",
        icon: <SiPython />,
        class: "python",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        class: "javascript",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        class: "typescript",
      },
      {
        name: "Html",
        icon: <SiHtml5 />,
        class: "html",
      },
      {
        name: "Css",
        icon: <SiCss3 />,
        class: "css",
      },
      {
        name: "Sass",
        icon: <SiSass />,
        class: "sass",
      },
    ],
  },
  {
    title: "Backend",
    info: [
      {
        name: "Django",
        icon: <SiDjango />,
        class: "django",
      },
      {
        name: "Django Rest Framework",
        icon: <SiDjango />,
        class: "django-rest-framework",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        class: "next-js",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        class: "postgresql",
      },
    ],
  },
  {
    title: "Frontend",
    info: [
      {
        name: "Django",
        icon: <SiDjango />,
        class: "django",
      },
      {
        name: "React",
        icon: <SiReact />,
        class: "react",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        class: "next-js",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux />,
        class: "redux-toolkit",
      },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss />,
        class: "tailwindcss",
      },
      {
        name: "Shadcn/ui",
        icon: <SiShadcnui />,
        class: "shadcn-ui",
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion />,
        class: "framer-motion",
      },
      {
        name: "React Hook Form",
        icon: <SiReacthookform />,
        class: "react-hook-form",
      },
      {
        name: "Zod",
        icon: <SiZod />,
        class: "zod",
      },
    ],
  },
  {
    title: "Utility",
    info: [
      {
        name: "Git",
        icon: <SiGit />,
        class: "git",
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        class: "github",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        class: "docker",
      },
    ],
  },
];

export const qualifications = [
  {
    title: "Back-End Developer Professional Certificate",
    location: "Meta",
    image: "./certificates/1.jpg",
    href: "#",
  },
  {
    title: "Front-End Developer Professional Certificate",
    location: "Meta",
    image: "./certificates/1.jpg",
    href: "#",
  },
  {
    title: "Web Design for Everybody Specialization",
    location: "University of Michigan",
    image: "./certificates/1.jpg",
    href: "#",
  },
  {
    title: "PostgreSQL for Everybody Specialization",
    location: "University of Michigan",
    image: "./certificates/1.jpg",
    href: "#",
  },
  {
    title: "Django for Everybody Specialization",
    location: "University of Michigan",
    image: "./certificates/1.jpg",
    href: "#",
  },
  {
    title: "Python 3 Programming Specialization",
    location: "University of Michigan",
    image: "./certificates/1.jpg",
    href: "#",
  },
  {
    title: "Python for Everybody Specialization",
    location: "University of Michigan",
    image: "./certificates/1.jpg",
    href: "#",
  },
];

export const experiences = [];
