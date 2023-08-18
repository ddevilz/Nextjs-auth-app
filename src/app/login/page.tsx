"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {};

  return (
    <div>
      <h1>SignUp</h1>
      <div className="flex flex-col">
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

        <button onClick={onLogin}>Login</button>
        <Link href="/signup">visit SignUp page</Link>
      </div>
    </div>
  );
}
