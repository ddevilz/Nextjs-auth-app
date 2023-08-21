"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState();

  const getProfileData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      const userId = res?.data.user._id
      setData(userId);
      await router.push(`/profile/${userId}`)
    } catch (error:any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []); 

  return (
    <div className="">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
    </div>
  );
}
