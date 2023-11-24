import { Suspense } from "react"
import PostList from "./PostList"
import Loading from "../loading"

export default function Posts() {
    return (
     <main>
          <h2>Posts</h2>
          <p>Find your best post :)</p>
          <Suspense fallback={<Loading/>}>
               <PostList/>
          </Suspense>
     </main>
    )
  }