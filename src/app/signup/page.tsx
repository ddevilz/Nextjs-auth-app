"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = () => {};

  return (
    <div>
      <h1>SignUp</h1>
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />

        <button onClick={onSignUp}>Sign Up</button>
        <Link href="/login">visit login page</Link>
      </div>
    </div>
  );
}
