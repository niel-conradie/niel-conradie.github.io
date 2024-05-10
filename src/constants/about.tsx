import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiSass,
  SiTypescript,
} from "react-icons/si";

export const categories = [
  { name: "Technology", value: "technology" },
  { name: "Qualification", value: "qualification" },
  { name: "Experience", value: "experience" },
];

export const technologies = [
  {
    title: "Languages",
    languages: [
      {
        name: "Python",
        icon: <SiPython />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Html",
        icon: <SiHtml5 />,
      },
      {
        name: "Css",
        icon: <SiCss3 />,
      },
      {
        name: "Sass",
        icon: <SiSass />,
      },
    ],
  },
  {
    title: "Backend",
  },
  {
    title: "Frontend",
  },
  {
    title: "Utility",
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