"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function UserProfile({ params }: any) {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const userId = params.id;

  const verifyEmail = async () => {
    try {
      console.log(userId);
      await axios.post(`/api/users/verifyemailmessage`, { id: userId });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page
        <span className="p-2 bg-indigo-500">{userId}</span>
      </p>
      <button onClick={logout}>Logout</button>
      <button onClick={verifyEmail}>Verify</button>
    </div>
  );
}
