"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers, deleteUser } from "../_services/users-services";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    if (user) {
      fetchUsers();
    }
  }, [user]);

  const handleDeleteUser = async (user) => {
    try {
      await deleteUser(user);
      const updatedUsers = users.filter((u) => u.uid !== user.uid);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleModifyUser = (user) => {
    router.push(`/manageusers/modify/${user.uid}`);
  };
  console.log("User to delete:", user);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Users</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td className="px-4 py-2 border">{user.userName}</td>
              <td className="px-4 py-2 border">{user.userEmail}</td>
              <td className="px-4 py-2 border">
                <button
                  type="button"
                  onClick={() => handleDeleteUser(user)}
                  className="text-red-600 hover:text-red-900 mr-2"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => handleModifyUser(user)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
