import classnames from "classnames";
const MAIN_COLORS = {
  green: "bg-green-900",
  gray: "bg-gray-900",
};
const JUSTIFY = {
  start: "",
  center: "justify-center",
};

export default function Main({ children, color = "gray", justify = "start" }) {
  const className = classnames([
    "flex flex-col min-h-screen",
    MAIN_COLORS[color],
    JUSTIFY[justify],
  ]);

  return <main className={className}>{children}</main>;
}
