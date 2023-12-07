import User from "@/app/components/User";

export default async function UserDetails({ params }) {
  return (
    <main>
      <User params={params} />
    </main>
  );
}
