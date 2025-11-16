"use client";
import React from "react";
import { generateImg, generateParagraph, Console } from "devkit-lite";
import Image from "next/image";

function TestNpm() {
  console.log(generateImg(5, 300, 200));
  console.log(generateParagraph(15));
  Console(`{ message: "Database connected successfully ccc!" }`, "response");
  Console("Database connected successfully ccc!", "database");
  Console("Database connected successfully ccc!", "debug");
  Console("Database connected successfully ccc!", "info");
  Console("Connected to database!", "database");
  Console(
    {
      user: "Saurav",
      status: "active",
      users: [
        { name: "John", age: 20 },
        { name: "Jane", age: 21 },
      ],
    },
    "response"
  );
  Console([1, 2, 3, 4], "debug");
  Console({ nested: { a: 1, b: 2 } }, "info");

  return (
    <div>
      <Image src={generateImg()} alt="test" width={300} height={200} />
      <p className="text-white">{generateParagraph()}</p>
    </div>
  );
}

export default TestNpm;
