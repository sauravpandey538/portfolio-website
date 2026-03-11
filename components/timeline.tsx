"use client";
import { Badge } from "@/components/ui/badge";
import MainHeading, { Paragraph } from "./text";
import { useSectionInView } from "@/lib/hooks";

export default function CurvedTimeline() {
  const { ref } = useSectionInView("Experience");
  const markers = [
    {
      x: 50,
      y: 300,
      color: "#06b6d4",
      label: "Japanese Teacher",
      title: "N5/N4 Level",
      date: "July 2023",
    },
    {
      x: 350,
      y: 250,
      color: "#06b6d4",
      label: "CrowdBazaar Pvt. Ltd.",
      title: "Full Stack Developer",
      date: "Feb 2024",
    },
    {
      x: 650,
      y: 310,
      color: "#8b5cf6",
      label: "Texas Vol 1 Hackathon",
      title: "2nd Runner Up",
      date: "Apr 2025",
    },
    // {
    //   x: 950,
    //   y: 200,
    //   color: "#8b5cf6",
    //   label: "CrowdBazaar Pvt. Ltd.",
    //   title: "FT PERN Stack Developer",
    //   date: "Nov 2025",
    // },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden" id="experience">
      <div className=" w-full container mx-auto  my-16  md:my-32 ">
        <div>
          <MainHeading text="How I've Been Busy" className="text-cyan-500" />
          <Paragraph
            className="max-w-2xl mt-4"
            text="From teaching to coding, I've been busy with my work and my projects and also well known for my work."
          />
        </div>
        <div className="w-full overflow-x-auto px-16">
          <svg
            viewBox="0 0 1100 500"
            className="min-w-[1000px] h-auto overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gradient for the path */}
            <defs>
              <linearGradient id="timelineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* Curved path */}
            <path
              d="M 50 300 C 300 100, 700 500, 950 200"
              stroke="url(#timelineGradient)"
              strokeWidth="6"
              fill="transparent"
            />

            {/* Markers */}
            {markers.map((m, i) => (
              <g key={i}>
                {/* Circle */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="8"
                  fill={m.color}
                  stroke="white"
                  strokeWidth="3"
                />

                {/* Vertical dashed line */}
                {[...Array(6)].map((_, idx) => (
                  <line
                    key={idx}
                    x1={m.x}
                    y1={i % 2 === 0 ? m.y + 10 + idx * 8 : m.y - 10 - idx * 8}
                    x2={m.x}
                    y2={i % 2 === 0 ? m.y + 16 + idx * 8 : m.y - 4 - idx * 8}
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity={1 - idx * 0.15}
                  />
                ))}

                {/* Label */}
                <foreignObject
                  x={m.x - 80}
                  y={i % 2 === 0 ? m.y + 50 : m.y - 140}
                  width={180}
                  height={120}
                >
                  <div className="flex flex-col items-center text-center p-2 break-words">
                    <div className="text-cyan-300  font-medium">{m.label}</div>
                    <div className="text-white text-[10px] sm:text-xs md:text-sm leading-snug">
                      <Badge
                        variant="outline"
                        className="bg-[#694EFB] text-white px-2 py-0.5 text-[10px] sm:text-xs"
                      >
                        {m.title}
                      </Badge>
                      <div className="mt-1">{m.date}</div>
                    </div>
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
        <p className="block lg:hidden text-center text-muted-foreground text-sm">
          Scroll horizontally to see more experience !
        </p>

        {/* Purple ray */}
        <div
          className="absolute top-[10%] -right-[450px] w-[800px] h-36
              bg-gradient-to-r from-purple-400/30 via-purple-500/10 to-transparent
              blur-2xl pointer-events-none rotate-[140deg]"
        />

        {/* Cyan ray */}
        <div
          className="absolute top-[70%] -left-[450px] w-[800px] h-36
              bg-gradient-to-r from-cyan-400/30 via-cyan-500/10 to-transparent
              blur-2xl pointer-events-none -rotate-45"
        />
      </div>
    </div>
  );
}
