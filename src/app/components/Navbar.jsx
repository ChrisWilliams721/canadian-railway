"use client";

import Link from "next/link";
import React from "react";
import { useUserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, googleSignIn, firebaseSignOut } = useUserAuth();
  console.log(user)

  async function handleSignIn() {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("Sign-in error:", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log("Sign-out error:", error);
    }
  }

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer inline-flex">
          <Link className="bg-red-600" href="/">
            Home
          </Link>
        </li>
        <li className="p-2 cursor-pointer inline-flex">
          <Link href="/about">About</Link>
        </li>
        <li className="p-2 cursor-pointer inline-flex">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>

      {!user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer inline-flex">
            Log In
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer inline-flex">
            Sign In
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p onClick={handleSignOut}>Sign Out</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
