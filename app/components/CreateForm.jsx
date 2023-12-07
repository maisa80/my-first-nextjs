"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    //resource will not be really updated on the server but it will be faked as if.
    //https://jsonplaceholder.typicode.com/guide/
    const newUser = { id: 11, name, username, email };

    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/users");
    }
    //console log data to make sure that the create user form is posting data
    //{"id": 11,"name": "test","username": "test","email": "test@gmail.com"}

    console.log(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>User Name:</span>
        <input
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add User</span>}
      </button>
    </form>
  );
}
