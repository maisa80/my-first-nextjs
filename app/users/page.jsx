import { Suspense } from "react"
import Loading from "../loading"
import UserList from "./UserList"

export default function Users() {
    return (
     <main>
          <h2>Authors</h2>
          <p>Find your favourite author</p>
          <Suspense fallback={<Loading/>}>
               <UserList/>
          </Suspense>
     </main>
    )
  }