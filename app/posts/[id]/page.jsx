import { notFound } from "next/navigation"
async function getPost(id) {
    const res = await fetch(`https://dummyapi.online/api/blogposts/${id}`, {
      next:{
        revalidate: 60
      }
    })
    if (!res.ok) {
      notFound()
    }
    return res.json()
  }

export default async function PostDetails({params}) {
    const post = await getPost(params.id)

  return (
    <main>
        <h2>{post.title}</h2>
        <small>Published by {post.author} - {post.date_published}</small>
        <p>{post.content}</p>
    </main>
  )
}
