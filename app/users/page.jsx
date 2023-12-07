import { Suspense } from "react";
import Loading from "../loading";
import UserList from "../components/UserList";
import Link from "next/link";

export default function Users() {
  return (
    <main>
      <h2>Authors</h2>
      <h3 className="text-primary flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <Link href="/users/create" className="hover:underline">
          Create user
        </Link>
      </h3>

      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </main>
  );
}
