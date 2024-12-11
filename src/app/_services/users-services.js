import React from "react";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../_utils/firebase";

export const getAllUsers = async () => {
  const usersCollection = collection(db, "users");
  const usersSnapshot = await getDocs(usersCollection);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());
  return usersList;
};
export const saveUserToFirestore = async (user) => {
  try {
    const userDoc = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDoc);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName || "Anonymous",
        email: user.email,
        createdAt: new Date(),
      });
      console.log("User saved to Firestore");
    } else {
      console.log("User already exists in Firestore");
    }
  } catch (error) {
    console.error("Error saving user to Firestore:", error);
  }
};
export const deleteUser = async (user) => {
  try {
    await deleteDoc(doc(db, "users", user.uid));
    console.log("User deleted from Firestore");
  } catch (error) {
    console.error("Error deleting user from Firestore:", error);
  }
};
export const modifyUser = async (user) => {
  try {
    await updateDoc(doc(db, "users", user.uid), {
      name: user.displayName || "Anonymous",
      email: user.email,
    });
    console.log("User updated in Firestore");
  } catch (error) {
    console.error("Error updating user in Firestore:", error);
  }
};