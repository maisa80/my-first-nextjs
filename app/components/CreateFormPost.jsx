"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateFormPost({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(params.id);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    //resource will not be really updated on the server but it will be faked as if.
    //https://jsonplaceholder.typicode.com/guide/

    const newPost = { id: 101, title, userId, body };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/posts");
    }
    //console log data to make sure that the create post form is posting data
    //{"id": 101, "title": "test","userId": "1", "body": "test"}

    console.log(newPost);
  };

  return (
    <main>
      <h2>Create a post</h2>
      <p>Author Id: {userId}</p>
      <form onSubmit={handleSubmit} className="w-1/2">
        <label>
          <span>Title:</span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Body</span>
          <textarea
            type="text"
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <button className="btn-primary" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Post</span>}
        </button>
      </form>
    </main>
  );
}
