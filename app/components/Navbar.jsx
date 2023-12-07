import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="helpdisk"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href="/">Dashboard</Link>
      <Link href="/posts">Blog</Link>
      <Link href="/users">Authors</Link>
      <Link href="/random">Three Random facts</Link>
      <Link href="/cuteAnimals">Cute Animals</Link>
      <Link href="/joke">Smiley Joke</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
