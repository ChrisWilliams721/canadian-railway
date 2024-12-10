"use client";
import React  from "react";
import { useUserAuth } from "./_utils/auth-context";
export default function Root() {
  const {user, logOut} = useUserAuth();

  return (
    <main>
      <h1>Welcome to My App</h1>
      {/* Dashboard */}
      Dashboard would be here <br/>
      {/* Login Form */}
      
    </main>
  );
}
