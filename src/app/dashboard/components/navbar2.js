"use client"

import { signOut, useSession } from "next-auth/react";

export default function Navbar2() {
  const { data: session, status } = useSession();

  return (
    <nav className="w-full bg-white px-10 sm:px-8 md:px-16 py-3 flex flex-wrap items-center justify-between z-50 shadow-md">

  {/* Logo */}
  <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
    resume<span className="text-green-500">.</span>
  </div>

  {/* Actions */}
  <div className="flex items-center gap-3 sm:gap-6 mt-3 sm:mt-0">

    <div className="hidden sm:block">
      {status === "loading" && (
        <h2 className="text-gray-700 text-sm sm:text-base">
          Loading...
        </h2>
      )}

      {status === "authenticated" && (
        <h2 className="text-gray-700 text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">
          Hello, {session.user?.name}
        </h2>
      )}
    </div>

    <button
      onClick={() =>
        signOut({ redirect: true, callbackUrl: "/login" })
      }
      className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-300 text-gray-700 text-sm sm:text-base hover:bg-gray-100 transition"
    >
      Logout
    </button>
  </div>
</nav>

  );
}
