"use client";
import { CiLogout } from "react-icons/ci";
import { useSession, signOut, signIn } from "next-auth/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

export const LogOutButton = () => {
  const { data: session, status } = useSession();

  console.log({ status });

  if (status === "loading") {
    return (
      <div>
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <AiOutlineLoading3Quarters />
          <span className="group-hover:text-gray-700">Loading..</span>
        </button>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div>
        <button
          onClick={() => signIn()}
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        >
          <FiLogIn />
          <span className="group-hover:text-gray-700">Login</span>
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <CiLogout />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  );
};
