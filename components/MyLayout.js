import Header from "./Header";

export default function Layout(props) {
  return (
    <nav>
      <Header />
      {props.children}
    </nav>
  );
}
