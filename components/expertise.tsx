"use client";
import React from "react";
import { ArcCircle } from "@/components/ui/arc-circle";
import MainHeading, { Paragraph } from "./text";
import { useSectionInView } from "@/lib/hooks";

function Expertise() {
  const { ref } = useSectionInView("Skills");
  return (
    <div ref={ref} className="relative overflow-hidden" id="skills">
      <div className="container mx-auto  flex items-center flex-col justify-center ">
        <div className="w-full mb-16 px-8">
          <MainHeading text="How I work" className="text-cyan-500" />
          <Paragraph
            className="max-w-2xl mt-4"
            text="I explore my skills and use them to build projects and learn new things."
          />
        </div>
        <div className="relative max-w-[800px] w-full min-h-[700px] flex flex-col  items-center justify-center my-8">
          {/* === Central glowing orb === */}
          <div className="hidden z-20 h-28 w-28 rounded-full lg:flex items-center justify-center bg-gradient-to-b from-cyan-400 to-purple-500/80 shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_60px_rgba(105,78,251,0.5),0_0_90px_rgba(105,78,251,0.4)]">
            <h3 className="text-white font-semibold">Expertise</h3>
          </div>
          {/* === Horizontal Line with circles === */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 w-[800px] -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-full border-t-2 border-dotted border-cyan-500/30 ">
              {/* Left Circle */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2">
                <ArcCircle position="left" icon="frontend">
                  <div className="flex flex-col items-center justify-start gap-2 ">
                    <h2 className="text-cyan-400 w-full text-left ">
                      Frontend Developer
                    </h2>
                    <p className="text-xs w-full text-start leading-relaxed ">
                      I use Next.js, <br /> Tailwind CSS, and
                      <br /> TypeScript to build <br /> user interfaces.
                    </p>
                  </div>
                </ArcCircle>
              </div>
              {/* Right Circle */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2">
                <ArcCircle position="right" icon="database">
                  <div className="flex flex-col items-center justify-start gap-2 ">
                    <h2 className="text-cyan-400 w-full text-left ">
                      Backend Developer
                    </h2>
                    <p className="text-xs w-full text-start leading-relaxed ">
                      I work with Node.js and ,
                      <br /> Express and I have <br /> experience with both{" "}
                      <br /> SQL and NoSQL databases.
                    </p>
                  </div>
                </ArcCircle>
              </div>
            </div>
          </div>
          {/* === Diagonal +45 with circles === */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="relative w-full border-t-2 border-dotted border-cyan-500/30 border">
              {/* <div className="absolute right-0 top-0 w-8 h-8 rounded-full bg-cyan-500" /> */}

              {/* Top Right */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 -rotate-45">
                <ArcCircle position="right" icon="payment">
                  <div className="flex flex-col items-center justify-start gap-2 ">
                    <h2 className="text-cyan-400 w-full text-left ">Webhook</h2>
                    <p className="text-xs w-full text-start leading-relaxed ">
                      I worked with <br /> webhooks of Stripe, <br /> Whatsapp,
                      and GCP <br /> and many more.
                      <br />
                    </p>
                  </div>
                </ArcCircle>
              </div>
              {/* Bottom Left */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-45">
                <ArcCircle position="left" icon="code">
                  <div className="flex flex-col items-center justify-start gap-2 ">
                    <h2 className="text-cyan-400 w-full text-left ">
                      Language
                    </h2>
                    <p className="text-xs w-full text-start leading-relaxed  ">
                      I primarily work with
                      <br /> TypeScript and also
                      <br /> have expertise <br /> on Python.
                    </p>
                  </div>
                </ArcCircle>
              </div>
            </div>
          </div>
          {/* === Diagonal -45 with circles === */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 -rotate-45">
            <div className="relative w-full border-t-2 border-dotted border-cyan-500/30">
              {/* Top Left */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 rotate-45">
                <ArcCircle position="left" icon="transparency">
                  <div className="flex flex-col items-center justify-start gap-2 ">
                    <h2 className="text-cyan-400 w-full text-left ">Care</h2>
                    <p className="text-xs w-full text-start leading-relaxed ">
                      I worked with <br /> Logrocket, Cloudfare, <br /> and
                      Vercel to deploy <br /> and monitor my projects.
                      <br />
                    </p>
                  </div>
                </ArcCircle>
              </div>
              {/* Bottom Right */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 rotate-45">
                <ArcCircle position="right" icon="test">
                  <div className="flex flex-col items-center justify-start gap-2 ">
                    <h2 className="text-cyan-400 w-full text-left ">Testing</h2>
                    <p className="text-xs w-full text-start leading-relaxed ">
                      I worked with <br /> Puppeteer, React Testing <br />{" "}
                      Library, and Cypress to <br /> test my projects.
                      <br />
                    </p>
                  </div>
                </ArcCircle>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className=" lg:hidden grid grid-col-1 md:grid-cols-2 gap-4 w-fit">
            <ArcCircle position="left" icon="frontend">
              <div className="flex flex-col items-center justify-start gap-2 ">
                <h2 className="text-cyan-400 w-full text-left ">
                  Frontend Developer
                </h2>
                <p className="text-xs w-full text-start leading-relaxed ">
                  I use Next.js, <br /> Tailwind CSS, and
                  <br /> TypeScript to build <br /> user interfaces.
                </p>
              </div>
            </ArcCircle>
            <ArcCircle position="right" icon="database">
              <div className="flex flex-col items-center justify-start gap-2 ">
                <h2 className="text-cyan-400 w-full text-left ">
                  Backend Developer
                </h2>
                <p className="text-xs w-full text-start leading-relaxed ">
                  I work with Node.js and ,
                  <br /> Express and I have <br /> experience with both <br />{" "}
                  SQL and NoSQL databases.
                </p>
              </div>
            </ArcCircle>
            <ArcCircle position="left" icon="code">
              <div className="flex flex-col items-center justify-start gap-2 ">
                <h2 className="text-cyan-400 w-full text-left ">Language</h2>
                <p className="text-xs w-full text-start leading-relaxed  ">
                  I primarily work with
                  <br /> TypeScript and also
                  <br /> have expertise <br /> on Python.
                </p>
              </div>
            </ArcCircle>
            <ArcCircle position="right" icon="payment">
              <div className="flex flex-col items-center justify-start gap-2 ">
                <h2 className="text-cyan-400 w-full text-left ">Webhook</h2>
                <p className="text-xs w-full text-start leading-relaxed ">
                  I worked with <br /> webhooks of Stripe, <br /> Whatsapp, and
                  GCP <br /> and many more.
                  <br />
                </p>
              </div>
            </ArcCircle>

            <ArcCircle position="left" icon="transparency">
              <div className="flex flex-col items-center justify-start gap-2 ">
                <h2 className="text-cyan-400 w-full text-left ">Care</h2>
                <p className="text-xs w-full text-start leading-relaxed ">
                  I worked with <br /> Logrocket, Cloudfare, <br /> and Vercel
                  to deploy <br /> and monitor my projects.
                  <br />
                </p>
              </div>
            </ArcCircle>
            <ArcCircle position="right" icon="test">
              <div className="flex flex-col items-center justify-start gap-2 ">
                <h2 className="text-cyan-400 w-full text-left ">Testing</h2>
                <p className="text-xs w-full text-start leading-relaxed ">
                  I worked with <br /> Puppeteer, React Testing <br /> Library,
                  and Cypress to <br /> test my projects.
                  <br />
                </p>
              </div>
            </ArcCircle>
          </div>
        </div>

        {/* Rays*/}
        <div
          className="absolute top-[10%] -right-[450px] w-[800px] h-36
              bg-gradient-to-r from-purple-400/30 via-purple-500/10 to-transparent
              blur-2xl pointer-events-none rotate-[160deg]"
        />
        <div
          className="absolute bottom-[10%] -left-[450px] w-[800px] h-36
              bg-gradient-to-r from-cyan-400/30 via-cyan-500/10 to-transparent
              blur-2xl pointer-events-none -rotate-[8deg]"
        />
      </div>
    </div>
  );
}

export default Expertise;
