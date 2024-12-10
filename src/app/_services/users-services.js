import React from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '../_utils/firebase'
import { create } from 'axios';

export const getAllUsers = async () => {
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    return usersList;
};
export const saveUser = async (user) => {
    try {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName || "Anonymous",
          email: user.email,
          createdAt: new Date(),
        });
        console.log("User saved to Firestore");
      } catch (error) {
        console.error("Error saving user to Firestore:", error);
      }
};