"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default async function UserPage({ params }) {
  const router = useRouter();
  const response = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  const user = await response.json();
  return user ? (
    <div className="flex-1">
      <h2 className="font-bold text-2xl">User page - {params.id}</h2>
      <p className="font-bold">{user.name.firstname}</p>
      <p> Id: {user.id}</p>
      <p className="font-bold"> email: {user.email}</p>
      <p className="font-bold"> Username: {user.username}</p>
      <p className="font-bold"> Password: {user.password}</p>
      <div className="text-center p-6">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600 transition"
        >
          Back
        </button>
      </div>
    </div>
  ) : (
    <div className="flex-1 items-center justify-center p-4 bg-gray-50 min-h-screen text-center pt-20">
      <p className="text-gray-700 text-3xl">User not found.</p>
    </div>
  );
}
