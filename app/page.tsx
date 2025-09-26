import Faq from "@/components/faq";
import AnimatedExpertise from "@/components/animated-expertise";
import HeroSection from "@/components/hero-section";
import WhyToHire from "@/components/why-to-hire";
import Expertise from "@/components/expertise";
import ProjectsList from "@/components/projects-list";
import Timeline from "@/components/timeline";
import React from "react";
import Contact from "@/components/contact";

function page() {
  return (
    <div className="bg-background flex flex-col gap-16 ">
      <HeroSection />
      <AnimatedExpertise />
      <Expertise />
      <ProjectsList />
      <WhyToHire />
      <Timeline />
      <Faq />
      <Contact />
    </div>
  );
}

export default page;
