import React, { ReactNode } from "react";
import classnames from "classnames";

const HEADER_STYLES = {
  h1: ["text-3xl", "md:text-2xl"],
};
const HEADER_COLORS = {
  white: "text-white",
  black: "text-black",
};

export default function HeaderPlayer({
  children,
  type = "h1",
  textCenter = true,
  color = "black",
  margin = "0",
  marginBottom = "0",
}) {
  const Type = type;

  const className = classnames([
    "font-medium",
    textCenter ? "text-center" : null,
    ...HEADER_STYLES[type],
    HEADER_COLORS[color],
    `m-${margin}`,
    `mb-${marginBottom}`,
    `truncate`,
    `w-full`,
  ]);

  return <Type className={className}>{children}</Type>;
}
