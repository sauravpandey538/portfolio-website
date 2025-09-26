"use client";

import React from "react";
import MainHeading from "./text";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { myInfo } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <div className="container mx-auto flex items-center justify-center">
      <div
        id="contact"
        ref={ref}
        className="mb-12 w-[min(100%,38rem)] text-center"
      >
        <MainHeading text="Contact me" className="text-cyan-500" />

        <p className="text-secondary mx-2 mt-4">
          Please email me directly at{" "}
          <a className="underline" href={`mailto:${myInfo.email}`}>
            {myInfo.email}
          </a>{" "}
          or you can reach me at {myInfo.phone}.
        </p>
      </div>
    </div>
  );
}
