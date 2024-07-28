import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-40">
      <div className="text-center">
        <h3 className="font-medium text-5xl">
          Welcome to the Notes App
        </h3>
        <div className="mt-10 flex gap-10 justify-center">
          <Link href="/notes" className="bg-purple-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-purple-400 duration-300">Get Started</Link>
          <Link href="/notes" className="bg-blue-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-blue-400 duration-300">Note List</Link>
        </div>
      </div>
    </main>
  );
}
