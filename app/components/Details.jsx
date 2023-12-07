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
async function Details({ params }) {
  const post = await getPost(params.id);
  return (
    <main>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
}

export default Details;
