"use client";
import React from "react";
import { FaNodeJs, FaReact, FaStripe, FaWhatsapp } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiChakraui,
  SiPuppeteer,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiCloudflare,
  SiGooglecalendar,
} from "react-icons/si";
import { BsFillRocketFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiGeminiFill } from "react-icons/ri";

function AnimatedExpertise() {
  const icons = [
    {
      id: 1,
      icon: <SiPostman size={24} className="text-orange-500" />,
      title: "Postman",
    },
    {
      id: 2,
      icon: <FaNodeJs size={24} className="text-green-600" />,
      title: "Node.js",
    },
    {
      id: 3,
      icon: <FaReact size={24} className="text-cyan-400" />,
      title: "React",
    },
    {
      id: 4,
      icon: <SiNextdotjs size={24} className="text-white" />,
      title: "Next.js",
    },
    {
      id: 5,
      icon: <SiTailwindcss size={24} className="text-sky-400" />,
      title: "Tailwind CSS",
    },
    {
      id: 6,
      icon: <SiChakraui size={24} className="text-teal-400" />,
      title: "Chakra UI",
    },
    {
      id: 7,
      icon: <SiPuppeteer size={32} className="text-green-500" />,
      title: "Puppeteer",
    },
    {
      id: 8,
      icon: <FaStripe size={36} className="text-indigo-600" />,
      title: "Stripe",
    },
    {
      id: 9,
      icon: <FaWhatsapp size={24} className="text-green-500" />,
      title: "Whatsapp API",
    },
    {
      id: 10,
      icon: <SiGooglecalendar size={24} className="text-blue-600" />,
      title: "Google Calendar API",
    },
    {
      id: 11,
      icon: <SiTypescript size={24} className="text-blue-600" />,
      title: "TypeScript",
    },
    {
      id: 12,
      icon: <SiPostgresql size={24} className="text-blue-600" />,
      title: "PostgreSQL",
    },
    {
      id: 13,
      icon: <SiMongodb size={24} className="text-green-600" />,
      title: "MongoDB",
    },
    // { id: 14, icon: <SiDynamodb size={24} className="text-blue-400" /> },
    {
      id: 15,
      icon: <SiVercel size={24} className="text-black " />,
      title: "Vercel",
    },
    {
      id: 16,
      icon: <SiCloudflare size={24} className="text-orange-400" />,
      title: "Cloudflare",
    },
    // Placeholders for missing icons:
    {
      id: 17,
      // LogRocket
      icon: (
        <BsFillRocketFill
          size={24}
          className="text-white bg-purple-600 rounded-full p-1"
        />
      ),
      title: "LogRocket",
    },
    {
      id: 18,
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* white Gemini logo */}
          <RiGeminiFill
            size={22}
            className="relative text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
          />
        </div>
      ),
      title: "Gemini API",
    },
  ];

  return (
    <div className=" w-full overflow-hidden flex flex-col gap-4 ">
      <div className="bg-gradient-to-l from-purple-500/10 via-transparent to-cyan-400/0 p-1 rounded-lg ">
        <div className=" container mx-auto flex gap-4 animate-scroll  justify-between flex-wrap">
          <TooltipProvider>
            {[...icons].map((item, i) => (
              <Tooltip key={i}>
                <TooltipTrigger className="w-10 h-10 flex items-center justify-center rounded-lg ">
                  {item.icon}
                </TooltipTrigger>

                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
      <footer className="hidden lg:block text-sm text-muted-foreground text-center">
        Hover icons to read.
      </footer>
    </div>
  );
}

export default AnimatedExpertise;
