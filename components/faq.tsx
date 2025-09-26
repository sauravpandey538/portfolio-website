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
    question: "How did you start your journey?",
    answer:
      "I began my journey in October 2023, after returning from Japan, where I had been studying the Japanese language. During that time, I developed a strong interest in computer science and decided to explore it further. I started learning through YouTube resources and managed to gain a significant amount of knowledge on my own.",
  },
  {
    question: "What is your favorite stack?",
    answer:
      "My favorite stack is  Next.js, Tailwind CSS, and TypeScript. I love the fact that I can do anything with it.",
  },

  {
    question: "What is your daily routine?",
    answer:
      "My daily routine is I wake up at 8:00 AM, I do breakfast, I start my work at 9:00 AM to  7:00 PM with some breaks, If any bug arises I fix it and if any feature is required I add it.",
  },
  {
    question: "How do you handle stress?",
    answer:
      "I handle stress by doing late night motercycle riding, doing arts and traveling.",
  },
  {
    question: "What is your proudest achievement?",
    answer:
      "My proudest achievement is I was able to score perfect GPA 4 in my 2nd year of my bachelor's degree doing work as a developer and having good attendance.",
  },
  {
    question: "How much I am comfortable with remote work?",
    answer:
      "I deliver my work on time and I am very comfortable with remote work. If some problem arises from my side, I fix it ASAP no matter if it is weekday, weekend,  day or night",
  },
  {
    question: "Where you see yourself in 5 years?",
    answer:
      "In 5 years, I see myself as a senior AI  full-stack developer and I see myself working with a team of 10-15 people and I see myself as a CTO in the company working with a product based company.",
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
