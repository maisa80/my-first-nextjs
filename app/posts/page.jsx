import { Suspense } from "react"
import PostList from "../components/PostList"
import Loading from "../loading"

export default function Posts() {
    return (
     <main>
          <h2>Posts</h2>
          <Suspense fallback={<Loading/>}>
               <PostList/>
          </Suspense>
     </main>
    )
  }