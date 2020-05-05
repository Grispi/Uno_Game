import Header from "./Header";

export default function Layout(props) {
  return (
    <nav className="mb-4">
      <Header />
      {props.children}
    </nav>
  );
}
