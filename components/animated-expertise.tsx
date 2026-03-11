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
  SiGooglecloud,
  SiAmazon,
} from "react-icons/si";
import { BsFillRocketFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiGeminiFill, RiOpenaiFill } from "react-icons/ri";
import { Database } from "lucide-react";
import { SiFirebase } from "react-icons/si";

function AnimatedExpertise() {
  const icons = [
    // Frontend
    {
      id: 1,
      icon: <SiNextdotjs size={24} className="text-white" />,
      title: "Next.js",
    },
    {
      id: 2,
      icon: <FaReact size={24} className="text-cyan-400" />,
      title: "React",
    },
    {
      id: 3,
      icon: <SiTypescript size={24} className="text-blue-600" />,
      title: "TypeScript",
    },
    {
      id: 4,
      icon: <SiTailwindcss size={24} className="text-sky-400" />,
      title: "Tailwind CSS",
    },
    {
      id: 5,
      icon: <SiChakraui size={24} className="text-teal-400" />,
      title: "Chakra UI",
    },

    // Backend
    {
      id: 6,
      icon: <FaNodeJs size={24} className="text-green-600" />,
      title: "Node.js",
    },
    {
      id: 7,
      icon: <SiPuppeteer size={32} className="text-green-500" />,
      title: "Puppeteer",
    },

    // AI / APIs
    {
      id: 8,
      icon: <RiOpenaiFill size={24} className="text-white" />,
      title: "ChatGPT / OpenAI API",
    },
    {
      id: 9,
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          <RiGeminiFill
            size={22}
            className="relative text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
          />
        </div>
      ),
      title: "Gemini API",
    },
    {
      id: 10,
      icon: <FaWhatsapp size={24} className="text-green-500" />,
      title: "WhatsApp API",
    },
    {
      id: 11,
      icon: <SiGooglecalendar size={24} className="text-blue-600" />,
      title: "Google Calendar API",
    },
    {
      id: 12,
      icon: <FaStripe size={36} className="text-indigo-600" />,
      title: "Stripe",
    },

    // Databases
    {
      id: 13,
      icon: <SiPostgresql size={24} className="text-blue-600" />,
      title: "PostgreSQL",
    },
    {
      id: 14,
      icon: <SiMongodb size={24} className="text-green-600" />,
      title: "MongoDB",
    },
    {
      id: 15,
      icon: <Database size={24} className="text-blue-400" />,
      title: "DynamoDB",
    },

    // Cloud / Deployment
    {
      id: 16,
      icon: <SiAmazon size={24} className="text-orange-400" />,
      title: "AWS",
    },
    {
      id: 17,
      icon: <SiGooglecloud size={24} className="text-blue-500" />,
      title: "Google Cloud (GCP)",
    },
    {
      id: 18,
      icon: <SiVercel size={24} className="text-black" />,
      title: "Vercel",
    },
    {
      id: 19,
      icon: <SiCloudflare size={24} className="text-orange-400" />,
      title: "Cloudflare",
    },

    // Tools
    {
      id: 20,
      icon: (
        <BsFillRocketFill
          size={24}
          className="text-white bg-purple-600 rounded-full p-1"
        />
      ),
      title: "LogRocket",
    },
    {
      id: 21,
      icon: <SiPostman size={24} className="text-orange-500" />,
      title: "Postman",
    },
    {
      id: 22,
      icon: (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 p-2">
          <SiFirebase size={24} className="text-white" />
        </div>
      ),

      title: "Firebase",
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
