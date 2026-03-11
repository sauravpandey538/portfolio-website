import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@react-email/components";
import React from "react";
import MainHeading, { Paragraph } from "./text";

const faq = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in building modern web applications using Next.js, TypeScript, and Tailwind CSS. I also work with Node.js, PostgreSQL, and cloud platforms like AWS and GCP to build scalable full-stack systems.",
  },
  {
    question: "What type of projects do you enjoy building?",
    answer:
      "I enjoy building scalable web applications, AI-powered products, and real-time systems. I particularly like working on projects that combine modern web development with automation, APIs, and cloud infrastructure.",
  },
  {
    question: "How do you approach solving complex problems?",
    answer:
      "I break problems into smaller components, design a clear architecture, and focus on building scalable and maintainable solutions. I also rely on debugging, testing, and iterative improvement to ensure reliability.",
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "I focus on writing clean, modular code, using TypeScript for type safety, and structuring applications with maintainable architecture. I also follow best practices such as reusable components, proper error handling, and clear documentation.",
  },
  {
    question: "Are you comfortable with remote work?",
    answer:
      "Yes, I am very comfortable working remotely. I communicate clearly, manage my time effectively, and ensure tasks are delivered on schedule while collaborating efficiently with teams.",
  },
  {
    question: "What makes you different from other developers?",
    answer:
      "I combine strong problem-solving skills with continuous learning and a passion for building real products. I focus not just on writing code but on designing scalable systems and delivering practical solutions.",
  },
  {
    question: "Do you use AI tools in your development workflow?",
    answer:
      "Yes. I use AI-assisted development tools such as Cursor, Loveable and other tools to speed up development, improve productivity, and explore solutions faster. However, I always review, optimize, and structure the code to ensure quality, scalability, and maintainability.",
  },
  {
    question: "What are your long-term goals as a developer?",
    answer:
      "My goal is to grow into a senior full-stack developer specializing in AI-powered applications and scalable systems, eventually contributing to building impactful products within strong engineering teams.",
  },
];

function Faq() {
  return (
    <div className="relative overflow-hidden">
      {/* Outer wrapper → gradient background */}
      <div
        className="container mx-auto flex flex-col gap-4 max-w-4xl 
        p-[2px] "
      >
        <MainHeading
          text="Frequently Asked Questions"
          className="text-center text-cyan-500"
        />
        <Paragraph
          text="Here are some of the most frequently asked questions about my journey."
          className="text-center mb-6"
        />
        {/* Inner wrapper → solid background */}

        {/* Decorative ray */}
        <div
          className="absolute top-[50%] -right-80 w-[800px] h-36
              bg-gradient-to-r from-purple-400/30 via-purple-500/10 to-transparent
              blur-2xl pointer-events-none rotate-[140deg]"
        />
        <div className="rounded-lg bg-gradient-to-b from-cyan-300/50 to-[#694EFB]/50 p-[1px]">
          <div className="bg-background rounded-lg p-12">
            {/* Accordion list */}
            <Accordion type="single" collapsible className="space-y-2">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
