import { notFound } from "next/navigation"

async function getUser(id) {
   // imitate delay
   await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch(`https://dummyapi.online/api/users/${id}`, {
      next:{
        revalidate: 60
      }
    })
    if (!res.ok) {
      notFound()
    }
    return res.json()
  }

export default async function UserDetails({params}) {
    const user = await getUser(params.id)

  return (
    <main>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </main>
  )
}

