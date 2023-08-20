"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const getProfileData = async () => {
      const res = await axios.get("/api/users/me")
      console.log(res)
      setData(res.data)
      console.log(data)
  }

  return (
    <div className="">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>

      <button onClick={logout}>Logout</button>
      <button onClick={getProfileData}>data</button>
    </div>
  );
}
