import Link from "next/link";
import Heading from "~/components/Heading";
import Container from "~/components/Container";

export default function Header() {
  return (
    <header className="w-full h-12 bg-white px-4 py-2">
      <Container size="large">
        <div className="flex items-center justify-between">
          <Heading type="h1">
            <Link href="/">
              <span className="duration-150 ease-in-out focus:outline-none focus:shadow-outline outline-none transition">
                UNO
              </span>
            </Link>
          </Heading>

          <div className="flex justify-end">
            <Link href="/">
              <a className="text-gray-700 text-center px-4 m-2">New game</a>
            </Link>
            {/* <Link href="/joingame">
              <a className="text-gray-700 text-center  px-4 m-2 ">
                Join a game
              </a>
            </Link> */}
          </div>
        </div>
      </Container>
    </header>
  );
}
