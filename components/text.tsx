import React from "react";
import { cn } from "@/lib/utils";

export default function MainHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1 className={cn("text-4xl font-bold text-secondary", className)}>
      {text}
    </h1>
  );
}

export function SubHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-2xl font-bold text-secondary", className)}>
      {text}
    </h2>
  );
}

export function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-lg font-bold text-secondary", className)}>
      {text}
    </h2>
  );
}

export function Paragraph({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <p className={cn("text-sm text-secondary", className)}>{text}</p>;
}
