import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black",
};

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>UNO</a>
      </Link>
      <Link href="/newgame">
        <a style={linkStyle}>new game</a>
      </Link>
      <Link href="/joingame">
        <a style={linkStyle}>join a game</a>
      </Link>
    </div>
  );
}
