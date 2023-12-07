import { notFound } from "next/navigation";

async function getComments(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
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

async function Comments({ params }) {
  const comments = await getComments(params.id);
  return (
    <main>
      <h2 className="pt-16">Comments</h2>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="card my-5">
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
    </main>
  );
}

export default Comments;
