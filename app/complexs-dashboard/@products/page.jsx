// import Link from "next/link";
// import React from "react";

// export default async function ProductsPage() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const products = await response.json();
//   return (
//     <div className="component flex-1">
//       <h2 className="font-bold text-2xl">Products Page</h2>
//       <ul>
//         {products.map((p) => (
//           <li key={p.id}>
//             <Link
//               className="text-indigo-600 underline"
//               href={`/products/${p.id}`}
//             >
//               {p.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import Link from "next/link";
import React from "react";

export default async function ProductsPage() {
  // nomni to'g'rilash
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="component flex-1">
      <h2 className="font-bold text-xl">Products page</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link
              className="text-indigo-600 underline"
              href={`/complexs-dashboard/${p.id}`}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
