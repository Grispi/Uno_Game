import classnames from "classnames";
const MAIN_COLORS = {
  green: "bg-green-900",
  gray: "bg-gray-900",
};

export default function Main({ children, color = "gray" }) {
  const className = classnames([
    "flex flex-col min-h-screen",
    MAIN_COLORS[color],
  ]);

  return <main className={className}>{children}</main>;
}
