import Link from "next/link";

async function getUsers() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default async function UserList() {
  const users = await getUsers();

  return (
    <>
      {users &&
        users.map((user) => (
          <div key={user.id} className="card my-5">
            <h3>{user.name}</h3>
            <div className="flex place-content-end">
              <Link
                className="hover:underline px-2 text-primary"
                href={`/users/${user.id}`}
              >
                Contact
              </Link>
              <Link
                href={`/users/posts/${user.id}`}
                className="hover:underline px-2 text-primary"
              >
                Posts
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
