import classnames from "classnames";
const MAIN_COLORS = {
  green: "bg-green-900",
  gray: "bg-gray-900",
};
const JUSTIFY = {
  start: "",
  center: "justify-center",
};

function setViewportHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("font-size", `${vh * 2}px`);
}

if (typeof window !== "undefined") {
  // We listen to the resize event
  window.addEventListener("resize", setViewportHeight);
  setViewportHeight();
}

export default function Main({ children, color = "gray", justify = "start" }) {
  const className = classnames([
    "flex flex-col height-screen",
    MAIN_COLORS[color],
    JUSTIFY[justify],
  ]);

  return <main className={className}>{children}</main>;
}
