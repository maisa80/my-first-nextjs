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
