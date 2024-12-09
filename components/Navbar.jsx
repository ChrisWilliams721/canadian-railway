"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../app/context/AuthContext";

const NavBar = () => {
  const { user, googleSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function checkAuthentication() {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    }
    checkAuthentication();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
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

      {user ? (
        <div>
          <p>Welcome {user.displayName}</p>
          <p onClick={handleSignOut}>Sign Out</p>
        </div>
      ) : (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer inline-flex">
            Log In
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer inline-flex">
            Sign In
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
