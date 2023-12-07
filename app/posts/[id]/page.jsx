import Comments from "@/app/components/Comments";
import Details from "@/app/components/Details";

export default async function PostDetails({ params }) {
  return (
    <main>
      <Details params={params} />
      <Comments params={params} />
    </main>
  );
}
