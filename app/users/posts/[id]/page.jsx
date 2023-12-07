import PostsByUser from "@/app/components/PostsByUser";

export default async function UserPosts({ params }) {
  return (
    <main>
      <PostsByUser params={params} />
    </main>
  );
}
