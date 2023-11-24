import Link from "next/link";

async function getPosts() {
   // imitate delay
   await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch('https://dummyapi.online/api/blogposts', {
    next:{
      revalidate: 30
    }
  })
  return res.json()
}
export default async function PostList() {
   
  const posts = await getPosts();
  return (
    <>
      {posts && posts.map((post) => (
        <div key={post.id} className="card my-5">
          <Link href={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.content.slice(0, 200)}...</p>
          </Link>
        </div>
      ))}
    </>
  );
}
