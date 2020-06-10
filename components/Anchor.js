import React, { ReactNode } from "react";

export default function Anchor({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none focus:shadow-outline font-medium text-blue-800 underline"
    >
      {children}
    </a>
  );
}
