import classnames from "classnames";
import React, { MouseEvent, ReactNode } from "react";

const BUTTON_COLORS = {
  green: [
    "bg-green-300",
    "focus:bg-green-500",
    "text-green-800",
    "hover:text-white",
  ],
  red: ["bg-red-500", "focus:bg-red-500", "hover:bg-red-700", "text-white"],
  yellow: ["bg-yellow-300", "focus:bg-yellow-500", "text-yellow-800"],
  gray: ["bg-gray-300", "focus:bg-gray-500", "text-white"],
};

export default function Button({
  ariaLabel,
  children,
  className,
  color = "yellow",
  disabled,
  onClick,
  onBlur,
  type = "button",
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={classnames([
        (className =
          "w-full font-medium h-12 px-4 py-2 rounded text-center uppercase"),
        "focus:outline-none focus:shadow-outline",
        "duration-150 ease-in-out transition",
        "disabled:opacity-50",
        className,
        [...BUTTON_COLORS[color]],
      ])}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
    >
      <span className="flex items-center justify-center w-full">
        {children}
      </span>
    </button>
  );
}
