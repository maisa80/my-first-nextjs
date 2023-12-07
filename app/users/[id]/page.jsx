import CreateFormPost from "@/app/components/CreateFormPost";
import User from "@/app/components/User";

export default async function UserDetails({ params }) {
  return (
    <main>
      <User params={params} />
      <CreateFormPost params={params}/>
    </main>
  );
}
