import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  figma,
  postgresql,
  flutter,
  kotlin,
  elysia,
  ai,
  komikult,
  leaderboard,
  math,
  movie,
  covid,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  wcn,
  vrp,
  rmdy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "AI Development",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Elysia",
    icon: elysia,
  },
  {
    name: "AI/ML",
    icon: ai,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Cover Hunt",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Mentor (Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Kelhel",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2022 - Oct 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#333333",
    date: "Sep 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "WCN",
    description:
      "An app that lets you book and manage air cargo on the go. Get real-time rates from 60+ airlines, instant booking, and full control—right from your phone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: wcn,
  },
  {
    id: "project-2",
    name: "VRP",
    description:
      "A feature-rich system designed to help the Palestinian government monitor wells and water sources, track their yield, and perform comparisons through an interactive dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: vrp,
  },
  {
    id: "project-3",
    name: "RMDY",
    description:
      "A healthcare platform that connects patients with doctors, enabling real-time health monitoring and tracking of vital measurements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: rmdy,
  },
  {
    id: "project-4",
    name: "COVID-19 Tracker",
    description:
      "A real-time COVID-19 tracking application for monitoring cases in Palestine.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
  },
];

export { services, technologies, experiences, projects };
