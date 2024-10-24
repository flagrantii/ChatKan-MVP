"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">MyApp</Link>
        <div className="space-x-4">
          {session ? (
            <>
              <span className="mr-4">Signed in as {session.user?.name}</span>
              <button onClick={() => signOut()} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Sign out</button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Sign in</Link>
              <Link href="/auth/signup" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}