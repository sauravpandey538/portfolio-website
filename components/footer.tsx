import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Saurav. All rights reserved.
      </small>
      <p className="text-xs">
        Let's connect and collaborate to create something amazing together!
      </p>
    </footer>
  );
}
