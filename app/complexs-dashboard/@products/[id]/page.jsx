"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const router = useRouter();
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();
  return (
    <div className="flex-1">
      <h2 className="font-bold">Product page - {params.id}</h2>
      {/* <Image
        src={product.image}
        width={400}
        height={500}
        alt={product.title}
        className="object-contain w-full h-72"
      /> */}
      <p>
        <span className="font-bold ">title:</span> {product.title}
      </p>
      <p>
        <span className="font-bold ">Price:</span>Price: {product.price}
      </p>
      <p>
        <span className="font-bold ">Description:</span>Description:
        {product.description}
      </p>
      <p>
        <span className="font-bold ">Category:</span>
        {product.category}
      </p>

      <div className="p-6 text-center">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
