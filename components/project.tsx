"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { Link } from "@react-email/components";
import { Button } from "@react-email/components";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Project({
  title,
  description,
  tags,
  whiteUrl,
  blackUrl,
  url,
  githubUrl,
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <div
      ref={ref}
      className="group  bg-gradient-to-b from-cyan-400 to-purple-400 p-[1px] rounded-lg"
    >
      <section className="bg-background w-full  rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem]  transition sm:group-even:pl-8 border ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-secondary">{title}</h3>
          <p className="mt-2 leading-relaxed text-secondary">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag: any, index: any) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/70 rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            {/* Website link */}
            <Button className="p-2 bg-white border border-gray-300 rounded-md hover:bg-blue-100 transition">
              <Link
                href={url}
                className="text-black hover:text-blue-600 transition-colors"
              >
                <TbWorld size={20} />
              </Link>
            </Button>

            {/* Github link */}
            {githubUrl && (
              <Button className="p-2 bg-white border border-gray-300 rounded-md hover:bg-blue-100 transition">
                <Link
                  href={githubUrl}
                  className="text-black hover:text-blue-600 transition-colors"
                >
                  <FaGithub size={20} />
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Image
          src={theme === "light" ? whiteUrl : blackUrl}
          alt="Project I worked on"
          quality={95}
          className="pointer-events-none absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
    transition 
    group-hover:scale-[1.04]
    group-hover:-translate-x-3
    group-hover:translate-y-3
    group-hover:-rotate-2

    group-even:group-hover:translate-x-3
    group-even:group-hover:translate-y-3
    group-even:group-hover:rotate-2

    group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </div>
  );
}
