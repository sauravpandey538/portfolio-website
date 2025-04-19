"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I’m a full-stack developer with a strong IT background, currently
        studying for my Bachelor's in Information Technology (BIT). I am working
        full-time as a remote developer, collaborating with global teams to
        build real, meaningful projects. Over the years, I've had the chance to
        wear many hats — from being a teacher to working alongside Japanese
        professionals. These experiences taught me not just technical skills,
        but also the importance of discipline, attention to detail, and
        respecting different cultures. I'm someone who genuinely enjoys learning
        and solving problems, and I love creating clean, user-friendly
        applications that actually help people.
      </p>

      <p>
        Outside of coding, I enjoy travelling, doing art and spending time with
        my close ones.
      </p>
    </motion.section>
  );
}
