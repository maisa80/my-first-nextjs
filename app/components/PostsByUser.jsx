import { notFound } from "next/navigation";
import Link from "next/link";
import BackToUserList from "./BackToUserList";

async function getPostsByUserId(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
async function getUser(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
async function PostsByUser({ params }) {
  const posts = await getPostsByUserId(params.id);
  const user = await getUser(params.id);
  return (
    <main>
      <BackToUserList />
      <h2>{user.name} Posts</h2>
      <h3 className="pt-8 text-primary flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <Link
          href={`/users/posts/createpost/${user.id}`}
          className="hover:underline px-2 text-primary"
        >
          Create a post
        </Link>
      </h3>

      {posts &&
        posts.map((post) => (
          <div key={post.id} className="card my-5">
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 200)}...</p>
            </Link>
          </div>
        ))}
    </main>
  );
}

export default PostsByUser;
