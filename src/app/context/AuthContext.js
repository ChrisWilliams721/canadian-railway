// Managing authentication state in a React application

"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../_utils/firebase";

// Create a new context called AuthContext
// Purpose: To share authentication-related data across components without prop drilling.
const AuthContext = createContext();

// Create a component that passes the AuthContext values to all components wrapped in the provider
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook called useUserAuth
// Allows any component using this hook to access and retrieve the value provided by AuthContext.Provider
export const useUserAuth = () => {
  return useContext(AuthContext);
};
