"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");

  const checkPassword = async () => {
    try {
      await axios.post("/api/users/forgotpassword", { password });
    } catch (error: any) {
      return console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Forgot Password
        </h1>

        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            onClick={checkPassword}
            className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
