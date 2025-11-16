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
import whiteSajiloPdf from "@/public/Sajilo_Pdf.png";
import npmDevkitLite from "@/public/npm.png";

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
    url: "https://codesync-lac.vercel.app/",
    githubUrl: "https://github.com/sauravpandey538/Code_Sync",
  },
  {
    title: "Devkit-Lite",
    description:
      "A lightweight TypeScript utility library providing essential developer tools for placeholder images, lorem ipsum text generation, and enhanced console logging.",
    tags: ["chalk", "lorem-ipsum"],
    whiteUrl: npmDevkitLite,
    blackUrl: npmDevkitLite,
    url: "https://www.npmjs.com/package/devkit-lite",
    githubUrl: "https://github.com/sauravpandey538/devkit-lite",
  },
  {
    title: "SajiloPdf",
    description:
      "A very simple platform that allows students to generate and manipulate documents in PDF format.",
    tags: ["PDF Generation", "Assignment Helper", "PDF Manipulation"],
    whiteUrl: whiteSajiloPdf,
    url: "https://sajilopdf.vercel.app/",
    blackUrl: whiteSajiloPdf,
    githubUrl: "https://github.com/sauravpandey538/pdf2pdf",
  },
] as any;
export const companyProjects = [
  {
    title: "MigrantMinds",
    description:
      "This platform uses AI to analyze profiles and create documents for the UK Global Talent Visa (GTV) and UK Innovator Founder Visa (IFV).",
    tags: ["AI Analysis", "GCP", "AI Document Generation"],
    whiteUrl: migrantMinds,
    blackUrl: migrantMinds,
    url: "https://migrantminds.co.uk",
  },
  {
    title: "TiffinBox",
    description:
      "A meal ordering platform with weekly plan management and a full ecosystem for customers, vendors, delivery partners, and admin(platform).",
    tags: ["Ecommerce", "Marketplace", "Ecommerce EcoSystem"],
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
