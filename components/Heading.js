import React, { ReactNode } from "react";
import classnames from "classnames";

const HEADER_STYLES = {
  h1: ["text-xl", "md:text-2xl"],
  h2: ["text-lg", "md:text-xl"],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
};
const HEADER_COLORS = {
  white: "text-white",
  black: "text-black",
};

export default function Heading({
  children,
  type = "h1",
  textCenter = true,
  color = "black",
  margin = "0",
}) {
  const Type = type;

  const className = classnames([
    "font-medium",
    textCenter ? "text-center" : null,
    ...HEADER_STYLES[type],
    HEADER_COLORS[color],
    `m-${margin}`,
  ]);

  return <Type className={className}>{children}</Type>;
}
