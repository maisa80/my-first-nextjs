import { notFound } from "next/navigation";

async function getPost(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function PostDetails({ params }) {
  const post = await getPost(params.id);

  return (
    <main>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
}
