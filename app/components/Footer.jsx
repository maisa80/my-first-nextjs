import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

function Footer() {
  return (
    <>
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <Link href="/">Ninja Blog</Link>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Dashboard</Link>
            </li>
            <li>
              <Link href="/posts" className="hover:underline me-4 md:me-6">Blog</Link>
            </li>
            <li>
              <Link href="/users" className="hover:underline me-4 md:me-6">Authors</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
