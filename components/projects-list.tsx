"use client";

import React, { useState } from "react";
import MainHeading, { Paragraph } from "./text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Diamond, GithubIcon, StarIcon, Video } from "lucide-react";
import { Globe } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";
import { myProjects, companyProjects } from "@/lib/data";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  website: string;
  video: string;
}

const cta = [
  { id: 1, icon: <GithubIcon />, url: "https://www.google.com" },
  { id: 2, icon: <Globe />, url: "https://www.google.com" },
  { id: 3, icon: <Video />, url: "https://www.google.com" },
];

function ProjectsList() {
  const [selectedTab, setSelectedTab] = useState("work");
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <div ref={ref} className="container mx-auto  w-full" id="projects">
      <div className="flex flex-col gap-4 mb-4">
        <MainHeading
          text=" My Investments + Proud Projects"
          className="text-center text-cyan-500"
        />
        <Paragraph
          text="During my experience as a software engineer, I have had the opportunity to work on a variety of projects. Here are some of the most notable ones."
          className="text-center mb-6"
        />
      </div>

      <div className="relative w-full ">
        <Tabs
          defaultValue={selectedTab}
          onValueChange={setSelectedTab}
          className="bg-background rounded-lg p-4 2"
        >
          <TabsList className="bg-background my-16 flex justify-start items-center gap-2">
            <TabsTrigger value="work">Work Projects</TabsTrigger>
            <TabsTrigger value="personal">Personal Projects</TabsTrigger>
          </TabsList>
          <TabsContent
            value={selectedTab}
            className=" flex flex-col justify-center items-center gap-8 flex-wrap"
          >
            {showProjects(
              selectedTab === "work" ? companyProjects : myProjects
            )}

            {/* <Diamond className="absolute top-0 right-0 text-yellow-200/80 fill-current" /> */}
            <div className="absolute top-4 right-4 h-[12px] w-[12px] bg-cyan-200/80 rotate-45 " />
            <div className="absolute top-4 left-4 h-[12px] w-[12px] bg-cyan-200/80 rotate-45 " />
            <div className="absolute bottom-4 right-4 h-[12px] w-[12px] bg-cyan-200/80 rotate-45 " />
            <div className="absolute bottom-4 left-4 h-[12px] w-[12px] bg-cyan-200/80 rotate-45 " />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ProjectsList;

function showProjects(projects: any[]) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-16 mb-8">
      {projects.map((project, idx) => (
        <React.Fragment key={idx}>
          {" "}
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  );
}
