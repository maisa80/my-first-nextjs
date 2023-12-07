import { notFound } from "next/navigation";
import BackToUserList from "./BackToUserList";


async function getUser(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

async function User({ params }) {
  const user = await getUser(params.id);
  return (
    <main>
      <h2>{user.name}</h2>
      <p>E-mail: {user.email}</p>
      <p>Address:</p>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zip Code: {user.address.zipcode}</p>
      <BackToUserList />
    </main>
  );
}

export default User;
