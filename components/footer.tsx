import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MainHeading, { Paragraph, Title } from "./text";
import { Separator } from "./ui/separator";
import { TbBrandLeetcode } from "react-icons/tb";
import { myInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="mt-16 px-6 py-12 
  bg-gradient-to-b 

  from-transparent  via-[#341861]/30  to-[#341861]/70 
  bg-background 
  text-foreground
  border-t border-border 
  transition-colors"
    >
      {" "}
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Branding + Social */}
        <div className="flex flex-col gap-4 items-start">
          <h1 className="font-bold text-2xl text-cyan-400 tracking-wider">
            Saurav.<span className="text-purple-400/60">Dev</span>
          </h1>
          <Paragraph text="Designed with ❤️ by Saurav" />

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Link
              href={myInfo.leetcode}
              target="_blank"
              className="p-2 rounded-full hover:bg-cyan-400 transition text-secondary"
            >
              <TbBrandLeetcode className="h-5 w-5" />
            </Link>
            <Link
              href={myInfo.linkedin}
              target="_blank"
              className="p-2 rounded-full hover:bg-cyan-400 transition text-secondary"
            >
              <BsLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href={myInfo.github}
              target="_blank"
              className="p-2 rounded-full hover:bg-cyan-400 transition text-secondary"
            >
              <BsGithub className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Project Links */}
        <div>
          <Title text="Project Links" className="mb-4" />
          <div className="flex flex-col gap-4 mt-2">
            <Link
              href="https://migrantminds.co.uk"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              MigrantMinds
            </Link>
            <Link
              href="https://tiffinbox.store"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              TiffinBox
            </Link>
            <Link
              href="https://founderdesk.ai/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              Founder Desk
            </Link>

            <Link
              href="https://code-sync-silk.vercel.app/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              CodeSync
            </Link>
            <Link
              href="https://paper-game-livid.vercel.app/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              Paper Game
            </Link>
            <Link
              href="https://school-grid-lyart.vercel.app/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              SchoolWorksPro
            </Link>
            <Link
              href="https://pdf.sauravpandey.com/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              SajiloPdf
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <Title text="Contact" className="mb-4" />
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href={`mailto:${myInfo.email}`}
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              Email
            </Link>
            <Link
              href={`tel:${myInfo.phone}`}
              className="hover:text-cyan-400 transition-colors text-secondary"
            >
              Phone
            </Link>
          </div>
        </div>
      </div>
      {/* Separator */}
      <Separator className="my-10 " />
      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-sm  gap-4">
        <Paragraph
          text={`© ${currentYear} Saurav.Dev. All rights reserved.`}
          className="text-center "
        />
        {/* <div className="flex gap-4">
          <Link
            href="/terms"
            className="hover:text-cyan-400 transition-colors text-secondary"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-cyan-400 transition-colors text-secondary"
          >
            Privacy
          </Link>
          <Link
            href="/cookie"
            className="hover:text-cyan-400 transition-colors text-secondary"
          >
            Cookie
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
