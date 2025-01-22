export default async function UserProfile({ params }) {
  const { id } = params; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <p className="text-4xl">
        Profile Page <span>{id}</span>
      </p>
    </div>
  );
}