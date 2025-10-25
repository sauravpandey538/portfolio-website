"use client";
import React, { useRef, useEffect, useState } from "react";
import MainHeading, { Paragraph } from "./text";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSectionInView } from "@/lib/hooks";

type Point = { x: number; y: number };

function WhyToHire() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const q1Ref = useRef<HTMLParagraphElement | null>(null);
  const q2Ref = useRef<HTMLParagraphElement | null>(null);
  const q3Ref = useRef<HTMLParagraphElement | null>(null);
  const { ref } = useSectionInView("About");

  const [lines, setLines] = useState<{ start: Point; end: Point }[]>([]);
  const [svgSize, setSvgSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current || !buttonRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      // SVG should cover the whole container
      setSvgSize({ w: containerRect.width, h: containerRect.height });

      const buttonCenterX =
        buttonRect.left + buttonRect.width / 2 - containerRect.left;
      const buttonBottomY = buttonRect.bottom - containerRect.top;

      const makeLine = (el: HTMLElement | null) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - containerRect.left;
        const topY = rect.top - containerRect.top;
        return {
          start: { x: buttonCenterX, y: buttonBottomY },
          end: { x: centerX, y: topY },
        };
      };

      setLines(
        [q1Ref.current, q2Ref.current, q3Ref.current]
          .map((q) => makeLine(q))
          .filter((l): l is { start: Point; end: Point } => l !== null)
      );
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  // Generate curved connector
  const makePath = (start: Point, end: Point) => {
    const midY = (start.y + end.y) / 2;

    // curve goes near the end, but not all the way
    const curveEndY = end.y - 10; // stop 10px before question center

    return `
      M${start.x},${start.y}
      C ${start.x},${midY} ${end.x},${midY} ${end.x},${curveEndY}
      L ${end.x},${end.y}
    `;
  };

  return (
    <div
      ref={containerRef}
      className="container mx-auto flex flex-col items-center justify-center relative "
    >
      <div
        ref={ref}
        id="about"
        className="w-full px-8 flex flex-col items-center justify-center my-8"
      >
        <MainHeading text="Why to hire me" className="text-cyan-500" />
        <Paragraph
          text="A positive and passionate person who is always looking for new challenges and opportunities to learn and grow that will surely bring a positive impact to your organization."
          className="max-w-2xl mt-4"
        />
      </div>

      {/* Email Button */}
      <div className=" z-20 flex flex-col items-center justify-center px-4  w-full">
        <Link href="mailto:hi@sauravpandey.com">
          <Button
            ref={buttonRef}
            className="bg-cyan-500/80 text-secondary transition-all hover:text-cyan-500 hover:bg-secondary shadow-[0_0_10px_rgba(0,255,255,0.6),0_0_20px_rgba(105,78,251,0.5),0_0_30px_rgba(105,78,251,0.4)] hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6),0_0_45px_rgba(255,255,255,0.4)] hover:scale-110"
          >
            Email me
          </Button>
        </Link>

        {/* Questions in Flex */}
        <div className="flex gap-6 mt-28 text-center z-20 max-w-2xl w-full  items-center justify-center overflow-hidden">
          <p ref={q1Ref} className="max-w-sm md:p-4 text-secondary">
            Strong Work Ethic <br /> & <br /> Reliability
          </p>
          <p
            ref={q2Ref}
            className="max-w-sm md:border-l-2  md:border-purple-500/60 md:p-4 text-secondary"
          >
            Team Collaboration <br /> & <br /> Communication
          </p>
          <p
            ref={q3Ref}
            className="max-w-sm md:border-l-2 md:border-purple-500/60 md:p-4 text-secondary"
          >
            Continuous Learning <br /> & <br />
            Innovation
          </p>
        </div>

        {/* Dynamic SVG Connectors */}
        <svg
          className="absolute top-0 left-0 pointer-events-none z-10"
          width={svgSize.w}
          height={svgSize.h}
        >
          <defs>
            <marker
              id="arrowhead"
              viewBox="0 0 10 10"
              refX="5" // 👈 put tip at end
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
            </marker>
          </defs>
          {lines.map((line, i) => (
            <path
              key={i}
              d={makePath(line.start, line.end)}
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

export default WhyToHire;
