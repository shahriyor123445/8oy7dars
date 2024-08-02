import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-center pt-40">
      <Link
        className="bg-blue-500 p-6 border rounded-md text-white"
        href={"/complexs-dashboard"}
      >
        Go to Complexs-Dashboard
      </Link>
    </main>
  );
}
