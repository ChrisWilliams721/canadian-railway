"use client";
import React from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { auth } from "../_utils/firebase"; // Ensure you have a firebase config
import { signOut } from "firebase/auth";    ``
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { saveUserToFirestore } from "../_services/users-services";

export default function NavBar() {
  const { user, logOut, signIn } = useUserAuth();
  const router = useRouter();

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => { 
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user to Firestore
      await saveUserToFirestore(user);
      console.log("User signed in and saved to Firestore:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Handle Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Pass auth if you're using firebase's signOut
      logOut(); // Call your custom logout function if needed
    } catch (error) {
      console.error("Logout Error: ", error.message);
    }
  };
  console.log(user);
  return (

    <div className="h-24 flex items-center justify-between px-4 shadow-md">
      {/* LEFT */}
      <div className="hidden md:block lg:w-[20%]">
        <Link href="/" className="text-2xl font-bold">
          Railway App
        </Link>
      </div>
      {/* CENTER */}
      {/* Add navigation links if needed */}
      <div className="hidden md:flex md:w-[50%] justify-center gap-4">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <button
          type="button"
          onClick={() => router.push("/pages/manageusers")}
          className="hover:underline"
        >
          Schedule
        </button>
        <Link href="/weather" className="hover:underline">
          Weather
        </Link>
        <Link href="/manageusers">
          <button className="hover:underline">Manage Users</button>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-[30%] flex items-center justify-end gap-4 text-sm">
        {user ? (
          <>
            <span className="font-medium">{user?.displayName || "Anonymous"}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Sign In with Google
          </button>
        )}
      </div>
    </div>
  );
}
