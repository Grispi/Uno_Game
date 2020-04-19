import Link from "next/link";
import Layout from "../components/MyLayout.js";

export default function Game() {
  return (
    <Layout>
      <h1>Uno Game</h1>
      <ul>
        <li>
          <Link href="/newgame">
            <a>Iniciar un nuevo Juego</a>
          </Link>
        </li>
        <li>
          <Link href="/joingame">
            <a> Unirse a un Juego</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
