import Link from "next/link";
import React from "react";

export default async function UsersPage() {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();
  return (
    <div className="component flex-1">
      <h2 className="font-bold text-xl ">Products page</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link className="text-indigo-600" href={"users/${u.id}"}>
              {u.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
