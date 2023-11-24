import Link from "next/link";

async function getUsers() {
   // imitate delay
   await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch('https://dummyapi.online/api/users', {
    next:{
      revalidate: 30
    }
  })
  return res.json()
}
export default async function UserList() {
   
  const users = await getUsers();
  return (
    <>
      {users && users.map((user) => (
        <div key={user.id} className="card my-5">
          <Link href={`/users/${user.id}`}>
          <h3>{user.name}</h3>
          
          </Link>
        </div>
      ))}
    </>
  );
}
