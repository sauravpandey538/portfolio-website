import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import whiteCodeSync from "@/public/code_sync_white.png";
import whiteSchoolGrid from "@/public/school_grid_white.png";
import blackCodeSync from "@/public/code_sync_black.png";
import blackSchoolGrid from "@/public/school_grid_black.png";
import { MdCelebration } from "react-icons/md";
import migrantMinds from "@/public/migrantminds.png";
import tiffinBox from "@/public/tiffinbox.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "2nd runner up in Hackathon",
    location: "Kathmandu, Nepal",
    description:
      "I participated in a Texas College Volume 1 Hackathon and we secured 2nd runner up position.",
    icon: React.createElement(MdCelebration),
    date: "2025 April",
  },
  {
    title: "Full-Stack Developer",
    location: "Wembly, London",
    description:
      "I started my journey as a full-stack developer in 2024. I'm currently working as a full time full stack developer in a company named CrowdBazaar. I'm open to freelance opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 August - present",
  },
  {
    title: "Bachelor of Science in Computer Science",
    location: "Kathmandu, Nepal",
    description:
      "I'm currently pursuing my Bachelor in Information Technology (BIT) at a college named Texas International College of Management and Technology with a overall  CGPA of  3.92",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Graduated High School",
    location: "Kathmandu, Nepal",
    description:
      "I graduated physical science from a college named Times International College with GPA 3.78",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const myProjects = [
  {
    title: "CodeSync",
    description:
      "The platform that compile JavaScript and TypeScript code. And It also provide room where multiple users can interact with each other doing code sharing and collaboration.",
    tags: ["Editor"],
    whiteUrl: whiteCodeSync,
    blackUrl: whiteCodeSync,
    url: "https://code-sync-silk.vercel.app/",
    githubUrl: "https://github.com/sauravpandey538/Code_Sync",
  },
  {
    title: "SchoolGrid",
    description:
      "A platform that allows college faculty to manage their teachers and students, providing a dashboard that includes timetable, real-time notice, etc",
    tags: ["Pusher-js"],
    whiteUrl: whiteSchoolGrid,
    url: "https://school-grid-lyart.vercel.app/",
    blackUrl: whiteSchoolGrid,
    githubUrl: "https://github.com/sauravpandey538/Hackathon",
  },
] as any;
export const companyProjects = [
  {
    title: "MigrantMinds",
    description:
      "This platform  is designed to make a  documents for Global Talent Visa (GTV) and Innovator Founder Visa (IFV) using AI.",
    tags: ["Gemini API"],
    whiteUrl: migrantMinds,
    blackUrl: migrantMinds,
    url: "https://migrantminds.co.uk",
  },
  {
    title: "TiffinBox",
    description:
      "A platform that allows vendors to manage their weekly meal plans, and customers to order their meals online.",
    tags: ["Stripe Marketplace"],
    whiteUrl: tiffinBox,
    url: "https://tiffinbox.store",
    blackUrl: tiffinBox,
  },
] as any;

export const skillsData = [
  "Next.js",
  "Shadcn",
  "React js",
  "Node.js",
  "Express js",
  "Knex.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Chakra UI",
  "Framer Motion",
  "GitHUB",
  "AWS S3 Bucket",
  "Vercel",
  "Puppeteer",
  "Stripe",
  "META API",
  "Pusher JS",
  "O-Auth",
  "Postman",
  "Redux",
  "Zustand",
] as const;

export const myInfo = {
  name: "Saurav Pandey",
  email: "hi@sauravpandey.com",
  phone: "+9779869751266",
  address: "Kathmandu, Nepal",
  linkedin: "https://www.linkedin.com/in/saurav-pandey-b3648530a/",
  github: "https://github.com/sauravpandey538/",
  leetcode: "https://leetcode.com/u/sauravpandey0325/",
};
