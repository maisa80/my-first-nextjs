import { Suspense } from "react"
import PostList from "../components/PostList"
import Loading from "../loading"
import PostListById from "../components/PostListById"

export default function Posts() {
    return (
     <main>
          <h2>Posts</h2>
          <p>Find your best post :)</p>
          <Suspense fallback={<Loading/>}>
               <PostList/>
               <h2>user 1</h2>
               <PostListById />
          </Suspense>
     </main>
    )
  }