"use client";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllUsers } from '../_services/users-services';
import { useUserAuth } from '../_utils/auth-context';


export default function ManageUsers() {
    const [users, setUsers] = useState([]);
    const { user } = useUserAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getAllUsers();
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        if (user) {
            fetchUsers();
        }
    }, [user]);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Users</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              
              <td className="px-4 py-2 border">{user.userName}</td>
              <td className="px-4 py-2 border">{user.userEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
