// components/ArcCircle.tsx
import React from "react";
import { FileCode } from "lucide-react";
import { Database } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { FlaskConical } from "lucide-react";
import { CreditCard } from "lucide-react";

type ArcCircleProps = {
  size?: number; // px
  thickness?: number; // px
  position?: "left" | "right";
  color?: string;
  innerBg?: string; // inner mask bg (match page background)
  className?: string;
  children?: React.ReactNode;
  icon?: "code" | "database" | "transparency" | "frontend" | "test" | "payment";
};

export function ArcCircle({
  size = 220,
  thickness = 7,
  position = "left",
  className = "",
  children,
  icon = "code",
}: ArcCircleProps) {
  const leftStart = 272;
  const leftEnd = 450;
  const rightStart = 450;
  const rightEnd = 272;

  const start = position === "left" ? leftStart : rightStart;
  const end = position === "left" ? leftEnd : rightEnd;

  // normalize span (positive)
  const span = (end - start + 360) % 360 || 360;
  // conic-gradient 'from' rotates where 0deg is at 3 o'clock, so we use from = start - 90 to move 0deg to 12 o'clock
  const fromDeg = start - 90;

  // gradient: colored arc for 'span' degrees, then transparent
  const gradient = `conic-gradient(
    from ${fromDeg}deg,
    ${
      position === "left"
        ? "rgba(34,211,238,0.8) 0deg, rgba(168,85,247,0.4) "
        : "rgba(168,85,247,0.8) 0deg, rgba(34,211,238,0.4) "
    }

    calc(${span}deg * 0.7),
    transparent ${span}deg 360deg
  )`;
  return (
    <div
      className={`relative rounded-full flex flex-col items-center justify-center ${className}  bg-background`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* faint base ring (optional) */}
      <div
        className="absolute rounded-full "
        style={{
          inset: 0,
          border: `2px solid rgba(255,255,255,0.06)`,
          boxSizing: "border-box",
        }}
      />

      {/* arc */}
      <div
        className="absolute rounded-full "
        style={{
          inset: -4,
          backgroundImage: gradient,
          // ensure gradient renders crisply on Safari/Chrome
          WebkitMaskImage: "none",
        }}
      />

      {/* inner mask to create ring effect */}
      <div
        className="absolute  rounded-full bg-background"
        style={{
          left: thickness,
          top: thickness,
          right: thickness,
          bottom: thickness,
        }}
      />
      <div
        className={`absolute top-16 h-16 w-16 rounded-full bg-background 
              bg-gradient-to-r from-cyan-400/40 to-purple-500/40 flex justify-center items-center
              ${
                position === "left"
                  ? "-left-8"
                  : position === "right"
                  ? "-right-8"
                  : ""
              }`}
      >
        <div className="flex justify-center items-center h-12 w-12 bg-background/10 backdrop-blur-sm rounded-full ">
          {icon === "code" && <FileCode className="text-cyan-400 " size={24} />}
          {icon === "database" && (
            <Database className="text-cyan-400" size={24} />
          )}
          {icon === "transparency" && (
            <HeartHandshake className="text-cyan-400" size={24} />
          )}
          {icon === "frontend" && (
            <MonitorSmartphone className="text-cyan-400" size={24} />
          )}
          {icon === "test" && (
            <FlaskConical className="text-cyan-400" size={24} />
          )}
          {icon === "payment" && (
            <CreditCard className="text-cyan-400" size={24} />
          )}
        </div>
      </div>

      {/* content placed above arc */}
      <div className="relative z-10 flex pl-2 text-secondary">{children}</div>
    </div>
  );
}
