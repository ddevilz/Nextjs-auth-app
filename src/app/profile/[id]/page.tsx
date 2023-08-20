export default function UserProfile({ params }: any) {
  return (
    <div className="">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page
        <span className="p-2 bg-indigo-500">{params.id}</span>
      </p>
    </div>
  );
}
