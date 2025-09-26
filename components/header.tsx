"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-background/70 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-cyan-400 tracking-wider">
          Saurav.<span className="text-purple-400/60">Dev</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-4 text-sm font-medium text-secondary sm:gap-6">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "relative px-3 py-1 rounded-md transition-colors",
                  {
                    "text-secondary": activeSection === link.name,
                    "hover:text-cyan-400": activeSection !== link.name,
                  }
                )}
              >
                {link.name}

                {/* Animated highlight */}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-md bg-cyan-400/80 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-gray-400 hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden bg-background/95 backdrop-blur-md px-6 py-4 border-t border-gray-700"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-300">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setMenuOpen(false); // close menu on click
                  }}
                  className={clsx("block px-2 py-1 rounded-md", {
                    "text-white bg-cyan-400/80": activeSection === link.name,
                    "hover:text-cyan-400": activeSection !== link.name,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
